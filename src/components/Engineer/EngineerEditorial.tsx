import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/portfolio";

export const EngineerEditorial: React.FC = () => {
  const { engineer } = PORTFOLIO_DATA;

  return (
    <section id="engineer" className="py-24 px-6 max-w-7xl mx-auto z-20 relative select-none">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-1.5 h-7 bg-[#e50914] rounded-full" />
        <h2 className="font-sans text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
          THE ENGINEER
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Big Manifesto Quote & Story (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight"
          >
            "{engineer.manifesto}"
          </motion.h3>

          <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed">
            Hemant Patidar is a Computer Science Engineering student specializing in <strong className="text-cyan-300 font-semibold">Artificial Intelligence</strong> at Mandsaur University. He focuses on bridging theoretical deep learning research with production software engineering.
          </p>

          <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
            His technical work includes fine-tuning abstractive T5 language transformers, deploying multi-factor face and voice biometric authentication systems, crafting generative style transfer algorithms using AdaIN PyTorch layers, and serving low-latency REST APIs using FastAPI and SQL backend workflows.
          </p>

          <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs text-slate-400">
            <div>
              <span className="text-[10px] uppercase text-slate-500 block">SPECIALIZATION</span>
              <span className="text-cyan-300 font-bold">Artificial Intelligence</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-500 block">INSTITUTION</span>
              <span className="text-white font-bold">Mandsaur University</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-500 block">LOCATION</span>
              <span className="text-slate-200 font-bold">Indore, MP, India</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-500 block">TIMELINE</span>
              <span className="text-violet-300 font-bold">2023 — 2027</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Secondary Portrait View (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm h-96 sm:h-[28rem] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src={engineer.rawImage}
              alt="Hemant Patidar"
              className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-xl font-mono text-xs text-slate-300">
              <span className="text-[#e50914] font-bold block mb-0.5">HEMANT PATIDAR</span>
              <span>B.Tech CS Engineering (AI) Student</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
