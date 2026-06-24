import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { NeuralNetworkDiagram } from "../ui/NeuralNetworkDiagram";

const ROLES = [
  "AI/ML Engineer",
  "Deep Learning Enthusiast",
  "Computer Vision Developer",
  "Data Science Explorer"
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Neural Motif */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <NeuralNetworkDiagram className="w-[800px] h-[800px] absolute -right-40 top-1/2 -translate-y-1/2 opacity-30 md:opacity-50" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          className="flex-1 max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Badge dot color="cyan">AVAILABLE FOR WORK</Badge>
          </motion.div>
          
          <motion.p variants={itemVariants} className="font-mono text-slate-400 mb-4 flex items-center gap-2">
            <span className="text-cyan-500">{'>'}</span> Hello, World! I'm
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
            HEMANT
          </motion.h1>
          
          <motion.div variants={itemVariants} className="text-xl sm:text-2xl font-mono text-cyan-400 mb-6 h-8">
            <span className="text-slate-500 mr-2">//</span>
            <span>{displayText}</span>
            <span className="inline-block w-2 h-6 bg-cyan-400 ml-1 animate-pulse align-middle" />
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
            Building intelligent systems with Machine Learning, Deep Learning, and Computer Vision — turning data into real-world solutions.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary">
              VIEW WORK <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button href="/Resume.pdf" target="_blank" variant="outline" download="Hemant_Patidar_Resume.pdf">
              Resume <Download className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 shrink-0 mt-8 md:mt-0"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 box-glow-cyan border border-cyan-500/30 overflow-hidden group glass-card p-0">
            {/* Profile Image */}
            <div className="w-full h-full relative group">
              <img 
                src="/Hemant.png" 
                alt="Hemant Patidar" 
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent mix-blend-multiply" />
              {/* Animated scan line */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] z-10 opacity-70"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
              />
            </div>
            
            <div className="absolute bottom-4 right-4 bg-navy/80 backdrop-blur border border-white/10 px-2 py-1 rounded font-mono text-xs text-violet-400 z-20">
              AI_READY
            </div>
          </div>

          {/* Floating tech badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-4 bg-navy border border-white/10 rounded-lg p-3 shadow-xl glass-card flex items-center justify-center"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="w-6 h-6 opacity-80" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 -right-6 bg-navy border border-white/10 rounded-lg p-3 shadow-xl glass-card flex items-center justify-center"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" alt="PyTorch" className="w-6 h-6 opacity-80" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
