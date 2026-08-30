import React from 'react';

import jaffarImage from '../assets/mentors/jaffar.png';
import atifImage from '../assets/mentors/atif.png';
import faizaImage from '../assets/mentors/faiza.png';
import talhaImage from '../assets/mentors/talha.png';
import tatheerImage from '../assets/mentors/tatheer.png';

interface Mentor {
  name: string;
  role: string;
  domain: string;
  description: string;
  image: string;
  linkedin?: string;
}

const mentors: Mentor[] = [
  {
    name: 'Jaffar Ali',
    role: 'Cybersecurity Instructor',
    domain: 'Cybersecurity',
    description:
      'Cybersecurity professional and instructor focused on security awareness, ethical hacking, network security, and practical cybersecurity skills.',
    image: jaffarImage,
    linkedin: 'https://pk.linkedin.com/in/jafarali-cybersecurity',
  },
  {
    name: 'Muhammad Atif',
    role: 'Network Expert',
    domain: 'Networking',
    description:
      'Networking professional with practical experience in network infrastructure, routing, switching, network security, and enterprise technologies.',
    image: atifImage,
    linkedin: 'https://pk.linkedin.com/in/muhammadatif2000',
  },
  {
    name: 'Faiza Ghaffar',
    role: 'AI Expert',
    domain: 'Artificial Intelligence',
    description:
      'AI-focused professional helping learners understand artificial intelligence, machine learning, modern AI technologies, and practical applications.',
    image: faizaImage,
    linkedin: 'https://pk.linkedin.com/in/faiza-ghaffar-31a995376',
  },
  {
    name: 'Talha Iqbal',
    role: 'Flutter & Android Expert',
    domain: 'Mobile Development',
    description:
      'Mobile application developer specializing in Flutter and Android development with a focus on building practical and modern applications.',
    image: talhaImage,
    linkedin: 'https://pk.linkedin.com/in/talha-iqbal-689467280',
  },
  {
    name: 'Tatheer Hussain',
    role: 'Web Development Expert',
    domain: 'Web Development',
    description:
      'Web development professional focused on modern web technologies, responsive interfaces, frontend development, and practical web solutions.',
    image: tatheerImage,
    linkedin: 'https://pk.linkedin.com/in/tatheer-hussain',
  },
];

export const MentorsSection: React.FC = () => {
  return (
    <section
      id="mentors"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            OUR EXPERT MENTORS
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            Learn From{' '}
            <span className="text-cyan-400">
              Industry Experts
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-600 dark:text-slate-400">
            Connect with experienced professionals and learn practical,
            industry-focused skills across cybersecurity, networking,
            artificial intelligence, mobile development, and web development.
          </p>

        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {mentors.map((mentor) => (
            <article
              key={mentor.name}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40"
            >

              {/* Photo */}
              <div className="relative h-80 overflow-hidden bg-slate-100 dark:bg-slate-800">

                <img
                  src={mentor.image}
                  alt={`${mentor.name} - ${mentor.role}`}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Domain */}
                <div className="absolute top-5 left-5">
                  <span className="inline-flex px-3 py-1.5 rounded-full bg-cyan-400/90 text-slate-950 text-xs font-bold shadow-lg">
                    {mentor.domain}
                  </span>
                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {mentor.name}
                </h3>

                <p className="mt-1 text-cyan-400 font-semibold">
                  {mentor.role}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {mentor.description}
                </p>

                {/* LinkedIn */}
                {mentor.linkedin && (
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 font-semibold text-sm transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950"
                  >
                    View LinkedIn
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default MentorsSection;
