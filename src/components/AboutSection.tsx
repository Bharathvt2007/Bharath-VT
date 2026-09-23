import React from 'react';
import { Brain, Code2, Database, Cpu, Lightbulb } from 'lucide-react';
import { ABOUT_HIGHLIGHTS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'ai':
        return <Brain size={24} className="text-[#8ed5ff]" />;
      case 'programming':
        return <Code2 size={24} className="text-[#bdc2ff]" />;
      case 'database':
        return <Database size={24} className="text-[#7bd0ff]" />;
      case 'iot':
        return <Cpu size={24} className="text-[#ce9bff]" />;
      case 'problem-solving':
        return <Lightbulb size={24} className="text-[#8ed5ff]" />;
      default:
        return <Brain size={24} className="text-[#8ed5ff]" />;
    }
  };

  return (
    <section id="about" className="space-y-8 pt-8">
      {/* Section Header */}
      <div className="flex flex-col gap-1.5">
        <span className="font-mono text-xs text-[#8ed5ff] tracking-wider uppercase font-semibold">
          PROFILE &amp; FOCUS
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#dfe2f1] tracking-tight">
          About Me
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#8ed5ff] to-transparent rounded-full mt-1"></div>
      </div>

      {/* Main Statement Box */}
      <div
        id="about-statement-card"
        className="p-6 md:p-8 rounded-2xl glass-card border border-[#3e484f]/40 relative overflow-hidden"
      >
        <p className="text-base md:text-lg text-[#dfe2f1] leading-relaxed font-normal">
          I am a Computer Science student interested in Software Development and Data Analytics. I
          have a strong interest in programming, databases, problem solving, and emerging
          technologies. I enjoy building practical projects, improving my coding skills, and gaining
          hands-on experience through technical work.
        </p>
      </div>

      {/* 5 Highlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {ABOUT_HIGHLIGHTS.map((item, index) => (
          <div
            key={item.title}
            id={`about-highlight-card-${index}`}
            className="p-5 rounded-2xl glass-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1c1f2a] flex items-center justify-center mb-4 border border-[#3e484f]/40 group-hover:border-[#8ed5ff]/40 transition-colors">
              {renderIcon(item.iconName)}
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#dfe2f1] mb-1.5 group-hover:text-[#8ed5ff] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#bdc8d1] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
