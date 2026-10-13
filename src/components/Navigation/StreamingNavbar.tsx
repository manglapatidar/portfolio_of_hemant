import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolio";

export const StreamingNavbar: React.FC = () => {
  const { engineer } = PORTFOLIO_DATA;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "WORK", href: "#projects" },
    { label: "SPECIALIZATION", href: "#stack" },
    { label: "ABOUT", href: "#engineer" },
    { label: "CREDENTIALS", href: "#education" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-3.5 px-6 sm:px-12 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-rose-200/60 shadow-[0_4px_20px_rgba(136,19,55,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Minimal Brand Name as specified in the Guide */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-rose-900 text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-sm group-hover:bg-rose-800 transition-colors">
            HP
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-extrabold text-base sm:text-lg text-slate-900 tracking-tight group-hover:text-rose-900 transition-colors">
              {engineer.name}
            </span>
            <span className="font-mono text-[10px] text-rose-800/80 font-medium tracking-widest uppercase -mt-0.5">
              Portfolio
            </span>
          </div>
        </a>

        {/* Minimal Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs font-semibold text-slate-600 hover:text-rose-900 transition-colors tracking-wider uppercase relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-700 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA: Resume Download */}
        <div className="flex items-center gap-3">
          <a
            href={engineer.resumeUrl}
            target="_blank"
            download="Hemant_Patidar_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-900 text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-rose-800 transition-all shadow-[0_4px_16px_rgba(136,19,55,0.18)] hover:-translate-y-0.5"
          >
            <FileText className="w-3.5 h-3.5 text-rose-200" />
            <span>RESUME</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/80 text-slate-700 border border-rose-200/80 shadow-sm"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-4 border-t border-rose-200/60 mt-3 flex flex-col gap-3 bg-white/95 backdrop-blur-lg px-5 rounded-2xl shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-sm font-semibold text-slate-700 hover:text-rose-900 py-1.5 tracking-wider uppercase flex items-center justify-between"
            >
              <span>{link.label}</span>
              <Sparkles className="w-3 h-3 text-rose-400" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
