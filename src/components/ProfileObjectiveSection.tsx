import React from 'react';
import { UserCheck, Target, CheckCircle2 } from 'lucide-react';

export const ProfileObjectiveSection: React.FC = () => {
  return (
    <section id="profile-objective" className="space-y-8 pt-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Professional Profile Card */}
        <div
          id="professional-profile-card"
          className="lg:col-span-5 p-6 md:p-8 rounded-2xl glass-card border border-[#3e484f]/40 space-y-6 flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#8ed5ff]">
              <UserCheck size={22} />
              <h3 className="text-xl font-bold text-[#dfe2f1]">Professional Profile</h3>
            </div>
            <p className="text-sm md:text-base text-[#bdc8d1] leading-relaxed">
              I am developing my technical and professional profile through coding practice and
              platforms such as GitHub, LinkedIn, and VS Code. I focus on learning concepts clearly,
              building projects, improving my programming ability, and gaining practical experience.
            </p>
          </div>

          <div className="pt-4 border-t border-[#3e484f]/30 flex items-center gap-4 text-[#bdc8d1] font-mono text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#8ed5ff]"></span> Practice
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#bdc2ff]"></span> Verification
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ce9bff]"></span> Execution
            </span>
          </div>
        </div>

        {/* Career Objective Banner */}
        <div
          id="career-objective-card"
          className="lg:col-span-7 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#262a35] via-[#1c1f2a] to-[#171b26] border border-[#38bdf8]/30 space-y-5 relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-[#38bdf8]/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="space-y-3 relative z-10">
            <div className="flex items-center gap-2.5 text-[#bdc2ff]">
              <Target size={22} />
              <h3 className="text-xl font-bold text-[#dfe2f1]">Career Objective</h3>
            </div>
            <p className="text-base sm:text-lg text-[#dfe2f1] font-medium leading-relaxed italic">
              "To build a successful career in the technology field by strengthening my skills in
              Artificial Intelligence &amp; Data Science, programming, software development,
              databases, IoT, and problem solving. I aim to gain practical experience, work on
              meaningful projects, and continuously learn new technologies."
            </p>
          </div>

          <div className="pt-2 flex items-center gap-2 text-[#8ed5ff] font-mono text-xs relative z-10">
            <CheckCircle2 size={16} />
            <span className="font-semibold">Committed to continuous technical growth</span>
          </div>
        </div>
      </div>
    </section>
  );
};
