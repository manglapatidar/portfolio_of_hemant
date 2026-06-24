import { cn } from "../../utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
  color?: "cyan" | "violet" | "slate";
}

export function Badge({ children, className, dot, color = "cyan" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border backdrop-blur-md",
        {
          "bg-cyan-500/10 border-cyan-500/20 text-cyan-300": color === "cyan",
          "bg-violet-500/10 border-violet-500/20 text-violet-300": color === "violet",
          "bg-slate-500/10 border-slate-500/20 text-slate-300": color === "slate",
        },
        className
      )}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full animate-pulse", {
            "bg-cyan-400": color === "cyan",
            "bg-violet-400": color === "violet",
            "bg-slate-400": color === "slate",
          })}
        />
      )}
      {children}
    </span>
  );
}
