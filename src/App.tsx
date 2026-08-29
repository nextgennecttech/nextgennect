import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechDomains } from './components/TechDomains';
import { MissionVision } from './components/MissionVision';
import { ImpactDashboard } from './components/ImpactDashboard';
import { EventsSection } from './components/EventsSection';
import { TrackFinder } from './components/TrackFinder';
import { FaqContact } from './components/FaqContact';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { CommunityModal } from './components/CommunityModal';
import { TechDomain } from './types';

export default function App() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [communityModalOpen, setCommunityModalOpen] = useState(false);
  const [selectedTrackForModal, setSelectedTrackForModal] = useState<TechDomain | null>(null);

  const handleOpenJoinModal = (domain?: TechDomain) => {
    setSelectedTrackForModal(domain || null);
    setCommunityModalOpen(true);
  };

  const handleExploreDomains = () => {
    const el = document.getElementById('domains');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDomainFromSearch = (domain: TechDomain) => {
    handleOpenJoinModal(domain);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#050816] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-[#00E5FF] selection:text-black">
        {/* Navigation Bar */}
        <Navbar
          onOpenSearch={() => setSearchModalOpen(true)}
          onOpenJoinModal={() => handleOpenJoinModal()}
        />

        {/* Main Content Sections */}
        <main className="relative">
          {/* 1. Hero Section with Interactive 3D Network Canvas */}
          <Hero
            onOpenJoinModal={() => handleOpenJoinModal()}
            onExploreDomains={handleExploreDomains}
          />

          {/* 2. Technology Domains (6 Specialized Tracks) */}
          <TechDomains onJoinTrack={(domain) => handleOpenJoinModal(domain)} />

          {/* 3. Mission, Vision, Leadership Team & Core Values */}
          <MissionVision />

          {/* 4. Impact Dashboard (7 Counters, Interactive Growth Chart, Testimonials) */}
          <ImpactDashboard />

          {/* 5. Upcoming Events & Workshops (RSVP & CTF Warfare) */}
          <EventsSection />

          {/* 6. Interactive Track Finder Career Advisor */}
          <TrackFinder onSelectTrack={(domain) => handleOpenJoinModal(domain)} />

          {/* 7. FAQ & Contact / Partnership Dispatch Form */}
          <FaqContact />
        </main>

        {/* Comprehensive Footer */}
        <Footer />

        {/* Global Quick Search Modal */}
        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          onSelectDomain={handleSelectDomainFromSearch}
        />

        {/* Community & Track Registration Modal */}
        <CommunityModal
          isOpen={communityModalOpen}
          onClose={() => {
            setCommunityModalOpen(false);
            setSelectedTrackForModal(null);
          }}
          initialDomain={selectedTrackForModal}
        />
      </div>
    </ThemeProvider>
  );
}
