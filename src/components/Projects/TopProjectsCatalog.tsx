import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/portfolio";
import type { ProjectData } from "../../data/portfolio";
import { Play } from "lucide-react";

interface TopProjectsCatalogProps {
  onOpenProjectModal: (project: ProjectData) => void;
}

export const TopProjectsCatalog: React.FC<TopProjectsCatalogProps> = ({ onOpenProjectModal }) => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-16 px-6 max-w-7xl mx-auto z-20 relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-1.5 h-7 bg-[#e50914] rounded-full" />
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            TOP PROJECTS
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 uppercase tracking-widest pl-4">
          INTELLIGENCE, BUILT. — SELECT THUMBNAIL TO PLAY SIMULATION
        </p>
      </div>

      {/* Grid of Streaming Content Thumbnails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => onOpenProjectModal(project)}
            className={`bg-gradient-to-b ${project.visualTheme} border border-white/10 rounded-2xl p-6 cursor-pointer group hover:border-[#e50914] transition-all duration-300 shadow-2xl relative overflow-hidden flex flex-col justify-between select-none min-h-[320px]`}
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#e50914]/15 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] font-bold text-white px-2.5 py-0.5 rounded bg-[#e50914]">
                  PROJECT {project.id}
                </span>
                <span className="font-mono text-[10px] text-cyan-300 font-semibold tracking-wider">
                  {project.category}
                </span>
              </div>

              <h3 className="font-sans text-xl font-black text-white mb-2 group-hover:text-[#e50914] transition-colors leading-tight">
                {project.title}
              </h3>

              <p className="font-sans text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1 mb-5">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Play Simulation CTA */}
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
  );
};
