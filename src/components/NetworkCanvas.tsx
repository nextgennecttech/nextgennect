import React, { useEffect, useRef, useState } from 'react';
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

export const NetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    const updateDimensions = () => {
      dpr = window.devicePixelRatio || 1;
      width = container.clientWidth;
      height = container.clientHeight;
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
      ? ['#00E5FF', '#38BDF8', '#818CF8', '#A855F7', '#06B6D4', '#60A5FA']
      : ['#4F46E5', '#2563EB', '#0284C7', '#7C3AED', '#0D9488'];

    // Optimal particle count based on screen area
    const particleCount = Math.min(Math.max(Math.floor((width * height) / 10000), 55), 110);
    const particles: Particle[] = [];
    const sparks: Spark[] = [];

    for (let i = 0; i < particleCount; i++) {
      const isCore = i % 7 === 0;
      const baseRadius = isCore ? Math.random() * 2 + 2.5 : Math.random() * 1.5 + 1.2;
      const color = nodePalette[Math.floor(Math.random() * nodePalette.length)];

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
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
      radius: 170, // Proximity snap radius for cursor
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
      mouse.active = false;
    };

    // Electric burst on click
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      particles.forEach(p => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220) {
          const force = (220 - dist) / 18;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
        }
      });

      // Spawn active sparks
      for (let s = 0; s < 6; s++) {
        const randomTarget = particles[Math.floor(Math.random() * particles.length)];
        sparks.push({
          x: clickX,
          y: clickY,
          targetX: randomTarget.x,
          targetY: randomTarget.y,
          progress: 0,
          speed: 0.04 + Math.random() * 0.03,
          color: isDark ? '#00E5FF' : '#4F46E5',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });
    resizeObserver.observe(container);

    let frameCount = 0;

    // Core Animation & Physics Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      frameCount++;

      const maxInterDistance = 125;

      // 1. Draw interconnected mesh wires between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxInterDistance) {
            const alpha = (1 - dist / maxInterDistance) * (isDark ? 0.28 : 0.18);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(0, 229, 255, ${alpha})`
              : `rgba(79, 70, 229, ${alpha})`;
            ctx.lineWidth = dist < 70 ? 0.9 : 0.6;
            ctx.stroke();

            // Periodic electric data pulse traveling along wires
            if (p1.isCoreNode && (frameCount + i * 11) % 180 < 40) {
              const t = ((frameCount + i * 11) % 180) / 40;
              const sparkX = p1.x + (p2.x - p1.x) * t;
              const sparkY = p1.y + (p2.y - p1.y) * t;
              ctx.beginPath();
              ctx.arc(sparkX, sparkY, 1.2, 0, Math.PI * 2);
              ctx.fillStyle = isDark ? '#00E5FF' : '#2563EB';
              ctx.fill();
            }
          }
        }
      }

      // 2. Cursor Tech Wire Snapping (Dynamic Circuit & Neural Web)
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        // Draw cursor node indicator
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(0, 229, 255, 0.8)' : 'rgba(79, 70, 229, 0.8)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 14, 0, Math.PI * 2);
        ctx.strokeStyle = isDark ? 'rgba(0, 229, 255, 0.3)' : 'rgba(79, 70, 229, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();

        particles.forEach((p) => {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            // Magnetic wire connection
            const proximityRatio = 1 - dist / mouse.radius;
            const wireAlpha = Math.min(proximityRatio * (isDark ? 0.85 : 0.65), 0.9);

            // Draw glowing snapping wire line from cursor to particle
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = isDark
              ? `rgba(0, 229, 255, ${wireAlpha})`
              : `rgba(79, 70, 229, ${wireAlpha})`;
            ctx.lineWidth = Math.max(0.8, 2.2 * proximityRatio);
            ctx.stroke();

            // Traveling circuit pulse spark along the wire
            const pulseT = ((frameCount * 3) % 100) / 100;
            const px = mouse.x + (p.x - mouse.x) * pulseT;
            const py = mouse.y + (p.y - mouse.y) * pulseT;
            ctx.beginPath();
            ctx.arc(px, py, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = isDark ? '#FFFFFF' : '#38BDF8';
            ctx.fill();

            // Gentle magnetic attraction towards cursor
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * 0.04 * proximityRatio;
            p.vy += Math.sin(angle) * 0.04 * proximityRatio;
          }
        });
      }

      // 3. Render and update particles (nodes)
      particles.forEach((p) => {
        // Friction / drag
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Min ambient motion
        if (Math.abs(p.vx) < 0.2) p.vx += (Math.random() - 0.5) * 0.1;
        if (Math.abs(p.vy) < 0.2) p.vy += (Math.random() - 0.5) * 0.1;

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
          ctx.arc(p.x, p.y, p.radius * 3.2, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? 'rgba(0, 229, 255, 0.12)' : 'rgba(79, 70, 229, 0.1)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.8, 0, Math.PI * 2);
          ctx.strokeStyle = isDark ? 'rgba(0, 229, 255, 0.4)' : 'rgba(79, 70, 229, 0.3)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Draw primary node dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // 4. Render click sparks
      for (let s = sparks.length - 1; s >= 0; s--) {
        const spark = sparks[s];
        spark.progress += spark.speed;
        const curX = spark.x + (spark.targetX - spark.x) * spark.progress;
        const curY = spark.y + (spark.targetY - spark.y) * spark.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = spark.color;
        ctx.fill();

        if (spark.progress >= 1) {
          sparks.splice(s, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      resizeObserver.disconnect();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-80 dark:opacity-90 pointer-events-auto cursor-crosshair"
      />
    </div>
  );
};
