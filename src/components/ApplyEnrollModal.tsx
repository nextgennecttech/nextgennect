import React, { useState, useEffect } from 'react';
import { TrainingCourse, ClientService, TechDomain } from '../types';
import { TRAINING_COURSES, CLIENT_SERVICES, TECH_DOMAINS, COMMUNITY_LINKS } from '../data/mockData';
import { saveNewRecord, generateMailtoLink } from '../services/recordManager';
import { 
  Sparkles, 
  CheckCircle2, 
  X, 
  Terminal, 
  GraduationCap, 
  Briefcase, 
  ArrowRight, 
  BookOpen, 
  Mail, 
  Building2, 
  Code2, 
  Calendar, 
  Check, 
  Phone, 
  Send,
  Linkedin,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

export type EnrollmentType = 'student_course' | 'client_service' | 'general_member';

interface ApplyEnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: EnrollmentType;
  initialCourseId?: string | null;
  initialServiceId?: string | null;
  initialDomain?: TechDomain | null;
}

export const ApplyEnrollModal: React.FC<ApplyEnrollModalProps> = ({
  isOpen,
  onClose,
  initialType = 'student_course',
  initialCourseId = null,
  initialServiceId = null,
  initialDomain = null
}) => {
  const [activeTab, setActiveTab] = useState<EnrollmentType>(initialType);

  // Student Enrollment Form State
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [studentUniversity, setStudentUniversity] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState<string>(
    initialCourseId || TRAINING_COURSES[0].id
  );
  const [studentLevel, setStudentLevel] = useState('Beginner');
  const [studentGoals, setStudentGoals] = useState('');
  const [studentGithub, setStudentGithub] = useState('');

  // Client Service Request Form State
  const [clientOrgName, setClientOrgName] = useState('');
  const [clientContactName, setClientContactName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || CLIENT_SERVICES[0].id
  );
  const [projectTimeline, setProjectTimeline] = useState('1 to 2 Months');
  const [projectScope, setProjectScope] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [assignedRecordId, setAssignedRecordId] = useState<string>('');
  const [submissionData, setSubmissionData] = useState<{
    title: string;
    recipientName: string;
    details: string[];
    mailtoUrl?: string;
  } | null>(null);

  useEffect(() => {
    if (initialType) setActiveTab(initialType);
    if (initialCourseId) setSelectedCourseId(initialCourseId);
    if (initialServiceId) setSelectedServiceId(initialServiceId);
    if (initialDomain) {
      const match = TRAINING_COURSES.find(c => c.trackId === initialDomain.id);
      if (match) setSelectedCourseId(match.id);
    }
  }, [initialType, initialCourseId, initialServiceId, initialDomain, isOpen]);

  if (!isOpen) return null;

  const handleStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentEmail) return;

    const course = TRAINING_COURSES.find(c => c.id === selectedCourseId) || TRAINING_COURSES[0];
    
    const saved = await saveNewRecord({
      type: 'course_application',
      fullName: studentName,
      email: studentEmail,
      phone: studentPhone,
      universityOrOrg: studentUniversity,
      courseTitle: course.title,
      trackOrTopic: course.trackName,
      experienceLevel: studentLevel,
      githubUrl: studentGithub,
      notesOrScope: studentGoals || `Applied for cohort ${course.cohort}`,
      status: 'New'
    });

    setAssignedRecordId(saved.id);
    setSubmissionData({
      title: 'Course Application Successfully Logged!',
      recipientName: studentName,
      mailtoUrl: generateMailtoLink(saved),
      details: [
        `Application ID: ${saved.id}`,
        `Enrolled Program: ${course.title}`,
        `Duration & Format: ${course.duration} • ${course.mode}`,
        `Applicant Email: ${studentEmail}`,
        `Status: Registered in Next Gennect database & dispatched to Admissions Team.`
      ]
    });

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00E5FF', '#6366F1', '#10B981', '#F59E0B']
    });
  };

  const handleClientSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientContactName || !clientEmail || !clientOrgName) return;

    const service = CLIENT_SERVICES.find(s => s.id === selectedServiceId) || CLIENT_SERVICES[0];

    const saved = await saveNewRecord({
      type: 'client_service_request',
      fullName: clientContactName,
      email: clientEmail,
      phone: clientPhone,
      universityOrOrg: clientOrgName,
      serviceTitle: service.title,
      trackOrTopic: 'Client Services',
      notesOrScope: `Timeline: ${projectTimeline} | Scope: ${projectScope}`,
      status: 'New'
    });

    setAssignedRecordId(saved.id);
    setSubmissionData({
      title: 'Service Request Dispatched to Next Gennect!',
      recipientName: clientContactName,
      mailtoUrl: generateMailtoLink(saved),
      details: [
        `Inquiry ID: ${saved.id}`,
        `Organization: ${clientOrgName}`,
        `Service: ${service.title}`,
        `Est. Timeline: ${projectTimeline}`,
        `Our engineering leadership will reach out at ${clientEmail} within 24 hours.`
      ]
    });

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366F1', '#00E5FF', '#7C3AED', '#38BDF8']
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmissionData(null);
    setAssignedRecordId('');
    onClose();
  };

  const selectedCourse = TRAINING_COURSES.find(c => c.id === selectedCourseId) || TRAINING_COURSES[0];
  const selectedService = CLIENT_SERVICES.find(s => s.id === selectedServiceId) || CLIENT_SERVICES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#0A0F1E] text-slate-900 dark:text-white rounded-[32px] sm:rounded-[36px] border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl bento-card">
        
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200/90 dark:border-slate-800">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-indigo-50 dark:bg-cyan-500/20 text-indigo-700 dark:text-[#00E5FF] text-[10px] font-mono-code font-bold uppercase tracking-wider border border-indigo-200/60 dark:border-cyan-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL APPLICATION & SERVICE PORTAL</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white">
              {activeTab === 'student_course' ? 'Apply for Course & Training' : 'Hire Next Gennect Services'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {activeTab === 'student_course' 
                ? 'Zero-cost, hands-on engineering cohorts for passionate student builders.' 
                : 'Custom software engineering, AI pipelines, corporate workshops, and vetted student talent.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-800 dark:hover:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        {!submitted && (
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-[#070B18] rounded-2xl border border-slate-200/80 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTab('student_course')}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'student_course'
                  ? 'bg-white dark:bg-[#00E5FF] text-indigo-900 dark:text-black shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Student Courses & Training</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('client_service')}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'client_service'
                  ? 'bg-white dark:bg-[#00E5FF] text-indigo-900 dark:text-black shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Hire Us / Client Services</span>
            </button>
          </div>
        )}

        {/* Success Confirmation View */}
        {submitted && submissionData ? (
          <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-500/20 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono-code font-bold px-3 py-1 rounded-full bg-indigo-50 dark:bg-cyan-500/20 text-indigo-700 dark:text-[#00E5FF]">
                Registration Code #{assignedRecordId}
              </span>
              <h4 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">
                {submissionData.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you <span className="font-bold text-indigo-700 dark:text-[#00E5FF]">{submissionData.recipientName}</span>! Your record is securely saved and dispatched to Next Gennect admissions.
              </p>
            </div>

            <div className="p-5 rounded-[24px] bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-left space-y-2.5 text-xs">
              <div className="font-mono-code font-bold text-indigo-700 dark:text-cyan-300 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Application Summary:
              </div>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 font-mono-code text-[11px]">
                {submissionData.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* LinkedIn Connect / Community Follow CTA */}
            <div className="p-4 rounded-2xl bg-[#0A66C2]/10 border border-[#0A66C2]/30 text-left flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-display font-bold text-slate-900 dark:text-white">
                    Connect on Next Gennect LinkedIn
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">
                    Follow for cohort announcements, workshop links & career opportunities.
                  </div>
                </div>
              </div>

              <a
                href={COMMUNITY_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-mono-code font-bold shrink-0 flex items-center gap-1.5 transition-colors"
              >
                <span>Follow Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {submissionData.mailtoUrl && (
                <a
                  href={submissionData.mailtoUrl}
                  className="flex-1 py-3 rounded-full bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-slate-700 hover:bg-indigo-100 dark:hover:bg-slate-700 text-xs font-bold font-mono-code flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Confirmation Email</span>
                </a>
              )}

              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-full bg-slate-900 hover:bg-indigo-700 dark:bg-[#00E5FF] dark:hover:bg-[#38BDF8] text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                Done / Back to Platform
              </button>
            </div>
          </div>
        ) : activeTab === 'student_course' ? (
          /* Student Course Application Form */
          <form onSubmit={handleStudentSubmit} className="space-y-4">
            {/* Selected Course Preview Card */}
            <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-code uppercase font-bold text-indigo-700 dark:text-cyan-400">
                  Target Course
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[10px] font-mono-code font-bold">
                  {selectedCourse.tuition}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-display font-bold text-slate-900 dark:text-white">
                {selectedCourse.title}
              </h4>
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono-code text-slate-600 dark:text-slate-300">
                <span>⏱ {selectedCourse.duration}</span>
                <span>•</span>
                <span>📍 {selectedCourse.mode}</span>
                <span>•</span>
                <span>🏷 {selectedCourse.cohort}</span>
              </div>
            </div>

            {/* Select Course dropdown */}
            <div>
              <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                Select Course / Training Track *
              </label>
              <select
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF] font-medium"
              >
                {TRAINING_COURSES.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title} ({course.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g. Asad Khan"
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  placeholder="name@university.edu.pk"
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                />
              </div>
            </div>

            {/* Phone and University */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  placeholder="+92 300 1234567"
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                  University / Institute
                </label>
                <input
                  type="text"
                  value={studentUniversity}
                  onChange={(e) => setStudentUniversity(e.target.value)}
                  placeholder="e.g. UET Peshawar / IMSciences / CECOS"
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                />
              </div>
            </div>

            {/* Level and GitHub */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                  Current Skill Level
                </label>
                <select
                  value={studentLevel}
                  onChange={(e) => setStudentLevel(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                >
                  <option value="Beginner">Beginner (Little to no experience)</option>
                  <option value="Intermediate">Intermediate (Have built basic apps/scripts)</option>
                  <option value="Advanced">Advanced (Seeking production mastery)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                  GitHub / LinkedIn URL (Optional)
                </label>
                <input
                  type="url"
                  value={studentGithub}
                  onChange={(e) => setStudentGithub(e.target.value)}
                  placeholder="https://github.com/yourhandle"
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                />
              </div>
            </div>

            {/* Motivation / Goals */}
            <div>
              <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                What do you hope to build or achieve in this cohort?
              </label>
              <textarea
                rows={2}
                value={studentGoals}
                onChange={(e) => setStudentGoals(e.target.value)}
                placeholder="Tell us what excites you about this track..."
                className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
              />
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-indigo-700 dark:bg-[#00E5FF] dark:hover:bg-[#38BDF8] text-white dark:text-black font-display font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Submit Free Course Application</span>
            </button>
          </form>
        ) : (
          /* Client Service Inquiry Form */
          <form onSubmit={handleClientSubmit} className="space-y-4">
            {/* Selected Service Card */}
            <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-900/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-code uppercase font-bold text-purple-700 dark:text-purple-300">
                  Selected Service Capability
                </span>
                <span className="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 text-[10px] font-mono-code font-bold">
                  {selectedService.category}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-display font-bold text-slate-900 dark:text-white">
                {selectedService.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                {selectedService.description}
              </p>
            </div>

            {/* Select Service Dropdown */}
            <div>
              <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                Service Domain *
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF] font-medium"
              >
                {CLIENT_SERVICES.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.title} ({srv.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Organization & Contact Person */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                  Organization / Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={clientOrgName}
                  onChange={(e) => setClientOrgName(e.target.value)}
                  placeholder="e.g. Apex Tech / Peshawar University"
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                  Contact Person Name *
                </label>
                <input
                  type="text"
                  required
                  value={clientContactName}
                  onChange={(e) => setClientContactName(e.target.value)}
                  placeholder="e.g. Dr. Tariq / Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                />
              </div>
            </div>

            {/* Business Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                  Official Business Email *
                </label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="contact@company.com"
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="+92 300 9876543"
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
                />
              </div>
            </div>

            {/* Estimated Timeline */}
            <div>
              <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                Expected Project Delivery Timeline
              </label>
              <select
                value={projectTimeline}
                onChange={(e) => setProjectTimeline(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
              >
                <option value="Urgent (Under 2 Weeks)">Urgent (Under 2 Weeks)</option>
                <option value="1 to 2 Months">Standard (1 to 2 Months)</option>
                <option value="Quarterly / Long-term Engagement">Quarterly / Long-term Retainer</option>
                <option value="Custom Workshop Date">Specific Event / Workshop Date</option>
              </select>
            </div>

            {/* Project Overview & Requirements */}
            <div>
              <label className="block text-xs font-mono-code text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                Project Scope & Deliverable Details *
              </label>
              <textarea
                required
                rows={3}
                value={projectScope}
                onChange={(e) => setProjectScope(e.target.value)}
                placeholder="Describe your software requirements, AI use-case, student hiring needs, or workshop goals..."
                className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-indigo-700 dark:bg-[#00E5FF] dark:hover:bg-[#38BDF8] text-white dark:text-black font-display font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Submit Service Request to Next Gennect</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
