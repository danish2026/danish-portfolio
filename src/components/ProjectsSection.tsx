import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Plane, DollarSign, ShoppingCart, Image as ImageIcon, Sparkles, Filter } from 'lucide-react';
import { soundEngine } from '../utils/sound';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Frontend', 'Integration & API'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'kenya-airways':
        return <Plane size={24} className="text-cyan" />;
      case 'tax-go-global':
        return <DollarSign size={24} className="text-cyan" />;
      case 'eazy-fatoora':
        return <ShoppingCart size={24} className="text-cyan" />;
      case 'made-by-thin-air':
        return <ImageIcon size={24} className="text-cyan" />;
      default:
        return <Sparkles size={24} className="text-cyan" />;
    }
  };

  const handleOpenProject = (project: Project) => {
    soundEngine.playClick();
    setActiveProject(project);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">02 / Proven Systems</span>
          <h2 className="section-title">Production Projects & Case Studies</h2>
          <p className="section-desc">
            Explore scalable enterprise systems and high-traffic integrations I have engineered at Foxiom Leads, including global airline GDS APIs, financial suites, and AI labeling platforms.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="project-filters">
          <Filter size={15} className="filter-icon" />
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => {
                soundEngine.playClick();
                setSelectedCategory(cat);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Tilt Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={12}
              scale={1.02}
              className="project-tilt-wrapper"
              onClick={() => handleOpenProject(project)}
            >
              <div className="project-card">
                {/* Header Row */}
                <div className="project-card-header">
                  <div className="project-icon-box">
                    {getProjectIcon(project.id)}
                  </div>
                  <div className="project-meta-badges">
                    <span className="badge-cat">{project.category}</span>
                    <span className="badge-company">{project.company}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-sub">{project.subtitle}</p>

                {/* Description */}
                <p className="project-card-desc">{project.description}</p>

                {/* Key Metrics Chips */}
                <div className="project-metrics-row">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="metric-chip">
                      <span className="metric-chip-value text-cyan">{m.value}</span>
                      <span className="metric-chip-label">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="project-tech-list">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tech-tag">+{project.techStack.length - 4} more</span>
                  )}
                </div>

                {/* Bottom Action Footer */}
                <div className="project-card-footer">
                  <span className="inspect-label">Inspect Architecture</span>
                  <div className="inspect-icon">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />

      <style>{`
        .project-filters {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .filter-icon {
          color: var(--text-dim);
          margin-right: 4px;
        }
        .filter-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-muted);
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .filter-btn:hover {
          color: #fff;
          border-color: var(--accent-primary);
        }
        .filter-btn.active {
          background: var(--accent-gradient);
          color: #07090e;
          border-color: transparent;
          font-weight: 700;
          box-shadow: 0 0 15px var(--accent-primary-glow);
        }
        /* ===== Grid: 4 equal columns ===== */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          grid-auto-rows: 1fr;
          gap: 14px;
        }
        @media (max-width: 1100px) {
          .projects-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr; }
        }

        /* ===== Tilt wrapper: fill the grid cell ===== */
        .project-tilt-wrapper {
          height: 100%;
        }
        .project-tilt-wrapper .tilt-card {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* ===== Card shell ===== */
        .project-card {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          height: 100%;
          overflow: hidden;
        }

        /* ===== Card header ===== */
        .project-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          gap: 8px;
          flex-shrink: 0;
        }
        .project-icon-box {
          width: 38px;
          height: 38px;
          min-width: 38px;
          border-radius: 10px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .project-icon-box svg {
          width: 18px;
          height: 18px;
        }
        .project-meta-badges {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .badge-cat {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent-primary);
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.2);
          padding: 3px 7px;
          border-radius: 5px;
          white-space: nowrap;
        }
        .badge-company {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 3px 7px;
          border-radius: 5px;
          white-space: nowrap;
        }

        /* ===== Title & subtitle: clamped to fixed lines ===== */
        .project-card-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 4px;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-shrink: 0;
        }
        .project-card-sub {
          font-size: 0.78rem;
          color: var(--accent-primary);
          margin-bottom: 10px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex-shrink: 0;
        }

        /* ===== Description: clamped to 3 lines ===== */
        .project-card-desc {
          color: var(--text-muted);
          font-size: 0.82rem;
          line-height: 1.55;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* ===== Metrics: fixed single row height ===== */
        .project-metrics-row {
          display: flex;
          gap: 8px;
          margin-bottom: 14px;
          flex-wrap: nowrap;
          overflow: hidden;
          flex-shrink: 0;
        }
        .metric-chip {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 4px 8px;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          min-width: 0;
          flex-shrink: 1;
        }
        .metric-chip-value {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.82rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .metric-chip-label {
          font-size: 0.62rem;
          color: var(--text-dim);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ===== Tech tags: single row, overflow hidden ===== */
        .project-tech-list {
          display: flex;
          flex-wrap: nowrap;
          gap: 4px;
          margin-bottom: 16px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .project-tech-list .tech-tag {
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ===== Footer: pinned to bottom via auto margin ===== */
        .project-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          margin-top: auto;
          flex-shrink: 0;
        }
        .inspect-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-main);
          transition: color 0.2s;
        }
        .inspect-icon {
          width: 28px;
          height: 28px;
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all 0.2s;
        }
        .project-card:hover .inspect-icon {
          background: var(--accent-primary);
          color: #07090e;
          transform: translate(2px, -2px);
        }
        .project-card:hover .inspect-label {
          color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
};
