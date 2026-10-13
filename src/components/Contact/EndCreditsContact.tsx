import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../../data/portfolio";
import { Mail, MapPin, Copy, Check, Send, ArrowUpRight, Sparkles } from "lucide-react";

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
      {/* Ambient center radiance matching hero section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/70 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Contact Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 font-mono text-xs font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-rose-700" />
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="font-sans text-3xl sm:text-6xl font-black text-slate-900 tracking-tight uppercase mb-4">
          LET'S BUILD SOMETHING INTELLIGENT.
        </h2>
        <p className="font-sans text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
          Available for AI/ML Engineering roles, research collaborations, and deep learning model development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Card (5 cols) */}
        <div className="lg:col-span-5 bg-white/90 backdrop-blur-md border border-rose-200/90 rounded-3xl p-8 shadow-[0_12px_36px_rgba(136,19,55,0.06)] space-y-6">
          <div>
            <h3 className="font-sans text-2xl font-black text-slate-900 mb-1">{engineer.name}</h3>
            <p className="font-mono text-xs text-rose-900 font-bold uppercase tracking-wider">{engineer.role}</p>
          </div>

          {/* Email with Copy */}
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/70 flex items-center justify-between">
            <div className="flex items-center gap-3 truncate">
              <div className="p-2.5 rounded-xl bg-white text-rose-900 border border-rose-200/80 shadow-xs">
                <Mail className="w-4 h-4" />
              </div>
              <div className="truncate">
                <div className="font-mono text-[10px] text-rose-800 uppercase font-bold">DIRECT EMAIL</div>
                <div className="font-mono text-xs text-slate-800 font-semibold truncate">{engineer.email}</div>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2.5 rounded-xl bg-white border border-rose-200 text-rose-900 hover:bg-rose-900 hover:text-white transition-all shrink-0 ml-2 shadow-xs"
              title="Copy email to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location */}
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/70 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white text-rose-900 border border-rose-200/80 shadow-xs">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-[10px] text-rose-800 uppercase font-bold">LOCATION</div>
              <div className="font-mono text-xs text-slate-800 font-semibold">{engineer.location}</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-rose-200/70 flex gap-3">
            <a
              href={engineer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-2xl bg-white border border-rose-200 text-slate-800 hover:text-rose-900 hover:border-rose-400 font-mono text-xs font-bold transition-all shadow-xs"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-rose-700" />
            </a>

            <a
              href={engineer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-2xl bg-white border border-rose-200 text-slate-800 hover:text-rose-900 hover:border-rose-400 font-mono text-xs font-bold transition-all shadow-xs"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-rose-700" />
            </a>
          </div>
        </div>

        {/* Message Form (7 cols) */}
        <div className="lg:col-span-7 bg-white/90 backdrop-blur-md border border-rose-200/90 rounded-3xl p-8 shadow-[0_12px_36px_rgba(136,19,55,0.06)]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="font-mono text-xs text-rose-900 uppercase tracking-widest mb-2 font-bold">
              // SEND DIRECT INQUIRY
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[10px] text-slate-600 font-semibold uppercase block mb-1">YOUR NAME</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  required
                  className="w-full bg-rose-50/50 border border-rose-200 rounded-xl p-3 text-slate-800 font-sans text-xs focus:border-rose-700 focus:bg-white outline-none transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] text-slate-600 font-semibold uppercase block mb-1">YOUR EMAIL</label>
                <input
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="jane@company.com"
                  required
                  className="w-full bg-rose-50/50 border border-rose-200 rounded-xl p-3 text-slate-800 font-sans text-xs focus:border-rose-700 focus:bg-white outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-[10px] text-slate-600 font-semibold uppercase block mb-1">PROJECT / ROLE BRIEF</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Describe your role or project collaboration..."
                required
                className="w-full bg-rose-50/50 border border-rose-200 rounded-xl p-3 text-slate-800 font-sans text-xs focus:border-rose-700 focus:bg-white outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-rose-900 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_4px_16px_rgba(136,19,55,0.22)] hover:bg-rose-800 transition-all hover:-translate-y-0.5"
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
