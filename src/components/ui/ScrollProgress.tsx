import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-50 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-300 origin-left shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};
