import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/portfolio";
import { Cpu, Network, Sparkles, Server, CheckCircle2 } from "lucide-react";

export const TechUniverseOrbit: React.FC = () => {
  const { techGroups } = PORTFOLIO_DATA;
  const [activeGroupIndex, setActiveGroupIndex] = useState<number | null>(null);

  const groupIcons = [Cpu, Network, Sparkles, Server];

  return (
    <section id="stack" className="py-24 px-6 max-w-7xl mx-auto z-20 relative select-none">
      {/* Ambient center radiance matching hero section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/70 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-7 bg-rose-900 rounded-full" />
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            AI / ML SPECIALIZATION
          </h2>
        </div>
        <p className="font-mono text-xs text-rose-900/70 uppercase tracking-widest pl-5 font-semibold">
          TECHNICAL INFRASTRUCTURE & MODEL FRAMEWORKS
        </p>
      </div>

      {/* Orbit & Category Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Central Core Display (4 cols) */}
        <div className="lg:col-span-4 bg-white/90 border border-rose-200/90 rounded-3xl p-8 text-center relative overflow-hidden shadow-[0_12px_40px_rgba(136,19,55,0.08)] flex flex-col items-center justify-center min-h-[320px]">
          {/* Subtle Ambient Core Glow */}
          <div className="absolute w-48 h-48 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />

          <div className="w-16 h-16 rounded-2xl bg-rose-100/80 border border-rose-300 flex items-center justify-center text-rose-900 mb-4 animate-pulse shadow-xs">
            <Cpu className="w-8 h-8" />
          </div>
          <span className="font-mono text-[11px] text-rose-800 font-bold uppercase tracking-widest mb-1.5">
            CORE DOMAIN
          </span>
          <h3 className="font-sans text-2xl font-black text-slate-900 tracking-tight mb-2">
            AI / ML ENGINEERING
          </h3>
          <p className="font-sans text-slate-600 text-xs leading-relaxed max-w-xs">
            Architecting end-to-end pipelines from deep learning models to production FastAPI endpoints.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-900 font-mono text-[10px] font-bold">
            <Sparkles className="w-3 h-3 text-rose-600" />
            <span>PRODUCTION READY</span>
          </div>
        </div>

        {/* 4 Connected Technology Groups (8 cols) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {techGroups.map((group, idx) => {
            const Icon = groupIcons[idx % groupIcons.length];
            const isActive = activeGroupIndex === idx;

            return (
              <motion.div
                key={group.name}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                onMouseEnter={() => setActiveGroupIndex(idx)}
                onMouseLeave={() => setActiveGroupIndex(null)}
                className={`bg-white/85 backdrop-blur-md border rounded-3xl p-6 transition-all duration-300 shadow-[0_8px_30px_rgba(136,19,55,0.05)] ${
                  isActive
                    ? "border-rose-400 shadow-[0_16px_40px_rgba(136,19,55,0.12)] bg-white"
                    : "border-rose-200/70"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-sans text-base font-black text-slate-900 tracking-tight">
                    {group.name}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-xl bg-rose-50/70 hover:bg-rose-100/80 text-rose-950 border border-rose-200/80 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-rose-700" />
                      <span>{item}</span>
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
