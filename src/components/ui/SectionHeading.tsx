import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionHeading({ number, title, className }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn("flex flex-col items-start mb-12", className)}
    >
      <h2 className="flex items-baseline gap-4 text-3xl md:text-4xl font-bold text-white tracking-tight">
        <span className="text-cyan-400 font-mono text-xl md:text-2xl">{number}</span>
        {title}
      </h2>
      <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mt-4 rounded-full box-glow-cyan" />
    </motion.div>
  );
}
