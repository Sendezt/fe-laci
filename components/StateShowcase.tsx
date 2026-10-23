'use strict';

import React, { useState } from 'react';
import { Icon } from '@/components/Icon';
import { BadgeCheck, Search, Package, CloudOff, RefreshCw } from 'lucide-react';

export type SystemState =
  | 'normal'
  | 'skeleton'
  | 'empty-search'
  | 'empty-catalog'
  | 'error';

interface StateShowcaseProps {
  onResetSearch?: () => void;
  onResetCategory?: () => void;
}

export const StateShowcase: React.FC<StateShowcaseProps> = ({
  onResetSearch,
  onResetCategory,
}) => {
  const [activeState, setActiveState] = useState<SystemState>('normal');

  return (
    <section className="mt-12 pt-6">
      <div className="bg-surface-container-low rounded-2xl p-5 sm:p-7 shadow-sm border border-surface-container-high/60">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-primary text-on-primary text-[11px] font-semibold uppercase tracking-wider mb-1">
              Next.js & NestJS State Showcase
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
              Pratinjau Status Sistem (State Previews)
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
              Simulasikan berbagai respons visual antarmuka saat berinteraksi dengan API harga warung.
            </p>
          </div>

          {/* State Tab Controls */}
          <div className="flex flex-wrap items-center gap-1.5 bg-surface-container-lowest p-1.5 rounded-xl shadow-sm border border-surface-container-high">
            {(
              [
                { id: 'normal', label: 'Normal' },
                { id: 'skeleton', label: 'Skeleton (Loading)' },
                { id: 'empty-search', label: 'Pencarian Kosong' },
                { id: 'empty-catalog', label: 'Katalog Kosong' },
                { id: 'error', label: 'Error (API Failed)' },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveState(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  activeState === item.id
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* State Panels Container */}
        <div className="min-h-[260px] flex items-center justify-center p-2">
          {/* A. Normal Panel */}
          {activeState === 'normal' && (
            <div className="w-full flex flex-col items-center justify-center text-center py-6 text-on-surface-variant animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary mb-3 shadow-sm">
                <Icon icon={BadgeCheck} className="size-6" />
              </div>
              <p className="text-base sm:text-lg font-bold text-primary">
                Katalog Berjalan Normal
              </p>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mt-1">
                Data harga terhubung dengan sinkronisasi kasir warung. Klik tab filter di atas untuk melihat demonstrasi state UI lainnya.
              </p>
            </div>
          )}

          {/* B. Skeleton / Loading Panel */}
          {activeState === 'skeleton' && (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeIn">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-surface-container-lowest rounded-xl p-4 shadow-sm animate-pulse flex flex-col justify-between h-72 border border-surface-container-high"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="h-4 w-20 bg-surface-container-high rounded-full"></div>
                      <div className="h-3 w-12 bg-surface-container-high rounded-full"></div>
                    </div>
                    <div className="w-full h-32 bg-surface-container-high rounded-lg mb-3"></div>
                    <div className="h-5 w-3/4 bg-surface-container-high rounded mb-2"></div>
                    <div className="h-3 w-1/2 bg-surface-container-high rounded"></div>
                  </div>
                  <div className="h-10 w-full bg-surface-container-high rounded-lg"></div>
                </div>
              ))}
            </div>
          )}

          {/* C. Empty Search State */}
          {activeState === 'empty-search' && (
            <div className="w-full flex flex-col items-center justify-center text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant mb-3">
                <Icon icon={Search} className="size-8" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-primary">
                Barang Tidak Ditemukan
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mt-1.5 leading-relaxed">
                Maaf, barang dengan kata kunci tersebut belum tercatat di daftar harga warung kami. Coba cari dengan ejaan lain atau hubungi juragan warung.
              </p>
              <button
                type="button"
                onClick={() => {
                  onResetSearch?.();
                  setActiveState('normal');
                }}
                className="mt-4 px-5 py-2 rounded-full bg-primary text-on-primary text-xs sm:text-sm font-semibold shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
              >
                Reset Pencarian
              </button>
            </div>
          )}

          {/* D. Empty Catalog State */}
          {activeState === 'empty-catalog' && (
            <div className="w-full flex flex-col items-center justify-center text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant mb-3">
                <Icon icon={Package} className="size-8" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-primary">
                Belum Ada Produk di Kategori Ini
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mt-1.5 leading-relaxed">
                Kategori ini sedang dalam pembaruan stok oleh pemilik warung. Silakan cek kategori kebutuhan pokok lainnya.
              </p>
              <button
                type="button"
                onClick={() => {
                  onResetCategory?.();
                  setActiveState('normal');
                }}
                className="mt-4 px-5 py-2 rounded-full bg-surface-container-lowest text-primary text-xs sm:text-sm font-semibold shadow-sm border border-surface-container-high hover:bg-surface-container transition-colors cursor-pointer"
              >
                Kembali ke Semua Kategori
              </button>
            </div>
          )}

          {/* E. Error State */}
          {activeState === 'error' && (
            <div className="w-full flex flex-col items-center justify-center text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-error-container flex items-center justify-center text-error mb-3">
                <Icon icon={CloudOff} className="size-8" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-error">
                Gagal Mengambil Data Produk
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mt-1.5 leading-relaxed">
                Koneksi ke server warung terputus. Silakan coba beberapa saat lagi atau pastikan perangkat Anda terhubung dengan internet.
              </p>
              <button
                type="button"
                onClick={() => setActiveState('normal')}
                className="mt-4 flex items-center gap-2 px-5 py-2 rounded-full bg-error text-on-error text-xs sm:text-sm font-semibold shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Icon icon={RefreshCw} className="size-[18px]" />
                Coba Lagi (Retry)
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
