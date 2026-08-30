
import React from 'react';

import aliyanShah from '../assets/leaders/aliyan.jpg';
import muhammadAtif from '../assets/leaders/atif.jpg';
import fatimaZahra from '../assets/leaders/fatima.jpg';

interface LeaderPortraitProps {
  id: 'aliyan-shah' | 'muhammad-atif' | 'fatima-zahra' | string;
  className?: string;
}

export const LeaderPortrait: React.FC<LeaderPortraitProps> = ({
  id,
  className = '',
}) => {
  /* ============================================================
     ALIYAN SHAH
     ============================================================ */

  if (id === 'aliyan-shah') {
    return (
      <svg
        viewBox="0 0 320 360"
        className={`w-full h-full object-cover ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Aliyan Shah - NextGenNect"
      >
        <defs>
          {/* Original cyan background */}
          <linearGradient
            id="aliyanBg"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#0077B6" />
          </linearGradient>

          {/* Original navy shirt */}
          <linearGradient
            id="poloNavy"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#1E2749" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Photo clipping area for Aliyan's head */}
          <clipPath id="aliyanFaceClip">
            <ellipse
              cx="160"
              cy="120"
              rx="46"
              ry="54"
            />
          </clipPath>

          {/* Photo clipping area for neck */}
          <clipPath id="aliyanNeckClip">
            <rect
              x="142"
              y="165"
              width="36"
              height="40"
            />
          </clipPath>
        </defs>

        {/* ======================================================
            ORIGINAL CYAN BACKDROP
            ====================================================== */}

        <rect
          width="320"
          height="360"
          rx="16"
          fill="url(#aliyanBg)"
        />

        {/* ======================================================
            REAL ALIYAN PHOTO - FACE
            ====================================================== */}

        <image
          href={aliyanShah}
          x="90"
          y="50"
          width="140"
          height="145"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#aliyanFaceClip)"
        />

        {/* Real photo continues into neck area */}
        <image
          href={aliyanShah}
          x="95"
          y="80"
          width="130"
          height="145"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#aliyanNeckClip)"
        />

        {/* ======================================================
            ORIGINAL NAVY POLO
            ====================================================== */}

        <path
          d="M 75 225 C 90 205 130 200 160 200 C 190 200 230 205 245 225 L 265 360 L 55 360 Z"
          fill="url(#poloNavy)"
        />

        {/* ======================================================
            ORIGINAL COLLAR
            ====================================================== */}

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

        {/* ======================================================
            ORIGINAL FRED PERRY STYLE EMBLEM
            ====================================================== */}

        <g transform="translate(195, 252) scale(0.65)">
          <path
            d="M 0,0 C -6,4 -10,12 -8,18 C -6,14 -2,8 4,6 Z"
            fill="#FFFFFF"
          />

          <path
            d="M 10,0 C 16,4 20,12 18,18 C 16,14 12,8 6,6 Z"
            fill="#FFFFFF"
          />
        </g>

        {/* ======================================================
            ORIGINAL CROSSED ARMS
            ====================================================== */}

        <path
          d="M 68 250 C 75 295 120 330 160 330 C 200 330 245 295 252 250 L 265 360 L 55 360 Z"
          fill="url(#poloNavy)"
          opacity="0.95"
        />

        {/* Original arms */}
        <path
          d="M 85 270 C 110 320 210 320 235 270 L 220 310 C 180 340 140 340 100 310 Z"
          fill="#E5B292"
        />

        {/* Original watch */}
        <rect
          x="135"
          y="308"
          width="22"
          height="14"
          rx="3"
          fill="#111827"
          stroke="#EF4444"
          strokeWidth="1.5"
        />

        {/* ======================================================
            ORIGINAL OUTER FRAME
            ====================================================== */}

        <rect
          x="1"
          y="1"
          width="318"
          height="358"
          rx="16"
          stroke="white"
          strokeOpacity="0.12"
          strokeWidth="2"
        />
      </svg>
    );
  }

  /* ============================================================
     MUHAMMAD ATIF
     ============================================================ */

  if (id === 'muhammad-atif') {
    return (
      <svg
        viewBox="0 0 320 360"
        className={`w-full h-full object-cover ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Muhammad Atif - NextGenNect"
      >
        <defs>
          {/* Original cyan background */}
          <linearGradient
            id="atifBg"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#0096C7" />
          </linearGradient>

          {/* Original black shirt */}
          <linearGradient
            id="poloBlack"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#18181B" />
            <stop offset="100%" stopColor="#09090B" />
          </linearGradient>

          {/* Atif photo face */}
          <clipPath id="atifFaceClip">
            <ellipse
              cx="160"
              cy="120"
              rx="44"
              ry="52"
            />
          </clipPath>

          {/* Atif neck */}
          <clipPath id="atifNeckClip">
            <rect
              x="144"
              y="165"
              width="32"
              height="40"
            />
          </clipPath>
        </defs>

        {/* ======================================================
            ORIGINAL CYAN BACKDROP
            ====================================================== */}

        <rect
          width="320"
          height="360"
          rx="16"
          fill="url(#atifBg)"
        />

        {/* ======================================================
            REAL MUHAMMAD ATIF PHOTO
            ====================================================== */}

        <image
          href={muhammadAtif}
          x="92"
          y="50"
          width="136"
          height="142"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#atifFaceClip)"
        />

        {/* Neck portion */}
        <image
          href={muhammadAtif}
          x="96"
          y="80"
          width="128"
          height="145"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#atifNeckClip)"
        />

        {/* ======================================================
            ORIGINAL BLACK POLO
            ====================================================== */}

        <path
          d="M 75 225 C 90 205 130 200 160 200 C 190 200 230 205 245 225 L 265 360 L 55 360 Z"
          fill="url(#poloBlack)"
        />

        {/* ======================================================
            ORIGINAL COLLAR
            ====================================================== */}

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

        {/* ======================================================
            ORIGINAL EMBLEM
            ====================================================== */}

        <g transform="translate(195, 252) scale(0.65)">
          <path
            d="M 0,0 C -6,4 -10,12 -8,18 C -6,14 -2,8 4,6 Z"
            fill="#F4F4F5"
          />

          <path
            d="M 10,0 C 16,4 20,12 18,18 C 16,14 12,8 6,6 Z"
            fill="#F4F4F5"
          />
        </g>

        {/* ======================================================
            ORIGINAL CROSSED ARMS
            ====================================================== */}

        <path
          d="M 85 270 C 110 320 210 320 235 270 L 220 310 C 180 340 140 340 100 310 Z"
          fill="#EABCA4"
        />

        {/* Original silver wristwatch */}
        <rect
          x="132"
          y="278"
          width="20"
          height="22"
          rx="4"
          fill="#94A3B8"
          stroke="#334155"
          strokeWidth="2"
        />

        <circle
          cx="142"
          cy="289"
          r="6"
          fill="#0F172A"
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />

        {/* ======================================================
            ORIGINAL OUTER FRAME
            ====================================================== */}

        <rect
          x="1"
          y="1"
          width="318"
          height="358"
          rx="16"
          stroke="white"
          strokeOpacity="0.12"
          strokeWidth="2"
        />
      </svg>
    );
  }

  /* ============================================================
     FATIMA ZAHRA
     ============================================================ */

  if (id === 'fatima-zahra') {
    return (
      <svg
        viewBox="0 0 320 360"
        className={`w-full h-full object-cover ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Fatima Zahra - NextGenNect"
      >
        <defs>
          {/* Original cyan background */}
          <linearGradient
            id="fatimaBg"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#0077B6" />
          </linearGradient>

          {/* Original hijab colors */}
          <linearGradient
            id="hijabTone"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#C49A80" />
            <stop offset="100%" stopColor="#9C735B" />
          </linearGradient>

          {/* Real Fatima photo face */}
          <clipPath id="fatimaFaceClip">
            <ellipse
              cx="160"
              cy="144"
              rx="32"
              ry="40"
            />
          </clipPath>
        </defs>

        {/* ======================================================
            ORIGINAL CYAN BACKDROP
            ====================================================== */}

        <rect
          width="320"
          height="360"
          rx="16"
          fill="url(#fatimaBg)"
        />

        {/* ======================================================
            ORIGINAL BLACK ATTIRE
            ====================================================== */}

        <path
          d="M 60 270 C 85 240 125 230 160 230 C 195 230 235 240 260 270 L 270 360 L 50 360 Z"
          fill="#111827"
        />

        {/* ======================================================
            ORIGINAL HIJAB BACK/DROP
            ====================================================== */}

        <path
          d="M 105 130 C 105 70 128 55 160 55 C 192 55 215 70 215 130 C 215 175 195 205 160 205 C 125 205 105 175 105 130 Z"
          fill="url(#hijabTone)"
        />

        {/* ======================================================
            REAL FATIMA PHOTO
            ====================================================== */}

        <image
          href={fatimaZahra}
          x="115"
          y="98"
          width="90"
          height="100"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#fatimaFaceClip)"
        />

        {/* ======================================================
            ORIGINAL HIJAB DRAPERY
            ====================================================== */}

        <path
          d="M 90 200 C 105 285 215 285 230 200 C 245 250 250 310 230 360 L 90 360 C 70 310 75 250 90 200 Z"
          fill="url(#hijabTone)"
        />

        {/* ======================================================
            ORIGINAL HIJAB FOLDS
            ====================================================== */}

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

        {/* ======================================================
            ORIGINAL OUTER FRAME
            ====================================================== */}

        <rect
          x="1"
          y="1"
          width="318"
          height="358"
          rx="16"
          stroke="white"
          strokeOpacity="0.12"
          strokeWidth="2"
        />
      </svg>
    );
  }

  /* ============================================================
     UNKNOWN LEADER
     ============================================================ */

  return null;
};
```
