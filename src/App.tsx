import React, { useState } from 'react';

import { MentorsSection } from './components/MentorsSection';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechDomains } from './components/TechDomains';
import { CoursesAndServices } from './components/CoursesAndServices';
import { MissionVision } from './components/MissionVision';
import { ImpactDashboard } from './components/ImpactDashboard';
import { EventsSection } from './components/EventsSection';
import { TrackFinder } from './components/TrackFinder';
import { FaqContact } from './components/FaqContact';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { CommunityModal } from './components/CommunityModal';
import {
  ApplyEnrollModal,
  EnrollmentType,
} from './components/ApplyEnrollModal';
import { AdminRecordsModal } from './components/AdminRecordsModal';
import { NetworkCanvas } from './components/NetworkCanvas';

import {
  TechDomain,
  TrainingCourse,
  ClientService,
} from './types';

export default function App() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const [communityModalOpen, setCommunityModalOpen] = useState(false);

  const [selectedTrackForModal, setSelectedTrackForModal] =
    useState<TechDomain | null>(null);

  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const [applyModalType, setApplyModalType] =
    useState<EnrollmentType>('student_course');

  const [applyCourseId, setApplyCourseId] =
    useState<string | null>(null);

  const [applyServiceId, setApplyServiceId] =
    useState<string | null>(null);

  const [adminModalOpen, setAdminModalOpen] = useState(false);

  const handleOpenJoinModal = (domain?: TechDomain) => {
    if (domain) {
      setSelectedTrackForModal(domain);
      setCommunityModalOpen(true);
    } else {
      setApplyModalType('student_course');
      setApplyCourseId(null);
      setApplyServiceId(null);
      setApplyModalOpen(true);
    }
  };

  const handleApplyCourse = (course: TrainingCourse) => {
    setApplyModalType('student_course');
    setApplyCourseId(course.id);
    setApplyServiceId(null);
    setApplyModalOpen(true);
  };

  const handleRequestService = (service: ClientService) => {
    setApplyModalType('client_service');
    setApplyServiceId(service.id);
    setApplyCourseId(null);
    setApplyModalOpen(true);
  };

  const handleExploreDomains = () => {
    const element = document.getElementById('domains');

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleSelectDomainFromSearch = (domain: TechDomain) => {
    handleOpenJoinModal(domain);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#050816] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-[#00E5FF] selection:text-black relative">

        {/* Global Tech Wire Circuit Canvas */}
        <NetworkCanvas />

        {/* Navigation */}
        <Navbar
          onOpenSearch={() => setSearchModalOpen(true)}
          onOpenJoinModal={() => handleOpenJoinModal()}
          onOpenAdmin={() => setAdminModalOpen(true)}
        />

        {/* Main Website Content */}
        <main className="relative">

          {/* 1. Hero */}
          <Hero
            onOpenJoinModal={() => handleOpenJoinModal()}
            onExploreDomains={handleExploreDomains}
          />

          {/* 2. Technology Domains */}
          <TechDomains
            onJoinTrack={(domain) => handleOpenJoinModal(domain)}
          />

          {/* 3. Courses & Services */}
          <CoursesAndServices
            onApplyCourse={handleApplyCourse}
            onRequestService={handleRequestService}
            onOpenGeneralModal={() => {
              setApplyModalType('student_course');
              setApplyCourseId(null);
              setApplyServiceId(null);
              setApplyModalOpen(true);
            }}
          />

          {/* 4. Mission & Vision */}
          <MissionVision />

          {/* 5. Mentors */}
          <MentorsSection />

          {/* 6. Impact Dashboard */}
          <ImpactDashboard />

          {/* 7. Events */}
          <EventsSection />

          {/* 8. Track Finder */}
          <TrackFinder
            onSelectTrack={(domain) =>
              handleOpenJoinModal(domain)
            }
          />

          {/* 9. FAQ & Contact */}
          <FaqContact />

        </main>

        {/* Footer */}
        <Footer
          onOpenAdmin={() => setAdminModalOpen(true)}
        />

        {/* Search Modal */}
        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          onSelectDomain={handleSelectDomainFromSearch}
        />

        {/* Community Modal */}
        <CommunityModal
          isOpen={communityModalOpen}
          onClose={() => {
            setCommunityModalOpen(false);
            setSelectedTrackForModal(null);
          }}
          initialDomain={selectedTrackForModal}
        />

        {/* Apply / Enroll Modal */}
        <ApplyEnrollModal
          isOpen={applyModalOpen}
          onClose={() => {
            setApplyModalOpen(false);
            setApplyCourseId(null);
            setApplyServiceId(null);
          }}
          initialType={applyModalType}
          initialCourseId={applyCourseId}
          initialServiceId={applyServiceId}
          initialDomain={selectedTrackForModal}
        />

        {/* Admin Modal */}
        <AdminRecordsModal
          isOpen={adminModalOpen}
          onClose={() => setAdminModalOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
}
