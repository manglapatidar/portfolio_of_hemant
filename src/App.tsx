import { useState } from "react";
import { CinematicBackground } from "./components/ui/CinematicBackground";
import { CustomCursor } from "./components/ui/CustomCursor";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroHemantflix } from "./components/sections/HeroHemantflix";
import { CinematicSubjectReveal } from "./components/ui/CinematicSubjectReveal";
import { NetflixRows } from "./components/sections/NetflixRows";
import { ProjectDetailModal } from "./components/ui/ProjectDetailModal";
import type { ProjectItem } from "./data/data";

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-red-500/30 selection:text-red-200 relative overflow-x-hidden">
      {/* Background Atmosphere & Custom Cursor */}
      <CinematicBackground />
      <CustomCursor />
      <ScrollProgress />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <HeroHemantflix />
        <CinematicSubjectReveal />
        <NetflixRows onOpenProjectModal={(project) => setSelectedProject(project)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Cinematic Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
