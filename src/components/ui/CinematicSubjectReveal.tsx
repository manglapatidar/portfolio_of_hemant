import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const CinematicSubjectReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll driven camera approach animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring physics for camera movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // Camera Approach: Distant (scale 0.85, opacity 0.7) -> Close Portrait (scale 1.2, opacity 1)
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1.05, 1.2]);
  const translateY = useTransform(smoothProgress, [0, 0.5, 1], [30, 0, -20]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.85]);
  const ringScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.15, 1.3]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[140vh] flex items-start justify-center pt-16 md:pt-24 pointer-events-none select-none"
    >
      <div className="sticky top-20 md:top-28 flex flex-col items-center justify-center w-full max-w-4xl px-4 pointer-events-auto">
        
        {/* Subtle Ambient Rim Glow */}
        <motion.div
          className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-full bg-gradient-to-tr from-red-600/20 via-cyan-500/20 to-transparent blur-3xl pointer-events-none"
          style={{ scale: ringScale, opacity }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Concentric Cyber Light Ring */}
        <motion.div
          className="absolute w-80 h-80 sm:w-[26rem] sm:h-[26rem] md:w-[32rem] md:h-[32rem] rounded-full border border-red-500/20 pointer-events-none"
          style={{ opacity, scale: ringScale }}
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#e50914] shadow-[0_0_10px_#e50914]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
        </motion.div>

        {/* Main Subject Portrait Container (Sharp & Clean) */}
        <motion.div
          className="relative w-72 h-80 sm:w-85 sm:h-96 md:w-[26rem] md:h-[30rem] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] group"
          style={{
            scale,
            y: translateY,
            opacity,
          }}
        >
          {/* Subtle Rim Highlight Border */}
          <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-b from-red-500/50 via-cyan-400/30 to-transparent z-20 pointer-events-none" />

          {/* Subject Image Layer */}
          <div className="relative w-full h-full bg-[#050507]">
            <img
              src="/Hemant-cutout.png"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/Hemant.png";
              }}
              alt="Hemant Patidar - AI/ML Engineer"
              className="w-full h-full object-cover object-top filter brightness-105 contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />

            {/* Dark Cinematic Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none z-10" />
          </div>
        </motion.div>

        {/* Clean Subject Caption */}
        <motion.div
          style={{ opacity }}
          className="mt-6 font-mono text-xs text-slate-300 flex items-center gap-2.5 bg-black/70 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse" />
          <span>HEMANT PATIDAR • AI/ML ENGINEER</span>
        </motion.div>

      </div>
    </div>
  );
};
