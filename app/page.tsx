'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { HeroSearch } from '@/components/HeroSearch';
import { CategoryFilter, SortOption } from '@/components/CategoryFilter';
import { ProductCard } from '@/components/ProductCard';
import { StateShowcase } from '@/components/StateShowcase';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { PRODUCTS } from '@/data/products';
import { Icon } from '@/components/Icon';
import { SearchX } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<SortOption>('rekomendasi');
  const [activeNav, setActiveNav] = useState('katalog-harga');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const list = PRODUCTS.filter((product) => {
      const matchCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });

    return list.sort((a, b) => {
      if (sortBy === 'termurah') return a.price - b.price;
      if (sortBy === 'termahal') return b.price - a.price;
      if (sortBy === 'az') return a.name.localeCompare(b.name, 'id');
      return 0; // rekomendasi / original order
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const handleResetSearch = () => {
    setSearchQuery('');
  };

  const handleResetCategory = () => {
    setSelectedCategory('all');
  };

  const handleResetAll = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  const handleNavClick = (section: string) => {
    setActiveNav(section);
    if (section === 'katalog-harga') {
      const el = document.getElementById('catalogSection');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'kategori') {
      const el = document.getElementById('categorySection');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'informasi-toko') {
      const el = document.getElementById('infoSection');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans text-on-surface">
      {/* Top Header */}
      <Header activeNav={activeNav} onNavClick={handleNavClick} />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          {/* 1. Hero & Search */}
          <HeroSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onQuickSearch={(keyword) => setSearchQuery(keyword)}
            onClearSearch={handleResetSearch}
          />

          {/* 2. Interactive Category Filter & Live Control Rail */}
          <div id="categorySection">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              totalCount={filteredProducts.length}
              totalAll={PRODUCTS.length}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>

          {/* 3. Product Price Catalog Grid */}
          <section id="catalogSection" className="mt-8">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
                  Daftar Harga Barang
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                  Temukan barang dan harga yang Anda cari. Harga netto untuk pembelian langsung di warung.
                </p>
              </div>
              <div className="text-xs text-outline hidden sm:block">
                Total Item: {filteredProducts.length} produk
              </div>
            </div>

            {/* Grid of Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* Dynamic Empty Search Client-Side Fallback */
              <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-surface-container-lowest rounded-xl shadow-sm my-6 border border-surface-container-high">
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-4">
                  <Icon icon={SearchX} className="size-8" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-primary">
                  Barang Tidak Ditemukan
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mt-1.5 leading-relaxed">
                  Maaf, barang dengan kata kunci &quot;{searchQuery}&quot; belum tercatat di daftar harga warung kami. Coba cari dengan ejaan lain atau reset filter.
                </p>
                <button
                  type="button"
                  onClick={handleResetAll}
                  className="mt-5 px-5 py-2.5 rounded-full bg-primary text-on-primary text-xs sm:text-sm font-semibold shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Reset Pencarian & Kategori
                </button>
              </div>
            )}
          </section>

          {/* 4. Interactive State Demonstration Panels */}
          <div id="infoSection">
            <StateShowcase
              onResetSearch={handleResetSearch}
              onResetCategory={handleResetCategory}
            />
          </div>
        </div>
      </main>

      {/* 5. Informative Note Box & Footer */}
      <Footer />

      {/* 6. WhatsApp Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
