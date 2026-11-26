import React, { useState, useRef, useEffect } from 'react';
import { terminalCommandsHelp, personalInfo, projectsData, experiencesData, educationData, skillCategories } from '../data/portfolioData';
import { soundEngine } from '../utils/sound';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2 } from 'lucide-react';

interface TerminalEntry {
  type: 'input' | 'output' | 'system';
  text: string | React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      type: 'system',
      text: (
        <div>
          <p className="terminal-welcome">Muhammed Danish KK [Developer Console v2.6.0]</p>
          <p className="terminal-sub">Type <span className="text-cyan">help</span> to list commands or click suggested presets below.</p>
        </div>
      )
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll only within the terminal screen container, never the page
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    soundEngine.playTerminal();

    const newEntries: TerminalEntry[] = [
      ...history,
      { type: 'input', text: `danish@portfolio:~$ ${cmd}` }
    ];

    switch (trimmed) {
      case 'help':
        newEntries.push({
          type: 'output',
          text: (
            <div className="terminal-table">
              {terminalCommandsHelp.map((c) => (
                <div key={c.cmd} className="terminal-row">
                  <span className="cmd-name text-cyan">{c.cmd}</span>
                  <span className="cmd-desc">{c.desc}</span>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'about':
        newEntries.push({
          type: 'output',
          text: (
            <div>
              <p><strong>{personalInfo.name}</strong> - {personalInfo.role} ({personalInfo.experienceYears} Years Exp)</p>
              <p>{personalInfo.bio}</p>
              <p className="text-cyan">Based in: {personalInfo.location}</p>
            </div>
          )
        });
        break;

      case 'skills':
        newEntries.push({
          type: 'output',
          text: (
            <div>
              {skillCategories.map((cat) => (
                <div key={cat.title} style={{ marginBottom: 6 }}>
                  <span className="text-cyan">[{cat.title}]: </span>
                  <span>{cat.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'projects':
        newEntries.push({
          type: 'output',
          text: (
            <div>
              {projectsData.map((p, i) => (
                <div key={p.id} style={{ marginBottom: 8 }}>
                  <span className="text-cyan">#{i + 1} {p.title}</span> ({p.company})
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{p.description}</p>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Stack: {p.techStack.join(', ')}</p>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'experience':
        newEntries.push({
          type: 'output',
          text: (
            <div>
              {experiencesData.map((e, idx) => (
                <div key={idx} style={{ marginBottom: 8 }}>
                  <span className="text-cyan">{e.role} @ {e.company}</span> [{e.period} - {e.location}]
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{e.summary}</p>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'education':
        newEntries.push({
          type: 'output',
          text: (
            <div>
              {educationData.map((edu, idx) => (
                <div key={idx} style={{ marginBottom: 6 }}>
                  <span className="text-cyan">{edu.degree}</span> - {edu.institution} ({edu.period})
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'contact':
        newEntries.push({
          type: 'output',
          text: (
            <div>
              <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-cyan">{personalInfo.email}</a></p>
              <p>Phone: <a href={`tel:${personalInfo.phone}`} className="text-cyan">{personalInfo.phone}</a></p>
              <p>Location: {personalInfo.location}</p>
            </div>
          )
        });
        break;

      case 'hire':
        newEntries.push({
          type: 'output',
          text: (
            <div>
              <p className="text-cyan">Initiating contact flow...</p>
              <p>Feel free to reach out directly at <a href={`mailto:${personalInfo.email}`} className="text-cyan">{personalInfo.email}</a> or WhatsApp <a href={personalInfo.whatsappUrl} target="_blank" rel="noreferrer" className="text-cyan">{personalInfo.phone}</a></p>
            </div>
          )
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newEntries.push({
          type: 'output',
          text: <span style={{ color: '#f87171' }}>Command not found: "{trimmed}". Type "help" to view valid commands.</span>
        });
        break;
    }

    setHistory(newEntries);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    }
  };

  return (
    <section id="terminal" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">05 / Developer Sandbox</span>
          <h2 className="section-title">Interactive CLI Console</h2>
          <p className="section-desc">
            Test the command interface directly. Query projects, system skills, work history, or trigger contact commands.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="terminal-box glass-panel">
          {/* Terminal Window Header Bar */}
          <div className="terminal-bar">
            <div className="terminal-dots">
              <span className="t-dot t-red" />
              <span className="t-dot t-yellow" />
              <span className="t-dot t-green" />
            </div>
            <div className="terminal-title-text">
              <TerminalIcon size={14} className="text-cyan" />
              <span>danish@calicut-node: ~/portfolio</span>
            </div>
            <button
              onClick={() => {
                soundEngine.playClick();
                setHistory([]);
              }}
              className="term-clear-btn"
              title="Clear terminal"
            >
              <Trash2 size={14} />
            </button>
          </div>

          {/* Preset Buttons for Quick Interaction */}
          <div className="preset-buttons-row">
            <span className="preset-label">Quick Commands:</span>
            {['help', 'about', 'skills', 'projects', 'experience', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                className="preset-btn"
                onClick={() => handleCommand(cmd)}
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Body Screen */}
          <div ref={screenRef} className="terminal-screen" onClick={() => inputRef.current?.focus()}>
            {history.map((entry, idx) => (
              <div key={idx} className={`terminal-line ${entry.type}`}>
                {entry.text}
              </div>
            ))}

            {/* Live Input Line */}
            <div className="terminal-prompt-row">
              <span className="prompt-label">danish@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input"
                placeholder="type command (e.g. skills)..."
                autoComplete="off"
                spellCheck={false}
              />
              <button
                onClick={() => handleCommand(inputVal)}
                className="terminal-send-btn"
                aria-label="Send command"
              >
                <CornerDownLeft size={14} />
              </button>
            </div>
            <div />
          </div>
        </div>
      </div>

      <style>{`
        .terminal-box {
          background: #080c14;
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.1);
        }
        .terminal-bar {
          background: #0d131f;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .terminal-dots {
          display: flex;
          gap: 8px;
        }
        .t-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .t-red { background: #ef4444; }
        .t-yellow { background: #f59e0b; }
        .t-green { background: #10b981; }
        .terminal-title-text {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .term-clear-btn {
          background: transparent;
          border: none;
          color: var(--text-dim);
          cursor: pointer;
          transition: color 0.2s;
        }
        .term-clear-btn:hover {
          color: #fff;
        }
        .preset-buttons-row {
          background: rgba(255, 255, 255, 0.02);
          padding: 10px 18px;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
        .preset-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-dim);
        }
        .preset-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 3px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .preset-btn:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          background: rgba(56, 189, 248, 0.1);
        }
        .terminal-screen {
          padding: 24px;
          min-height: 280px;
          max-height: 440px;
          overflow-y: auto;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: #e2e8f0;
        }
        .terminal-welcome {
          color: #38bdf8;
          font-weight: 700;
        }
        .terminal-sub {
          color: #94a3b8;
          font-size: 0.82rem;
        }
        .terminal-line.input {
          color: #38bdf8;
          font-weight: 600;
        }
        .terminal-line.output {
          color: #cbd5e1;
          line-height: 1.6;
        }
        .terminal-table {
          display: grid;
          gap: 6px;
        }
        .terminal-row {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 12px;
        }
        .cmd-name {
          font-weight: bold;
        }
        .cmd-desc {
          color: #94a3b8;
        }
        .terminal-prompt-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 6px;
        }
        .prompt-label {
          color: #10b981;
          font-weight: 700;
          white-space: nowrap;
        }
        .terminal-input {
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          flex: 1;
        }
        .terminal-send-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .terminal-send-btn:hover {
          color: #fff;
          border-color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
};
