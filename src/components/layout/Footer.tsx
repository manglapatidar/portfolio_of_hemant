import React from "react";
import { PORTFOLIO_DATA } from "../../data/portfolio";

export const Footer: React.FC = () => {
  const { engineer } = PORTFOLIO_DATA;

  return (
    <footer className="py-12 border-t border-rose-200/60 bg-white/70 backdrop-blur-md text-slate-600 font-mono text-xs relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-rose-900 font-bold font-sans text-sm">HEMANT PATIDAR</span> — {engineer.role}
        </div>
        <div className="text-slate-500 text-[11px] font-sans">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED • CRAFTED WITH REACT, TYPESCRIPT & FRAMER MOTION
        </div>
        <div className="flex items-center gap-5">
          <a
            href={engineer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-900 transition-colors font-semibold"
          >
            GITHUB
          </a>
          <a
            href={engineer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-900 transition-colors font-semibold"
          >
            LINKEDIN
          </a>
          <a
            href={engineer.resumeUrl}
            target="_blank"
            download="Hemant_Patidar_Resume.pdf"
            className="hover:text-rose-900 transition-colors font-semibold text-rose-800"
          >
            RESUME
          </a>
        </div>
      </div>
    </footer>
  );
};
