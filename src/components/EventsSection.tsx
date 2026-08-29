import React, { useState } from 'react';
import { UPCOMING_EVENTS, COMMUNITY_LINKS } from '../data/mockData';
import { EventItem } from '../types';
import { saveNewRecord } from '../services/recordManager';
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
  BookOpen,
  Linkedin,
  Phone,
  Check
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
  const [rsvpPhone, setRsvpPhone] = useState('');
  const [rsvpUniversity, setRsvpUniversity] = useState('');
  const [assignedId, setAssignedId] = useState<string>('');

  const handleOpenRsvp = (event: EventItem) => {
    setSelectedEvent(event);
    setRsvpSuccess(false);
    setRsvpName('');
    setRsvpEmail('');
    setRsvpPhone('');
    setRsvpUniversity('');
    setAssignedId('');
  };

  const handleSubmitRsvp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName || !rsvpEmail || !selectedEvent) return;

    const saved = await saveNewRecord({
      type: 'event_seat_reservation',
      fullName: rsvpName,
      email: rsvpEmail,
      phone: rsvpPhone,
      universityOrOrg: rsvpUniversity || 'Peshawar Student',
      eventTitle: selectedEvent.title,
      trackOrTopic: selectedEvent.category,
      experienceLevel: 'All Levels',
      status: 'Seat Confirmed',
      notesOrScope: `Reserved seat for ${selectedEvent.title} on ${selectedEvent.date} (${selectedEvent.location})`
    });

    setAssignedId(saved.id);
    setRsvpSuccess(true);
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#00E5FF', '#7C3AED', '#38BDF8', '#10B981', '#FFFFFF'],
    });
  };

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-slate-50/60 dark:bg-[#080D1C] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-cyan-500/10 text-indigo-700 dark:text-[#00E5FF] text-[10px] font-mono-code font-bold uppercase tracking-widest border border-indigo-200/80 dark:border-cyan-500/20">
            <Calendar className="w-3.5 h-3.5" />
            <span>COMMUNITY CALENDAR & RESERVATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Upcoming Workshops & <span className="text-indigo-600 dark:text-[#00E5FF]">Hackathons</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal">
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
                className="rounded-[36px] bg-white dark:bg-[#0A0F1E] border border-slate-200/90 dark:border-slate-800/80 p-8 shadow-sm hover:border-indigo-400/40 dark:hover:border-cyan-400/40 transition-all flex flex-col justify-between space-y-6 group bento-card"
              >
                <div className="space-y-4">
                  {/* Top Bar: Category & Status */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-indigo-50 dark:bg-cyan-500/15 text-indigo-700 dark:text-[#00E5FF] border border-indigo-200 dark:border-cyan-500/30">
                      {event.category}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono-code">
                      {event.status === 'Filling Fast' && (
                        <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold bg-amber-50 dark:bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-500/20 text-[10px]">
                          <Flame className="w-3 h-3 fill-current" /> Filling Fast
                        </span>
                      )}
                      {event.isOnline ? (
                        <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/20 text-[10px]">
                          <Radio className="w-3 h-3 animate-pulse" /> Virtual / Live
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-indigo-700 dark:text-cyan-400 font-semibold bg-indigo-50 dark:bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-cyan-500/20 text-[10px]">
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
                    <p className="text-xs text-slate-700 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed font-normal">
                      {event.description}
                    </p>
                  </div>

                  {/* Date, Time, Location details */}
                  <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-mono-code pt-1 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-[#00E5FF]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 truncate">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>

                  {/* Prerequisites Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {event.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full bg-slate-50 dark:bg-slate-900 text-[10px] font-mono-code text-slate-800 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Progress Capacity Bar */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between text-[11px] font-mono-code text-slate-600 dark:text-slate-400 font-semibold">
                      <span>{event.registeredCount} Seats Booked</span>
                      <span>{event.maxCapacity} Seats ({percentFilled}%)</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
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
          <div className="relative w-full max-w-lg bg-white dark:bg-[#080D1C] text-slate-900 dark:text-white rounded-[32px] border border-slate-200/90 dark:border-cyan-500/40 p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono-code text-indigo-700 dark:text-[#00E5FF] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Instant Seat Reservation
                </span>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mt-1">
                  {selectedEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            {rsvpSuccess ? (
              <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-[#00E5FF]/20 border border-emerald-500 dark:border-[#00E5FF] text-emerald-600 dark:text-[#00E5FF] flex items-center justify-center mx-auto shadow-md dark:shadow-[0_0_25px_rgba(0,229,255,0.5)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono-code font-bold px-3 py-0.5 rounded-full bg-indigo-50 dark:bg-cyan-500/20 text-indigo-700 dark:text-[#00E5FF]">
                    Pass #{assignedId}
                  </span>
                  <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                    Seat Confirmed!
                  </h4>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 max-w-xs mx-auto leading-relaxed">
                  Your seat for <strong className="text-slate-900 dark:text-white">{selectedEvent.title}</strong> has been logged in the Next Gennect registry and dispatched to <span className="text-indigo-700 dark:text-[#00E5FF] font-mono-code font-bold">{rsvpEmail}</span>.
                </p>
                
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono-code text-indigo-700 dark:text-cyan-300 font-semibold space-y-1 text-left">
                  <div>📅 {selectedEvent.date} • {selectedEvent.time}</div>
                  <div className="text-slate-600 dark:text-slate-400">📍 {selectedEvent.location}</div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400">✓ Organizers notified at nextgennect.tech@gmail.com</div>
                </div>

                {/* Follow on LinkedIn action */}
                <a
                  href={COMMUNITY_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-mono-code font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect with us on LinkedIn for Event Updates</span>
                </a>

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-full py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitRsvp} className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-slate-900/90 border border-indigo-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-[#00E5FF]" /> {selectedEvent.date} ({selectedEvent.time})
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">
                    Lead: {selectedEvent.instructor} ({selectedEvent.instructorRole})
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={rsvpName}
                      onChange={(e) => setRsvpName(e.target.value)}
                      placeholder="e.g. Aliyan Shah"
                      className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={rsvpEmail}
                        onChange={(e) => setRsvpEmail(e.target.value)}
                        placeholder="name@university.edu.pk"
                        className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1 font-semibold">
                        WhatsApp / Mobile No.
                      </label>
                      <input
                        type="tel"
                        value={rsvpPhone}
                        onChange={(e) => setRsvpPhone(e.target.value)}
                        placeholder="+92 300 1234567"
                        className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1 font-semibold">
                      University or Organization
                    </label>
                    <input
                      type="text"
                      value={rsvpUniversity}
                      onChange={(e) => setRsvpUniversity(e.target.value)}
                      placeholder="e.g. UET Peshawar / IMSciences / CECOS / Self-Taught"
                      className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-200/90 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-indigo-600 dark:bg-[#00E5FF] text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider dark:hover:bg-[#38BDF8] shadow-sm transition-all"
                  >
                    Confirm & Reserve Seat
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
