'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { m, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Store } from 'lucide-react';
import { GalleryItem } from '@/types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    if (items.length <= 1) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const handlePrev = () => {
    if (items.length <= 1) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  return (
    <AnimatePresence>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev Button */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hidden sm:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hidden sm:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Modal Content */}
        <m.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-5xl w-full max-h-[88vh] flex flex-col rounded-2xl overflow-hidden glass-panel border border-[#0052CC]/30"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-[55vh] sm:h-[65vh] bg-[#FFFFFF] flex items-center justify-center">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-8">
                <Store className="w-16 h-16 text-[#0066FF]/40 mb-3" />
                <span className="text-sm font-semibold text-[#0066FF] uppercase tracking-widest">
                  Instalações DUM Sociedade Lda
                </span>
              </div>
            )}
          </div>

          <div className="p-6 bg-[#F0F7FF] border-t border-[#0052CC]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#0066FF] block mb-1">
                Ambiente DUM &bull; {item.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B3A]">
                {item.title}
              </h3>
              <p className="text-sm text-[#64748B] mt-1 font-light">
                {item.description}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#FFFFFF] font-medium bg-[#0066FF] px-4 py-2 rounded-xl border border-[#0052CC]/30 shrink-0">
              <MapPin className="w-4 h-4" />
              <span>Visite a DUM presencialmente</span>
            </div>
          </div>
        </m.div>
      </m.div>
    </AnimatePresence>
  );
};
