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
  /*
   * Every leader uses the same 320x360 rectangular design.
   * The real uploaded photo fills the complete rectangle.
   */

  const photo =
    id === 'aliyan-shah'
      ? aliyanShah
      : id === 'muhammad-atif'
        ? muhammadAtif
        : id === 'fatima-zahra'
          ? fatimaZahra
          : null;

  if (!photo) {
    return null;
  }

  /*
   * Different IDs need different clipPath IDs because SVG IDs
   * can conflict when multiple leader cards appear on the same page.
   */
  const clipId =
    id === 'aliyan-shah'
      ? 'leader-photo-clip-aliyan'
      : id === 'muhammad-atif'
        ? 'leader-photo-clip-atif'
        : 'leader-photo-clip-fatima';

  return (
    <svg
      viewBox="0 0 320 360"
      className={`w-full h-full object-cover ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={
        id === 'aliyan-shah'
          ? 'Aliyan Shah - NextGenNect'
          : id === 'muhammad-atif'
            ? 'Muhammad Atif - NextGenNect'
            : 'Fatima Zahra - NextGenNect'
      }
    >
      <defs>
        {/* Rounded rectangle clipping area */}
        <clipPath id={clipId}>
          <rect
            x="0"
            y="0"
            width="320"
            height="360"
            rx="16"
            ry="16"
          />
        </clipPath>

        {/* Subtle dark gradient at bottom for text readability */}
        <linearGradient
          id={`leaderBottomGradient-${id}`}
          x1="0"
          y1="230"
          x2="0"
          y2="360"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0%"
            stopColor="#000000"
            stopOpacity="0"
          />
          <stop
            offset="100%"
            stopColor="#000000"
            stopOpacity="0.45"
          />
        </linearGradient>
      </defs>

      {/* =========================================================
          MAIN PHOTO
          The actual uploaded photo fills the COMPLETE rectangle.
          ========================================================= */}

      <image
        href={photo}
        x="0"
        y="0"
        width="320"
        height="360"
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#${clipId})`}
      />

      {/* =========================================================
          SUBTLE BOTTOM OVERLAY
          Keeps the existing professional card appearance and
          helps the name/position labels remain readable.
          ========================================================= */}

      <rect
        x="0"
        y="220"
        width="320"
        height="140"
        fill={`url(#leaderBottomGradient-${id})`}
        clipPath={`url(#${clipId})`}
      />

      {/* =========================================================
          OUTER BORDER
          Keeps your original rounded card design.
          ========================================================= */}

      <rect
        x="1"
        y="1"
        width="318"
        height="358"
        rx="16"
        ry="16"
        stroke="#FFFFFF"
        strokeOpacity="0.18"
        strokeWidth="2"
      />
    </svg>
  );
};
