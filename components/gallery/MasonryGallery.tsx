'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';
import { Maximize2, Camera, Sparkles, MapPin, Store } from 'lucide-react';
import { GalleryItem } from '@/types';
import { LightboxModal } from './LightboxModal';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface MasonryGalleryProps {
  items: GalleryItem[];
  showFilters?: boolean;
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  items = [],
  showFilters = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { label: 'Todos os Espaços', value: 'todos' },
    { label: 'Armazém & Gôndolas', value: 'armazem' },
    { label: 'Frescos & Laticínios', value: 'frescos' },
    { label: 'Seleção de Produtos', value: 'produtos' },
    { label: 'Atendimento', value: 'atendimento' },
  ];

  const filteredItems =
    activeCategory === 'todos'
      ? items
      : items.filter((item) => item.category === activeCategory);

  if (!items || items.length === 0) {
    return (
      <div className="py-16">
        <div className="max-w-2xl mx-auto text-center p-10 sm:p-14 rounded-3xl glass-panel border border-[#0052CC]/30 bg-[#F0F7FF]/80 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-[#0066FF] border border-[#0052CC]/30 flex items-center justify-center text-[#FFFFFF] mx-auto mb-6 shadow-xl">
            <Camera className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1FF] border border-[#0052CC]/30 text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3 text-[#0066FF]" />
            Galeria Oficial em Atualização
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1B3A] mb-4">
            Fotografias Oficiais do Armazém
          </h3>

          <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed mb-8">
            Estamos a integrar a nova sessão fotográfica oficial das nossas instalações e balcões para transmitir a verdadeira identidade da DUM Sociedade Lda.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/localizacao" variant="primary" size="md" icon={<MapPin className="w-4 h-4" />}>
              Visitar Pessoalmente a Loja
            </MagneticButton>
            <MagneticButton href="/produtos" variant="outline" size="md">
              Explorar Catálogo
            </MagneticButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-[#FFFFFF] shadow-[0_0_20px_rgba(0,102,255,0.4)]'
                    : 'bg-[#EAF1FF]/60 text-[#64748B] hover:text-[#0066FF] border border-[#0052CC]/20 hover:border-[#0052CC]/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Masonry-like Grid */}
      <m.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredItems.map((item, index) => (
          <m.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={`group relative rounded-2xl overflow-hidden glass-panel border border-[#0052CC]/20 cursor-pointer ${
              index % 4 === 0 ? 'sm:col-span-2 sm:row-span-2 min-h-[420px]' : 'min-h-[280px]'
            }`}
            onClick={() => setSelectedItem(item)}
          >
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.75] group-hover:brightness-95"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#EAF1FF] via-[#F4F8FF] to-[#FFFFFF] flex items-center justify-center">
                <Store className="w-12 h-12 text-[#0066FF]/30" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Hover overlay content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
              <div className="flex justify-end">
                <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <Maximize2 className="w-4 h-4 text-[#0066FF]" />
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0066FF] block mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B1B3A] group-hover:text-[#0066FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#334155] mt-1 font-light line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </m.div>
        ))}
      </m.div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(it) => setSelectedItem(it)}
      />
    </div>
  );
};
