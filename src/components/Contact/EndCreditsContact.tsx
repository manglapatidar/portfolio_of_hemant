import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../../data/portfolio";
import { Mail, MapPin, Copy, Check, Send, ArrowUpRight } from "lucide-react";

export const EndCreditsContact: React.FC = () => {
  const { engineer } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(engineer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${engineer.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto z-20 relative select-none">
      
      {/* End Credits Header */}
      <div className="text-center mb-16">
        <div className="font-mono text-xs text-[#e50914] uppercase tracking-widest mb-3 font-bold">
          // END CREDITS
        </div>
        <h2 className="font-sans text-4xl sm:text-7xl font-black text-white tracking-tighter uppercase mb-4 drop-shadow-[0_0_35px_rgba(229,9,20,0.3)]">
          LET'S BUILD SOMETHING INTELLIGENT.
        </h2>
        <p className="font-sans text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
          Available for AI/ML Engineering roles, research collaborations, and deep learning model development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Card (5 cols) */}
        <div className="lg:col-span-5 bg-[#0a0e1a] border border-[#e50914]/40 rounded-3xl p-8 shadow-2xl space-y-6">
          <div>
            <h3 className="font-sans text-2xl font-black text-white mb-1">{engineer.name}</h3>
            <p className="font-mono text-xs text-[#e50914] font-bold uppercase tracking-wider">{engineer.role}</p>
          </div>

          {/* Email with Copy */}
          <div className="p-4 rounded-2xl bg-[#050711] border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3 truncate">
              <div className="p-2 rounded-xl bg-[#e50914]/20 text-red-400">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <div className="font-mono text-[10px] text-slate-500 uppercase">DIRECT EMAIL</div>
                <div className="font-mono text-xs text-slate-200 font-semibold truncate">{engineer.email}</div>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-300 hover:bg-[#e50914]/20 transition-all shrink-0 ml-2"
              title="Copy email to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location */}
          <div className="p-4 rounded-2xl bg-[#050711] border border-white/10 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-[10px] text-slate-500 uppercase">LOCATION</div>
              <div className="font-mono text-xs text-slate-200 font-semibold">{engineer.location}</div>
            </div>
          </div>

          {/* Verified Social Actions */}
          <div className="pt-4 border-t border-white/10 flex gap-3">
            <a
              href={engineer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:border-[#e50914] font-mono text-xs font-bold transition-all"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={engineer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:border-cyan-400 font-mono text-xs font-bold transition-all"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Message Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#0a0e1a] border border-white/10 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="font-mono text-xs text-[#e50914] uppercase tracking-widest mb-2 font-bold">
              // SEND DIRECT INQUIRY
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[10px] text-slate-400 uppercase block mb-1">YOUR NAME</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  required
                  className="w-full bg-[#050711] border border-white/10 rounded-xl p-3 text-slate-200 font-sans text-xs focus:border-[#e50914] outline-none"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] text-slate-400 uppercase block mb-1">YOUR EMAIL</label>
                <input
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="jane@company.com"
                  required
                  className="w-full bg-[#050711] border border-white/10 rounded-xl p-3 text-slate-200 font-sans text-xs focus:border-[#e50914] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-[10px] text-slate-400 uppercase block mb-1">PROJECT / ROLE BRIEF</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Describe your role or project collaboration..."
                required
                className="w-full bg-[#050711] border border-white/10 rounded-xl p-3 text-slate-200 font-sans text-xs focus:border-[#e50914] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#e50914] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:bg-red-700 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>SEND MAIL DIRECTLY</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
