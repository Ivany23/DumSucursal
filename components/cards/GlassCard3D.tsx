'use client';

import React, { useRef, useState, useCallback } from 'react';

interface GlassCard3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
  onClick?: () => void;
}

/**
 * CSS-only 3D card with tilt effect and glare.
 * Replaced framer-motion useSpring/useMotionValue with native CSS transitions.
 * On pages with 140+ cards, this eliminates 140+ JS spring instances.
 */
export const GlassCard3D: React.FC<GlassCard3DProps> = ({
  children,
  className = '',
  intensity = 15,
  glowColor = 'rgba(0, 102, 255, 0.25)',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, background: '' });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width;
    const yPct = mouseY / height;

    const xOffset = (xPct - 0.5) * (intensity * 2);
    const yOffset = (yPct - 0.5) * -(intensity * 2);

    setTransform(`rotateX(${yOffset}deg) rotateY(${xOffset}deg)`);
    setGlareStyle({
      opacity: 1,
      background: `radial-gradient(circle 350px at ${xPct * 100}% ${yPct * 100}%, ${glowColor}, transparent 70%)`,
    });
  }, [intensity, glowColor]);

  const handleMouseLeave = useCallback(() => {
    setTransform('rotateX(0deg) rotateY(0deg)');
    setGlareStyle({ opacity: 0, background: '' });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`perspective-container relative group ${className}`}
      style={{ perspective: 1200 }}
    >
      <div
        style={{
          transform,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.2s ease-out',
        }}
        className="relative w-full h-full rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0066FF]/60 transition-all duration-300 overflow-hidden"
      >
        {/* Dynamic Glare / Specular highlight following mouse */}
        <div
          className="pointer-events-none absolute inset-0 z-30"
          style={{
            opacity: glareStyle.opacity,
            background: glareStyle.background,
            transition: 'opacity 0.4s ease',
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full h-full transform-gpu" style={{ transform: 'translateZ(10px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
