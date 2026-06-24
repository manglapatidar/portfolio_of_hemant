import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  filename?: string;
  glowOnHover?: boolean;
}

export function Card({ children, className, filename, glowOnHover, ...props }: CardProps) {
  return (
    <motion.div
      {...props}
      className={cn(
        "glass-card relative overflow-hidden group p-6 sm:p-8",
        glowOnHover && "transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:-translate-y-1",
        className
      )}
    >
      {filename && (
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          <span className="font-mono text-xs text-slate-500 group-hover:text-cyan-400 transition-colors">
            // {filename}
          </span>
        </div>
      )}
      {children}
    </motion.div>
  );
}
