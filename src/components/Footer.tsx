import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="w-full bg-[#0a0e18] border-t border-[#3e484f]/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <p className="text-base sm:text-lg font-bold text-[#dfe2f1]">
            {PERSONAL_INFO.name} | AI &amp; Data Science Student
          </p>
          <p className="text-xs sm:text-sm text-[#bdc8d1]">
            Building skills. Creating projects. Growing in technology.
          </p>
          <p className="font-mono text-xs text-[#87929a]">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. B.Tech AI &amp; Data Science, {PERSONAL_INFO.institution}.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            id="footer-github-link"
            href={PERSONAL_INFO.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#bdc8d1] hover:text-[#8ed5ff] transition-colors text-xs sm:text-sm"
          >
            GitHub
          </a>
          <a
            id="footer-linkedin-link"
            href={PERSONAL_INFO.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#bdc8d1] hover:text-[#8ed5ff] transition-colors text-xs sm:text-sm"
          >
            LinkedIn
          </a>
          <a
            id="footer-kaggle-link"
            href={PERSONAL_INFO.social.kaggle}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#bdc8d1] hover:text-[#8ed5ff] transition-colors text-xs sm:text-sm"
          >
            Kaggle
          </a>
          <a
            id="footer-email-link"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-[#bdc8d1] hover:text-[#8ed5ff] transition-colors text-xs sm:text-sm"
          >
            Email
          </a>
          <button
            id="footer-back-to-top-button"
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-[#1c1f2a] hover:bg-[#262a35] border border-[#3e484f]/40 text-[#8ed5ff] flex items-center justify-center transition-colors cursor-pointer"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
