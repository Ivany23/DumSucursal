'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, ChevronRight, Sparkles, Tag, ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { brands } from '@/data/brands';
import { Product } from '@/types';

const normalizeText = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

interface SearchBarProps {
  initialValue?: string;
  onSearchChange?: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
  showDropdown?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  initialValue = '',
  onSearchChange,
  placeholder = 'Pesquisar por produto, marca (ex: Compal, Dettol, Arroz)...',
  autoFocus = false,
  className = '',
  showDropdown = true,
}) => {
  const [query, setQuery] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (onSearchChange) {
      onSearchChange(val);
    }
    if (val.trim().length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearchChange) {
      onSearchChange('');
    }
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsOpen(false);
      if (query.trim()) {
        router.push(`/produtos?q=${encodeURIComponent(query.trim())}`);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const searchResults = useMemo(() => {
    const rawTerm = query.trim();
    const normTerm = normalizeText(rawTerm);
    if (!rawTerm || normTerm.length < 2) return { matchingBrands: [], matchingProducts: [] };

    const matchingBrands = brands.filter((b) => {
      const normName = normalizeText(b.name);
      const normSlug = normalizeText(b.slug);
      return normName.includes(normTerm) || normSlug.includes(normTerm);
    }).slice(0, 4);

    const matchingProducts = products.filter((p) => {
      const corpus = normalizeText(
        [p.name, p.brand, p.category, p.description, ...(p.tags || []), ...(p.features || [])].join(' ')
      );
      return corpus.includes(normTerm);
    }).slice(0, 6);

    return { matchingBrands, matchingProducts };
  }, [query]);

  const hasResults =
    searchResults.matchingBrands.length > 0 || searchResults.matchingProducts.length > 0;

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <div className="relative flex items-center w-full">
        <div className="absolute left-4 pointer-events-none text-dum-primary flex items-center justify-center">
          <Search className="w-5 h-5 text-[#0066FF]" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => {
            if (query.trim().length > 1) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full pl-12 pr-12 py-3.5 bg-white text-[#0B1B3A] placeholder-slate-400 text-sm md:text-base rounded-2xl border border-slate-200 focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10 shadow-xs transition-all duration-300"
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            title="Limpar pesquisa"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {showDropdown && isOpen && query.trim().length > 1 && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in-50 slide-in-from-top-2 duration-200">
          {hasResults ? (
            <div className="p-3 max-h-[460px] overflow-y-auto divide-y divide-slate-100">
              {searchResults.matchingBrands.length > 0 && (
                <div className="pb-3 pt-1">
                  <div className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold tracking-wider text-[#0066FF] uppercase">
                    <Tag className="w-3 h-3" />
                    <span>Marcas Relacionadas</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-1">
                    {searchResults.matchingBrands.map((b) => (
                      <Link
                        key={b.id}
                        href={`/produtos?marca=${encodeURIComponent(b.name)}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#0066FF] group-hover:scale-125 transition-transform" />
                          <span className="text-sm font-semibold text-[#0B1B3A] group-hover:text-[#0066FF]">
                            {b.name}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 group-hover:text-[#0066FF] flex items-center gap-0.5 font-medium">
                          Ver produtos <ChevronRight className="w-3 h-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {searchResults.matchingProducts.length > 0 && (
                <div className="pt-3 pb-1">
                  <div className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold tracking-wider text-[#0066FF] uppercase">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>Produtos Encontrados</span>
                  </div>
                  <div className="space-y-1 mt-1">
                    {searchResults.matchingProducts.map((p) => (
                      <Link
                        key={p.id}
                        href={`/produtos/${p.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-50 transition-all group"
                      >
                        <div className="relative w-12 h-12 rounded-lg bg-white border border-slate-200 overflow-hidden flex-shrink-0 p-1 flex items-center justify-center">
                          {p.image ? (
                            <Image
                              src={p.image}
                              alt={p.name}
                              width={44}
                              height={44}
                              className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
                              style={{ width: 'auto', height: 'auto' }}
                            />
                          ) : (
                            <span className="text-xs text-slate-400">DUM</span>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066FF] bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                              {p.brand}
                            </span>
                            <span className="text-[11px] text-slate-500 truncate">
                              {p.category}
                            </span>
                          </div>
                          <h4 className="text-sm font-semibold text-[#0B1B3A] group-hover:text-[#0066FF] truncate transition-colors">
                            {p.name}
                          </h4>
                        </div>

                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0066FF] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2 px-1">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    router.push(`/produtos?q=${encodeURIComponent(query.trim())}`);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Ver todos os resultados para &quot;{query}&quot;</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-sm font-medium text-[#0B1B3A]">
                Nenhum produto encontrado para &quot;{query}&quot;
              </p>
              <p className="text-xs text-[#64748B] mt-1">
                Tente pesquisar por uma marca (ex: CIM, Coca-Cola, Dettol, Bakers) ou categoria.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
