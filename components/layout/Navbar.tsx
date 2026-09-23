'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, MapPin, Search, X } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { MobileNav } from './MobileNav';
import { SearchBar } from '@/components/search/SearchBar';

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Categorias', href: '/categorias' },
  { label: 'Marcas', href: '/marcas' },
  { label: 'Ofertas & Destaques', href: '/ofertas' },
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'Localização', href: '/localizacao' },
  { label: 'Contacto', href: '/contacto' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setSearchModalOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80'
            : 'py-3.5 bg-white/85 backdrop-blur-sm border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center group py-0.5" aria-label="DUM Sociedade Lda - Início">
            <Image
              src="/images/logo/logo.png"
              alt="DUM Sociedade Lda"
              width={160}
              height={55}
              priority
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-50 border border-slate-200/80">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1D4ED8] text-white font-semibold shadow-sm'
                      : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-200/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="px-3 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#0F172A] hover:bg-slate-100 hover:border-slate-300 transition-all flex items-center gap-2 text-xs font-medium shadow-2xs group"
              title="Pesquisar produtos ou marcas"
              aria-label="Abrir pesquisa"
            >
              <Search className="w-3.5 h-3.5 text-[#1D4ED8] group-hover:scale-110 transition-transform" />
              <span className="text-slate-500">Pesquisar...</span>
            </button>

            <MagneticButton
              href="/localizacao"
              variant="primary"
              size="sm"
              icon={<MapPin className="w-3.5 h-3.5" />}
            >
              Visitar Loja
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#1D4ED8] hover:bg-white transition-colors"
              aria-label="Pesquisar"
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              href="/localizacao"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1D4ED8] bg-blue-50 border border-blue-200 flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Visitar</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-white transition-colors"
              aria-label="Abrir Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1D4ED8]">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">Pesquisa no Catálogo DUM</h3>
                  <p className="text-xs text-slate-500">140+ produtos e marcas em stock</p>
                </div>
              </div>

              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <SearchBar
              autoFocus
              showDropdown={true}
              placeholder="Digite o nome do produto ou marca (ex: Compal, Dettol, Arroz, Açúcar, MaQ)..."
            />
          </div>
        </div>
      )}

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
