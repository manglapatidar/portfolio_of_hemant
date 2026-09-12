import React from "react";
import { motion } from "framer-motion";
import { Play, Download, ArrowRight, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/data";

export const HeroHemantflix: React.FC = () => {
  const { engineer } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      
      {/* Dark Movie Poster Ambient Backlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505] z-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[35rem] h-[35rem] bg-gradient-to-br from-red-600/15 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Text & Movie Spotlight Meta (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Top Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-500/40 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse" />
            <span className="font-mono text-xs text-red-200 tracking-widest uppercase font-bold">
              HEMANTFLIX ORIGINAL PRESENTATION
            </span>
          </motion.div>

          {/* Main Title: Name */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-none mb-3 drop-shadow-[0_0_35px_rgba(255,255,255,0.15)]"
          >
            {engineer.name}
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6 font-mono text-sm sm:text-base text-cyan-300 font-semibold"
          >
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 font-mono text-xs">
              AI/ML ENGINEER
            </span>
            <span className="text-slate-500">•</span>
            <span>MANDSAUR UNIVERSITY</span>
            <span className="text-slate-500">•</span>
            <span className="text-violet-300">CGPA 6.55/10</span>
          </motion.div>

          {/* Logline Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight mb-4 max-w-2xl"
          >
            BUILDING INTELLIGENCE. <br />
            <span className="bg-gradient-to-r from-[#e50914] via-cyan-400 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(229,9,20,0.4)]">
              ENGINEERING WHAT'S NEXT.
            </span>
          </motion.h2>

          {/* Synopsis Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-sans"
          >
            {engineer.subheadline} Specializing in transformer architectures (T5), face & voice biometric authentication systems, neural style synthesis, and production FastAPI microservices.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#e50914] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(229,9,20,0.4)] hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>PLAY DEMO (PROJECTS)</span>
            </a>

            <a
              href="#engineer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 text-white font-mono text-xs font-semibold hover:bg-white/20 backdrop-blur-md transition-all border border-white/10"
            >
              <span>EXPLORE STORY</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/Resume 3.pdf"
              target="_blank"
              download="Hemant_Patidar_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/60 font-mono text-xs font-semibold backdrop-blur-md transition-all"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>RESUME</span>
            </a>
          </motion.div>

        </div>

        {/* Right Column: Integrated Cinematic Character Portrait (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Rim light backlight orb */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-red-600/30 via-cyan-500/20 to-transparent blur-3xl pointer-events-none" />

          {/* Large Cinematic Character Display */}
          <div className="relative w-full max-w-sm sm:max-w-md h-[26rem] sm:h-[30rem] lg:h-[34rem] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 group">
            
            {/* Cutout Image */}
            <img
              src="/Hemant-cutout.png"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/Hemant.png";
              }}
              alt="Hemant Patidar - AI/ML Engineer"
              className="w-full h-full object-cover object-top filter brightness-105 contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
            />

            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none z-10" />

            {/* Bottom Character Nameplate */}
            <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/80 backdrop-blur-md border border-white/10 p-3.5 rounded-2xl flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] text-[#e50914] font-bold tracking-widest uppercase">PROTAGONIST</div>
                <div className="font-mono text-sm font-black text-white">HEMANT PATIDAR</div>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI/ML</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
