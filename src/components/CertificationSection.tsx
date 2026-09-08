import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { CERTIFICATION_DATA } from '../data/portfolioData';

interface CertificationSectionProps {
  onOpenCertificate: () => void;
}

export const CertificationSection: React.FC<CertificationSectionProps> = ({ onOpenCertificate }) => {
  return (
    <section id="certification" className="space-y-8 pt-8">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <span className="font-mono text-xs text-[#8ed5ff] tracking-wider uppercase font-semibold">
          VERIFIED CREDENTIALS
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#dfe2f1] tracking-tight">
          Certification
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#8ed5ff] to-transparent rounded-full mt-1"></div>
      </div>

      {/* Dedicated IBM Showcase Card */}
      <div
        id="certification-card"
        className="p-6 md:p-8 rounded-2xl glass-card border border-[#3e484f]/40 relative overflow-hidden group hover:border-[#8ed5ff]/50 transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#1c1f2a] flex items-center justify-center text-[#8ed5ff] border border-[#8ed5ff]/30 flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
              <Award size={30} />
            </div>

            <div className="space-y-1.5">
              <span className="font-mono text-xs text-[#7bd0ff] font-medium tracking-wide">
                {CERTIFICATION_DATA.provider.split('/')[1]?.trim() || 'IBM SkillsBuild'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#dfe2f1] group-hover:text-[#8ed5ff] transition-colors">
                {CERTIFICATION_DATA.title}
              </h3>
              <p className="text-sm text-[#bdc8d1]">
                Course: {CERTIFICATION_DATA.title} ({CERTIFICATION_DATA.courseCode})
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[#87929a] font-mono text-xs">
                <span>Provider: {CERTIFICATION_DATA.provider}</span>
                <span>•</span>
                <span className="text-[#dfe2f1]">Issued: {CERTIFICATION_DATA.issueDate}</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <button
              id="view-certificate-button"
              onClick={onOpenCertificate}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1c1f2a] border border-[#3e484f]/60 text-[#dfe2f1] hover:text-[#8ed5ff] hover:border-[#8ed5ff] hover:bg-[#262a35] transition-all font-mono text-xs font-semibold cursor-pointer shadow-sm active:scale-95"
            >
              <CheckCircle size={15} className="text-[#8ed5ff]" />
              <span>View Certificate</span>
              <ExternalLink size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
