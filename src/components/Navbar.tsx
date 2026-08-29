import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Search, Menu, X, ArrowRight, Sparkles, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenJoinModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'domains', 'mission', 'impact', 'events', 'finder', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Domains', href: '#domains', id: 'domains' },
    { label: 'Mission & Team', href: '#mission', id: 'mission' },
    { label: 'Impact', href: '#impact', id: 'impact' },
    { label: 'Events', href: '#events', id: 'events' },
    { label: 'Track Finder', href: '#finder', id: 'finder' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3'
            : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between bg-white/85 dark:bg-[#0A0F1E]/85 backdrop-blur-md px-5 sm:px-7 py-3 rounded-[28px] border border-slate-200/80 dark:border-slate-800/90 shadow-sm dark:shadow-2xl">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="focus:outline-none"
              aria-label="Next Gennect Homepage"
            >
              <BrandLogo size="md" />
            </a>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-[#10172A]/90 px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'bg-indigo-600 dark:bg-[#00E5FF] text-white dark:text-black shadow-md font-bold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Actions: Search, Theme Toggle, CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Quick Search */}
              <button
                onClick={onOpenSearch}
                className="px-3 py-2 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#00E5FF] hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-slate-800 transition-all flex items-center gap-2 text-xs"
                title="Search Next Gennect"
                aria-label="Search resources and domains"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden xl:inline text-slate-500 font-mono-code text-[11px]">Search</span>
                <kbd className="hidden xl:inline px-1.5 py-0.5 text-[10px] font-mono-code bg-slate-200/80 dark:bg-slate-800 rounded-md text-slate-500">⌘K</kbd>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-slate-800 transition-all"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#00E5FF] animate-pulse" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              {/* Primary CTA */}
              <button
                onClick={onOpenJoinModal}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase text-white bg-slate-900 dark:bg-[#00E5FF] dark:text-black hover:bg-indigo-600 dark:hover:bg-[#38BDF8] transition-all shadow-md shadow-slate-900/10 dark:shadow-cyan-500/20 flex items-center gap-2 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-1.5 font-display font-semibold">
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-700 transition-transform" />
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-[#00E5FF]" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={onOpenSearch}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-[70px] left-0 right-0 bg-[#080D1C] border-b border-[#00E5FF]/20 p-6 shadow-2xl space-y-4 animate-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono-code uppercase text-[#00E5FF] tracking-wider flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" /> Next Gennect Navigation
              </span>
              <span className="text-[11px] text-slate-400">Peshawar Chapter</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`p-2.5 rounded-xl text-xs font-semibold tracking-wide border transition-all flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-[#00E5FF]/15 border-[#00E5FF] text-[#00E5FF]'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {link.label}
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3 rounded-xl bg-[#00E5FF] text-black font-display font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                <Sparkles className="w-4 h-4" />
                Join Next Gennect Community
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
