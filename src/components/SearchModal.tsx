import React, { useState, useEffect } from 'react';
import { TECH_DOMAINS, LEADERSHIP_TEAM, UPCOMING_EVENTS, FAQ_ITEMS } from '../data/mockData';
import { Search, X, Layers, Users, Calendar, HelpCircle, ArrowRight } from 'lucide-react';
import { TechDomain } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDomain: (domain: TechDomain) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectDomain }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingDomains = TECH_DOMAINS.filter(
    (d) =>
      d.title.toLowerCase().includes(trimmed) ||
      d.shortCode.toLowerCase().includes(trimmed) ||
      d.tags.some((t) => t.toLowerCase().includes(trimmed)) ||
      d.description.toLowerCase().includes(trimmed)
  );

  const matchingTeam = LEADERSHIP_TEAM.filter(
    (m) =>
      m.name.toLowerCase().includes(trimmed) ||
      m.role.toLowerCase().includes(trimmed) ||
      m.specialties.some((s) => s.toLowerCase().includes(trimmed))
  );

  const matchingEvents = UPCOMING_EVENTS.filter(
    (e) =>
      e.title.toLowerCase().includes(trimmed) ||
      e.tags.some((t) => t.toLowerCase().includes(trimmed)) ||
      e.category.toLowerCase().includes(trimmed)
  );

  const matchingFaqs = FAQ_ITEMS.filter(
    (f) =>
      f.question.toLowerCase().includes(trimmed) ||
      f.answer.toLowerCase().includes(trimmed)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0A0F1E] rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden text-slate-900 dark:text-white bento-card">
        
        {/* Search Header Input */}
        <div className="p-4 sm:p-5 border-b border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-600 dark:text-[#00E5FF] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search domains, workshops, team, topics, or FAQs..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Domains */}
          {matchingDomains.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] font-mono-code uppercase text-indigo-600 dark:text-[#00E5FF] font-bold tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Tech Domains ({matchingDomains.length})
              </div>
              <div className="space-y-1.5">
                {matchingDomains.map((domain) => (
                  <button
                    key={domain.id}
                    onClick={() => {
                      onClose();
                      onSelectDomain(domain);
                    }}
                    className="w-full p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 hover:bg-indigo-50 dark:hover:bg-cyan-950/40 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-[#00E5FF]/40 text-left transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-display font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-[#00E5FF]">
                        {domain.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono-code mt-0.5">
                        {domain.tags.slice(0, 3).join(' • ')}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-[#00E5FF] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Leadership */}
          {matchingTeam.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] font-mono-code uppercase text-purple-600 dark:text-purple-400 font-bold tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> Leadership & Mentors ({matchingTeam.length})
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchingTeam.map((member) => (
                  <div
                    key={member.id}
                    className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3"
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-9 h-9 rounded-xl object-cover border border-slate-200 dark:border-slate-700"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-xs font-display font-bold text-slate-900 dark:text-white">
                        {member.name}
                      </div>
                      <div className="text-[10px] text-purple-600 dark:text-purple-300 font-mono-code">
                        {member.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events */}
          {matchingEvents.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] font-mono-code uppercase text-emerald-600 dark:text-emerald-400 font-bold tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Upcoming Workshops & CTFs ({matchingEvents.length})
              </div>
              <div className="space-y-1.5">
                {matchingEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{evt.title}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono-code">{evt.date} • {evt.category}</div>
                    </div>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20 font-mono-code">
                      {evt.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {matchingFaqs.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] font-mono-code uppercase text-indigo-600 dark:text-cyan-300 font-bold tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" /> FAQs ({matchingFaqs.length})
              </div>
              <div className="space-y-1.5">
                {matchingFaqs.slice(0, 2).map((faq) => (
                  <div key={faq.id} className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs">
                    <div className="font-bold text-slate-900 dark:text-white">{faq.question}</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchingDomains.length === 0 &&
            matchingTeam.length === 0 &&
            matchingEvents.length === 0 &&
            matchingFaqs.length === 0 && (
              <div className="py-12 text-center text-slate-500 text-xs">
                No matching results found for &ldquo;{query}&rdquo;. Try &ldquo;AI&rdquo;, &ldquo;Security&rdquo;, or &ldquo;Peshawar&rdquo;.
              </div>
            )}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200/80 dark:border-slate-800 text-center text-[10px] font-mono-code text-slate-500 flex items-center justify-between px-6">
          <span>Press ESC or click outside to close</span>
          <span>Next Gennect Index</span>
        </div>

      </div>
    </div>
  );
};
