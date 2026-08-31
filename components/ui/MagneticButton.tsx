'use client';

import React, { useRef, useState, useCallback } from 'react';
import Link from 'next/link';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
}

/**
 * Magnetic button using CSS transitions instead of framer-motion springs.
 * Same visual pull effect with zero JS animation library overhead.
 */
export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  external = false,
}) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Magnetic pull factor
    setPosition({ x: distanceX * 0.28, y: distanceY * 0.28 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-xs font-medium tracking-wider',
    md: 'px-7 py-3.5 text-sm font-semibold tracking-wider',
    lg: 'px-9 py-4 text-base font-semibold tracking-wide',
  };

  const variantClasses = {
    primary:
      'bg-[#0066FF] hover:bg-[#0052CC] text-white shadow-md hover:shadow-lg font-bold border border-transparent',
    secondary:
      'bg-[#0052CC] hover:bg-[#003D99] text-white font-bold border border-transparent shadow-sm',
    outline:
      'bg-white border border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white font-bold shadow-2xs transition-colors',
    glass:
      'bg-white border border-slate-200 text-[#0B1B3A] hover:border-[#0066FF] hover:text-[#0066FF] font-semibold shadow-xs',
  };

  const content = (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.25s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
      className={`relative inline-flex items-center justify-center gap-3 rounded-full uppercase transition-all duration-300 group overflow-hidden select-none cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {/* Specular glare shine effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block bg-transparent border-0 p-0 focus:outline-none">
      {content}
    </button>
  );
};
