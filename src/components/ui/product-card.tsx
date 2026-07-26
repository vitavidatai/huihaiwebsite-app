'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProductItem } from '@/lib/products-data';
import { Language, getDictionary } from '@/lib/i18n';
import { ImagePlaceholder } from './image-placeholder';

interface ProductCardProps {
  product: ProductItem;
  currentLang: Language;
  onSelect: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currentLang,
  onSelect,
}) => {
  const dict = getDictionary(currentLang);
  const name = product.name[currentLang] || product.name.en;
  const summary = product.summary[currentLang] || product.summary.en;

  return (
    <div className="bg-white rounded-2xl border border-[#E5E0D8] shadow-soft hover:shadow-elevated-warm transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Product Image Header */}
      <div className="p-3 bg-[#FAF9F6] border-b border-[#E5E0D8]">
        <div className="relative w-full aspect-[4/3] bg-[#F5F2EB] rounded-xl overflow-hidden group border border-[#E5E0D8]">
          <img
            src={product.heroImage}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-medium tracking-wider uppercase bg-[#F5F2EB] text-[#5E5A56] rounded">
              {dict.products.modelPrefix}: {product.modelNumber}
            </span>
            <span className="text-[10px] font-mono text-[#7A8B7B] font-semibold">
              {dict.products.originalDesign}
            </span>
          </div>

          <h3 className="text-sm font-bold text-[#2D2B2A] leading-snug group-hover:text-[#4A6B82] transition-colors">
            {name}
          </h3>

          <p className="text-xs text-[#5E5A56] line-clamp-2 leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => onSelect(product)}
          className="w-full py-2.5 px-4 text-xs font-semibold text-[#2D2B2A] bg-[#F5F2EB] hover:bg-[#2D2B2A] hover:text-white rounded-xl transition-all flex items-center justify-center gap-1.5"
        >
          <span>{dict.products.btnSpec}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
