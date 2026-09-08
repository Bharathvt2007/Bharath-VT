import React from 'react';
import { GraduationCap, Calendar, ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-8 md:pt-16 pb-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14"
    >
      <div className="flex-1 space-y-6 text-left">
        {/* Status Pill */}
        <div
          id="hero-status-pill"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171b26] border border-[#3e484f]/40"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-pulse"></span>
          <span className="font-mono text-xs text-[#38bdf8] font-medium tracking-wide">
            {PERSONAL_INFO.status}
          </span>
          <span className="text-[#87929a] text-xs">•</span>
          <span className="font-mono text-xs text-[#bdc8d1]">{PERSONAL_INFO.semesterStatus}</span>
        </div>

        {/* Hero Headings */}
        <div className="space-y-2">
          <p className="font-mono text-xs tracking-wider text-[#8ed5ff] uppercase font-semibold">
            HELLO WORLD
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#dfe2f1] tracking-tight leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ed5ff] via-[#38bdf8] to-[#bdc2ff]">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-[#bdc2ff] font-semibold tracking-normal">
            {PERSONAL_INFO.role}
          </h2>
        </div>

        {/* Narrative */}
        <p className="text-base sm:text-lg text-[#bdc8d1] max-w-2xl leading-relaxed">
          {PERSONAL_INFO.summary}
        </p>

        {/* Quick Meta Details */}
        <div className="flex flex-wrap items-center gap-3 pt-1 text-[#bdc8d1] font-mono text-xs">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1c1f2a] border border-[#3e484f]/30">
            <GraduationCap className="text-[#8ed5ff]" size={16} />
            <span>{PERSONAL_INFO.institution} • Bengaluru</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1c1f2a] border border-[#3e484f]/30">
            <Calendar className="text-[#bdc2ff]" size={16} />
            <span>Current: {PERSONAL_INFO.currentSemester}</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            id="hero-view-projects-cta"
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#bdc2ff] text-[#0a0e18] font-bold text-sm tracking-tight shadow-lg shadow-[#38bdf8]/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight size={16} />
          </a>
          <a
            id="hero-contact-me-cta"
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#171b26]/80 border border-[#3e484f]/50 text-[#dfe2f1] text-sm font-medium hover:border-[#8ed5ff] hover:text-[#8ed5ff] hover:bg-[#1c1f2a] transition-all cursor-pointer"
          >
            <Mail size={16} />
            <span>Contact Me</span>
          </a>
        </div>
      </div>

      {/* Avatar Visual Container */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        {/* Ambient Glow Backing */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#38bdf8]/30 via-[#ce9bff]/20 to-transparent blur-3xl transform scale-110 pointer-events-none"></div>

        {/* Border Container */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl p-1.5 bg-gradient-to-b from-[#8ed5ff]/40 via-[#3e484f]/30 to-[#ce9bff]/30 hero-avatar-glow">
          <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#0a0e18] relative group">
            <img
              id="hero-avatar-image"
              src={PERSONAL_INFO.avatarUrl}
              alt="Professional portrait avatar of Bharath VT, young engineering student in dark blazer with modern tech studio lighting"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />

            {/* Corner Badge Overlay */}
            <div
              id="hero-avatar-badge"
              className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#0a0e18]/85 backdrop-blur-md border border-[#3e484f]/40 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping"></span>
                <span className="font-mono text-xs text-[#dfe2f1] font-medium">
                  {PERSONAL_INFO.institution}
                </span>
              </div>
              <span className="font-mono text-xs text-[#7bd0ff] font-semibold">
                Bengaluru, IN
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
