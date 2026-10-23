'use strict';

import React from 'react';
import { CATEGORIES } from '@/data/products';
import { Icon } from '@/components/Icon';
import { ChevronDown } from 'lucide-react';

export type SortOption = 'rekomendasi' | 'termurah' | 'termahal' | 'az';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  totalCount: number;
  totalAll: number;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  totalCount,
  totalAll,
  sortBy,
  onSortChange,
}) => {
  const currentCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory);
  const currentCategoryLabel = currentCategoryObj ? currentCategoryObj.label : 'Semua';

  return (
    <section className="mt-8 pt-4">
      <div className="flex flex-col gap-3 pb-2">
        {/* Scrollable Category Filter Chips */}
        <div className="flex w-full min-w-0 items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-md'
                    : 'bg-surface-container-lowest text-on-surface border border-surface-container-high/80 hover:bg-surface-container'
                }`}
              >
                {cat.id !== 'all' && (
                  <Icon
                    icon={cat.icon}
                    className={`size-4 shrink-0 ${
                      isActive ? 'text-on-primary' : 'text-secondary'
                    }`}
                  />
                )}
                <span>{cat.label}</span>
                {cat.id === 'all' && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold ml-1 ${
                      isActive
                        ? 'bg-secondary-container text-on-secondary-container'
                        : 'bg-surface-container-high text-on-surface'
                    }`}
                  >
                    {totalAll}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Sorting Selector */}
        <div className="flex items-center gap-2 self-end shrink-0">
          <label htmlFor="sortSelect" className="text-xs text-outline font-semibold uppercase">
            Urutkan:
          </label>
          <div className="relative bg-surface-container-lowest rounded-lg shadow-sm border border-surface-container-high">
            <select
              id="sortSelect"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="appearance-none bg-transparent text-xs sm:text-sm font-semibold text-primary py-1.5 pl-3 pr-8 rounded-lg focus:outline-none cursor-pointer"
            >
              <option value="rekomendasi">Rekomendasi</option>
              <option value="termurah">Termurah</option>
              <option value="termahal">Termahal</option>
              <option value="az">Nama A-Z</option>
            </select>
            <Icon icon={ChevronDown} className="size-[18px] text-primary absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Result Count Live Feedback Bar */}
      <div className="flex items-center justify-between py-1 px-1 mt-1">
        <p className="text-xs sm:text-sm text-on-surface-variant">
          Menampilkan{' '}
          <span className="font-semibold text-primary">{totalCount}</span> barang dari
          kategori <span className="font-semibold text-primary">{currentCategoryLabel}</span>
        </p>
        <span className="text-[11px] sm:text-xs px-2.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-medium">
          Bukan Keranjang Belanja
        </span>
      </div>
    </section>
  );
};
