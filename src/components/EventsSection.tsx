import React, { useState } from 'react';
import { UPCOMING_EVENTS } from '../data/mockData';
import { EventItem } from '../types';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Radio,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface EventsSectionProps {
  onRsvpEvent?: (event: EventItem) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpUniversity, setRsvpUniversity] = useState('');

  const handleOpenRsvp = (event: EventItem) => {
    setSelectedEvent(event);
    setRsvpSuccess(false);
    setRsvpName('');
    setRsvpEmail('');
    setRsvpUniversity('');
  };

  const handleSubmitRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName || !rsvpEmail) return;

    setRsvpSuccess(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00E5FF', '#7C3AED', '#38BDF8', '#FFFFFF'],
    });
  };

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-white dark:bg-[#080D1C] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-cyan-500/10 text-indigo-600 dark:text-[#00E5FF] text-[10px] font-mono-code font-bold uppercase tracking-widest border border-indigo-100 dark:border-cyan-500/20">
            <Calendar className="w-3.5 h-3.5" />
            <span>COMMUNITY CALENDAR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Upcoming Workshops & <span className="text-indigo-600 dark:text-[#00E5FF]">Hackathons</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Join intensive hands-on coding marathons, live cybersecurity CTFs, and engineering masterclasses in Peshawar & virtually.
          </p>
        </div>

        {/* Events Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {UPCOMING_EVENTS.map((event) => {
            const percentFilled = Math.round((event.registeredCount / event.maxCapacity) * 100);
            return (
              <div
                key={event.id}
                className="rounded-[36px] bg-[#F3F4F6] dark:bg-[#0A0F1E] border border-slate-200/80 dark:border-slate-800/80 p-8 shadow-sm hover:border-indigo-400/40 dark:hover:border-cyan-400/40 transition-all flex flex-col justify-between space-y-6 group bento-card"
              >
                <div className="space-y-4">
                  {/* Top Bar: Category & Status */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-indigo-50 dark:bg-cyan-500/15 text-indigo-600 dark:text-[#00E5FF] border border-indigo-100 dark:border-cyan-500/30">
                      {event.category}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono-code">
                      {event.status === 'Filling Fast' && (
                        <span className="flex items-center gap-1 text-amber-500 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 text-[10px]">
                          <Flame className="w-3 h-3 fill-current" /> Filling Fast
                        </span>
                      )}
                      {event.isOnline ? (
                        <span className="flex items-center gap-1 text-emerald-500 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 text-[10px]">
                          <Radio className="w-3 h-3 animate-pulse" /> Virtual / Live
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-indigo-600 dark:text-cyan-400 font-semibold bg-indigo-50 dark:bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-indigo-100 dark:border-cyan-500/20 text-[10px]">
                          <MapPin className="w-3 h-3" /> Peshawar
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-[#00E5FF] transition-colors leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Date, Time, Location details */}
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-mono-code pt-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-[#00E5FF]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 truncate">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>

                  {/* Prerequisites Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {event.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-900 text-[10px] font-mono-code text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Progress Capacity Bar */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex justify-between text-[11px] font-mono-code text-slate-500">
                      <span>{event.registeredCount} Registered</span>
                      <span>{event.maxCapacity} Capacity ({percentFilled}%)</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${percentFilled}%` }}
                        className="h-full bg-gradient-to-r from-indigo-600 to-[#00E5FF] rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <button
                  onClick={() => handleOpenRsvp(event)}
                  className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-indigo-600 dark:bg-[#00E5FF] dark:hover:bg-[#38BDF8] text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn active:scale-95 shadow-sm"
                >
                  <span>Reserve Free Seat</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive RSVP Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#080D1C] text-white rounded-3xl border border-cyan-500/40 p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono-code text-[#00E5FF] font-bold uppercase tracking-wider">
                  Free Event Registration
                </span>
                <h3 className="text-xl font-display font-bold text-white mt-1">
                  {selectedEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            {rsvpSuccess ? (
              <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF] text-[#00E5FF] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(0,229,255,0.5)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-display font-bold text-white">
                  Seat Reserved!
                </h4>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  A confirmation with joining link and calendar invite has been sent to <span className="text-[#00E5FF] font-mono-code">{rsvpEmail}</span>. See you at the workshop!
                </p>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono-code text-cyan-300">
                  📅 {selectedEvent.date} • {selectedEvent.time}
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitRsvp} className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#00E5FF]" /> {selectedEvent.date} ({selectedEvent.time})
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Lead: {selectedEvent.instructor} ({selectedEvent.instructorRole})
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={rsvpName}
                      onChange={(e) => setRsvpName(e.target.value)}
                      placeholder="e.g. Aliyan Khan"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={rsvpEmail}
                      onChange={(e) => setRsvpEmail(e.target.value)}
                      placeholder="name@university.edu.pk"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1">
                      University or Organization
                    </label>
                    <input
                      type="text"
                      value={rsvpUniversity}
                      onChange={(e) => setRsvpUniversity(e.target.value)}
                      placeholder="e.g. UET Peshawar / CECOS / Self-Taught"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#00E5FF] text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-[#38BDF8] shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                  >
                    Confirm RSVP
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
