import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/portfolio";
import { GraduationCap, Award } from "lucide-react";

export const CredentialsTimeline: React.FC = () => {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto z-20 relative select-none">
      {/* Ambient center radiance matching hero section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/70 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-7 bg-rose-900 rounded-full" />
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            EDUCATION & CERTIFICATIONS
          </h2>
        </div>
        <p className="font-mono text-xs text-rose-900/70 uppercase tracking-widest pl-5 font-semibold">
          ACADEMIC SPECIALIZATION & INDUSTRY CREDENTIALS
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Education Timeline Card (5 cols) */}
        <div className="lg:col-span-5">
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white/90 backdrop-blur-md border border-rose-200/90 rounded-3xl p-8 shadow-[0_12px_36px_rgba(136,19,55,0.06)] relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-rose-100/80 text-rose-900 border border-rose-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-rose-800 uppercase tracking-widest font-bold block">
                  DEGREE PROGRAM
                </span>
                <span className="font-sans text-xs text-slate-600 font-semibold">ACADEMIC FOUNDATION</span>
              </div>
            </div>

            <h3 className="font-sans text-2xl font-black text-slate-900 mb-2 leading-tight">
              {education.degree}
            </h3>

            <div className="font-sans text-slate-700 text-sm font-semibold mb-1">{education.institution}</div>
            <div className="font-mono text-xs text-slate-500 mb-5">{education.location}</div>

            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/70 space-y-2 font-mono text-xs mb-5">
              <div className="flex justify-between text-slate-600">
                <span>TIMELINE</span>
                <span className="text-rose-900 font-bold">{education.duration}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>CUMULATIVE CGPA</span>
                <span className="text-rose-900 font-bold">{education.cgpa}</span>
              </div>
            </div>

            <p className="font-sans text-slate-600 text-xs leading-relaxed">
              {education.details}
            </p>
          </motion.div>
        </div>

        {/* Certifications Row (7 cols) */}
        <div id="certifications" className="lg:col-span-7 space-y-4">
          <div className="font-mono text-xs text-rose-900 uppercase tracking-widest font-bold mb-3">
            // VERIFIED SIMULATIONS & SECURITY CREDENTIALS
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="bg-white/85 backdrop-blur-md border border-rose-200/80 rounded-3xl p-5 hover:border-rose-400 transition-all shadow-[0_8px_24px_rgba(136,19,55,0.05)] hover:shadow-[0_12px_32px_rgba(136,19,55,0.1)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-rose-50 text-rose-800 border border-rose-200">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-rose-900 font-bold px-2.5 py-0.5 rounded-full bg-rose-100 border border-rose-200">
                    {cert.year}
                  </span>
                </div>

                <h4 className="font-sans text-sm font-black text-slate-900 mb-1 leading-snug">
                  {cert.title}
                </h4>

                <div className="font-mono text-xs text-rose-800 font-semibold mb-2">{cert.issuer}</div>

                <p className="font-sans text-slate-600 text-xs leading-relaxed">
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
