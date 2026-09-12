import { useState } from "react";
import { CinematicBackground } from "./components/ui/CinematicBackground";
import { CustomCursor } from "./components/ui/CustomCursor";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { IntroEntrance } from "./components/Intro/IntroEntrance";
import { StreamingNavbar } from "./components/Navigation/StreamingNavbar";
import { HeroCinematicCharacter } from "./components/Hero/HeroCinematicCharacter";
import { ExploreRows } from "./components/Explore/ExploreRows";
import { TopProjectsCatalog } from "./components/Projects/TopProjectsCatalog";
import { ProjectCinematicModal } from "./components/ProjectModal/ProjectCinematicModal";
import { TechUniverseOrbit } from "./components/TechUniverse/TechUniverseOrbit";
import { EngineerEditorial } from "./components/Engineer/EngineerEditorial";
import { CredentialsTimeline } from "./components/Education/CredentialsTimeline";
import { EndCreditsContact } from "./components/Contact/EndCreditsContact";
import { Footer } from "./components/layout/Footer";
import type { ProjectData } from "./data/portfolio";

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-red-600/40 selection:text-white relative overflow-x-hidden">
      {/* Background Atmosphere & Subtle Cursor */}
      <CinematicBackground />
      <CustomCursor />
      <ScrollProgress />

      {/* Screen 1: Cinematic Intro Screen */}
      {!introFinished && (
        <IntroEntrance onComplete={() => setIntroFinished(true)} />
      )}

      {/* Main Streaming Platform Layout */}
      <StreamingNavbar />

      <main className="relative z-10">
        {/* Screen 2: Hero Character Spotlight */}
        <HeroCinematicCharacter />

        {/* Screen 3: Continue Exploring Tiles */}
        <ExploreRows />

        {/* Screen 4: Top Projects Catalog */}
        <TopProjectsCatalog onOpenProjectModal={(project) => setSelectedProject(project)} />

        {/* Screen 5: AI / ML Universe Orbit */}
        <TechUniverseOrbit />

        {/* Screen 6: The Engineer Editorial */}
        <EngineerEditorial />

        {/* Screen 7: Education & Certifications */}
        <CredentialsTimeline />

        {/* Screen 8: Contact / End Credits */}
        <EndCreditsContact />
      </main>

      <Footer />

      {/* Cinematic Project Detail Modal */}
      {selectedProject && (
        <ProjectCinematicModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
