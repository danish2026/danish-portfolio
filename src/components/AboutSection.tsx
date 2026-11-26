import React from 'react';
import { educationData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Code2, Server, Database, GitMerge, GraduationCap, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Code2 size={24} className="text-cyan" />,
      title: "Frontend Engineering",
      desc: "Transforming intricate UI/UX into ultra-fast, responsive web interfaces with React, Next.js, Redux, and modern CSS/Tailwind."
    },
    {
      icon: <Server size={24} className="text-cyan" />,
      title: "Enterprise Backend & GDS",
      desc: "Architecting high-availability RESTful APIs, Nest.js microservices, and specialized Global Distribution Systems (Amadeus GDS)."
    },
    {
      icon: <Database size={24} className="text-cyan" />,
      title: "Databases & Storage",
      desc: "Designing optimized data schemas, relational joins, and document structures across MongoDB, PostgreSQL, and MySQL."
    },
    {
      icon: <GitMerge size={24} className="text-cyan" />,
      title: "DevOps & Production Delivery",
      desc: "Managing Git workflows, CI/CD automated test pipelines, and zero-downtime production deployments with 99.9% uptime."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-headerOne">
          <span className="section-subtitle">01 / Engineering Profile</span>
          <h2 className="section-title">Bridging Scalable Systems & Fluid Experiences</h2>
          <p className="section-desc">
            With 2 years of hands-on production experience, I architect end-to-end web applications that balance robust backend resilience with buttery-smooth user interfaces.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="about-grid">
          {/* Left Column: Story & Highlights */}
          <div className="about-story glass-panel">
            <h3 className="story-title">About Me</h3>
            <p className="story-text">
              I am a Full-Stack Software Developer currently working at <strong>Foxiom Leads</strong> and previously at <strong>Bairuha Tech</strong> in Calicut, India. Over the last 2 years, I have engineered enterprise flight date alteration engines integrated with Amadeus GDS, accounting software, multi-tier CRM platforms, and interactive AI image labeling interfaces.
            </p>
            <p className="story-text">
              My engineering philosophy revolves around writing clean, self-documenting code, strictly typed architectures with TypeScript, and creating resilient APIs that withstand real-world loads. I enjoy collaborating with cross-functional product squads, exploring AI workflows, and automating complex business logic.
            </p>

            <div className="core-highlights">
              <div className="highlight-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>2+ Years full SDLC ownership in agile enterprise squads</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Specialized in Amadeus GDS flight reservation integration</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Strong problem solver keen on AI, automation & high-framerate WebGL</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Technical Pillars with 3D Tilt */}
          <div className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <TiltCard key={idx} maxTilt={10} scale={1.02} className="pillar-tilt">
                <div className="pillar-card">
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Education & Qualifications */}
        <div className="education-block">
          <h3 className="edu-heading">
            <GraduationCap size={22} className="text-cyan" />
            <span>Academic & Professional Credentials</span>
          </h3>

          <div className="education-grid">
            {educationData.map((edu, idx) => (
              <div key={idx} className="edu-card glass-panel">
                <div className="edu-badge">{edu.period}</div>
                <h4 className="edu-degree">{edu.degree}</h4>
                <div className="edu-institution">
                  <span>{edu.institution}</span> • <span className="edu-loc">{edu.location}</span>
                </div>
                <p className="edu-details">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-bottom: 50px;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; }
        }
        .about-story {
          padding: 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .story-title {
          font-family: var(--font-display);
          font-size: 1.6rem;
          color: #fff;
          margin-bottom: 16px;
        }
        .story-text {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .story-text strong {
          color: #fff;
        }
        .core-highlights {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 12px;
        }
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #e2e8f0;
          font-size: 0.92rem;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 34px;
        }
        @media (max-width: 600px) {
          .pillars-grid { grid-template-columns: 1fr; }
        }
        .pillar-card {
          padding: 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .pillar-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .pillar-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          color: #fff;
          margin-bottom: 8px;
        }
        .pillar-desc {
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.6;
        }
        .education-block {
          margin-top: 30px;
        }
        .edu-heading {
          font-family: var(--font-display);
          font-size: 1.4rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }
        .education-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .education-grid { grid-template-columns: 1fr; }
        }
        .edu-card {
          padding: 24px;
          position: relative;
        }
        .edu-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-primary);
          background: rgba(56, 189, 248, 0.1);
          padding: 3px 8px;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 12px;
        }
        .edu-degree {
          font-family: var(--font-display);
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 6px;
        }
        .edu-institution {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 10px;
        }
        .edu-loc {
          color: var(--text-dim);
        }
        .edu-details {
          font-size: 0.85rem;
          color: var(--text-dim);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};
