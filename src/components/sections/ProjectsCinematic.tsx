import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/data";
import type { ProjectItem } from "../../data/data";
import { Code2 } from "lucide-react";
import {
  TextSummarizerVisualizer,
  AttendanceVisualizer,
  StyleTransferVisualizer,
  CustomerSegmentationVisualizer,
} from "../ui/ProjectVisualizers";

export const ProjectsCinematic: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

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
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#060814]/90 to-transparent">
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
            <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">SECTION 03</span>
            <span className="w-12 h-[1px] bg-cyan-500/40" />
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">SELECTED WORK</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            INTELLIGENCE, BUILT.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Cinematic case studies showcasing fine-tuned language transformers, biometric computer vision authentication, generative style synthesis, and behavioral clustering algorithms.
          </p>
        </motion.div>

        {/* Project Cards Stream */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#0a0e1e]/90 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              {/* Subtle Ambient Card Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Text & Details Column (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs font-bold text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                        PROJECT {project.id}
                      </span>
                      <span className="font-mono text-xs text-violet-300">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>

                    {/* Technical Highlights */}
                    <div className="mb-6 space-y-2">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-slate-400">
                          <Code2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 font-mono text-xs font-bold tracking-wider transition-all"
                    >
                      <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>VIEW CODE</span>
                    </a>
                  </div>
                </div>

                {/* Interactive Visualizer Column (5 cols) */}
                <div className="lg:col-span-5 w-full">
                  {renderVisualizer(project.visualType)}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
