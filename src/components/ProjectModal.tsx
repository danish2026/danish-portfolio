import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '../data/portfolioData';
import { X, CheckCircle2, Layers, Calendar, Building, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/sound';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const scrollY = window.scrollY;
    const originalStyle = document.body.style.cssText;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.cssText = originalStyle;
      window.scrollTo(0, scrollY);
    };
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    soundEngine.playClick();
    onClose();
  };
  

  return createPortal(
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-dialog glass-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-badges">
            <span className="modal-category-tag">{project.category}</span>
            <span className="modal-company-tag">
              <Building size={13} /> {project.company}
            </span>
            <span className="modal-company-tag">
              <Calendar size={13} /> {project.period}
            </span>
          </div>
          <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Title & Subtitle */}
        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-subtitle text-cyan">{project.subtitle}</p>

        {/* Metrics Grid */}
        <div className="modal-metrics-grid">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="modal-metric-card">
              <span className="modal-metric-value gradient-text">{m.value}</span>
              <span className="modal-metric-label">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Full Overview Description */}
        <div className="modal-section">
          <h4 className="modal-section-title">
            <Layers size={16} className="text-cyan" /> Architecture & Implementation Overview
          </h4>
          <p className="modal-desc-text">{project.longDescription}</p>
        </div>

        {/* Key Engineering Highlights */}
        <div className="modal-section">
          <h4 className="modal-section-title">
            <CheckCircle2 size={16} className="text-cyan" /> Key Engineering Accomplishments
          </h4>
          <ul className="modal-highlights-list">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="modal-highlight-item">
                <span className="highlight-bullet">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="modal-section">
          <h4 className="modal-section-title">
            <Sparkles size={16} className="text-cyan" /> Technologies & Tools Deployed
          </h4>
          <div className="modal-tags">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-tag featured-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="modal-footer">
          <button className="btn-secondary" onClick={handleClose}>
            Close Inspector
          </button>
          <a
            href="#contact"
            className="btn-primary"
            onClick={() => {
              handleClose();
              soundEngine.playClick();
            }}
          >
            Inquire About This Stack
          </a>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 6, 10, 0.82);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .modal-dialog {
          width: 100%;
          margin-top:20px;
          max-width: 780px;
          max-height: 85vh;
          overflow-y: auto;
          background: #0d121c;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 7px;
          padding: 32px;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px var(--accent-primary-glow);
          animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideUp {
          from { transform: translateY(20px) scale(0.97); }
          to { transform: translateY(0) scale(1); }
        }
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .modal-badges {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .modal-category-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #07090e;
          background: var(--accent-primary);
          padding: 3px 10px;
          border-radius: 6px;
          font-weight: 700;
        }
        .modal-company-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 3px 8px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .modal-close-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .modal-close-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.15);
          transform: rotate(90deg);
        }
        .modal-title {
          font-family: var(--font-display);
          font-size: 1.8rem;
          color: #fff;
          margin-bottom: 4px;
        }
        .modal-subtitle {
          font-size: 1rem;
          margin-bottom: 20px;
          font-weight: 500;
        }
        .modal-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }
        @media (max-width: 600px) {
          .modal-metrics-grid { grid-template-columns: 1fr; }
        }
        .modal-metric-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 12px 16px;
          border-radius: 12px;
          text-align: center;
        }
        .modal-metric-value {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 700;
          display: block;
        }
        .modal-metric-label {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .modal-section {
          margin-bottom: 20px;
        }
        .modal-section-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          color: #fff;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .modal-desc-text {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }
        .modal-highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .modal-highlight-item {
          color: #cbd5e1;
          font-size: 0.92rem;
          line-height: 1.5;
          display: flex;
          gap: 8px;
        }
        .highlight-bullet {
          color: var(--accent-primary);
          font-weight: bold;
        }
        .modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </div>,
    document.body
  );
};
