import React from "react";
import { PORTFOLIO_DATA } from "../../data/data";

export const Footer: React.FC = () => {
  const { engineer } = PORTFOLIO_DATA;

  return (
    <footer className="py-12 border-t border-white/10 bg-[#030408] text-slate-400 font-mono text-xs relative z-10">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[#e50914] font-bold">HEMANTFLIX</span> — {engineer.name} ({engineer.role})
        </div>
        <div className="text-slate-500 text-[11px]">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED • BUILT WITH REACT, TYPESCRIPT, TAILWIND & GSAP/FRAMER MOTION
        </div>
        <div className="flex items-center gap-4">
          <a
            href={engineer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e50914] transition-colors"
          >
            GITHUB
          </a>
          <a
            href={engineer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="/Resume 3.pdf"
            target="_blank"
            download="Hemant_Patidar_Resume.pdf"
            className="hover:text-violet-400 transition-colors"
          >
            RESUME
          </a>
        </div>
      </div>
    </footer>
  );
};
