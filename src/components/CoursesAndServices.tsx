import React, { useState } from 'react';
import { TRAINING_COURSES, CLIENT_SERVICES, COMMUNITY_LINKS } from '../data/mockData';
import { TrainingCourse, ClientService } from '../types';
import { 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Award, 
  ArrowRight, 
  Code2, 
  Brain, 
  ShieldCheck, 
  Layers, 
  Building2, 
  Users, 
  Send,
  HelpCircle,
  FileCheck2,
  CalendarDays,
  Filter
} from 'lucide-react';

interface CoursesAndServicesProps {
  onApplyCourse: (course: TrainingCourse) => void;
  onRequestService: (service: ClientService) => void;
  onOpenGeneralModal: () => void;
}

export const CoursesAndServices: React.FC<CoursesAndServicesProps> = ({
  onApplyCourse,
  onRequestService,
  onOpenGeneralModal
}) => {
  const [activeTab, setActiveTab] = useState<'courses' | 'services'>('courses');
  const [selectedCoursePreview, setSelectedCoursePreview] = useState<TrainingCourse | null>(null);
  const [courseFilter, setCourseFilter] = useState<string>('All');

  const courseCategories = ['All', 'AI & Machine Learning', 'Cybersecurity', 'Web & App', 'Cloud & DevOps'];

  const filteredCourses = courseFilter === 'All'
    ? TRAINING_COURSES
    : TRAINING_COURSES.filter(c => {
        if (courseFilter === 'AI & Machine Learning') return c.trackName.includes('AI') || c.trackName.includes('Data');
        if (courseFilter === 'Cybersecurity') return c.trackName.includes('Cyber') || c.trackName.includes('Security');
        if (courseFilter === 'Web & App') return c.trackName.includes('Web') || c.trackName.includes('Stack');
        if (courseFilter === 'Cloud & DevOps') return c.trackName.includes('Cloud') || c.trackName.includes('DevOps') || c.trackName.includes('IoT');
        return true;
      });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'Brain': return Brain;
      case 'GraduationCap': return GraduationCap;
      case 'Users': return Users;
      case 'ShieldCheck': return ShieldCheck;
      default: return Layers;
    }
  };

  return (
    <section id="courses" className="py-16 sm:py-24 relative overflow-hidden bg-slate-100/40 dark:bg-[#070B18]/40 backdrop-blur-[2px] transition-colors duration-300">
      {/* Visual background ambient glow */}
      <div className="absolute top-1/4 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-cyan-500/10 text-indigo-700 dark:text-[#00E5FF] text-[10px] font-mono-code font-bold uppercase tracking-widest border border-indigo-200/80 dark:border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LEARN OR COLLABORATE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Courses, Training & <span className="text-indigo-600 dark:text-[#00E5FF]">Client Services</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal px-2">
            Whether you are a student striving to master deep tech through zero-cost bootcamps, or an organization looking to build custom software or hire top talent — we make it seamless.
          </p>

          {/* Mode Switcher Tabs - Fluid layout that automatically scales on mobile, laptop, and desktop */}
          <div className="w-full max-w-md mx-auto grid grid-cols-2 p-1.5 rounded-full bg-white dark:bg-[#0A0F1E] border border-slate-300 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => setActiveTab('courses')}
              className={`py-2 sm:py-2.5 px-3 sm:px-6 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                activeTab === 'courses'
                  ? 'bg-indigo-600 dark:bg-[#00E5FF] text-white dark:text-black shadow-md'
                  : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">For Students</span>
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`py-2 sm:py-2.5 px-3 sm:px-6 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                activeTab === 'services'
                  ? 'bg-indigo-600 dark:bg-[#00E5FF] text-white dark:text-black shadow-md'
                  : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">For Clients</span>
            </button>
          </div>

          {/* Quick Track Category Filter Pills for Student Courses */}
          {activeTab === 'courses' && (
            <div className="overflow-x-auto no-scrollbar py-1 flex sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 sm:gap-2 px-1">
              {courseCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCourseFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-mono-code font-semibold tracking-wide whitespace-nowrap transition-all ${
                    courseFilter === cat
                      ? 'bg-slate-900 dark:bg-[#00E5FF] text-white dark:text-black shadow-sm font-bold'
                      : 'bg-white/80 dark:bg-[#0C1224] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/90 dark:border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tab 1: Student Courses & Bootcamps Grid */}
        {activeTab === 'courses' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7 lg:gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="rounded-[30px] sm:rounded-[36px] bg-white dark:bg-[#0A0F1E] border border-slate-200/90 dark:border-slate-800/90 p-5 sm:p-7 lg:p-8 shadow-sm hover:shadow-md hover:border-indigo-400/50 dark:hover:border-cyan-400/50 transition-all flex flex-col justify-between space-y-6 bento-card group"
                >
                  <div className="space-y-4 sm:space-y-5">
                    {/* Header: Track & Tuition Badge */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-indigo-50 dark:bg-cyan-500/15 text-indigo-700 dark:text-[#00E5FF] border border-indigo-200 dark:border-cyan-500/30">
                        {course.trackName}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300">
                        {course.tuition}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-[#00E5FF] transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-[11px] font-mono-code">
                      <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                        <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400 shrink-0" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                        <span className="truncate">{course.mode}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 col-span-2 sm:col-span-1">
                        <CalendarDays className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{course.cohort}</span>
                      </div>
                    </div>

                    {/* Key Curriculum Highlights */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono-code uppercase font-bold text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                        <FileCheck2 className="w-3.5 h-3.5 text-indigo-600 dark:text-[#00E5FF]" /> Key Curriculum Highlights
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        {course.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-[#00E5FF] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Schedule & Level */}
                    <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs font-mono-code">
                      <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>Schedule: <strong className="text-slate-900 dark:text-white">{course.schedule}</strong></span>
                      </div>
                      <div className="text-indigo-700 dark:text-cyan-400 font-semibold">
                        Level: {course.level}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <button
                      onClick={() => onApplyCourse(course)}
                      className="flex-1 py-3 px-4 rounded-full bg-slate-900 hover:bg-indigo-600 dark:bg-[#00E5FF] dark:hover:bg-[#38BDF8] text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Apply for Free Seat</span>
                    </button>

                    <button
                      onClick={() => setSelectedCoursePreview(course)}
                      className="py-3 px-4 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Syllabus</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="p-6 sm:p-8 rounded-[30px] sm:rounded-[36px] bg-indigo-50/80 dark:bg-[#0B132B] border border-indigo-100 dark:border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1.5 text-center md:text-left">
                <h4 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
                  Need a Customized Student Roadmap or University Group Registration?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                  We conduct dedicated training bootcamps for student computer societies, universities, and polytechnic institutes in Khyber Pakhtunkhwa.
                </p>
              </div>

              <button
                onClick={onOpenGeneralModal}
                className="px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 dark:bg-[#00E5FF] dark:hover:bg-[#38BDF8] text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 flex items-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Register Group or Society</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Client Services & B2B Solutions */}
        {activeTab === 'services' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {CLIENT_SERVICES.map((service) => {
                const Icon = getServiceIcon(service.iconName);
                return (
                  <div
                    key={service.id}
                    className="rounded-[30px] sm:rounded-[36px] bg-white dark:bg-[#0A0F1E] border border-slate-200/90 dark:border-slate-800/90 p-5 sm:p-7 shadow-sm hover:shadow-md hover:border-indigo-400/50 dark:hover:border-cyan-400/50 transition-all flex flex-col justify-between space-y-6 bento-card group"
                  >
                    <div className="space-y-4">
                      {/* Top icon and tag */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-cyan-500/10 text-indigo-700 dark:text-[#00E5FF] border border-indigo-100 dark:border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {service.category}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-[#00E5FF] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Deliverables list */}
                      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                        <span className="text-[11px] font-mono-code font-bold uppercase text-slate-900 dark:text-slate-200">
                          Included Deliverables:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                          {service.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Turnaround & Ideal For */}
                      <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-[11px] font-mono-code space-y-1">
                        <div className="text-slate-700 dark:text-slate-300">
                          <span className="font-bold text-slate-900 dark:text-white">Turnaround:</span> {service.turnaround}
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 truncate">
                          <span className="font-bold text-slate-900 dark:text-white">Ideal for:</span> {service.idealFor}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                      <button
                        onClick={() => onRequestService(service)}
                        className="w-full py-3 rounded-full bg-slate-900 hover:bg-indigo-600 dark:bg-[#00E5FF] dark:hover:bg-[#38BDF8] text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 active:scale-95"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Request Service / Quote</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Organization Help Callout */}
            <div className="p-6 sm:p-8 rounded-[30px] sm:rounded-[36px] bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-cyan-500/20 text-[#00E5FF] text-[10px] font-mono-code font-bold uppercase">
                  <Building2 className="w-3.5 h-3.5" /> Direct Enterprise Dispatch
                </div>
                <h4 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Looking to Sponsor or Host a Custom Hackathon?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Contact our operations and executive team directly at <a href={`mailto:${COMMUNITY_LINKS.email}`} className="text-[#00E5FF] underline font-mono-code">{COMMUNITY_LINKS.email}</a> for custom SLA contracts and campus collaborations.
                </p>
              </div>

              <a
                href={`mailto:${COMMUNITY_LINKS.email}?subject=Partnership%20%26%20Service%20Inquiry%20-%20Next%20Gennect`}
                className="px-6 py-3.5 rounded-full bg-[#00E5FF] hover:bg-[#38BDF8] text-black font-display font-bold text-xs uppercase tracking-wider transition-all shadow-lg shrink-0 flex items-center gap-2 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Email Us Directly</span>
              </a>
            </div>
          </div>
        )}

      </div>

      {/* Course Detailed Syllabus Preview Modal */}
      {selectedCoursePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90dvh] overflow-y-auto bg-white dark:bg-[#0A0F1E] text-slate-900 dark:text-white rounded-[28px] sm:rounded-[32px] border border-slate-200/90 dark:border-slate-800 p-5 sm:p-8 space-y-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-200/90 dark:border-slate-800">
              <div className="space-y-1">
                <span className="text-[10px] font-mono-code uppercase font-bold text-indigo-700 dark:text-cyan-400">
                  {selectedCoursePreview.trackName} • {selectedCoursePreview.cohort}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                  {selectedCoursePreview.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedCoursePreview(null)}
                className="text-slate-400 hover:text-slate-800 dark:hover:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            {/* Course Overview */}
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedCoursePreview.description}
            </p>

            {/* Curriculum Breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono-code uppercase font-bold text-indigo-700 dark:text-cyan-400">
                12-Week Modular Curriculum Breakdown
              </h4>
              <div className="space-y-2">
                {selectedCoursePreview.curriculum.map((mod, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 font-medium flex items-center gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-cyan-500/20 text-indigo-700 dark:text-cyan-300 text-xs font-mono-code font-bold flex items-center justify-center shrink-0">
                      {mIdx + 1}
                    </span>
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites & Certification */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <span className="text-[10px] font-mono-code uppercase font-bold text-slate-500">Prerequisites</span>
                <p className="text-xs text-slate-700 dark:text-slate-300">{selectedCoursePreview.prerequisites}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <span className="text-[10px] font-mono-code uppercase font-bold text-slate-500">Certification</span>
                <p className="text-xs text-slate-700 dark:text-slate-300">{selectedCoursePreview.certification}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200/90 dark:border-slate-800">
              <button
                onClick={() => setSelectedCoursePreview(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const course = selectedCoursePreview;
                  setSelectedCoursePreview(null);
                  onApplyCourse(course);
                }}
                className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-indigo-600 dark:bg-[#00E5FF] text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider transition-all"
              >
                Apply for this Course
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
