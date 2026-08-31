import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  CheckCircle2,
  Package,
  Globe,
  ArrowLeft,
  Store,
} from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/cards/ProductCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { StoreStatus } from '@/components/ui/StoreStatus';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-28 pb-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center gap-3 text-xs text-[#64748B]">
          <Link href="/produtos" className="hover:text-[#0066FF] flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Todos os Produtos</span>
          </Link>
          <span>/</span>
          <Link href={`/categorias/${product.categorySlug}`} className="hover:text-[#0066FF]">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[#0066FF] font-medium truncate max-w-[200px]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-24">
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-slate-200 bg-white p-8 flex items-center justify-center shadow-sm">
              {product.image ? (
                <div className="relative w-full h-full bg-white flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-6">
                  <div className="w-24 h-24 rounded-3xl bg-[#0066FF] flex items-center justify-center text-[#FFFFFF] mb-4 shadow-lg">
                    <Package className="w-12 h-12" />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-[#0066FF] uppercase block mb-1">
                    {product.brand} &bull; DUM Seleção
                  </span>
                  <span className="text-xs text-slate-500 font-normal">
                    Artigo Autêntico com Garantia de Procedência
                  </span>
                </div>
              )}

              <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                <span className="px-3.5 py-1 rounded-full bg-[#0066FF] text-white text-xs font-bold uppercase tracking-wider shadow-2xs">
                  {product.brand}
                </span>
                {product.origin && (
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-medium flex items-center gap-1.5 shadow-2xs">
                    <Globe className="w-3 h-3 text-[#0066FF]" />
                    Origem: {product.origin}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#0066FF] px-3.5 py-1 rounded-lg">
                  {product.category}
                </span>
                <StoreStatus />
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3A] tracking-tight mb-4 leading-tight">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
                {product.longDescription || product.description}
              </p>

              {product.categorySlug !== 'mercearia' && (
                <div className="mb-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-4">
                    Especificações & Características
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                    {product.packaging && (
                      <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                        <Package className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                        <span>Embalagem: {product.packaging}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Store className="w-5 h-5 text-[#0066FF]" />
                <span className="text-sm font-bold uppercase tracking-wider text-[#0B1B3A]">
                  Disponível para Compra Presencial
                </span>
              </div>

              <p className="text-xs text-slate-500 font-normal mb-6">
                Este artigo encontra-se em exibição e disponível nas gôndolas do armazém DUM Sociedade Lda. Visite-nos para conferir a frescura, proveniência e lote deste produto.
              </p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton
                  href="/localizacao"
                  variant="primary"
                  size="md"
                  icon={<MapPin className="w-4 h-4" />}
                >
                  Encontrar na Loja
                </MagneticButton>

                <MagneticButton
                  href="/contacto"
                  variant="outline"
                  size="md"
                >
                  Informações de Lote
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="border-t border-[#0B1B3A]/10 pt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-1">
                  Mais Escolhas em {product.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B3A]">
                  Produtos Relacionados
                </h2>
              </div>

              <Link
                href={`/categorias/${product.categorySlug}`}
                className="text-xs font-semibold uppercase tracking-wider text-[#0066FF] hover:underline"
              >
                Ver Categoria Completa &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
