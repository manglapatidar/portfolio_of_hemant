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
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto z-20 relative">
      {/* Ambient center radiance matching hero section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/70 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-7 bg-rose-900 rounded-full" />
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            TOP PROJECTS
          </h2>
        </div>
        <p className="font-mono text-xs text-rose-900/70 uppercase tracking-widest pl-5 font-semibold">
          INTELLIGENCE, BUILT. — SELECT CARD TO EXPLORE ARCHITECTURE
        </p>
      </div>

      {/* Grid of Clean High-End Showcase Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            onClick={() => onOpenProjectModal(project)}
            className="bg-white/90 backdrop-blur-md border border-rose-200/80 hover:border-rose-400 rounded-3xl p-6 cursor-pointer group transition-all duration-300 shadow-[0_12px_36px_rgba(136,19,55,0.06)] hover:shadow-[0_20px_48px_rgba(136,19,55,0.14)] relative overflow-hidden flex flex-col justify-between select-none min-h-[340px]"
          >
            {/* Ambient Backlight Glow on Hover */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-rose-300/20 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="font-mono text-[10px] font-bold text-white px-2.5 py-1 rounded-md bg-rose-900 shadow-xs">
                  PROJECT {project.id}
                </span>
                <span className="font-mono text-[11px] text-rose-800 font-bold tracking-wider">
                  {project.category}
                </span>
              </div>

              <h3 className="font-sans text-xl font-black text-slate-900 mb-2 group-hover:text-rose-900 transition-colors leading-tight">
                {project.title}
              </h3>

              <p className="font-sans text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-rose-50 text-rose-950 border border-rose-200/70 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenProjectModal(project);
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-rose-900 text-white font-mono text-xs font-bold uppercase tracking-wider group-hover:bg-rose-800 transition-all shadow-[0_4px_16px_rgba(136,19,55,0.18)]"
              >
                <Play className="w-3.5 h-3.5 fill-white text-white" />
                <span>EXPLORE DETAILS</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
