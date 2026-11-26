import React from 'react';
import { ThreeCanvas } from './ThreeCanvas';
import type { SceneMode } from './ThreeCanvas';
import { personalInfo } from '../data/portfolioData';
import { soundEngine } from '../utils/sound';
import { Terminal, ArrowDown, Layers, Mail, ChevronRight } from 'lucide-react';

interface HeroProps {
  sceneMode: SceneMode;
  onSceneModeChange: (mode: SceneMode) => void;
  themeColor: string;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  sceneMode,
  onSceneModeChange,
  themeColor,
  onOpenTerminal
}) => {
  const modes: { id: SceneMode; label: string }[] = [
    { id: 'torus', label: '3D Cyber Torus' },
    { id: 'neural', label: '3D Neural Network' },
    { id: 'wave', label: '3D Quantum Wave' }
  ];

  return (
    <section id="hero" className="hero-section">
      {/* 3D Three.js Interactive Canvas in Background */}
      <ThreeCanvas mode={sceneMode} themeColor={themeColor} />

      <div className="container hero-content">
        {/* 3D Scene Controls Pill */}
        <div className="scene-controller glass-pill">
          <Layers size={14} className="text-cyan" />
          <span className="scene-label">3D Scene:</span>
          <div className="scene-buttons">
            {modes.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  soundEngine.playClick();
                  onSceneModeChange(m.id);
                }}
                className={`scene-btn ${sceneMode === m.id ? 'active' : ''}`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Availability Badge */}
        <div className="status-badge glass-pill">
          <div className="radar-pulse" />
          <span>Available for Frontend & Full-Stack Opportunities</span>
        </div>

        {/* Hero Headings */}
        <h1 className="hero-name">
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        <h2 className="hero-title">
          {personalInfo.role} <span className="title-separator">/</span> <span className="text-cyan">{personalInfo.subRole}</span>
        </h2>

        <p className="hero-description">
          {personalInfo.bio}
        </p>

        {/* Tech stack highlight tags */}
        <div className="hero-tags">
          {['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Nest.js', 'Amadeus GDS', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
            <span key={tech} className="tech-tag featured-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="hero-actions">
          <a
            href="#projects"
            className="btn-primary"
            onClick={() => soundEngine.playClick()}
          >
            <span>Explore Projects</span>
            <ChevronRight size={18} />
          </a>

          <button
            onClick={() => {
              soundEngine.playTerminal();
              onOpenTerminal();
            }}
            className="btn-secondary"
          >
            <Terminal size={18} className="text-cyan" />
            <span>Interactive Terminal</span>
          </button>

          <a
            href="#contact"
            className="btn-secondary"
            onClick={() => soundEngine.playClick()}
          >
            <Mail size={18} />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Quick Stats Grid */}
        <div className="hero-stats-grid">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-panel">
              <span className="stat-value gradient-text">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
          <div className="stat-card glass-panel">
            <span className="stat-value text-cyan">Calicut</span>
            <span className="stat-label">Kerala, India (IST)</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="scroll-indicator"
        onClick={() => soundEngine.playClick()}
        aria-label="Scroll down"
      >
        <span className="scroll-text">Scroll to explore</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>

      <style>{`
        .hero-section {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 130px 0 80px 0;
          overflow: hidden;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .scene-controller {
          margin-bottom: 20px;
          gap: 10px;
          background: rgba(18, 24, 38, 0.7);
        }
        .scene-label {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-dim);
        }
        .scene-buttons {
          display: flex;
          gap: 6px;
        }
        .scene-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.75rem;
          font-family: var(--font-mono);
          padding: 3px 8px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .scene-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }
        .scene-btn.active {
          color: #07090e;
          background: var(--accent-primary);
          font-weight: 700;
        }
        .status-badge {
          margin-bottom: 24px;
        }
        .hero-name {
          font-family: var(--font-display);
          font-size: 4rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 12px;
        }
        @media (max-width: 768px) {
          .hero-name { font-size: 2.5rem; }
        }
        .hero-title {
          font-family: var(--font-sans);
          font-size: 1.5rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .title-separator {
          color: var(--text-dim);
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 1.15rem; }
        }
        .hero-description {
          max-width: 780px;
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          max-width: 800px;
          margin-bottom: 36px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
        }
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 960px;
        }
        @media (max-width: 900px) {
          .hero-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .hero-stats-grid { grid-template-columns: 1fr; }
        }
        .stat-card {
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .stat-value {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 700;
          line-height: 1.2;
        }
        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 4px;
        }
        .scroll-indicator {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: var(--text-dim);
          text-decoration: none;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          transition: color 0.2s;
          z-index: 2;
        }
        .scroll-indicator:hover {
          color: var(--accent-primary);
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(6px); }
          60% { transform: translateY(3px); }
        }
      `}</style>
    </section>
  );
};
