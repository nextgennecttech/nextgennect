import React, { useState } from 'react';
import { NetworkCanvas } from './NetworkCanvas';
import { COMMUNITY_LINKS } from '../data/mockData';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  Terminal, 
  Code2, 
  ShieldCheck, 
  Brain, 
  Cloud, 
  Users, 
  CheckCircle2,
  Activity,
  Globe2,
  Zap,
  TrendingUp,
  Linkedin,
  Instagram,
  Github,
  Mail
} from 'lucide-react';

interface HeroProps {
  onOpenJoinModal: () => void;
  onExploreDomains: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal, onExploreDomains }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-[#F3F4F6] dark:bg-[#060914] transition-colors duration-300">
      {/* Background Interactive 3D Particle Network Canvas */}
      <NetworkCanvas />

      {/* Cyber Grid & Ambient Radial Gradients with subtle floating motion */}
      <div className="absolute inset-0 cyber-grid dark:cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-500/10 via-[#00E5FF]/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-cyan" />

      {/* Bento Grid Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6">
        
        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Bento Cell 1: Primary Hero Core (col-span-12 lg:col-span-8) */}
          <div className="md:col-span-12 lg:col-span-8 bg-white dark:bg-[#0A0F1E] rounded-[36px] sm:rounded-[44px] p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800/80 shadow-sm relative overflow-hidden flex flex-col justify-between group bento-card">
            
            {/* Floating Decorative Glow Badges */}
            <div className="absolute top-6 right-8 hidden sm:flex items-center gap-2 animate-float-slow pointer-events-none">
              <span className="px-3 py-1.5 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-[#00E5FF] border border-cyan-500/30 text-[10px] font-mono-code font-bold backdrop-blur-md shadow-sm">
                ⚡ Tech Community
              </span>
            </div>

            <div className="relative z-10 space-y-6">
              
              {/* Eyebrow Pills & Social Quick Connect */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 text-indigo-600 dark:text-cyan-400 text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5 font-mono-code">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600 dark:bg-[#00E5FF]"></span>
                  </span>
                  Peshawar Youth Tech Ecosystem
                </span>

                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-widest rounded-full hidden sm:inline-flex items-center gap-1 font-mono-code">
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  1,200+ Builders Strong
                </span>

                {/* Micro Social Pills */}
                <div className="flex items-center gap-1.5 pl-1">
                  <a
                    href={COMMUNITY_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded-lg text-slate-400 hover:text-[#00E5FF] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Next Gennect LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={COMMUNITY_LINKS.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded-lg text-slate-400 hover:text-[#EC4899] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Next Gennect Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={COMMUNITY_LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Next Gennect GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display text-slate-900 dark:text-white leading-[0.98] tracking-tight">
                  Engineering The <br />
                  <span className="text-indigo-600 dark:text-[#00E5FF] text-gradient-cyan">Next Generation.</span>
                </h1>
                
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-xl font-normal leading-relaxed pt-2">
                  Next Gennect is Peshawar&apos;s youth-led deep-tech collective. We empower student builders, engineering talent, and researchers through AI systems, cybersecurity CTFs, modern web frameworks, and hands-on workshops.
                </p>
              </div>

              {/* Action Buttons with attractive hover movement */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenJoinModal}
                  className="px-6 py-3.5 bg-slate-900 dark:bg-[#00E5FF] text-white dark:text-black hover:bg-indigo-600 dark:hover:bg-[#38BDF8] rounded-full text-xs font-bold font-display uppercase tracking-wider shadow-lg shadow-slate-900/15 dark:shadow-cyan-500/25 transition-all flex items-center gap-2 active:scale-95 group/btn hover:scale-105"
                >
                  <span>Join Community</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onExploreDomains}
                  className="px-5 py-3.5 bg-slate-100 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-2 hover:scale-105"
                >
                  <Terminal className="w-3.5 h-3.5 text-indigo-600 dark:text-[#00E5FF]" />
                  <span>Explore Tracks</span>
                </button>

                <button
                  onClick={() => setShowVideoModal(true)}
                  className="px-4 py-3.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-[#00E5FF] rounded-full text-xs font-semibold tracking-wide transition-colors flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-cyan-500/10 text-indigo-600 dark:text-[#00E5FF] flex items-center justify-center animate-pulse">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>Watch Story</span>
                </button>
              </div>
            </div>

            {/* Interactive Bento Visual Bar Strip with animated height oscillation */}
            <div className="relative z-10 flex items-end justify-between mt-10 pt-6 border-t border-slate-100 dark:border-slate-800/80 gap-2 sm:gap-3">
              <div className="text-center w-full group/bar cursor-pointer">
                <div className="h-16 sm:h-20 bg-slate-100 dark:bg-slate-900 rounded-2xl flex items-end justify-center p-1.5 transition-all group-hover/bar:bg-slate-200 dark:group-hover/bar:bg-slate-800">
                  <div className="w-full h-8 bg-slate-300 dark:bg-slate-700 rounded-xl group-hover/bar:h-12 transition-all duration-300" />
                </div>
                <span className="text-[10px] font-mono-code text-slate-400 block mt-1.5">Q1 Hub</span>
              </div>

              <div className="text-center w-full group/bar cursor-pointer">
                <div className="h-20 sm:h-28 bg-slate-100 dark:bg-slate-900 rounded-2xl flex items-end justify-center p-1.5 transition-all group-hover/bar:bg-slate-200 dark:group-hover/bar:bg-slate-800">
                  <div className="w-full h-16 bg-slate-300 dark:bg-slate-700 rounded-xl group-hover/bar:h-20 transition-all duration-300" />
                </div>
                <span className="text-[10px] font-mono-code text-slate-400 block mt-1.5">45+ Events</span>
              </div>

              <div className="text-center w-full group/bar cursor-pointer">
                <div className="h-24 sm:h-36 bg-indigo-50 dark:bg-indigo-950/40 rounded-2xl flex items-end justify-center p-1.5 transition-all group-hover/bar:bg-indigo-100 dark:group-hover/bar:bg-indigo-900/40">
                  <div className="w-full h-24 bg-indigo-300 dark:bg-indigo-600/70 rounded-xl group-hover/bar:h-28 transition-all duration-300" />
                </div>
                <span className="text-[10px] font-mono-code text-indigo-500 block mt-1.5">80+ Projects</span>
              </div>

              <div className="text-center w-full group/bar cursor-pointer">
                <div className="h-28 sm:h-44 bg-indigo-600 dark:bg-[#00E5FF] rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-cyan-500/20 flex items-end justify-center p-1.5 hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-white/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white dark:text-black animate-bounce" />
                  </div>
                </div>
                <span className="text-[10px] font-mono-code font-bold text-indigo-600 dark:text-[#00E5FF] block mt-1.5">1.2k+ Youth</span>
              </div>

              <div className="text-center w-full group/bar cursor-pointer">
                <div className="h-24 sm:h-36 bg-slate-100 dark:bg-slate-900 rounded-2xl flex items-end justify-center p-1.5 transition-all group-hover/bar:bg-slate-200 dark:group-hover/bar:bg-slate-800">
                  <div className="w-full h-20 bg-slate-300 dark:bg-slate-700 rounded-xl group-hover/bar:h-24 transition-all duration-300" />
                </div>
                <span className="text-[10px] font-mono-code text-slate-400 block mt-1.5">15+ Univs</span>
              </div>

              <div className="text-center w-full group/bar cursor-pointer">
                <div className="h-20 sm:h-28 bg-slate-100 dark:bg-slate-900 rounded-2xl flex items-end justify-center p-1.5 transition-all group-hover/bar:bg-slate-200 dark:group-hover/bar:bg-slate-800">
                  <div className="w-full h-14 bg-slate-300 dark:bg-slate-700 rounded-xl group-hover/bar:h-18 transition-all duration-300" />
                </div>
                <span className="text-[10px] font-mono-code text-slate-400 block mt-1.5">6 Tracks</span>
              </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Bento Cell 2: Global / Regional Network Node (col-span-12 lg:col-span-4) */}
          <div className="md:col-span-12 lg:col-span-4 bg-slate-900 rounded-[36px] sm:rounded-[44px] p-8 text-white flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden bento-card">
            
            {/* Animated Cyber Radar Pulse at top-right */}
            <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center pointer-events-none">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-30"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00E5FF]"></span>
            </div>

            <div className="relative z-10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest font-mono-code">
                  Regional Mesh
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight">
                15+ <span className="text-lg font-light text-slate-400 uppercase tracking-widest">Chapters</span>
              </h2>
              <p className="text-xs text-slate-400 font-medium">
                Active university nodes and incubator communities across Khyber Pakhtunkhwa.
              </p>
            </div>

            {/* Node Status Rows */}
            <div className="mt-8 space-y-3.5 relative z-10">
              <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> UET Peshawar Node
                </span>
                <span className="text-emerald-400 font-mono-code text-[11px] font-bold">ONLINE</span>
              </div>

              <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> IMSciences Chapter
                </span>
                <span className="text-emerald-400 font-mono-code text-[11px] font-bold">ONLINE</span>
              </div>

              <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> CECOS & Fast Hub
                </span>
                <span className="text-emerald-400 font-mono-code text-[11px] font-bold">ACTIVE</span>
              </div>

              <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Global Mentors Mesh
                </span>
                <span className="text-[#00E5FF] font-mono-code text-[11px] font-bold">SYNCED</span>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/20 blur-[80px] pointer-events-none" />
          </div>

          {/* Bento Cell 3: Team Velocity & Talent Stack (col-span-12 md:col-span-4) */}
          <div className="md:col-span-4 bg-white dark:bg-[#0A0F1E] rounded-[36px] p-7 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between bento-card">
            <div>
              <h2 className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest font-mono-code mb-5">
                Cohort Velocity
              </h2>

              <div className="flex -space-x-3 mb-5">
                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 bg-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  AS
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  FZ
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 bg-amber-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  MA
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-xs shadow-sm">
                  +1.2k
                </div>
              </div>

              <p className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                +180% Quarterly Growth
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Empowering regional youth and student engineers to surpass production engineering benchmarks.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono-code text-indigo-600 dark:text-cyan-400">
              <span>Zero-cost Access</span>
              <span>100% Youth Led</span>
            </div>
          </div>

          {/* Bento Cell 4: Project & Flagship Status (col-span-12 md:col-span-4) */}
          <div className="md:col-span-4 bg-indigo-50/70 dark:bg-indigo-950/40 rounded-[36px] p-7 sm:p-8 flex flex-col justify-between border border-indigo-100 dark:border-indigo-900/50 bento-card relative overflow-hidden">
            
            {/* Subtle animated floating pill */}
            <div className="absolute top-4 right-4 animate-float-reverse pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
            </div>

            <div>
              <h2 className="text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 font-mono-code">
                Next Active Cohort
              </h2>
              <p className="text-xl sm:text-2xl font-black font-display text-indigo-950 dark:text-indigo-100 leading-tight">
                Peshawar AI & CTF Summer Camp
              </p>
              <p className="text-xs text-indigo-700/80 dark:text-indigo-300/80 mt-2 font-medium">
                12-week intensive bootcamp covering Autonomous Agents, Penetration Testing & Kubernetes.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-indigo-100/80 dark:border-indigo-900/50 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-indigo-600 text-white font-mono-code text-[10px] font-bold">
                Registration Open
              </span>
              <button
                onClick={onOpenJoinModal}
                className="text-xs font-bold text-indigo-900 dark:text-cyan-300 hover:underline flex items-center gap-1 font-mono-code"
              >
                Apply Now <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Bento Cell 5: Real-World Coverage & Incubation Gauge (col-span-12 md:col-span-4) */}
          <div className="md:col-span-4 bg-white dark:bg-[#0A0F1E] rounded-[36px] p-7 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-center space-x-5 bento-card">
            <div className="w-20 h-20 shrink-0 rounded-full border-8 border-slate-100 dark:border-slate-800 border-t-indigo-600 dark:border-t-[#00E5FF] flex items-center justify-center">
              <span className="text-lg font-black font-display text-slate-900 dark:text-white">88%</span>
            </div>
            <div>
              <p className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1 font-mono-code">
                Capstone Placement
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-snug">
                Graduates transition to international remote internships, software roles, and open-source contributions.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Video Reel Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#080D1C] rounded-[32px] border border-cyan-500/30 overflow-hidden shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping" />
                <h3 className="text-lg font-display font-bold text-white">Next Gennect Story & Community Reel</h3>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            {/* Video Showcase Card */}
            <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#0C1224] to-[#1A1F3A] border border-slate-800 flex flex-col items-center justify-center text-center p-8 overflow-hidden">
              <div className="absolute inset-0 cyber-grid opacity-20" />
              <div className="w-16 h-16 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF] flex items-center justify-center text-[#00E5FF] mb-4 shadow-[0_0_25px_rgba(0,229,255,0.4)] animate-pulse">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-2">
                Empowering Peshawar&apos;s Youth to Build Global Impact
              </h4>
              <p className="text-xs text-slate-300 max-w-md">
                Featuring real cohort hackathons, mentorship sessions at UET Peshawar & CECOS, and student testimonials building next-generation technology.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-[#00E5FF] text-[11px] font-mono-code font-semibold">
                  #nextgennect
                </span>
                <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-[11px] font-mono-code font-semibold">
                  #techcommunity
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-mono-code font-semibold">
                  #youthempowerment
                </span>
                <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-mono-code font-semibold">
                  #peshawarnextgennect
                </span>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowVideoModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  setShowVideoModal(false);
                  onOpenJoinModal();
                }}
                className="px-5 py-2.5 rounded-full text-xs font-bold font-display uppercase tracking-wider bg-[#00E5FF] text-black hover:bg-[#38BDF8]"
              >
                Join This Movement
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

