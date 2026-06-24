import { motion } from "framer-motion";

export function NeuralNetworkDiagram({ className }: { className?: string }) {
  // Simple SVG neural net diagram with glowing nodes and animated connecting lines
  const nodes = [
    { id: 1, cx: 10, cy: 50 },
    { id: 2, cx: 30, cy: 20 },
    { id: 3, cx: 30, cy: 80 },
    { id: 4, cx: 60, cy: 10 },
    { id: 5, cx: 60, cy: 50 },
    { id: 6, cx: 60, cy: 90 },
    { id: 7, cx: 85, cy: 30 },
    { id: 8, cx: 85, cy: 70 },
    { id: 9, cx: 100, cy: 50 },
  ];

  const links = [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 2, target: 4 },
    { source: 2, target: 5 },
    { source: 3, target: 5 },
    { source: 3, target: 6 },
    { source: 4, target: 7 },
    { source: 5, target: 7 },
    { source: 5, target: 8 },
    { source: 6, target: 8 },
    { source: 7, target: 9 },
    { source: 8, target: 9 },
  ];

  return (
    <div className={`relative w-full h-full opacity-20 pointer-events-none ${className || ""}`}>
      <svg width="100%" height="100%" viewBox="0 0 110 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="1" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Links */}
        {links.map((link, i) => {
          const source = nodes.find(n => n.id === link.source)!;
          const target = nodes.find(n => n.id === link.target)!;
          return (
            <motion.line
              key={`link-${i}`}
              x1={source.cx}
              y1={source.cy}
              x2={target.cx}
              y2={target.cy}
              stroke="#22D3EE"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${node.id}`}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="1.5"
              fill="#22D3EE"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="4"
              fill="url(#glow)"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
