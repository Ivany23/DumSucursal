'use client';

import React, { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { StoreStatus } from '@/components/ui/StoreStatus';
import { HeroScene3D } from './HeroScene3D';

export const HeroCinematic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax layers transform
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen h-screen overflow-hidden flex items-center justify-center bg-[#FFFFFF]"
    >
      {/* Layer 1: Procedural Blue & White Atmospheric Background */}
      <m.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 origin-center pointer-events-none"
      >
        {/* Ambient light base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,102,255,0.5),rgba(255,255,255,1))]" />
        
        {/* Blue Glow Spots */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-[#0052CC]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#0066FF]/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#0052CC]/25 rounded-full blur-[130px]" />

        {/* Subtle geometric luxury grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0052CC08_1px,transparent_1px),linear-gradient(to_bottom,#0052CC08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

        {/* Vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/90 via-transparent to-[#FFFFFF]/90" />
      </m.div>

      {/* Layer 2: 3D WebGL Floating Particles */}
      <HeroScene3D />

      {/* Layer 3: Main Typography & Interactive Content */}
      <m.div
        style={{ y: textY, opacity }}
        className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center pt-16 sm:pt-20"
      >
        {/* Badge & Store Status */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <span className="px-3.5 py-1 rounded-full border border-amber-300/80 bg-white text-slate-800 text-xs font-bold uppercase tracking-[0.25em] shadow-2xs flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span className="text-[#0066FF]">DUM Sociedade Lda</span> &bull; Armazém Moderno
          </span>
          <StoreStatus />
        </m.div>

        {/* Master Headline */}
        <m.h1
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#0B1B3A] leading-[1.08] mb-6"
        >
          Tudo o que precisa.{' '}
          <span className="block text-gold-gradient italic font-serif font-normal">
            Num só lugar.
          </span>
        </m.h1>

        {/* Subheadline */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal max-w-3xl mb-10 leading-relaxed"
        >
          Qualidade, variedade e uma experiência de compra moderna para toda a família e empresas.
        </m.p>

        {/* Action Buttons */}
        <m.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <MagneticButton
            href="/produtos"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explorar Produtos
          </MagneticButton>

          <MagneticButton
            href="/localizacao"
            variant="outline"
            size="lg"
            icon={<MapPin className="w-4 h-4" />}
          >
            Como Chegar à Loja
          </MagneticButton>
        </m.div>
      </m.div>

      {/* Layer 4: Decorative Bottom Scroll Indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0066FF]">
          Descubra o Armazém
        </span>
        <m.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-7 h-11 rounded-full border border-slate-300 bg-white flex items-start justify-center p-1.5 shadow-2xs"
        >
          <div className="w-1.5 h-3 rounded-full bg-[#0066FF]" />
        </m.div>
      </m.div>
    </div>
  );
};
