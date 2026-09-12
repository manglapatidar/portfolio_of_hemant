import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/portfolio";
import { GraduationCap, Award } from "lucide-react";

export const CredentialsTimeline: React.FC = () => {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 px-6 max-w-7xl mx-auto z-20 relative select-none">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-1.5 h-7 bg-violet-400 rounded-full" />
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            EDUCATION & CERTIFICATIONS
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 uppercase tracking-widest pl-4">
          ACADEMIC SPECIALIZATION & INDUSTRY CREDENTIALS
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Education Timeline Card (5 cols) */}
        <div className="lg:col-span-5">
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-[#0a0e1c] border border-violet-500/40 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-violet-500/20 text-violet-300 border border-violet-400/40">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-violet-400 uppercase tracking-widest font-bold block">
                  DEGREE PROGRAM
                </span>
                <span className="font-sans text-xs text-slate-300 font-semibold">ACADEMIC FOUNDATION</span>
              </div>
            </div>

            <h3 className="font-sans text-2xl font-black text-white mb-2 leading-tight">
              {education.degree}
            </h3>

            <div className="font-sans text-slate-300 text-sm mb-1">{education.institution}</div>
            <div className="font-mono text-xs text-slate-400 mb-4">{education.location}</div>

            <div className="p-4 rounded-2xl bg-[#050711] border border-white/10 space-y-2 font-mono text-xs mb-4">
              <div className="flex justify-between text-slate-400">
                <span>TIMELINE</span>
                <span className="text-cyan-300 font-bold">{education.duration}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>CUMULATIVE CGPA</span>
                <span className="text-violet-300 font-bold">{education.cgpa}</span>
              </div>
            </div>

            <p className="font-sans text-slate-400 text-xs leading-relaxed">
              {education.details}
            </p>
          </motion.div>
        </div>

        {/* Certifications Row (7 cols) */}
        <div id="certifications" className="lg:col-span-7 space-y-4">
          <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold mb-2">
            // VERIFIED SIMULATIONS & SECURITY CREDENTIALS
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ scale: 1.02 }}
                className="bg-[#0a0d1a] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/50 transition-all shadow-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-white/5 text-cyan-300 border border-white/10">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-cyan-300 font-bold px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                    {cert.year}
                  </span>
                </div>

                <h4 className="font-sans text-sm font-bold text-white mb-1 leading-snug">
                  {cert.title}
                </h4>

                <div className="font-mono text-xs text-violet-300 mb-2">{cert.issuer}</div>

                <p className="font-sans text-slate-400 text-xs leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
