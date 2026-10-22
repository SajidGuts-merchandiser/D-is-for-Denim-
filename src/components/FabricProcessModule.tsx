import React, { useState } from 'react';
import {
  FABRIC_PROCESS_STAGES,
} from '../data/denimData.ts';
import {
  CONCISE_10_FABRIC_STEPS,
  DYE_CROSS_SECTIONS,
  WEAVE_AND_VARIATIONS,
} from '../data/denimManualData.ts';
import {
  CheckCircle2,
  Sparkles,
  Sliders,
  Layers,
  ShieldCheck,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { Language } from '../utils/i18n.ts';
import { MerchandiserPlaybookSection } from './MerchandiserPlaybookSection.tsx';

interface FabricProcessModuleProps {
  lang?: Language;
  onOpenManual?: () => void;
}

export const FabricProcessModule: React.FC<FabricProcessModuleProps> = ({
  lang = 'bn',
  onOpenManual,
}) => {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);
  const [selectedDyeMethod, setSelectedDyeMethod] = useState<'rope' | 'slasher' | 'hank'>('rope');
  const [indigoDips, setIndigoDips] = useState<number>(12);
  const [twillType, setTwillType] = useState<'rht' | 'lht' | 'broken'>('rht');
  const [castType, setCastType] = useState<'pure' | 'sulfur-bottom' | 'sulfur-top' | 'black-bottom'>('pure');
  const [viewMode, setViewMode] = useState<'concise10' | 'deep5'>('concise10');

  const currentStage = FABRIC_PROCESS_STAGES[selectedStageIndex];

  const ringThicknessPx = Math.min(38, 12 + indigoDips * 2.2);

  return (
    <div className="space-y-8">
      {/* Hero Overview - Simple Dark Theme */}
      <div className="rounded-2xl bg-zinc-900 p-6 md:p-8 border border-zinc-800 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-2 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>
                {lang === 'bn'
                  ? 'মডিউল ১: তুলা থেকে ডেনিম ফ্যাব্রিক (১০-ধাপের সংক্ষিপ্ত ভিজ্যুয়াল গাইড)'
                  : 'Module 1: Fiber to Fabric (10-Step Concise Visual Guide)'}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-100 tracking-tight">
              {lang === 'bn'
                ? 'ডেনিম ফ্যাব্রিক ম্যানুফ্যাকচারিং ও ইনডিগো সায়েন্স'
                : 'Denim Fabric Manufacturing & Indigo Science'}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {lang === 'bn'
                ? 'ফ্যাব্রিক হলো মোট পোশাকের এফওবি (FOB) মূল্যের ৫৫%–৬৫%। নিচে তুলা থেকে কাপড় তৈরির ১০-ধাপের প্রবাহ, ৫ ধরনের ডাই ক্রস-সেকশন এবং ৮টি উইভ ও ফিনিশিং সংক্ষেপে দেওয়া হলো।'
                : 'Fabric accounts for 55%–65% of garment FOB cost. Explore the concise 10-step production pipeline, 5 dye cross-sections, and 8 weave/coating variations.'}
            </p>
          </div>

          {onOpenManual && (
            <button
              onClick={onOpenManual}
              className="shrink-0 self-start lg:self-center px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold text-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>
                {lang === 'bn' ? 'কুইক রেফারেন্স চার্ট খুলুন' : 'Open Quick Reference Charts'}
              </span>
            </button>
          )}
        </div>

        {/* Concise Spec Strip */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="bg-zinc-950 px-3 py-2 rounded-lg border border-zinc-800">
            <span className="text-zinc-500 block text-[10px]">
              {lang === 'bn' ? 'ইয়ার্ন কাউন্ট' : 'YARN COUNT'}
            </span>
            <span className="text-amber-400 font-bold">Ne 6s–10s (Heavy) / 12s–16s</span>
          </div>
          <div className="bg-zinc-950 px-3 py-2 rounded-lg border border-zinc-800">
            <span className="text-zinc-500 block text-[10px]">
              {lang === 'bn' ? 'স্পিনিং তুলনা' : 'SPINNING'}
            </span>
            <span className="text-zinc-200 font-bold">Ring (Soft/Slub) vs Rotor (OE)</span>
          </div>
          <div className="bg-zinc-950 px-3 py-2 rounded-lg border border-zinc-800">
            <span className="text-zinc-500 block text-[10px]">
              {lang === 'bn' ? 'ডাইং ও কোর' : 'DYE & CORE'}
            </span>
            <span className="text-sky-400 font-bold">Indigo / Sulfur / Reactive</span>
          </div>
          <div className="bg-zinc-950 px-3 py-2 rounded-lg border border-zinc-800">
            <span className="text-zinc-500 block text-[10px]">
              {lang === 'bn' ? 'ফিনিশিং কন্ট্রোল' : 'FINISHING'}
            </span>
            <span className="text-emerald-400 font-bold">Sanforized • Pre-Skew • Singed</span>
          </div>
        </div>
      </div>

      {/* 10-Step Concise Fiber-to-Fabric Pipeline */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-amber-400" />
            {lang === 'bn'
              ? 'তুলা থেকে ফ্যাব্রিক: ১০-ধাপের সংক্ষিপ্ত ফ্লো'
              : 'Denim From Fiber to Fabric: 10-Step Concise Pipeline'}
          </h3>

          <div className="flex bg-zinc-900 p-1 rounded-lg border border-zinc-800 text-xs">
            <button
              onClick={() => setViewMode('concise10')}
              className={`px-3 py-1 rounded-md font-bold transition-all cursor-pointer ${
                viewMode === 'concise10'
                  ? 'bg-zinc-800 text-amber-400'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {lang === 'bn' ? '১০-ধাপ সংক্ষিপ্ত ভিউ' : '10-Step Concise View'}
            </button>
            <button
              onClick={() => setViewMode('deep5')}
              className={`px-3 py-1 rounded-md font-bold transition-all cursor-pointer ${
                viewMode === 'deep5'
                  ? 'bg-zinc-800 text-amber-400'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {lang === 'bn' ? '৫-পর্যায় বিস্তারিত নোট' : '5-Stage Deep Dive'}
            </button>
          </div>
        </div>

        {viewMode === 'concise10' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {CONCISE_10_FABRIC_STEPS.map((s) => (
              <div
                key={s.step}
                className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-3.5 flex flex-col justify-between transition-all shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-black text-amber-400">
                      {s.step}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">
                      {lang === 'bn' ? s.tagBn : s.tagEn}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-zinc-100 leading-snug">
                    {lang === 'bn' ? s.titleBn : s.titleEn}
                  </h4>
                  <p className="text-[11px] text-zinc-400 mt-1.5 leading-snug">
                    {lang === 'bn' ? s.keyFactBn : s.keyFactEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {FABRIC_PROCESS_STAGES.map((stage, idx) => {
                const isSelected = selectedStageIndex === idx;
                return (
                  <button
                    key={stage.step}
                    onClick={() => setSelectedStageIndex(idx)}
                    className={`relative text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-zinc-900 border-amber-500/60 shadow-lg'
                        : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-mono text-xs font-black ${isSelected ? 'text-amber-400' : 'text-zinc-500'}`}>
                        {lang === 'bn' ? `পর্যায় ${stage.step}` : `STAGE ${stage.step}`}
                      </span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-amber-400" />}
                    </div>
                    <div className="font-bold text-sm text-zinc-100 leading-snug">{stage.title}</div>
                    <div className="text-[11px] text-zinc-400 mt-1 line-clamp-2">{stage.subtitle}</div>
                  </button>
                );
              })}
            </div>

            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                <div>
                  <div className="text-xs font-mono font-bold text-amber-400">
                    {lang === 'bn' ? `পর্যায় ${currentStage.step} গভীর বিশ্লেষণ` : `STAGE ${currentStage.step} DEEP DIVE`}
                  </div>
                  <h4 className="text-xl font-bold text-zinc-100 mt-0.5">{currentStage.title}</h4>
                  <p className="text-xs text-zinc-400 mt-1">{currentStage.summary}</p>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium max-w-sm">
                  <span className="font-bold block text-[10px] text-amber-400 uppercase tracking-wide">
                    {lang === 'bn' ? 'মার্চেন্ডাইজারের মূল সূত্র' : 'Merchandiser Core Rule'}
                  </span>
                  {currentStage.merchandiserKeyTakeaway}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {currentStage.details.map((detail, dIdx) => (
                  <div key={dIdx} className="bg-zinc-950 rounded-xl p-4 border border-zinc-800 flex flex-col justify-between">
                    <div>
                      <h5 className="font-semibold text-sm text-zinc-100 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        {detail.heading}
                      </h5>
                      <p className="text-xs text-zinc-300 leading-relaxed">{detail.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 5 Dyeing Agents & Yarn Cross-Sections Matrix */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              {lang === 'bn'
                ? '৫টি ডাইং এজেন্ট ও সুতার ক্রস-সেকশন তুলনা'
                : '5 Dyeing Agents & Yarn Core Cross-Section Matrix'}
            </h3>
            <p className="text-xs text-zinc-400">
              {lang === 'bn'
                ? 'সুতার কেন্দ্র সাদা থাকলে হাই-কন্ট্রাস্ট ফেড হয়, আর কোর-ডাইড (Reactive) হলে ধোয়ার পরও রঙ অপরিবর্তিত থাকে'
                : 'Ring-dyed white core creates high-contrast fades; core-penetrated reactive dye stays dark permanently'}
            </p>
          </div>
          <span className="text-[11px] font-mono text-zinc-400">
            Ring-Dyed vs Core-Dyed
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {DYE_CROSS_SECTIONS.map((d) => (
            <div
              key={d.id}
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 flex flex-col items-center text-center justify-between hover:border-zinc-700 transition-all"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-md border-2 border-zinc-700 mb-2"
                  style={{ backgroundColor: d.outerColor }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shadow-inner"
                    style={{ backgroundColor: d.innerColor }}
                  >
                    <span
                      className={`text-[7px] font-mono font-black ${
                        d.id === 'reactive' ? 'text-white' : 'text-zinc-900'
                      }`}
                    >
                      {d.corepenetrated ? 'SOLID' : 'WHITE'}
                    </span>
                  </div>
                </div>
                <div className="text-xs font-bold text-zinc-100">{lang === 'bn' ? d.nameBn : d.nameEn}</div>
                <span className="mt-1 text-[10px] font-mono text-amber-400">
                  {lang === 'bn' ? d.undertoneBn : d.undertoneEn}
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-2 leading-snug">
                {lang === 'bn' ? d.conciseNoteBn : d.conciseNoteEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 8 Concise Weave Constructions, Textures, Coatings & Prints */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              {lang === 'bn'
                ? 'ডেনিম বুনন, ভ্যারিয়েশন, কোটিং ও প্রিন্টিং গাইড'
                : 'Denim Weave Structures, Variations, Coatings & Printing'}
            </h3>
            <p className="text-xs text-zinc-400">
              {lang === 'bn'
                ? '৩x১, ২x১, ব্রোকেন টুইল, শ্যামব্রে, স্লাব, নেপ, ওয়াক্স কোটিং ও ডিসচার্জ প্রিন্টের সংক্ষিপ্ত তুলনা'
                : 'Concise visual matrix of 3x1, 2x1, Broken Twill, Chambray, Slub, Nep, Coatings & Discharge Prints'}
            </p>
          </div>
          <span className="text-[11px] font-mono text-zinc-400">
            Name • Composition • Oz/yd² • Width
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {WEAVE_AND_VARIATIONS.map((wv) => (
            <div
              key={wv.id}
              className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-all"
            >
              <div>
                <div
                  className="h-12 w-full border-b border-zinc-800 flex items-center justify-between px-3"
                  style={{ background: wv.visualPattern, backgroundSize: '12px 12px' }}
                >
                  <span className="px-2 py-0.5 rounded-xs bg-zinc-950/90 text-zinc-100 font-mono text-[10px] font-bold border border-zinc-700">
                    {wv.ratio}
                  </span>
                  <span className="px-2 py-0.5 rounded-xs bg-zinc-900/90 text-amber-400 font-mono text-[9px] uppercase border border-zinc-700">
                    {wv.category}
                  </span>
                </div>
                <div className="p-3.5">
                  <h4 className="text-xs font-bold text-zinc-100">
                    {lang === 'bn' ? wv.nameBn : wv.nameEn}
                  </h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                    {lang === 'bn' ? wv.featureBn : wv.featureEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lab: Indigo Ring Dyeing & Twill Weave */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-zinc-950 text-sky-400 border border-zinc-800">
                  <Sliders className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-base font-bold text-zinc-100">
                    {lang === 'bn' ? 'ইনডিগো রিং-ডাইং সিমুলেটর' : 'Interactive Indigo Ring-Dye Simulator'}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {lang === 'bn'
                      ? 'সুতার ক্রস-সেকশন পর্যবেক্ষণ: সাদা তুলার কেন্দ্র বনাম বাইরের ইনডিগো রিং'
                      : 'Visualize yarn cross-section: white cotton core vs indigo ring'}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 font-bold">
                {indigoDips} {lang === 'bn' ? 'ডিপস' : 'Dips'}
              </span>
            </div>

            <div className="space-y-2 mt-4 bg-zinc-950 p-4 rounded-xl border border-zinc-800">
              <div className="flex justify-between text-xs text-zinc-300">
                <span>{lang === 'bn' ? 'ডাইং বাথ ও স্কাইং (অক্সিডেশন) সাইকেল সংখ্যা:' : 'Number of Dye Baths & Skying Cycles:'}</span>
                <span className="font-mono font-bold text-amber-400">{indigoDips} Dips</span>
              </div>
              <input
                type="range"
                min="4"
                max="24"
                step="1"
                value={indigoDips}
                onChange={(e) => setIndigoDips(Number(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-zinc-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>{lang === 'bn' ? '৪ ডিপ (হালকা ব্লু)' : '4 Dips (Light Blue)'}</span>
                <span>{lang === 'bn' ? '১২ ডিপ (স্ট্যান্ডার্ড)' : '12 Dips (Standard)'}</span>
                <span>{lang === 'bn' ? '২৪ ডিপ (ডিপ নেভি)' : '24 Dips (Deep Navy)'}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 bg-zinc-950 p-6 rounded-xl border border-zinc-800">
              <div className="relative flex items-center justify-center">
                <div
                  className="w-36 h-36 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl relative"
                  style={{
                    backgroundColor:
                      castType === 'sulfur-bottom'
                        ? '#142838'
                        : castType === 'sulfur-top'
                        ? '#17362a'
                        : castType === 'black-bottom'
                        ? '#18181b'
                        : '#1e3a8a',
                    border: '3px solid #38bdf8',
                  }}
                >
                  <div
                    className="rounded-full bg-zinc-100 flex items-center justify-center shadow-inner transition-all duration-300"
                    style={{
                      width: `${144 - ringThicknessPx * 2}px`,
                      height: `${144 - ringThicknessPx * 2}px`,
                    }}
                  >
                    <span className="text-[9px] font-bold text-zinc-900 font-mono text-center px-1">
                      {lang === 'bn' ? 'সাদা তুলার কেন্দ্র' : 'White Cotton Core'}
                    </span>
                  </div>

                  <div className="absolute -top-3 bg-zinc-900 border border-zinc-700 text-amber-400 font-mono text-[9px] px-2 py-0.5 rounded-md">
                    {lang === 'bn'
                      ? `রিং গভীরতা: ${Math.round((ringThicknessPx / 72) * 100)}%`
                      : `Ring Depth: ${Math.round((ringThicknessPx / 72) * 100)}%`}
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs max-w-xs">
                <div className="text-zinc-300">
                  <span className="font-semibold text-zinc-100">
                    {lang === 'bn' ? 'সুতার কেন্দ্রবিন্দু অবস্থা: ' : 'Yarn Core Status: '}
                  </span>
                  <span className="text-emerald-400 font-medium">
                    {lang === 'bn' ? '১০০% অবিকৃত সাদা তুলা' : '100% Raw Undyed Cotton'}
                  </span>
                </div>
                <div className="text-zinc-400 text-[11px] leading-relaxed">
                  {lang === 'bn' ? (
                    <>
                      যতগুলো ডিপই দেওয়া হোক না কেন, <strong className="text-zinc-100">সুতার মাঝখান সবসময় ধবধবে সাদা থাকে</strong>। লন্ড্রি ওয়াশে এনজাইম যখন বাইরের নীল খোসা ঘষে ফেলে, তখনই সাদা কেন্দ্র বের হয়ে হুইস্কার্স ও স্টোন হাইলাইট জন্ম দেয়।
                    </>
                  ) : (
                    <>
                      No matter how many dips, <strong className="text-zinc-100">the center remains pure white</strong>. When enzymes abrade the outer indigo ring, the white core shines through to create whiskers and stone wash highs.
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800">
            <div className="text-xs font-semibold text-zinc-300 mb-2">
              {lang === 'bn' ? 'ইনডিগো ডাইং পদ্ধতির তুলনা:' : 'Compare Indigo Dyeing Methods:'}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {(['rope', 'slasher', 'hank'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedDyeMethod(m)}
                  className={`py-2 px-2.5 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                    selectedDyeMethod === m
                      ? 'bg-zinc-800 text-amber-400 border border-zinc-700'
                      : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-zinc-200'
                  }`}
                >
                  {m === 'rope' ? 'Rope Dyeing' : m === 'slasher' ? 'Slasher (Sheet)' : 'Hank / Skein'}
                </button>
              ))}
            </div>

            <div className="mt-3 bg-zinc-950 p-3 rounded-lg border border-zinc-800 text-xs text-zinc-300">
              {selectedDyeMethod === 'rope' && (
                <div>
                  <div className="font-bold text-amber-400 mb-1">
                    {lang === 'bn' ? 'রোপ ডাইং (আন্তর্জাতিক মার্চেন্ডাইজার স্ট্যান্ডার্ড)' : 'Rope Dyeing (Merchandiser Standard)'}
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    {lang === 'bn'
                      ? '৪০০ টি রোপ (প্রতি রোপে ৩৫০-৪৫০ সুতা) একযোগে ১২-২৪ টি বাথের মধ্য দিয়ে যায়। সবচেয়ে নিখুঁত রিং-ডাইং এবং সর্বনিম্ন শেড ভ্যারিয়েশন (<১% সাইড-টু-সেন্টার)।'
                      : '400 ropes of 350-450 ends continuously dipped through 12-24 boxes. Highest ring-dye contrast, lowest shade variance (<1% side-to-center).'}
                  </p>
                </div>
              )}
              {selectedDyeMethod === 'slasher' && (
                <div>
                  <div className="font-bold text-sky-400 mb-1">
                    {lang === 'bn' ? 'স্ল্যাশার / শিট ডাইং' : 'Slasher / Sheet Dyeing'}
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    {lang === 'bn'
                      ? 'ওয়ার্প সুতা ফ্ল্যাট শিট আকারে সরাসরি উইভার্স বিমে ডাইং করা হয়। ছোট স্যাম্পল অর্ডারের (১,৫০০ গজ) জন্য দ্রুত পরিবর্তনযোগ্য।'
                      : 'Yarns dyed in flat warp sheet directly onto weaver beams. Faster lot changeover suitable for short sample runs (1,500 yds).'}
                  </p>
                </div>
              )}
              {selectedDyeMethod === 'hank' && (
                <div>
                  <div className="font-bold text-emerald-400 mb-1">
                    {lang === 'bn' ? 'হ্যাংক / স্কিন ডাইং' : 'Hank / Skein Dyeing'}
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    {lang === 'bn'
                      ? 'প্রাকৃতিক গাজনকৃত ইনডিগো ভ্যাটে হাতে চুবিয়ে ডাইং করা হয়। রঙ প্রায় পুরো সুতার ভেতরে প্রবেশ করে, ফলে খুব আস্তে ফেড হয়।'
                      : 'Yarns hand-dipped into natural fermentation vats. Indigo penetrates almost entirely to the core; fades slowly.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Lab: Twill Weave Geometry & Direction */}
        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-lg bg-zinc-950 text-amber-400 border border-zinc-800">
                <Layers className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-base font-bold text-zinc-100">
                  {lang === 'bn' ? 'টুইল উইভ অ্যানাটমি ও লেগ টুইস্ট বিশ্লেষণ' : 'Twill Weave Anatomy & Leg Twist Simulator'}
                </h4>
                <p className="text-xs text-zinc-400">
                  {lang === 'bn'
                    ? 'টুইল লাইনের দিক ও ঘূর্ণন ডেনিমের হ্যান্ডফিল এবং সেলাই ঘোরার প্রবণতা নির্ধারণ করে'
                    : 'Direction of twill lines determines handfeel and torque behavior'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {(['rht', 'lht', 'broken'] as const).map((tType) => (
                <button
                  key={tType}
                  onClick={() => setTwillType(tType)}
                  className={`p-2.5 rounded-lg text-xs font-semibold text-center border transition-all cursor-pointer ${
                    twillType === tType
                      ? 'bg-zinc-800 text-amber-400 border-zinc-700'
                      : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                  }`}
                >
                  <span className="block font-bold">
                    {tType === 'rht' ? '3/1 RHT' : tType === 'lht' ? '3/1 LHT' : 'Broken Twill'}
                  </span>
                </button>
              ))}
            </div>

            <div className="bg-zinc-950 rounded-xl p-5 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">
                  {lang === 'bn' ? 'মাইক্রোস্কোপিক উইভ প্যাটার্ন:' : 'Microscopic Weave Representation:'}
                </span>
                <span className="text-xs font-bold text-amber-400">
                  {twillType === 'rht' && (lang === 'bn' ? 'ডানদিকে ডায়াগনাল ↗' : 'Diagonal Slants Up-Right ↗')}
                  {twillType === 'lht' && (lang === 'bn' ? 'বামদিকে ডায়াগনাল ↖' : 'Diagonal Slants Up-Left ↖')}
                  {twillType === 'broken' && (lang === 'bn' ? 'দিকহীন জিগজ্যাগ ↗↖' : 'Non-Directional Zigzag ↗↖')}
                </span>
              </div>

              <div className="h-28 rounded-lg bg-zinc-900 border border-zinc-800 p-2 flex items-center justify-center overflow-hidden relative">
                <div
                  className="absolute inset-0 opacity-35"
                  style={{
                    backgroundImage:
                      twillType === 'rht'
                        ? 'repeating-linear-gradient(45deg, #3f3f46 0, #3f3f46 6px, #18181b 6px, #18181b 14px)'
                        : twillType === 'lht'
                        ? 'repeating-linear-gradient(-45deg, #3f3f46 0, #3f3f46 6px, #18181b 6px, #18181b 14px)'
                        : 'repeating-linear-gradient(90deg, #3f3f46 0, #3f3f46 8px, #18181b 8px, #18181b 16px)',
                  }}
                />
                <div className="relative z-10 bg-zinc-950/90 px-4 py-2 rounded-lg border border-zinc-800 text-center">
                  <div className="font-mono text-xs font-bold text-zinc-100">
                    {twillType === 'rht' && '3x1 Right-Hand Twill Construction'}
                    {twillType === 'lht' && '3x1 Left-Hand Soft Twill Weave'}
                    {twillType === 'broken' && 'Broken Twill Anti-Twist Weave'}
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">
                    {twillType === 'rht' && (lang === 'bn' ? '৩টি ওয়ার্প সুতা ১টি ওয়েফট সুতার উপর দিয়ে ডানে ধাবিত হয়' : '3 warp ends pass over 1 weft pick in rightward stair step')}
                    {twillType === 'lht' && (lang === 'bn' ? '৩টি ওয়ার্প সুতা ১টি ওয়েফট সুতার উপর দিয়ে বামে ধাবিত হয়' : '3 warp ends pass over 1 weft pick in leftward stair step')}
                    {twillType === 'broken' && (lang === 'bn' ? '২টি সুতা ডানে এবং ২টি সুতা বামে মিলিয়ে হেরিংবোন তৈরি করে' : 'Alternates 2 threads RHT and 2 threads LHT in a herringbone matrix')}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800">
                  <span className="text-[10px] text-zinc-400 block">
                    {lang === 'bn' ? 'লেগ টুইস্ট ঝুঁকি' : 'Torque / Leg Twist Risk'}
                  </span>
                  <span className={`text-xs font-bold ${twillType === 'broken' ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {twillType === 'broken'
                      ? lang === 'bn' ? '০% (কোনো টুইস্ট নেই)' : '0% (Zero Torque)'
                      : lang === 'bn' ? '৩% - ৫% (স্কিয়ু লাগবে)' : '3% - 5% (Needs Skew)'}
                  </span>
                </div>
                <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800">
                  <span className="text-[10px] text-zinc-400 block">
                    {lang === 'bn' ? 'কাপড়ের হ্যান্ডফিল' : 'Handfeel Softness'}
                  </span>
                  <span className="text-xs font-bold text-zinc-200">
                    {twillType === 'lht'
                      ? lang === 'bn' ? 'অত্যন্ত নরম' : 'Very Soft'
                      : lang === 'bn' ? 'শক্ত ও স্ট্রাকচার্ড' : 'Firm & Structured'}
                  </span>
                </div>
                <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800">
                  <span className="text-[10px] text-zinc-400 block">
                    {lang === 'bn' ? 'অ্যাব্রেশন কনট্রাস্ট' : 'Abrasion Contrast'}
                  </span>
                  <span className="text-xs font-bold text-sky-400">
                    {twillType === 'rht'
                      ? lang === 'bn' ? 'তীক্ষ্ণ ও স্পষ্ট' : 'Crisp & Defined'
                      : lang === 'bn' ? 'স্মুথ ও ব্লেন্ডেড' : 'Smooth & Blended'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-zinc-300">
                {lang === 'bn' ? 'ইনডিগো কাস্ট ও আন্ডারটোন কেমিস্ট্রি:' : 'Indigo Cast & Undertone Chemistry:'}
              </span>
              <span className="text-[11px] font-mono text-zinc-400">Merchandiser Spec</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(['pure', 'sulfur-bottom', 'sulfur-top', 'black-bottom'] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCastType(c)}
                  className={`px-2 py-2 rounded-lg text-xs font-medium text-center border cursor-pointer ${
                    castType === c
                      ? 'bg-zinc-800 text-amber-400 border-zinc-700 font-bold'
                      : 'bg-zinc-950 text-zinc-400 border-zinc-800'
                  }`}
                >
                  {c === 'pure'
                    ? 'Pure Indigo'
                    : c === 'sulfur-bottom'
                    ? 'Sulfur Bottom'
                    : c === 'sulfur-top'
                    ? 'Sulfur Top'
                    : 'Black Bottom'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Selvedge vs Non-Selvedge Merchandiser Matrix */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 shadow-xl">
        <h4 className="text-base font-bold text-zinc-100 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-red-500" />
          {lang === 'bn'
            ? 'সেলভেজ (শাটল লুম) বনাম আধুনিক র্যাপিয়ার/এয়ার-জেট লুম তুলনামূলক ম্যাট্রিক্স'
            : 'Selvedge (Shuttle Loom) vs Modern Rapier/Air-Jet Loom Comparison'}
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase font-mono text-[11px]">
                <th className="py-3 px-4">{lang === 'bn' ? 'প্যারামিটার' : 'Parameter'}</th>
                <th className="py-3 px-4 text-red-400 font-bold">
                  {lang === 'bn' ? 'ভিন্টেজ সেলভেজ ডেনিম (শাটল লুম)' : 'Vintage Selvedge Denim (Shuttle Loom)'}
                </th>
                <th className="py-3 px-4 text-sky-400 font-bold">
                  {lang === 'bn' ? 'মডার্ন ওয়াইড ডেনিম (র্যাপিয়ার / এয়ার-জেট)' : 'Modern Wide Denim (Rapier / Air-Jet)'}
                </th>
                <th className="py-3 px-4 text-amber-400">
                  {lang === 'bn' ? 'মার্চেন্ডাইজিং প্রভাব' : 'Merchandiser Impact'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
              <tr>
                <td className="py-3 px-4 font-semibold text-zinc-100">
                  {lang === 'bn' ? 'ফ্যাব্রিকের বহর (Width)' : 'Fabric Width'}
                </td>
                <td className="py-3 px-4 font-mono text-red-300">29" - 32" (Narrow)</td>
                <td className="py-3 px-4 font-mono text-sky-300">58" - 62" (Wide)</td>
                <td className="py-3 px-4">
                  {lang === 'bn'
                    ? 'সেলভেজে প্রতি পিস প্যান্টে প্রায় ২.৫ গজ কাপড় লাগে, যেখানে ওয়াইড কাপড়ে লাগে মাত্র ১.৫ গজ।'
                    : 'Selvedge requires ~2.5 yds/pc vs ~1.5 yds/pc for wide fabric.'}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-zinc-100">
                  {lang === 'bn' ? 'ধার ফিনিশিং (Edge Finish)' : 'Edge Finish'}
                </td>
                <td className="py-3 px-4">
                  {lang === 'bn'
                    ? 'সেলফ-বাউন্ড ক্লোজড লুপ এজ সাথে রঙিন আইকনিক টিকার থ্রেড'
                    : 'Self-bound closed loop edge with colored ticker thread'}
                </td>
                <td className="py-3 px-4">
                  {lang === 'bn'
                    ? 'কাটা ধার যাতে ওভারলক সেলাই দিতে হয়'
                    : 'Cut edge with fringed or tucked selvedge (must be overlocked)'}
                </td>
                <td className="py-3 px-4">
                  {lang === 'bn'
                    ? 'প্যান্টের বটম ফোল্ড করলেই ক্রেতা প্রিমিয়াম লাল-সাদা সেলভেজ বর্ডার দেখতে পায়।'
                    : 'Selvedge jeans reveal the iconic cuff ticker when rolled up.'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Development Merchandiser vs Bulk Merchandiser Tips Playbook */}
      <MerchandiserPlaybookSection lang={lang} defaultDomain="all" />
    </div>
  );
};
