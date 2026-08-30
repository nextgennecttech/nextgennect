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
import { ApplyEnrollModal, EnrollmentType } from './components/ApplyEnrollModal';
import { AdminRecordsModal } from './components/AdminRecordsModal';
import { NetworkCanvas } from './components/NetworkCanvas';
import { TechDomain, TrainingCourse, ClientService } from './types';

export default function App() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [communityModalOpen, setCommunityModalOpen] = useState(false);
  const [selectedTrackForModal, setSelectedTrackForModal] = useState<TechDomain | null>(null);

  // Apply/Enroll modal state
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applyModalType, setApplyModalType] = useState<EnrollmentType>('student_course');
  const [applyCourseId, setApplyCourseId] = useState<string | null>(null);
  const [applyServiceId, setApplyServiceId] = useState<string | null>(null);

  // Admin / Student Records Tracker Modal
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
      <div className="min-h-screen bg-slate-50 dark:bg-[#050816] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-[#00E5FF] selection:text-black relative">
        {/* Global Tech Wire Circuit Canvas (Interactive across all sections) */}
        <NetworkCanvas />

        {/* Navigation Bar */}
        <Navbar
          onOpenSearch={() => setSearchModalOpen(true)}
          onOpenJoinModal={() => handleOpenJoinModal()}
          onOpenAdmin={() => setAdminModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="relative">
          {/* 1. Hero Section with Interactive Tech Wire Physics Canvas */}
          <Hero
            onOpenJoinModal={() => handleOpenJoinModal()}
            onExploreDomains={handleExploreDomains}
          />

          {/* 2. Technology Domains (6 Specialized Tracks) */}
          <TechDomains onJoinTrack={(domain) => handleOpenJoinModal(domain)} />

          {/* 3. Training Courses & Client Services (Apply & Order Forms) */}
          <CoursesAndServices
            onApplyCourse={handleApplyCourse}
            onRequestService={handleRequestService}
            onOpenGeneralModal={() => {
              setApplyModalType('student_course');
              setApplyModalOpen(true);
            }}
          />

          {/* 4. Mission, Vision, Leadership Team & Core Values */}
          <MissionVision />

          {/* 5. Impact Dashboard (7 Counters, Interactive Growth Chart, Testimonials) */}
          <ImpactDashboard />

          {/* 6. Upcoming Events & Workshops (RSVP & Seat Reservation) */}
          <EventsSection />

          {/* 7. Interactive Track Finder Career Advisor */}
          <TrackFinder onSelectTrack={(domain) => handleOpenJoinModal(domain)} />

          {/* 8. FAQ & Contact / Partnership Dispatch Form */}
          <FaqContact />
        </main>

        {/* Comprehensive Footer */}
        <Footer onOpenAdmin={() => setAdminModalOpen(true)} />

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

        {/* Direct Course Application & Client Service Request Modal */}
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

        {/* Admin Student Registration & Seat Reservation Tracker Modal */}
        <AdminRecordsModal
          isOpen={adminModalOpen}
          onClose={() => setAdminModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
