import React from 'react';
import {
  Layers,
  Award,
  Sparkles,
  Users,
  ArrowRight,
  MapPin,
  Store,
} from 'lucide-react';
import { HeroCinematic } from '@/components/hero/HeroCinematic';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { MorphDivider } from '@/components/ui/MorphDivider';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { CategoryCard } from '@/components/cards/CategoryCard';
import { ProductCard } from '@/components/cards/ProductCard';
import { BrandCarousel } from '@/components/brands/BrandCarousel';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className="relative w-full overflow-hidden bg-[#FFFFFF]">
      <HeroCinematic />

      <MorphDivider variant="gentle" fillColor="#F0F7FF" />

      <section className="relative py-20 md:py-32 bg-[#F0F7FF] px-6 sm:px-8 overflow-hidden">
        {/* Ambient color wash */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            badge="Diferenciais Exclusivos"
            title="A Excelência no Atendimento Presencial"
            subtitle="Mais do que um armazém: criámos um espaço onde a organização, a variedade e o acolhimento transformam cada visita numa experiência agradável."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <FeatureCard
              index={0}
              icon={<Layers className="w-7 h-7" />}
              tag="Diversidade Sem Igual"
              title="Grande Variedade"
              description="Do essencial para a despensa familiar às marcas mais conceituadas de mercearia, higiene e laticínios."
            />
            <FeatureCard
              index={1}
              icon={<Award className="w-7 h-7" />}
              tag="Padrão Rigoroso"
              title="Produtos de Qualidade"
              description="Seleção criteriosa de fornecedores e controlo contínuo de frescura, integridade e validade."
            />
            <FeatureCard
              index={2}
              icon={<Sparkles className="w-7 h-7" />}
              tag="Espaço Moderno"
              title="Ambiente Organizado"
              description="Corredores amplos, climatização agradável e sinalética intuitiva para compras confortáveis e sem pressa."
            />
            <FeatureCard
              index={3}
              icon={<Users className="w-7 h-7" />}
              tag="Equipa Dedicada"
              title="Atendimento Profissional"
              description="Colaboradores disponíveis para ajudar famílias e empresas a encontrar as melhores soluções."
            />
          </div>
        </div>
      </section>

      <MorphDivider variant="wave" fillColor="#FFFFFF" />

      <section className="relative py-20 md:py-32 bg-[#FFFFFF] px-6 sm:px-8">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0066FF]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-transparent bg-gradient-to-r from-[#0066FF] via-[#8B5CF6] to-[#22C55E] text-white text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-md shadow-purple-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Catálogo Físico
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1B3A]">
                Explore as Nossas Categorias
              </h2>
            </div>

            <MagneticButton
              href="/categorias"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Ver Todas as Categorias
            </MagneticButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      <MorphDivider variant="slant" fillColor="#F8FAFC" />

      <section className="relative py-20 md:py-32 bg-[#F8FAFC] px-6 sm:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            badge="Seleção Especial"
            title="Destaques Disponíveis no Armazém"
            subtitle="Conheça uma amostra dos produtos de excelência que encontra diariamente nas nossas gôndolas e balcões climatizados."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <MagneticButton
              href="/produtos"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explorar Catálogo Completo
            </MagneticButton>
          </div>
        </div>
      </section>

      <BrandCarousel />

      <section className="relative py-24 md:py-36 bg-gradient-to-b from-white via-[#F0F7FF] to-emerald-50 px-6 sm:px-8 text-center overflow-hidden">
        {/* Colorful ambient glows */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#0066FF]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-400/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-transparent bg-gradient-to-r from-[#0066FF] via-[#8B5CF6] to-[#22C55E] text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-md shadow-purple-500/25">
            <Store className="w-4 h-4" />
            Visita Presencial
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0B1B3A] leading-tight mb-6">
            O seu armazém de confiança{' '}
            <span className="text-gold-gradient font-serif italic block">
              espera pela sua visita.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-[#475569] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Venha conhecer pessoalmente a nossa infraestrutura, a frescura dos nossos produtos e o atendimento acolhedor que preparamos para si e para a sua família.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <MagneticButton
              href="/localizacao"
              variant="primary"
              size="lg"
              icon={<MapPin className="w-4 h-4" />}
            >
              Visite a DUM
            </MagneticButton>

            <MagneticButton
              href="/contacto"
              variant="outline"
              size="lg"
            >
              Falar Connosco
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
