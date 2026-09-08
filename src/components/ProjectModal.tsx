import React from 'react';
import { X, Cpu, CheckCircle2, Layers, AlertCircle, Wrench } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in overflow-y-auto">
      <div
        id="project-detail-modal"
        className="w-full max-w-2xl bg-[#0a0e18] border border-[#3e484f]/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#171b26] border-b border-[#3e484f]/40 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="font-mono text-xs text-[#8ed5ff]">{project.category}</span>
            <h3 className="text-lg font-bold text-[#dfe2f1]">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#87929a] hover:text-white hover:bg-[#1c1f2a] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#dfe2f1]">
          {project.image && (
            <div className="rounded-xl overflow-hidden max-h-56 w-full border border-[#3e484f]/40 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-[#0a0e18]/85 backdrop-blur-md border border-[#8ed5ff]/40 text-[#8ed5ff] font-mono text-xs font-semibold">
                  {project.badge}
                </span>
              </div>
            </div>
          )}

          {/* Overview */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#8ed5ff] font-semibold mb-2 flex items-center gap-1.5">
              <Layers size={14} />
              <span>Project Overview</span>
            </h4>
            <p className="text-sm text-[#bdc8d1] leading-relaxed">
              {project.fullDetails?.overview || project.description}
            </p>
          </div>

          {/* Key Components */}
          {project.fullDetails?.keyComponents && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#8ed5ff] font-semibold mb-2 flex items-center gap-1.5">
                <Cpu size={14} />
                <span>Key Hardware &amp; Software Components</span>
              </h4>
              <ul className="space-y-1.5">
                {project.fullDetails.keyComponents.map((comp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#dfe2f1]">
                    <span className="text-[#38bdf8] font-bold">›</span>
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Highlights */}
          {project.fullDetails?.technicalHighlights && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#8ed5ff] font-semibold mb-2 flex items-center gap-1.5">
                <CheckCircle2 size={14} />
                <span>Technical Highlights</span>
              </h4>
              <ul className="space-y-1.5">
                {project.fullDetails.technicalHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#bdc8d1]">
                    <span className="text-[#bdc2ff]">•</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges Solved */}
          {project.fullDetails?.challengesSolved && (
            <div className="p-4 rounded-xl bg-[#171b26] border border-[#3e484f]/40">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#ce9bff] font-semibold mb-1 flex items-center gap-1.5">
                <Wrench size={14} />
                <span>Engineering Challenges Solved</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#dfe2f1]">
                {project.fullDetails.challengesSolved}
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="pt-2 border-t border-[#3e484f]/30 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md bg-[#1c1f2a] text-[#8ed5ff] font-mono text-xs border border-[#3e484f]/40"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
