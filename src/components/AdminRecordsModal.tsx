import React, { useState, useEffect } from 'react';
import { 
  LeadRecord, 
  RecordType, 
  RecordStatus, 
  getStoredRecords, 
  updateRecordStatus, 
  deleteRecord, 
  exportRecordsToCSV, 
  clearAllRecords 
} from '../services/recordManager';
import { 
  X, 
  Search, 
  Download, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  Mail, 
  Phone, 
  GraduationCap, 
  Calendar, 
  Briefcase, 
  Users, 
  ExternalLink, 
  ShieldAlert, 
  Sparkles,
  Filter,
  Copy,
  Check
} from 'lucide-react';

interface AdminRecordsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminRecordsModal: React.FC<AdminRecordsModalProps> = ({ isOpen, onClose }) => {
  const [records, setRecords] = useState<LeadRecord[]>([]);
  const [filterType, setFilterType] = useState<'all' | RecordType>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | RecordStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedRecord, setSelectedRecord] = useState<LeadRecord | null>(null);

  const loadData = () => {
    setRecords(getStoredRecords());
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }

    const handleAdded = () => loadData();
    const handleUpdated = () => loadData();
    const handleDeleted = () => loadData();
    const handleCleared = () => loadData();

    window.addEventListener('nextgennect_record_added', handleAdded);
    window.addEventListener('nextgennect_record_updated', handleUpdated);
    window.addEventListener('nextgennect_record_deleted', handleDeleted);
    window.addEventListener('nextgennect_records_cleared', handleCleared);

    return () => {
      window.removeEventListener('nextgennect_record_added', handleAdded);
      window.removeEventListener('nextgennect_record_updated', handleUpdated);
      window.removeEventListener('nextgennect_record_deleted', handleDeleted);
      window.removeEventListener('nextgennect_records_cleared', handleCleared);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredRecords = records.filter((rec) => {
    const matchesType = filterType === 'all' || rec.type === filterType;
    const matchesStatus = statusFilter === 'all' || rec.status === statusFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      !searchQuery ||
      rec.fullName.toLowerCase().includes(q) ||
      rec.email.toLowerCase().includes(q) ||
      (rec.phone && rec.phone.toLowerCase().includes(q)) ||
      (rec.universityOrOrg && rec.universityOrOrg.toLowerCase().includes(q)) ||
      (rec.courseTitle && rec.courseTitle.toLowerCase().includes(q)) ||
      (rec.eventTitle && rec.eventTitle.toLowerCase().includes(q)) ||
      (rec.trackOrTopic && rec.trackOrTopic.toLowerCase().includes(q));

    return matchesType && matchesStatus && matchesSearch;
  });

  const handleStatusChange = (id: string, newStatus: RecordStatus) => {
    const updated = updateRecordStatus(id, newStatus);
    setRecords(updated);
    if (selectedRecord && selectedRecord.id === id) {
      setSelectedRecord({ ...selectedRecord, status: newStatus });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this record?')) {
      const updated = deleteRecord(id);
      setRecords(updated);
      if (selectedRecord?.id === id) setSelectedRecord(null);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const countCourseApps = records.filter(r => r.type === 'course_application').length;
  const countSeatReservations = records.filter(r => r.type === 'event_seat_reservation').length;
  const countClients = records.filter(r => r.type === 'client_service_request').length;
  const countCommunity = records.filter(r => r.type === 'community_membership').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-white dark:bg-[#070B19] text-slate-900 dark:text-white rounded-[32px] sm:rounded-[40px] border border-slate-200/90 dark:border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="p-6 sm:p-8 border-b border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0A0F24]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-cyan-500/20 text-indigo-700 dark:text-[#00E5FF] text-[10px] font-mono-code font-bold uppercase tracking-wider border border-indigo-200/80 dark:border-cyan-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Next Gennect Official Portal
              </span>
              <span className="text-xs font-mono-code text-slate-600 dark:text-slate-400">
                Live Records: <strong className="text-slate-900 dark:text-white">{records.length}</strong>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
              Student Applications & <span className="text-indigo-600 dark:text-[#00E5FF]">Seat Registry</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Track course applicants, event seat reservations, inquiries, and export records directly for the admissions team.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={exportRecordsToCSV}
              className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono-code font-bold flex items-center gap-2 shadow-sm transition-all"
              title="Download CSV for Google Sheets"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV (Excel / Sheets)</span>
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Metric Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:px-8 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#070B19]">
          <div className="p-3 rounded-2xl bg-indigo-50/60 dark:bg-cyan-950/20 border border-indigo-100 dark:border-cyan-500/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 dark:bg-[#00E5FF] text-white dark:text-black flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-display font-extrabold text-slate-900 dark:text-white">{countCourseApps}</div>
              <div className="text-[11px] font-mono-code text-slate-600 dark:text-slate-400">Course Applicants</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-500/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-display font-extrabold text-slate-900 dark:text-white">{countSeatReservations}</div>
              <div className="text-[11px] font-mono-code text-slate-600 dark:text-slate-400">Reserved Event Seats</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-500/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-display font-extrabold text-slate-900 dark:text-white">{countClients}</div>
              <div className="text-[11px] font-mono-code text-slate-600 dark:text-slate-400">Client Inquiries</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-100 dark:border-cyan-500/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-display font-extrabold text-slate-900 dark:text-white">{countCommunity}</div>
              <div className="text-[11px] font-mono-code text-slate-600 dark:text-slate-400">Community Members</div>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="p-3.5 sm:p-4 sm:px-8 border-b border-slate-200/80 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 bg-slate-50/50 dark:bg-[#0A0F24]/40">
          {/* Type Tab Filter - Horizontally scrollable on mobile */}
          <div className="overflow-x-auto no-scrollbar flex items-center gap-1.5 w-full md:w-auto pb-1 md:pb-0">
            {[
              { id: 'all', label: 'All Records' },
              { id: 'course_application', label: 'Courses' },
              { id: 'event_seat_reservation', label: 'Event Seats' },
              { id: 'client_service_request', label: 'Client Requests' },
              { id: 'community_membership', label: 'Community' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id as any)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono-code whitespace-nowrap transition-all ${
                  filterType === tab.id
                    ? 'bg-slate-900 dark:bg-[#00E5FF] text-white dark:text-black font-bold shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search bar & status filter */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search student, email, track..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-[#00E5FF]"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono-code text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="New">New</option>
              <option value="Seat Confirmed">Seat Confirmed</option>
              <option value="Under Review">Under Review</option>
              <option value="Contacted">Contacted</option>
              <option value="Enrolled">Enrolled</option>
            </select>
          </div>
        </div>

        {/* Table & Record List Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-4">
          {filteredRecords.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">
                No matching registration records found
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                New submissions from student applications, course registrations, and event seat RSVPs will automatically appear here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {filteredRecords.map((rec) => {
                const isSelected = selectedRecord?.id === rec.id;
                const isSeat = rec.type === 'event_seat_reservation';
                const isCourse = rec.type === 'course_application';
                const isClient = rec.type === 'client_service_request';

                return (
                  <div
                    key={rec.id}
                    className={`p-5 rounded-3xl border transition-all ${
                      isSelected
                        ? 'border-indigo-600 dark:border-[#00E5FF] bg-indigo-50/40 dark:bg-cyan-950/20 shadow-md'
                        : 'border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0A0F22] hover:border-slate-400 dark:hover:border-slate-700 shadow-sm'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      
                      {/* Left: Applicant Identity & Program */}
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-mono-code font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                            {rec.id}
                          </span>

                          <span className={`text-[10px] font-mono-code font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                            isCourse ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-800'
                            : isSeat ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                            : isClient ? 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                            : 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800'
                          }`}>
                            {isCourse ? 'Course Application' : isSeat ? 'Reserved Seat (Event)' : isClient ? 'Client Request' : 'Community Member'}
                          </span>

                          <span className="text-[11px] font-mono-code text-slate-500">
                            📅 {new Date(rec.createdAt).toLocaleDateString()} at {new Date(rec.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-baseline gap-2">
                          <h4 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                            {rec.fullName}
                          </h4>
                          {rec.universityOrOrg && (
                            <span className="text-xs text-slate-600 dark:text-slate-400 font-mono-code">
                              • {rec.universityOrOrg}
                            </span>
                          )}
                        </div>

                        <div className="text-xs font-mono-code font-semibold text-indigo-700 dark:text-[#00E5FF] flex items-center gap-1.5">
                          {isCourse && <GraduationCap className="w-3.5 h-3.5" />}
                          {isSeat && <Calendar className="w-3.5 h-3.5" />}
                          {isClient && <Briefcase className="w-3.5 h-3.5" />}
                          <span>{rec.courseTitle || rec.eventTitle || rec.serviceTitle || rec.trackOrTopic || 'General Registration'}</span>
                        </div>

                        {rec.notesOrScope && (
                          <p className="text-xs text-slate-600 dark:text-slate-300 italic line-clamp-2 bg-slate-50 dark:bg-slate-900/80 p-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                            &ldquo;{rec.notesOrScope}&rdquo;
                          </p>
                        )}
                      </div>

                      {/* Right: Contact details, Status changer & Quick Actions */}
                      <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 shrink-0">
                        
                        {/* Status selector */}
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono-code text-slate-500">Status:</span>
                          <select
                            value={rec.status}
                            onChange={(e) => handleStatusChange(rec.id, e.target.value as RecordStatus)}
                            className={`text-xs font-mono-code font-bold px-3 py-1 rounded-full border focus:outline-none transition-colors ${
                              rec.status === 'Seat Confirmed' || rec.status === 'Enrolled'
                                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-700'
                                : rec.status === 'Under Review'
                                ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-700'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700'
                            }`}
                          >
                            <option value="New">New</option>
                            <option value="Seat Confirmed">Seat Confirmed</option>
                            <option value="Under Review">Under Review</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Enrolled">Enrolled</option>
                            <option value="Archived">Archived</option>
                          </select>
                        </div>

                        {/* Quick Contact & Action Buttons */}
                        <div className="flex items-center gap-1.5">
                          <a
                            href={`mailto:${rec.email}?subject=${encodeURIComponent(`[Next Gennect] Your Application for ${rec.courseTitle || rec.eventTitle || 'Community'}`)}`}
                            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-cyan-500/20 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-[#00E5FF] transition-colors"
                            title={`Send Email to ${rec.email}`}
                          >
                            <Mail className="w-4 h-4" />
                          </a>

                          {rec.phone && (
                            <a
                              href={`https://wa.me/${rec.phone.replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400 transition-colors"
                              title={`WhatsApp ${rec.phone}`}
                            >
                              <Phone className="w-4 h-4" />
                            </a>
                          )}

                          <button
                            onClick={() => handleCopy(JSON.stringify(rec, null, 2), rec.id)}
                            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
                            title="Copy Applicant Data as JSON"
                          >
                            {copiedId === rec.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                          </button>

                          <button
                            onClick={() => handleDelete(rec.id)}
                            className="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-900/60 text-red-600 dark:text-red-400 transition-colors"
                            title="Delete Record"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer / Official Dispatch Details */}
        <div className="p-4 sm:px-8 border-t border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-[#070B19] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-code text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Auto-synced to Next Gennect Admissions: <strong className="text-slate-900 dark:text-white">nextgennect.tech@gmail.com</strong></span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportRecordsToCSV}
              className="text-indigo-600 dark:text-cyan-400 hover:underline font-bold"
            >
              📥 Download Full CSV Spreadsheet
            </button>
            <span>•</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-slate-900 hover:bg-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold transition-all"
            >
              Close Console
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
