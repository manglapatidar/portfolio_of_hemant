import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/portfolio";

export const EngineerEditorial: React.FC = () => {
  const { engineer } = PORTFOLIO_DATA;

  return (
    <section id="engineer" className="py-24 px-6 max-w-7xl mx-auto z-20 relative select-none">
      {/* Ambient center radiance matching hero section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/70 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="w-2 h-7 bg-rose-900 rounded-full" />
        <h2 className="font-sans text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
          THE ENGINEER
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Big Manifesto Quote & Story (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight"
          >
            "{engineer.manifesto}"
          </motion.h3>

          <p className="font-sans text-slate-700 text-base sm:text-lg leading-relaxed">
            Hemant Patidar is a Computer Science Engineering student specializing in <strong className="text-rose-900 font-bold">Artificial Intelligence</strong> at Mandsaur University. He focuses on bridging theoretical deep learning research with production software engineering.
          </p>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            His technical work includes fine-tuning abstractive T5 language transformers, deploying multi-factor face and voice biometric authentication systems, crafting generative style transfer algorithms using AdaIN PyTorch layers, and serving low-latency REST APIs using FastAPI and SQL backend workflows.
          </p>

          <div className="pt-6 border-t border-rose-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="bg-white/80 p-3.5 rounded-2xl border border-rose-100 shadow-xs">
              <span className="text-[10px] uppercase text-rose-800 font-bold block mb-1">SPECIALIZATION</span>
              <span className="text-slate-900 font-bold text-xs">Artificial Intelligence</span>
            </div>
            <div className="bg-white/80 p-3.5 rounded-2xl border border-rose-100 shadow-xs">
              <span className="text-[10px] uppercase text-rose-800 font-bold block mb-1">INSTITUTION</span>
              <span className="text-slate-900 font-bold text-xs">Mandsaur University</span>
            </div>
            <div className="bg-white/80 p-3.5 rounded-2xl border border-rose-100 shadow-xs">
              <span className="text-[10px] uppercase text-rose-800 font-bold block mb-1">LOCATION</span>
              <span className="text-slate-900 font-bold text-xs">Indore, MP, India</span>
            </div>
            <div className="bg-white/80 p-3.5 rounded-2xl border border-rose-100 shadow-xs">
              <span className="text-[10px] uppercase text-rose-800 font-bold block mb-1">TIMELINE</span>
              <span className="text-rose-900 font-bold text-xs">2023 — 2027</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Secondary Portrait View (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm h-96 sm:h-[28rem] rounded-3xl overflow-hidden shadow-[0_16px_45px_rgba(136,19,55,0.14)] border border-rose-200/80 group bg-white">
            <img
              src={engineer.rawImage}
              alt="Hemant Patidar"
              className="w-full h-full object-cover object-center filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-rose-200 p-4 rounded-2xl font-mono text-xs shadow-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="text-rose-900 font-black tracking-wider uppercase text-xs">HEMANT PATIDAR</span>
                <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
              </div>
              <span className="text-slate-600 text-[11px] block font-sans">B.Tech CS Engineering (AI) Student</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
