import React, { useState } from 'react';
import {
  MerchandiserTipSpec,
  filterMerchandiserTips,
} from '../data/machinesAndChemicalsData.ts';
import { Language } from '../utils/i18n.ts';
import {
  CheckCircle2,
  AlertTriangle,
  Briefcase,
  Factory,
} from 'lucide-react';

interface MerchandiserPlaybookSectionProps {
  lang?: Language;
  defaultDomain?: 'all' | MerchandiserTipSpec['domain'];
}

export const MerchandiserPlaybookSection: React.FC<MerchandiserPlaybookSectionProps> = ({
  lang = 'bn',
  defaultDomain = 'all',
}) => {
  const [selectedDomain, setSelectedDomain] = useState<'all' | MerchandiserTipSpec['domain']>(
    defaultDomain
  );

  const visibleTips = filterMerchandiserTips(selectedDomain);

  const domainTabs: Array<{ id: 'all' | MerchandiserTipSpec['domain']; labelBn: string; labelEn: string }> = [
    { id: 'all', labelBn: 'সব বিভাগ (All)', labelEn: 'All Stages' },
    { id: 'fabric', labelBn: 'ফ্যাব্রিক ও শ্রিংকেজ', labelEn: 'Fabric & Shrinkage' },
    { id: 'sewing', labelBn: 'সুয়িং ও পিপিএম (PPM)', labelEn: 'Sewing & PPM' },
    { id: 'washing', labelBn: 'ওয়াশ ও শেড লট', labelEn: 'Wash & Shade Lots' },
    { id: 'costing-qa', labelBn: 'কস্টিং ও ওয়েস্টেজ বাফার', labelEn: 'Costing & Buffers' },
  ];

  return (
    <section className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 sm:p-6 shadow-xl space-y-5">
      {/* Header & Filter Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <div className="text-xs font-mono text-amber-400 font-semibold">
            {lang === 'bn'
              ? 'প্রফেশনাল মার্চেন্ডাইজিং গাইডলাইন • স্যাম্পলিং বনাম বাল্ক প্রোডাকশন'
              : 'Merchandiser Field Playbook • Sampling vs. Bulk Execution'}
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-zinc-100 mt-0.5">
            {lang === 'bn'
              ? 'ডেভেলপমেন্ট মার্চেন্ডাইজার বনাম বাল্ক মার্চেন্ডাইজার: করণীয় ও সতর্কতা'
              : 'Development Merchandiser vs. Bulk Merchandiser: Actionable Tips & Pitfalls'}
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            {lang === 'bn'
              ? 'প্রোটো/ফিট/পিপি স্যাম্পল ডেভেলপমেন্ট থেকে শুরু করে ৫০,০০০ পিসের বাল্ক অর্ডার শিপমেন্ট পর্যন্ত প্রতিটি ধাপে কী করবেন এবং কোন ভুল এড়িয়ে চলবেন'
              : 'Side-by-side operational rules comparing Proto/Fit/SMS sample development against high-volume bulk production control'}
          </p>
        </div>

        {/* Interactive Filter Controls */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-zinc-950 rounded-xl border border-zinc-800 self-start">
          {domainTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedDomain(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedDomain === tab.id
                  ? 'bg-zinc-800 text-amber-400 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              {lang === 'bn' ? tab.labelBn : tab.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Column Role Legend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-zinc-950 rounded-xl p-3.5 border border-zinc-800 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 shrink-0">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-emerald-400">
              {lang === 'bn'
                ? 'ডেভেলপমেন্ট মার্চেন্ডাইজার (Development Merchandiser)'
                : 'Development Merchandiser (Proto • Fit • SMS • Costing)'}
            </div>
            <div className="text-[11px] text-zinc-400">
              {lang === 'bn'
                ? 'লক্ষ্য: সঠিক শ্রিংকেজ নির্ণয়, টেক প্যাক লক, ৩-শেড টলারেন্স ব্যান্ড অনুমোদন এবং রিস্ক বাফারসহ কস্টিং'
                : 'Focus: Mock-leg shrinkage, Tech Pack specs, 3-shade tolerance band approval & FOB risk buffers'}
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 rounded-xl p-3.5 border border-zinc-800 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400 shrink-0">
            <Factory className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-amber-400">
              {lang === 'bn'
                ? 'বাল্ক মার্চেন্ডাইজার (Bulk / Production Merchandiser)'
                : 'Bulk Merchandiser (Wash Blanket • PPM • Lot Control • QA)'}
            </div>
            <div className="text-[11px] text-zinc-400">
              {lang === 'bn'
                ? 'লক্ষ্য: রোল-টু-রোল ওয়াশ ব্ল্যাঙ্কেট, লট সেগ্রিগেশন, ৩০-পিস পাইলট রান, অ্যান্টিক্লোর ও টিয়ার স্ট্রেন্থ অডিট'
                : 'Focus: Roll-to-roll wash blankets, shade lot segregation, 30-pc pilot run, KI antichlor & tear audits'}
            </div>
          </div>
        </div>
      </div>

      {/* Tips Cards List */}
      <div className="space-y-4">
        {visibleTips.map((tip) => (
          <div
            key={tip.id}
            className="bg-zinc-950 rounded-xl border border-zinc-800 p-4 sm:p-5 space-y-4"
          >
            {/* Stage Title Row */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-amber-400 tabular-nums">
                  {tip.code}
                </span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <h4 className="text-sm sm:text-base font-bold text-zinc-100">
                  {lang === 'bn' ? tip.stageBn : tip.stageEn}
                </h4>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                {tip.domain === 'fabric'
                  ? lang === 'bn' ? 'ফ্যাব্রিক ও কাটিং' : 'Fabric & Cutting'
                  : tip.domain === 'sewing'
                  ? lang === 'bn' ? 'সুয়িং ও লাইন' : 'Sewing Line'
                  : tip.domain === 'washing'
                  ? lang === 'bn' ? 'লন্ড্রি ও ওয়াশ' : 'Laundry & Wash'
                  : lang === 'bn' ? 'কস্টিং ও শিপমেন্ট' : 'Costing & QA'}
              </span>
            </div>

            {/* Side-by-Side Dev vs Bulk Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left: Development Merchandiser */}
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 space-y-2.5 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-400">
                      {lang === 'bn' ? 'ডেভেলপমেন্ট মার্চেন্ডাইজারের করণীয়:' : 'Development Merchandiser Action:'}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-500">Proto / Fit / SMS</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-100">
                    {lang === 'bn' ? tip.devTitleBn : tip.devTitleEn}
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{lang === 'bn' ? tip.devActionBn : tip.devActionEn}</span>
                  </p>
                </div>

                <div className="pt-2.5 border-t border-zinc-800 text-xs text-amber-200/90 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-400">
                      {lang === 'bn' ? 'সতর্কতা (Pitfall): ' : 'Common Pitfall: '}
                    </span>
                    {lang === 'bn' ? tip.devPitfallBn : tip.devPitfallEn}
                  </div>
                </div>
              </div>

              {/* Right: Bulk Merchandiser */}
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 space-y-2.5 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-amber-400">
                      {lang === 'bn' ? 'বাল্ক মার্চেন্ডাইজারের করণীয়:' : 'Bulk Merchandiser Action:'}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-500">PPM / Bulk / Shipment</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-100">
                    {lang === 'bn' ? tip.bulkTitleBn : tip.bulkTitleEn}
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{lang === 'bn' ? tip.bulkActionBn : tip.bulkActionEn}</span>
                  </p>
                </div>

                <div className="pt-2.5 border-t border-zinc-800 text-xs text-rose-200/90 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-rose-400">
                      {lang === 'bn' ? 'বাল্ক ঝুঁকি (Bulk Risk): ' : 'Bulk Production Risk: '}
                    </span>
                    {lang === 'bn' ? tip.bulkPitfallBn : tip.bulkPitfallEn}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
