import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { soundEngine } from '../utils/sound';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    soundEngine.playClick();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playChime();
    setSubmitted(true);

    // Launch celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">06 / Connect & Collaborate</span>
          <h2 className="section-title">Let's Build Something Exceptional</h2>
          <p className="section-desc">
            Whether you have an upcoming project, an engineering opening in your team, or want to discuss flight integrations and scalable web architectures, my inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Quick Contact Cards */}
          <div className="contact-cards-col">
            {/* Email Card */}
            <div className="contact-info-card glass-panel">
              <div className="contact-card-icon">
                <Mail size={22} className="text-cyan" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Direct Email</span>
                <a href={`mailto:${personalInfo.email}`} className="contact-card-val">
                  {personalInfo.email}
                </a>
              </div>
              <button
                className="contact-copy-btn"
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                title="Copy Email Address"
              >
                {copiedEmail ? <Check size={16} className="text-cyan" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="contact-info-card glass-panel">
              <div className="contact-card-icon">
                <Phone size={22} className="text-cyan" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Phone & WhatsApp</span>
                <a href={`tel:${personalInfo.phone}`} className="contact-card-val">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="contact-btn-group">
                <button
                  className="contact-copy-btn"
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check size={16} className="text-cyan" /> : <Copy size={16} />}
                </button>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-copy-btn text-cyan"
                  title="Chat on WhatsApp"
                  onClick={() => soundEngine.playClick()}
                >
                  <MessageSquare size={16} />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-info-card glass-panel">
              <div className="contact-card-icon">
                <MapPin size={22} className="text-cyan" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Location</span>
                <span className="contact-card-val">{personalInfo.location}</span>
                <span className="time-badge">India Standard Time (UTC+5:30)</span>
              </div>
            </div>

            {/* Quick CV Download card */}
            <div className="resume-box glass-panel">
              <Sparkles size={20} className="text-cyan" />
              <div>
                <h4 className="resume-box-title">Looking for the official resume?</h4>
                <p className="resume-box-sub">Software Engineer with 2 years of full-stack experience.</p>
              </div>
              <a
                href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Muhammed%20Danish%20KK`}
                className="btn-secondary"
                onClick={() => soundEngine.playClick()}
              >
                Request CV
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-col glass-panel">
            <h3 className="form-heading">Send a Direct Dispatch</h3>
            <p className="form-sub">Drop a quick message and I will reply within 24 hours.</p>

            {submitted ? (
              <div className="submission-success">
                <Check size={40} className="text-cyan success-icon" />
                <h4 className="success-title">Message Received!</h4>
                <p className="success-desc">Thank you for reaching out. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="form-input"
                    placeholder="e.g. Alex Henderson"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="form-input"
                    placeholder="alex@company.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Inquiry</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="form-textarea"
                    placeholder="Tell me about your project, team, or inquiry..."
                  />
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
        .contact-cards-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .contact-info-card {
          padding: 22px 26px;
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .contact-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-card-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow: hidden;
        }
        .contact-card-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }
        .contact-card-val {
          font-size: 0.95rem;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
          word-break: break-all;
        }
        .contact-card-val:hover {
          color: var(--accent-primary);
        }
        .time-badge {
          font-size: 0.72rem;
          color: var(--accent-primary);
          font-family: var(--font-mono);
        }
        .contact-btn-group {
          display: flex;
          gap: 8px;
        }
        .contact-copy-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .contact-copy-btn:hover {
          color: #fff;
          border-color: var(--accent-primary);
          background: rgba(255, 255, 255, 0.1);
        }
        .resume-box {
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 8px;
        }
        .resume-box-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          color: #fff;
          margin-bottom: 2px;
        }
        .resume-box-sub {
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .contact-form-col {
          padding: 36px;
        }
        .form-heading {
          font-family: var(--font-display);
          font-size: 1.6rem;
          color: #fff;
          margin-bottom: 6px;
        }
        .form-sub {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 24px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-label {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .form-input, .form-textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 12px 16px;
          color: #fff;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 15px var(--accent-primary-glow);
        }
        .form-submit-btn {
          margin-top: 8px;
          justify-content: center;
        }
        .submission-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          text-align: center;
        }
        .success-icon {
          margin-bottom: 16px;
        }
        .success-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 8px;
        }
        .success-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
};
