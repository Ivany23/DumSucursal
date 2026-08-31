'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Eye, MapPin, Package, Tag } from 'lucide-react';
import { Product } from '@/types';
import { GlassCard3D } from './GlassCard3D';

interface ProductCardProps {
  product: Product;
}

const categoryBadgeColors: Record<string, string> = {
  mercearia: 'bg-emerald-50 text-emerald-800 border-emerald-300 font-semibold',
  bebidas: 'bg-blue-50 text-blue-800 border-blue-300 font-semibold',
  laticinios: 'bg-amber-50 text-amber-900 border-amber-300 font-semibold',
  congelados: 'bg-rose-50 text-rose-800 border-rose-300 font-semibold',
  higiene: 'bg-purple-50 text-purple-800 border-purple-300 font-semibold',
  limpeza: 'bg-cyan-50 text-cyan-800 border-cyan-300 font-semibold',
  snacks: 'bg-orange-50 text-orange-800 border-orange-300 font-semibold',
  infantil: 'bg-pink-50 text-pink-800 border-pink-300 font-semibold',
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const badgeStyle =
    categoryBadgeColors[product.categorySlug] ||
    'bg-gray-50 text-gray-700 border-gray-200';

  return (
    <Link href={`/produtos/${product.slug}`} className="block h-full group">
      <GlassCard3D className="h-full min-h-[420px]" intensity={6}>
        <div className="relative w-full h-full p-5 flex flex-col justify-between bg-white rounded-2xl">
          {/* Header Tag / Category */}
          <div className="flex items-center justify-between z-10 mb-3 gap-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0B1B3A] tracking-wider uppercase bg-[#F8FAFC] px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
              <Tag className="w-3 h-3 text-[#0066FF]" />
              <span className="truncate max-w-[120px]">{product.brand}</span>
            </span>

            {product.isFeatured ? (
              <span className="flex items-center gap-1 text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300 shadow-2xs flex-shrink-0">
                <Sparkles className="w-3 h-3 text-amber-600 fill-amber-500" />
                Destaque
              </span>
            ) : (
              <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border truncate max-w-[110px] ${badgeStyle}`}>
                {product.category.split(' &')[0]}
              </span>
            )}
          </div>

          {/* Product Image Stage */}
          <div className="relative w-full h-48 my-auto rounded-2xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center p-3 group-hover:border-[#0066FF]/40 transition-all duration-300">
            {product.image ? (
              <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-105 flex items-center justify-center bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain p-2 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-2 bg-white">
                <div className="w-12 h-12 rounded-xl bg-[#F0F7FF] border border-[#0066FF]/20 flex items-center justify-center text-[#0066FF] mb-2 shadow-xs group-hover:scale-110 transition-transform">
                  <Package className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-[#0066FF] uppercase block">
                  DUM Seleção
                </span>
                <span className="text-[9px] text-[#64748B] mt-0.5 font-light">
                  {product.packaging || 'Embalagem Original'}
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-[#0B1B3A]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-xs font-bold text-white rounded-2xl">
              <Eye className="w-4 h-4 text-white" />
              <span>Ver Detalhes</span>
            </div>
          </div>

          {/* Bottom Info Section */}
          <div className="mt-4 pt-3 border-t border-slate-100 z-10 flex flex-col justify-between flex-1">
            <div>
              <span className="text-[10px] font-semibold text-[#64748B] block mb-1 uppercase tracking-wider">
                {product.category}
              </span>
              <h4 className="text-sm font-bold text-[#0B1B3A] group-hover:text-[#0066FF] transition-colors duration-200 line-clamp-2 leading-snug mb-1.5" title={product.name}>
                {product.name}
              </h4>
              <p className="text-[11px] text-[#64748B] line-clamp-2 font-normal leading-relaxed mb-3">
                {product.description}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs pt-2.5 border-t border-slate-100 mt-auto">
              <span className="text-[#0066FF] text-[11px] font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
                Armazém DUM
              </span>
              <span className="text-[#0066FF] text-[11px] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                Detalhes &rarr;
              </span>
            </div>
          </div>
        </div>
      </GlassCard3D>
    </Link>
  );
};
