import React, { useState } from 'react';
import { X, Download, Printer, Check, GraduationCap, Award, Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, PROJECTS_DATA, CERTIFICATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.role} - ${PERSONAL_INFO.institution}
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.displayEmail} | Location: ${PERSONAL_INFO.location}

## EDUCATION
${EDUCATION_DATA.degree}
${EDUCATION_DATA.institution} | ${EDUCATION_DATA.currentSemester}
Coursework: ${EDUCATION_DATA.coursework.join(', ')}

## TECHNICAL SKILLS
${SKILLS_DATA.map((s) => `- ${s.title}: ${s.tags.join(', ')}`).join('\n')}

## PROJECTS
${PROJECTS_DATA.map((p) => `### ${p.title} (${p.category})
${p.description}
Tags: ${p.tags.join(', ')}`).join('\n\n')}

## CERTIFICATIONS
- ${CERTIFICATION_DATA.title} (${CERTIFICATION_DATA.courseCode}) - ${CERTIFICATION_DATA.provider} (Issued: ${CERTIFICATION_DATA.issueDate})
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in overflow-y-auto">
      <div
        id="resume-modal-content"
        className="w-full max-w-3xl bg-[#0a0e18] border border-[#3e484f]/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#171b26] border-b border-[#3e484f]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]"></span>
            <h3 className="font-bold text-[#dfe2f1] text-base">Curriculum Vitae Preview</h3>
            <span className="font-mono text-xs text-[#8ed5ff] bg-[#1c1f2a] px-2 py-0.5 rounded border border-[#3e484f]/40">
              PDF / Print Ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="px-3 py-1.5 rounded-lg bg-[#1c1f2a] hover:bg-[#262a35] text-xs font-mono text-[#8ed5ff] border border-[#3e484f]/40 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check size={13} /> : <Download size={13} />}
              <span>{copied ? 'Copied Markdown' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-[#1c1f2a] hover:bg-[#262a35] text-[#8ed5ff] border border-[#3e484f]/40 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer size={15} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#87929a] hover:text-white hover:bg-[#1c1f2a] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-[#dfe2f1] text-sm leading-relaxed">
          {/* Header */}
          <div className="border-b border-[#3e484f]/40 pb-5 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#8ed5ff]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base text-[#dfe2f1] font-medium">{PERSONAL_INFO.role}</p>
              <p className="text-xs text-[#bdc8d1]">{PERSONAL_INFO.institution}</p>
            </div>
            <div className="text-xs font-mono text-[#bdc8d1] space-y-1 sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5">
                <Phone size={12} className="text-[#8ed5ff]" />
                <span>{PERSONAL_INFO.phone}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail size={12} className="text-[#8ed5ff]" />
                <span>{PERSONAL_INFO.displayEmail}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin size={12} className="text-[#8ed5ff]" />
                <span>{PERSONAL_INFO.location}</span>
              </p>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#8ed5ff] font-bold mb-2">
              CAREER OBJECTIVE
            </h2>
            <p className="text-xs sm:text-sm text-[#bdc8d1] bg-[#171b26] p-3.5 rounded-xl border border-[#3e484f]/30">
              "To build a successful career in the technology field by strengthening my skills in
              Artificial Intelligence &amp; Data Science, programming, software development,
              databases, IoT, and problem solving. I aim to gain practical experience, work on
              meaningful projects, and continuously learn new technologies."
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#8ed5ff] font-bold mb-2 flex items-center gap-1.5">
              <GraduationCap size={15} />
              <span>EDUCATION</span>
            </h2>
            <div className="bg-[#171b26] p-4 rounded-xl border border-[#3e484f]/30 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-bold text-[#dfe2f1]">{EDUCATION_DATA.degree}</span>
                <span className="font-mono text-xs text-[#8ed5ff]">
                  {EDUCATION_DATA.currentSemester}
                </span>
              </div>
              <p className="text-xs text-[#bdc8d1]">{EDUCATION_DATA.institution}</p>
              <div className="pt-2 border-t border-[#3e484f]/25">
                <p className="text-xs font-mono text-[#87929a] mb-1">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-1.5">
                  {EDUCATION_DATA.coursework.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 rounded bg-[#1c1f2a] text-[11px] font-mono border border-[#3e484f]/40 text-[#dfe2f1]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#8ed5ff] font-bold mb-2 flex items-center gap-1.5">
              <Briefcase size={15} />
              <span>SELECTED PROJECTS</span>
            </h2>
            <div className="space-y-3">
              {PROJECTS_DATA.slice(0, 3).map((proj) => (
                <div
                  key={proj.id}
                  className="bg-[#171b26] p-3.5 rounded-xl border border-[#3e484f]/30 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#dfe2f1]">{proj.title}</span>
                    <span className="text-xs font-mono text-[#8ed5ff]">{proj.category}</span>
                  </div>
                  <p className="text-xs text-[#bdc8d1] leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[#1c1f2a] text-[10px] font-mono text-[#87929a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certification */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#8ed5ff] font-bold mb-2 flex items-center gap-1.5">
              <Award size={15} />
              <span>CERTIFICATION</span>
            </h2>
            <div className="bg-[#171b26] p-3.5 rounded-xl border border-[#3e484f]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-sm text-[#dfe2f1]">{CERTIFICATION_DATA.title}</span>
                <p className="text-xs text-[#bdc8d1]">
                  {CERTIFICATION_DATA.provider} • Code: {CERTIFICATION_DATA.courseCode}
                </p>
              </div>
              <span className="font-mono text-xs text-[#8ed5ff]">
                Issued: {CERTIFICATION_DATA.issueDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
