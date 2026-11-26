import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsGalaxy } from './components/SkillsGalaxy';
import { ExperienceRoadmap } from './components/ExperienceRoadmap';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import type { SceneMode } from './components/ThreeCanvas';
import './index.css';

export function App() {
  const [theme, setTheme] = useState('cyber-cyan');
  const [sceneMode, setSceneMode] = useState<SceneMode>('torus');

  // Update theme on document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const getThemeColor = () => {
    switch (theme) {
      case 'neon-purple':
        return '#c084fc';
      case 'matrix-emerald':
        return '#34d399';
      case 'cyber-cyan':
      default:
        return '#38bdf8';
    }
  };

  const handleOpenTerminal = () => {
    const el = document.getElementById('terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app">
      {/* Background Cyber Grid & Ambient Glows */}
      <div className="cyber-grid-bg" />
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />
      <div className="ambient-glow glow-3" />

      {/* Floating Navigation Header */}
      <Navbar
        currentTheme={theme}
        onThemeChange={setTheme}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Interactive 3D Canvas */}
        <Hero
          sceneMode={sceneMode}
          onSceneModeChange={setSceneMode}
          themeColor={getThemeColor()}
          onOpenTerminal={handleOpenTerminal}
        />

        {/* 01 Engineering Profile & Pillars */}
        <AboutSection />

        {/* 02 Proven Systems & Production Projects */}
        <ProjectsSection />

        {/* 03 Skills & Tech Stack Matrix */}
        <SkillsGalaxy />

        {/* 04 Career Roadmap & Experience */}
        <ExperienceRoadmap />

        {/* 05 Interactive Terminal Sandbox */}
        <InteractiveTerminal />

        {/* 06 Contact & Collaboration Hub */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
