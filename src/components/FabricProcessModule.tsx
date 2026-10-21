import React, { useState } from 'react';
import {
  FABRIC_PROCESS_STAGES,
} from '../data/denimData.ts';
import {
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Eye,
  Sliders,
  Layers,
  Flame,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { Language } from '../utils/i18n.ts';

interface FabricProcessModuleProps {
  lang?: Language;
}

export const FabricProcessModule: React.FC<FabricProcessModuleProps> = ({ lang = 'bn' }) => {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);
  const [selectedDyeMethod, setSelectedDyeMethod] = useState<'rope' | 'slasher' | 'hank'>('rope');
  const [indigoDips, setIndigoDips] = useState<number>(12);
  const [twillType, setTwillType] = useState<'rht' | 'lht' | 'broken'>('rht');
  const [castType, setCastType] = useState<'pure' | 'sulfur-bottom' | 'sulfur-top' | 'black-bottom'>('pure');

  const currentStage = FABRIC_PROCESS_STAGES[selectedStageIndex];

  // Ring dye visual calculation:
  // more dips = thicker outer blue ring, but core remains white!
  const ringThicknessPx = Math.min(38, 12 + (indigoDips * 2.2));

  return (
    <div className="space-y-8">
      {/* Hero Overview */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-6 md:p-8 border border-indigo-500/20 shadow-xl">
        <div className="absolute right-0 top-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            {lang === 'bn' ? 'মডিউল ১: তুলা থেকে লুমস্টেট ডেনিম ফ্যাব্রিক' : 'Module 1: Fiber to Loomstate Denim'}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'bn'
              ? 'ডেনিম ফ্যাব্রিক ম্যানুফ্যাকচারিং ও ইনডিগো সায়েন্স'
              : 'Denim Fabric Manufacturing & Indigo Science'}
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            {lang === 'bn'
              ? 'মার্চেন্ডাইজারদের জন্য ফ্যাব্রিক হলো মোট পোশাকের এফওবি (FOB) মূল্যের ৫৫% থেকে ৬৫%। স্পিনিং জিওমেট্রি, রিং-ডাইং কেমিস্ট্রি, টুইল উইভ এবং শ্রিংকেজ কন্ট্রোল আয়ত্ত করুন।'
              : 'As a merchandiser, fabric accounts for 55% to 65% of the total garment FOB cost. Understand yarn spinning geometry, the physics of ring-dyeing, twill weave constructions, and shrinkage control to specify fabrics with confidence.'}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono">
            <div className="bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-700/60">
              <span className="text-slate-400 block text-[10px]">
                {lang === 'bn' ? 'স্ট্যান্ডার্ড ইয়ার্ন কাউন্ট' : 'STANDARD YARN COUNT'}
              </span>
              <span className="text-amber-300 font-bold">Warp: 7s - 10s Ring / Weft: 8s - 12s</span>
            </div>
            <div className="bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-700/60">
              <span className="text-slate-400 block text-[10px]">
                {lang === 'bn' ? 'উইভ স্ট্রাকচার' : 'WEAVE STRUCTURE'}
              </span>
              <span className="text-indigo-300 font-bold">3/1 Twill (Warp-Faced)</span>
            </div>
            <div className="bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-700/60">
              <span className="text-slate-400 block text-[10px]">
                {lang === 'bn' ? 'ইনডিগো ঘনত্ব' : 'INDIGO CONCENTRATION'}
              </span>
              <span className="text-cyan-300 font-bold">2.5% - 4.5% on weight of yarn</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Step Process Timeline Selector */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-indigo-400" />
          {lang === 'bn'
            ? 'ডেনিম ফ্যাব্রিক উৎপাদনের ৫টি ধারাবাহিক পর্যায়'
            : 'The 5 Sequential Stages of Denim Fabric Production'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {FABRIC_PROCESS_STAGES.map((stage, idx) => {
            const isSelected = selectedStageIndex === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setSelectedStageIndex(idx)}
                className={`relative text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-500 ring-2 ring-indigo-500/40 shadow-lg shadow-indigo-950'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-black ${isSelected ? 'text-indigo-400' : 'text-slate-500'}`}>
                    {lang === 'bn' ? `পর্যায় ${stage.step}` : `STAGE ${stage.step}`}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400" />}
                </div>
                <div className="font-bold text-sm text-white leading-snug">{stage.title}</div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">{stage.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono font-bold text-indigo-400">
                {lang === 'bn' ? `পর্যায় ${currentStage.step} গভীর বিশ্লেষণ` : `STAGE ${currentStage.step} DEEP DIVE`}
              </div>
              <h4 className="text-xl font-bold text-white mt-0.5">{currentStage.title}</h4>
              <p className="text-xs text-slate-400 mt-1">{currentStage.summary}</p>
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
              <div key={dIdx} className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <h5 className="font-semibold text-sm text-indigo-200 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    {detail.heading}
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">{detail.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Lab: Indigo Ring Dyeing & Skying Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900/90 rounded-2xl border border-indigo-900/40 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Sliders className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-base font-bold text-white">
                    {lang === 'bn' ? 'ইনডিগো রিং-ডাইং সিমুলেটর' : 'Interactive Indigo Ring-Dye Simulator'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {lang === 'bn'
                      ? 'সুতার ক্রস-সেকশন পর্যবেক্ষণ: সাদা তুলার কেন্দ্র বনাম বাইরের ইনডিগো রিং'
                      : 'Visualize yarn cross-section: white cotton core vs indigo ring'}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono bg-indigo-950 text-indigo-300 px-2 py-1 rounded-sm border border-indigo-800">
                {indigoDips} {lang === 'bn' ? 'অক্সিডেশন ডিপস' : 'Oxidation Dips'}
              </span>
            </div>

            {/* Slider */}
            <div className="space-y-2 mt-4 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between text-xs text-slate-300">
                <span>{lang === 'bn' ? 'ডাইং বাথ ও স্কাইং (অক্সিডেশন) সাইকেল সংখ্যা:' : 'Number of Dye Baths & Skying Cycles:'}</span>
                <span className="font-mono font-bold text-cyan-400">{indigoDips} Dips</span>
              </div>
              <input
                type="range"
                min="4"
                max="24"
                step="1"
                value={indigoDips}
                onChange={(e) => setIndigoDips(Number(e.target.value))}
                className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>{lang === 'bn' ? '৪ ডিপ (হালকা স্কাই ব্লু)' : '4 Dips (Light/Pale Blue)'}</span>
                <span>{lang === 'bn' ? '১২ ডিপ (স্ট্যান্ডার্ড ইনডিগো)' : '12 Dips (Standard 501 Indigo)'}</span>
                <span>{lang === 'bn' ? '২৪ ডিপ (ডিপ পিচ নেভি)' : '24 Dips (Ultra Deep Pitch Navy)'}</span>
              </div>
            </div>

            {/* Yarn Cross-Section Diagram */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800">
              <div className="relative flex items-center justify-center">
                {/* Outer Yarn Diameter */}
                <div
                  className="w-36 h-36 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl relative"
                  style={{
                    backgroundColor:
                      castType === 'sulfur-bottom'
                        ? '#142838'
                        : castType === 'sulfur-top'
                        ? '#17362a'
                        : castType === 'black-bottom'
                        ? '#0f172a'
                        : '#1e3a8a',
                    border: '3px solid #6366f1',
                  }}
                >
                  {/* Inner White Cotton Core */}
                  <div
                    className="rounded-full bg-slate-100 flex items-center justify-center shadow-inner transition-all duration-300"
                    style={{
                      width: `${144 - ringThicknessPx * 2}px`,
                      height: `${144 - ringThicknessPx * 2}px`,
                    }}
                  >
                    <span className="text-[9px] font-bold text-slate-800 font-mono text-center px-1">
                      {lang === 'bn' ? 'সাদা তুলার কেন্দ্র' : 'White Cotton Core'}
                    </span>
                  </div>

                  {/* Ring Indicator Label */}
                  <div className="absolute -top-3 bg-indigo-600 text-white font-mono text-[9px] px-2 py-0.5 rounded-full shadow-sm">
                    {lang === 'bn'
                      ? `ইনডিগো রিং গভীরতা: ${Math.round((ringThicknessPx / 72) * 100)}%`
                      : `Indigo Ring Shell: ${Math.round((ringThicknessPx / 72) * 100)}% Depth`}
                  </div>
                </div>
              </div>

              {/* Technical Readout */}
              <div className="space-y-2 text-xs max-w-xs">
                <div className="text-slate-300">
                  <span className="font-semibold text-white">
                    {lang === 'bn' ? 'সুতার কেন্দ্রবিন্দু অবস্থা: ' : 'Yarn Core Status: '}
                  </span>
                  <span className="text-emerald-400 font-medium">
                    {lang === 'bn' ? '১০০% অবিকৃত সাদা তুলা' : '100% Raw Undyed Cotton'}
                  </span>
                </div>
                <div className="text-slate-400 text-[11px] leading-relaxed">
                  {lang === 'bn' ? (
                    <>
                      যতগুলো ডিপই দেওয়া হোক না কেন, <strong className="text-white">সুতার মাঝখান সবসময় ধবধবে সাদা থাকে</strong>। লন্ড্রি ওয়াশে এনজাইম যখন বাইরের নীল খোসা ঘষে ফেলে, তখনই সাদা কেন্দ্র বের হয়ে আকর্ষণীয় হুইস্কার্স ও স্টোন হাইলাইট জন্ম দেয়!
                    </>
                  ) : (
                    <>
                      Notice that no matter how many dips, <strong className="text-white">the center remains pure white</strong>. When enzymes abrade the outer indigo ring, the white core shines through to create whiskers and stone wash highs!
                    </>
                  )}
                </div>
                <div className="pt-2 border-t border-slate-800 font-mono text-[11px] text-amber-300">
                  {lang === 'bn' ? 'কনট্রাস্ট সম্ভাবনা: ' : 'Contrast Potential: '}
                  {indigoDips >= 16
                    ? lang === 'bn'
                      ? 'চরম হাইলাইট ও হাই-কন্ট্রাস্ট'
                      : 'Extreme (High Definition Fades)'
                    : indigoDips >= 10
                    ? lang === 'bn'
                      ? 'উচ্চ ভিন্টেজ শেড'
                      : 'High (Standard Vintage)'
                    : lang === 'bn'
                    ? 'হালকা প্যাস্টেল ওয়াশডাউন'
                    : 'Low (Pastel Washdown)'}
                </div>
              </div>
            </div>
          </div>

          {/* Dye Methods Comparison */}
          <div className="mt-6 pt-4 border-t border-slate-800">
            <div className="text-xs font-semibold text-slate-300 mb-2">
              {lang === 'bn' ? 'ইনডিগো ডাইং পদ্ধতির তুলনা:' : 'Compare Indigo Dyeing Methods:'}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setSelectedDyeMethod('rope')}
                className={`py-2 px-2.5 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                  selectedDyeMethod === 'rope'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Rope Dyeing
              </button>
              <button
                onClick={() => setSelectedDyeMethod('slasher')}
                className={`py-2 px-2.5 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                  selectedDyeMethod === 'slasher'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Slasher (Sheet)
              </button>
              <button
                onClick={() => setSelectedDyeMethod('hank')}
                className={`py-2 px-2.5 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                  selectedDyeMethod === 'hank'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Hank / Skein
              </button>
            </div>

            <div className="mt-3 bg-slate-950 p-3 rounded-lg text-xs text-slate-300">
              {selectedDyeMethod === 'rope' && (
                <div>
                  <div className="font-bold text-amber-400 mb-1">
                    {lang === 'bn' ? 'রোপ ডাইং (আন্তর্জাতিক মার্চেন্ডাইজার স্ট্যান্ডার্ড)' : 'Rope Dyeing (Merchandiser Standard)'}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {lang === 'bn'
                      ? '৪০০ টি রোপ (প্রতি রোপে ৩৫০-৪৫০ সুতা) একযোগে ১২-২৪ টি বাথের মধ্য দিয়ে যায়। সবচেয়ে নিখুঁত রিং-ডাইং এবং সর্বনিম্ন শেড ভ্যারিয়েশন (<১% সাইড-টু-সেন্টার)। ন্যূনতম ৫,০০০ গজ অর্ডার প্রয়োজন।'
                      : '400 ropes of 350-450 ends continuously dipped through 12-24 boxes. Highest ring-dye contrast, lowest shade variance (<1% side-to-center). Requires min 5,000 yd order.'}
                  </p>
                </div>
              )}
              {selectedDyeMethod === 'slasher' && (
                <div>
                  <div className="font-bold text-cyan-400 mb-1">
                    {lang === 'bn' ? 'স্ল্যাশার / শিট ডাইং' : 'Slasher / Sheet Dyeing'}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {lang === 'bn'
                      ? 'ওয়ার্প সুতা ফ্ল্যাট শিট আকারে সরাসরি উইভার্স বিমে ডাইং করা হয়। ছোট স্যাম্পল অর্ডারের (১,৫০০ গজ) জন্য দ্রুত পরিবর্তনযোগ্য, তবে কাপড়ের সাইড-টু-সাইড শেড পার্থক্যের ঝুঁকি বেশি থাকে।'
                      : 'Yarns dyed in flat warp sheet directly onto weaver beams. Faster lot changeover suitable for short sample runs (1,500 yds), but higher risk of side-to-side shade grading.'}
                  </p>
                </div>
              )}
              {selectedDyeMethod === 'hank' && (
                <div>
                  <div className="font-bold text-rose-400 mb-1">
                    {lang === 'bn' ? 'হ্যাংক / স্কিন ডাইং (ঐতিহ্যবাহী জাপানি কৌশল)' : 'Hank / Skein Dyeing (Artisanal Japanese)'}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {lang === 'bn'
                      ? 'প্রাকৃতিক গাজনকৃত ইনডিগো ভ্যাটে হাতে চুবিয়ে ডাইং করা হয়। রঙ প্রায় পুরো সুতার ভেতরে প্রবেশ করে, ফলে খুব আস্তে ফেড হয়। অত্যন্ত ব্যয়বহুল ($১৮ - $৩৫ প্রতি গজ)।'
                      : 'Yarns hand-dipped into natural fermentation vats (Sukumo). Indigo penetrates almost entirely to the core; fades extremely slowly with subtle blue patina. Very expensive ($18-$35/yd).'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Lab: Twill Weave Geometry & Direction */}
        <div className="bg-slate-900/90 rounded-2xl border border-indigo-900/40 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Layers className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-base font-bold text-white">
                  {lang === 'bn' ? 'টুইল উইভ অ্যানাটমি ও লেগ টুইস্ট বিশ্লেষণ' : 'Twill Weave Anatomy & Leg Twist Simulator'}
                </h4>
                <p className="text-xs text-slate-400">
                  {lang === 'bn'
                    ? 'টুইল লাইনের দিক ও ঘূর্ণন ডেনিমের হ্যান্ডফিল এবং সেলাই ঘোরার প্রবণতা নির্ধারণ করে'
                    : 'Direction of twill lines determines handfeel and torque behavior'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <button
                onClick={() => setTwillType('rht')}
                className={`p-2.5 rounded-lg text-xs font-semibold text-center border transition-all cursor-pointer ${
                  twillType === 'rht'
                    ? 'bg-indigo-600 text-white border-indigo-500'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                <span className="block font-bold">3/1 RHT</span>
                <span className="text-[10px] opacity-80">{lang === 'bn' ? 'রাইট হ্যান্ড (Z)' : 'Right Hand (Z)'}</span>
              </button>
              <button
                onClick={() => setTwillType('lht')}
                className={`p-2.5 rounded-lg text-xs font-semibold text-center border transition-all cursor-pointer ${
                  twillType === 'lht'
                    ? 'bg-indigo-600 text-white border-indigo-500'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                <span className="block font-bold">3/1 LHT</span>
                <span className="text-[10px] opacity-80">{lang === 'bn' ? 'লেফট হ্যান্ড (S)' : 'Left Hand (S)'}</span>
              </button>
              <button
                onClick={() => setTwillType('broken')}
                className={`p-2.5 rounded-lg text-xs font-semibold text-center border transition-all cursor-pointer ${
                  twillType === 'broken'
                    ? 'bg-indigo-600 text-white border-indigo-500'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                <span className="block font-bold">Broken Twill</span>
                <span className="text-[10px] opacity-80">{lang === 'bn' ? 'অ্যান্টি-টুইস্ট জিগজ্যাগ' : 'Anti-Twist Zigzag'}</span>
              </button>
            </div>

            {/* Visual Twill Graphic */}
            <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  {lang === 'bn' ? 'মাইক্রোস্কোপিক উইভ প্যাটার্ন:' : 'Microscopic Weave Representation:'}
                </span>
                <span className="text-xs font-bold text-amber-400">
                  {twillType === 'rht' && (lang === 'bn' ? 'ডানদিকে ডায়াগনাল ↗' : 'Diagonal Slants Up-Right ↗')}
                  {twillType === 'lht' && (lang === 'bn' ? 'বামদিকে ডায়াগনাল ↖' : 'Diagonal Slants Up-Left ↖')}
                  {twillType === 'broken' && (lang === 'bn' ? 'দিকহীন জিগজ্যাগ ↗↖' : 'Non-Directional Zigzag ↗↖')}
                </span>
              </div>

              {/* CSS Grid Pattern Mocking Twill */}
              <div className="h-28 rounded-lg bg-indigo-950/70 border border-indigo-700/50 p-2 flex items-center justify-center overflow-hidden relative">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      twillType === 'rht'
                        ? 'repeating-linear-gradient(45deg, #4338ca 0, #4338ca 6px, #1e1b4b 6px, #1e1b4b 14px)'
                        : twillType === 'lht'
                        ? 'repeating-linear-gradient(-45deg, #4338ca 0, #4338ca 6px, #1e1b4b 6px, #1e1b4b 14px)'
                        : 'repeating-linear-gradient(90deg, #4338ca 0, #4338ca 8px, #1e1b4b 8px, #1e1b4b 16px), repeating-linear-gradient(45deg, #6366f1 0, #6366f1 4px, transparent 4px, transparent 8px)',
                  }}
                />
                <div className="relative z-10 bg-slate-950/80 px-4 py-2 rounded-lg border border-slate-700 text-center">
                  <div className="font-mono text-xs font-bold text-white">
                    {twillType === 'rht' && "Levi's 501 Classic Construction"}
                    {twillType === 'lht' && 'Lee Riders 101Z Heritage Soft Weave'}
                    {twillType === 'broken' && 'Wrangler 13MWZ Cowboy Cut Anti-Twist'}
                  </div>
                  <div className="text-[10px] text-slate-300 mt-0.5">
                    {twillType === 'rht' && (lang === 'bn' ? '৩টি ওয়ার্প সুতা ১টি ওয়েফট সুতার উপর দিয়ে ডানে ধাবিত হয়' : '3 warp ends pass over 1 weft pick in rightward stair step')}
                    {twillType === 'lht' && (lang === 'bn' ? '৩টি ওয়ার্প সুতা ১টি ওয়েফট সুতার উপর দিয়ে বামে ধাবিত হয়' : '3 warp ends pass over 1 weft pick in leftward stair step')}
                    {twillType === 'broken' && (lang === 'bn' ? '২টি সুতা ডানে এবং ২টি সুতা বামে মিলিয়ে হেরিংবোন তৈরি করে' : 'Alternates 2 threads RHT and 2 threads LHT in a herringbone matrix')}
                  </div>
                </div>
              </div>

              {/* Twill Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">
                    {lang === 'bn' ? 'লেগ টুইস্ট ঝুঁকি' : 'Torque / Leg Twist Risk'}
                  </span>
                  <span className={`text-xs font-bold ${twillType === 'broken' ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {twillType === 'broken'
                      ? lang === 'bn'
                        ? '০% (কোনো টুইস্ট নেই)'
                        : '0% (Zero Torque)'
                      : lang === 'bn'
                      ? '৩% - ৫% (স্কিয়ু লাগবে)'
                      : '3% - 5% (Needs Skew)'}
                  </span>
                </div>
                <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">
                    {lang === 'bn' ? 'কাপড়ের হ্যান্ডফিল' : 'Handfeel Softness'}
                  </span>
                  <span className={`text-xs font-bold ${twillType === 'lht' ? 'text-emerald-400' : 'text-slate-200'}`}>
                    {twillType === 'lht'
                      ? lang === 'bn'
                        ? 'অত্যন্ত নরম ও ড্র্যাপি'
                        : 'Very Soft & Supple'
                      : lang === 'bn'
                      ? 'শক্ত ও স্ট্রাকচার্ড'
                      : 'Firm & Structured'}
                  </span>
                </div>
                <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">
                    {lang === 'bn' ? 'অ্যাব্রেশন কনট্রাস্ট' : 'Abrasion Contrast'}
                  </span>
                  <span className="text-xs font-bold text-cyan-400">
                    {twillType === 'rht'
                      ? lang === 'bn'
                        ? 'তীক্ষ্ণ ও স্পষ্ট'
                        : 'Crisp & Defined'
                      : twillType === 'lht'
                      ? lang === 'bn'
                        ? 'স্মুথ ও ব্লেন্ডেড'
                        : 'Hazy & Blended'
                      : lang === 'bn'
                      ? 'টেক্সচার্ড ক্রস'
                      : 'Textured Cross'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Cast Selector */}
          <div className="mt-6 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-300">
                {lang === 'bn' ? 'ইনডিগো কাস্ট ও আন্ডারটোন কেমিস্ট্রি:' : 'Indigo Cast & Undertone Chemistry:'}
              </span>
              <span className="text-[11px] font-mono text-indigo-400">Merchandiser Spec</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                onClick={() => setCastType('pure')}
                className={`px-2 py-2 rounded-lg text-xs font-medium text-center border cursor-pointer ${
                  castType === 'pure' ? 'bg-blue-600 text-white border-blue-400' : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                Pure Indigo
              </button>
              <button
                onClick={() => setCastType('sulfur-bottom')}
                className={`px-2 py-2 rounded-lg text-xs font-medium text-center border cursor-pointer ${
                  castType === 'sulfur-bottom' ? 'bg-amber-700 text-white border-amber-500' : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                Sulfur Bottom
              </button>
              <button
                onClick={() => setCastType('sulfur-top')}
                className={`px-2 py-2 rounded-lg text-xs font-medium text-center border cursor-pointer ${
                  castType === 'sulfur-top' ? 'bg-emerald-800 text-white border-emerald-500' : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                Sulfur Top
              </button>
              <button
                onClick={() => setCastType('black-bottom')}
                className={`px-2 py-2 rounded-lg text-xs font-medium text-center border cursor-pointer ${
                  castType === 'black-bottom' ? 'bg-slate-700 text-white border-slate-500' : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                Black-Blue Bottom
              </button>
            </div>
            <div className="mt-2 text-[11px] text-slate-400">
              {castType === 'pure' &&
                (lang === 'bn'
                  ? 'বিশুদ্ধ রয়্যাল ডিপ ব্লু; কোনো ব্রাউন বা গ্রিন আন্ডারটোন ছাড়াই ক্রিস্প স্কাই ব্লু রঙে ফেড হয়।'
                  : 'Royal deep blue; washes down to clean sky blue without brown or green undertones.')}
              {castType === 'sulfur-bottom' &&
                (lang === 'bn'
                  ? 'ইনডিগো দেওয়ার আগে সালফার খাকি ডাই দেওয়া হয়; ইনডিগো ফেড হলে পুরোনো ভিন্টেজ কাস্ট ফুটে ওঠে।'
                  : 'Sulfur brown/khaki applied before indigo; as indigo washes off, an aged dirty vintage undertone is exposed.')}
              {castType === 'sulfur-top' &&
                (lang === 'bn'
                  ? 'ইনডিগোর উপরে সালফার ডাই টপিং; জলপাই-সবুজাভ আভা দেয় যা ক্লাসিক ওয়ার্কওয়্যারে বায়াররা পছন্দ করে।'
                  : 'Sulfur dye topped over indigo; produces greenish-olive cast favored in heritage workwear.')}
              {castType === 'black-bottom' &&
                (lang === 'bn'
                  ? 'সালফার ব্ল্যাকের ওপর ইনডিগো টপিং; স্টিল-ব্লু ও চারকোল রঙের মুডি ফেড তৈরি করে।'
                  : 'Sulfur black bottom with indigo top; creates a moody steel-blue charcoal fade.')}
            </div>
          </div>
        </div>
      </div>

      {/* Selvedge vs Non-Selvedge Merchandiser Matrix */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl">
        <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-red-500" />
          {lang === 'bn'
            ? 'সেলভেজ (শাটল লুম) বনাম আধুনিক র্যাপিয়ার/এয়ার-জেট লুম তুলনামূলক ম্যাট্রিক্স'
            : 'Selvedge (Shuttle Loom) vs Modern Rapier/Air-Jet Loom Comparison'}
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase font-mono text-[11px]">
                <th className="py-3 px-4">{lang === 'bn' ? 'প্যারামিটার' : 'Parameter'}</th>
                <th className="py-3 px-4 text-red-400 font-bold">
                  {lang === 'bn' ? 'ভিন্টেজ সেলভেজ ডেনিম (শাটল লুম)' : 'Vintage Selvedge Denim (Shuttle Loom)'}
                </th>
                <th className="py-3 px-4 text-cyan-400 font-bold">
                  {lang === 'bn' ? 'মডার্ন ওয়াইড ডেনিম (র্যাপিয়ার / এয়ার-জেট)' : 'Modern Wide Denim (Rapier / Air-Jet)'}
                </th>
                <th className="py-3 px-4 text-amber-400">
                  {lang === 'bn' ? 'মার্চেন্ডাইজিং প্রভাব' : 'Merchandiser Impact'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-3 px-4 font-semibold text-white">
                  {lang === 'bn' ? 'ফ্যাব্রিকের বহর (Width)' : 'Fabric Width'}
                </td>
                <td className="py-3 px-4 font-mono text-red-300">29" - 32" (Narrow)</td>
                <td className="py-3 px-4 font-mono text-cyan-300">58" - 62" (Wide)</td>
                <td className="py-3 px-4">
                  {lang === 'bn'
                    ? 'সেলভেজে প্রতি পিস প্যান্টে প্রায় ২.৫ গজ কাপড় লাগে, যেখানে ওয়াইড কাপড়ে লাগে মাত্র ১.৫ গজ।'
                    : 'Selvedge requires ~2.5 yds/pc vs ~1.5 yds/pc for wide fabric.'}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">
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
              <tr>
                <td className="py-3 px-4 font-semibold text-white">
                  {lang === 'bn' ? 'লুমের গতি ও উৎপাদন' : 'Loom Speed & Production'}
                </td>
                <td className="py-3 px-4">
                  ~130-160 picks/min ({lang === 'bn' ? 'ধীরগতির হস্তশিল্প' : 'Slow, artisanal'})
                </td>
                <td className="py-3 px-4">
                  ~600-1000 picks/min ({lang === 'bn' ? 'উচ্চগতির আধুনিক মিল' : 'High-speed industrial'})
                </td>
                <td className="py-3 px-4">
                  {lang === 'bn'
                    ? 'সেলভেজ মিল লিড টাইম দ্বিগুণ-তিনগুণ বেশি হয়; সুতার টান পরিবর্তনের কারণে সুন্দর স্লাবি টেক্সচার পাওয়া যায়।'
                    : 'Selvedge mill lead times are 2-3x longer; yarn tension variations give natural slubby texture.'}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">
                  {lang === 'bn' ? 'আউটসিম প্যাটার্ন শেপ' : 'Outseam Pattern Shape'}
                </td>
                <td className="py-3 px-4 text-amber-300 font-semibold">
                  {lang === 'bn' ? 'সম্পূর্ণ সোজা আউটসিম (কোনো বাঁক নেই)' : 'Strictly Straight Outseam (No curve)'}
                </td>
                <td className="py-3 px-4 text-slate-300">
                  {lang === 'bn' ? 'হিপ সাইজ অনুযায়ী কার্ভড আউটসিম' : 'Curved outseam matching hip silhouette'}
                </td>
                <td className="py-3 px-4">
                  {lang === 'bn'
                    ? 'প্যাটার্ন মাস্টাররা সেলভেজের আউটসিমে কোনো কার্ভ বা ঢাল দিতে পারেন না কারণ সোজা বোনা ধারটি অক্ষত রাখতে হয়।'
                    : 'Pattern makers cannot curve the outseam of selvedge jeans because the straight woven edge must stay intact.'}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">
                  {lang === 'bn' ? 'প্রতি গজ কাপড়ের দাম' : 'Fabric Cost per Yard'}
                </td>
                <td className="py-3 px-4 font-mono text-red-400 font-bold">$7.50 - $16.00 / yard</td>
                <td className="py-3 px-4 font-mono text-cyan-400 font-bold">$2.80 - $5.50 / yard</td>
                <td className="py-3 px-4">
                  {lang === 'bn'
                    ? 'সেলভেজ ডেনিম ব্র্যান্ড শোরুমে ১০০% থেকে ৩০০% পর্যন্ত অতিরিক্ত মূল্যে বিক্রি হয় ($১২০ - $৩৫০)।'
                    : 'Selvedge jeans command a 100-300% retail markup premium ($120 - $350 MSRP).'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
