import { useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "../ui/Icons";
import { SectionHeading } from "../ui/SectionHeading";
import { PORTFOLIO_DATA } from "../../data/data";

function ProjectVisual({ type }: { type: string }) {
  // Render a placeholder mockup based on the project type
  if (type.includes("Computer Vision")) {
    return (
      <div className="w-full h-full bg-slate-900 rounded-lg overflow-hidden relative border border-slate-700">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjJEM0VFIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz4KPC9zdmc+')] bg-repeat" />
        <div className="absolute inset-4 border border-cyan-500/30 flex items-center justify-center bg-slate-800/80 backdrop-blur">
          <div className="text-center font-mono">
            <div className="w-16 h-16 border-2 border-cyan-400 rounded-sm mx-auto mb-4 relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400 -ml-1 -mt-1" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400 -mr-1 -mt-1" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400 -ml-1 -mb-1" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400 -mr-1 -mb-1" />
            </div>
            <span className="text-cyan-400 text-sm">Face_Detected: [0.98]</span>
          </div>
        </div>
      </div>
    );
  } else if (type.includes("Deep Learning")) {
    return (
      <div className="w-full h-full bg-slate-900 rounded-lg overflow-hidden relative border border-slate-700 flex divide-x divide-slate-700">
        <div className="flex-1 bg-slate-800 flex items-center justify-center relative">
          <span className="font-mono text-slate-500 text-xs">Content</span>
        </div>
        <div className="flex-1 bg-gradient-to-br from-violet-900/40 to-cyan-900/40 flex items-center justify-center relative">
          <span className="font-mono text-cyan-400 text-xs">Styled Output</span>
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg')] opacity-20 bg-cover bg-center" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full bg-slate-900 rounded-lg overflow-hidden relative border border-slate-700 p-4 flex flex-col justify-between">
        <div className="flex justify-between items-end h-1/2 border-b border-slate-700 pb-2 px-4 gap-2">
          <div className="w-full bg-cyan-500/20 h-[30%] rounded-t-sm" />
          <div className="w-full bg-cyan-500/40 h-[60%] rounded-t-sm" />
          <div className="w-full bg-cyan-500/60 h-[90%] rounded-t-sm" />
          <div className="w-full bg-violet-500/40 h-[50%] rounded-t-sm" />
          <div className="w-full bg-violet-500/60 h-[70%] rounded-t-sm" />
        </div>
        <div className="h-1/2 pt-4 flex gap-4">
          <div className="w-16 h-16 rounded-full border-4 border-cyan-500/30 border-t-cyan-500" />
          <div className="flex flex-col justify-center gap-2 flex-1">
            <div className="h-2 w-full bg-slate-700 rounded-full" />
            <div className="h-2 w-2/3 bg-slate-700 rounded-full" />
            <div className="h-2 w-1/2 bg-slate-700 rounded-full" />
          </div>
        </div>
      </div>
    );
  }
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D Parallax Hover Effect
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation (-6 to 6 degrees)
    const rotateY = ((mouseX / width) - 0.5) * 12;
    const rotateX = ((mouseY / height) - 0.5) * -12;
    
    x.set(rotateX);
    y.set(rotateY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
    >
      {/* Visual Area */}
      <div 
        className="w-full lg:w-1/2 perspective-[1000px]"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div 
          style={{ rotateX: x, rotateY: y }}
          className="relative w-full aspect-[4/3] rounded-xl overflow-hidden glass-card p-2 shadow-xl border-white/5 bg-white/5 transition-colors duration-300 hover:border-cyan-500/30"
        >
          <ProjectVisual type={project.type} />
        </motion.div>
      </div>

      {/* Content Area */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div>
          <div className="font-mono text-cyan-400 mb-2 flex items-center gap-2 text-sm">
            <span>{project.id}</span>
            <span className="text-slate-600">—</span>
            <span className="text-violet-400">TYPE: {project.type}</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-6 group cursor-pointer inline-flex items-center gap-2">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              {project.title}
            </a>
          </h3>
        </div>

        <div className="p-6 glass-card border-white/5 relative z-10 text-slate-300 leading-relaxed shadow-lg">
          {project.description}
        </div>

        <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-slate-400">
          {project.tags.map((tag: string, i: number) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-cyan-500 text-xs">▹</span> {tag}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 pt-4">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Live Demo"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-16">
          <SectionHeading number="03" title="Featured Work" />
          <p className="font-mono text-slate-400 mt-[-2rem] ml-[3.5rem] md:ml-[4.5rem]">A selection of my AI/ML projects.</p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
