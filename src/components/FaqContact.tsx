import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { 
  HelpCircle, 
  Send, 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ChevronDown, 
  Sparkles,
  MessageSquare,
  Building2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const FaqContact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [activeFaqCat, setActiveFaqCat] = useState<string>('All');
  
  // Contact Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories = ['All', 'General', 'Workshops', 'Membership', 'Mentorship'];

  const filteredFaqs = activeFaqCat === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((f) => f.category === activeFaqCat);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setFormSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#00E5FF', '#7C3AED', '#38BDF8'],
    });
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white dark:bg-[#080D1C] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* FAQ Section */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-cyan-500/10 text-indigo-600 dark:text-[#00E5FF] text-[10px] font-mono-code font-bold uppercase tracking-widest border border-indigo-100 dark:border-cyan-500/20">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Everything You Need <span className="text-indigo-600 dark:text-[#00E5FF]">To Know</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Got questions about joining, attending workshops, or launching a university chapter in KP? We have answers.
            </p>
          </div>

          {/* FAQ Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqCat(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono-code transition-all ${
                  activeFaqCat === cat
                    ? 'bg-slate-900 text-white dark:bg-[#00E5FF] dark:text-black font-bold shadow-sm'
                    : 'bg-white dark:bg-[#0A0F1E] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="max-w-3xl mx-auto space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-[28px] border transition-all overflow-hidden bento-card ${
                    isOpen
                      ? 'bg-white dark:bg-[#0A0F1E] border-indigo-500/40 dark:border-cyan-500/40 shadow-sm'
                      : 'bg-slate-50/70 dark:bg-[#0A0F1E]/60 border-slate-200/80 dark:border-slate-800/80'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-[#00E5FF] transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 text-indigo-600 dark:text-[#00E5FF] ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3.5 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact & Partner Form Section */}
        <div id="contact" className="pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 rounded-[40px] bg-[#F3F4F6] dark:bg-[#0A0F1E] border border-slate-200/80 dark:border-slate-800/80 p-8 sm:p-14 shadow-sm relative overflow-hidden bento-card">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Left Column: Info & Details */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-cyan-500/10 text-indigo-600 dark:text-[#00E5FF] text-[10px] font-mono-code font-bold uppercase tracking-widest border border-indigo-100 dark:border-cyan-500/20">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>GET IN TOUCH</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
                  Let&apos;s Build Together
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Whether you are a university student aiming to join, an industry engineer eager to mentor, or a corporate partner seeking top talent — reach out to our team in Peshawar.
                </p>
              </div>

              {/* Direct Info list */}
              <div className="space-y-4 text-xs font-mono-code text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-indigo-50 dark:bg-cyan-500/10 text-indigo-600 dark:text-[#00E5FF] flex items-center justify-center shrink-0 border border-indigo-100 dark:border-cyan-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Headquarters</div>
                    <div className="text-slate-500 text-[11px]">Peshawar, Khyber Pakhtunkhwa, Pakistan</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0 border border-purple-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Official Correspondence</div>
                    <div className="text-slate-500 text-[11px]">hello@nextgennect.com • atif@nextgennect.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">University Chapters</div>
                    <div className="text-slate-500 text-[11px]">Active in 15+ campuses across Pakistan</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#070B18] border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-[#00E5FF] shrink-0" />
                <span>Typical response time: Within 24 business hours.</span>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 bg-white dark:bg-[#070B18] border border-slate-200/80 dark:border-slate-800/90 rounded-[32px] p-6 sm:p-8 shadow-sm">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-500 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                    Message Dispatched!
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-indigo-600 dark:text-[#00E5FF]">{name}</span>. The Next Gennect leadership team has received your note and will reply to <span className="font-mono-code text-slate-900 dark:text-white">{email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-5 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Aliyan / Fatima"
                        className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject / Interest Category
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                    >
                      <option value="General Inquiry">General Community Inquiry</option>
                      <option value="Mentorship">Apply as an Industry Mentor</option>
                      <option value="Campus Chapter">Start a University Chapter in KP</option>
                      <option value="Corporate Partnership">Corporate / Sponsor Partnership</option>
                      <option value="Host Workshop">Propose a Technical Workshop</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5">
                      Message / Proposal *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us how we can collaborate, mentor, or assist your learning..."
                      className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-indigo-600 dark:bg-[#00E5FF] dark:hover:bg-[#38BDF8] text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message to Next Gennect</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
