import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Sparkles, UserCheck } from "lucide-react";

interface ProfileSelectorProps {
  onSelectProfile: (profileId: string) => void;
}

export const PROFILES = [
  {
    id: "recruiter",
    title: "RECRUITER",
    tagline: "Hiring & Talent Acquisition",
    description: "Tailored view focusing on core ML projects, production FastAPI code, and academic credentials.",
    icon: Briefcase,
    badgeColor: "from-[#e50914] to-[#b81d24]",
    accentGlow: "shadow-[0_0_30px_rgba(229,9,20,0.4)]",
    borderColor: "hover:border-red-500",
  },
  {
    id: "developer",
    title: "DEVELOPER",
    tagline: "Software & ML Engineer",
    description: "Deep dive into PyTorch neural architectures, T5 transformers, OpenCV, and SQL pipelines.",
    icon: Code,
    badgeColor: "from-cyan-500 to-blue-600",
    accentGlow: "shadow-[0_0_30px_rgba(34,211,238,0.4)]",
    borderColor: "hover:border-cyan-400",
  },
  {
    id: "enthusiast",
    title: "AI ENTHUSIAST",
    tagline: "Tech & GenAI Explorer",
    description: "Interactive simulations for Neural Style Transfer, Text Summarization, and Computer Vision.",
    icon: Sparkles,
    badgeColor: "from-violet-500 to-purple-600",
    accentGlow: "shadow-[0_0_30px_rgba(139,92,246,0.4)]",
    borderColor: "hover:border-violet-400",
  },
];

export const ProfileSelector: React.FC<ProfileSelectorProps> = ({ onSelectProfile }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center p-6 overflow-y-auto">
      
      {/* Brand Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="inline-block font-black text-4xl sm:text-6xl tracking-widest text-[#e50914] drop-shadow-[0_0_25px_rgba(229,9,20,0.6)] font-mono mb-2">
          HEMANTFLIX
        </div>
        <div className="font-mono text-xs text-slate-400 uppercase tracking-widest">
          AI & MACHINE LEARNING CINEMATIC EXPERIENCE
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-12 text-center"
      >
        WHO'S EXPLORING?
      </motion.h2>

      {/* Profiles Cards Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {PROFILES.map((profile, idx) => {
          const Icon = profile.icon;
          return (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              onClick={() => onSelectProfile(profile.id)}
              className={`bg-[#0a0e1a]/90 border border-white/10 ${profile.borderColor} rounded-3xl p-8 backdrop-blur-xl cursor-pointer group transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between select-none ${profile.accentGlow}`}
            >
              <div>
                {/* Profile Icon Avatar */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${profile.badgeColor} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="font-mono text-2xl font-bold text-white mb-1 group-hover:text-[#e50914] transition-colors">
                  {profile.title}
                </h3>
                <div className="font-mono text-xs text-slate-400 mb-4">{profile.tagline}</div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {profile.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400 group-hover:text-white">
                <span>ENTER PROFILE</span>
                <UserCheck className="w-4 h-4 text-[#e50914] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 font-mono text-xs text-slate-500 text-center"
      >
        Hemant Patidar • AI/ML Engineer Portfolio • Mandsaur University
      </motion.p>
    </div>
  );
};
