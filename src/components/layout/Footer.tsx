import { Mail } from "lucide-react";
import { Github, Linkedin } from "../ui/Icons";
import { PORTFOLIO_DATA } from "../../data/data";

export function Footer() {
  const { contact } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 mt-12">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${contact.email}`} className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-slate-500 text-sm">
          © {currentYear} Hemant Patidar. All rights reserved.
        </div>
        
        <div className="font-mono text-xs text-slate-600 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          SYS.STATUS: ONLINE
        </div>
      </div>
    </footer>
  );
}
