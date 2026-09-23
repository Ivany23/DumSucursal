'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { StoreStatus } from '@/components/ui/StoreStatus';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#061A30] text-slate-300 border-t border-slate-800 overflow-hidden pt-16 pb-12">
      {/* Subtle Navy ambient accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#1D4ED8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1 & 2: Brand & Purpose */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-5 group" aria-label="DUM Sociedade Lda - Página Inicial">
                <Image
                  src="/images/logo/logo-white.png"
                  alt="DUM Sociedade Lda"
                  width={180}
                  height={65}
                  className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <p className="text-sm text-slate-400 leading-relaxed max-w-md font-light mb-6">
                Armazém comercial de referência para compras presenciais. Variedade, autenticidade garantida e atendimento acolhedor para famílias e empresas.
              </p>

              <StoreStatus />
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-blue-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantia de Qualidade & Origem Certificada</span>
            </div>
          </div>

          {/* Col 3: Navegação Rápida */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 border-b border-slate-800 pb-2">
              Explorar
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-light text-slate-300">
              <li>
                <Link href="/produtos" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Catálogo de Produtos</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Todas as Categorias</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                </Link>
              </li>
              <li>
                <Link href="/marcas" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Marcas Parceiras</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                </Link>
              </li>
              <li>
                <Link href="/ofertas" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Campanhas Oficiais</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Sobre a DUM</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                </Link>
              </li>
              <li>
                <Link href="/localizacao" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Onde Estamos</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Categorias Principais */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 border-b border-slate-800 pb-2">
              Secções do Armazém
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-light text-slate-300">
              <li>
                <Link href="/categorias/mercearia" className="hover:text-white transition-colors">
                  Mercearia & Essenciais
                </Link>
              </li>
              <li>
                <Link href="/categorias/bebidas" className="hover:text-white transition-colors">
                  Bebidas & Garrafeira
                </Link>
              </li>
              <li>
                <Link href="/categorias/laticinios" className="hover:text-white transition-colors">
                  Laticínios & Frescos
                </Link>
              </li>
              <li>
                <Link href="/categorias/congelados" className="hover:text-white transition-colors">
                  Congelados Selecionados
                </Link>
              </li>
              <li>
                <Link href="/categorias/higiene" className="hover:text-white transition-colors">
                  Higiene & Cuidado Pessoal
                </Link>
              </li>
              <li>
                <Link href="/categorias/limpeza" className="hover:text-white transition-colors">
                  Limpeza & Cuidado do Lar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Localização & Horários */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 border-b border-slate-800 pb-2">
              Loja Física
            </h4>
            <div className="flex flex-col gap-3.5 text-xs font-light text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  DUM Sede, Maputo / Moçambique<br />
                  Estacionamento amplo e gratuito
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Segunda a Sábado: 08:00 - 20:00<br />
                  Domingos e Feriados: 08:00 - 18:00
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+244 923 000 000 / +244 931 000 000</span>
              </div>

              <Link
                href="/localizacao"
                className="mt-2 inline-flex items-center justify-center gap-2 p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300 font-semibold hover:bg-blue-600/30 transition-colors"
              >
                <span>Ver Rota no Mapa</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-500">
          <div>
            &copy; {currentYear} DUM Sociedade Lda. Todos os direitos reservados.
          </div>
          <div>
            Website Institucional de Apresentação & Catálogo Presencial.
          </div>
        </div>
      </div>
    </footer>
  );
};
