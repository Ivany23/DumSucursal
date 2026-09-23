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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100 ${
          isScrolled ? 'py-2.5 shadow-sm' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center group py-0.5 transition-transform duration-300 hover:scale-[1.03]"
            aria-label="DUM Sociedade Lda - Página Inicial"
          >
            <Image
              src="/images/logo/DumLogo1.png"
              alt="DUM Sociedade Lda"
              width={1071}
              height={634}
              priority
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-slate-50 border border-slate-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0066FF] text-white font-bold shadow-xs'
                      : 'text-slate-600 hover:text-[#0066FF] hover:bg-white'
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
              className="p-2.5 rounded-full bg-white border border-slate-200 text-[#0066FF] hover:border-[#0066FF] transition-all flex items-center gap-2 text-xs font-medium shadow-2xs group cursor-pointer"
              title="Pesquisar produtos ou marcas"
              aria-label="Abrir pesquisa"
            >
              <Search className="w-4 h-4 text-[#0066FF] group-hover:scale-110 transition-transform" />
              <span className="text-slate-500 group-hover:text-[#0B1B3A]">Pesquisar...</span>
            </button>

            <MagneticButton
              href="/localizacao"
              variant="primary"
              size="sm"
              icon={<MapPin className="w-3.5 h-3.5" />}
            >
              Visite a DUM
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0066FF] hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="Pesquisar"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/localizacao"
              className="px-3 py-2 rounded-full text-xs font-bold text-white bg-[#0066FF] flex items-center gap-1 shadow-2xs"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Visitar</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0066FF] hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="Abrir Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-[#0B1B3A]/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF]">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B1B3A]">Pesquisa no Catálogo DUM</h3>
                  <p className="text-xs text-[#64748B]">Encontre qualquer um dos 140+ produtos ou marcas</p>
                </div>
              </div>

              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <SearchBar
              autoFocus
              showDropdown={true}
              placeholder="Digite o nome do produto ou marca (ex: Compal, Dettol, Arroz, Açúcar)..."
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
