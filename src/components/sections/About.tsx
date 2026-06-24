import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { PORTFOLIO_DATA } from "../../data/data";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, springValue, value]);

  // Handle formatting
  const displayValue = useTransform(springValue, (current) => 
    Math.floor(current)
  );

  return (
    <span ref={ref} className="flex items-baseline">
      <motion.span>{displayValue}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}

export function About() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <SectionHeading number="01" title="Who I Am" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Bio Card */}
          <Card filename="bio.txt" className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none text-slate-300 leading-relaxed mt-4"
              dangerouslySetInnerHTML={{ __html: about.bio.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-bold">$1</span>') }}
            />
          </Card>

          {/* Education Card */}
          <Card filename="education.json" className="h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 mt-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-violet-500/10 rounded-xl text-violet-400 mt-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{about.education.degree}</h3>
                  <p className="text-slate-400 mb-1">{about.education.institution}</p>
                  <p className="font-mono text-sm text-cyan-400 mb-4">{about.education.duration}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-mono">
                      <span className="text-slate-300">CGPA</span>
                      <span className="text-cyan-400">{about.education.cgpa}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "63.8%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full box-glow-cyan"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Card>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {about.stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center border-white/5 hover:border-cyan-500/20 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono flex items-center justify-center text-glow-cyan">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-slate-400 font-mono text-sm tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
