import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { projects } from './data/projects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetail from './components/ProjectDetail';
import SkillInventory from './components/SkillInventory';
import About from './components/About';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';
import EasterEgg from './components/EasterEgg';
import PixelDecorations from './components/PixelDecorations';
import './styles.css';

function App() {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [easterEggOpen, setEasterEggOpen] = useState(false);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId]
  );

  useEffect(() => {
    const onHashChange = () => {
      const match = window.location.hash.match(/^#project\/(.+)$/);
      setActiveProjectId(match ? match[1] : null);
    };

    onHashChange();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Escape key closes contact modal
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setContactOpen(false); };
    if (contactOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [contactOpen]);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = contactOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [contactOpen]);

  const openProject = (id) => {
    window.location.hash = `project/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeProject = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`site-shell${contactOpen ? ' contact-blur' : ''}`}>
      <PixelDecorations />
      <Navbar />

      {activeProject ? (
        <main className="detail-main">
          <ProjectDetail project={activeProject} onClose={closeProject} />
        </main>
      ) : (
        <main>
          <Hero onRobotClick={() => setEasterEggOpen(true)} />
          <ProjectGrid projects={projects} onOpen={openProject} />
          <SkillInventory />
          <About />
          <Contact onOpenContact={() => setContactOpen(true)} />
        </main>
      )}

      <footer className="site-footer">
        <span>ANSHU / ENGINEERING WORLD</span>
        <span className="footer-status"><i /> portfolio build</span>
      </footer>

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      {easterEggOpen && <EasterEgg onClose={() => setEasterEggOpen(false)} />}
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
