import React, { useState, useEffect } from 'react';
import { Terminal, Mail, Download, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'education', 'skills', 'projects', 'certification', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certification', href: '#certification', id: 'certification' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f131d]/90 backdrop-blur-md border-b border-[#3e484f]/40 shadow-lg shadow-black/20'
          : 'bg-[#0f131d]/75 backdrop-blur-md border-b border-[#3e484f]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a id="nav-brand-link" href="#home" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8ed5ff] to-[#e1bfff] flex items-center justify-center text-[#0a0e18] font-bold text-base shadow-md group-hover:scale-105 transition-transform">
            B
          </span>
          <span className="font-bold text-lg text-[#dfe2f1] tracking-tight group-hover:text-[#8ed5ff] transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono bg-[#1c1f2a] border border-[#3e484f]/40 text-[#7bd0ff]">
            AI &amp; DS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`text-sm transition-colors py-1 ${
                  isActive
                    ? 'text-[#8ed5ff] font-semibold border-b-2 border-[#8ed5ff]'
                    : 'text-[#bdc8d1] hover:text-[#8ed5ff] font-normal'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Trailing Actions */}
        <div className="flex items-center gap-2">
          <button
            id="nav-terminal-btn"
            onClick={onOpenTerminal}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#1c1f2a] border border-transparent hover:border-[#3e484f]/40 transition-all cursor-pointer"
            title="Interactive CLI Terminal"
            aria-label="Open Interactive CLI Terminal"
          >
            <Terminal size={18} />
          </button>

          <a
            id="nav-email-link"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#1c1f2a] border border-transparent hover:border-[#3e484f]/40 transition-all"
            title="Send Email"
            aria-label="Send Email"
          >
            <Mail size={18} />
          </a>

          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#262a35] border border-[#3e484f]/60 text-[#8ed5ff] font-mono text-xs hover:border-[#8ed5ff] hover:bg-[#1c1f2a] transition-all active:scale-95 shadow-sm cursor-pointer"
          >
            <span>Resume</span>
            <Download size={14} />
          </button>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[#bdc8d1] hover:text-[#8ed5ff] hover:bg-[#1c1f2a] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="md:hidden bg-[#171b26] border-b border-[#3e484f]/50 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                activeSection === link.id
                  ? 'bg-[#1c1f2a] text-[#8ed5ff] font-semibold'
                  : 'text-[#bdc8d1] hover:bg-[#1c1f2a]/60 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#3e484f]/40 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#262a35] text-[#8ed5ff] font-mono text-xs border border-[#3e484f]"
            >
              <Download size={14} />
              <span>View Resume</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="px-3 py-2 rounded-lg bg-[#1c1f2a] text-[#8ed5ff] font-mono text-xs border border-[#3e484f] flex items-center gap-1.5"
            >
              <Terminal size={14} />
              <span>CLI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
