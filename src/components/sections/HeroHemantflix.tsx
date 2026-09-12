import React from "react";
import { motion } from "framer-motion";
import { Play, Download, Terminal, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/data";

interface HeroHemantflixProps {
  selectedProfile?: string;
}

export const HeroHemantflix: React.FC<HeroHemantflixProps> = () => {
  const { engineer } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-12 px-6 overflow-hidden">
      
      {/* Ambient Red & Cyan Atmospheric Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[25rem] bg-gradient-to-r from-red-600/10 via-cyan-500/10 to-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 text-center flex flex-col items-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/80 border border-red-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(229,9,20,0.2)]"
        >
          <Terminal className="w-4 h-4 text-[#e50914] animate-pulse" />
          <span className="font-mono text-xs text-slate-200 tracking-wider font-semibold">
            HEMANTFLIX // AI & ML ENGINEER PORTFOLIO
          </span>
        </motion.div>

        {/* Large Name Header */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase mb-6 text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] font-mono"
        >
          {engineer.name}
        </motion.h1>

        {/* Primary Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mb-6"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            BUILDING INTELLIGENCE. <br />
            <span className="bg-gradient-to-r from-[#e50914] via-cyan-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(229,9,20,0.4)]">
              ENGINEERING WHAT'S NEXT.
            </span>
          </h2>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 text-balance"
        >
          {engineer.subheadline}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#e50914] text-white font-mono text-sm font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(229,9,20,0.4)] hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>PLAY DEMO (PROJECTS)</span>
          </a>

          <a
            href="/Resume 3.pdf"
            target="_blank"
            download="Hemant_Patidar_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#121624]/90 border border-slate-700/80 text-slate-200 hover:text-white hover:border-cyan-400/50 font-mono text-sm font-semibold tracking-wide backdrop-blur-md transition-all duration-300 hover:bg-[#181d30]"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>RESUME</span>
          </a>
        </motion.div>

        {/* Technical Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-slate-400 bg-black/60 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md"
        >
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>INSTITUTION: Mandsaur University</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SPECIALIZATION: B.Tech CSE (AI)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-violet-400 font-bold">CGPA: 6.55/10</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
