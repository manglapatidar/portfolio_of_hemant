import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroEntranceProps {
  onComplete: () => void;
}

export const IntroEntrance: React.FC<IntroEntranceProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"brand" | "name" | "done">("brand");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("name"), 800);
    const timer2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 1900);

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
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-auto select-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #ffffff 0%, #fff7f8 40%, #fce7ec 70%, #881337 130%)",
        }}
      >
        {/* Soft glowing ambient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-80 pointer-events-none" />

        {phase === "brand" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
            transition={{ duration: 0.5 }}
            className="text-center z-10"
          >
            <div className="w-16 h-16 mx-auto rounded-3xl bg-rose-900 text-white flex items-center justify-center font-bold text-2xl tracking-wider shadow-lg mb-4">
              HP
            </div>
            <span className="font-mono text-xs text-rose-900 font-bold tracking-widest uppercase">
              PORTFOLIO EXPERIENCE
            </span>
          </motion.div>
        )}

        {phase === "name" && (
          <motion.div
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            transition={{ duration: 0.5 }}
            className="text-center z-10"
          >
            <div className="font-mono text-xs text-rose-800 tracking-widest uppercase mb-2 font-bold">
              WELCOME
            </div>
            <h1 className="font-sans text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-2">
              HEMANT PATIDAR
            </h1>
            <p className="font-mono text-xs sm:text-sm text-rose-900 font-semibold tracking-wider">
              AI / ML ENGINEER
            </p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
