'use client';

import React from 'react';
import { m } from 'framer-motion';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  tone?: 'light' | 'dark';
  accent?: 'blue' | 'emerald' | 'amber' | 'purple' | 'rose' | 'gradient';
}

const badgeStyles: Record<'light' | 'dark', Record<string, { wrapper: string; dot: string }>> = {
  light: {
    blue: { wrapper: 'border-[#0066FF]/30 bg-[#F0F7FF] text-[#0066FF]', dot: 'bg-[#0066FF]' },
    emerald: { wrapper: 'border-emerald-300/60 bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500' },
    amber: { wrapper: 'border-amber-300/60 bg-amber-50 text-amber-700', dot: 'bg-amber-500' },
    purple: { wrapper: 'border-purple-300/60 bg-purple-50 text-purple-700', dot: 'bg-purple-500' },
    rose: { wrapper: 'border-rose-300/60 bg-rose-50 text-rose-700', dot: 'bg-rose-500' },
    gradient: { wrapper: 'border-transparent bg-gradient-to-r from-[#0066FF] via-[#8B5CF6] to-[#22C55E] text-white shadow-md shadow-purple-500/20', dot: 'bg-white' },
  },
  dark: {
    blue: { wrapper: 'border-sky-400/30 bg-sky-400/10 text-sky-300', dot: 'bg-sky-400' },
    emerald: { wrapper: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300', dot: 'bg-emerald-400' },
    amber: { wrapper: 'border-amber-400/30 bg-amber-400/10 text-amber-300', dot: 'bg-amber-400' },
    purple: { wrapper: 'border-purple-400/30 bg-purple-400/10 text-purple-300', dot: 'bg-purple-400' },
    rose: { wrapper: 'border-rose-400/30 bg-rose-400/10 text-rose-300', dot: 'bg-rose-400' },
    gradient: { wrapper: 'border-transparent bg-gradient-to-r from-[#0066FF] via-[#8B5CF6] to-[#22C55E] text-white shadow-md shadow-purple-500/25', dot: 'bg-white' },
  },
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  tone = 'light',
  accent = 'blue',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const styles = badgeStyles[tone][accent];

  const titleColor = tone === 'dark' ? 'text-white' : 'text-[#0B1B3A]';
  const subtitleColor = tone === 'dark' ? 'text-slate-300' : 'text-[#64748B]';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses[align]} ${className}`}>
      {badge && (
        <m.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-2xs ${styles.wrapper}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${styles.dot} animate-pulse`} />
          {badge}
        </m.div>
      )}

      <m.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${titleColor} leading-[1.15]`}
      >
        {title}
      </m.h2>

      {subtitle && (
        <m.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-4 text-base sm:text-lg ${subtitleColor} leading-relaxed max-w-2xl font-light`}
        >
          {subtitle}
        </m.p>
      )}
    </div>
  );
};
