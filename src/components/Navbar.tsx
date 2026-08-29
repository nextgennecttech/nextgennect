import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { useTheme } from '../context/ThemeContext';
import { getStoredRecords } from '../services/recordManager';
import { useDeviceDetect } from '../hooks/useDeviceDetect';
import { 
  Sun, 
  Moon, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Database,
  Layers,
  GraduationCap,
  Calendar,
  Compass,
  MessageSquareQuote,
  Send
} from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenJoinModal: () => void;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenJoinModal, onOpenAdmin }) => {
  const { theme, toggleTheme } = useTheme();
  const device = useDeviceDetect();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [recordCount, setRecordCount] = useState<number>(0);

  useEffect(() => {
    // Initial count
    setRecordCount(getStoredRecords().length);

    const updateCount = () => {
      setRecordCount(getStoredRecords().length);
    };

    window.addEventListener('nextgennect_record_added', updateCount);
    window.addEventListener('nextgennect_record_deleted', updateCount);
    window.addEventListener('nextgennect_records_cleared', updateCount);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'domains', 'courses', 'mission', 'impact', 'events', 'finder', 'faq', 'contact'];
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('nextgennect_record_added', updateCount);
      window.removeEventListener('nextgennect_record_deleted', updateCount);
      window.removeEventListener('nextgennect_records_cleared', updateCount);
    };
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    if (!device.isMobile && !device.isTablet && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [device.isMobile, device.isTablet, mobileMenuOpen]);

  const navLinks = [
    { label: 'Domains', shortLabel: 'Domains', href: '#domains', id: 'domains', icon: Layers },
    { label: 'Courses & Services', shortLabel: 'Courses', href: '#courses', id: 'courses', icon: GraduationCap },
    { label: 'Mission & Team', shortLabel: 'Mission', href: '#mission', id: 'mission', icon: Sparkles },
    { label: 'Impact', shortLabel: 'Impact', href: '#impact', id: 'impact', icon: Terminal },
    { label: 'Events', shortLabel: 'Events', href: '#events', id: 'events', icon: Calendar },
    { label: 'Track Finder', shortLabel: 'Finder', href: '#finder', id: 'finder', icon: Compass },
    { label: 'FAQ', shortLabel: 'FAQ', href: '#faq', id: 'faq', icon: MessageSquareQuote },
    { label: 'Contact', shortLabel: 'Contact', href: '#contact', id: 'contact', icon: Send },
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
            ? 'py-2 sm:py-2.5 bg-white/90 dark:bg-[#060A18]/90 backdrop-blur-lg border-b border-slate-200/80 dark:border-slate-800/80 shadow-md dark:shadow-2xl'
            : 'py-3 sm:py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between bg-white/90 dark:bg-[#0A0F20]/90 backdrop-blur-md px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-[24px] sm:rounded-[32px] border border-slate-200/90 dark:border-slate-800/90 shadow-sm dark:shadow-2xl gap-2">
            
            {/* Brand Logo - Auto fluid sizing */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="focus:outline-none shrink-0"
              aria-label="Next Gennect Homepage"
            >
              <BrandLogo size={device.isMobile ? 'sm' : 'md'} />
            </a>

            {/* Desktop / Laptop Adaptive Nav Items */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-100/90 dark:bg-[#10172A]/90 px-2 xl:px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-2 xl:px-3 py-1.5 rounded-full text-[11px] xl:text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-indigo-600 dark:bg-[#00E5FF] text-white dark:text-black shadow-md font-bold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5'
                    }`}
                  >
                    {/* On 1024-1279px laptop displays, use shorter labels to guarantee perfect fitting without wrap */}
                    <span className="hidden xl:inline">{link.label}</span>
                    <span className="inline xl:hidden">{link.shortLabel}</span>
                  </a>
                );
              })}
            </nav>

            {/* Actions: Search, Records Portal, Theme Toggle, CTA */}
            <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 shrink-0">
              {/* Quick Search Button */}
              <button
                onClick={onOpenSearch}
                className="px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#00E5FF] hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-slate-800 transition-all flex items-center gap-1.5 text-xs"
                title="Search Next Gennect"
                aria-label="Search resources and domains"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden 2xl:inline text-slate-500 font-mono-code text-[11px]">Search</span>
                <kbd className="hidden xl:inline px-1.5 py-0.5 text-[10px] font-mono-code bg-slate-200/80 dark:bg-slate-800 rounded-md text-slate-500">⌘K</kbd>
              </button>

              {/* Admin / Records Tracker Button */}
              {onOpenAdmin && (
                <button
                  onClick={onOpenAdmin}
                  className="px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-2xl bg-indigo-50/80 dark:bg-slate-800/80 text-indigo-700 dark:text-cyan-300 hover:bg-indigo-100 dark:hover:bg-slate-700 border border-indigo-200/80 dark:border-slate-700 transition-all flex items-center gap-1.5 text-xs font-mono-code font-semibold"
                  title="View Registered Students & Reserved Seats"
                  aria-label="Admin Registry Tracker"
                >
                  <Database className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline">Records</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-indigo-600 dark:bg-[#00E5FF] text-white dark:text-black text-[10px] font-bold">
                    {recordCount}
                  </span>
                </button>
              )}

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
                className="relative group overflow-hidden px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-full font-bold text-xs tracking-wider uppercase text-white bg-slate-900 dark:bg-[#00E5FF] dark:text-black hover:bg-indigo-600 dark:hover:bg-[#38BDF8] transition-all shadow-md shadow-slate-900/10 dark:shadow-cyan-500/20 flex items-center gap-1.5 active:scale-95 whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center gap-1.5 font-display font-semibold">
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-700 transition-transform" />
              </button>
            </div>

            {/* Mobile & Tablet Compact Navigation Bar Actions */}
            <div className="flex lg:hidden items-center gap-1.5">
              {/* Quick Records Icon */}
              {onOpenAdmin && (
                <button
                  onClick={onOpenAdmin}
                  className="p-2 rounded-xl bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-slate-700 flex items-center gap-1 relative"
                  aria-label="Open Records"
                  title="Records Tracker"
                >
                  <Database className="w-4 h-4" />
                  {recordCount > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full bg-indigo-600 dark:bg-[#00E5FF] text-white dark:text-black text-[9px] font-bold font-mono-code">
                      {recordCount}
                    </span>
                  )}
                </button>
              )}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-[#00E5FF]" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>

              {/* Quick Search Icon */}
              <button
                onClick={onOpenSearch}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
                aria-label="Search Next Gennect"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Hamburger Drawer Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 dark:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-800 transition-colors active:scale-95"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-indigo-600 dark:text-[#00E5FF]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Auto viewport height aware for Chrome mobile & tablets) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-in fade-in duration-200">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-[65px] sm:top-[76px] left-3 right-3 sm:left-6 sm:right-6 max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-[28px] bg-white dark:bg-[#080D1C] border border-slate-200/90 dark:border-[#00E5FF]/30 p-5 sm:p-6 shadow-2xl space-y-4 animate-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono-code uppercase text-indigo-700 dark:text-[#00E5FF] font-bold tracking-wider flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" /> Next Gennect Navigation
              </span>
              <span className="text-[11px] font-mono-code text-slate-500 dark:text-slate-400 font-medium">Peshawar Chapter</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`p-3 rounded-2xl text-xs font-semibold tracking-wide border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-indigo-50 dark:bg-[#00E5FF]/15 border-indigo-500 dark:border-[#00E5FF] text-indigo-700 dark:text-[#00E5FF] font-bold shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComponent className="w-4 h-4 opacity-70" />
                      <span>{link.label}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                  </a>
                );
              })}
            </div>

            <div className="pt-2 space-y-2.5">
              {onOpenAdmin && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="w-full py-3 rounded-2xl bg-indigo-50 dark:bg-slate-800/90 border border-indigo-200 dark:border-slate-700 text-indigo-700 dark:text-cyan-300 font-mono-code font-bold text-xs flex items-center justify-center gap-2 transition-all hover:bg-indigo-100 dark:hover:bg-slate-700"
                >
                  <Database className="w-4 h-4" />
                  <span>Student & Seat Registry Portal ({recordCount})</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-indigo-600 dark:bg-[#00E5FF] text-white dark:text-black font-display font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg dark:shadow-[0_0_25px_rgba(0,229,255,0.35)] transition-all active:scale-98"
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
