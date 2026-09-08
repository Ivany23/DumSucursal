'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  ShoppingBag,
  Wine,
  Milk,
  Snowflake,
  Sparkles,
  ShieldCheck,
  Cookie,
  HeartHandshake,
  Layers,
} from 'lucide-react';
import { Category } from '@/types';
import { GlassCard3D } from './GlassCard3D';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  ShoppingBag: <ShoppingBag className="w-8 h-8" />,
  Wine: <Wine className="w-8 h-8" />,
  Milk: <Milk className="w-8 h-8" />,
  Snowflake: <Snowflake className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Cookie: <Cookie className="w-8 h-8" />,
  HeartHandshake: <HeartHandshake className="w-8 h-8" />,
};

const categoryThemes: Record<
  string,
  {
    iconBox: string;
    badge: string;
    hoverBtn: string;
  }
> = {
  mercearia: {
    iconBox: 'bg-emerald-50 border-emerald-200 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600',
    badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    hoverBtn: 'text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600',
  },
  bebidas: {
    iconBox: 'bg-blue-50 border-blue-200 text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white group-hover:border-[#0066FF]',
    badge: 'bg-blue-50 text-blue-800 border-blue-200',
    hoverBtn: 'text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white group-hover:border-[#0066FF]',
  },
  laticinios: {
    iconBox: 'bg-amber-50 border-amber-200 text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500',
    badge: 'bg-amber-50 text-amber-800 border-amber-200',
    hoverBtn: 'text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500',
  },
  congelados: {
    iconBox: 'bg-rose-50 border-rose-200 text-rose-600 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600',
    badge: 'bg-rose-50 text-rose-800 border-rose-200',
    hoverBtn: 'text-rose-600 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600',
  },
  higiene: {
    iconBox: 'bg-purple-50 border-purple-200 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600',
    badge: 'bg-purple-50 text-purple-800 border-purple-200',
    hoverBtn: 'text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600',
  },
  limpeza: {
    iconBox: 'bg-cyan-50 border-cyan-200 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600',
    badge: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    hoverBtn: 'text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600',
  },
  snacks: {
    iconBox: 'bg-orange-50 border-orange-200 text-orange-600 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500',
    badge: 'bg-orange-50 text-orange-800 border-orange-200',
    hoverBtn: 'text-orange-600 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500',
  },
  infantil: {
    iconBox: 'bg-pink-50 border-pink-200 text-pink-600 group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500',
    badge: 'bg-pink-50 text-pink-800 border-pink-200',
    hoverBtn: 'text-pink-600 group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500',
  },
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, index = 0 }) => {
  const icon = iconMap[category.iconName] || <Layers className="w-8 h-8" />;
  const theme = categoryThemes[category.slug] || categoryThemes.bebidas;

  return (
    <Link href={`/categorias/${category.slug}`} className="block h-full">
      <GlassCard3D className="h-full min-h-[360px]" intensity={8}>
        <div className="relative w-full h-full p-6 flex flex-col justify-between overflow-hidden group bg-white">
          {/* Background Stage - Image always fully visible */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#F8FAFC]">
            {category.image ? (
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />
            )}
          </div>
          {/* Subtle bottom gradient only for text readability */}
          <div className="absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-white/95 via-white/50 to-transparent pointer-events-none" />

          {/* Top Tag, Icon & Number */}
          <div className="relative z-10 flex items-center justify-between">
            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-xs group-hover:scale-105 transition-all duration-300 ${theme.iconBox}`}>
              {icon}
            </div>
            
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full border text-[11px] font-bold tracking-wider shadow-2xs ${theme.badge}`}>
                {category.itemCount}
              </span>
              <span className="text-xs font-mono font-medium text-slate-400">
                0{index + 1}
              </span>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10 pt-10">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-[#0B1B3A] group-hover:text-[#0066FF] transition-colors duration-300">
                {category.name}
              </h3>
              <div className={`w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-all duration-300 shrink-0 transform group-hover:rotate-45 shadow-2xs ${theme.hoverBtn}`}>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] line-clamp-2 mb-4 font-normal leading-relaxed">
              {category.shortDescription}
            </p>

            {/* Highlights pills */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/80">
              {category.highlights.slice(0, 2).map((h, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium text-slate-700 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-2xs"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </GlassCard3D>
    </Link>
  );
};
