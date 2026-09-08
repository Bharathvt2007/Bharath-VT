import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, EDUCATION_DATA } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-xs space-y-1 text-[#dfe2f1]">
          <p className="text-[#8ed5ff] font-bold">Bharath VT Interactive Terminal v2.5.0</p>
          <p className="text-[#87929a]">B.Tech AI &amp; Data Science | REVA University</p>
          <p className="text-[#bdc8d1] pt-1">
            Type <span className="text-[#38bdf8] font-bold">help</span> to view available commands
            or click the buttons below.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs text-[#dfe2f1]">
            <p className="text-[#8ed5ff] font-semibold">Available Commands:</p>
            <p>
              <span className="text-[#38bdf8] font-bold">about</span> - Brief summary of Bharath VT
            </p>
            <p>
              <span className="text-[#38bdf8] font-bold">skills</span> - Overview of technical
              capabilities
            </p>
            <p>
              <span className="text-[#38bdf8] font-bold">projects</span> - List of applied prototypes
            </p>
            <p>
              <span className="text-[#38bdf8] font-bold">education</span> - Academic details &amp;
              coursework
            </p>
            <p>
              <span className="text-[#38bdf8] font-bold">contact</span> - Direct phone, email, and
              social channels
            </p>
            <p>
              <span className="text-[#38bdf8] font-bold">clear</span> - Clear terminal screen
            </p>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="text-xs space-y-1 text-[#dfe2f1]">
            <p className="text-[#8ed5ff] font-bold">{PERSONAL_INFO.name}</p>
            <p className="text-[#bdc8d1]">{PERSONAL_INFO.summary}</p>
            <p className="text-[#87929a]">{PERSONAL_INFO.institution} • Bengaluru</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="text-xs space-y-2 text-[#dfe2f1]">
            {SKILLS_DATA.map((s) => (
              <div key={s.id}>
                <span className="text-[#8ed5ff] font-semibold">{s.title}:</span>{' '}
                <span className="text-[#bdc8d1]">{s.tags.join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="text-xs space-y-2 text-[#dfe2f1]">
            {PROJECTS_DATA.map((p, idx) => (
              <div key={p.id} className="border-l-2 border-[#8ed5ff]/40 pl-2">
                <p className="text-[#8ed5ff] font-bold">
                  [{idx + 1}] {p.title}
                </p>
                <p className="text-[#87929a]">{p.category}</p>
                <p className="text-[#bdc8d1]">{p.tags.join(' • ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="text-xs space-y-1 text-[#dfe2f1]">
            <p className="text-[#8ed5ff] font-bold">{EDUCATION_DATA.degree}</p>
            <p className="text-[#bdc8d1]">{EDUCATION_DATA.institution}</p>
            <p className="text-[#87929a]">{EDUCATION_DATA.currentSemester}</p>
            <p className="text-[#dfe2f1] pt-1 font-semibold">Coursework:</p>
            <p className="text-[#bdc8d1]">{EDUCATION_DATA.coursework.join(', ')}</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-xs space-y-1 text-[#dfe2f1]">
            <p>
              <span className="text-[#8ed5ff]">Phone:</span> {PERSONAL_INFO.phone}
            </p>
            <p>
              <span className="text-[#8ed5ff]">Email:</span> {PERSONAL_INFO.displayEmail}
            </p>
            <p>
              <span className="text-[#8ed5ff]">Location:</span> {PERSONAL_INFO.location}
            </p>
            <p>
              <span className="text-[#8ed5ff]">GitHub:</span> {PERSONAL_INFO.social.github}
            </p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        outputNode = (
          <div className="text-xs text-red-400">
            command not found: "{cmdStr}". Type <span className="font-bold text-[#8ed5ff]">help</span> to see available commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: outputNode }]);
    setInput('');
  };

  const quickCommands = ['help', 'skills', 'projects', 'education', 'contact', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div
        id="terminal-window"
        className="w-full max-w-2xl bg-[#0a0e18] border border-[#3e484f]/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] font-mono"
      >
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-[#171b26] border-b border-[#3e484f]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            <span className="ml-2 text-xs text-[#87929a] font-mono flex items-center gap-1.5">
              <Terminal size={13} className="text-[#8ed5ff]" />
              <span>bharath-vt@reva-terminal: ~</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="text-[#87929a] hover:text-[#dfe2f1] p-1 rounded-md hover:bg-[#1c1f2a] transition-colors"
              aria-label="Close Terminal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Quick actions chips */}
        <div className="px-4 py-2 bg-[#0f131d] border-b border-[#3e484f]/25 flex flex-wrap gap-1.5 items-center">
          <span className="text-[11px] text-[#87929a] mr-1">Quick:</span>
          {quickCommands.map((q) => (
            <button
              key={q}
              onClick={() => handleCommand(q)}
              className="px-2 py-0.5 rounded bg-[#1c1f2a] hover:bg-[#8ed5ff]/20 text-[#8ed5ff] text-[11px] border border-[#3e484f]/40 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1 text-xs">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-[#8ed5ff]">
                <span>❯</span>
                <span className="text-[#dfe2f1] font-bold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="p-3 bg-[#171b26] border-t border-[#3e484f]/40 flex items-center gap-2"
        >
          <span className="text-[#8ed5ff] font-bold text-sm">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command here (e.g., skills, projects, contact)..."
            className="flex-1 bg-transparent border-none text-[#dfe2f1] text-xs font-mono focus:outline-none placeholder:text-[#87929a]"
          />
          <button
            type="submit"
            className="text-[#87929a] hover:text-[#8ed5ff] p-1.5 rounded-lg hover:bg-[#1c1f2a] transition-colors"
            aria-label="Execute Command"
          >
            <CornerDownLeft size={14} />
          </button>
        </form>
      </div>
    </div>
  );
};
