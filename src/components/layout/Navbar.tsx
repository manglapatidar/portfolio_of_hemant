import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "../../utils/cn";
import { Button } from "../ui/Button";

const NAV_LINKS = [
  { id: "about", label: "01. About" },
  { id: "skills", label: "02. Skills" },
  { id: "projects", label: "03. Projects" },
  { id: "journey", label: "04. Experience" },
  { id: "contact", label: "05. Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 origin-left z-50"
        style={{ scaleX }}
      />
      <header className="fixed top-1 left-0 right-0 z-40 glass-panel py-4 transition-all duration-300">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-6xl">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}
            className="font-mono text-xl font-bold tracking-tighter group flex items-center gap-1 focus:outline-none"
          >
            <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">[</span>
            <span className="text-white">hp</span>
            <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">]</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={cn(
                      "font-mono text-sm transition-colors hover:text-cyan-400 focus:outline-none focus:text-cyan-400",
                      activeSection === link.id ? "text-cyan-400" : "text-slate-400"
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <Button 
              variant="outline" 
              className="py-2 px-4 text-sm"
              href="/Resume.pdf"
              target="_blank"
              magnetic={false}
              download="Hemant_Patidar_Resume.pdf"
            >
              Resume <Download className="w-4 h-4 ml-1" />
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-cyan-400 focus:outline-none z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-30 bg-navy/98 backdrop-blur-2xl flex flex-col items-center justify-center pt-20"
        >
          <ul className="flex flex-col items-center gap-8 text-lg">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={cn(
                    "font-mono transition-colors focus:outline-none",
                    activeSection === link.id ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Button 
              variant="outline" 
              href="/Resume.pdf"
              target="_blank"
              magnetic={false}
              download="Hemant_Patidar_Resume.pdf"
            >
              Resume <Download className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}
