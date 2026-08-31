'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { realCampaignBanners, RealCampaignBanner } from '@/data/gallery';
import { Sparkles, MapPin, ArrowRight, Eye, X, CheckCircle2, Store, Tag } from 'lucide-react';

export default function OfertasPage() {
  const [selectedBanner, setSelectedBanner] = useState<RealCampaignBanner | null>(null);

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Comunicação Visual DUM Sociedade Lda"
          title="Campanhas & Destaques Oficiais"
          subtitle="Conheça as campanhas exclusivas e marcas em destaque no armazém DUM. Imagens oficiais criadas para celebrar os melhores sabores e momentos da nossa terra."
        />

        <div className="space-y-12 mb-20">
          {realCampaignBanners.map((banner, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={banner.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-[#0066FF]/40 transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:col-start-6' : ''}`}>
                    <div
                      onClick={() => setSelectedBanner(banner)}
                      className="group relative w-full rounded-2xl overflow-hidden cursor-pointer shadow-md border border-slate-200 bg-slate-900 transition-all duration-500 hover:scale-[1.01]"
                    >
                      {banner.aspectRatio === 'portrait' ? (
                        <div className="relative w-full h-[520px] max-w-md mx-auto">
                          <Image
                            src={banner.image}
                            alt={banner.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
                            priority={index === 0}
                          />
                        </div>
                      ) : (
                        <div className="relative w-full aspect-[16/9] min-h-[280px] sm:min-h-[360px]">
                          <Image
                            src={banner.image}
                            alt={banner.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            priority={index === 0}
                          />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="flex items-center gap-2 text-white text-xs font-bold bg-[#0066FF] px-4 py-2 rounded-full shadow-lg">
                          <Eye className="w-4 h-4" />
                          <span>Clique para Ampliar Banner</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 flex flex-col justify-between ${isReversed ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-[#0066FF] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                          <Tag className="w-3 h-3" />
                          {banner.brand}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold flex items-center gap-1 border border-amber-300">
                          <Sparkles className="w-3 h-3 text-amber-600" />
                          Destaque Oficial DUM
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B3A] tracking-tight leading-snug mb-3">
                        {banner.slogan}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                        {banner.tagline}
                      </p>

                      <div className="space-y-2 mb-8">
                        {banner.highlights.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-100">
                      <MagneticButton
                        href={banner.productFilterUrl}
                        variant="primary"
                        size="md"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Ver Produtos da Campanha
                      </MagneticButton>

                      <MagneticButton
                        href="/localizacao"
                        variant="outline"
                        size="md"
                        icon={<MapPin className="w-3.5 h-3.5" />}
                      >
                        Disponível no Armazém
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-8 sm:p-12 rounded-3xl border border-slate-200 bg-white text-center max-w-4xl mx-auto shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-[#0066FF] flex items-center justify-center text-white mx-auto mb-5 shadow-sm">
            <Store className="w-7 h-7" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1B3A] mb-3">
            Visite o Armazém Presencial DUM Sociedade Lda
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-2xl mx-auto mb-8 leading-relaxed">
            Todas estas marcas e produtos encontram-se em stock físico contínuo nas nossas instalações. Venha conhecer a nossa variedade, atendimento de excelência e estrutura organizada.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/produtos" variant="primary" size="md">
              Explorar Catálogo Completo (140+ Produtos)
            </MagneticButton>
            <MagneticButton href="/localizacao" variant="outline" size="md">
              Ver Como Chegar ao Armazém
            </MagneticButton>
          </div>
        </div>
      </div>

      {selectedBanner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedBanner(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBanner(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-colors"
              title="Fechar visualização"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/40">
              <Image
                src={selectedBanner.image}
                alt={selectedBanner.title}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 w-full px-2 text-white">
              <div>
                <h4 className="text-base font-bold">{selectedBanner.slogan}</h4>
                <p className="text-xs text-white/70">{selectedBanner.brand} &bull; Campanha Oficial DUM Sociedade Lda</p>
              </div>

              <Link
                href={selectedBanner.productFilterUrl}
                onClick={() => setSelectedBanner(null)}
                className="px-5 py-2.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-lg"
              >
                <span>Ver Produtos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
