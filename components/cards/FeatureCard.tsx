'use client';

import React from 'react';
import { GlassCard3D } from './GlassCard3D';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  index: number;
}

const featureColors = [
  {
    iconBox: 'bg-blue-50 border-blue-200 text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white group-hover:border-[#0066FF]',
    tag: 'text-[#0066FF]',
  },
  {
    iconBox: 'bg-emerald-50 border-emerald-200 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600',
    tag: 'text-emerald-600',
  },
  {
    iconBox: 'bg-amber-50 border-amber-200 text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500',
    tag: 'text-amber-600',
  },
  {
    iconBox: 'bg-purple-50 border-purple-200 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600',
    tag: 'text-purple-600',
  },
];

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  tag,
  index,
}) => {
  const theme = featureColors[index % featureColors.length];

  return (
    <GlassCard3D className="h-full" intensity={8}>
      <div className="relative w-full h-full p-8 flex flex-col justify-between overflow-hidden bg-white">
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-xs group-hover:scale-105 transition-all duration-300 ${theme.iconBox}`}>
              {icon}
            </div>
            <span className="text-xs font-mono font-medium text-slate-400">
              0{index + 1}
            </span>
          </div>

          <span className={`inline-block text-[11px] font-bold tracking-widest uppercase mb-2 ${theme.tag}`}>
            {tag}
          </span>
          
          <h3 className="text-xl font-bold text-[#0B1B3A] mb-3">
            {title}
          </h3>

          <p className="text-sm text-[#475569] leading-relaxed font-normal">
            {description}
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs text-slate-700 font-semibold">
          <span className={theme.tag}>&bull; Padrão de Excelência DUM</span>
        </div>
      </div>
    </GlassCard3D>
  );
};
