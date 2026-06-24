import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { PORTFOLIO_DATA } from "../../data/data";

export function Journey() {
  const { journey } = PORTFOLIO_DATA;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <SectionHeading number="04" title="Learning Journey" />
        
        <div ref={containerRef} className="relative mt-16">
          {/* Background Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />
          
          {/* Animated Glowing Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-cyan-400 to-violet-500 -translate-x-1/2 box-glow-cyan origin-top"
          />

          <div className="space-y-12">
            {journey.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.id} className={`relative flex items-center justify-between md:justify-normal ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Glowing Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-navy border-2 border-cyan-400 -translate-x-1/2 z-10 box-glow-cyan" 
                  />
                  
                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 w-full md:w-[calc(50%-3rem)] ${isEven ? '' : 'md:text-right'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="glass-card p-6 border-white/5 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                        <span className="font-mono text-xs px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20">
                          {item.type}
                        </span>
                        <span className="font-mono text-slate-500 text-sm">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                      <ul className="space-y-2">
                        <li className={`flex items-start gap-2 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                          <span className="text-cyan-500 font-mono mt-0.5">{'>'}</span>
                          <span className="text-slate-400 text-sm text-left">{item.note}</span>
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
