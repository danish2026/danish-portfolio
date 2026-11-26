import React, { useState } from "react";
import {
  Volume2,
  VolumeX,
  Terminal as TerminalIcon,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { soundEngine } from "../utils/sound";

interface NavbarProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTheme,
  onThemeChange,
  onOpenTerminal,
}) => {
  const [soundEnabled, setSoundEnabled] = useState(soundEngine.isEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const nextState = soundEngine.toggleSound();
    setSoundEnabled(nextState);
  };

  const themes = [
    { id: "cyber-cyan", name: "Cyan", color: "#38bdf8" },
    { id: "neon-purple", name: "Purple", color: "#c084fc" },
    { id: "matrix-emerald", name: "Emerald", color: "#34d399" },
  ];

  const handleLinkClick = () => {
    soundEngine.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-fixed">
      <div className="container nav-container">
        {/* Logo / Brand */}
        <a href="#hero" className="nav-logo" onClick={handleLinkClick}>
          <div className="logo-badge">MD</div>
          <div className="logo-text">
            <span className="logo-name">Danish KK</span>
            <span className="logo-sub">Software Engineer</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="desktop-nav">
          <a href="#about" className="nav-link" onClick={handleLinkClick}>
            About
          </a>
          <a href="#projects" className="nav-link" onClick={handleLinkClick}>
            Projects
          </a>
          <a href="#skills" className="nav-link" onClick={handleLinkClick}>
            Skills
          </a>
          <a href="#experience" className="nav-link" onClick={handleLinkClick}>
            Experience
          </a>
          <a
            href="#terminal"
            className="nav-link nav-terminal-link"
            onClick={() => {
              soundEngine.playTerminal();
              onOpenTerminal();
            }}
          >
            <TerminalIcon size={14} />
            <span>Terminal</span>
          </a>
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>
            Contact
          </a>
        </nav>

        {/* Right Tools: Theme + Audio + CTA */}
        <div className="nav-actions">
          {/* Audio Feedback Toggle */}
          <button
            onClick={toggleSound}
            className="tool-btn"
            title={soundEnabled ? "Mute sound effects" : "Enable sound effects"}
            aria-label="Toggle sound"
          >
            {soundEnabled ? (
              <Volume2 size={18} className="text-cyan" />
            ) : (
              <VolumeX size={18} />
            )}
          </button>

          {/* Theme Palette */}
          <div className="theme-selector" title="Switch 3D Cyber Theme">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  soundEngine.playClick();
                  onThemeChange(t.id);
                }}
                className={`theme-dot ${currentTheme === t.id ? "active" : ""}`}
                style={{ backgroundColor: t.color }}
                aria-label={`Switch to ${t.name} theme`}
              />
            ))}
          </div>

          {/* Hire Me CTA Button */}
          <a href="#contact" className="btn-hire" onClick={handleLinkClick}>
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#about" className="mobile-link" onClick={handleLinkClick}>
            About
          </a>
          <a href="#projects" className="mobile-link" onClick={handleLinkClick}>
            Projects
          </a>
          <a href="#skills" className="mobile-link" onClick={handleLinkClick}>
            Skills
          </a>
          <a
            href="#experience"
            className="mobile-link"
            onClick={handleLinkClick}
          >
            Experience
          </a>
          <a
            href="#terminal"
            className="mobile-link"
            onClick={() => {
              handleLinkClick();
              onOpenTerminal();
            }}
          >
            <TerminalIcon size={16} /> Terminal Console
          </a>
          <a href="#contact" className="mobile-link" onClick={handleLinkClick}>
            Contact & Hire
          </a>
        </div>
      )}

      <style>{`
        .navbar-fixed {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(7, 9, 14, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0;
          transition: all 0.3s ease;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 14px 24px;
          position: relative;
          top: 0;
          bottom: 0;
          box-sizing: border-box;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #fff;
          flex-shrink: 0;
        }
        .logo-badge {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--accent-gradient);
          color: #07090e;
          font-weight: 800;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          box-shadow: 0 0 15px var(--accent-primary-glow);
          flex-shrink: 0;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .logo-name {
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: -0.02em;
          color: #fff;
          line-height: 1.2;
          white-space: nowrap;
        }
        .logo-sub {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          line-height: 1.2;
          white-space: nowrap;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: var(--accent-primary);
        }
        .nav-terminal-link {
          background: rgba(255, 255, 255, 0.04);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .nav-terminal-link:hover {
          border-color: var(--accent-primary);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }
        .tool-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          width: 36px;
          height: 36px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .tool-btn:hover {
          color: #fff;
          border-color: var(--accent-primary);
        }
        .text-cyan {
          color: var(--accent-primary);
        }
        .theme-selector {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 4px 8px;
          border-radius: 20px;
        }
        .theme-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid transparent;
          cursor: pointer;
          padding: 0;
          outline: none;
          transition: transform 0.2s, border-color 0.2s;
        }
        .theme-dot:hover {
          transform: scale(1.2);
        }
        .theme-dot.active {
          border-color: #ffffff;
          transform: scale(1.15);
        }
        .btn-hire {
          background: var(--accent-gradient);
          color: #07090e;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 8px 16px;
          border-radius: 9px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-hire:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px var(--accent-primary-glow);
        }
        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
          padding: 6px;
        }
        @media (max-width: 1100px) {
          .desktop-nav { gap: 16px; }
          .nav-link { font-size: 0.85rem; }
          .nav-actions { gap: 10px; }
        }
        @media (max-width: 960px) {
          .desktop-nav { display: none; }
          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .btn-hire { display: none; }
        }
        @media (min-width: 961px) {
          .mobile-menu { display: none !important; }
        }
        .mobile-menu {
          display: flex;
          flex-direction: column;
          background: rgba(12, 16, 23, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 16px 24px;
          gap: 10px;
          max-height: calc(100vh - 70px);
          overflow-y: auto;
        }
        .mobile-link {
          color: var(--text-main);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
      `}</style>
    </header>
  );
};
