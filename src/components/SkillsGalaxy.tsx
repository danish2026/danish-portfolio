import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Layout, Server, Database, GitBranch, Cpu, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/sound';
import { div } from 'three/tsl';

export const SkillsGalaxy: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout size={18} />;
      case 'Server': return <Server size={18} />;
      case 'Database': return <Database size={18} />;
      case 'GitBranch': return <GitBranch size={18} />;
      case 'Cpu': return <Cpu size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  const activeCategory = skillCategories[activeCategoryIndex];

  return (
    // <section id="skills" className="section">
    //   <div className="container">
    //     {/* Header */}
    //     <div className="section-header">
    //       <span className="section-subtitle">03 / Technical Mastery</span>
    //       <h2 className="section-title">Skills & Technology Matrix</h2>
    //       <p className="section-desc">
    //         A comprehensive overview of my technical toolchain, honed through commercial web app deployments, airline GDS integrations, and continuous experimentation.
    //       </p>
    //     </div>

    //     {/* 3D Floating Interactive Orbit Banner */}
    //     <div className="skills-floating-deck glass-panel">
    //       <div className="deck-info">
    //         <span className="deck-badge">Production Verified</span>
    //         <h3 className="deck-title">Core Engineering Stack</h3>
    //         <p className="deck-sub">Full SDLC expertise across modern frontend, resilient microservices, and databases.</p>
    //       </div>
    //       <div className="tech-cloud">
    //         {['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Nest.js', 'Express', 'Amadeus GDS', 'MongoDB', 'PostgreSQL', 'Tailwind', 'Ant Design', 'Redux', 'CI/CD', 'Git'].map((t, idx) => (
    //           <span
    //             key={t}
    //             className="cloud-tag"
    //             style={{ animationDelay: `${idx * 0.15}s` }}
    //             onMouseEnter={() => soundEngine.playHover()}
    //           >
    //             {t}
    //           </span>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Category Navigation Pills */}
    //     <div className="category-tabs">
    //       {skillCategories.map((cat, idx) => (
    //         <button
    //           key={cat.title}
    //           className={`cat-tab ${activeCategoryIndex === idx ? 'active' : ''}`}
    //           onClick={() => {
    //             soundEngine.playClick();
    //             setActiveCategoryIndex(idx);
    //           }}
    //         >
    //           {getCategoryIcon(cat.iconName)}
    //           <span>{cat.title}</span>
    //         </button>
    //       ))}
    //     </div>

    //     {/* Active Category Skill Meters */}
    //     <div className="skills-display-card glass-panel">
    //       <div className="skills-card-header">
    //         <div className="cat-title-wrap">
    //           <div className="cat-icon-box">
    //             {getCategoryIcon(activeCategory.iconName)}
    //           </div>
    //           <div>
    //             <h3 className="cat-current-title">{activeCategory.title}</h3>
    //             <p className="cat-count-sub">{activeCategory.skills.length} core proficiencies</p>
    //           </div>
    //         </div>
    //         <span className="level-indicator-badge">Commercial Proficiency</span>
    //       </div>

    //       <div className="skills-meters-grid">
    //         {activeCategory.skills.map((skill) => (
    //           <div
    //             key={skill.name}
    //             className={`skill-meter-card ${skill.highlight ? 'highlight-skill' : ''}`}
    //             onMouseEnter={() => soundEngine.playHover()}
    //           >
    //             <div className="skill-meter-header">
    //               <div className="skill-name-wrap">
    //                 {skill.highlight && <Sparkles size={14} className="text-cyan" />}
    //                 <span className="skill-name">{skill.name}</span>
    //               </div>
    //               <span className="skill-pct text-cyan">{skill.level}%</span>
    //             </div>

    //             {/* Progress Bar with neon fill */}
    //             <div className="meter-track">
    //               <div
    //                 className="meter-bar"
    //                 style={{ width: `${skill.level}%` }}
    //               />
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   <style>{`
    //     .skills-floating-deck {
    //       padding: 32px;
    //       margin-bottom: 48px;
    //       display: flex;
    //       align-items: center;
    //       justify-content: space-between;
    //       gap: 32px;
    //       background: linear-gradient(135deg, rgba(14, 20, 32, 0.8), rgba(24, 32, 50, 0.6));
    //     }
    //     @media (max-width: 900px) {
    //       .skills-floating-deck { flex-direction: column; align-items: flex-start; }
    //     }
    //     .deck-badge {
    //       font-family: var(--font-mono);
    //       font-size: 0.75rem;
    //       color: var(--accent-primary);
    //       background: rgba(56, 189, 248, 0.1);
    //       padding: 3px 10px;
    //       border-radius: 6px;
    //       display: inline-block;
    //       margin-bottom: 8px;
    //     }
    //     .deck-title {
    //       font-family: var(--font-display);
    //       font-size: 1.6rem;
    //       color: #fff;
    //       margin-bottom: 6px;
    //     }
    //     .deck-sub {
    //       color: var(--text-muted);
    //       font-size: 0.92rem;
    //       max-width: 400px;
    //     }
    //     .tech-cloud {
    //       display: flex;
    //       flex-wrap: wrap;
    //       gap: 10px;
    //       max-width: 580px;
    //     }
    //     .cloud-tag {
    //       font-family: var(--font-mono);
    //       font-size: 0.85rem;
    //       color: #e2e8f0;
    //       background: rgba(255, 255, 255, 0.05);
    //       border: 1px solid rgba(255, 255, 255, 0.1);
    //       padding: 6px 14px;
    //       border-radius: 10px;
    //       cursor: default;
    //       transition: all 0.25s ease;
    //     }
    //     .cloud-tag:hover {
    //       color: #07090e;
    //       background: var(--accent-primary);
    //       border-color: var(--accent-primary);
    //       transform: translateY(-3px) scale(1.05);
    //       box-shadow: 0 4px 15px var(--accent-primary-glow);
    //     }
    //     .category-tabs {
    //       display: flex;
    //       justify-content: center;
    //       gap: 12px;
    //       margin-bottom: 32px;
    //       flex-wrap: wrap;
    //     }
    //     .cat-tab {
    //       display: flex;
    //       align-items: center;
    //       gap: 8px;
    //       background: rgba(255, 255, 255, 0.03);
    //       border: 1px solid rgba(255, 255, 255, 0.08);
    //       color: var(--text-muted);
    //       padding: 10px 20px;
    //       border-radius: 12px;
    //       font-size: 0.9rem;
    //       font-weight: 500;
    //       cursor: pointer;
    //       transition: all 0.2s;
    //     }
    //     .cat-tab:hover {
    //       color: #fff;
    //       border-color: var(--accent-primary);
    //     }
    //     .cat-tab.active {
    //       background: var(--accent-gradient);
    //       color: #07090e;
    //       border-color: transparent;
    //       font-weight: 700;
    //       box-shadow: 0 4px 20px var(--accent-primary-glow);
    //     }
    //     .skills-display-card {
    //       padding: 36px;
    //     }
    //     .skills-card-header {
    //       display: flex;
    //       align-items: center;
    //       justify-content: space-between;
    //       margin-bottom: 32px;
    //       padding-bottom: 20px;
    //       border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    //     }
    //     @media (max-width: 600px) {
    //       .skills-card-header { flex-direction: column; align-items: flex-start; gap: 14px; }
    //     }
    //     .cat-title-wrap {
    //       display: flex;
    //       align-items: center;
    //       gap: 16px;
    //     }
    //     .cat-icon-box {
    //       width: 44px;
    //       height: 44px;
    //       border-radius: 10px;
    //       background: rgba(56, 189, 248, 0.1);
    //       color: var(--accent-primary);
    //       display: flex;
    //       align-items: center;
    //       justify-content: center;
    //     }
    //     .cat-current-title {
    //       font-family: var(--font-display);
    //       font-size: 1.4rem;
    //       color: #fff;
    //     }
    //     .cat-count-sub {
    //       font-size: 0.8rem;
    //       color: var(--text-dim);
    //       font-family: var(--font-mono);
    //     }
    //     .level-indicator-badge {
    //       font-family: var(--font-mono);
    //       font-size: 0.75rem;
    //       color: var(--text-muted);
    //       background: rgba(255, 255, 255, 0.04);
    //       padding: 4px 10px;
    //       border-radius: 6px;
    //     }
    //     .skills-meters-grid {
    //       display: grid;
    //       grid-template-columns: repeat(2, 1fr);
    //       gap: 24px;
    //     }
    //     @media (max-width: 768px) {
    //       .skills-meters-grid { grid-template-columns: 1fr; }
    //     }
    //     .skill-meter-card {
    //       background: rgba(255, 255, 255, 0.02);
    //       border: 1px solid rgba(255, 255, 255, 0.06);
    //       padding: 16px 20px;
    //       border-radius: 12px;
    //       transition: all 0.2s;
    //     }
    //     .skill-meter-card:hover {
    //       border-color: var(--accent-primary);
    //       background: rgba(56, 189, 248, 0.03);
    //     }
    //     .highlight-skill {
    //       border-color: rgba(56, 189, 248, 0.2);
    //     }
    //     .skill-meter-header {
    //       display: flex;
    //       align-items: center;
    //       justify-content: space-between;
    //       margin-bottom: 10px;
    //     }
    //     .skill-name-wrap {
    //       display: flex;
    //       align-items: center;
    //       gap: 8px;
    //     }
    //     .skill-name {
    //       font-weight: 600;
    //       font-size: 0.95rem;
    //       color: #fff;
    //     }
    //     .skill-pct {
    //       font-family: var(--font-mono);
    //       font-size: 0.85rem;
    //       font-weight: 700;
    //     }
    //     .meter-track {
    //       width: 100%;
    //       height: 6px;
    //       background: rgba(255, 255, 255, 0.06);
    //       border-radius: 4px;
    //       overflow: hidden;
    //     }
    //     .meter-bar {
    //       height: 100%;
    //       border-radius: 4px;
    //       background: var(--accent-gradient);
    //       box-shadow: 0 0 10px var(--accent-primary-glow);
    //       transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    //     }
    //   `}</style>
    // </section>
    <div></div>
  );
};
