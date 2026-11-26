import React from 'react';
import { experiencesData } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { soundEngine } from '../utils/sound';

export const ExperienceRoadmap: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header mt-[50px]">
          <span className="section-subtitle">04 / Career Trajectory</span>
          <h2 className="section-title">Work Experience & Milestones</h2>
          <p className="section-desc">
            A chronological timeline of my professional roles shipping production software, collaborating with cross-functional engineering teams in Calicut, India.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="experience-timeline">
          {experiencesData.map((exp, idx) => (
            <div
              key={idx}
              className="timeline-item"
              onMouseEnter={() => soundEngine.playHover()}
            >
              {/* Timeline marker */}
              <div className="timeline-node">
                <div className="node-dot">
                  <Briefcase size={16} />
                </div>
                {idx < experiencesData.length - 1 && <div className="timeline-line" />}
              </div>

              {/* Timeline Content Card */}
              <div className="timeline-card glass-panel">
                <div className="card-top-row">
                  <div>
                    <span className="exp-role">{exp.role}</span>
                    <h3 className="exp-company">
                      <Building2 size={18} className="text-cyan inline-icon" />
                      <span>{exp.company}</span>
                    </h3>
                  </div>

                  <div className="exp-meta-badge">
                    <span className="meta-item">
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span className="meta-item">
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="exp-summary">{exp.summary}</p>

                {/* Accomplishments Bullet Points */}
                <div className="exp-achievements">
                  <h4 className="achievements-title">Key Contributions & Results:</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((ach, achIdx) => (
                      <li key={achIdx} className="achievement-item">
                        <CheckCircle2 size={16} className="text-cyan bullet-icon" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="exp-tech-stack">
                  {exp.skillsUsed.map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-timeline {
          position: relative;
          max-width: 980px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 24px;
        }
        @media (max-width: 650px) {
          .timeline-item { grid-template-columns: 1fr; }
          .timeline-node { display: none; }
        }
        .timeline-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .node-dot {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #0f1523;
          border: 2px solid var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          box-shadow: 0 0 15px var(--accent-primary-glow);
          z-index: 2;
        }
        .timeline-line {
          position: absolute;
          top: 44px;
          bottom: -36px;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent-primary), rgba(255, 255, 255, 0.08));
        }
        .timeline-card {
          padding: 32px;
        }
        .card-top-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .exp-role {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-primary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: block;
          margin-bottom: 4px;
        }
        .exp-company {
          font-family: var(--font-display);
          font-size: 1.6rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .exp-meta-badge {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .meta-item {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 4px 10px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .exp-summary {
          color: var(--text-main);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .achievements-title {
          font-size: 0.95rem;
          color: #fff;
          margin-bottom: 12px;
          font-weight: 600;
        }
        .achievements-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }
        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
        }
        .bullet-icon {
          flex-shrink: 0;
          margin-top: 4px;
        }
        .exp-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
      `}</style>
    </section>
  );
};
