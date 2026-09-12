import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Cpu, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/data";

export const HeroCinematic: React.FC = () => {
  const { engineer } = PORTFOLIO_DATA;
  const [typedText, setTypedText] = useState("");
  const fullSystemText = "INITIALIZING INTELLIGENCE...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullSystemText.length) {
        setTypedText(fullSystemText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-12 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10 text-center flex flex-col items-center">
        
        {/* System Initializing Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-navy-900/80 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)]"
        >
          <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="font-mono text-xs text-cyan-300 tracking-wider font-semibold">
            {typedText}
          </span>
          <span className="inline-block w-1.5 h-3 bg-cyan-400 animate-pulse" />
        </motion.div>

        {/* Large Name Display */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase mb-6 text-white bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
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
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">
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

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-mono text-sm font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>EXPLORE WORK</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="/Resume.pdf"
            target="_blank"
            download="Hemant_Patidar_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-navy-900/90 border border-slate-700/80 text-slate-200 hover:text-white hover:border-cyan-400/50 font-mono text-sm font-semibold tracking-wide backdrop-blur-md transition-all duration-300 hover:bg-navy-800"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>RESUME</span>
          </a>
        </motion.div>

        {/* Ambient Technical Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl w-full"
        >
          <div className="bg-[#090d1a]/80 border border-cyan-500/20 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-md">
            <Cpu className="w-5 h-5 text-cyan-400 shrink-0" />
            <div className="text-left">
              <div className="font-mono text-[10px] text-slate-400 uppercase">SPECIALIZATION</div>
              <div className="font-mono text-xs text-slate-200 font-semibold">AI & Machine Learning</div>
            </div>
          </div>

          <div className="bg-[#090d1a]/80 border border-violet-500/20 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-md">
            <Sparkles className="w-5 h-5 text-violet-400 shrink-0" />
            <div className="text-left">
              <div className="font-mono text-[10px] text-slate-400 uppercase">CORE DOMAINS</div>
              <div className="font-mono text-xs text-slate-200 font-semibold">NLP • CV • GenAI</div>
            </div>
          </div>

          <div className="bg-[#090d1a]/80 border border-emerald-500/20 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-md col-span-2 sm:col-span-1">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <div className="text-left">
              <div className="font-mono text-[10px] text-slate-400 uppercase">STATUS</div>
              <div className="font-mono text-xs text-emerald-300 font-semibold">AVAILABLE FOR ROLES</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
