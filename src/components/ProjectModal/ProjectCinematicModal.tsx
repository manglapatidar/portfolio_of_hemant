import React from "react";
import { motion } from "framer-motion";
import type { ProjectData } from "../../data/portfolio";
import { X, Code2, ExternalLink, Cpu } from "lucide-react";

interface ProjectCinematicModalProps {
  project: ProjectData;
  onClose: () => void;
}

export const ProjectCinematicModal: React.FC<ProjectCinematicModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white/95 border border-rose-200 rounded-3xl max-w-4xl w-full p-6 sm:p-10 relative shadow-[0_25px_70px_rgba(136,19,55,0.22)] my-auto max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-rose-50 text-rose-900 hover:bg-rose-900 hover:text-white transition-colors border border-rose-200/70"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8 pr-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs font-bold text-white px-3 py-1 rounded-md bg-rose-900">
              PROJECT {project.id}
            </span>
            <span className="font-mono text-xs text-rose-800 font-bold tracking-wider">
              {project.category}
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {project.title}
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Problem & Approach (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="font-mono text-xs text-rose-900 uppercase tracking-widest font-bold mb-2">
                // THE OVERVIEW
              </h3>
              <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs text-rose-900 uppercase tracking-widest font-bold mb-2">
                // THE PROBLEM STATEMENT
              </h3>
              <p className="font-sans text-slate-600 text-sm leading-relaxed bg-rose-50/70 border border-rose-200/70 rounded-2xl p-4">
                {project.problem}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs text-rose-900 uppercase tracking-widest font-bold mb-2">
                // ENGINEERING APPROACH
              </h3>
              <p className="font-sans text-slate-700 text-sm leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Pipeline & Technologies (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Model Architecture Pipeline */}
            <div className="bg-rose-50/60 border border-rose-200/80 rounded-2xl p-5">
              <h4 className="font-mono text-xs text-rose-950 uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-rose-800" />
                <span>INFERENCE PIPELINE</span>
              </h4>
              <div className="space-y-2">
                {project.pipelineSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-mono text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-rose-200/70 text-rose-950 font-bold flex items-center justify-center text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-mono text-xs text-rose-900 uppercase tracking-widest font-bold mb-3">
                STACK & FRAMEWORKS
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-white border border-rose-200/80 text-rose-950 font-medium shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Link */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-rose-900 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-rose-800 transition-all shadow-[0_4px_16px_rgba(136,19,55,0.2)]"
              >
                <Code2 className="w-4 h-4" />
                <span>VIEW REPOSITORY</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            )}
          </div>

        </div>
      </motion.div>
    </div>
  );
};
