/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationSection } from './components/CertificationSection';
import { ProfileObjectiveSection } from './components/ProfileObjectiveSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';
import { ProjectItem } from './types';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [certificateOpen, setCertificateOpen] = useState(false);

  return (
    <div className="bg-[#0f131d] text-[#dfe2f1] min-h-screen relative overflow-x-hidden selection:bg-[#38bdf8] selection:text-[#004965] font-sans">
      {/* Ambient Light Canvas Accents */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#8ed5ff]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-[30rem] h-[30rem] bg-[#e1bfff]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-10 w-[24rem] h-[24rem] bg-[#bdc2ff]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Navbar */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 pt-6">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <CertificationSection onOpenCertificate={() => setCertificateOpen(true)} />
        <ProfileObjectiveSection />
        <ContactSection />
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Modals */}
      <TerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <CertificateModal isOpen={certificateOpen} onClose={() => setCertificateOpen(false)} />
    </div>
  );
}
