import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { NeuralNetworkDiagram } from "../ui/NeuralNetworkDiagram";
import { Badge } from "../ui/Badge";
import { PORTFOLIO_DATA } from "../../data/data";

export function Skills() {
  const { skills } = PORTFOLIO_DATA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <SectionHeading number="02" title="Technical Arsenal" />

        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
          <div className="flex-1 w-full space-y-10">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div 
                key={groupIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-500">{'>'}</span> {skillGroup.category}
                </h3>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {skillGroup.items.map((skill, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <span className="inline-flex items-center px-4 py-2 rounded-lg bg-navy border border-white/10 text-slate-300 font-mono text-sm shadow-sm transition-all duration-300 hover:border-cyan-500/50 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:-translate-y-0.5 cursor-default">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="lg:w-5/12 w-full max-w-md relative flex justify-center items-center">
            {/* Diagram Background */}
            <div className="relative w-full aspect-square border border-white/5 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent overflow-hidden glass-card flex items-center justify-center p-8">
              <NeuralNetworkDiagram className="w-full h-full opacity-60" />
              
              {/* Floating badges near the diagram */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -left-4 md:-left-8"
              >
                <Badge dot color="cyan" className="shadow-lg">ML.STACK // ACTIVE</Badge>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-4 md:-right-8"
              >
                <Badge dot color="violet" className="shadow-lg">GENAI // EXPLORING</Badge>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
