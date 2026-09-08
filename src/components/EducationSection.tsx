import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="space-y-8 pt-8">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <span className="font-mono text-xs text-[#8ed5ff] tracking-wider uppercase font-semibold">
          ACADEMIC BACKGROUND
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#dfe2f1] tracking-tight">
          Education
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#8ed5ff] to-transparent rounded-full mt-1"></div>
      </div>

      {/* Main Education Card */}
      <div
        id="education-timeline-card"
        className="p-6 md:p-8 rounded-2xl glass-card relative overflow-hidden border border-[#3e484f]/40"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top summary row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#3e484f]/40 pb-6 mb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1c1f2a] font-mono text-xs text-[#8ed5ff] border border-[#3e484f]/40">
              <GraduationCap size={15} />
              <span>Undergraduate Degree</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#dfe2f1]">
              {EDUCATION_DATA.degree}
            </h3>
            <p className="text-base sm:text-lg text-[#8ed5ff] font-medium">
              {EDUCATION_DATA.institution}
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#8ed5ff] font-mono text-xs">
              <Calendar size={13} />
              <span>{EDUCATION_DATA.currentSemester}</span>
            </span>
            <span className="font-mono text-xs text-[#bdc8d1] flex items-center gap-1.5">
              <MapPin size={13} className="text-[#87929a]" />
              <span>{EDUCATION_DATA.location}</span>
            </span>
          </div>
        </div>

        {/* Relevant Coursework */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#dfe2f1] font-semibold mb-3">
            Relevant Coursework &amp; Key Learning Areas
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {EDUCATION_DATA.coursework.map((course) => (
              <span
                key={course}
                className="px-3 py-1.5 rounded-lg bg-[#1c1f2a] border border-[#3e484f]/40 font-mono text-xs text-[#dfe2f1] hover:border-[#8ed5ff]/50 hover:text-[#8ed5ff] transition-all cursor-default"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
