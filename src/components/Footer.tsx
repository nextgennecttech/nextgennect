import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Heart, 
  MapPin, 
  Terminal,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Footer: React.FC = () => {
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
    <footer className="relative bg-[#050816] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden font-sans">
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
              <span>Peshawar, Khyber Pakhtunkhwa, Pakistan</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@nextgennect.com"
                className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-400/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#00E5FF] transition-colors">Home Canvas</a>
              </li>
              <li>
                <a href="#domains" className="hover:text-[#00E5FF] transition-colors">6 Tech Domains</a>
              </li>
              <li>
                <a href="#mission" className="hover:text-[#00E5FF] transition-colors">Mission & Leadership</a>
              </li>
              <li>
                <a href="#impact" className="hover:text-[#00E5FF] transition-colors">Impact Dashboard</a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#00E5FF] transition-colors">Workshops & CTFs</a>
              </li>
              <li>
                <a href="#finder" className="hover:text-[#00E5FF] transition-colors">Track Advisor</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00E5FF] transition-colors">FAQ & Contact</a>
              </li>
            </ul>
          </div>

          {/* Tech Tracks */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-white">
              Specialized Tracks
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#domains" className="hover:text-[#00E5FF] transition-colors">Artificial Intelligence & ML</a>
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
