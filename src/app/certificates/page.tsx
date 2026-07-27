'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, CheckCircle2, ZoomIn, X, Eye, FileText, ArrowUpRight } from 'lucide-react';
import { ClientLayout } from '@/components/layout/client-layout';
import { getDictionary, Language } from '@/lib/i18n';
import { ProductGalleryModal, GalleryImage } from '@/components/ui/product-gallery-modal';

interface CertItem {
  id: string;
  title: Record<Language, string>;
  issuingBody: Record<Language, string>;
  scope: Record<Language, string>;
  validity: string;
  imageSrc: string;
  imageAlt: string;
}

interface PatentItem {
  id: string;
  title: Record<Language, string>;
  imageSrc: string;
  imageAlt: string;
}

interface AuditReportItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  fileSrc: string;
  fileName: string;
}

export default function CertificatesPage() {
  const [activeModalCert, setActiveModalCert] = useState<{
    src: string;
    title: string;
    validity: string;
  } | null>(null);

  const [activePatentIndex, setActivePatentIndex] = useState<number | null>(null);

  const certificateItems: CertItem[] = [
    {
      id: 'iso-9001',
      title: {
        en: 'ISO 9001:2015 Quality Management System',
        zh: 'ISO 9001:2015 质量管理体系认证',
        ja: 'ISO 9001:2015 品質マネジメントシステム',
      },
      issuingBody: {
        en: 'NOA Testing & Certification Group (IAF / IAS Accredited)',
        zh: '诺尔检测认证集团 (IAF / IAS 权威认可)',
        ja: 'NOA Testing & Certification Group (IAF / IAS 認定)',
      },
      scope: {
        en: 'Production and sales of daily sundries, electrostatic mopping towels, disposable electrostatic dusters, and cleaning supplies.',
        zh: '日用杂品、静电拖地干巾、一次性静电除尘掸及清洁用品的生产与销售。',
        ja: '日用品、静電気モップシート、使い捨て静電気ダスターおよび清掃用品の製造・販売。',
      },
      validity: 'GB/T 19001-2016 / ISO 9001:2015',
      imageSrc: '/images/certificates/iso-9001-certificate.png',
      imageAlt: 'ISO 9001:2015 Quality Management System Certificate',
    },
    {
      id: 'smeta-audit',
      title: {
        en: 'SMETA Ethical Trade Audit',
        zh: 'SMETA 商业道德贸易审计报告',
        ja: 'SMETA 倫理的貿易監査レポート',
      },
      issuingBody: {
        en: 'Sedex Approved Auditing Body',
        zh: 'Sedex 官方授权第三方审计机构',
        ja: 'Sedex 認定第三者監査機関',
      },
      scope: {
        en: 'SMETA 4-Pillar Audit covering Labor Standards, Health & Safety, Environment, and Business Ethics.',
        zh: 'SMETA 四大支柱审核，涵盖劳工标准、健康与安全、环境及商业道德。',
        ja: 'SMETA 4柱監査（労働基準、健康と安全、環境、ビジネス倫理）。',
      },
      validity: 'SMETA Version 6.1 Compliant',
      imageSrc: '/images/certificates/smeta-audit-report.png',
      imageAlt: 'SMETA Ethical Trade Audit Report',
    },
    {
      id: 'smeta-capr',
      title: {
        en: 'SMETA Corrective Action Plan (CAPR)',
        zh: 'SMETA 纠正措施计划 (CAPR) 报告',
        ja: 'SMETA 是正措置計画 (CAPR) レポート',
      },
      issuingBody: {
        en: 'Sedex Approved Auditing Body',
        zh: 'Sedex 官方授权第三方审计机构',
        ja: 'Sedex 認定第三者監査機関',
      },
      scope: {
        en: 'Corrective Action Plan Report (CAPR) verification for continuous social and environmental compliance.',
        zh: '纠正措施计划报告（CAPR）复核，验证社会责任与环境持续合规。',
        ja: '社会・環境責任の持続的コンプライアンスを検証する是正措置計画報告（CAPR）。',
      },
      validity: 'SMETA CAPR Verified',
      imageSrc: '/images/certificates/smeta-capr-report.png',
      imageAlt: 'SMETA Corrective Action Plan (CAPR) Report',
    },
  ];

  const patentItems: PatentItem[] = [
    {
      id: 'patent-1',
      title: {
        en: 'Patent Specification Certificate 1',
        zh: '代表专利技术证书 1',
        ja: '代表特許証書 1',
      },
      imageSrc: '/images/patents/patent-1.jpg',
      imageAlt: 'Patent Certificate 1',
    },
    {
      id: 'patent-2',
      title: {
        en: 'Patent Specification Certificate 2',
        zh: '代表专利技术证书 2',
        ja: '代表特許証書 2',
      },
      imageSrc: '/images/patents/patent-2.jpg',
      imageAlt: 'Patent Certificate 2',
    },
    {
      id: 'patent-3',
      title: {
        en: 'Patent Specification Certificate 3',
        zh: '代表专利技术证书 3',
        ja: '代表特許証書 3',
      },
      imageSrc: '/images/patents/patent-3.jpg',
      imageAlt: 'Patent Certificate 3',
    },
    {
      id: 'patent-4',
      title: {
        en: 'Patent Specification Certificate 4',
        zh: '代表专利技术证书 4',
        ja: '代表特許証書 4',
      },
      imageSrc: '/images/patents/patent-4.jpg',
      imageAlt: 'Patent Certificate 4',
    },
  ];

  const auditReports: AuditReportItem[] = [
    {
      id: 'smeta-report',
      title: {
        en: 'SMETA Audit Report',
        zh: 'SMETA 审计报告',
        ja: 'SMETA 監査レポート',
      },
      description: {
        en: 'Sedex ZAA600077028 4-Pillar Audit covering Labor Standards, Health & Safety, Environment, and Business Ethics.',
        zh: 'Sedex ZAA600077028 四大支柱审核，涵盖劳工标准、健康与安全、环境及商业道德。',
        ja: 'Sedex ZAA600077028 4柱監査（労働基準、健康と安全、環境、ビジネス倫理）。',
      },
      fileSrc: '/docs/SMETA_ZAA600077028.pdf',
      fileName: 'SMETA_ZAA600077028.pdf',
    },
    {
      id: 'capr-report',
      title: {
        en: 'CAPR Report',
        zh: 'CAPR 纠正措施报告',
        ja: 'CAPR 是正措置レポート',
      },
      description: {
        en: 'SMETA Corrective Action Plan Report (CAPR) verification for continuous social and environmental compliance.',
        zh: 'SMETA 纠正措施计划报告（CAPR）复核，验证社会责任与环境持续合规。',
        ja: '社会・環境責任の持続的コンプライアンスを検証する是正措置計画報告（CAPR）。',
      },
      fileSrc: '/docs/CAPR_ZAA600077028.pdf',
      fileName: 'CAPR_ZAA600077028.pdf',
    },
  ];

  return (
    <ClientLayout>
      {(lang: Language) => {
        const dict = getDictionary(lang);

        const patentGalleryImages: GalleryImage[] = patentItems.map((item) => ({
          src: item.imageSrc,
          alt: item.imageAlt,
          title: item.title[lang] || item.title.en,
        }));

        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
            {/* 1. Header & Official Certifications Section */}
            <div className="space-y-12">
              <div className="space-y-3 max-w-3xl">
                <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                  {dict.certificates.tagline}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D2B2A]">
                  {dict.certificates.title}
                </h1>
                <p className="text-sm text-[#5E5A56] leading-relaxed">
                  {dict.certificates.subtitle}
                </p>
              </div>

              {/* Clean Three-Column Certification Cards Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {certificateItems.map((cert) => {
                  const titleText = cert.title[lang] || cert.title.en;
                  const issuingText = cert.issuingBody[lang] || cert.issuingBody.en;
                  const scopeText = cert.scope[lang] || cert.scope.en;

                  return (
                    <div
                      key={cert.id}
                      className="bg-white rounded-3xl border border-[#E5E0D8] p-6 flex flex-col justify-between space-y-6 shadow-soft hover:shadow-elevated-warm transition-all duration-300 group"
                    >
                      <div className="space-y-4">
                        {/* Clickable Image Container */}
                        <div
                          onClick={() =>
                            setActiveModalCert({
                              src: cert.imageSrc,
                              title: titleText,
                              validity: cert.validity,
                            })
                          }
                          className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[#E5E0D8] bg-[#FAF9F6] p-2 flex items-center justify-center cursor-pointer group/img"
                          title="Click to view full size"
                        >
                          <img
                            src={cert.imageSrc}
                            alt={cert.imageAlt}
                            className="w-full h-full object-contain rounded-xl shadow-sm group-hover/img:scale-102 transition-transform duration-300"
                          />
                          {/* Hover Overlay Icon */}
                          <div className="absolute inset-0 bg-[#2D2B2A]/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-mono text-xs backdrop-blur-[2px]">
                            <ZoomIn className="w-5 h-5 text-white" />
                            <span>View Full Size</span>
                          </div>
                        </div>

                        {/* Card Information */}
                        <div className="space-y-2">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[#F2F5F2] text-[#7A8B7B]">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{cert.validity}</span>
                          </div>

                          <h3 className="text-base font-bold text-[#2D2B2A] leading-snug group-hover:text-[#4A6B82] transition-colors">
                            {titleText}
                          </h3>
                        </div>

                        <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-[#E5E0D8] text-xs space-y-2 font-mono">
                          <div>
                            <span className="text-[#8C8883] block text-[10px] uppercase">
                              {dict.certificates.issuingLabel}
                            </span>
                            <span className="font-semibold text-[#2D2B2A]">
                              {issuingText}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#8C8883] block text-[10px] uppercase">
                              {dict.certificates.scopeLabel}
                            </span>
                            <span className="text-[#5E5A56] leading-relaxed block mt-0.5">
                              {scopeText}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveModalCert({
                              src: cert.imageSrc,
                              title: titleText,
                              validity: cert.validity,
                            })
                          }
                          className="flex-1 py-2.5 px-3 text-xs font-semibold text-[#2D2B2A] bg-[#F5F2EB] hover:bg-[#2D2B2A] hover:text-white rounded-xl transition-all flex items-center justify-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>{dict.certificates.btnPreview || 'Preview'}</span>
                        </button>

                        <Link
                          href={`/contact?certificate=${encodeURIComponent(titleText)}`}
                          className="flex-1 py-2.5 px-3 text-xs font-semibold text-white bg-[#2D2B2A] hover:bg-[#3D3A39] rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5"
                        >
                          <Download className="w-3.5 h-3.5 text-[#F5F2EB]" />
                          <span>Inquire</span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Representative Patents Section (2x2 Grid) */}
            <div className="space-y-8 pt-4 border-t border-[#E5E0D8]">
              <div className="space-y-2 max-w-3xl">
                <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                  {dict.certificates.patentTag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2B2A]">
                  {dict.certificates.representativePatentsTitle || 'Representative Patents'}
                </h2>
                <p className="text-sm text-[#5E5A56] leading-relaxed">
                  {dict.certificates.representativePatentsSubtitle ||
                    'Featured patent specifications and utility model designs for electrostatic dusters.'}
                </p>
              </div>

              {/* Clean 2x2 Grid with White Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {patentItems.map((patent, idx) => {
                  const title = patent.title[lang] || patent.title.en;

                  return (
                    <div
                      key={patent.id}
                      className="bg-white rounded-3xl border border-[#E5E0D8] p-5 shadow-soft hover:shadow-elevated-warm transition-all duration-300 flex flex-col justify-between space-y-4 group"
                    >
                      <div
                        onClick={() => setActivePatentIndex(idx)}
                        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5E0D8] bg-[#FAF9F6] p-3 flex items-center justify-center cursor-pointer group/img"
                        title="Click to zoom patent document"
                      >
                        <img
                          src={patent.imageSrc}
                          alt={patent.imageAlt}
                          className="w-full h-full object-contain rounded-xl shadow-sm group-hover/img:scale-103 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-[#2D2B2A]/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-mono text-xs backdrop-blur-[2px]">
                          <ZoomIn className="w-5 h-5 text-white" />
                          <span>Click to Enlarge & Zoom</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1 px-1">
                        <h3 className="text-sm font-bold text-[#2D2B2A] group-hover:text-[#4A6B82] transition-colors">
                          {title}
                        </h3>
                        <button
                          type="button"
                          onClick={() => setActivePatentIndex(idx)}
                          className="px-3 py-1.5 text-xs font-semibold text-[#2D2B2A] bg-[#F5F2EB] hover:bg-[#2D2B2A] hover:text-white rounded-xl transition-all flex items-center gap-1"
                        >
                          <ZoomIn className="w-3.5 h-3.5" />
                          <span>{dict.certificates.btnPreview || 'Enlarge'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Patent Highlight Banner */}
              <div className="bg-[#F5F2EB] rounded-3xl p-8 sm:p-10 border border-[#E5E0D8] space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2B2A]">
                  {dict.certificates.patentTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E5A56] leading-relaxed max-w-3xl">
                  {dict.certificates.patentDesc}
                </p>
              </div>
            </div>

            {/* 3. Audit Reports Section */}
            <div className="space-y-8 pt-4 border-t border-[#E5E0D8]">
              <div className="space-y-2 max-w-3xl">
                <span className="text-xs font-mono font-semibold text-[#4A6B82] uppercase tracking-wider">
                  Sedex Compliance
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2B2A]">
                  {dict.certificates.auditReportsTitle || 'Audit Reports'}
                </h2>
                <p className="text-sm text-[#5E5A56] leading-relaxed">
                  {dict.certificates.auditReportsSubtitle ||
                    'Official third-party social responsibility, labor standard, and ethical trade audit documentation.'}
                </p>
              </div>

              {/* Downloadable PDF Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {auditReports.map((report) => {
                  const title = report.title[lang] || report.title.en;
                  const desc = report.description[lang] || report.description.en;

                  return (
                    <div
                      key={report.id}
                      className="bg-white rounded-3xl border border-[#E5E0D8] p-6 shadow-soft hover:shadow-elevated-warm transition-all duration-300 flex flex-col justify-between space-y-6 group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-[#FFF5F5] border border-[#FFE0E0] text-[#D9383A] flex items-center justify-center shrink-0">
                            <FileText className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-mono font-medium px-2.5 py-1 bg-[#F5F2EB] text-[#5E5A56] rounded-md uppercase border border-[#E5E0D8]">
                            PDF DOCUMENT
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          <h3 className="text-lg font-bold text-[#2D2B2A] group-hover:text-[#4A6B82] transition-colors">
                            {title}
                          </h3>
                          <p className="text-xs text-[#5E5A56] leading-relaxed">
                            {desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <a
                          href={report.fileSrc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 px-4 text-xs font-semibold text-[#2D2B2A] bg-[#F5F2EB] hover:bg-[#2D2B2A] hover:text-white rounded-xl transition-all flex items-center justify-center gap-2 border border-[#E5E0D8]"
                        >
                          <Eye className="w-4 h-4" />
                          <span>{dict.certificates.btnPreview || 'Preview'}</span>
                        </a>

                        <a
                          href={report.fileSrc}
                          download={report.fileName}
                          className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-[#2D2B2A] hover:bg-[#3D3A39] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                        >
                          <Download className="w-4 h-4 text-[#F5F2EB]" />
                          <span>{dict.certificates.btnDownload || 'Download'}</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* General Certificate Lightbox Modal */}
            {activeModalCert && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2D2B2A]/85 backdrop-blur-md transition-all duration-300"
                onClick={() => setActiveModalCert(null)}
              >
                <div
                  className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-elevated-warm flex flex-col border border-[#E5E0D8]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between p-4 sm:p-6 bg-[#FAF9F6] border-b border-[#E5E0D8]">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-medium uppercase bg-[#F2F5F2] text-[#7A8B7B] rounded mb-1">
                        {activeModalCert.validity}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#2D2B2A]">
                        {activeModalCert.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveModalCert(null)}
                      className="p-2 text-[#8C8883] hover:text-[#2D2B2A] hover:bg-[#F5F2EB] rounded-xl transition-colors"
                      title="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-[#FAF9F6] max-h-[75vh]">
                    <img
                      src={activeModalCert.src}
                      alt={activeModalCert.title}
                      className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-md border border-[#E5E0D8]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Patent Gallery Lightbox Modal with Zoom & Keyboard & Swipe */}
            <ProductGalleryModal
              images={patentGalleryImages}
              initialIndex={activePatentIndex ?? 0}
              isOpen={activePatentIndex !== null}
              onClose={() => setActivePatentIndex(null)}
            />
          </div>
        );
      }}
    </ClientLayout>
  );
}
