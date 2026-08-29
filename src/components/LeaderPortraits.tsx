import React from 'react';

interface LeaderPortraitProps {
  id: 'aliyan-shah' | 'muhammad-atif' | 'fatima-zahra' | string;
  className?: string;
}

export const LeaderPortrait: React.FC<LeaderPortraitProps> = ({ id, className = '' }) => {
  if (id === 'aliyan-shah') {
    // Aliyan Shah - Media (2).jpg (CEO, Navy polo, dark hair/beard, Fred Perry badge)
    return (
      <svg
        viewBox="0 0 320 360"
        className={`w-full h-full object-cover ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="aliyanBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#0077B6" />
          </linearGradient>
          <linearGradient id="poloNavy" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E2749" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F8D3B8" />
            <stop offset="100%" stopColor="#E5B292" />
          </linearGradient>
        </defs>

        {/* Cyan backdrop */}
        <rect width="320" height="360" rx="16" fill="url(#aliyanBg)" />

        {/* Head & Neck */}
        <path d="M 142 165 L 142 205 L 178 205 L 178 165 Z" fill="url(#skinTone)" />
        <ellipse cx="160" cy="120" rx="46" ry="54" fill="url(#skinTone)" />

        {/* Dark Hair & Beard */}
        <path
          d="M 112 110 C 112 60 135 48 160 48 C 185 48 208 60 208 110 C 208 125 204 140 198 145 C 194 130 192 88 160 85 C 130 88 126 130 122 145 C 116 140 112 125 112 110 Z"
          fill="#171A21"
        />
        {/* Full trimmed beard & mustache matching photo */}
        <path
          d="M 120 125 C 120 165 140 178 160 178 C 180 178 200 165 200 125 C 196 142 188 166 160 166 C 132 166 124 142 120 125 Z"
          fill="#171A21"
        />
        <path
          d="M 140 138 Q 160 144 180 138 Q 160 148 140 138 Z"
          fill="#171A21"
        />

        {/* Navy Polo Shirt with Fred Perry white striped collar */}
        <path
          d="M 75 225 C 90 205 130 200 160 200 C 190 200 230 205 245 225 L 265 360 L 55 360 Z"
          fill="url(#poloNavy)"
        />
        {/* White and Black Collar Details */}
        <path
          d="M 132 200 L 160 238 L 140 252 L 118 214 Z"
          fill="#0F172A"
          stroke="#FFFFFF"
          strokeWidth="2.5"
        />
        <path
          d="M 188 200 L 160 238 L 180 252 L 202 214 Z"
          fill="#0F172A"
          stroke="#FFFFFF"
          strokeWidth="2.5"
        />

        {/* Fred Perry Laurel Emblem on Left Chest */}
        <g transform="translate(195, 252) scale(0.65)">
          <path d="M 0,0 C -6,4 -10,12 -8,18 C -6,14 -2,8 4,6 Z" fill="#FFFFFF" />
          <path d="M 10,0 C 16,4 20,12 18,18 C 16,14 12,8 6,6 Z" fill="#FFFFFF" />
        </g>

        {/* Arms Crossed in Foreground with Watch on Left Wrist */}
        <path
          d="M 68 250 C 75 295 120 330 160 330 C 200 330 245 295 252 250 L 265 360 L 55 360 Z"
          fill="url(#poloNavy)"
          opacity="0.95"
        />
        {/* Arms skin & watch */}
        <path
          d="M 85 270 C 110 320 210 320 235 270 L 220 310 C 180 340 140 340 100 310 Z"
          fill="url(#skinTone)"
        />
        {/* Watch on Wrist */}
        <rect x="135" y="308" width="22" height="14" rx="3" fill="#111827" stroke="#EF4444" strokeWidth="1.5" />
      </svg>
    );
  }

  if (id === 'muhammad-atif') {
    // Muhammad Atif - Media.jpg (COO, Black polo, arms crossed, wristwatch, short beard)
    return (
      <svg
        viewBox="0 0 320 360"
        className={`w-full h-full object-cover ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="atifBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#0096C7" />
          </linearGradient>
          <linearGradient id="poloBlack" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#18181B" />
            <stop offset="100%" stopColor="#09090B" />
          </linearGradient>
          <linearGradient id="atifSkin" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDE1D3" />
            <stop offset="100%" stopColor="#EABCA4" />
          </linearGradient>
        </defs>

        {/* Cyan backdrop */}
        <rect width="320" height="360" rx="16" fill="url(#atifBg)" />

        {/* Head & Neck */}
        <path d="M 144 165 L 144 205 L 176 205 L 176 165 Z" fill="url(#atifSkin)" />
        <ellipse cx="160" cy="120" rx="44" ry="52" fill="url(#atifSkin)" />

        {/* Short Dark Hair */}
        <path
          d="M 116 112 C 116 65 138 52 160 52 C 182 52 204 65 204 112 C 204 122 200 134 196 140 C 192 124 190 92 160 88 C 130 92 128 124 124 140 C 120 134 116 122 116 112 Z"
          fill="#18181B"
        />

        {/* Short Chin Beard & Goatee */}
        <path
          d="M 132 135 C 132 162 144 175 160 175 C 176 175 188 162 188 135 C 184 148 178 164 160 164 C 142 164 136 148 132 135 Z"
          fill="#18181B"
        />
        <path
          d="M 144 140 Q 160 144 176 140 Q 160 146 144 140 Z"
          fill="#18181B"
        />

        {/* Black Fred Perry Polo Shirt */}
        <path
          d="M 75 225 C 90 205 130 200 160 200 C 190 200 230 205 245 225 L 265 360 L 55 360 Z"
          fill="url(#poloBlack)"
        />
        {/* White striped Collar */}
        <path
          d="M 132 200 L 160 238 L 140 252 L 118 214 Z"
          fill="#18181B"
          stroke="#FFFFFF"
          strokeWidth="2.5"
        />
        <path
          d="M 188 200 L 160 238 L 180 252 L 202 214 Z"
          fill="#18181B"
          stroke="#FFFFFF"
          strokeWidth="2.5"
        />

        {/* Fred Perry Emblem */}
        <g transform="translate(195, 252) scale(0.65)">
          <path d="M 0,0 C -6,4 -10,12 -8,18 C -6,14 -2,8 4,6 Z" fill="#F4F4F5" />
          <path d="M 10,0 C 16,4 20,12 18,18 C 16,14 12,8 6,6 Z" fill="#F4F4F5" />
        </g>

        {/* Crossed Arms & Forearms */}
        <path
          d="M 85 270 C 110 320 210 320 235 270 L 220 310 C 180 340 140 340 100 310 Z"
          fill="url(#atifSkin)"
        />
        {/* Silver Wristwatch on Left Wrist */}
        <rect x="132" y="278" width="20" height="22" rx="4" fill="#94A3B8" stroke="#334155" strokeWidth="2" />
        <circle cx="142" cy="289" r="6" fill="#0F172A" stroke="#CBD5E1" strokeWidth="1.5" />
      </svg>
    );
  }

  // Fatima Zahra - Media (1).jpg (CTO, Beige hijab, black abaya/top, vector illustration)
  return (
    <svg
      viewBox="0 0 320 360"
      className={`w-full h-full object-cover ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fatimaBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B4D8" />
          <stop offset="100%" stopColor="#0077B6" />
        </linearGradient>
        <linearGradient id="hijabTone" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C49A80" />
          <stop offset="100%" stopColor="#9C735B" />
        </linearGradient>
        <linearGradient id="fatimaSkin" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FCD5B5" />
          <stop offset="100%" stopColor="#F5C09B" />
        </linearGradient>
      </defs>

      {/* Cyan backdrop */}
      <rect width="320" height="360" rx="16" fill="url(#fatimaBg)" />

      {/* Black attire underneath */}
      <path
        d="M 60 270 C 85 240 125 230 160 230 C 195 230 235 240 260 270 L 270 360 L 50 360 Z"
        fill="#111827"
      />

      {/* Inner Cap & Face */}
      <ellipse cx="160" cy="140" rx="38" ry="46" fill="url(#fatimaSkin)" />
      {/* Black inner under-cap */}
      <path
        d="M 124 125 C 124 95 140 85 160 85 C 180 85 196 95 196 125 Z"
        fill="#18181B"
      />

      {/* Elegant Taupe/Beige Hijab Drape matching Media (1).jpg */}
      <path
        d="M 105 130 C 105 70 128 55 160 55 C 192 55 215 70 215 130 C 215 175 195 205 160 205 C 125 205 105 175 105 130 Z"
        fill="url(#hijabTone)"
      />

      {/* Face cutout */}
      <ellipse cx="160" cy="144" rx="32" ry="40" fill="url(#fatimaSkin)" />

      {/* Hijab drapery folds across shoulders */}
      <path
        d="M 90 200 C 105 285 215 285 230 200 C 245 250 250 310 230 360 L 90 360 C 70 310 75 250 90 200 Z"
        fill="url(#hijabTone)"
      />
      {/* Hijab wrap contours */}
      <path
        d="M 128 200 Q 160 240 192 200"
        stroke="#845941"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 115 230 Q 160 270 205 230"
        stroke="#845941"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 105 260 Q 160 300 215 260"
        stroke="#845941"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};
