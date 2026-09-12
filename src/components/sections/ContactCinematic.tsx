import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/data";
import { Mail, MapPin, Copy, Check, Send, ArrowUpRight } from "lucide-react";

export const ContactCinematic: React.FC = () => {
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
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#050712] to-[#030305]">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Cinematic Closing Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3 font-semibold">
            // SECTION 06 — THE FINALE
          </div>
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6 drop-shadow-[0_0_40px_rgba(34,211,238,0.2)]">
            LET'S BUILD WHAT'S NEXT.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-sans">
            Open for AI/ML Engineering roles, research collaborations, and production model development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#0a0e1f]/90 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.1)]"
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-mono text-2xl font-black text-white">{engineer.name}</h3>
                <p className="font-mono text-xs text-cyan-400 uppercase tracking-wider">{engineer.role}</p>
              </div>

              {/* Email with Copy Action */}
              <div className="p-4 rounded-2xl bg-[#050711] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="font-mono text-[10px] text-slate-500 uppercase">DIRECT EMAIL</div>
                    <div className="font-mono text-xs text-slate-200 font-semibold truncate">{engineer.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-300 hover:bg-cyan-500/20 transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#050711] border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-violet-500/20 text-violet-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-slate-500 uppercase">LOCATION</div>
                  <div className="font-mono text-xs text-slate-200 font-semibold">{engineer.location}</div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-white/10 flex gap-3">
                <a
                  href={engineer.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:border-cyan-400/50 font-mono text-xs font-semibold transition-all"
                >
                  <svg className="w-4 h-4 text-cyan-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={engineer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:border-violet-400/50 font-mono text-xs font-semibold transition-all"
                >
                  <svg className="w-4 h-4 text-violet-400 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Mail Form Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#0a0e1f]/90 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
                // DISPATCH INQUIRY
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
                    className="w-full bg-[#050711] border border-white/10 rounded-xl p-3 text-slate-200 font-sans text-xs focus:border-cyan-400 outline-none"
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
                    className="w-full bg-[#050711] border border-white/10 rounded-xl p-3 text-slate-200 font-sans text-xs focus:border-cyan-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] text-slate-400 uppercase block mb-1">MESSAGE / PROJECT BRIEF</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Describe your role or project opportunity..."
                  required
                  className="w-full bg-[#050711] border border-white/10 rounded-xl p-3 text-slate-200 font-sans text-xs focus:border-cyan-400 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>SEND MAIL DIRECTLY</span>
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
