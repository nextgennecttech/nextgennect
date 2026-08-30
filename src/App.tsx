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
  // Search modal
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Community / track modal
  const [communityModalOpen, setCommunityModalOpen] = useState(false);
  const [selectedTrackForModal, setSelectedTrackForModal] =
    useState<TechDomain | null>(null);

  // Apply / Enroll modal
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applyModalType, setApplyModalType] =
    useState<EnrollmentType>('student_course');

  const [applyCourseId, setApplyCourseId] =
    useState<string | null>(null);

  const [applyServiceId, setApplyServiceId] =
    useState<string | null>(null);

  // Admin / Student Records Tracker
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // --------------------------------------------------
  // Open Join / Community Modal
  // --------------------------------------------------

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

  // --------------------------------------------------
  // Apply for Course
  // --------------------------------------------------

  const handleApplyCourse = (course: TrainingCourse) => {
    setApplyModalType('student_course');
    setApplyCourseId(course.id);
    setApplyServiceId(null);
    setApplyModalOpen(true);
  };

  // --------------------------------------------------
  // Request Client Service
  // --------------------------------------------------

  const handleRequestService = (service: ClientService) => {
    setApplyModalType('client_service');
    setApplyServiceId(service.id);
    setApplyCourseId(null);
    setApplyModalOpen(true);
  };

  // --------------------------------------------------
  // Explore Technology Domains
  // --------------------------------------------------

  const handleExploreDomains = () => {
    const el = document.getElementById('domains');

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  // --------------------------------------------------
  // Select Domain From Search
  // --------------------------------------------------

  const handleSelectDomainFromSearch = (domain: TechDomain) => {
    handleOpenJoinModal(domain);
  };

  // --------------------------------------------------
  // APPLICATION
  // --------------------------------------------------

  return (
    <ThemeProvider>
      <div
        className="
          min-h-screen
          bg-slate-50
          dark:bg-[#050816]
          text-slate-900
          dark:text-slate-100
          transition-colors
          duration-300
          font-sans
          selection:bg-[#00E5FF]
          selection:text-black
          relative
        "
      >
        {/* =====================================================
            GLOBAL TECH WIRE NETWORK
            ===================================================== */}

        <NetworkCanvas />

        {/* =====================================================
            NAVIGATION BAR
            ===================================================== */}

        <Navbar
          onOpenSearch={() => setSearchModalOpen(true)}
          onOpenJoinModal={() => handleOpenJoinModal()}
          onOpenAdmin={() => setAdminModalOpen(true)}
        />

        {/* =====================================================
            MAIN WEBSITE CONTENT
            ===================================================== */}

        <main className="relative">

          {/* ===================================================
              1. HERO SECTION
              =================================================== */}

          <Hero
            onOpenJoinModal={() => handleOpenJoinModal()}
            onExploreDomains={handleExploreDomains}
          />

          {/* ===================================================
              2. TECHNOLOGY DOMAINS
              =================================================== */}

          <TechDomains
            onJoinTrack={(domain) =>
              handleOpenJoinModal(domain)
            }
          />

          {/* ===================================================
              3. TRAINING COURSES & CLIENT SERVICES
              =================================================== */}

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

          {/* ===================================================
              4. MISSION & VISION
              =================================================== */}

          <MissionVision />

          {/* ===================================================
              5. MENTORS SECTION
              =================================================== */}

          <MentorsSection />

          {/* ===================================================
              6. IMPACT DASHBOARD
              =================================================== */}

          <ImpactDashboard />

          {/* ===================================================
              7. EVENTS & WORKSHOPS
              =================================================== */}

          <EventsSection />

          {/* ===================================================
              8. CAREER / TRACK FINDER
              =================================================== */}

          <TrackFinder
            onSelectTrack={(domain) =>
              handleOpenJoinModal(domain)
            }
          />

          {/* ===================================================
              9. FAQ & CONTACT
              =================================================== */}

          <FaqContact />

        </main>

        {/* =====================================================
            FOOTER
            ===================================================== */}

        <Footer
          onOpenAdmin={() => setAdminModalOpen(true)}
        />

        {/* =====================================================
            SEARCH MODAL
            ===================================================== */}

        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          onSelectDomain={handleSelectDomainFromSearch}
        />

        {/* =====================================================
            COMMUNITY / TRACK REGISTRATION MODAL
            ===================================================== */}

        <CommunityModal
          isOpen={communityModalOpen}
          onClose={() => {
            setCommunityModalOpen(false);
            setSelectedTrackForModal(null);
          }}
          initialDomain={selectedTrackForModal}
        />

        {/* =====================================================
            COURSE / SERVICE APPLICATION MODAL
            ===================================================== */}

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

        {/* =====================================================
            ADMIN RECORDS MODAL
            ===================================================== */}

        <AdminRecordsModal
          isOpen={adminModalOpen}
          onClose={() => setAdminModalOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
}
