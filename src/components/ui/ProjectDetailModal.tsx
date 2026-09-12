import React from "react";
import { motion } from "framer-motion";
import type { ProjectItem } from "../../data/data";
import { X, Code2, Play } from "lucide-react";
import {
  TextSummarizerVisualizer,
  AttendanceVisualizer,
  StyleTransferVisualizer,
  CustomerSegmentationVisualizer,
} from "./ProjectVisualizers";

interface ProjectDetailModalProps {
  project: ProjectItem;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const renderVisualizer = (visualType: ProjectItem["visualType"]) => {
    switch (visualType) {
      case "summarizer":
        return <TextSummarizerVisualizer />;
      case "attendance":
        return <AttendanceVisualizer />;
      case "style_transfer":
        return <StyleTransferVisualizer />;
      case "segmentation":
        return <CustomerSegmentationVisualizer />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#0a0e1e] border border-red-500/40 rounded-3xl max-w-4xl w-full p-6 sm:p-8 relative shadow-[0_0_50px_rgba(229,9,20,0.3)] my-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-red-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs font-bold text-[#e50914] px-2.5 py-1 rounded bg-red-500/10 border border-red-500/30">
              PROJECT {project.id}
            </span>
            <span className="font-mono text-xs text-violet-300">
              {project.type}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {project.title}
          </h3>
        </div>

        {/* Modal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-6">
          
          {/* Details Column */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              {project.description}
            </p>

            <div className="space-y-2 pt-2">
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold">// KEY HIGHLIGHTS</div>
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-400 font-sans">
                  <Code2 className="w-4 h-4 text-[#e50914] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="font-mono text-xs text-slate-400 uppercase mb-2">// TECH STACK</div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e50914] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>VIEW REPOSITORY</span>
              </a>
            </div>
          </div>

          {/* Simulation Visualizer Column */}
          <div className="lg:col-span-6 w-full">
            {renderVisualizer(project.visualType)}
          </div>

        </div>
      </motion.div>
    </div>
  );
};
