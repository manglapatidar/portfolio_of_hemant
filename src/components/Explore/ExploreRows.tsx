import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/portfolio";
import { User, Cpu, GraduationCap, Mail, ArrowRight } from "lucide-react";

export const ExploreRows: React.FC = () => {
  const { engineer, education } = PORTFOLIO_DATA;

  const exploreItems = [
    {
      id: "about",
      category: "BIOGRAPHY",
      title: "ABOUT HEMANT",
      icon: User,
      snippet: engineer.manifesto,
      gradient: "from-[#e50914]/20 via-[#0a0d1a] to-[#050507]",
      href: "#engineer"
    },
    {
      id: "ai-ml",
      category: "CORE DOMAINS",
      title: "AI / ML SPECIALIZATION",
      icon: Cpu,
      snippet: "NLP Transformers (T5), Face & Voice Biometrics, AdaIN Generative Style Transfer, PCA Clustering.",
      gradient: "from-cyan-950/30 via-[#0a0d1a] to-[#050507]",
      href: "#stack"
    },
    {
      id: "engineering",
      category: "ACADEMICS",
      title: "ENGINEERING DEGREE",
      icon: GraduationCap,
      snippet: `${education.degree} • ${education.institution} (${education.duration})`,
      gradient: "from-violet-950/30 via-[#0a0d1a] to-[#050507]",
      href: "#education"
    },
    {
      id: "contact",
      category: "DIRECTORY",
      title: "DIRECT CONTACT",
      icon: Mail,
      snippet: `${engineer.location} • ${engineer.email}`,
      gradient: "from-emerald-950/30 via-[#0a0d1a] to-[#050507]",
      href: "#contact"
    }
  ];

  return (
    <section id="explore" className="py-16 px-6 max-w-7xl mx-auto z-20 relative">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-1.5 h-7 bg-[#e50914] rounded-full" />
        <h2 className="font-sans text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
          CONTINUE EXPLORING FOR HEMANT PATIDAR
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {exploreItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.id}
              href={item.href}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`bg-gradient-to-b ${item.gradient} border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-[#e50914] transition-all shadow-2xl flex flex-col justify-between select-none min-h-[220px]`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-300 group-hover:border-[#e50914]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-sans text-xl font-bold text-white mb-2 group-hover:text-[#e50914] transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-slate-300 text-xs leading-relaxed line-clamp-3">
                  {item.snippet}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between font-mono text-xs text-slate-400 group-hover:text-white">
                <span>VIEW CONTENT</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#e50914]" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};
