import React from 'react';
import { LockKeyholeOpen, Leaf, Lightbulb, Cpu, Layers, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const featuredProject = PROJECTS_DATA.find((p) => p.isFeatured) || PROJECTS_DATA[0];
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.isFeatured);

  const getCategoryIcon = (category: string) => {
    if (category.includes('Access')) return <LockKeyholeOpen size={18} className="text-[#8ed5ff]" />;
    if (category.includes('CleanTech')) return <Leaf size={18} className="text-[#bdc2ff]" />;
    if (category.includes('Energy')) return <Lightbulb size={18} className="text-[#7bd0ff]" />;
    if (category.includes('Systems')) return <Cpu size={18} className="text-[#ce9bff]" />;
    if (category.includes('Database')) return <Layers size={18} className="text-[#8ed5ff]" />;
    return <Layers size={18} className="text-[#8ed5ff]" />;
  };

  return (
    <section id="projects" className="space-y-8 pt-8">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <span className="font-mono text-xs text-[#8ed5ff] tracking-wider uppercase font-semibold">
          PRACTICAL IMPLEMENTATIONS
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#dfe2f1] tracking-tight">
          Featured Projects
        </h2>
        <p className="text-sm md:text-base text-[#bdc8d1] max-w-2xl">
          Applied prototypes spanning IoT hardware control, startup environmental modeling, dynamic memory programming, and relational databases.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#8ed5ff] to-transparent rounded-full mt-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured Project (Large 2-column card) */}
        <div
          id="featured-project-card"
          className="md:col-span-2 rounded-2xl glass-card overflow-hidden border border-[#3e484f]/40 hover:border-[#8ed5ff]/50 transition-all duration-300 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Container */}
            <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[300px] overflow-hidden">
              {featuredProject.image && (
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0a0e18]/40 to-[#0a0e18] lg:to-[#0a0e18]/95"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-[#0a0e18]/85 backdrop-blur-md border border-[#8ed5ff]/40 text-[#8ed5ff] font-mono text-xs font-semibold shadow-md">
                  {featuredProject.badge}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#8ed5ff] font-mono text-xs font-medium">
                  {getCategoryIcon(featuredProject.category)}
                  <span>{featuredProject.category}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#dfe2f1] group-hover:text-[#8ed5ff] transition-colors leading-snug">
                  {featuredProject.title}
                </h3>
                <p className="text-sm text-[#bdc8d1] leading-relaxed">
                  {featuredProject.description}
                </p>
              </div>

              <div className="space-y-4 pt-3 border-t border-[#3e484f]/30">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#1c1f2a] text-[#8ed5ff] font-mono text-xs border border-[#3e484f]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectProject(featuredProject)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1c1f2a] hover:bg-[#8ed5ff]/20 text-[#8ed5ff] border border-[#3e484f]/60 hover:border-[#8ed5ff] transition-all font-mono text-xs cursor-pointer"
                >
                  <span>Project Details &amp; Architecture</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Secondary Projects */}
        {secondaryProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            onClick={() => onSelectProject(project)}
            className="p-6 md:p-7 rounded-2xl glass-card border border-[#3e484f]/40 flex flex-col justify-between space-y-5 hover:-translate-y-1 hover:border-[#8ed5ff]/50 transition-all duration-300 cursor-pointer group"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-medium">
                  {getCategoryIcon(project.category)}
                  <span className="text-[#dfe2f1]">{project.category}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#1c1f2a] border border-[#3e484f]/40 font-mono text-xs text-[#bdc8d1]">
                  {project.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#dfe2f1] group-hover:text-[#8ed5ff] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#bdc8d1] leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#3e484f]/25 flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#1c1f2a] text-[#bdc8d1] group-hover:text-[#8ed5ff] font-mono text-xs border border-[#3e484f]/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-[#8ed5ff] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-mono text-xs">
                <span>View</span>
                <ExternalLink size={12} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
