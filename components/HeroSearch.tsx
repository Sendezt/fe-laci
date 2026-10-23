'use strict';

import React from 'react';
import { QUICK_KEYWORDS } from '@/data/products';
import { Icon } from '@/components/Icon';
import { Search, X } from 'lucide-react';

interface HeroSearchProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onQuickSearch: (keyword: string) => void;
  onClearSearch: () => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  searchQuery,
  onSearchChange,
  onQuickSearch,
  onClearSearch,
}) => {
  return (
    <section className="relative flex flex-col items-center text-center max-w-3xl mx-auto pt-6 pb-2">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-56 bg-gradient-to-b from-primary-fixed/30 via-secondary-container/20 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Badge Notice */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-4 border border-surface-container-high/60">
        <span className="text-sm">🏪</span>
        <span className="text-xs sm:text-sm text-primary font-semibold">
          Terbuka untuk Warga & Pelanggan Warung
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      </div>

      {/* Main Heading & Subtitle */}
      <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-primary tracking-tight leading-tight">
        Harga Barang Warung, Cek di Sini!
      </h1>
      <p className="text-sm sm:text-base text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
        Cari barang kebutuhan sehari-hari Anda dan lihat harga terbarunya secara transparan tanpa perlu repot bertanya ke kasir.
      </p>

      {/* Search Input Container */}
      <div className="w-full mt-6">
        <div className="relative flex items-center bg-surface-container-lowest rounded-xl shadow-[0_2px_12px_rgba(27,77,62,0.08)] border border-surface-container-high p-1.5 transition-all focus-within:ring-2 focus-within:ring-primary-container focus-within:border-transparent">
          <div className="flex items-center justify-center pl-3.5 pr-2 text-primary">
            <Icon icon={Search} className="size-6" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari nama barang, misalnya Indomie, Minyak, Telur..."
            className="w-full bg-transparent text-sm sm:text-base text-on-surface placeholder:text-outline focus:outline-none py-2 pr-2"
            autoComplete="off"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={onClearSearch}
              aria-label="Bersihkan pencarian"
              className="text-on-surface-variant hover:text-error transition-colors p-1.5 rounded-lg mr-1 cursor-pointer"
            >
              <Icon icon={X} className="size-5" />
            </button>
          )}
        </div>

        {/* Micro indicator note */}
        <div className="flex items-center justify-between mt-2 px-1 text-left">
          <span className="text-xs text-on-surface-variant flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Ketik langsung untuk menyaring harga barang secara instan
          </span>
          <span className="hidden sm:inline text-xs text-outline">
            Update harga: Hari Ini 07.30 WIB
          </span>
        </div>

        {/* Quick Popular Keywords */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-4">
          <span className="text-xs text-outline font-semibold uppercase tracking-wider">
            Cari Cepat:
          </span>
          {QUICK_KEYWORDS.map((keyword) => (
            <button
              key={keyword}
              type="button"
              onClick={() => onQuickSearch(keyword)}
              className={`text-xs sm:text-sm px-3.5 py-1 rounded-full border transition-all shadow-sm cursor-pointer ${
                searchQuery.toLowerCase().includes(keyword.toLowerCase())
                  ? 'bg-primary-container text-on-primary border-primary-container'
                  : 'bg-surface-container-lowest text-on-surface-variant border-surface-container-high hover:bg-primary-fixed hover:text-primary'
              }`}
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
