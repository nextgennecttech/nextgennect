export type Theme = 'dark' | 'light';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  detailedBio: string;
  avatar: string;
  specialties: string[];
  gradient: string;
  badge: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface DomainRoadmapStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  keySkills: string[];
}

export interface TechDomain {
  id: string;
  title: string;
  shortCode: string;
  category: 'AI & Data' | 'Security & Systems' | 'Development' | 'Cloud & Hardware';
  description: string;
  detailedDescription: string;
  iconName: string;
  color: string;
  borderGlow: string;
  accentBg: string;
  tags: string[];
  activeProjects: number;
  membersCount: number;
  upcomingWorkshop: string;
  roadmap: DomainRoadmapStep[];
  featuredProject: {
    title: string;
    description: string;
    impact: string;
  };
}

export interface StatItem {
  id: string;
  value: number;
  displayValue: string;
  label: string;
  description: string;
  category: string;
  icon: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Workshop' | 'Hackathon' | 'CTF' | 'Masterclass' | 'Meetup';
  date: string;
  time: string;
  location: string;
  isOnline: boolean;
  instructor: string;
  instructorRole: string;
  registeredCount: number;
  maxCapacity: number;
  description: string;
  prerequisites: string[];
  tags: string[];
  status: 'Open' | 'Filling Fast' | 'Sold Out';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  university: string;
  city: string;
  avatar: string;
  quote: string;
  outcome: string;
  domain: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface FaqItem {
  id: string;
  category: 'General' | 'Workshops' | 'Membership' | 'Mentorship';
  question: string;
  answer: string;
}
