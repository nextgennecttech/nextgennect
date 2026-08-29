import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  color: string;
  glowColor: string;
  pulsePhase: number;
  pulseSpeed: number;
  isCoreNode?: boolean;
}

interface Spark {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  color: string;
}

interface ClickBurst {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

export const NetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const updateDimensions = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    updateDimensions();

    const isDark = theme === 'dark';

    // Rich tech cyber palette
    const nodePalette = isDark
      ? ['#00E5FF', '#38BDF8', '#818CF8', '#A855F7', '#06B6D4', '#60A5FA', '#22D3EE']
      : ['#4F46E5', '#2563EB', '#0284C7', '#7C3AED', '#0D9488', '#3B82F6'];

    // Optimal particle count based on full viewport area
    const particleCount = Math.min(Math.max(Math.floor((width * height) / 12000), 50), 115);
    const particles: Particle[] = [];
    const sparks: Spark[] = [];
    const bursts: ClickBurst[] = [];

    for (let i = 0; i < particleCount; i++) {
      const isCore = i % 6 === 0;
      const baseRadius = isCore ? Math.random() * 2 + 2.5 : Math.random() * 1.5 + 1.2;
      const color = nodePalette[Math.floor(Math.random() * nodePalette.length)];

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,
        baseRadius,
        radius: baseRadius,
        color,
        glowColor: color,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        isCoreNode: isCore
      });
    }

    const mouse = {
      x: -2000,
      y: -2000,
      radius: 190, // Proximity snap radius for cursor
      active: false,
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = -2000;
      let clientY = -2000;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      mouse.x = clientX;
      mouse.y = clientY;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
      mouse.active = false;
    };

    // Electric burst on click or tap anywhere on page
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      let clickX = 0;
      let clickY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clickX = e.touches[0].clientX;
        clickY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clickX = e.clientX;
        clickY = e.clientY;
      }

      // Add visual expanding shockwave ring
      bursts.push({
        x: clickX,
        y: clickY,
        radius: 5,
        maxRadius: 160,
        alpha: 0.8,
        color: isDark ? '#00E5FF' : '#4F46E5'
      });

      // Kinetic physics blast pushing nearby particles
      particles.forEach(p => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 240) {
          const force = (240 - dist) / 16;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
        }
      });

      // Spawn rapid traveling electric sparks
      for (let s = 0; s < 8; s++) {
        const randomTarget = particles[Math.floor(Math.random() * particles.length)];
        sparks.push({
          x: clickX,
          y: clickY,
          targetX: randomTarget.x,
          targetY: randomTarget.y,
          progress: 0,
          speed: 0.035 + Math.random() * 0.035,
          color: isDark ? (s % 2 === 0 ? '#00E5FF' : '#FFFFFF') : '#4F46E5',
        });
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('mousedown', handlePointerDown, { passive: true });
    window.addEventListener('touchstart', handlePointerDown, { passive: true });

    let resizeTimer: any = null;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateDimensions();
      }, 100);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    let frameCount = 0;

    // Core Animation & Physics Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      frameCount++;

      const maxInterDistance = 135;

      // 1. Draw interconnected mesh circuit wires between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxInterDistance) {
            const alpha = (1 - dist / maxInterDistance) * (isDark ? 0.32 : 0.22);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(0, 229, 255, ${alpha})`
              : `rgba(79, 70, 229, ${alpha})`;
            ctx.lineWidth = dist < 70 ? 1.0 : 0.65;
            ctx.stroke();

            // Periodic electric data pulse traveling along circuit wires
            if (p1.isCoreNode && (frameCount + i * 13) % 160 < 35) {
              const t = ((frameCount + i * 13) % 160) / 35;
              const sparkX = p1.x + (p2.x - p1.x) * t;
              const sparkY = p1.y + (p2.y - p1.y) * t;
              ctx.beginPath();
              ctx.arc(sparkX, sparkY, 1.4, 0, Math.PI * 2);
              ctx.fillStyle = isDark ? '#00E5FF' : '#2563EB';
              ctx.fill();
            }
          }
        }
      }

      // 2. Cursor Tech Wire Snapping (Dynamic Circuit & Neural Web)
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        // Draw cursor center core node
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(0, 229, 255, 0.9)' : 'rgba(79, 70, 229, 0.85)';
        ctx.fill();

        // Draw magnetic proximity pulse ring
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 12 + Math.sin(frameCount * 0.1) * 2, 0, Math.PI * 2);
        ctx.strokeStyle = isDark ? 'rgba(0, 229, 255, 0.35)' : 'rgba(79, 70, 229, 0.3)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        particles.forEach((p) => {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            // Magnetic wire connection
            const proximityRatio = 1 - dist / mouse.radius;
            const wireAlpha = Math.min(proximityRatio * (isDark ? 0.9 : 0.7), 0.95);

            // Draw glowing snapping wire line from cursor to particle
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = isDark
              ? `rgba(0, 229, 255, ${wireAlpha})`
              : `rgba(79, 70, 229, ${wireAlpha})`;
            ctx.lineWidth = Math.max(0.8, 2.4 * proximityRatio);
            ctx.stroke();

            // Traveling circuit pulse spark along the wire
            const pulseT = ((frameCount * 3.5) % 100) / 100;
            const px = mouse.x + (p.x - mouse.x) * pulseT;
            const py = mouse.y + (p.y - mouse.y) * pulseT;
            ctx.beginPath();
            ctx.arc(px, py, 2.0, 0, Math.PI * 2);
            ctx.fillStyle = isDark ? '#FFFFFF' : '#38BDF8';
            ctx.fill();

            // Gentle magnetic attraction towards cursor
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * 0.05 * proximityRatio;
            p.vy += Math.sin(angle) * 0.05 * proximityRatio;
          }
        });
      }

      // 3. Render and update particles (nodes)
      particles.forEach((p) => {
        // Friction / drag
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Min ambient drifting motion
        if (Math.abs(p.vx) < 0.2) p.vx += (Math.random() - 0.5) * 0.08;
        if (Math.abs(p.vy) < 0.2) p.vy += (Math.random() - 0.5) * 0.08;

        // Position update
        p.x += p.vx;
        p.y += p.vy;

        // Soft screen edge bounce
        if (p.x < 10) { p.x = 10; p.vx *= -1; }
        if (p.x > width - 10) { p.x = width - 10; p.vx *= -1; }
        if (p.y < 10) { p.y = 10; p.vy *= -1; }
        if (p.y > height - 10) { p.y = height - 10; p.vy *= -1; }

        // Pulsing radius animation
        p.pulsePhase += p.pulseSpeed;
        p.radius = p.baseRadius + Math.sin(p.pulsePhase) * 0.6;

        // Draw core glow aura for prominent nodes
        if (p.isCoreNode) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3.4, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? 'rgba(0, 229, 255, 0.14)' : 'rgba(79, 70, 229, 0.12)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.9, 0, Math.PI * 2);
          ctx.strokeStyle = isDark ? 'rgba(0, 229, 255, 0.45)' : 'rgba(79, 70, 229, 0.35)';
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }

        // Draw primary node dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // 4. Render click shockwave bursts
      for (let b = bursts.length - 1; b >= 0; b--) {
        const burst = bursts[b];
        burst.radius += 5.5;
        burst.alpha *= 0.93;

        ctx.beginPath();
        ctx.arc(burst.x, burst.y, burst.radius, 0, Math.PI * 2);
        ctx.strokeStyle = isDark
          ? `rgba(0, 229, 255, ${burst.alpha})`
          : `rgba(79, 70, 229, ${burst.alpha})`;
        ctx.lineWidth = Math.max(1, 2.5 * burst.alpha);
        ctx.stroke();

        if (burst.radius >= burst.maxRadius || burst.alpha <= 0.02) {
          bursts.splice(b, 1);
        }
      }

      // 5. Render traveling electric click sparks
      for (let s = sparks.length - 1; s >= 0; s--) {
        const spark = sparks[s];
        spark.progress += spark.speed;
        const curX = spark.x + (spark.targetX - spark.x) * spark.progress;
        const curY = spark.y + (spark.targetY - spark.y) * spark.progress;

        // Spark glow head
        ctx.beginPath();
        ctx.arc(curX, curY, 2.6, 0, Math.PI * 2);
        ctx.fillStyle = spark.color;
        ctx.fill();

        // Spark trail line
        ctx.beginPath();
        ctx.moveTo(spark.x, spark.y);
        ctx.lineTo(curX, curY);
        ctx.strokeStyle = isDark ? 'rgba(0, 229, 255, 0.4)' : 'rgba(79, 70, 229, 0.35)';
        ctx.lineWidth = 1;
        ctx.stroke();

        if (spark.progress >= 1) {
          sparks.splice(s, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-75 dark:opacity-85"
      />
    </div>
  );
};
