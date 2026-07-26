'use client';

import React from 'react';
import Link from 'next/link';
import { X, Check, ShieldCheck, Mail } from 'lucide-react';
import { ProductItem } from '@/lib/products-data';
import { Language, getDictionary } from '@/lib/i18n';
import { ImagePlaceholder } from './image-placeholder';

interface ProductSpecModalProps {
  product: ProductItem | null;
  currentLang: Language;
  onClose: () => void;
}

export const ProductSpecModal: React.FC<ProductSpecModalProps> = ({
  product,
  currentLang,
  onClose,
}) => {
  if (!product) return null;

  const dict = getDictionary(currentLang);
  const name = product.name[currentLang] || product.name.en;
  const summary = product.summary[currentLang] || product.summary.en;
  const apps = product.applications[currentLang] || product.applications.en;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2D2B2A]/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-[#E5E0D8] shadow-elevated-warm overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E0D8] bg-[#FAF9F6]">
          <div>
            <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-medium uppercase bg-[#F5F2EB] text-[#4A6B82] rounded mb-1">
              {dict.products.modalHeaderTag} • {dict.products.modelPrefix} {product.modelNumber}
            </span>
            <h2 className="text-lg font-bold text-[#2D2B2A]">
              {name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#8C8883] hover:text-[#2D2B2A] rounded-xl hover:bg-[#F5F2EB] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Top Image Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] bg-[#F5F2EB] rounded-2xl overflow-hidden border border-[#E5E0D8]">
              <img
                src={product.heroImage}
                alt={`${name} Hero`}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2.5 left-2.5 bg-[#2D2B2A]/80 text-white text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-sm">
                {dict.products.heroPhotoLabel}
              </span>
            </div>
            <div className="relative aspect-[4/3] bg-[#F5F2EB] rounded-2xl overflow-hidden border border-[#E5E0D8]">
              <img
                src={product.sceneImage}
                alt={`${name} Application Scene`}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2.5 left-2.5 bg-[#2D2B2A]/80 text-white text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-sm">
                {dict.products.scenePhotoLabel}
              </span>
            </div>
          </div>

          {/* Product Summary */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-[#8C8883] uppercase tracking-wider mb-2">
              {dict.products.overviewTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5A56] leading-relaxed">
              {summary}
            </p>
          </div>

          {/* Applications Scenarios */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-[#8C8883] uppercase tracking-wider mb-3">
              {dict.products.usageScenariosTitle}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-[#5E5A56]">
              {apps.map((app, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-[#FAF9F6] p-3 rounded-xl border border-[#E5E0D8]">
                  <Check className="w-4 h-4 text-[#7A8B7B] shrink-0" />
                  <span className="font-medium text-[#2D2B2A]">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="p-6 border-t border-[#E5E0D8] bg-[#FAF9F6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8C8883]">
            <ShieldCheck className="w-4 h-4 text-[#7A8B7B]" />
            <span>{dict.products.modalFooterNotice}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#5E5A56] hover:bg-[#EFECE6] rounded-xl transition-colors"
            >
              {dict.products.closeModal}
            </button>

            <Link
              href={`/contact?interest=${encodeURIComponent(name)}`}
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#2D2B2A] hover:bg-[#3D3A39] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{dict.products.btnSample}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
