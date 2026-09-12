import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroEntranceProps {
  onComplete: () => void;
}

export const IntroEntrance: React.FC<IntroEntranceProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"logo" | "name" | "done">("logo");

  useEffect(() => {
    // Fast, crisp streaming intro: logo (900ms) -> name (1200ms) -> done
    const timer1 = setTimeout(() => setPhase("name"), 900);
    const timer2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center pointer-events-auto select-none"
      >
        {/* Subtle Ambient Red Glow Bar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        {phase === "logo" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="font-mono text-5xl sm:text-7xl font-black tracking-widest text-[#e50914] drop-shadow-[0_0_35px_rgba(229,9,20,0.8)]">
              HEMANTFLIX
            </h1>
          </motion.div>
        )}

        {phase === "name" && (
          <motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="font-mono text-xs text-[#e50914] tracking-widest uppercase mb-2 font-bold">
              HEMANTFLIX ORIGINAL
            </div>
            <h1 className="font-sans text-4xl sm:text-6xl font-black tracking-tight text-white mb-2">
              HEMANT PATIDAR
            </h1>
            <p className="font-mono text-xs sm:text-sm text-cyan-400 tracking-wider">
              AI / ML ENGINEER
            </p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
