import React from 'react';
import {
  BookOpen,
  X,
  Layers,
  Droplets,
} from 'lucide-react';
import { Language } from '../utils/i18n.ts';
import {
  CONCISE_10_FABRIC_STEPS,
  DYE_CROSS_SECTIONS,
  ACID_ICE_CLOUD_MATRIX,
  GARMENT_DYE_MATRIX,
} from '../data/denimManualData.ts';

interface DenimManualModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DenimManualModal: React.FC<DenimManualModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  // Generate 32 indigo shades from pale ice to loomstate pitch navy
  const indigo32Shades = Array.from({ length: 32 }, (_, idx) => {
    const ratio = idx / 31;
    const l = Math.round(92 - ratio * 78);
    const s = Math.round(45 + ratio * 35);
    return {
      code: `IND-${String(idx + 1).padStart(2, '0')}`,
      hsl: `hsl(216, ${s}%, ${l}%)`,
      isDark: l < 52,
    };
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-label={lang === 'bn' ? 'ডেনিম কুইক রেফারেন্স চার্ট' : 'Denim Quick Reference Charts'}
    >
      <div className="relative w-full max-w-6xl h-[88vh] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="px-5 py-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-zinc-100">
                {lang === 'bn'
                  ? 'ডেনিম ইঞ্জিনিয়ারিং: সংক্ষিপ্ত ভিজ্যুয়াল রেফারেন্স চার্ট'
                  : 'Denim Engineering: Concise Visual Reference Charts'}
              </h2>
              <p className="text-xs text-zinc-400">
                {lang === 'bn'
                  ? 'তুলা থেকে ফ্যাব্রিক (১০ ধাপ), ৫টি ডাই ক্রস-সেকশন, অ্যাসিড/আইস/ক্লাউড ওয়াশ এবং ৩২-শেড ইনডিগো গ্র্যাডেশন—এক নজরে'
                  : '10-Step Fiber-to-Fabric Flow, 5 Dye Cross-Sections, Dry/Wet Wash Matrix & 32-Shade Indigo Gradation at a glance'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close reference modal"
            className="p-2 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-8 bg-zinc-950">
          {/* Section 1: 10-Step Concise Fiber-to-Fabric Flow */}
          <section className="space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-zinc-200 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              {lang === 'bn'
                ? '১. তুলা থেকে ডেনিম কাপড়: ১০-ধাপের সংক্ষিপ্ত প্রবাহ'
                : '1. Denim From Fiber to Fabric: 10-Step Concise Flow'}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {CONCISE_10_FABRIC_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex flex-col justify-between hover:border-zinc-700 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-xs font-black text-amber-400">
                        {s.step}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        {lang === 'bn' ? s.tagBn : s.tagEn}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-zinc-100 leading-snug">
                      {lang === 'bn' ? s.titleBn : s.titleEn}
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                      {lang === 'bn' ? s.keyFactBn : s.keyFactEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: 5 Dyeing Agents Yarn Cross-Sections */}
          <section className="space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-zinc-200 flex items-center gap-2">
              <Droplets className="w-4 h-4 text-sky-400" />
              {lang === 'bn'
                ? '২. ৫টি ডাইং এজেন্ট ও সুতার ক্রস-সেকশন তুলনা'
                : '2. 5 Dyeing Agents & Yarn Cross-Section Comparison'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {DYE_CROSS_SECTIONS.map((d) => (
                <div
                  key={d.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 flex flex-col items-center text-center space-y-2"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-2 border-zinc-700"
                    style={{ backgroundColor: d.outerColor }}
                  >
                    <div
                      className="w-8 h-8 rounded-full shadow-inner flex items-center justify-center"
                      style={{ backgroundColor: d.innerColor }}
                    >
                      <span
                        className={`text-[8px] font-mono font-black ${
                          d.id === 'reactive' ? 'text-white' : 'text-zinc-900'
                        }`}
                      >
                        {d.corepenetrated ? 'CORE' : 'WHITE'}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-zinc-100">
                    {lang === 'bn' ? d.nameBn : d.nameEn}
                  </div>
                  <span className="text-[10px] font-mono text-amber-400">
                    {lang === 'bn' ? d.fadeSpeedBn : d.fadeSpeedEn}
                  </span>
                  <p className="text-[11px] text-zinc-400 leading-snug">
                    {lang === 'bn' ? d.conciseNoteBn : d.conciseNoteEn}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Acid vs. Ice vs. Cloud Wash + Tinting vs. Overdyeing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                {lang === 'bn'
                  ? '৩. অ্যাসিড বনাম আইস বনাম ক্লাউড ওয়াশ ম্যাট্রিক্স'
                  : '3. Acid vs. Ice vs. Cloud Wash Matrix'}
              </h4>
              <div className="space-y-2">
                {ACID_ICE_CLOUD_MATRIX.map((row, idx) => (
                  <div
                    key={idx}
                    className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-zinc-100">
                        {lang === 'bn' ? row.washNameBn : row.washNameEn}
                      </div>
                      <div className="text-[11px] text-sky-400 font-mono">
                        {lang === 'bn' ? `মাধ্যম: ${row.mediumBn}` : `Medium: ${row.mediumEn}`}
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        {lang === 'bn' ? row.contrastEffectBn : row.contrastEffectEn}
                      </div>
                    </div>
                    <div className="flex gap-1 shrink-0 mt-1">
                      {row.swatchColors.map((c, cIdx) => (
                        <span
                          key={cIdx}
                          className="w-4 h-8 rounded-xs border border-zinc-700"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                {lang === 'bn'
                  ? '৪. টিন্টিং (০.০০২%) বনাম ওভারডাইং (৮%) পার্থক্য'
                  : '4. Tinting (0.002%) vs. Overdyeing (8%) Comparison'}
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-[11px] text-left">
                  <thead>
                    <tr className="border-b border-zinc-800 text-zinc-400 font-mono">
                      <th className="py-1.5 pr-2">{lang === 'bn' ? 'প্যারামিটার' : 'Parameter'}</th>
                      <th className="py-1.5 px-2 text-amber-400">{lang === 'bn' ? 'টিন্টিং (Tinting)' : 'Tinting'}</th>
                      <th className="py-1.5 pl-2 text-emerald-400">{lang === 'bn' ? 'ওভারডাইং (Overdye)' : 'Overdyeing'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                    {GARMENT_DYE_MATRIX.map((r, idx) => (
                      <tr key={idx}>
                        <td className="py-2 pr-2 font-semibold text-zinc-100">
                          {lang === 'bn' ? r.parameterBn : r.parameterEn}
                        </td>
                        <td className="py-2 px-2">{lang === 'bn' ? r.tintingBn : r.tintingEn}</td>
                        <td className="py-2 pl-2">{lang === 'bn' ? r.overdyeingBn : r.overdyeingEn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section 5: Denim Care, Storage & 32-Shade Gradation Card */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-200">
                {lang === 'bn'
                  ? '৫. ডেনিম সংরক্ষণ পদ্ধতি ও ৩২-শেড গ্র্যাডেশন চার্ট'
                  : '5. Denim Storage Methods & 32-Shade Gradation Grid'}
              </h4>
              <div className="flex flex-wrap gap-3 text-[11px] text-zinc-400">
                <span>
                  <strong className="text-amber-400">S-Hooks:</strong>{' '}
                  {lang === 'bn' ? 'বেল্ট লুপে ঝুলিয়ে ভাঁজমুক্ত রাখা' : 'Hang by belt loops, zero crease'}
                </span>
                <span>·</span>
                <span>
                  <strong className="text-sky-400">Roll:</strong>{' '}
                  {lang === 'bn' ? 'রোল করে রাখলে জায়গা বাঁচে ও ভাঁজ পড়ে না' : 'Saves space, prevents sharp fold lines'}
                </span>
                <span>·</span>
                <span>
                  <strong className="text-emerald-400">Raw Care:</strong>{' '}
                  {lang === 'bn' ? 'ঠান্ডা পানিতে উল্টে ধোয়া' : 'Turn inside-out, cold hand soak'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5">
              {indigo32Shades.map((sh) => (
                <div
                  key={sh.code}
                  className="h-9 rounded-md border border-zinc-700/60 flex items-end justify-center p-0.5 shadow-inner"
                  style={{ backgroundColor: sh.hsl }}
                  title={sh.code}
                >
                  <span
                    className={`text-[8px] font-mono font-bold ${
                      sh.isDark ? 'text-zinc-200' : 'text-zinc-900'
                    }`}
                  >
                    {sh.code.replace('IND-', '')}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
