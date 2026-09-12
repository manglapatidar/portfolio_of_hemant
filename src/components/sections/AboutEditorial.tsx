import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/data";
import { Cpu, Scan, Sparkles, Mic, GraduationCap } from "lucide-react";

export const AboutEditorial: React.FC = () => {
  const { about, engineer } = PORTFOLIO_DATA;

  const focusIcons = [Cpu, Scan, Sparkles, Mic];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">SECTION 04</span>
            <span className="w-12 h-[1px] bg-cyan-500/40" />
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">BACKGROUND & FOCUS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            {about.editorialTitle}
          </h2>
        </motion.div>

        {/* Main Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Main Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 bg-[#0a0e1e]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden"
          >
            <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">// EDITORIAL PROFILE</div>
            
            <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-sans mb-6">
              Hemant Patidar is a B.Tech Computer Science Engineering student specializing in <strong className="text-cyan-300 font-semibold">Artificial Intelligence</strong> at Mandsaur University.
            </p>
            
            <p className="text-slate-300 text-base leading-relaxed font-sans mb-6">
              Driven by a deep curiosity for intelligent systems, he focuses on turning theoretical machine learning algorithms into production-capable software. His work spans abstractive text summarization using fine-tuned T5 transformers, multi-factor biometric authentication combining facial recognition and voice waveforms, and neural image synthesis with Adaptive Instance Normalization (AdaIN).
            </p>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 text-xs font-mono text-slate-400">
              <div>
                <span className="block text-[10px] uppercase text-slate-500">SPECIALIZATION</span>
                <span className="text-cyan-300 font-semibold">Artificial Intelligence</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-slate-500">INSTITUTION</span>
                <span className="text-slate-200 font-semibold">Mandsaur University</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-slate-500">LOCATION</span>
                <span className="text-slate-200 font-semibold">{engineer.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Academic Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 bg-[#0a0e1e]/80 border border-violet-500/30 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between h-full"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-400/40 flex items-center justify-center text-violet-300 mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <h3 className="font-mono text-xs text-violet-400 uppercase tracking-widest mb-2">ACADEMIC FOUNDATION</h3>
              <div className="text-xl font-bold text-white mb-2">B.Tech Computer Science Engineering (AI)</div>
              <div className="text-sm text-slate-400 mb-4">Mandsaur University, Mandsaur</div>
              
              <div className="bg-[#050711] p-3 rounded-xl border border-white/10 font-mono text-xs">
                <div className="flex justify-between text-slate-400 mb-1">
                  <span>TIMELINE</span>
                  <span className="text-cyan-300">2023 – 2027</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>CUMULATIVE CGPA</span>
                  <span className="text-violet-300 font-bold">6.55 / 10</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 font-mono text-[11px] text-slate-400">
              EXPLORING NLP • CV • GENAI • VOICE AI
            </div>
          </motion.div>

        </div>

        {/* 4 Core Focus Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.focusAreas.map((area, idx) => {
            const Icon = focusIcons[idx % focusIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#080b18]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-sm font-bold text-white mb-2">{area.title}</h3>
                <p className="text-slate-400 font-sans text-xs leading-relaxed">{area.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
