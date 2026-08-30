import React from 'react';

import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  Globe,
  Linkedin,
  Network,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';

import jafarImage from '../assets/mentors/jaffar.jpg';
import atifImage from '../assets/mentors/atif.jpg';
import faizaImage from '../assets/mentors/faiza.jpg';
import talhaImage from '../assets/mentors/talha.jpg';
import taheerImage from '../assets/mentors/taheer.jpg';

interface Mentor {
  id: string;
  name: string;
  domain: string;
  title: string;
  shortBio: string;
  expertise: string[];
  image: string;
  linkedin: string;
  icon: React.ElementType;
}

const MENTORS: Mentor[] = [
  {
    id: 'jafar-ali',
    name: 'Jafar Ali',
    domain: 'Cybersecurity',
    title: 'Cybersecurity Instructor & Ethical Hacker',
    shortBio:
      'Cybersecurity professional and certified ethical hacker focused on practical security, vulnerability research, penetration testing, information security and security awareness.',
    expertise: [
      'Cybersecurity',
      'Ethical Hacking',
      'Penetration Testing',
      'Bug Bounty',
      'Vulnerability Research',
      'Network Security',
    ],
    image: jafarAli,
    linkedin: 'https://pk.linkedin.com/in/jafarali-cybersecurity',
    icon: ShieldCheck,
  },

  {
    id: 'muhammad-atif',
    name: 'Muhammad Atif',
    domain: 'Networking',
    title: 'Network Expert',
    shortBio:
      'Network technology expert supporting learners with practical knowledge of networking, infrastructure, routing, switching and real-world network operations.',
    expertise: [
      'Computer Networking',
      'Routing',
      'Switching',
      'Network Infrastructure',
      'Network Troubleshooting',
      'IT Infrastructure',
    ],
    image: muhammadAtif,
    linkedin: 'https://pk.linkedin.com/in/muhammadatif2000',
    icon: Network,
  },

  {
    id: 'faiza-ghaffar',
    name: 'Faiza Ghaffar',
    domain: 'Artificial Intelligence',
    title: 'AI Expert & Instructor',
    shortBio:
      'Artificial Intelligence specialist focused on AI automation, modern AI tools, practical learning and helping students understand and apply emerging AI technologies.',
    expertise: [
      'Artificial Intelligence',
      'AI Automation',
      'AI Tools',
      'LLMs',
      'AI Agents',
      'Machine Learning',
    ],
    image: faizaGhaffar,
    linkedin: 'https://pk.linkedin.com/in/faiza-ghaffar-31a995376',
    icon: BrainCircuit,
  },

  {
    id: 'talha-iqbal',
    name: 'Talha Iqbal',
    domain: 'Mobile App Development',
    title: 'Flutter & Android Expert',
    shortBio:
      'Flutter developer and trainer specializing in cross-platform mobile development, Dart, Firebase, APIs, responsive interfaces and practical application development.',
    expertise: [
      'Flutter',
      'Dart',
      'Android Development',
      'Firebase',
      'API Integration',
      'Mobile UI/UX',
    ],
    image: talhaIqbal,
    linkedin: 'https://pk.linkedin.com/in/talha-iqbal-689467280',
    icon: Smartphone,
  },

  {
    id: 'tatheer-hussain',
    name: 'S Tatheer Hussain',
    domain: 'Web Development',
    title: 'Web Development Expert & Instructor',
    shortBio:
      'Software engineer and web-development instructor focused on modern web development, application development, SaaS, software engineering and practical technical education.',
    expertise: [
      'Web Development',
      'Full-Stack Development',
      'SaaS',
      'Software Engineering',
      'Application Development',
      'Database Development',
    ],
    image: tatheerHussain,
    linkedin: 'https://pk.linkedin.com/in/tatheer-hussain',
    icon: Globe,
  },
];

export const MentorsSection: React.FC = () => {
  return (
    <section
      id="mentors"
      className="py-24 relative overflow-hidden bg-transparent"
    >
      {/* Background technology glow */}
      <div className="absolute top-20 left-[-120px] w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-[-120px] w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-[#00E5FF] text-[10px] font-mono-code font-bold uppercase tracking-[0.2em] border border-cyan-200 dark:border-cyan-500/20 mb-4">

            <Award className="w-4 h-4" />

            <span>INDUSTRY MENTORSHIP NETWORK</span>

          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">

            Learn From{' '}

            <span className="text-indigo-600 dark:text-[#00E5FF]">
              Industry Experts
            </span>

          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">

            Connect with experienced professionals across cybersecurity,
            networking, artificial intelligence, mobile development and
            modern web technologies.

          </p>

        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {MENTORS.map((mentor) => {
            const Icon = mentor.icon;

            return (
              <article
                key={mentor.id}
                className="group relative overflow-hidden rounded-[32px] bg-white dark:bg-[#0A0F1E] border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-2xl hover:border-cyan-400/40 dark:hover:border-cyan-400/40 transition-all duration-300"
              >

                {/* Photo */}
                <div className="relative h-[330px] overflow-hidden bg-slate-900">

                  <img
                    src={mentor.image}
                    alt={`${mentor.name} - ${mentor.domain} mentor`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Image gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Domain badge */}
                  <div className="absolute top-5 left-5">

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-400/30 text-[#00E5FF] font-mono-code text-[10px] font-bold uppercase tracking-wider">

                      <Icon className="w-3.5 h-3.5" />

                      {mentor.domain}

                    </div>

                  </div>

                  {/* Mentor name overlay */}
                  <div className="absolute bottom-5 left-5 right-5">

                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">

                      {mentor.name}

                    </h3>

                    <p className="text-xs sm:text-sm text-cyan-200 font-mono-code font-semibold mt-1">

                      {mentor.title}

                    </p>

                  </div>

                </div>

                {/* Content */}
                <div className="p-6">

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">

                    {mentor.shortBio}

                  </p>

                  {/* Expertise */}
                  <div className="flex flex-wrap gap-2 mt-5">

                    {mentor.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/90 text-[10px] font-mono-code text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">

                    <div className="flex items-center gap-2 text-[10px] font-mono-code uppercase tracking-wider text-slate-400">

                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                      <span>Mentor Network</span>

                    </div>

                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-cyan-300 hover:bg-[#00E5FF] hover:text-slate-950 transition-all duration-200"
                      aria-label={`View ${mentor.name} on LinkedIn`}
                    >

                      <Linkedin className="w-4 h-4" />

                      <span className="text-[10px] font-mono-code font-bold">
                        LinkedIn
                      </span>

                      <ArrowUpRight className="w-3.5 h-3.5" />

                    </a>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center">

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/70 dark:bg-[#0A0F1E]/80 border border-slate-200 dark:border-slate-800 shadow-sm">

            <Network className="w-5 h-5 text-[#00E5FF]" />

            <span className="text-xs sm:text-sm font-mono-code text-slate-600 dark:text-slate-300">

              Industry knowledge → Practical skills → Real-world projects

            </span>

          </div>

        </div>

      </div>
    </section>
  );
};
