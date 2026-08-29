import React, { useState } from 'react';
import { IMPACT_STATS, GROWTH_CHART_DATA, SKILLS_DISTRIBUTION, COMMUNITY_TESTIMONIALS } from '../data/mockData';
import { 
  Users, 
  Terminal, 
  Rocket, 
  Award, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  TrendingUp, 
  BarChart2, 
  Quote, 
  Sparkles,
  CheckCircle2,
  Building2
} from 'lucide-react';

export const ImpactDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'growth' | 'skills'>('growth');

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return Users;
      case 'Terminal': return Terminal;
      case 'Rocket': return Rocket;
      case 'Award': return Award;
      case 'Briefcase': return Briefcase;
      case 'GraduationCap': return GraduationCap;
      case 'MapPin': return MapPin;
      default: return Sparkles;
    }
  };

  return (
    <section id="impact" className="py-24 relative overflow-hidden bg-slate-50/60 dark:bg-[#070B18] transition-colors duration-300">
      {/* Background radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-cyan-500/10 text-indigo-600 dark:text-[#00E5FF] text-[10px] font-mono-code font-bold uppercase tracking-widest border border-indigo-100 dark:border-cyan-500/20">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>MEASURABLE COMMUNITY OUTCOMES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Impact <span className="text-indigo-600 dark:text-[#00E5FF]">Dashboard</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal">
            Real data from our cohorts, hackathons, open-source initiatives, and university student chapters across Peshawar and Pakistan.
          </p>
        </div>

        {/* Key Stat Counters Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {IMPACT_STATS.map((stat, idx) => {
            const Icon = getStatIcon(stat.icon);
            const isHighlighted = idx === 0;
            return (
              <div
                key={stat.id}
                className={`p-7 rounded-[32px] border transition-all duration-300 relative overflow-hidden group bento-card ${
                  isHighlighted
                    ? 'bg-slate-900 text-white border-slate-800 shadow-xl'
                    : 'bg-white dark:bg-[#0A0F1E] border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-indigo-400/40 dark:hover:border-cyan-400/40'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                    isHighlighted 
                      ? 'bg-indigo-500/20 text-[#00E5FF] border border-indigo-400/30'
                      : 'bg-indigo-50 dark:bg-cyan-500/10 text-indigo-600 dark:text-[#00E5FF] border border-indigo-100 dark:border-cyan-500/20'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono-code uppercase tracking-widest ${
                    isHighlighted ? 'text-slate-400' : 'text-slate-400 dark:text-slate-500'
                  }`}>
                    {stat.category}
                  </span>
                </div>

                <div className={`text-3xl sm:text-4xl font-display font-black tracking-tight ${
                  isHighlighted ? 'text-white group-hover:text-[#00E5FF]' : 'text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-[#00E5FF]'
                } transition-colors`}>
                  {stat.displayValue}
                </div>

                <div className={`text-xs font-bold mt-1 font-display ${
                  isHighlighted ? 'text-slate-200' : 'text-slate-800 dark:text-slate-200'
                }`}>
                  {stat.label}
                </div>

                <p className={`text-[11px] mt-2 leading-relaxed line-clamp-2 ${
                  isHighlighted ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'
                }`}>
                  {stat.description}
                </p>
              </div>
            );
          })}

          {/* Partner Universities Highlight Tile */}
          <div className="p-7 rounded-[32px] bg-white dark:bg-[#0A0F1E] border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between shadow-sm bento-card">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/40 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono-code uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold">Chapters</span>
            </div>
            <div className="mt-4">
              <div className="text-sm font-display font-bold text-slate-900 dark:text-white">
                Active Campuses
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                UET, IMSciences, CECOS, Peshawar Univ, FAST, NUST & more.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Bento Visualization: Growth Timeline vs Skills Distribution */}
        <div className="p-8 sm:p-12 rounded-[40px] bg-white dark:bg-[#0A0F1E] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-6 bento-card">
          {/* Header with Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-indigo-600 dark:text-[#00E5FF]" /> Community Trajectory & Specializations
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Tracking membership acceleration and student focus areas since inception
              </p>
            </div>

            <div className="flex items-center p-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 self-start">
              <button
                onClick={() => setActiveTab('growth')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold font-mono-code transition-all ${
                  activeTab === 'growth'
                    ? 'bg-slate-900 dark:bg-[#00E5FF] text-white dark:text-black font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Growth Trajectory
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold font-mono-code transition-all ${
                  activeTab === 'skills'
                    ? 'bg-slate-900 dark:bg-[#00E5FF] text-white dark:text-black font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Skills Distribution
              </button>
            </div>
          </div>

          {/* Growth View */}
          {activeTab === 'growth' ? (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
                {GROWTH_CHART_DATA.map((item, i) => {
                  const maxMembers = 1300;
                  const heightPercent = Math.round((item.members / maxMembers) * 100);
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80 flex flex-col justify-end space-y-3 group hover:border-indigo-400/40 dark:hover:border-[#00E5FF]/40 transition-colors"
                    >
                      <div className="h-36 flex items-end justify-center w-full relative">
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className="w-full max-w-[36px] bg-gradient-to-t from-indigo-600 to-[#00E5FF] rounded-t-xl transition-all duration-700 relative group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                        >
                          <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono-code font-bold text-slate-800 dark:text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-black px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-800 whitespace-nowrap">
                            {item.members}
                          </span>
                        </div>
                      </div>

                      <div className="text-center pt-1 border-t border-slate-200 dark:border-slate-800">
                        <div className="text-xs font-mono-code font-bold text-slate-900 dark:text-white">
                          {item.period}
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono-code">
                          {item.workshops} workshops
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-code text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-[#00E5FF]" /> Active Member Growth
                </span>
                <span>Average +180% Quarterly Community Acceleration</span>
              </div>
            </div>
          ) : (
            /* Skills Distribution View */
            <div className="space-y-4 animate-in fade-in duration-200">
              {SKILLS_DISTRIBUTION.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono-code">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {skill.count} ({skill.percentage}%)
                    </span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800 p-0.5">
                    <div
                      style={{
                        width: `${skill.percentage}%`,
                        backgroundColor: skill.color,
                      }}
                      className="h-full rounded-full transition-all duration-700 shadow-sm"
                    />
                  </div>
                </div>
              ))}

              <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-cyan-500/10 border border-indigo-100 dark:border-cyan-500/20 text-xs text-slate-700 dark:text-cyan-200 mt-4 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-[#00E5FF] shrink-0" />
                <span>
                  All tracks emphasize full-stack deployment, git version control, and real peer code reviews.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Community Testimonials Bento Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Voices From Our Community
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              How Next Gennect empowers builders across Peshawar and universities in KP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMUNITY_TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-8 rounded-[36px] bg-white dark:bg-[#0A0F1E] border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-indigo-400/40 dark:hover:border-[#00E5FF]/40 transition-all flex flex-col justify-between space-y-5 group bento-card"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-indigo-500/40 dark:text-[#00E5FF]/40" />
                    <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                      {test.domain}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-indigo-400 dark:border-[#00E5FF]/40"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-sm font-display font-bold text-slate-900 dark:text-white">
                        {test.name}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        {test.role}
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono-code text-indigo-700 dark:text-cyan-400 bg-indigo-50 dark:bg-cyan-500/10 px-3 py-1.5 rounded-xl border border-indigo-100 dark:border-cyan-500/20">
                    🎯 {test.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
