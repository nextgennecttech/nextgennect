import React, { useState } from 'react';
import { TECH_DOMAINS } from '../data/mockData';
import { TechDomain } from '../types';
import { Compass, Sparkles, ArrowRight, RotateCcw, CheckCircle2, Terminal } from 'lucide-react';

interface TrackFinderProps {
  onSelectTrack: (domain: TechDomain) => void;
}

export const TrackFinder: React.FC<TrackFinderProps> = ({ onSelectTrack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [interest, setInterest] = useState<string>('');
  const [level, setLevel] = useState<string>('');
  const [goal, setGoal] = useState<string>('');

  const handleReset = () => {
    setCurrentStep(1);
    setInterest('');
    setLevel('');
    setGoal('');
  };

  // Determine recommended domain based on responses
  const getRecommendation = (): TechDomain => {
    if (interest === 'ai') {
      return TECH_DOMAINS.find((d) => d.id === 'ai-ml') || TECH_DOMAINS[0];
    }
    if (interest === 'security') {
      return TECH_DOMAINS.find((d) => d.id === 'cybersecurity') || TECH_DOMAINS[1];
    }
    if (interest === 'cloud') {
      return TECH_DOMAINS.find((d) => d.id === 'cloud-devops') || TECH_DOMAINS[3];
    }
    if (interest === 'hardware') {
      return TECH_DOMAINS.find((d) => d.id === 'innovation-lab') || TECH_DOMAINS[5];
    }
    if (interest === 'data') {
      return TECH_DOMAINS.find((d) => d.id === 'data-science') || TECH_DOMAINS[4];
    }
    return TECH_DOMAINS.find((d) => d.id === 'software-dev') || TECH_DOMAINS[2];
  };

  const recommendedDomain = getRecommendation();

  return (
    <section id="finder" className="py-24 relative overflow-hidden bg-slate-50/60 dark:bg-[#070B18] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container Box with Bento Style */}
        <div className="relative rounded-[40px] bg-white dark:bg-[#0A0F1E] border border-slate-200/80 dark:border-slate-800/80 p-8 sm:p-14 shadow-sm overflow-hidden bento-card">
          {/* Background Circuit Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-cyan-500/10 text-indigo-600 dark:text-[#00E5FF] text-[10px] font-mono-code font-bold uppercase tracking-widest border border-indigo-100 dark:border-cyan-500/20">
              <Compass className="w-3.5 h-3.5" />
              <span>INTERACTIVE CAREER ADVISOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
              Find Your Ideal <span className="text-indigo-600 dark:text-[#00E5FF]">Tech Track</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Not sure where to begin? Answer 3 quick questions to discover your tailored Next Gennect learning roadmap.
            </p>
          </div>

          {/* Step Progress Dots */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentStep === step
                    ? 'w-10 bg-indigo-600 dark:bg-[#00E5FF]'
                    : currentStep > step
                    ? 'w-4 bg-purple-500'
                    : 'w-4 bg-slate-200 dark:bg-slate-800'
                }`}
              />
            ))}
          </div>

          {/* Question 1: What excites you most? */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="text-lg font-display font-bold text-center text-slate-900 dark:text-white">
                Step 1 of 3: What problem space excites you most?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { id: 'ai', title: 'Artificial Intelligence & Agents', desc: 'Building neural models, LLMs, and computer vision systems' },
                  { id: 'security', title: 'Ethical Hacking & Defense', desc: 'Penetration testing, finding vulnerabilities, and CTF warfare' },
                  { id: 'web', title: 'Full-Stack Software Engineering', desc: 'Crafting responsive web apps, APIs, and scalable backends' },
                  { id: 'cloud', title: 'Cloud DevOps & Kubernetes', desc: 'Managing cloud infrastructure, Docker clusters, and CI/CD' },
                  { id: 'data', title: 'Data Science & Big Data', desc: 'Uncovering trends, predictive analytics, and data pipelines' },
                  { id: 'hardware', title: 'IoT, Robotics & Hardware', desc: 'Programming microcontrollers, sensors, and physical computing' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setInterest(opt.id);
                      setCurrentStep(2);
                    }}
                    className={`p-6 rounded-[28px] border text-left transition-all group bento-card ${
                      interest === opt.id
                        ? 'border-indigo-600 dark:border-[#00E5FF] bg-indigo-50/60 dark:bg-cyan-500/10 text-slate-900 dark:text-white'
                        : 'border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/60 hover:border-slate-400 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="text-sm font-display font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-[#00E5FF]">
                      {opt.title}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                      {opt.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 2: Experience Level */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="text-lg font-display font-bold text-center text-slate-900 dark:text-white">
                Step 2 of 3: What is your current technical foundation?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'beginner', title: 'Aspiring Beginner', desc: 'Basic or no coding experience. Ready to learn fundamentals from scratch.' },
                  { id: 'intermediate', title: 'University / Intermediate', desc: 'Know basic syntax and OOP. Want hands-on production project experience.' },
                  { id: 'advanced', title: 'Advanced Builder', desc: 'Already shipping code. Looking for deep-tech specialization and global mentorship.' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setLevel(opt.id);
                      setCurrentStep(3);
                    }}
                    className="p-7 rounded-[28px] border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/60 text-left hover:border-indigo-600 dark:hover:border-[#00E5FF] hover:bg-indigo-50/50 dark:hover:bg-cyan-500/10 transition-all space-y-2 group bento-card"
                  >
                    <div className="text-base font-display font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-[#00E5FF]">
                      {opt.title}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {opt.desc}
                    </p>
                  </button>
                ))}
              </div>

              <div className="flex justify-start pt-2">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-xs font-mono-code text-slate-500 hover:text-slate-800 dark:hover:text-white"
                >
                  ← Back to Step 1
                </button>
              </div>
            </div>
          )}

          {/* Question 3: Dream Goal */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="text-lg font-display font-bold text-center text-slate-900 dark:text-white">
                Step 3 of 3: What is your primary career ambition?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'remote-job', title: 'Land Global Remote Role', desc: 'Work with high-paying international engineering firms from Peshawar.' },
                  { id: 'startup', title: 'Launch a Deep-Tech Startup', desc: 'Build an innovative product and raise venture seed funding.' },
                  { id: 'research', title: 'Global Research & Open Source', desc: 'Contribute to major libraries and pursue top international graduate fellowships.' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setGoal(opt.id);
                      setCurrentStep(4);
                    }}
                    className="p-7 rounded-[28px] border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/60 text-left hover:border-indigo-600 dark:hover:border-[#00E5FF] hover:bg-indigo-50/50 dark:hover:bg-cyan-500/10 transition-all space-y-2 group bento-card"
                  >
                    <div className="text-base font-display font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-[#00E5FF]">
                      {opt.title}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {opt.desc}
                    </p>
                  </button>
                ))}
              </div>

              <div className="flex justify-start pt-2">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="text-xs font-mono-code text-slate-500 hover:text-slate-800 dark:hover:text-white"
                >
                  ← Back to Step 2
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Result / Recommendation */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in zoom-in-95 duration-300">
              <div className="p-8 sm:p-10 rounded-[36px] bg-slate-900 border border-slate-800 text-white space-y-6 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-[#00E5FF] text-[10px] font-mono-code font-bold mb-2">
                      <Sparkles className="w-3.5 h-3.5" /> 98% MATCH FOUND
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      Recommended Track: {recommendedDomain.title}
                    </h4>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-black/60 border border-slate-700 font-mono-code text-xs text-cyan-300 font-bold self-start">
                    {recommendedDomain.shortCode}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
                  {recommendedDomain.description} This 12-week specialized track pairs you with senior alumni mentors, gives you access to the Next Gennect sandbox, and guides you to ship a capstone portfolio project.
                </p>

                {/* Key Roadmap highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {recommendedDomain.roadmap.slice(0, 2).map((s) => (
                    <div key={s.step} className="p-4 rounded-2xl bg-black/40 border border-slate-800 text-xs space-y-1">
                      <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" /> Step {s.step}: {s.title}
                      </div>
                      <div className="text-[11px] text-slate-400">{s.description}</div>
                    </div>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs font-mono-code text-slate-400 hover:text-white"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
                  </button>

                  <button
                    onClick={() => onSelectTrack(recommendedDomain)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#00E5FF] hover:bg-[#38BDF8] text-black font-display font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Enroll In {recommendedDomain.shortCode} Track</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
