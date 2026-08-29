// Next Gennect Centralized Student & Registration Records Manager
// Handles automatic local persistence, CSV exports, in-app tracking, and email dispatches

export type RecordType = 
  | 'course_application'
  | 'event_seat_reservation'
  | 'community_membership'
  | 'client_service_request'
  | 'contact_inquiry';

export type RecordStatus = 
  | 'New'
  | 'Seat Confirmed'
  | 'Under Review'
  | 'Contacted'
  | 'Enrolled'
  | 'Archived';

export interface LeadRecord {
  id: string;
  type: RecordType;
  fullName: string;
  email: string;
  phone?: string;
  universityOrOrg?: string;
  trackOrTopic?: string;
  courseTitle?: string;
  eventTitle?: string;
  serviceTitle?: string;
  experienceLevel?: string;
  notesOrScope?: string;
  githubUrl?: string;
  status: RecordStatus;
  createdAt: string; // ISO string
}

const STORAGE_KEY = 'nextgennect_leads_and_registrations_v1';
const OFFICIAL_EMAILS = ['nextgennect.tech@gmail.com', 'm.atif.iotasolutions.io@gmail.com'];

// Initial sample records to demonstrate instant functionality
const INITIAL_DEMO_RECORDS: LeadRecord[] = [
  {
    id: 'NG-APP-1001',
    type: 'course_application',
    fullName: 'Aliyan Shah',
    email: 'aliyan.shah@example.com',
    phone: '+92 300 1234567',
    universityOrOrg: 'UET Peshawar (Computer Systems)',
    trackOrTopic: 'Full-Stack Software Engineering',
    courseTitle: 'Modern Full-Stack Engineering & Microservices Bootcamp',
    experienceLevel: 'Intermediate',
    notesOrScope: 'Wants to master distributed backends and deploy production apps.',
    githubUrl: 'https://github.com/aliyan-shah',
    status: 'Seat Confirmed',
    createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
  },
  {
    id: 'NG-RSVP-2002',
    type: 'event_seat_reservation',
    fullName: 'Hamza Tariq',
    email: 'hamza.tariq@example.pk',
    phone: '+92 312 9876543',
    universityOrOrg: 'CECOS University Peshawar',
    trackOrTopic: 'Cybersecurity & Defense',
    eventTitle: 'Peshawar CTF: Capture The Flag Live Cyber Defense',
    experienceLevel: 'Beginner',
    status: 'Seat Confirmed',
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
  },
  {
    id: 'NG-APP-1003',
    type: 'course_application',
    fullName: 'Ayesha Bibi',
    email: 'ayesha.ml@example.com',
    phone: '+92 333 4567890',
    universityOrOrg: 'IMSciences Peshawar',
    trackOrTopic: 'Applied AI & Machine Learning',
    courseTitle: 'Applied AI & Machine Learning Fellowship (LLMs & Vision)',
    experienceLevel: 'Intermediate',
    notesOrScope: 'Interested in fine-tuning models and building medical AI assistants.',
    githubUrl: 'https://github.com/ayesha-ai',
    status: 'New',
    createdAt: new Date(Date.now() - 3600000 * 6).toISOString(),
  },
  {
    id: 'NG-SVC-3004',
    type: 'client_service_request',
    fullName: 'Kamran Durrani',
    email: 'kamran@durranitech.io',
    phone: '+92 301 5554321',
    universityOrOrg: 'Durrani Digital Systems',
    serviceTitle: 'Full-Stack Web & Mobile Engineering',
    notesOrScope: 'Looking to build a medical analytics SaaS dashboard with microservices.',
    status: 'Under Review',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
  }
];

export const getStoredRecords = (): LeadRecord[] => {
  if (typeof window === 'undefined') return INITIAL_DEMO_RECORDS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DEMO_RECORDS));
      return INITIAL_DEMO_RECORDS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_DEMO_RECORDS;
  } catch {
    return INITIAL_DEMO_RECORDS;
  }
};

export const saveNewRecord = async (
  recordInput: Omit<LeadRecord, 'id' | 'createdAt' | 'status'> & { status?: RecordStatus }
): Promise<LeadRecord> => {
  const current = getStoredRecords();
  const prefix = recordInput.type === 'course_application' ? 'NG-APP-'
    : recordInput.type === 'event_seat_reservation' ? 'NG-RSVP-'
    : recordInput.type === 'client_service_request' ? 'NG-SVC-'
    : 'NG-MBR-';

  const newRecord: LeadRecord = {
    ...recordInput,
    id: `${prefix}${Math.floor(1000 + Math.random() * 9000)}`,
    status: recordInput.status || 'New',
    createdAt: new Date().toISOString(),
  };

  const updated = [newRecord, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('nextgennect_record_added', { detail: newRecord }));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }

  // Attempt real-time email dispatch / webhook ping in background
  dispatchNotificationToEmail(newRecord);

  return newRecord;
};

