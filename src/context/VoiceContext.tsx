import React, { createContext, useContext, useState, useEffect, useRef } from "react";

interface VoiceContextType {
  isPlaying: boolean;
  isMuted: boolean;
  audioLevel: number;
  hasAutoplayBlocked: boolean;
  greetingText: string;
  playGreeting: () => void;
  pauseGreeting: () => void;
  toggleMute: () => void;
  replayGreeting: () => void;
}

const GREETING_TEXT = "Hi, welcome to my portfolio! I'm Hemant, an AI and Machine Learning Engineer. Feel free to explore my work.";

const VoiceContext = createContext<VoiceContextType | undefined>(undefined);

export const VoiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [hasAutoplayBlocked, setHasAutoplayBlocked] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const useWebSpeechRef = useRef(false);
  const speechUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const hasStartedRef = useRef(false);

  // Initialize Audio element and AnalyserNode
  useEffect(() => {
    const audio = new Audio("/greeting.wav");
    audio.preload = "auto";
    audioRef.current = audio;

    const handleEnded = () => {
      setIsPlaying(false);
      setAudioLevel(0);
      useWebSpeechRef.current = false;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };

    audio.addEventListener("ended", handleEnded);

    // Setup Web Audio API Analyser
    const setupAudioContext = () => {
      if (audioCtxRef.current) return;
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 64;
        analyser.smoothingTimeConstant = 0.5;

        const source = ctx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(ctx.destination);

        audioCtxRef.current = ctx;
        analyserRef.current = analyser;
      } catch (err) {
        console.warn("Web Audio API initialization fallback:", err);
      }
    };

    // Function to analyze live sound amplitude
    const analyzeSound = () => {
      if (analyserRef.current && audioRef.current && !audioRef.current.paused) {
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);

        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          sum += dataArray[i];
        }
        const avg = sum / dataArray.length;
        const normalized = Math.min(1, Math.max(0, (avg - 10) / 120));
        setAudioLevel(normalized);

        animFrameRef.current = requestAnimationFrame(analyzeSound);
      } else if (useWebSpeechRef.current && window.speechSynthesis.speaking) {
        const now = Date.now();
        const pulse = Math.abs(Math.sin(now / 90)) * 0.7 + Math.sin(now / 150) * 0.3;
        setAudioLevel(Math.max(0, pulse));
        animFrameRef.current = requestAnimationFrame(analyzeSound);
      } else {
        setAudioLevel(0);
      }
    };

    // Web Speech API fallback speak
    const speakViaWebSpeech = () => {
      if (!("speechSynthesis" in window)) return false;
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(GREETING_TEXT);
        utterance.rate = 0.95;
        utterance.pitch = 0.9;

        const voices = window.speechSynthesis.getVoices();
        const maleVoice = voices.find(
          (v) =>
            v.lang.startsWith("en") &&
            (v.name.toLowerCase().includes("male") ||
              v.name.toLowerCase().includes("david") ||
              v.name.toLowerCase().includes("guy") ||
              v.name.toLowerCase().includes("mark") ||
              v.name.toLowerCase().includes("george") ||
              v.name.toLowerCase().includes("uk english male"))
        );
        if (maleVoice) utterance.voice = maleVoice;

        utterance.onend = () => handleEnded();
        utterance.onerror = () => handleEnded();

        useWebSpeechRef.current = true;
        setIsPlaying(true);
        window.speechSynthesis.speak(utterance);

        const simulateLevel = () => {
          if (window.speechSynthesis.speaking) {
            const now = Date.now();
            const pulse = Math.abs(Math.sin(now / 90)) * 0.7 + Math.sin(now / 150) * 0.3;
            setAudioLevel(Math.max(0, pulse));
            animFrameRef.current = requestAnimationFrame(simulateLevel);
          } else {
            setAudioLevel(0);
            setIsPlaying(false);
            useWebSpeechRef.current = false;
          }
        };
        simulateLevel();
        hasStartedRef.current = true;
        return true;
      } catch (e) {
        console.warn("Web Speech API speak error:", e);
        return false;
      }
    };

    // Autoplay strategy on website open
    const startAutoplay = async () => {
      if (hasStartedRef.current) return;
      setupAudioContext();
      try {
        audio.muted = false;
        audio.currentTime = 0;
        await audio.play();
        setIsPlaying(true);
        hasStartedRef.current = true;
        if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
          await audioCtxRef.current.resume();
        }
        analyzeSound();
      } catch (err) {
        console.log("Audio play blocked by browser policy on mount, showing click to play overlay...", err);
        setHasAutoplayBlocked(true);
        setShowOverlay(true);
      }
    };

    // Start autoplay immediately on mount
    const timer = setTimeout(() => {
      startAutoplay();
    }, 150);

    // Global listener to trigger audio on ANY initial interaction
    const handleFirstUserInteraction = () => {
      if (!hasStartedRef.current || (audio.paused && !window.speechSynthesis.speaking)) {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        setupAudioContext();
        if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
          audioCtxRef.current.resume();
        }
        audio.currentTime = 0;
        audio.play().then(() => {
          setIsPlaying(true);
          hasStartedRef.current = true;
          setHasAutoplayBlocked(false);
          setShowOverlay(false);
          analyzeSound();
        }).catch(() => {
          speakViaWebSpeech();
          setShowOverlay(false);
        });
      }
      removeInteractionListeners();
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("click", handleFirstUserInteraction);
      window.removeEventListener("touchstart", handleFirstUserInteraction);
      window.removeEventListener("pointerdown", handleFirstUserInteraction);
      window.removeEventListener("keydown", handleFirstUserInteraction);
    };

    window.addEventListener("click", handleFirstUserInteraction);
    window.addEventListener("touchstart", handleFirstUserInteraction);
    window.addEventListener("pointerdown", handleFirstUserInteraction);
    window.addEventListener("keydown", handleFirstUserInteraction);

    return () => {
      clearTimeout(timer);
      audio.removeEventListener("ended", handleEnded);
      removeInteractionListeners();
      audio.pause();
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const playGreeting = async () => {
    setShowOverlay(false);
    if (isMuted) {
      setIsMuted(false);
      if (audioRef.current) audioRef.current.muted = false;
    }

    setHasAutoplayBlocked(false);
    hasStartedRef.current = true;

    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      await audioCtxRef.current.resume();
    }

    if (audioRef.current) {
      try {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
        setIsPlaying(true);
        useWebSpeechRef.current = false;

        const analyzeSound = () => {
          if (analyserRef.current && audioRef.current && !audioRef.current.paused) {
            const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
            analyserRef.current.getByteFrequencyData(dataArray);
            let sum = 0;
            for (let i = 0; i < dataArray.length; i++) {
              sum += dataArray[i];
            }
            const avg = sum / dataArray.length;
            const normalized = Math.min(1, Math.max(0, (avg - 10) / 120));
            setAudioLevel(normalized);
            animFrameRef.current = requestAnimationFrame(analyzeSound);
          } else {
            setAudioLevel(0);
          }
        };

        analyzeSound();
        return;
      } catch (e) {
        console.warn("Audio file play error, using Web Speech API:", e);
      }
    }

    // Web Speech Fallback
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = speechUtteranceRef.current || new SpeechSynthesisUtterance(GREETING_TEXT);
      utterance.rate = 0.95;
      utterance.pitch = 0.9;

      const voices = window.speechSynthesis.getVoices();
      const maleVoice = voices.find(
        (v) =>
          v.lang.startsWith("en") &&
          (v.name.toLowerCase().includes("male") ||
            v.name.toLowerCase().includes("david") ||
            v.name.toLowerCase().includes("guy") ||
            v.name.toLowerCase().includes("mark") ||
            v.name.toLowerCase().includes("george") ||
            v.name.toLowerCase().includes("uk english male"))
      );
      if (maleVoice) utterance.voice = maleVoice;

      useWebSpeechRef.current = true;
      setIsPlaying(true);

      utterance.onend = () => {
        setIsPlaying(false);
        setAudioLevel(0);
        useWebSpeechRef.current = false;
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        setAudioLevel(0);
        useWebSpeechRef.current = false;
      };

      window.speechSynthesis.speak(utterance);

      const simulateLevel = () => {
        if (window.speechSynthesis.speaking) {
          const now = Date.now();
          const pulse = Math.abs(Math.sin(now / 90)) * 0.7 + Math.sin(now / 150) * 0.3;
          setAudioLevel(Math.max(0, pulse));
          animFrameRef.current = requestAnimationFrame(simulateLevel);
        } else {
          setAudioLevel(0);
          setIsPlaying(false);
        }
      };
      simulateLevel();
    }
  };

  const pauseGreeting = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setAudioLevel(0);
  };

  const toggleMute = () => {
    const newMute = !isMuted;
    setIsMuted(newMute);
    if (audioRef.current) {
      audioRef.current.muted = newMute;
    }
    if (newMute && isPlaying) {
      pauseGreeting();
    } else if (!newMute && !isPlaying) {
      playGreeting();
    }
  };

  const replayGreeting = () => {
    playGreeting();
  };

  return (
    <VoiceContext.Provider
      value={{
        isPlaying,
        isMuted,
        audioLevel,
        hasAutoplayBlocked,
        greetingText: GREETING_TEXT,
        playGreeting,
        pauseGreeting,
        toggleMute,
        replayGreeting,
      }}
    >
      {children}

      {/* Futuristic Ambient Enter Screen Overlay if browser blocked initial unmuted autoplay */}
      {showOverlay && !isPlaying && (
        <div
          onClick={() => {
            setShowOverlay(false);
            playGreeting();
          }}
          className="fixed inset-0 z-50 bg-navy/80 backdrop-blur-md flex flex-col items-center justify-center cursor-pointer transition-all duration-500 animate-fadeIn"
        >
          <div className="bg-navy/90 border border-cyan-500/40 p-8 rounded-2xl shadow-[0_0_50px_rgba(34,211,238,0.3)] text-center max-w-sm mx-4 transform transition-transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto mb-4 animate-pulse">
              <svg className="w-8 h-8 text-cyan-400 fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <h3 className="font-mono text-xl font-bold text-white mb-2 tracking-wide">CLICK TO ENTER PORTFOLIO</h3>
            <p className="font-mono text-xs text-slate-400">Tap anywhere to unblock welcome voice greeting</p>
          </div>
        </div>
      )}
    </VoiceContext.Provider>
  );
};

export const useVoiceGreeting = () => {
  const context = useContext(VoiceContext);
  if (!context) {
    throw new Error("useVoiceGreeting must be used within a VoiceProvider");
  }
  return context;
};
