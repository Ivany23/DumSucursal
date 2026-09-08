import React from 'react';
import Link from 'next/link';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard3D } from '@/components/cards/GlassCard3D';
import { BrandCarousel } from '@/components/brands/BrandCarousel';
import { brands } from '@/data/brands';
import { Globe, Sparkles, ArrowRight, Tag } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

const getCategoryColors = (category: string) => {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    'Mercearia Fina': { bg: 'bg-[#7CB342]', text: 'text-[#2E7D32]', border: 'border-[#7CB342]/30' },
    'Massas & Molhos': { bg: 'bg-[#FF8C00]', text: 'text-[#E65100]', border: 'border-[#FF8C00]/30' },
    'Nutrição & Laticínios': { bg: 'bg-[#A855F7]', text: 'text-[#7E22CE]', border: 'border-[#A855F7]/30' },
    'Chocolates & Doçaria': { bg: 'bg-[#DC2626]', text: 'text-[#B91C1C]', border: 'border-[#DC2626]/30' },
    'Bebidas & Sumos': { bg: 'bg-[#0066FF]', text: 'text-[#0066FF]', border: 'border-[#0066FF]/30' },
    'Cuidado Pessoal': { bg: 'bg-[#06B6D4]', text: 'text-[#0891B2]', border: 'border-[#06B6D4]/30' },
    'Limpeza do Lar': { bg: 'bg-[#10B981]', text: 'text-[#047857]', border: 'border-[#10B981]/30' },
    'Linha Infantil': { bg: 'bg-[#EC4899]', text: 'text-[#DB2777]', border: 'border-[#EC4899]/30' },
    'Garrafeira': { bg: 'bg-[#8B5CF6]', text: 'text-[#6D28D9]', border: 'border-[#8B5CF6]/30' },
    'Higiene Oral': { bg: 'bg-[#F59E0B]', text: 'text-[#D97706]', border: 'border-[#F59E0B]/30' },
  };
  return colors[category] || { bg: 'bg-[#0066FF]', text: 'text-[#0066FF]', border: 'border-[#0066FF]/30' };
};

export default function MarcasPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Parcerias Globais & Nacionais"
          title="Marcas de Prestígio"
          subtitle="Trabalhamos exclusivamente com produtores e marcas certificadas, garantindo que cada artigo na nossa loja física cumpre os mais altos padrões de pureza, sabor e eficácia."
        />

        <BrandCarousel />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {brands.map((brand) => {
            const catColors = getCategoryColors(brand.category);
            return (
              <Link
                key={brand.id}
                href={`/produtos?marca=${encodeURIComponent(brand.name)}`}
                className="block group h-full"
              >
                <GlassCard3D className="h-full" intensity={8}>
                  <div className="p-8 h-full flex flex-col justify-between bg-gradient-to-br from-white to-slate-50/50">
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <span className="text-3xl font-serif font-black tracking-wider text-[#0066FF] group-hover:text-[#0052CC] transition-colors">
                          {brand.logoText}
                        </span>
                        <span className={`flex items-center gap-1.5 text-[11px] text-white font-bold px-3 py-1.5 rounded-full border ${catColors.border} ${catColors.bg} shadow-sm`}>
                          <Globe className="w-3 h-3 text-white" />
                          {brand.origin}
                        </span>
                      </div>

                      <span className={`text-xs font-bold uppercase tracking-widest ${catColors.text} block mb-3`}>
                        {brand.category}
                      </span>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6 line-clamp-3">
                        {brand.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs text-[#0066FF] font-semibold bg-[#0066FF]/5 px-3 py-2 rounded-lg">
                        <Tag className="w-3.5 h-3.5" />
                        {brand.featuredProductCount}+ Produtos
                      </span>
                      <span className="text-[#0066FF] font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                        Ver no Catálogo <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </GlassCard3D>
              </Link>
            );
          })}
        </div>

        <div className="p-10 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 text-center max-w-4xl mx-auto shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#22C55E] flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-[#0066FF]/30">
            <Sparkles className="w-7 h-7" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1B3A] mb-3">
            Compromisso com a Autenticidade
          </h3>
          <p className="text-sm text-slate-600 font-normal max-w-2xl mx-auto mb-8 leading-relaxed">
            Todas as marcas comercializadas no armazém DUM Sociedade Lda contam com rastreabilidade de lote e certificados sanitários oficiais.
          </p>
          <MagneticButton href="/produtos" variant="primary" size="md">
            Ver Todos os Produtos das Marcas
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}