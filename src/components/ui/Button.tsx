import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  magnetic?: boolean;
}

export function Button({ 
  children, 
  className, 
  variant = "primary", 
  href,
  target,
  rel,
  download,
  magnetic = true,
  ...props 
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-6 py-3 font-sans font-medium rounded-full transition-colors duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-cyan-500/50";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] border border-white/10",
    outline: "bg-transparent text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref as any}
      href={href}
      target={target}
      rel={rel}
      download={download}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(baseStyles, variants[variant], className)}
      {...(props as any)}
    >
      {children}
    </Component>
  );
}