export const updateRecordStatus = (id: string, newStatus: RecordStatus): LeadRecord[] => {
  const current = getStoredRecords();
  const updated = current.map(r => r.id === id ? { ...r, status: newStatus } : r);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('nextgennect_record_updated', { detail: { id, newStatus } }));
  } catch (e) {
    console.error('Failed to update record status', e);
  }
  return updated;
};

export const deleteRecord = (id: string): LeadRecord[] => {
  const current = getStoredRecords();
  const updated = current.filter(r => r.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('nextgennect_record_deleted', { detail: id }));
  } catch (e) {
    console.error('Failed to delete record', e);
  }
  return updated;
};

export const clearAllRecords = (): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    window.dispatchEvent(new CustomEvent('nextgennect_records_cleared'));
  } catch (e) {
    console.error('Failed to clear records', e);
  }
};

export const exportRecordsToCSV = (): void => {
  const records = getStoredRecords();
  if (records.length === 0) return;

  const headers = [
    'Record ID',
    'Type',
    'Status',
    'Created At',
    'Full Name',
    'Email Address',
    'Phone',
    'University / Org',
    'Track / Subject',
    'Course / Event / Service',
    'Experience Level',
    'GitHub / Portfolio',
    'Notes / Details'
  ];

  const escapeCSV = (val?: string) => {
    if (!val) return '""';
    const escaped = val.replace(/"/g, '""');
    return `"${escaped}"`;
  };

  const rows = records.map(r => [
    escapeCSV(r.id),
    escapeCSV(r.type),
    escapeCSV(r.status),
    escapeCSV(new Date(r.createdAt).toLocaleString()),
    escapeCSV(r.fullName),
    escapeCSV(r.email),
    escapeCSV(r.phone || ''),
    escapeCSV(r.universityOrOrg || ''),
    escapeCSV(r.trackOrTopic || ''),
    escapeCSV(r.courseTitle || r.eventTitle || r.serviceTitle || ''),
    escapeCSV(r.experienceLevel || ''),
    escapeCSV(r.githubUrl || ''),
    escapeCSV(r.notesOrScope || '')
  ].join(','));

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `Next_Gennect_Registrations_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Background Email Notification Dispatcher
export const dispatchNotificationToEmail = async (record: LeadRecord): Promise<boolean> => {
  try {
    const payload = {
      _subject: `[Next Gennect Alert] New ${record.type.replace(/_/g, ' ').toUpperCase()}: ${record.fullName}`,
      _replyto: record.email,
      fullName: record.fullName,
      email: record.email,
      phone: record.phone || 'N/A',
      universityOrOrg: record.universityOrOrg || 'N/A',
      recordType: record.type,
      recordId: record.id,
      trackOrTopic: record.trackOrTopic || 'N/A',
      courseTitle: record.courseTitle || 'N/A',
      eventTitle: record.eventTitle || 'N/A',
      serviceTitle: record.serviceTitle || 'N/A',
      experienceLevel: record.experienceLevel || 'N/A',
      notes: record.notesOrScope || 'N/A',
      submissionTime: new Date(record.createdAt).toLocaleString(),
      adminNotice: 'Submitted via Next Gennect Web Portal - Peshawar Tech Ecosystem'
    };

    // Use FormSubmit AJAX endpoint for reliable zero-backend email delivery to official inbox
    await fetch('https://formsubmit.co/ajax/nextgennect.tech@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(() => {
      // Fallback silently if offline or blocked by adblockers; record is already safely stored in local persistence
    });

    return true;
  } catch (error) {
    console.log('Background email dispatch note:', error);
    return false;
  }
};

// Generates a pre-formatted mailto link if user wants to directly open email client
export const generateMailtoLink = (record: LeadRecord): string => {
  const subject = encodeURIComponent(`[Next Gennect ${record.type.replace(/_/g, ' ')}] ${record.fullName} - ${record.id}`);
  const body = encodeURIComponent(
    `Hello Next Gennect Admissions Team,\n\n` +
    `Registration Details:\n` +
    `----------------------------------------\n` +
    `Record ID: ${record.id}\n` +
    `Type: ${record.type}\n` +
    `Full Name: ${record.fullName}\n` +
    `Email: ${record.email}\n` +
    `Phone: ${record.phone || 'N/A'}\n` +
    `University / Org: ${record.universityOrOrg || 'N/A'}\n` +
    `Selected Program: ${record.courseTitle || record.eventTitle || record.serviceTitle || record.trackOrTopic || 'General Registration'}\n` +
    `Experience: ${record.experienceLevel || 'N/A'}\n` +
    `Notes: ${record.notesOrScope || 'N/A'}\n` +
    `Date: ${new Date(record.createdAt).toLocaleString()}\n\n` +
    `Looking forward to starting with Next Gennect!`
  );

  return `mailto:nextgennect.tech@gmail.com?cc=m.atif.iotasolutions.io@gmail.com&subject=${subject}&body=${body}`;
};
