import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Github, Linkedin } from "../ui/Icons";
import { Button } from "../ui/Button";
import { PORTFOLIO_DATA } from "../../data/data";

export function Contact() {
  const { contact } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">intelligent.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Whether you have a question, an opportunity, or just want to talk AI — I'll get back to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-left"
        >
          <div className="glass-card overflow-hidden border-slate-700/50">
            {/* Terminal Header */}
            <div className="bg-slate-900/80 px-4 py-3 flex items-center gap-2 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-xs text-slate-500 mx-auto">// contact.sh</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <span className="text-violet-400 shrink-0">Location:</span>
                <span className="text-cyan-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {contact.location}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-violet-400 shrink-0">Phone:</span>
                <span className="text-cyan-300 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> {contact.phone}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-violet-400 shrink-0">Email:</span>
                <span className="text-cyan-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> {contact.email}
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t border-white/5 mt-6">
                <div className="flex items-center gap-4">
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-white/5 rounded-full">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-white/5 rounded-full">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${contact.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-white/5 rounded-full">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                
                <Button variant="outline" href={`mailto:${contact.email}`}>
                  Say Hello <Mail className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
