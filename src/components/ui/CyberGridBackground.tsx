import React from "react";
import { motion } from "framer-motion";

export const CyberGridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Radial Gradient Spotlights */}
      <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute top-[40%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-violet-600/10 blur-[150px]" />
      <div className="absolute -bottom-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/08 blur-[160px]" />

      {/* Cyberpunk Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 211, 238, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      {/* Moving Light Beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-violet-400/30 to-transparent"
        animate={{ y: ["100%", "-100%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};
