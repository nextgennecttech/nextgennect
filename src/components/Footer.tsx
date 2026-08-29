import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { COMMUNITY_LINKS } from '../data/mockData';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Heart, 
  MapPin, 
  Terminal,
  Sparkles,
  ExternalLink,
  Database
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00E5FF', '#7C3AED', '#FFFFFF'],
    });
  };

  return (
    <footer className="relative bg-[#050816]/85 backdrop-blur-md text-slate-400 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden font-sans">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Brand Col (2 spans) */}
          <div className="lg:col-span-2 space-y-5">
            <BrandLogo size="md" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Next Gennect is a youth-led technology community headquartered in Peshawar, Pakistan. Dedicated to engineering the next generation of builders, ethical hackers, AI researchers, and digital innovators.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400">
              <MapPin className="w-4 h-4 text-[#00E5FF] shrink-0" />
              <span>{COMMUNITY_LINKS.location}</span>
            </div>

            {/* Official Community Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={COMMUNITY_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all hover:scale-105 shadow-sm"
                aria-label="Next Gennect LinkedIn"
                title="LinkedIn Community"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMMUNITY_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#EC4899] hover:border-[#EC4899]/50 transition-all hover:scale-105 shadow-sm"
                aria-label="Next Gennect Instagram"
                title="Instagram Community"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMMUNITY_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all hover:scale-105 shadow-sm"
                aria-label="Next Gennect GitHub"
                title="GitHub Community"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${COMMUNITY_LINKS.email}`}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00E5FF] hover:border-cyan-400/50 transition-all hover:scale-105 shadow-sm"
                aria-label="Contact Community Email"
                title={`Email: ${COMMUNITY_LINKS.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="text-[11px] font-mono-code text-slate-500 flex items-center gap-1.5">
              <span>Official Email:</span>
              <a href={`mailto:${COMMUNITY_LINKS.email}`} className="text-cyan-400 hover:underline">
                {COMMUNITY_LINKS.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#00E5FF] transition-colors">Home & Ecosystem</a>
              </li>
              <li>
                <a href="#domains" className="hover:text-[#00E5FF] transition-colors">Tech Domains</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#00E5FF] transition-colors">Courses & Services</a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#00E5FF] transition-colors">Workshops & Events</a>
              </li>
              <li>
                <a href="#mission" className="hover:text-[#00E5FF] transition-colors">Leadership & Vision</a>
              </li>
              {onOpenAdmin && (
                <li>
                  <button 
                    onClick={onOpenAdmin}
                    className="text-cyan-400 hover:text-white flex items-center gap-1.5 transition-colors font-mono-code font-bold"
                  >
                    <Database className="w-3.5 h-3.5" />
                    <span>Admin Registry Tracker</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Domains */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-white">
              Engineering Tracks
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#domains" className="hover:text-[#00E5FF] transition-colors">AI & Machine Learning</a>
              </li>
              <li>
                <a href="#domains" className="hover:text-[#00E5FF] transition-colors">Cybersecurity & Ethical Hacking</a>
              </li>
              <li>
                <a href="#domains" className="hover:text-[#00E5FF] transition-colors">Full-Stack Web & Next.js</a>
              </li>
              <li>
                <a href="#domains" className="hover:text-[#00E5FF] transition-colors">Cloud Infrastructure & DevOps</a>
              </li>
              <li>
                <a href="#domains" className="hover:text-[#00E5FF] transition-colors">Data Science & Big Data</a>
              </li>
              <li>
                <a href="#domains" className="hover:text-[#00E5FF] transition-colors">Hardware & IoT Innovation</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" /> Tech Dispatch
            </h4>
            <p className="text-xs text-slate-400">
              Get monthly bootcamp alerts, CTF announcements, and tech job leads straight to your inbox.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs text-cyan-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>Subscribed! Welcome to the dispatch list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded-xl bg-[#00E5FF] hover:bg-[#38BDF8] text-black font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-slate-500">
          <div>
            © {new Date().getFullYear()} Next Gennect Platform. All rights reserved. Peshawar, Pakistan.
          </div>

          <div className="flex items-center gap-1">
            <span>Built with precision for the next generation of engineers</span>
            <span className="text-[#00E5FF]">⚡</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
