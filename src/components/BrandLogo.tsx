import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showSubtitle?: boolean;
  className?: string;
  variant?: 'emblem' | 'full' | 'banner';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  size = 'md', 
  showText = true, 
  showSubtitle = true,
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textDimensions = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none group cursor-pointer ${className}`}>
      {/* Pure NG Logo Emblem without black background container */}
      <div className={`relative ${iconDimensions[size]} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(0,229,255,0.2)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pillar of N: dark slate in light mode, silver/slate in dark mode */}
          <path
            d="M 28 35 L 56 35 L 56 125 L 28 125 Z"
            className="fill-slate-800 dark:fill-slate-200 transition-colors duration-300"
            rx="4"
          />

          {/* Top bar of G */}
          <path
            d="M 88 35 L 132 35 C 137 35 140 38 140 43 L 140 60 L 114 60 L 114 55 L 88 55 Z"
            className="fill-slate-800 dark:fill-slate-200 transition-colors duration-300"
          />

          {/* Cyan diagonal band of N */}
          <path
            d="M 28 35 L 56 35 L 115 125 L 87 125 Z"
            fill="#00E5FF"
            className="drop-shadow-[0_0_6px_rgba(0,229,255,0.5)]"
          />

          {/* Cyan lower curve and spur of G */}
          <path
            d="M 87 125 C 122 125 140 114 140 85 L 140 76 C 140 72 137 70 132 70 L 98 70 C 94 70 92 72 92 76 L 92 88 L 116 88 L 116 95 C 116 102 108 106 96 106 L 75 106 Z"
            fill="#00E5FF"
            className="drop-shadow-[0_0_6px_rgba(0,229,255,0.5)]"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className={`font-display font-extrabold tracking-tight leading-none ${textDimensions[size]} text-slate-900 dark:text-white flex items-center gap-1.5`}>
            <span>NEXT</span>
            <span className="text-[#00E5FF] drop-shadow-[0_0_12px_rgba(0,229,255,0.35)]">GENNECT</span>
          </div>
          {showSubtitle && (
            <span className="text-[9px] uppercase tracking-[0.28em] font-semibold text-slate-500 dark:text-cyan-400/80 mt-0.5 font-mono-code">
              Peshawar • Youth Tech
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export const FullBrandBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 rounded-3xl bg-transparent text-center space-y-4 relative overflow-hidden ${className}`}>
      <div className="w-24 h-24 relative group">
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full drop-shadow-[0_4px_16px_rgba(0,229,255,0.3)] transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pillar of N */}
          <path
            d="M 28 35 L 56 35 L 56 125 L 28 125 Z"
            className="fill-slate-800 dark:fill-slate-200"
            rx="4"
          />

          {/* Top bar of G */}
          <path
            d="M 88 35 L 132 35 C 137 35 140 38 140 43 L 140 60 L 114 60 L 114 55 L 88 55 Z"
            className="fill-slate-800 dark:fill-slate-200"
          />

          {/* Cyan diagonal of N */}
          <path
            d="M 28 35 L 56 35 L 115 125 L 87 125 Z"
            fill="#00E5FF"
          />

          {/* Cyan lower curve and spur of G */}
          <path
            d="M 87 125 C 122 125 140 114 140 85 L 140 76 C 140 72 137 70 132 70 L 98 70 C 94 70 92 72 92 76 L 92 88 L 116 88 L 116 95 C 116 102 108 106 96 106 L 75 106 Z"
            fill="#00E5FF"
          />
        </svg>
      </div>

      <div className="space-y-1">
        <h2 className="text-2xl font-display font-extrabold tracking-wider text-[#00E5FF]">
          NEXT GENNECT
        </h2>
        <p className="text-xs font-mono-code uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Empowering the Next Generation of Technologists
        </p>
      </div>
    </div>
  );
};
