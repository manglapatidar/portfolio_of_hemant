import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, MoveHorizontal, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolio";

// Full 10-Pose Interactive Suite
// 1. Gaze frames across horizontal cursor sweep
// 2. Center greeting sequence: working -> center -> wave ("Hiiii!") -> point_down -> working
const ALL_POSES = {
  // Gaze angles
  far_left: { src: "/hero-character/look_far_left.jpg", label: "Looking Far Left" },
  mid_left: { src: "/hero-character/look_mid_left.jpg", label: "Looking Left" },
  slight_left: { src: "/hero-character/look_slight_left.jpg", label: "Soft Left" },
  slight_right: { src: "/hero-character/look_slight_right.jpg", label: "Soft Right" },
  mid_right: { src: "/hero-character/look_mid_right.jpg", label: "Looking Right" },
  far_right: { src: "/hero-character/look_far_right.jpg", label: "Looking Far Right" },

  // Center & greeting sequence
  working: { src: "/hero-character/working.jpg", label: "Focused on Code" },
  center: { src: "/hero-character/center.jpg", label: "Facing Forward" },
  wave: { src: "/hero-character/wave.jpg", label: "Waving Hello" },
  point_down: { src: "/hero-character/point_down.jpg", label: "Pointing to Portfolio" },
} as const;

type PoseKey = keyof typeof ALL_POSES;
type InteractionZone = "left" | "center" | "right" | "idle";

