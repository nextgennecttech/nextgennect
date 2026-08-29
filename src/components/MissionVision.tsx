import React, { useState } from 'react';
import { LEADERSHIP_TEAM, CORE_VALUES } from '../data/mockData';
import { TeamMember, CoreValue } from '../types';
import { LeaderPortrait } from './LeaderPortraits';
import { ExecutivePoster } from './ExecutivePoster';
import { 
  Target, 
  Compass, 
  Sparkles, 
  Linkedin, 
  Github, 
  Twitter, 
  Mail, 
  Hammer, 
  HeartHandshake, 
  ShieldCheck, 
  GitBranch, 
  Globe, 
  ArrowUpRight,
  CheckCircle,
  Award
} from 'lucide-react';

export const MissionVision: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const getCoreValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer': return Hammer;
      case 'HeartHandshake': return HeartHandshake;
      case 'Sparkles': return Sparkles;
      case 'ShieldCheck': return ShieldCheck;
      case 'GitBranch': return GitBranch;
      case 'Globe': return Globe;
      default: return Sparkles;
    }
  };

  return (
    <section id="mission" className="py-24 relative overflow-hidden bg-transparent transition-colors duration-300">
      {/* Background visual accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-cyan-500/10 text-indigo-700 dark:text-[#00E5FF] text-[10px] font-mono-code font-bold uppercase tracking-widest border border-indigo-200/80 dark:border-cyan-500/20">
            <Target className="w-3.5 h-3.5" />
            <span>PURPOSE & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Mission, Vision & <span className="text-indigo-600 dark:text-[#00E5FF]">Leadership</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal">
            Founded in Peshawar, Next Gennect exists to unlock world-class engineering potential, cultivating the next generation of builders, problem solvers, and tech entrepreneurs.
          </p>
        </div>

        {/* Mission & Vision Dual Bento Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Mission Bento Card (col-span-12 md:col-span-7) */}
          <div className="md:col-span-7 relative group p-8 sm:p-12 rounded-[36px] bg-slate-900 text-white border border-slate-800 shadow-xl overflow-hidden bento-card flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-[#00E5FF] shadow-sm">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-code uppercase font-bold text-indigo-400 tracking-widest">The Driving Purpose</span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">Our Mission</h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                To <strong className="font-semibold text-[#00E5FF]">empower young people</strong> across Peshawar and Pakistan through rigorous hands-on technical skills, 1-on-1 industry mentorship, open-source building, and real-world project incubation.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span>Zero-cost, open-access technical bootcamps & hackathons</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span>Direct mentorship from international software engineers</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span>Bridge theoretical academia with production engineering</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono-code text-slate-400">
              <span>EST. PESHAWAR</span>
              <span className="text-emerald-400">● ACTIVE IN 15+ CAMPUSES</span>
            </div>
          </div>

          {/* Vision Bento Card (col-span-12 md:col-span-5) */}
          <div className="md:col-span-5 relative group p-8 sm:p-12 rounded-[36px] bg-white dark:bg-[#0A0F1E] border border-slate-200/80 dark:border-slate-800/80 shadow-sm overflow-hidden bento-card flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-sm">
                  <Compass className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-code uppercase font-bold text-purple-600 dark:text-purple-400 tracking-widest">The Future We Build</span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">Our Vision</h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                To transform Peshawar and Khyber Pakhtunkhwa into a <strong className="font-semibold text-slate-900 dark:text-purple-300">globally recognized beacon</strong> of top-tier engineering talent, deep-tech research, and high-growth technology startups.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>Position Pakistani youth for high-value global tech roles</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>Establish vibrant tech chapters across every major city</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>Pioneer indigenous AI, security, and hardware solutions</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono-code text-indigo-600 dark:text-cyan-400 font-bold">
              <span>TARGET 2027</span>
              <span>10,000 BUILDERS</span>
            </div>
          </div>
        </div>

        {/* Leadership Team Profiles */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-[10px] font-mono-code font-bold uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5 text-indigo-600 dark:text-[#00E5FF]" />
              <span>THE EXECUTIVE BOARD</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
              Meet the Leadership Team
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              Passionate youth technologists and community architects leading Next Gennect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.id}
                className="group relative rounded-[36px] bg-white dark:bg-[#0A0F1E] border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between bento-card"
              >
                {/* Member Header Image & Badge with official Executive Portrait */}
                <div className="relative h-72 overflow-hidden bg-slate-900 flex items-center justify-center p-3">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                    <LeaderPortrait id={member.id} className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  {/* Role Badge */}
                  <div className="absolute top-5 right-5 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#00E5FF]/40 text-[#00E5FF] font-mono-code text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      {member.badge}
                    </span>
                  </div>

                  {/* Official Title Overlay */}
                  <div className="absolute bottom-4 left-5 right-5 z-10">
                    <div className="inline-block px-3 py-1 rounded-xl bg-[#00B4D8] text-white font-display font-extrabold text-xs tracking-wider uppercase shadow-md mb-1">
                      {member.name}
                    </div>
                    <p className="text-[11px] font-mono-code text-cyan-200 font-bold bg-slate-950/80 px-2 py-0.5 rounded-lg backdrop-blur-sm inline-block">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Member Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 font-mono-code">
                      {member.title}
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-3 leading-relaxed font-normal">
                      {member.bio}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {member.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/90 text-[10px] font-mono-code text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions: View Bio & Socials */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-[#00E5FF] hover:underline font-display"
                    >
                      <span>View Official Poster</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2 text-slate-400">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-[#00E5FF] transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-white transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-400 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Bento Grid (6 Values) */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Our Core Cultural Values
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              The non-negotiable principles that guide our community, workshops, and cohorts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_VALUES.map((val) => {
              const Icon = getCoreValueIcon(val.iconName);
              return (
                <div
                  key={val.id}
                  className="p-7 rounded-[32px] bg-white dark:bg-[#0A0F1E] border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-all space-y-3.5 group bento-card hover:border-indigo-400/40 dark:hover:border-cyan-400/40"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-cyan-500/10 text-indigo-600 dark:text-[#00E5FF] flex items-center justify-center border border-indigo-100 dark:border-cyan-500/30 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono-code font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      {val.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-[#00E5FF] transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Leadership Full Bio & Official Poster Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-white dark:bg-[#080D1C] text-slate-900 dark:text-white rounded-[32px] border border-slate-200/90 dark:border-cyan-500/40 p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden my-8">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#00E5FF]/15 to-transparent rounded-bl-full pointer-events-none" />

            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-indigo-600 dark:bg-[#00E5FF] animate-ping" />
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">Next Gennect Official Leadership</h3>
              </div>

              <button
                onClick={() => setSelectedMember(null)}
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Official Branded Poster Card matching Media images */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[280px]">
                  <ExecutivePoster member={selectedMember} />
                </div>
              </div>

              {/* Bio & Details */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 text-[10px] font-mono-code font-bold rounded-full bg-indigo-50 dark:bg-cyan-500/20 text-indigo-700 dark:text-[#00E5FF] border border-indigo-200 dark:border-cyan-500/40 uppercase tracking-wider">
                      {selectedMember.badge}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-mono-code font-medium">{selectedMember.title}</span>
                  </div>
                  <h4 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">{selectedMember.name}</h4>
                  <p className="text-xs font-mono-code text-indigo-600 dark:text-cyan-300 font-semibold">{selectedMember.role}</p>
                </div>

                <div>
                  <h5 className="text-xs font-mono-code uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-1.5 font-bold">
                    Executive Biography
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {selectedMember.detailedBio}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-mono-code uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2 font-bold">
                    Core Specializations & Impact
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMember.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-900/90 text-xs font-mono-code text-indigo-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700/80 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/90 dark:border-slate-800 flex items-center justify-between">
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-mono-code">
                    Official Contact: <span className="text-indigo-600 dark:text-[#00E5FF] font-semibold">{selectedMember.email}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end pt-3 border-t border-slate-200/90 dark:border-slate-800/80">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-indigo-600 dark:bg-cyan-500/20 dark:hover:bg-[#00E5FF] text-white dark:text-cyan-300 dark:hover:text-black font-mono-code text-xs font-bold transition-all border border-transparent dark:border-cyan-500/40"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
