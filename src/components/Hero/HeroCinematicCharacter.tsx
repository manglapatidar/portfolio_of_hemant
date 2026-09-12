import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Play, FileText, ArrowDown } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolio";

export const HeroCinematicCharacter: React.FC = () => {
  const { engineer } = PORTFOLIO_DATA;
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Scroll-driven camera movement
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  // Camera -> Hemant approach animation
  const portraitScale = useTransform(smoothProgress, [0, 0.6, 1], [0.88, 1.05, 1.22]);
  const portraitY = useTransform(smoothProgress, [0, 0.6, 1], [40, 0, -35]);
  const textY = useTransform(smoothProgress, [0, 0.6, 1], [0, -15, -40]);
  const bgOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.5, 0.85, 1]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-[160vh] flex flex-col items-center justify-start pt-24 select-none overflow-hidden"
    >
      {/* Sticky Character Spotlight Viewport */}
      <div className="sticky top-20 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[82vh]">
        
        {/* Left Column: Hero Character Poster Typography (7 cols) */}
        <motion.div
          style={{ y: textY }}
          className="lg:col-span-7 flex flex-col items-start text-left z-20"
        >
          {/* Category Tag */}
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e50914]/20 border border-[#e50914]/40">
            <span className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse" />
            <span className="font-mono text-xs text-red-300 font-bold uppercase tracking-widest">
              HEMANTFLIX SPOTLIGHT
            </span>
          </div>

          {/* Dominant Name Title */}
          <h1 className="font-sans text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-none mb-3 drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]">
            {engineer.name}
          </h1>

          {/* Role */}
          <div className="font-mono text-base sm:text-lg text-cyan-400 font-bold tracking-wider mb-6 flex items-center gap-3">
            <span>{engineer.role}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-normal text-xs sm:text-sm">INDORE, INDIA</span>
          </div>

          {/* Concise Statement */}
          <p className="font-sans text-slate-200 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal drop-shadow-md">
            {engineer.headline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#e50914] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(229,9,20,0.5)] hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>EXPLORE MY WORK</span>
            </a>

            <a
              href="/Resume 3.pdf"
              target="_blank"
              download="Hemant_Patidar_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/20 backdrop-blur-md transition-all border border-white/10"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>VIEW RESUME</span>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-12 flex items-center gap-2 font-mono text-xs text-slate-400">
            <ArrowDown className="w-4 h-4 text-[#e50914] animate-bounce" />
            <span>SCROLL TO BEGIN EXPLORING</span>
          </div>
        </motion.div>

        {/* Right Column: Character Poster Spotlighting (5 cols) */}
        <div className="lg:col-span-5 relative flex items-center justify-center z-10">
          
          {/* Atmospheric Backlight Glares */}
          <motion.div
            style={{ opacity: bgOpacity }}
            className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#e50914]/30 via-cyan-500/20 to-transparent blur-3xl pointer-events-none"
          />

          {/* Large Movie Poster Character Container */}
          <motion.div
            style={{
              scale: portraitScale,
              y: portraitY,
            }}
            className="relative w-full max-w-sm sm:max-w-md h-[28rem] sm:h-[32rem] lg:h-[36rem] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.95)] border border-white/10 group"
          >
            {/* Cutout Image */}
            <img
              src={engineer.cutoutImage}
              onError={(e) => {
                (e.target as HTMLImageElement).src = engineer.rawImage;
              }}
              alt="Hemant Patidar - AI/ML Engineer"
              className="w-full h-full object-cover object-top filter brightness-105 contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />

            {/* Dark Edge Fading Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-radial-vignette opacity-75 pointer-events-none z-10" />

            {/* Rim Lighting Gradient Overlay */}
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-b from-[#e50914]/50 via-cyan-400/30 to-transparent z-20 pointer-events-none" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