export const InteractivePortfolioHero: React.FC = () => {
  const { engineer } = PORTFOLIO_DATA;

  // Active pose - defaults to focused working at laptop
  const [currentPose, setCurrentPose] = useState<PoseKey>("working");
  const [activeZone, setActiveZone] = useState<InteractionZone>("idle");
  const [contextMessage, setContextMessage] = useState<string>("");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const sequenceTimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isSequenceActiveRef = useRef<boolean>(false);
  const lastZoneRef = useRef<InteractionZone>("idle");

  // Preload all 10 images on mount for zero-flicker instantaneous transitions
  useEffect(() => {
    Object.values(ALL_POSES).forEach((pose) => {
      const img = new Image();
      img.src = pose.src;
    });

    return () => {
      clearAllTimers();
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  const clearAllTimers = () => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
    sequenceTimersRef.current.forEach((t) => clearTimeout(t));
    sequenceTimersRef.current = [];
  };

  // Center greeting sequence:
  // 1. Notice visitor (center) -> 2. Wave hello (wave) -> 3. Point down (point_down) -> 4. Return to working
  const triggerCenterSequence = useCallback(() => {
    clearAllTimers();
    isSequenceActiveRef.current = true;
    setActiveZone("center");
    lastZoneRef.current = "center";

    // Phase 1: Look directly at visitor
    setCurrentPose("center");
    setContextMessage("Hey, it's you!");

    // Phase 2: Wave hello ("Hiiii!")
    const t1 = setTimeout(() => {
      setCurrentPose("wave");
      setContextMessage("Hiiii!");
    }, 1100);

    // Phase 3: Point finger down toward portfolio
    const t2 = setTimeout(() => {
      setCurrentPose("point_down");
      setContextMessage("Check out the portfolio");
    }, 2400);

    // Phase 4: Smooth return to laptop working state
    const t3 = setTimeout(() => {
      setCurrentPose("working");
      setContextMessage("");
      setActiveZone("idle");
      lastZoneRef.current = "idle";
      isSequenceActiveRef.current = false;
    }, 4400);

    sequenceTimersRef.current = [t1, t2, t3];
  }, []);

  // Handle gaze updates from horizontal cursor position
  const handleRelativeX = (relativeX: number) => {
    const clampedX = Math.max(0, Math.min(1, relativeX));

    // If center greeting sequence is playing, let it complete unless moving far away
    if (isSequenceActiveRef.current) {
      if (clampedX >= 0.38 && clampedX <= 0.62) {
        return; // stay in sequence
      }
      // If user moved distinctly to the left or right, interrupt sequence
      clearAllTimers();
      isSequenceActiveRef.current = false;
    }

    if (clampedX < 0.14) {
      setCurrentPose("far_left");
      setActiveZone("left");
      setContextMessage("Anyone over on the far left?");
      lastZoneRef.current = "left";
    } else if (clampedX < 0.28) {
      setCurrentPose("mid_left");
      setActiveZone("left");
      setContextMessage("Anyone here on the left?");
      lastZoneRef.current = "left";
    } else if (clampedX < 0.40) {
      setCurrentPose("slight_left");
      setActiveZone("left");
      setContextMessage("Glancing to the left");
      lastZoneRef.current = "left";
    } else if (clampedX <= 0.60) {
      // In the middle / center zone: trigger the interactive greeting sequence!
      if (lastZoneRef.current !== "center") {
        triggerCenterSequence();
      }
    } else if (clampedX <= 0.72) {
      setCurrentPose("slight_right");
      setActiveZone("right");
      setContextMessage("Glancing to the right");
      lastZoneRef.current = "right";
    } else if (clampedX <= 0.86) {
      setCurrentPose("mid_right");
      setActiveZone("right");
      setContextMessage("Anyone here on the right?");
      lastZoneRef.current = "right";
    } else {
      setCurrentPose("far_right");
      setActiveZone("right");
      setContextMessage("Anyone over on the far right?");
      lastZoneRef.current = "right";
    }

    // Auto return to working pose if cursor is left idle for 3.5s
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(() => {
      if (!isSequenceActiveRef.current) {
        setCurrentPose("working");
        setActiveZone("idle");
        setContextMessage("");
        lastZoneRef.current = "idle";
      }
    }, 3500);
  };

  // Mouse movement throttle with requestAnimationFrame
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const clientX = e.clientX;

    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    rafIdRef.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = (clientX - rect.left) / rect.width;
      handleRelativeX(relativeX);
    });
  };

  // Touch drag for mobile and tablet
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const touchX = e.touches[0].clientX;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = (touchX - rect.left) / rect.width;
    handleRelativeX(relativeX);
  };

  const handleMouseLeave = () => {
    clearAllTimers();
    isSequenceActiveRef.current = false;
    setCurrentPose("working");
    setActiveZone("idle");
    setContextMessage("");
    lastZoneRef.current = "idle";
  };

  // Hovering directly over the character card triggers center greeting sequence
  const handlePortraitMouseEnter = () => {
    triggerCenterSequence();
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[100vh] flex flex-col justify-between pt-24 sm:pt-28 pb-12 select-none cursor-default bg-transparent"
    >
      {/* Floating subtle ambient glimmer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-rose-400 animate-ping" />
        <div className="absolute top-1/3 right-1/5 w-2 h-2 rounded-full bg-rose-300 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
      </div>

      {/* Subtle Top Utility Bar */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between z-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-rose-200/80 text-rose-950 backdrop-blur-md shadow-xs">
          <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase">
            Interactive Experience
          </span>
        </div>
      </div>

      {/* Main Hero Content Grid */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto z-10">
        
        {/* ================= LEFT SIDE NOTE (4 cols) ================= */}
        <div className="lg:col-span-4 flex flex-col items-start text-left z-20 order-2 lg:order-1 pt-4 lg:pt-0">
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-sans leading-tight">
              I'm {engineer.name}
            </h1>
            <p className="text-lg sm:text-xl font-bold text-rose-900 tracking-wide">
              {engineer.role}
            </p>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-xs leading-relaxed font-sans">
            Specializing in Generative AI, Transformers, Computer Vision, and biometric systems.
          </p>

          {/* Interactive Instruction Box with Animated Movement Indicator */}
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 border border-rose-200/80 shadow-[0_8px_24px_rgba(136,19,55,0.08)] backdrop-blur-md">
            <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-rose-100 text-rose-700">
              <MoveHorizontal className="w-4 h-4 animate-pulse text-rose-700" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold text-rose-950 uppercase tracking-wider">
                Move cursor to call me !
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                Move left, right, or hover in center
              </span>
            </div>
          </div>

          {/* Interaction Zone Indicator Badges */}
          <div className="mt-5 hidden sm:flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-slate-500">
            <span
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeZone === "left"
                  ? "bg-rose-900 text-white font-bold shadow-xs"
                  : "bg-white/60 text-slate-600 border border-rose-200/50"
              }`}
            >
              Left Zone
            </span>
            <span className="text-slate-300">•</span>
            <span
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeZone === "center"
                  ? "bg-rose-900 text-white font-bold shadow-xs"
                  : "bg-white/60 text-slate-600 border border-rose-200/50"
              }`}
            >
              Center Zone
            </span>
            <span className="text-slate-300">•</span>
            <span
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeZone === "right"
                  ? "bg-rose-900 text-white font-bold shadow-xs"
                  : "bg-white/60 text-slate-600 border border-rose-200/50"
              }`}
            >
              Right Zone
            </span>
          </div>
        </div>

        {/* ================= CENTER DOMINANT CHARACTER PORTRAIT (5 cols) ================= */}
        {/* Full, prominent photographic portrait card with dark teal studio background & zero white borders */}
        <div className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2">
          
          {/* Ambient Studio Radiance behind the frame */}
          <div className="absolute w-[95%] h-[95%] rounded-[3rem] bg-[#04151e]/30 blur-3xl pointer-events-none" />
          <div className="absolute w-[80%] h-[80%] rounded-[3rem] bg-rose-200/40 blur-2xl pointer-events-none" />

          {/* Executive Studio Portrait Frame */}
          <div
            onMouseEnter={handlePortraitMouseEnter}
            onClick={triggerCenterSequence}
            className="group relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[560px] aspect-[3/4] rounded-[2.2rem] sm:rounded-[2.75rem] overflow-hidden shadow-[0_24px_60px_-12px_rgba(4,21,30,0.35),0_12px_24px_-8px_rgba(136,19,55,0.15)] border border-rose-200/60 bg-[#04151e] cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* Render all 10 poses with seamless crossfade */}
            {Object.entries(ALL_POSES).map(([key, pose]) => {
              const isActive = currentPose === key;
              return (
                <img
                  key={key}
                  src={pose.src}
                  alt={`Hemant Patidar - ${pose.label}`}
                  className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none transition-opacity duration-200 ease-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  loading="eager"
                />
              );
            })}

            {/* Subtle bottom studio gradient shimmer */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#04151e]/70 via-transparent to-transparent pointer-events-none z-20" />

            {/* Current Pose Status Pill */}
            <div className="absolute bottom-4 left-4 z-30 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono font-medium tracking-wider uppercase text-emerald-200">
                {ALL_POSES[currentPose].label}
              </span>
            </div>

            {/* Mobile Touch & Slide Hint */}
            <div className="sm:hidden absolute top-4 right-4 z-30 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md text-rose-950 text-[10px] font-mono shadow-xs border border-rose-200/60 font-semibold">
              Slide or Tap
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE CONTEXTUAL MESSAGE (3 cols) ================= */}
        <div className="lg:col-span-3 flex flex-col items-start lg:items-end text-left lg:text-right z-20 order-3">
          <div className="min-h-[100px] flex flex-col justify-center items-start lg:items-end">
            <AnimatePresence mode="wait">
              {contextMessage ? (
                <motion.div
                  key={contextMessage}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="relative px-5 py-3.5 rounded-2xl bg-white/95 border border-rose-300/80 shadow-[0_12px_32px_rgba(136,19,55,0.12)] backdrop-blur-md"
                >
                  {/* Speech bubble pointer */}
                  <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-l border-b border-rose-300/80 rotate-45 transform" />
                  
                  <span className="font-sans text-sm sm:text-base font-semibold text-rose-950 tracking-tight block">
                    {contextMessage}
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  className="px-4 py-2 rounded-xl bg-white/50 border border-rose-200/60 text-xs font-mono text-slate-600 italic"
                >
                  Working on AI pipelines...
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Links */}
          <div className="mt-6 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-900 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_4px_16px_rgba(136,19,55,0.22)] hover:bg-rose-800 transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-200" />
              <span>EXPLORE WORK</span>
            </a>

            <a
              href={engineer.resumeUrl}
              target="_blank"
              download="Hemant_Patidar_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/80 text-rose-950 border border-rose-200 hover:bg-white font-mono text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
            >
              <span>RESUME</span>
            </a>
          </div>
        </div>

      </div>

      {/* ================= BOTTOM EXPLORATION CUE ================= */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center justify-center text-center z-20 pt-4">
        <a
          href="#projects"
          className="group inline-flex flex-col items-center gap-1.5 text-rose-950/80 hover:text-rose-900 transition-colors"
        >
          <span className="font-mono text-xs font-bold tracking-widest uppercase">
            Check out the portfolio
          </span>
          <ArrowDown className="w-4 h-4 text-rose-700 animate-bounce group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
