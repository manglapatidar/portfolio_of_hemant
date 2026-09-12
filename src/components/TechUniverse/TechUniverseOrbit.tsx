import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/portfolio";
import { Cpu, Network, Sparkles, Server } from "lucide-react";

export const TechUniverseOrbit: React.FC = () => {
  const { techGroups } = PORTFOLIO_DATA;
  const [activeGroupIndex, setActiveGroupIndex] = useState<number | null>(null);

  const groupIcons = [Cpu, Network, Sparkles, Server];

  return (
    <section id="stack" className="py-20 px-6 max-w-7xl mx-auto z-20 relative select-none">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-1.5 h-7 bg-cyan-400 rounded-full" />
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            AI / ML UNIVERSE
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 uppercase tracking-widest pl-4">
          TECHNICAL INFRASTRUCTURE & MODEL FRAMEWORKS
        </p>
      </div>

      {/* Orbit & Category Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Central Core Display (4 cols) */}
        <div className="lg:col-span-4 bg-[#0a0e1a] border border-cyan-500/40 rounded-3xl p-8 text-center relative overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.15)] flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 mb-4 animate-pulse">
            <Cpu className="w-8 h-8" />
          </div>
          <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1">
            CORE DOMAIN
          </span>
          <h3 className="font-sans text-2xl font-black text-white tracking-tight mb-2">
            AI / ML ENGINEERING
          </h3>
          <p className="font-sans text-slate-300 text-xs leading-relaxed max-w-xs">
            Architecting end-to-end pipelines from deep learning models to production FastAPI endpoints.
          </p>
        </div>

        {/* 4 Connected Technology Groups (8 cols) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {techGroups.map((group, idx) => {
            const Icon = groupIcons[idx % groupIcons.length];
            const isActive = activeGroupIndex === idx;

            return (
              <motion.div
                key={group.name}
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setActiveGroupIndex(idx)}
                onMouseLeave={() => setActiveGroupIndex(null)}
                className={`bg-[#0a0d1a] border rounded-2xl p-6 transition-all duration-300 ${
                  isActive
                    ? "border-[#e50914] shadow-[0_0_25px_rgba(229,9,20,0.3)] bg-[#0f1426]"
                    : "border-white/10 hover:border-cyan-400/50"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-white/5 text-cyan-300 border border-white/10">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-sans text-sm font-extrabold text-white tracking-wider">
                    {group.name}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
