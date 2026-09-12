import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/data";

export const EngineerStory: React.FC = () => {
  const { engineer } = PORTFOLIO_DATA;

  return (
    <section id="engineer" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#070912]/80 to-transparent">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">SECTION 01</span>
          <span className="w-12 h-[1px] bg-cyan-500/40" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">THE ENGINEER</span>
        </motion.div>

        {/* Big Manifesto Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl">
            "{engineer.manifesto}"
          </h2>
        </motion.div>

        {/* Contextual Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 items-stretch"
        >
          <div className="md:col-span-2 bg-[#0a0e1c]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            <h3 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">// CORE PHILOSOPHY</h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-sans">
              Building artificial intelligence is not just about training neural network weights — it's about engineering resilient end-to-end architectures that perform accurately under real-world constraints.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From fine-tuning transformer language models (T5) and crafting generative style transfer algorithms to deploying low-latency REST APIs (FastAPI) and face-recognition authentication systems, I focus on building intelligent software that solves tangible problems.
            </p>
          </div>

          <div className="bg-[#0a0e1c]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-between hover:border-violet-500/30 transition-colors">
            <div>
              <h3 className="font-mono text-xs text-violet-400 uppercase tracking-widest mb-4">// DOMAIN RATIONALE</h3>
              <div className="space-y-4 font-mono text-xs text-slate-300">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400">NLP & Transformers</span>
                  <span className="text-cyan-400 font-bold">Abstractive T5</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400">Vision & Biometrics</span>
                  <span className="text-cyan-400 font-bold">Face + Voice</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400">Generative Synthesis</span>
                  <span className="text-violet-400 font-bold">AdaIN PyTorch</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">ML Engineering</span>
                  <span className="text-violet-400 font-bold">FastAPI + Docker</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <span>LOCATION</span>
              <span className="text-slate-200">Indore, India</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
