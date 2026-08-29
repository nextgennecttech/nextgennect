import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', showText = true }) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textDimensions = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      <div className={`relative ${iconDimensions[size]} flex items-center justify-center`}>
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-[#00E5FF] rounded-xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300" />
        
        {/* Hexagonal / Network Icon Container */}
        <div className="relative w-full h-full bg-[#080D1C] dark:bg-[#080D1C] border border-[#00E5FF]/50 rounded-xl flex items-center justify-center overflow-hidden shadow-inner group-hover:border-[#00E5FF] transition-all duration-300">
          {/* Subtle circuit background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/20 via-transparent to-[#7C3AED]/20" />

          {/* Connected Network Monogram */}
          <svg
            viewBox="0 0 40 40"
            className="w-3/4 h-3/4 text-[#00E5FF]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Polygon Hexagon */}
            <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.85" />
            {/* Inner Connected Nodes (NG Letterform) */}
            <circle cx="13" cy="16" r="2.5" fill="#00E5FF" />
            <circle cx="27" cy="16" r="2.5" fill="#38BDF8" />
            <circle cx="20" cy="28" r="2.5" fill="#7C3AED" />
            <path d="M13 16 L27 16 L20 28 Z" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="2 2" />
            <path d="M13 24 L13 16 L27 24 L27 16" stroke="white" strokeWidth="2.2" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-bold tracking-tight leading-none ${textDimensions[size]} text-slate-900 dark:text-white flex items-center gap-1`}>
            NEXT <span className="text-[#00E5FF]">GENNECT</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-slate-500 dark:text-cyan-400/80 mt-0.5 font-mono-code">
            Peshawar • Youth Tech
          </span>
        </div>
      )}
    </div>
  );
};
