'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { ClientLayout } from '@/components/layout/client-layout';
import { getDictionary, Language } from '@/lib/i18n';
import { PRODUCTS_DATA, ProductItem } from '@/lib/products-data';
import { ProductCard } from '@/components/ui/product-card';
import { ProductSpecModal } from '@/components/ui/product-spec-modal';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <ClientLayout>
      {(lang: Language) => {
        const dict = getDictionary(lang);

        const filteredProducts = PRODUCTS_DATA.filter((product) => {
          const matchesCategory =
            activeCategory === 'all' || product.category === activeCategory;

          const nameStr = (product.name[lang] || product.name.en).toLowerCase();
          const summaryStr = (product.summary[lang] || product.summary.en).toLowerCase();
          const modelStr = product.modelNumber.toLowerCase();
          const query = searchQuery.toLowerCase().trim();

          const matchesQuery =
            !query ||
            nameStr.includes(query) ||
            summaryStr.includes(query) ||
            modelStr.includes(query);

          return matchesCategory && matchesQuery;
        });

        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            {/* Catalog Header */}
            <div className="space-y-3 max-w-3xl">
              <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                {dict.nav.products}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D2B2A]">
                {dict.products.title}
              </h1>
              <p className="text-sm text-[#5E5A56] leading-relaxed">
                {dict.products.subtitle}
              </p>
            </div>

            {/* Filter Tabs & Search Control */}
            <div className="bg-white p-4 rounded-2xl border border-[#E5E0D8] shadow-soft flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto text-xs">
                {[
                  { id: 'all', label: dict.products.filterAll },
                  { id: 'dusters', label: dict.products.filterDusters },
                  { id: 'mops', label: dict.products.filterMops },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3.5 py-2 rounded-xl font-medium transition-colors ${
                      activeCategory === tab.id
                        ? 'bg-[#2D2B2A] text-white font-semibold'
                        : 'bg-[#F5F2EB] text-[#5E5A56] hover:bg-[#EFECE6]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-[#8C8883] absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder={dict.products.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF9F6] border border-[#E5E0D8] rounded-xl text-[#2D2B2A] focus:ring-2 focus:ring-[#4A6B82] outline-none"
                />
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    currentLang={lang}
                    onSelect={(p) => setSelectedProduct(p)}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center bg-white rounded-2xl border border-[#E5E0D8]">
                <p className="text-xs text-[#8C8883] font-mono">
                  {dict.products.noMatch}
                </p>
              </div>
            )}

            {/* Datasheet Spec Modal */}
            <ProductSpecModal
              product={selectedProduct}
              currentLang={lang}
              onClose={() => setSelectedProduct(null)}
            />
          </div>
        );
      }}
    </ClientLayout>
  );
}
