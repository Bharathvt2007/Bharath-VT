import React, { useState } from 'react';
import { Terminal, Database, Network, Cpu, Wrench, Sparkles, Check } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'terminal':
        return <Terminal size={22} className="text-[#8ed5ff]" />;
      case 'database':
        return <Database size={22} className="text-[#bdc2ff]" />;
      case 'computer-science':
        return <Network size={22} className="text-[#7bd0ff]" />;
      case 'iot':
        return <Cpu size={22} className="text-[#ce9bff]" />;
      case 'tools':
        return <Wrench size={22} className="text-[#8ed5ff]" />;
      case 'core':
        return <Sparkles size={22} className="text-[#bdc2ff]" />;
      default:
        return <Terminal size={22} className="text-[#8ed5ff]" />;
    }
  };

  const getTagStyle = (category: string) => {
    switch (category) {
      case 'programming':
        return 'bg-[#8ed5ff]/10 border-[#8ed5ff]/30 text-[#8ed5ff]';
      case 'database':
        return 'bg-[#2f3aa3]/30 border-[#bdc2ff]/30 text-[#bdc2ff]';
      case 'iot':
        return 'bg-[#ce9bff]/10 border-[#ce9bff]/30 text-[#ce9bff]';
      default:
        return 'bg-[#1c1f2a] border-[#3e484f]/40 text-[#dfe2f1]';
    }
  };

  return (
    <section id="skills" className="space-y-8 pt-8">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <span className="font-mono text-xs text-[#8ed5ff] tracking-wider uppercase font-semibold">
          TECHNICAL CAPABILITIES
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#dfe2f1] tracking-tight">
          Skills Matrix Dashboard
        </h2>
        <p className="text-sm md:text-base text-[#bdc8d1] max-w-xl">
          Curated technical proficiencies grounded in coursework, hands-on programming labs, and personal builds.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#8ed5ff] to-transparent rounded-full mt-1"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILLS_DATA.map((item) => {
          const isSelected = selectedCategory === item.id;
          return (
            <div
              key={item.id}
              id={`skill-card-${item.id}`}
              onClick={() => setSelectedCategory(isSelected ? null : item.id)}
              className={`p-6 rounded-2xl glass-card border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                isSelected
                  ? 'border-[#8ed5ff] bg-[#1c1f2a]/90 shadow-lg shadow-[#8ed5ff]/10 scale-[1.01]'
                  : 'border-[#3e484f]/40 hover:border-[#8ed5ff]/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    {getIcon(item.iconName)}
                    <h3 className="text-lg font-bold text-[#dfe2f1] group-hover:text-[#8ed5ff] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  {isSelected && (
                    <span className="w-5 h-5 rounded-full bg-[#8ed5ff]/20 text-[#8ed5ff] flex items-center justify-center">
                      <Check size={12} />
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-[#bdc8d1] leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1 border-t border-[#3e484f]/25">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full font-mono text-xs border transition-all ${getTagStyle(
                      item.id
                    )} group-hover:brightness-110`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
