'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { StoreStatus } from '@/components/ui/StoreStatus';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F8FAFC] border-t border-slate-200 text-slate-600 overflow-hidden pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1 & 2: Brand & Purpose */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-xl bg-blue-gradient border border-[#0066FF]/40 flex items-center justify-center shadow-sm">
                  <span className="text-2xl font-serif font-black text-white">
                    D
                  </span>
                </div>
                <div>
                  <span className="text-2xl font-bold tracking-wider text-[#0B1B3A] font-serif block">
                    DUM
                  </span>
                  <span className="text-xs tracking-[0.25em] text-[#0066FF] uppercase font-bold">
                    Sociedade Lda
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed max-w-md font-normal mb-6">
                Armazém moderno com características de supermercado. A nossa missão é proporcionar uma experiência de compra presencial organizada, acolhedora, moderna e de confiança para famílias e empresas.
              </p>

              <StoreStatus />
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-2 text-xs text-[#0066FF] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
              <span>Garantia de Qualidade & Origem Certificada</span>
            </div>
          </div>

          {/* Col 3: Navegação Rápida */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#0B1B3A] mb-6 border-b border-slate-200 pb-2">
              Explorar
            </h4>
            <ul className="flex flex-col gap-3 text-sm font-normal">
              <li>
                <Link href="/produtos" className="hover:text-[#0066FF] transition-colors flex items-center justify-between group">
                  <span>Catálogo de Produtos</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#0066FF]" />
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="hover:text-dum-primary transition-colors flex items-center justify-between group">
                  <span>Todas as Categorias</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-dum-primary" />
                </Link>
              </li>
              <li>
                <Link href="/marcas" className="hover:text-dum-primary transition-colors flex items-center justify-between group">
                  <span>Marcas Parceiras</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-dum-primary" />
                </Link>
              </li>
              <li>
                <Link href="/ofertas" className="hover:text-dum-primary transition-colors flex items-center justify-between group">
                  <span>Campanhas & Destaques</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-dum-primary" />
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-dum-primary transition-colors flex items-center justify-between group">
                  <span>Sobre a DUM</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-dum-primary" />
                </Link>
              </li>
              <li>
                <Link href="/localizacao" className="hover:text-dum-primary transition-colors flex items-center justify-between group">
                  <span>Onde Estamos</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-dum-primary" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Categorias Principais */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-dum-text-primary mb-6 border-b border-dum-primary/10 pb-2">
              Secções da Loja
            </h4>
            <ul className="flex flex-col gap-3 text-sm font-light">
              <li>
                <Link href="/categorias/mercearia" className="hover:text-dum-primary transition-colors">
                  Mercearia & Essenciais
                </Link>
              </li>
              <li>
                <Link href="/categorias/bebidas" className="hover:text-dum-primary transition-colors">
                  Bebidas & Garrafeira
                </Link>
              </li>
              <li>
                <Link href="/categorias/laticinios" className="hover:text-dum-primary transition-colors">
                  Laticínios & Frescos
                </Link>
              </li>
              <li>
                <Link href="/categorias/congelados" className="hover:text-dum-primary transition-colors">
                  Congelados Selecionados
                </Link>
              </li>
              <li>
                <Link href="/categorias/higiene" className="hover:text-dum-primary transition-colors">
                  Higiene & Cuidado Pessoal
                </Link>
              </li>
              <li>
                <Link href="/categorias/limpeza" className="hover:text-dum-primary transition-colors">
                  Limpeza & Cuidado do Lar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Localização & Horários */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-dum-text-primary mb-6 border-b border-dum-primary/10 pb-2">
              Loja Física
            </h4>
            <div className="flex flex-col gap-4 text-xs font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-dum-primary shrink-0 mt-0.5" />
                <span>
                  Armazém DUM, Luanda / Angola<br />
                  Acesso facilitado e estacionamento seguro
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-dum-primary shrink-0 mt-0.5" />
                <span>
                  Segunda a Sábado: 08:00 - 20:00<br />
                  Domingos e Feriados: 08:00 - 18:00
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-dum-primary shrink-0" />
                <span>+244 923 000 000 / +244 931 000 000</span>
              </div>

              <Link
                href="/localizacao"
                className="mt-2 inline-flex items-center justify-center gap-2 p-2.5 rounded-lg bg-dum-primary/10 border border-dum-primary/30 text-dum-primary font-semibold hover:bg-dum-primary/20 transition-colors"
              >
                <span>Ver Rota no Mapa</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-dum-primary/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <div>
            &copy; {currentYear} DUM Sociedade Lda. Todos os direitos reservados.
          </div>
          <div className="text-[#64748B]">
            Website Institucional de Apresentação & Catálogo Presencial.
          </div>
        </div>
      </div>
    </footer>
  );
};
