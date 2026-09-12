import React from "react";
import { motion } from "framer-motion";
import type { ProjectData } from "../../data/portfolio";
import { X, Play, Code2, ArrowRight } from "lucide-react";

interface ProjectCinematicModalProps {
  project: ProjectData;
  onClose: () => void;
}

export const ProjectCinematicModal: React.FC<ProjectCinematicModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#0a0e1a] border border-[#e50914]/50 rounded-3xl max-w-5xl w-full p-6 sm:p-10 relative shadow-[0_0_60px_rgba(229,9,20,0.3)] my-auto max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-[#e50914] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs font-bold text-white px-3 py-1 rounded bg-[#e50914]">
              PROJECT {project.id}
            </span>
            <span className="font-mono text-xs text-cyan-300 font-semibold">
              {project.category}
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl font-black text-white tracking-tight">
            {project.title}
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Problem & Approach (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="font-mono text-xs text-[#e50914] uppercase tracking-widest font-bold mb-2">
                // THE OVERVIEW
              </h3>
              <p className="font-sans text-slate-200 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold mb-2">
                // THE PROBLEM STATEMENT
              </h3>
              <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs text-violet-400 uppercase tracking-widest font-bold mb-2">
                // TECHNICAL APPROACH
              </h3>
              <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.approach}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">
                // TECHNOLOGIES & LIBRARIES
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Animated Pipeline Diagram (5 cols) */}
          <div className="lg:col-span-5 bg-[#050711] border border-white/10 rounded-2xl p-6">
            <h3 className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>ARCHITECTURE PIPELINE</span>
            </h3>

            <div className="space-y-3">
              {project.pipelineSteps.map((step, sIdx) => (
                <React.Fragment key={sIdx}>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sIdx * 0.1 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-sans text-xs flex items-center justify-between"
                  >
                    <span className="font-mono text-slate-400 text-[10px]">STEP 0{sIdx + 1}</span>
                    <span className="font-semibold text-cyan-200">{step}</span>
                  </motion.div>

                  {sIdx < project.pipelineSteps.length - 1 && (
                    <div className="flex justify-center my-1">
                      <ArrowRight className="w-3.5 h-3.5 text-[#e50914] rotate-90" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e50914] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(229,9,20,0.4)]"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>VIEW ON GITHUB</span>
            </a>
          ) : (
            <div />
          )}

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-white/10 text-slate-300 font-mono text-xs font-semibold hover:bg-white/20 transition-colors"
          >
            CLOSE PREVIEW
          </button>
        </div>

      </motion.div>
    </div>
  );
};
