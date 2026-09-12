import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/data";
import { GraduationCap, Award, ShieldCheck, Cpu, Database } from "lucide-react";

export const EducationCertifications: React.FC = () => {
  const { education, certifications } = PORTFOLIO_DATA;

  const getBadgeIcon = (color: string) => {
    switch (color) {
      case "cyan": return Cpu;
      case "violet": return Database;
      case "emerald": return Award;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#060814]/80 to-transparent">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">SECTION 05</span>
            <span className="w-12 h-[1px] bg-cyan-500/40" />
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">ACADEMICS & CREDENTIALS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            EDUCATION & CERTIFICATIONS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Education Main Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0e1f]/90 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.1)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-2xl text-cyan-300 border border-cyan-400/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block">DEGREE PROGRAM</span>
                  <h3 className="font-mono text-xs text-slate-300 font-semibold">DEGREE & UNIVERSITY</h3>
                </div>
              </div>

              {education.map((edu) => (
                <div key={edu.id} className="space-y-4">
                  <h4 className="text-xl font-bold text-white leading-tight">
                    {edu.degree}
                  </h4>

                  <div className="text-slate-300 text-sm font-sans">
                    {edu.institution}
                  </div>

                  <div className="text-slate-400 text-xs font-mono">
                    {edu.location}
                  </div>

                  <div className="p-4 rounded-2xl bg-[#050711] border border-white/10 space-y-2 font-mono text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>DURATION</span>
                      <span className="text-cyan-300 font-bold">{edu.duration}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>ACADEMIC CGPA</span>
                      <span className="text-violet-300 font-bold">{edu.cgpa}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs font-sans leading-relaxed pt-2">
                    {edu.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Stream (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">
              // VERIFIED SIMULATION & SECURITY CERTIFICATIONS
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => {
                const Icon = getBadgeIcon(cert.badgeColor);
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-[#080b18]/80 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-white/5 text-cyan-300 border border-white/10 group-hover:border-cyan-400/40">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold">
                        {cert.year}
                      </span>
                    </div>

                    <h4 className="font-mono text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h4>

                    <div className="font-mono text-xs text-violet-300 mb-2">
                      {cert.issuer}
                    </div>

                    <p className="text-slate-400 font-sans text-xs leading-relaxed">
                      {cert.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
