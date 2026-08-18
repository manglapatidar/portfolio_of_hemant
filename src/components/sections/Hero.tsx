import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Cpu, Sparkles, Code2 } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { NeuralNetworkDiagram } from "../ui/NeuralNetworkDiagram";
import { LipSyncAvatar } from "../ui/LipSyncAvatar";

const ROLES = [
  "AI/ML Engineer",
  "Deep Learning Enthusiast",
  "Computer Vision Developer",
  "Data Science Explorer"
];

const METRICS = [
  { label: "AI & ML Models Built", value: "10+", icon: Cpu },
  { label: "Computer Vision Systems", value: "98%", icon: Sparkles },
  { label: "Code Architecture", value: "Python / PyTorch", icon: Code2 },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    const currentRole = ROLES[roleIndex];
    
    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        timeout = setTimeout(() => {}, 500);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, 50);
      }
    } else {
      if (displayText.length === currentRole.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] } }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Neural Motif & Ambient Glows */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute top-1/3 right-0 w-[45rem] h-[45rem] rounded-full bg-violet-600/15 blur-[160px]" />
        <NeuralNetworkDiagram className="w-[850px] h-[850px] absolute -right-40 top-1/2 -translate-y-1/2 opacity-35 md:opacity-55" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content Area */}
          <motion.div 
            className="flex-1 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badges */}
            <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3 flex-wrap">
              <Badge dot color="cyan" className="shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                SYSTEM STATUS: ONLINE
              </Badge>
              <div className="font-mono text-xs text-violet-400 bg-violet-500/10 border border-violet-500/30 px-3 py-1 rounded-full">
                AI / ML ENGINEER
              </div>
            </motion.div>
            
            <motion.p variants={itemVariants} className="font-mono text-slate-400 mb-3 flex items-center gap-2 text-sm tracking-wider">
              <span className="text-cyan-400">{'>'}</span> Hello, World! I'm
            </motion.p>
            
            {/* Cinematic Gradient Heading */}
            <motion.h1 
              variants={itemVariants} 
              className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 tracking-tight bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.2)]"
            >
              HEMANT
            </motion.h1>
            
            {/* Dynamic Typewriter Roles */}
            <motion.div variants={itemVariants} className="text-xl sm:text-2xl font-mono text-cyan-400 mb-6 h-8 flex items-center">
              <span className="text-slate-500 mr-2">//</span>
              <span className="text-glow-cyan">{displayText}</span>
              <span className="inline-block w-2 h-6 bg-cyan-400 ml-1.5 animate-pulse align-middle" />
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl font-sans">
              Designing advanced neural architectures, computer vision models, and deep learning pipelines — transforming complex data into intelligent solutions.
            </motion.p>
            
            {/* Action CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
              <Button href="#projects" variant="primary" className="shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                VIEW WORK <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/Resume.pdf" target="_blank" variant="outline" download="Hemant_Patidar_Resume.pdf">
                Resume <Download className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Avatar Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <LipSyncAvatar />
          </motion.div>
        </div>

        {/* Cinematic Quick Metric Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div 
                key={idx}
                className="glass-card-hover p-4 flex items-center gap-4 bg-navy/80 backdrop-blur-md border border-white/10 rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="font-mono text-xl font-bold text-white tracking-wide text-glow-cyan">{metric.value}</div>
                  <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">{metric.label}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
