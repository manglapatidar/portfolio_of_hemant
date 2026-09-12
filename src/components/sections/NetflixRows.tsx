import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/data";
import type { ProjectItem } from "../../data/data";
import { Play, GraduationCap, Award, Mail, MapPin } from "lucide-react";

interface NetflixRowsProps {
  onOpenProjectModal: (project: ProjectItem) => void;
}

export const NetflixRows: React.FC<NetflixRowsProps> = ({ onOpenProjectModal }) => {
  const { projects, skillsNodes, education, certifications, engineer } = PORTFOLIO_DATA;

  return (
    <div className="py-12 space-y-16 relative z-10">
      
      {/* ROW 1: CONTINUE EXPLORING */}
      <section id="engineer" className="px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 bg-[#e50914] rounded-full" />
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase font-sans">
            CONTINUE EXPLORING FOR HEMANT PATIDAR
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Manifesto Card */}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-[#0b0e1a]/90 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-[#e50914]/60 transition-all duration-300 shadow-xl"
          >
            <div className="font-mono text-xs text-[#e50914] uppercase tracking-widest mb-2 font-bold">// MANIFESTO</div>
            <h4 className="text-xl font-bold text-white mb-3 font-sans">"{engineer.manifesto}"</h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
              Designing advanced neural architectures, computer vision pipelines, and transformer models — bridging theoretical ML research with production code.
            </p>
          </motion.div>

          {/* AI Focus Areas Card */}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-[#0b0e1a]/90 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-400/60 transition-all duration-300 shadow-xl"
          >
            <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2 font-bold">// AI DOMAINS</div>
            <div className="space-y-2 text-xs font-sans text-slate-300">
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span>NLP & Transformers</span>
                <span className="text-cyan-300 font-mono">T5 Model</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span>Computer Vision</span>
                <span className="text-cyan-300 font-mono">Face + Speech</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span>Generative AI</span>
                <span className="text-violet-300 font-mono">PyTorch AdaIN</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span>Data Science</span>
                <span className="text-violet-300 font-mono">PCA + K-Means</span>
              </div>
            </div>
          </motion.div>

          {/* Direct Contact Card */}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-[#0b0e1a]/90 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-violet-400/60 transition-all duration-300 shadow-xl"
          >
            <div className="font-mono text-xs text-violet-400 uppercase tracking-widest mb-2 font-bold">// DIRECT CONTACT</div>
            <div className="space-y-3 text-xs font-sans text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">{engineer.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                <span>{engineer.location}</span>
              </div>
              <div className="pt-2">
                <a
                  href={`mailto:${engineer.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e50914] text-white font-mono font-bold text-xs hover:bg-red-700 transition-colors"
                >
                  CONTACT HEMANT
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ROW 2: INTELLIGENCE, BUILT. (TOP PROJECTS AS NETFLIX POSTERS) */}
      <section id="projects" className="px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#e50914] rounded-full" />
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase font-sans">
              INTELLIGENCE, BUILT. — TOP PROJECTS
            </h3>
          </div>
          <span className="font-mono text-xs text-slate-400 hidden sm:inline">SELECT ANY THUMBNAIL TO LAUNCH SIMULATION</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => onOpenProjectModal(project)}
              className="bg-[#0b0e1e] border border-white/10 rounded-2xl p-5 cursor-pointer group hover:border-[#e50914] transition-all duration-300 shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              {/* Poster Ambient Backdrop */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-red-600/15 via-cyan-500/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-bold text-white px-2 py-0.5 rounded bg-[#e50914]">
                    PROJECT {project.id}
                  </span>
                  <span className="font-mono text-[10px] text-cyan-300 font-semibold">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-xl font-black text-white mb-2 group-hover:text-[#e50914] transition-colors font-sans">
                  {project.title}
                </h4>

                <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3 font-sans">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenProjectModal(project);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#e50914] text-white font-mono text-xs font-bold uppercase tracking-wider group-hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(229,9,20,0.3)]"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>PLAY SIMULATION</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROW 3: TECHNICAL UNIVERSE */}
      <section id="stack" className="px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 bg-cyan-400 rounded-full" />
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase font-sans">
            TECHNICAL UNIVERSE & FRAMEWORKS
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {skillsNodes.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0b0e1a] border border-white/10 rounded-xl p-3.5 hover:border-cyan-400/60 transition-all select-none"
            >
              <div className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest mb-1">{skill.category}</div>
              <div className="font-sans text-xs font-bold text-white mb-1">{skill.name}</div>
              <div className="font-mono text-[9px] text-slate-400">{skill.level}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROW 4: CERTIFIED & VERIFIED */}
      <section id="certifications" className="px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 bg-emerald-400 rounded-full" />
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase font-sans">
            VERIFIED INDUSTRY CERTIFICATIONS
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-[#0b0e1a] border border-white/10 rounded-2xl p-5 hover:border-emerald-400/50 transition-all">
              <div className="flex items-center justify-between mb-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-[10px] text-emerald-300 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  {cert.year}
                </span>
              </div>
              <h4 className="font-sans text-xs font-bold text-white mb-1">{cert.title}</h4>
              <div className="font-mono text-[11px] text-violet-300 mb-2">{cert.issuer}</div>
              <p className="text-slate-400 text-xs font-sans leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROW 5: ACADEMIC JOURNEY */}
      <section id="education" className="px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 bg-violet-400 rounded-full" />
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase font-sans">
            ACADEMIC DEGREES & EDUCATION
          </h3>
        </div>

        <div className="bg-[#0b0e1a] border border-violet-500/30 rounded-3xl p-8 max-w-4xl relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-violet-500/20 rounded-2xl text-violet-300 border border-violet-400/30">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2 font-sans">{education[0].degree}</h4>
              <div className="text-slate-300 text-sm font-sans mb-1">{education[0].institution} • {education[0].location}</div>
              <div className="font-mono text-xs text-cyan-300 mb-4">TIMELINE: {education[0].duration} | CGPA: {education[0].cgpa}</div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-2xl font-sans">
                {education[0].description}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
