import React, { useState } from 'react';
import { TechDomain } from '../types';
import { TECH_DOMAINS } from '../data/mockData';
import { Sparkles, CheckCircle2, X, Terminal, Users, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDomain?: TechDomain | null;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({
  isOpen,
  onClose,
  initialDomain,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [role, setRole] = useState<'Student' | 'Mentor' | 'Ambassador' | 'Partner'>('Student');
  const [domainId, setDomainId] = useState<string>(initialDomain?.id || 'ai-ml');
  const [experience, setExperience] = useState('Beginner');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00E5FF', '#7C3AED', '#38BDF8', '#10B981', '#FFFFFF'],
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setUniversity('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0A0F1E] text-slate-900 dark:text-white rounded-[36px] border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl bento-card">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-indigo-50 dark:bg-cyan-500/20 text-indigo-600 dark:text-[#00E5FF] text-[10px] font-mono-code font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL REGISTRATION</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Join Next Gennect
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Peshawar&apos;s youth-led community for high-impact technologists.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-full bg-indigo-50 dark:bg-cyan-500/20 border-2 border-indigo-600 dark:border-[#00E5FF] text-indigo-600 dark:text-[#00E5FF] flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">
                Welcome to Next Gennect!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                Congratulations <span className="font-bold text-indigo-600 dark:text-[#00E5FF]">{name}</span>! Your registration as a <span className="font-semibold text-purple-600 dark:text-purple-300">{role}</span> has been confirmed.
              </p>
            </div>

            <div className="p-5 rounded-[24px] bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-left space-y-2 text-xs">
              <div className="font-mono-code font-bold text-indigo-600 dark:text-cyan-300 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Next Steps:
              </div>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 font-mono-code text-[11px] list-disc list-inside">
                <li>Check <span className="text-slate-900 dark:text-white font-semibold">{email}</span> for your welcome credentials & Discord invite</li>
                <li>Join your specialized track channel ({TECH_DOMAINS.find(d => d.id === domainId)?.shortCode || 'Track'})</li>
                <li>Attend the upcoming weekly Sunday tech standup</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-indigo-600 dark:bg-[#00E5FF] dark:hover:bg-[#38BDF8] text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              Enter Community Portal
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Role Selection Tabs */}
            <div>
              <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5">
                Select Your Capacity
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'Student', label: 'Learner', icon: Users },
                  { id: 'Mentor', label: 'Mentor', icon: HeartHandshake },
                  { id: 'Ambassador', label: 'Ambassador', icon: Sparkles },
                  { id: 'Partner', label: 'Partner', icon: ShieldCheck },
                ].map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRole(r.id as any)}
                    className={`py-2.5 px-2 rounded-2xl text-xs font-semibold border transition-all flex flex-col items-center gap-1 ${
                      role === r.id
                        ? 'border-indigo-600 dark:border-[#00E5FF] bg-indigo-50 dark:bg-cyan-500/20 text-indigo-600 dark:text-[#00E5FF]'
                        : 'border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-700'
                    }`}
                  >
                    <r.icon className="w-3.5 h-3.5" />
                    <span>{r.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aliyan Shah"
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                />
              </div>
            </div>

            {/* University / Org */}
            <div>
              <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1">
                University / Institute / Company
              </label>
              <input
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                placeholder="e.g. UET Peshawar / IMSciences / CECOS / Self-Taught"
                className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
              />
            </div>

            {/* Target Domain */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1">
                  Primary Domain of Focus
                </label>
                <select
                  value={domainId}
                  onChange={(e) => setDomainId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                >
                  {TECH_DOMAINS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.shortCode} - {d.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1">
                  Skill Level
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                >
                  <option value="Beginner">Beginner (Starting from scratch)</option>
                  <option value="Intermediate">Intermediate (Know basics & code)</option>
                  <option value="Advanced">Advanced (Ready for production/mentorship)</option>
                </select>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-slate-900 hover:bg-indigo-600 dark:bg-[#00E5FF] dark:hover:bg-[#38BDF8] text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-2 active:scale-95 transition-all"
              >
                <span>Complete Free Registration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
