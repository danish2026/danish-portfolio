import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { soundEngine } from '../utils/sound';
import { ArrowUp, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Indian Standard Time (Calicut, India)
      const istTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(new Date());
      setLocalTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundEngine.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container footer-content">
        {/* Brand & Summary */}
        <div className="footer-left">
          <div className="footer-logo">
            <span className="footer-logo-badge">MD</span>
            <span className="footer-name">{personalInfo.name}</span>
          </div>
          <p className="footer-tagline">
            Full-Stack Software Engineer • Foxiom Leads • Calicut, India
          </p>
        </div>

        {/* Live IST Clock */}
        <div className="footer-center">
          <div className="ist-badge glass-pill">
            <Clock size={14} className="text-cyan" />
            <span>Calicut, IN: {localTime || 'Loading...'} IST</span>
          </div>
        </div>

        {/* Back to top button */}
        <div className="footer-right">
          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to top">
            <span>Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="copyright-text">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React 19, TypeScript & Three.js 3D.
        </p>
      </div>

      <style>{`
        .footer-wrap {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: #05070a;
          padding: 40px 0 24px 0;
          position: relative;
          z-index: 10;
        }
        .footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-logo-badge {
          width: 28px;
          height: 28px;
          border-radius: 7px;
          background: var(--accent-gradient);
          color: #07090e;
          font-weight: 800;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-name {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
        }
        .footer-tagline {
          font-size: 0.8rem;
          color: var(--text-dim);
        }
        .ist-badge {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .back-to-top-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-muted);
          padding: 8px 16px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: all 0.2s;
        }
        .back-to-top-btn:hover {
          color: #fff;
          border-color: var(--accent-primary);
          background: rgba(255, 255, 255, 0.08);
        }
        .footer-bottom {
          padding-top: 20px;
          text-align: center;
        }
        .copyright-text {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
        }
      `}</style>
    </footer>
  );
};
