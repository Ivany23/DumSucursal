'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { brandImages } from '@/data/brandImages';

/**
 * Brand carousel using pure CSS animation instead of framer-motion.
 * CSS @keyframes animation is GPU-composited and adds zero JS overhead.
 */
export const BrandCarousel = () => {
  // Double the array for seamless infinite loop
  const doubled = useMemo(() => [...brandImages, ...brandImages], []);

  return (
    <section className="relative w-full py-10 overflow-hidden bg-[#FFFFFF]">
      {/* Fades nas extremidades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-48 z-10 bg-gradient-to-r from-[#FFFFFF] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-48 z-10 bg-gradient-to-l from-[#FFFFFF] to-transparent" />

      <div className="relative overflow-hidden">
        <div
          className="flex items-center w-max will-change-transform brand-scroll"
          aria-label="Marcas parceiras do Armazém DUM"
        >
          {doubled.map((brand, idx) => (
            <div
              key={`${idx}-${brand.id}`}
              aria-hidden={idx >= brandImages.length}
              className="flex items-center justify-center w-64 h-44 mx-6 shrink-0 py-2"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={240}
                height={150}
                quality={75}
                loading="lazy"
                sizes="240px"
                className="object-contain max-w-full max-h-full"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .brand-scroll {
          animation: scroll-brands 110s linear infinite;
        }

        @keyframes scroll-brands {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause animation when user prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .brand-scroll {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
};