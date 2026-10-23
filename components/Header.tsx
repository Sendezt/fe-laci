'use strict';

import React from 'react';
import { Icon } from '@/components/Icon';
import { Store, UserRound } from 'lucide-react';

interface HeaderProps {
  onNavClick?: (section: string) => void;
  activeNav?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onNavClick,
  activeNav = 'katalog-harga',
}) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(27,77,62,0.06)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative h-10 w-10 flex-shrink-0 bg-primary-container rounded-lg overflow-hidden flex items-center justify-center p-1.5 shadow-sm">
            <Icon icon={Store} className="size-6 text-on-primary" />
          </div>
          <div className="flex flex-col truncate">
            <span className="font-bold text-base sm:text-lg text-primary tracking-tight truncate">
              Daftar Harga Warung
            </span>
            <span className="text-xs text-on-surface-variant truncate">
              Cek harga barang dengan mudah
            </span>
          </div>
        </div>

        {/* Right Navigation & Status */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-1 p-1 bg-surface-container-low rounded-full">
            <button
              type="button"
              onClick={() => onNavClick?.('katalog-harga')}
              className={`px-4 py-1.5 transition-colors text-sm font-semibold rounded-full ${
                activeNav === 'katalog-harga'
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
            >
              Katalog Harga
            </button>
            <button
              type="button"
              onClick={() => onNavClick?.('kategori')}
              className={`px-4 py-1.5 transition-colors text-sm font-semibold rounded-full ${
                activeNav === 'kategori'
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
            >
              Kategori
            </button>
            <button
              type="button"
              onClick={() => onNavClick?.('informasi-toko')}
              className={`px-4 py-1.5 transition-colors text-sm font-semibold rounded-full ${
                activeNav === 'informasi-toko'
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
            >
              Informasi Toko
            </button>
          </nav>

          {/* <div className="hidden lg:flex items-center gap-2 bg-secondary-container px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-xs text-on-secondary-container font-semibold">
              Harga Diperbarui Hari Ini (Update Berkala)
            </span>
          </div>

          <div
            title="Akun Pengguna"
            className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 cursor-pointer shadow-sm hover:opacity-90 transition-opacity"
          >
            <Icon icon={UserRound} className="size-5 text-on-primary" />
          </div> */}
        </div>
      </div>
    </header>
  );
};
