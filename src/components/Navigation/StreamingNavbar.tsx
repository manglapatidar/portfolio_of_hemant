import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

export const StreamingNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-3.5 px-6 sm:px-12 ${
        scrolled
          ? "bg-[#050507]/90 backdrop-blur-md border-b border-white/10 shadow-2xl"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Streaming Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-mono font-black text-xl sm:text-2xl text-[#e50914] tracking-widest drop-shadow-[0_0_12px_rgba(229,9,20,0.6)]">
            HEMANTFLIX
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs font-semibold text-slate-300 hover:text-white transition-colors tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA: Resume */}
        <div className="flex items-center gap-3">
          <a
            href="/Resume 3.pdf"
            target="_blank"
            download="Hemant_Patidar_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#e50914] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(229,9,20,0.3)]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-slate-300 border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-3 border-t border-white/10 mt-3 flex flex-col gap-3.5 bg-[#050507]/95 px-4 rounded-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-xs font-semibold text-slate-200 hover:text-[#e50914] py-1 tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
