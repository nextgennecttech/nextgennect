import React from 'react';
import { TeamMember } from '../types';
import { BrandLogo } from './BrandLogo';

interface ExecutivePosterProps {
  member: TeamMember;
  className?: string;
  variant?: 'card' | 'poster';
}

export const ExecutivePoster: React.FC<ExecutivePosterProps> = ({ 
  member, 
  className = '',
  variant = 'card' 
}) => {
  // Select matching details
  const isAliyan = member.id === 'aliyan-shah';
  const isFatima = member.id === 'fatima-zahra';
  const isAtif = member.id === 'muhammad-atif';

  return (
    <div className={`relative w-full overflow-hidden rounded-[28px] bg-[#EEF2F6] dark:bg-[#0B1124] border border-slate-200/80 dark:border-slate-800 p-5 flex flex-col items-center justify-between shadow-md select-none ${className}`}>
      {/* Background playful cyan doodle curves matching the official media */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-right doodle loop */}
        <path
          d="M 310 0 C 340 30 390 60 380 100 C 370 140 330 110 335 80 C 340 50 380 40 400 60"
          stroke="#00E5FF"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Bottom-left doodle loop */}
        <path
          d="M 0 350 C 40 330 70 380 60 395 C 50 410 20 400 20 375 C 20 350 70 320 100 340"
          stroke="#00E5FF"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      {/* Top Header: Next Gennect Brand Logo */}
      <div className="w-full flex items-center justify-between relative z-10 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center">
            <svg viewBox="0 0 160 160" className="w-full h-full" fill="none">
              <path d="M 28 35 L 56 35 L 56 125 L 28 125 Z" className="fill-slate-800 dark:fill-slate-200" />
              <path d="M 88 35 L 132 35 C 137 35 140 38 140 43 L 140 60 L 114 60 L 114 55 L 88 55 Z" className="fill-slate-800 dark:fill-slate-200" />
              <path d="M 28 35 L 56 35 L 115 125 L 87 125 Z" fill="#00E5FF" />
              <path d="M 87 125 C 122 125 140 114 140 85 L 140 76 C 140 72 137 70 132 70 L 98 70 C 94 70 92 72 92 76 L 92 88 L 116 88 L 116 95 C 116 102 108 106 96 106 L 75 106 Z" fill="#00E5FF" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-display font-black tracking-tight leading-none text-slate-900 dark:text-white">
              NEXT <span className="text-[#00C2FF]">GENNECT</span>
            </span>
          </div>
        </div>

        <span className="text-[9px] font-mono-code font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
          Executive
        </span>
      </div>

      {/* Main Avatar Container with Cyan Card Frame */}
      <div className="relative w-44 h-48 sm:w-48 sm:h-52 rounded-[24px] bg-[#00B4D8] border-2 border-slate-900 dark:border-slate-800 shadow-md overflow-hidden flex items-end justify-center my-2 group">
        {/* Subtle cyan vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/15 pointer-events-none" />

        {isAliyan && (
          <div className="relative w-full h-full flex flex-col items-center justify-end">
            <img
              src={member.avatar}
              alt="Aliyan Shah - CEO"
              className="w-full h-full object-cover object-top filter contrast-105"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {isFatima && (
          <div className="relative w-full h-full flex flex-col items-center justify-end">
            <img
              src={member.avatar}
              alt="Fatima Zahra - CTO"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {isAtif && (
          <div className="relative w-full h-full flex flex-col items-center justify-end">
            <img
              src={member.avatar}
              alt="Muhammad Atif - COO"
              className="w-full h-full object-cover object-top filter contrast-105"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </div>

      {/* Bottom Official Name and Role Pills */}
      <div className="w-full text-center space-y-1.5 relative z-10 mt-3">
        <div className="inline-block px-4 py-1.5 rounded-xl bg-[#00B4D8] text-white font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
          {member.name}
        </div>
        <div>
          <div className="inline-block px-3 py-1 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-[#00B4D8] text-[#0096C7] dark:text-[#00C2FF] font-mono-code font-bold text-[10px] tracking-wider uppercase">
            {isAliyan ? 'CHIEF EXECUTIVE OFFICER' : isFatima ? 'CHIEF TECHNOLOGY OFFICER' : 'CHIEF OPERATING OFFICER'}
          </div>
        </div>
      </div>
    </div>
  );
};
