'use strict';

import React from 'react';
import { Icon } from '@/components/Icon';
import { Info } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-16">
      {/* Informative Note Box (Warung Neighborhood Context) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-surface-container-lowest rounded-xl p-5 sm:p-6 shadow-sm border border-surface-container-high/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary shrink-0 shadow-xs">
              <Icon icon={Info} className="size-5" />
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm sm:text-base font-bold text-primary">
                Catatan Pembelian di Warung
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5 max-w-2xl leading-relaxed">
                Harga di atas merupakan harga eceran resmi warung kami dan diperbarui setiap pagi. Untuk pembelian grosir atau dalam jumlah dus/karton, silakan langsung hubungi pemilik warung.
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/?text=Halo%20Warung,%20saya%20ingin%20tanya%20harga%20barang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-full bg-primary text-on-primary text-xs sm:text-sm font-semibold shadow-sm hover:opacity-95 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
              <span>Tanya Juragan Warung</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Bottom */}
      <div className="w-full bg-surface-container-lowest shadow-[0_-1px_6px_rgba(27,77,62,0.04)] border-t border-surface-container-high/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col text-center md:text-left">
            <span className="text-base sm:text-lg font-bold text-primary">
              Daftar Harga Warung
            </span>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1 max-w-md">
              Informasi harga barang warung dengan mudah, cepat, dan transparan untuk warga sekitar.
            </p>
          </div>
          <div className="text-center md:text-right">
            <span className="inline-block text-xs text-on-surface-variant bg-surface-container-low px-4 py-1.5 rounded-full border border-surface-container-high/50">
              © {new Date().getFullYear()} Warung Tetangga Digital — Harga dapat berubah sewaktu-waktu sesuai pasokan.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
