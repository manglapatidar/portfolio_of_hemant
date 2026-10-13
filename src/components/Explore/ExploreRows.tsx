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
      accent: "text-rose-700 bg-rose-50 border-rose-200",
      href: "#engineer",
    },
    {
      id: "ai-ml",
      category: "CORE DOMAINS",
      title: "AI / ML SPECIALIZATION",
      icon: Cpu,
      snippet: "NLP Transformers (T5), Face & Voice Biometrics, AdaIN Generative Style Transfer, PCA Clustering.",
      accent: "text-rose-900 bg-rose-100/60 border-rose-200",
      href: "#stack",
    },
    {
      id: "engineering",
      category: "ACADEMICS",
      title: "ENGINEERING DEGREE",
      icon: GraduationCap,
      snippet: `${education.degree} • ${education.institution} (${education.duration})`,
      accent: "text-rose-800 bg-rose-50 border-rose-200",
      href: "#education",
    },
    {
      id: "contact",
      category: "DIRECTORY",
      title: "DIRECT CONTACT",
      icon: Mail,
      snippet: `${engineer.location} • ${engineer.email}`,
      accent: "text-rose-950 bg-rose-100/40 border-rose-200",
      href: "#contact",
    },
  ];

  return (
    <section id="explore" className="py-20 px-6 max-w-7xl mx-auto z-20 relative">
      {/* Ambient center radiance matching hero section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="flex flex-col items-start mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-7 bg-rose-900 rounded-full" />
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            CONTINUE EXPLORING
          </h2>
        </div>
        <p className="font-mono text-xs text-rose-900/70 uppercase tracking-widest pl-5 font-semibold">
          CORE PORTFOLIO DOMAINS & DIRECTORIES
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {exploreItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.id}
              href={item.href}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="bg-white/85 backdrop-blur-md border border-rose-200/80 hover:border-rose-400 rounded-3xl p-6 relative overflow-hidden group shadow-[0_10px_30px_rgba(136,19,55,0.05)] hover:shadow-[0_16px_36px_rgba(136,19,55,0.12)] transition-all flex flex-col justify-between select-none min-h-[220px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] text-rose-800 uppercase tracking-widest font-bold">
                    {item.category}
                  </span>
                  <div className={`p-2.5 rounded-2xl border ${item.accent} transition-transform group-hover:scale-110`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-sans text-lg font-black text-slate-900 mb-2 group-hover:text-rose-900 transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-slate-600 text-xs leading-relaxed line-clamp-3">
                  {item.snippet}
                </p>
              </div>

              <div className="pt-5 flex items-center justify-between font-mono text-xs text-slate-500 group-hover:text-rose-950 font-semibold border-t border-rose-100/70 mt-4">
                <span>VIEW CONTENT</span>
                <ArrowRight className="w-3.5 h-3.5 text-rose-700 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};
