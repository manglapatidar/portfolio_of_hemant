import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVoiceGreeting } from "../../context/VoiceContext";

export const LipSyncAvatar: React.FC = () => {
  const {
    isPlaying,
    audioLevel,
    playGreeting,
    replayGreeting,
  } = useVoiceGreeting();

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 shrink-0 mt-8 md:mt-0 select-none">
      {/* Ambient Glow Aura */}
      <motion.div
        className="absolute -inset-5 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-violet-600/25 to-cyan-500/20 blur-xl pointer-events-none"
        animate={{
          scale: isPlaying ? [1, 1.05 + audioLevel * 0.08, 1] : [1, 1.02, 1],
          opacity: isPlaying ? 0.85 : 0.4,
        }}
        transition={{ duration: isPlaying ? 0.15 : 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Pulsing Sound Wave Rings while Speaking */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ scale: 0.96, opacity: 0.7 }}
            animate={{ scale: 1.18 + audioLevel * 0.15, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-2xl border border-cyan-400/50 pointer-events-none shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          />
        )}
      </AnimatePresence>

      {/* Main Avatar Container Frame (Clicking photo plays/replays voice) */}
      <div 
        onClick={isPlaying ? replayGreeting : playGreeting}
        title="Click to hear Hemant's welcome voice"
        className="relative w-full h-full rounded-2xl bg-gradient-to-tr from-cyan-950/40 via-navy/60 to-violet-950/40 box-glow-cyan border border-cyan-500/40 overflow-hidden group glass-card p-0 shadow-[0_0_35px_rgba(34,211,238,0.15)] cursor-pointer"
      >
        {/* Cyber HUD Corner Brackets */}
        <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400/80 z-30 pointer-events-none" />
        <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400/80 z-30 pointer-events-none" />
        <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400/80 z-30 pointer-events-none" />
        <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400/80 z-30 pointer-events-none" />

        <div className="w-full h-full relative">
          {/* Clean Profile Image */}
          <img
            src="/Hemant.png"
            alt="Hemant Patidar"
            className={`w-full h-full object-cover object-center transition-transform duration-700 ${
              isPlaying ? "scale-[1.02]" : "group-hover:scale-105"
            }`}
            loading="eager"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/20 pointer-events-none" />

          {/* Laser Scan Line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)] z-10 opacity-60 pointer-events-none"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 3.5, ease: "linear", repeat: Infinity }}
          />

          {/* Top Badge ONLY when speaking: "HEMANT SPEAKING" */}
          <AnimatePresence>
            {isPlaying && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                className="absolute top-3 left-3 bg-navy/90 backdrop-blur-md border border-cyan-400/50 px-3.5 py-1.5 rounded-full flex items-center gap-2.5 z-20 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
                </span>
                <span className="font-mono text-xs text-cyan-300 font-bold tracking-wider">HEMANT SPEAKING</span>
                
                {/* Equalizer Frequency Bars */}
                <div className="flex items-end gap-0.5 h-3.5 ml-1">
                  {[0.5, 0.9, 0.7, 1.0, 0.6].map((factor, idx) => (
                    <motion.span
                      key={idx}
                      className="w-0.5 bg-gradient-to-t from-cyan-500 to-violet-400 rounded-full"
                      animate={{
                        height: isPlaying ? [`${25 * factor}%`, `${Math.max(35, audioLevel * 100 * factor)}%`, `${15 * factor}%`] : "20%",
                      }}
                      transition={{ duration: 0.12, repeat: Infinity, repeatType: "reverse", delay: idx * 0.04 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Tech Badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -left-4 bg-navy/90 border border-cyan-500/30 rounded-xl p-2.5 shadow-2xl backdrop-blur flex items-center justify-center z-20"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="w-6 h-6 opacity-90 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 -right-5 bg-navy/90 border border-cyan-500/30 rounded-xl p-2.5 shadow-2xl backdrop-blur flex items-center justify-center z-20"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" alt="PyTorch" className="w-6 h-6 opacity-90 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
      </motion.div>
    </div>
  );
};
