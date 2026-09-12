import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "WORK", href: "#projects" },
    { label: "ENGINEER", href: "#engineer" },
    { label: "STACK", href: "#stack" },
    { label: "CERTIFIED", href: "#certifications" },
    { label: "EDUCATION", href: "#education" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-6xl transition-all duration-500 rounded-2xl ${
        scrolled
          ? "bg-[#060814]/90 backdrop-blur-xl border border-red-500/40 shadow-[0_0_30px_rgba(0,0,0,0.8)] py-3 px-6"
          : "bg-black/50 backdrop-blur-md border border-white/10 py-4 px-6"
      }`}
    >
      <div className="flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="font-mono font-black text-xl text-[#e50914] tracking-wider drop-shadow-[0_0_15px_rgba(229,9,20,0.6)]">
            HEMANTFLIX
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs font-semibold text-slate-300 hover:text-[#e50914] transition-colors tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Resume CTA */}
          <a
            href="/Resume 3.pdf"
            target="_blank"
            download="Hemant_Patidar_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-600/30 font-mono text-[11px] font-bold transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 text-slate-300 border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-2 border-t border-white/10 mt-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-xs font-semibold text-slate-300 hover:text-[#e50914] py-1.5 tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Resume 3.pdf"
            target="_blank"
            download="Hemant_Patidar_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 p-2.5 rounded-xl bg-cyan-600/30 text-cyan-200 font-mono text-xs font-bold"
          >
            <FileText className="w-4 h-4" /> DOWNLOAD RESUME
          </a>
        </div>
      )}
    </header>
  );
};
