import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/data";
import type { SkillNode } from "../../data/data";
import { Cpu, Network, Sparkles, Code2, Server, Database } from "lucide-react";

export const TechConstellation: React.FC = () => {
  const { skillsNodes } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeNode, setActiveNode] = useState<SkillNode | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const categories = [
    { id: "ALL", label: "ALL TECH" },
    { id: "Core ML", label: "CORE ML" },
    { id: "Vision & NLP", label: "VISION & NLP" },
    { id: "Generative AI", label: "GENERATIVE AI" },
    { id: "Engineering & Infra", label: "ENGINEERING" },
    { id: "Data & Analytics", label: "DATA" },
  ];

  const filteredNodes = selectedCategory === "ALL"
    ? skillsNodes
    : skillsNodes.filter((node) => node.category === selectedCategory);

  const isNodeConnected = (nodeId: string) => {
    if (!hoveredNodeId && !activeNode) return false;
    const current = hoveredNodeId || activeNode?.id;
    if (!current) return false;
    if (nodeId === current) return true;
    const found = skillsNodes.find((n) => n.id === current);
    return found?.connections.includes(nodeId) || false;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Core ML": return Cpu;
      case "Vision & NLP": return Network;
      case "Generative AI": return Sparkles;
      case "Engineering & Infra": return Server;
      case "Data & Analytics": return Database;
      default: return Code2;
    }
  };

  return (
    <section id="stack" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest uppercase">SECTION 02</span>
            <span className="w-12 h-[1px] bg-cyan-500/40" />
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">THE INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            TECHNOLOGY ECOSYSTEM & ECO-NETWORK
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Interactive AI constellation nodes. Select or hover over technologies to inspect model frameworks, deep learning stacks, and inter-connected infrastructure.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2.5 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] border border-cyan-400/50"
                  : "bg-[#0a0e1c]/80 text-slate-400 border border-white/10 hover:border-cyan-500/30 hover:text-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid & Constellation Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Nodes Matrix (2 Columns on lg) */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {filteredNodes.map((node) => {
              const Icon = getCategoryIcon(node.category);
              const connected = isNodeConnected(node.id);
              const isActive = activeNode?.id === node.id;
              const isHovered = hoveredNodeId === node.id;

              return (
                <motion.div
                  key={node.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => setActiveNode(node)}
                  className={`relative p-4 rounded-xl border cursor-pointer backdrop-blur-md transition-all duration-300 select-none ${
                    isActive
                      ? "bg-gradient-to-br from-cyan-950/80 to-violet-950/80 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                      : isHovered || connected
                      ? "bg-[#0f1428]/90 border-cyan-400/70 shadow-[0_0_15px_rgba(34,211,238,0.2)] transform -translate-y-1"
                      : "bg-[#090d19]/80 border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Subtle Node Indicator */}
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-1.5 rounded-lg ${
                      isActive || connected ? "bg-cyan-500/20 text-cyan-300" : "bg-white/5 text-slate-400"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`font-mono text-[9px] px-2 py-0.5 rounded-full border ${
                      node.level === "Expert"
                        ? "border-cyan-500/40 text-cyan-300 bg-cyan-500/10"
                        : node.level === "Advanced"
                        ? "border-violet-500/40 text-violet-300 bg-violet-500/10"
                        : "border-slate-600 text-slate-400 bg-slate-800/50"
                    }`}>
                      {node.level}
                    </span>
                  </div>

                  <h3 className="font-mono text-sm font-bold text-white mb-1 group-hover:text-cyan-300">
                    {node.name}
                  </h3>

                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    {node.category}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Node Inspector Detail Panel */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              {activeNode ? (
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-[#0b0f20]/90 border border-cyan-500/40 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.15)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />

                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                    <div>
                      <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">SELECTED NODE</span>
                      <h3 className="text-2xl font-mono font-bold text-white">{activeNode.name}</h3>
                    </div>
                    <button
                      onClick={() => setActiveNode(null)}
                      className="font-mono text-xs text-slate-400 hover:text-white px-2 py-1 bg-white/5 rounded-lg"
                    >
                      CLOSE
                    </button>
                  </div>

                  <div className="space-y-4 font-sans text-sm">
                    <div>
                      <span className="font-mono text-xs text-slate-400 block mb-1">CATEGORY & PROFICIENCY</span>
                      <span className="font-mono text-xs font-semibold text-cyan-300">{activeNode.category} • {activeNode.level}</span>
                    </div>

                    <div>
                      <span className="font-mono text-xs text-slate-400 block mb-1">SYSTEM OVERVIEW</span>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {activeNode.description}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-xs text-slate-400 block mb-2">CONNECTED FRAMEWORKS</span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeNode.connections.map((connId) => {
                          const connNode = skillsNodes.find((n) => n.id === connId);
                          return (
                            <span
                              key={connId}
                              onClick={() => connNode && setActiveNode(connNode)}
                              className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 cursor-pointer transition-colors"
                            >
                              {connNode ? connNode.name : connId}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-[#090d18]/60 border border-white/5 rounded-2xl p-8 text-center backdrop-blur-md flex flex-col items-center justify-center min-h-[250px]">
                  <Network className="w-10 h-10 text-cyan-500/40 mb-3 animate-pulse" />
                  <h4 className="font-mono text-sm text-slate-300 font-semibold mb-1">SELECT A TECHNOLOGY NODE</h4>
                  <p className="text-xs text-slate-500 max-w-xs">
                    Click any node in the constellation matrix to inspect technical framework details and dependencies.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
