import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
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
      {/* Background Neural Motif & Cinematic Ambient Glows */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[150px]" />
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
        >
          <LipSyncAvatar />
        </motion.div>
      </div>
    </section>
  );
}
