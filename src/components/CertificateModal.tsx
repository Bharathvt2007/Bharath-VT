import React from 'react';
import { X, Award, CheckCircle2, ShieldCheck, Calendar, BookOpen } from 'lucide-react';
import { CERTIFICATION_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in overflow-y-auto">
      <div
        id="certificate-modal-content"
        className="w-full max-w-xl bg-[#0a0e18] border border-[#3e484f]/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#171b26] border-b border-[#3e484f]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award size={18} className="text-[#8ed5ff]" />
            <h3 className="font-bold text-[#dfe2f1] text-base">Verified Credential</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#87929a] hover:text-white hover:bg-[#1c1f2a] transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Certificate Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-[#dfe2f1]">
          {/* Certificate Frame */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#1c1f2a] to-[#171b26] border-2 border-[#8ed5ff]/40 space-y-5 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8]/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#0a0e18] flex items-center justify-center text-[#8ed5ff] border border-[#8ed5ff]/40 shadow-inner">
                <Award size={36} />
              </div>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs text-[#7bd0ff] uppercase tracking-widest font-semibold">
                IBM DEVELOPER SKILLS NETWORK
              </span>
              <h2 className="text-2xl font-bold text-[#dfe2f1]">{CERTIFICATION_DATA.title}</h2>
              <p className="font-mono text-xs text-[#8ed5ff]">Course Code: {CERTIFICATION_DATA.courseCode}</p>
            </div>

            <div className="pt-2 pb-2 text-xs text-[#bdc8d1]">
              <p>This recognizes that</p>
              <p className="text-base font-bold text-[#dfe2f1] mt-1">{PERSONAL_INFO.name}</p>
              <p className="text-xs text-[#87929a]">has successfully completed the curriculum requirements</p>
            </div>

            <div className="pt-4 border-t border-[#3e484f]/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#87929a]">
              <div className="flex items-center gap-1.5">
                <Calendar size={13} className="text-[#8ed5ff]" />
                <span>Issued: {CERTIFICATION_DATA.issueDate}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#38bdf8]">
                <ShieldCheck size={14} />
                <span>ID: {CERTIFICATION_DATA.credentialId}</span>
              </div>
            </div>
          </div>

          {/* Competencies Verified */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#8ed5ff] font-semibold mb-3 flex items-center gap-1.5">
              <BookOpen size={14} />
              <span>Competencies Covered</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CERTIFICATION_DATA.skillsCovered.map((skill) => (
                <div
                  key={skill}
                  className="p-2.5 rounded-lg bg-[#171b26] border border-[#3e484f]/40 flex items-center gap-2 text-xs text-[#dfe2f1]"
                >
                  <CheckCircle2 size={14} className="text-[#8ed5ff] flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
