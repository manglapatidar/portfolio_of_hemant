import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const CinematicSubjectReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll driven animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out scroll progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001,
  });

  // Camera Approach transforms: Distant (scale 0.78, opacity 0.6) -> Close Portrait (scale 1.25, opacity 1)
  const scale = useTransform(smoothProgress, [0, 0.4, 0.8, 1], [0.78, 1.0, 1.15, 1.25]);
  const translateY = useTransform(smoothProgress, [0, 0.5, 1], [40, 0, -30]);
  const opacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0.55, 1, 1, 0.8]);
  
  // Subtle HUD & Light opacity adjustments
  const hudOpacity = useTransform(smoothProgress, [0, 0.2, 0.7, 1], [0.2, 1, 0.8, 0.3]);
  const ringScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.1, 1.3]);
  const blurAmount = useTransform(smoothProgress, [0, 0.2, 0.7, 1], ["blur(8px)", "blur(0px)", "blur(0px)", "blur(4px)"]);

  // Floating data nodes around subject
  const node1Y = useTransform(smoothProgress, [0, 1], [-20, 40]);
  const node2Y = useTransform(smoothProgress, [0, 1], [30, -50]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[160vh] flex items-start justify-center pt-20 md:pt-28 pointer-events-none select-none"
    >
      <div className="sticky top-24 md:top-32 flex flex-col items-center justify-center w-full max-w-4xl px-4 pointer-events-auto">
        
        {/* Ambient Rim Lighting & Glow Rings */}
        <motion.div
          className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[30rem] md:h-[30rem] rounded-full bg-gradient-to-tr from-red-600/20 via-cyan-500/25 to-violet-600/20 blur-3xl pointer-events-none"
          style={{ scale: ringScale, opacity }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Concentric Cyber Orbit Ring */}
        <motion.div
          className="absolute w-80 h-80 sm:w-[26rem] sm:h-[26rem] md:w-[34rem] md:h-[34rem] rounded-full border border-cyan-500/20 pointer-events-none"
          style={{ opacity: hudOpacity, scale: ringScale }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#e50914] shadow-[0_0_12px_#e50914]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
        </motion.div>

        {/* Main Subject Container */}
        <motion.div
          className="relative w-72 h-80 sm:w-85 sm:h-96 md:w-[26rem] md:h-[30rem] lg:w-[28rem] lg:h-[32rem] rounded-3xl overflow-hidden group"
          style={{
            scale,
            y: translateY,
            opacity,
            filter: blurAmount,
          }}
        >
          {/* Rim light border highlight */}
          <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-b from-red-500/60 via-cyan-400/40 to-transparent z-20 pointer-events-none shadow-[0_0_35px_rgba(229,9,20,0.25)]" />

          {/* HUD Corner Tech Brackets */}
          <motion.div style={{ opacity: hudOpacity }} className="absolute inset-0 pointer-events-none z-30">
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-red-500/90" />
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-red-500/90" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-cyan-400/90" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-cyan-400/90" />
          </motion.div>

          {/* Subject Image Layer */}
          <div className="relative w-full h-full bg-[#05060d]">
            <img
              src="/Hemant-cutout.png"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/Hemant.png";
              }}
              alt="Hemant Patidar - AI/ML Engineer"
              className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />

            {/* Vignette & Dark Environmental Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#05060b]/40 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none z-10" />

            {/* Scanning Laser Line */}
            <motion.div
              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent z-20 pointer-events-none opacity-40 shadow-[0_0_12px_#e50914]"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Floating Data Nodes (Left & Right) */}
        <motion.div
          style={{ y: node1Y, opacity: hudOpacity }}
          className="absolute -left-4 sm:left-4 md:-left-12 top-1/3 bg-[#080b16]/90 border border-red-500/40 backdrop-blur-md px-3.5 py-2 rounded-xl text-left hidden sm:block z-30 shadow-xl"
        >
          <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">NEURAL EMBEDDING</div>
          <div className="font-mono text-xs text-red-400 font-semibold">[512-Dim Vector]</div>
        </motion.div>

        <motion.div
          style={{ y: node2Y, opacity: hudOpacity }}
          className="absolute -right-4 sm:right-4 md:-right-12 top-1/2 bg-[#080b16]/90 border border-cyan-500/40 backdrop-blur-md px-3.5 py-2 rounded-xl text-left hidden sm:block z-30 shadow-xl"
        >
          <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">SPECIALIZATION</div>
          <div className="font-mono text-xs text-cyan-300 font-semibold">NLP & Computer Vision</div>
        </motion.div>

      </div>
    </div>
  );
};
