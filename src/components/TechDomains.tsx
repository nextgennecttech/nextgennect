import React, { useState } from 'react';
import { TECH_DOMAINS } from '../data/mockData';
import { TechDomain } from '../types';
import { 
  Brain, 
  ShieldCheck, 
  Code2, 
  Cloud, 
  BarChart3, 
  Cpu, 
  Layers, 
  ArrowRight, 
  Calendar, 
  Users, 
  Sparkles,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';

interface TechDomainsProps {
  onJoinTrack: (domain: TechDomain) => void;
}

export const TechDomains: React.FC<TechDomainsProps> = ({ onJoinTrack }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedDomain, setSelectedDomain] = useState<TechDomain | null>(null);

  const categories = ['All', 'AI & Data', 'Security & Systems', 'Development', 'Cloud & Hardware'];

  const filteredDomains = activeCategory === 'All'
    ? TECH_DOMAINS
    : TECH_DOMAINS.filter((d) => d.category === activeCategory);

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return Brain;
      case 'ShieldCheck': return ShieldCheck;
      case 'Code2': return Code2;
      case 'Cloud': return Cloud;
      case 'BarChart3': return BarChart3;
      case 'Cpu': return Cpu;
      default: return Layers;
    }
  };

  return (
    <section id="domains" className="py-24 relative overflow-hidden bg-slate-50/60 dark:bg-[#070B18] transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-cyan-500/10 text-indigo-600 dark:text-[#00E5FF] text-[10px] font-mono-code font-bold uppercase tracking-widest border border-indigo-100 dark:border-cyan-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>SPECIALIZED ENGINEERING TRACKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Technology <span className="text-indigo-600 dark:text-[#00E5FF]">Domains</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Explore 6 high-demand technical specializations designed with industry-standard roadmaps, production tooling, and real project incubation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-slate-900 dark:bg-[#00E5FF] text-white dark:text-black shadow-md font-bold'
                  : 'bg-white dark:bg-[#0C1224] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Interactive Tech Domain Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDomains.map((domain, idx) => {
            const Icon = getDomainIcon(domain.iconName);
            const isFeatured = idx === 0 || idx === 1;
            return (
              <div
                key={domain.id}
                className={`group relative rounded-[36px] bg-white dark:bg-[#0A0F1E] border border-slate-200/80 dark:border-slate-800/80 p-8 shadow-sm transition-all duration-300 flex flex-col justify-between bento-card ${
                  isFeatured ? 'hover:border-indigo-500/50 dark:hover:border-cyan-400/50' : 'hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Top: Icon & ShortCode */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-cyan-500/10 border border-indigo-100 dark:border-cyan-500/20 text-indigo-600 dark:text-[#00E5FF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono-code font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-cyan-400 border border-slate-200 dark:border-slate-800">
                      {domain.shortCode}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-[#00E5FF] transition-colors">
                      {domain.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed line-clamp-3">
                      {domain.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {domain.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full bg-slate-50 dark:bg-slate-900 text-[10px] font-mono-code text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-mono-code">
                      <FolderGit2 className="w-3.5 h-3.5 text-indigo-600 dark:text-[#00E5FF]" />
                      <span>{domain.activeProjects} Projects</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-mono-code">
                      <Users className="w-3.5 h-3.5 text-purple-400" />
                      <span>{domain.membersCount}+ Builders</span>
                    </div>
                  </div>

                  {/* Upcoming workshop banner */}
                  <div className="p-3 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100/80 dark:border-indigo-900/40 flex items-center gap-2 text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-[#00E5FF] shrink-0" />
                    <span className="text-slate-800 dark:text-indigo-200 font-medium truncate">
                      {domain.upcomingWorkshop}
                    </span>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedDomain(domain)}
                    className="text-xs font-bold text-indigo-600 dark:text-[#00E5FF] hover:underline flex items-center gap-1 font-display"
                  >
                    <span>View Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onJoinTrack(domain)}
                    className="px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-indigo-600 dark:hover:bg-[#00E5FF] text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95"
                  >
                    Join Track
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Domain Deep Dive & 4-Stage Roadmap Modal */}
      {selectedDomain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#080D1C] text-slate-900 dark:text-white rounded-[32px] border border-slate-200/90 dark:border-cyan-500/40 p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-200/90 dark:border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono-code font-bold text-indigo-700 dark:text-[#00E5FF] uppercase tracking-wider">
                    {selectedDomain.category}
                  </span>
                  <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                    {selectedDomain.shortCode}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                  {selectedDomain.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedDomain(null)}
                className="text-slate-400 hover:text-slate-800 dark:hover:text-white p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            {/* Overview */}
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedDomain.detailedDescription}
            </p>

            {/* 4-Stage Curriculum Roadmap */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-mono-code font-bold uppercase tracking-wider text-indigo-700 dark:text-[#00E5FF] flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 4-Stage Cohort Roadmap (12 Weeks)
                </h4>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-mono-code font-semibold">100% Hands-on</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedDomain.roadmap.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-[#00E5FF]/20 text-indigo-700 dark:text-[#00E5FF] text-xs font-mono-code font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                      <span className="text-[11px] font-mono-code text-purple-600 dark:text-purple-400 font-semibold">
                        {step.duration}
                      </span>
                    </div>

                    <h5 className="text-sm font-display font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h5>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {step.keySkills.map((skill, sI) => (
                        <span
                          key={sI}
                          className="px-2 py-0.5 rounded bg-slate-200/80 dark:bg-black text-[10px] font-mono-code text-slate-800 dark:text-cyan-300 border border-slate-300/80 dark:border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Student Project */}
            <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-gradient-to-r dark:from-cyan-950/40 dark:via-purple-950/20 dark:to-slate-900 border border-indigo-200/80 dark:border-cyan-500/30 space-y-2">
              <div className="text-[11px] font-mono-code uppercase text-indigo-700 dark:text-[#00E5FF] font-bold tracking-wider flex items-center gap-1.5">
                <FolderGit2 className="w-3.5 h-3.5" /> Featured Student Capstone Project
              </div>
              <h5 className="text-base font-display font-bold text-slate-900 dark:text-white">
                {selectedDomain.featuredProject.title}
              </h5>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                {selectedDomain.featuredProject.description}
              </p>
              <div className="pt-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{selectedDomain.featuredProject.impact}</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200/90 dark:border-slate-800">
              <button
                onClick={() => setSelectedDomain(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Close Window
              </button>

              <button
                onClick={() => {
                  const d = selectedDomain;
                  setSelectedDomain(null);
                  onJoinTrack(d);
                }}
                className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-indigo-600 dark:bg-[#00E5FF] text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider dark:hover:bg-[#38BDF8] shadow-md dark:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
              >
                Apply for {selectedDomain.shortCode} Cohort
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
