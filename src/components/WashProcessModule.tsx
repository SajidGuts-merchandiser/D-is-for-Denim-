import React, { useState } from 'react';
import {
  Droplets,
  Zap,
  AlertOctagon,
  Clock,
  Thermometer,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { Language } from '../utils/i18n.ts';
import {
  CONCISE_DRY_PROCESSES,
  ACID_ICE_CLOUD_MATRIX,
  GARMENT_DYE_MATRIX,
} from '../data/denimManualData.ts';
import { WashingMachinesAndChemicalsSection } from './WashingMachinesAndChemicalsSection.tsx';
import { MerchandiserPlaybookSection } from './MerchandiserPlaybookSection.tsx';

interface WetStep {
  number: string;
  titleEn: string;
  titleBn: string;
  categoryEn: string;
  categoryBn: string;
  duration: string;
  temp: string;
  ph: string;
  liquorRatio: string;
  youtubeUrl: string;
  chemicalsEn: string;
  chemicalsBn: string;
  mechanismEn: string;
  mechanismBn: string;
  riskFactorEn: string;
  riskFactorBn: string;
}

const WET_STEPS: WetStep[] = [
  {
    number: '01',
    titleEn: 'Desizing Bath',
    titleBn: 'ডি-সাইজিং ওয়াশ বাথ',
    categoryEn: 'Starch Degradation',
    categoryBn: 'স্টার্চ ও সাইজিং অপসারণ',
    duration: '15 - 20 min',
    temp: '55°C - 60°C',
    ph: '6.0 - 7.0 (Neutral)',
    liquorRatio: '1:6 to 1:8',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Denim+Desizing+Alpha+Amylase+Enzyme+Wash+Process',
    chemicalsEn: 'Alpha-Amylase Enzyme (1.5 - 2.5 g/L) + Non-ionic Wetting Agent',
    chemicalsBn: 'আলফা-অ্যামাইলেজ এনজাইম (১.৫ - ২.৫ গ্রাম/লি.) + নন-আয়নিক ওয়েটিং এজেন্ট',
    mechanismEn:
      'Warp yarns are coated with starch and PVA sizing during weaving. Alpha-amylase selectively cleaves alpha-1,4-glucosidic bonds in starch into water-soluble maltose without attacking cellulose fibers.',
    mechanismBn:
      'উইভিংয়ের সময় ওয়ার্প সুতায় দেওয়া স্টার্চ ও পিভিএ সাইজিং আলফা-অ্যামাইলেজ এনজাইম ভেঙে দ্রবণীয় মাল্টোজে রূপান্তর করে। এতে সেলুলোজ ফাইবারের কোনো ক্ষতি ছাড়াই পরবর্তী ওয়াশের জন্য কাপড় প্রস্তুত হয়।',
    riskFactorEn:
      'Under-desizing creates water-repellent spots that lead to disastrous patchy enzyme washes and uneven stone abrasion.',
    riskFactorBn:
      'ডি-সাইজিং অসম্পূর্ণ থাকলে কাপড়ে তেলের মতো পানি-প্রতিরোধী দাগ থেকে যায়, যা পরবর্তী এনজাইম ওয়াশে প্যাচ ও অমসৃণ অ্যাব্রেশনের মারাত্মক ডিফেক্ট ঘটায়।',
  },
  {
    number: '02',
    titleEn: 'Bio-Stone / Cellulase Abrasion',
    titleBn: 'বায়ো-স্টোন ও সেলুলেজ এনজাইম অ্যাব্রেশন',
    categoryEn: 'Indigo Ring Washdown',
    categoryBn: 'ইনডিগো রিং ওয়াশডাউন',
    duration: '30 - 45 min',
    temp: '50°C - 55°C',
    ph: '6.5 (Neutral) or 4.5 (Acid)',
    liquorRatio: '1:8 + Pumice Stones (1:1.5)',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Denim+Jeans+Enzyme+Stone+Washing+Process+Factory',
    chemicalsEn: 'Neutral Cellulase Enzyme (1.5 g/L) + Polyacrylic Anti-Backstaining (1.0 g/L)',
    chemicalsBn: 'নিউট্রাল সেলুলেজ এনজাইম (১.৫ গ্রাম/লি.) + পলিঅ্যাক্রাইলিক অ্যান্টি-ব্যাকস্টেইনিং এজেন্ট (১.০ গ্রাম/লি.)',
    mechanismEn:
      'Cellulase enzymes digest microfibrils on the outer cotton fiber surface, loosening insoluble indigo pigment particles. Volcanic pumice stones mechanically batter seams and pockets to reveal the white yarn core.',
    mechanismBn:
      'সেলুলেজ এনজাইম তুলার উপরিভাগের মাইক্রোফাইব্রিলকে হজম করে আলগা করে, যার ফলে ইনডিগো পিগমেন্ট ধুয়ে যায়। সাথে পিউমিস স্টোন যোগ করলে সিম এবং পকেটে চমৎকার হাইলাইট ও কন্ট্রাস্ট তৈরি হয়।',
    riskFactorEn:
      'Failure to use anti-backstaining agents causes liberated indigo to dye pocket bags murky blue.',
    riskFactorBn:
      'অ্যান্টি-ব্যাকস্টেইনিং এজেন্ট ব্যবহার না করলে দ্রবীভূত নীল ইনডিগো পকেট ফ্যাব্রিক (White Pocketing) ও ভেতরের সেলাইকে নোংরা নীল বানিয়ে ফেলে।',
  },
  {
    number: '03',
    titleEn: 'Bleaching / Indigo Stripping',
    titleBn: 'ব্লিচিং ও ইনডিগো স্ট্রিপিং',
    categoryEn: 'Oxidative Decolorization',
    categoryBn: 'অক্সিডেটিভ ডিকলারাইজেশন',
    duration: '15 - 25 min',
    temp: '45°C - 50°C',
    ph: '10.5 - 11.5 (Alkaline)',
    liquorRatio: '1:8',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Denim+Bleach+Wash+Sodium+Hypochlorite+Process',
    chemicalsEn: 'Sodium Hypochlorite (NaOCl 5-8 ml/L) OR Hydrogen Peroxide (H2O2) OR Ozone Gas',
    chemicalsBn: 'সোডিয়াম হাইপোক্লোরাইট (NaOCl ৫-৮ মিলি/লি.) অথবা হাইড্রোজেন পারক্সাইড (H2O2) অথবা ওজোন গ্যাস',
    mechanismEn:
      'Active hypochlorite ions oxidize the conjugated double bond system of the indigo molecule into colorless isatin and anthranilic acid derivatives, transforming dark blue into light powder blue.',
    mechanismBn:
      'হাইপোক্লোরাইট আয়ন ইনডিগো অনুর ডাবল বন্ড ভেঙে বর্ণহীন আইসাটিনে রূপান্তর করে। এতে গাড় নীল শেড হালকা আইস ব্লু বা স্কাই ব্লু রঙে রূপান্তরিত হয়।',
    riskFactorEn:
      'Chlorine destroys elastane/Lycra fibers and drastically drops tear strength if unmonitored.',
    riskFactorBn:
      'ক্লোরিন স্ট্রেচ ডেনিমের স্প্যানডেক্স/লাইক্রা ফাইবার পুড়িয়ে ধ্বংস করে এবং টিয়ারিং স্ট্রেন্থ বা কাপড়ের স্থায়িত্ব মারাত্মকভাবে কমিয়ে দেয়।',
  },
  {
    number: '04',
    titleEn: 'Antichlor Neutralization',
    titleBn: 'অ্যান্টিক্লোর নিউট্রালাইজেশন',
    categoryEn: 'Chemical Termination',
    categoryBn: 'রাসায়নিক বিক্রিয়া নিস্ক্রিয়করণ',
    duration: '10 - 15 min',
    temp: '45°C',
    ph: '5.0 - 5.5',
    liquorRatio: '1:8',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Sodium+Metabisulfite+Neutralization+Denim+Washing',
    chemicalsEn: 'Sodium Metabisulfite (Na2S2O5, 2.5 - 4.0 g/L) or Hydrogen Peroxide rinse',
    chemicalsBn: 'সোডিয়াম মেটাবাইসালফাইট (Na2S2O5, ২.৫ - ৪.০ গ্রাম/লি.) অথবা H2O2 রিন্স',
    mechanismEn:
      'Na2S2O5 acts as a powerful reducing agent, reacting with residual active chlorine to convert it into harmless chloride salt. Essential to halt ongoing chemical degradation of cotton cellulose.',
    mechanismBn:
      'মেটাবাইসালফাইট শক্তিশালী রিডিউসিং এজেন্ট হিসেবে কাজ করে অবশিষ্ট ক্লোরিনের ক্ষতিকর বিক্রিয়া সম্পূর্ণ বন্ধ করে লবণ ও পানিতে রূপান্তর করে।',
    riskFactorEn:
      'Residual unneutralized chlorine leads to "tender fabric" (easy tearing) and severe yellowing in storage cartons.',
    riskFactorBn:
      'কাপড়ে ক্লোরিন থেকে গেলে গুদামে কার্টনে থাকা অবস্থায় কাপড় ভঙ্গুর হয়ে যায় এবং সাদা ও নীল অংশ কুৎসিত হলুদ (Yellowing) হয়ে যায়।',
  },
  {
    number: '05',
    titleEn: 'Tinting & Dirty Overdyeing (Optional)',
    titleBn: 'টিন্টিং ও ডার্টি ওভারডাইং (ঐচ্ছিক)',
    categoryEn: 'Patina Color Shifting',
    categoryBn: 'ভিন্টেজ কালার শাফলিং',
    duration: '15 - 20 min',
    temp: '60°C',
    ph: '8.0 - 9.0',
    liquorRatio: '1:10',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Denim+Tinting+Overdyeing+Garment+Dye+Process',
    chemicalsEn: 'Direct Yellow/Khaki Dyes (0.2-0.5% owg) + Salt + Cationic Dye Fixative',
    chemicalsBn: 'ডিরেক্ট ইয়েলো/খাকি ডাই (০.২-০.৫%) + গ্লবার সল্ট + ক্যাটায়নিক ফিক্সেটিভ',
    mechanismEn:
      'Infuses abraded white cotton highlights with a vintage antique, muddy, or tea-stained tone to simulate decades of authentic workwear wear.',
    mechanismBn:
      'এনজাইম বা ব্লিচের পর সাদা হয়ে যাওয়া সুতায় হালকা বাদামি বা চা-রঙা আভা দিয়ে ৫০-৬০ এর দশকের পুরোনো ভিন্টেজ লুক আনা হয়।',
    riskFactorEn:
      'Poor fixing causes tint dyes to bleed into consumer laundry, staining customer underwear and white socks.',
    riskFactorBn:
      'প্রোপার ফিক্সিং না হলে বায়ারের দেশে কাস্টমার ধোয়ার সময় রঙ উঠে মোজা ও অন্তর্বাসে মেখে মারাত্মক ক্লেইম তৈরি হয়।',
  },
  {
    number: '06',
    titleEn: 'Softening & Conditioning',
    titleBn: 'সফটনিং ও হ্যান্ডফিল ফিনিশিং',
    categoryEn: 'Handfeel Finishing',
    categoryBn: 'প্রিমিয়াম টাচ ও ড্র্যাপ',
    duration: '10 min',
    temp: '40°C',
    ph: '5.5 (Slightly Acidic)',
    liquorRatio: '1:6 (Low Water)',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Silicone+Softener+Finishing+Denim+Washing+Plant',
    chemicalsEn: 'Silicone Micro-Emulsion (2.0 - 3.0 g/L) OR Cationic Softener',
    chemicalsBn: 'সিলিকন মাইক্রো-ইমালশন (২.০ - ৩.০ গ্রাম/লি.) অথবা ক্যাটায়নিক সফটনার',
    mechanismEn:
      'Amino-functional silicone polymers coat individual fiber surfaces, drastically reducing yarn-on-yarn friction for a buttery drape, high sewability, and silky skin feel.',
    mechanismBn:
      'সিলিকন পলিমার ফাইবারের উপর পিচ্ছিল মসৃণ প্রলেপ তৈরি করে। এতে খসখসে ডেনিম মাখনের মতো নরম ও আরামদায়ক হ্যান্ডফিলে পরিণত হয়।',
    riskFactorEn:
      'Tallow-based cationic softeners yellow rapidly when exposed to atmospheric ozone in warehouse cartons.',
    riskFactorBn:
      'নিম্নমানের এনিম্যাল-ফ্যাট ক্যাটায়নিক সফটনার ব্যবহার করলে কার্টনে ওজোন গ্যাসের সংস্পর্শে কাপড় হলুদ হয়ে দুর্গন্ধ ছড়ায়।',
  },
];

interface WashProcessModuleProps {
  lang?: Language;
}

export const WashProcessModule: React.FC<WashProcessModuleProps> = ({ lang = 'bn' }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(1);
  const [dryProcessTab, setDryProcessTab] = useState<'manual' | 'laser'>('laser');

  const currentStep = WET_STEPS[activeStepIndex];

  return (
    <div className="space-y-8">
      {/* Banner - Clean Simple Dark Theme */}
      <div className="rounded-2xl bg-zinc-900 p-6 md:p-8 border border-zinc-800 shadow-xl">
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-sky-400 font-semibold flex items-center gap-2 mb-2">
            <Droplets className="w-3.5 h-3.5" />
            <span>
              {lang === 'bn'
                ? 'মডিউল ৩: ওয়াশিং মেশিন (m/c), ওয়াশিং কেমিক্যাল ও ওয়েট/ড্রাই প্রসেস'
                : 'Module 3: Washing Machines (m/c), Laundry Chemicals & Wet/Dry Processes'}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-100 tracking-tight">
            {lang === 'bn'
              ? 'ডেনিম ওয়াশিং মেশিন, কেমিক্যাল এনসাইক্লোপিডিয়া ও ফিনিশিং ইঞ্জিনিয়ারিং'
              : 'Denim Washing Machines, Chemical Encyclopedia & Finishing Engineering'}
          </h2>
          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            {lang === 'bn'
              ? '৭টি ইন্ডাস্ট্রিয়াল ওয়াশিং মেশিন (m/c images ও ভিডিও), ৮টি প্রধান লন্ড্রি কেমিক্যাল (কী কাজ করে, কীভাবে পরিচালিত হয় ও অসুবিধা), ৬-ধাপের ওয়েট ওয়াশ সাইকেল এবং ড্রাই প্রসেস গাইড।'
              : 'Master the 7 industrial washing machines (with m/c schematics & YouTube video links), 8 essential laundry chemicals (function, operation & disadvantages), 6-stage wet baths, and dry finishing.'}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono">
            <div className="bg-zinc-950 px-3.5 py-2 rounded-lg border border-zinc-800">
              <span className="text-zinc-500 block text-[10px]">
                {lang === 'bn' ? 'ওয়েট ওয়াশের ধারাবাহিক ক্রম' : 'WET PROCESS SEQUENCE'}
              </span>
              <span className="text-sky-400 font-bold">Desize → Bio-Stone → Bleach → Antichlor → Soften</span>
            </div>
            <div className="bg-zinc-950 px-3.5 py-2 rounded-lg border border-zinc-800">
              <span className="text-zinc-500 block text-[10px]">
                {lang === 'bn' ? 'ড্রাই প্রসেসের মূল ধাপ' : 'DRY CRAFT PARADIGM'}
              </span>
              <span className="text-amber-400 font-bold">Whiskers → Sanding → Laser → 3D Curing</span>
            </div>
          </div>
        </div>
      </div>

      {/* NEW: 7 Washing Machines (washing m/c) + 8 Washing Chemicals Section */}
      <WashingMachinesAndChemicalsSection lang={lang} />

      {/* Interactive Wet Wash Reactor Sequence */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
              <Droplets className="w-5 h-5 text-sky-400" />
              {lang === 'bn' ? 'ইন্ডাস্ট্রিয়াল ওয়েট ওয়াশের ৬টি মূল পর্যায়' : 'The 6-Stage Industrial Wet Wash Cycle'}
            </h3>
            <p className="text-xs text-zinc-400">
              {lang === 'bn'
                ? 'রাসায়নিক উপাদান, তাপমাত্রা, pH মাত্রা, মার্চেন্ডাইজারের ঝুঁকি ও ইউটিউব প্রসেস ভিডিও দেখতে ধাপ নির্বাচন করুন'
                : 'Select a stage to inspect chemical dosages, temperature, pH curves, risk points, and YouTube process videos'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={currentStep.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-amber-400 border border-zinc-700 text-xs font-semibold flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'এই ধাপের ইউটিউব ভিডিও' : 'Watch Stage on YouTube'}</span>
            </a>
            <div className="font-mono text-xs bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800 text-zinc-300">
              {lang === 'bn' ? `ধাপ ${currentStep.number} / ০৬` : `Stage ${currentStep.number} / 06`}
            </div>
          </div>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {WET_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-950 border-amber-500/60 text-zinc-100'
                    : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-amber-400' : 'text-zinc-500'}`}>
                    {lang === 'bn' ? `ধাপ ${step.number}` : `STEP ${step.number}`}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                </div>
                <div className="text-xs font-bold text-zinc-100 truncate">
                  {lang === 'bn' ? step.titleBn : step.titleEn}
                </div>
                <div className="text-[10px] text-zinc-400 truncate">{step.duration}</div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Reactor Display */}
        <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
            <div>
              <span className="text-[11px] font-mono text-sky-400 uppercase font-bold tracking-wider">
                {lang === 'bn' ? currentStep.categoryBn : currentStep.categoryEn}
              </span>
              <h4 className="text-xl font-bold text-zinc-100 mt-0.5">
                {lang === 'bn' ? currentStep.titleBn : currentStep.titleEn}
              </h4>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 text-xs">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-zinc-400">{lang === 'bn' ? 'সময়কাল:' : 'Duration:'}</span>
                <span className="font-mono font-bold text-zinc-100">{currentStep.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 text-xs">
                <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-zinc-400">{lang === 'bn' ? 'তাপমাত্রা:' : 'Temp:'}</span>
                <span className="font-mono font-bold text-zinc-100">{currentStep.temp}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 text-xs">
                <span className="font-mono text-emerald-400 font-bold">pH</span>
                <span className="text-zinc-400">{lang === 'bn' ? 'মাত্রা:' : 'Level:'}</span>
                <span className="font-mono font-bold text-zinc-100">{currentStep.ph}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 text-xs">
                <Droplets className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-zinc-400">{lang === 'bn' ? 'লিক্যার রেশিও:' : 'Liquor:'}</span>
                <span className="font-mono font-bold text-zinc-100">{currentStep.liquorRatio}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">
                  {lang === 'bn' ? 'রাসায়নিক রেসিপি ও ডোজ (Chemical Recipe & Dosages)' : 'Chemical Recipe & Dosages'}
                </span>
                <div className="text-xs font-semibold text-sky-400 leading-relaxed font-mono">
                  {lang === 'bn' ? currentStep.chemicalsBn : currentStep.chemicalsEn}
                </div>
              </div>

              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">
                  {lang === 'bn' ? 'রাসায়নিক বিক্রিয়া ও কার্যপ্রণালী (Mechanism)' : 'Chemical Reaction & Mechanism'}
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {lang === 'bn' ? currentStep.mechanismBn : currentStep.mechanismEn}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-rose-950/25 p-4 rounded-xl border border-rose-500/30">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold mb-1">
                  <AlertOctagon className="w-4 h-4" />
                  {lang === 'bn' ? 'মার্চেন্ডাইজারের ঝুঁকি ও কোয়ালিটি পয়েন্ট:' : 'Merchandiser Risk Point & Quality Hazard:'}
                </div>
                <p className="text-xs text-rose-200/90 leading-relaxed font-medium">
                  {lang === 'bn' ? currentStep.riskFactorBn : currentStep.riskFactorEn}
                </p>
              </div>

              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-2">
                  {lang === 'bn' ? 'মার্চেন্ডাইজিং কস্টিং ও রিসোর্স প্রভাব:' : 'Merchandiser Cost Impact:'}
                </span>
                <div className="text-xs text-zinc-300 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">{lang === 'bn' ? 'কেমিক্যালের আনুমানিক খরচ:' : 'Typical Chemical Cost:'}</span>
                    <span className="font-mono text-emerald-400 font-bold">$0.15 - $0.45 / pc</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">{lang === 'bn' ? 'পানি ব্যবহার (প্রতি বাথ):' : 'Water Consumption:'}</span>
                    <span className="font-mono text-sky-400 font-bold">12 - 20 Liters / pc per bath</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">{lang === 'bn' ? 'মেশিন সাইকেল সময়:' : 'Machine Run Time:'}</span>
                    <span className="font-mono text-amber-400 font-bold">{currentStep.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dry Finishing Craft vs Modern Laser Engineering */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              {lang === 'bn' ? 'ড্রাই ফিনিশিং: সনাতন হস্তশিল্প বনাম ডিজিটাল লেজার' : 'Dry Finishing: Handcraft vs Digital CO2 Laser'}
            </h3>
            <p className="text-xs text-zinc-400">
              {lang === 'bn'
                ? 'ম্যানুয়াল স্ক্র্যাপিং ও ৩ডি হুইস্কার্স বনাম জিরো-ওয়াটার অটোমেটেড লেজার মারকিং'
                : 'Manual scraping and 3D whiskers versus automated zero-water laser engraving'}
            </p>
          </div>

          <div className="flex bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-xs">
            <button
              onClick={() => setDryProcessTab('laser')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer ${
                dryProcessTab === 'laser'
                  ? 'bg-zinc-800 text-amber-400 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {lang === 'bn' ? 'CO2 লেজার প্রযুক্তি' : 'CO2 Laser Technology'}
            </button>
            <button
              onClick={() => setDryProcessTab('manual')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer ${
                dryProcessTab === 'manual'
                  ? 'bg-zinc-800 text-amber-400 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {lang === 'bn' ? 'ম্যানুয়াল স্ক্র্যাপিং ও রেজিন' : 'Manual Hand Scraping & Resin'}
            </button>
          </div>
        </div>

        {dryProcessTab === 'laser' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400">CO2 Laser System</span>
                <span className="text-[10px] font-mono text-emerald-400">
                  {lang === 'bn' ? 'শূন্য পানি খরচ' : 'Zero Water'}
                </span>
              </div>
              <h5 className="font-semibold text-sm text-zinc-100">
                {lang === 'bn' ? 'লেজার যেভাবে কাজ করে' : 'How Digital Laser Works'}
              </h5>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {lang === 'bn'
                  ? 'কম্পিউটার নিয়ন্ত্রিত ফোকাসড CO2 লেজার রশ্মি সেকেন্ডের মধ্যে কাপড়ের উপরিভাগের ইনডিগো রঙকে বাষ্পীভূত (Sublimation) করে দেয়। কাপড়ের কোনো শারীরিক ক্ষতি না করেই নিখুঁত সাদা কোর বের হয়ে আসে।'
                  : 'A focused CO2 laser beam scans across the jean surface in seconds. The high thermal energy instantly vaporizes (sublimates) the indigo dye layer on the cotton surface, revealing the white core underneath.'}
              </p>
              <div className="pt-2 border-t border-zinc-800 text-[11px] font-mono text-sky-400">
                {lang === 'bn' ? 'সাইকেল সময়: ৬০ - ৯০ সেকেন্ড প্রতি পিস' : 'Cycle Time: 60 - 90 seconds per jean'}
              </div>
            </div>

            <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400">
                  {lang === 'bn' ? 'মার্চেন্ডাইজারের সুবিধা' : 'Merchandiser Advantages'}
                </span>
                <span className="text-[10px] font-mono text-sky-400">
                  {lang === 'bn' ? '১০০% নিখুঁত সামঞ্জস্য' : 'Consistency'}
                </span>
              </div>
              <h5 className="font-semibold text-sm text-zinc-100">
                {lang === 'bn' ? 'ডিজিটাল পুনরাবৃত্তিযোগ্যতা' : '100% Digital Repeatability'}
              </h5>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {lang === 'bn'
                  ? 'বায়ারের অনুমোদিত মাস্টার স্যাম্পল ভেক্টর ফাইলে সেভ থাকে। ৫০,০০০ পিসের বাল্ক প্রোডাকশনে প্রতিটা পিসে একচুলও ব্যবধান থাকে না, মানুষের ক্লান্তিজনিত ভুল শূন্যে নেমে আসে।'
                  : 'Sample approved by the buyer is stored as a digital greyscale map. Bulk production of 50,000 units is executed with minimal variance between pieces.'}
              </p>
              <div className="pt-2 border-t border-zinc-800 text-[11px] font-mono text-emerald-400">
                {lang === 'bn' ? 'ডিফেক্ট রিজেকশন রেট: < ০.২%' : 'Defect Reject Rate: < 0.2%'}
              </div>
            </div>

            <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-400">
                  {lang === 'bn' ? 'শ্রমিক নিরাপত্তা ও পরিবেশ' : 'Worker Safety & Sustainability'}
                </span>
                <span className="text-[10px] font-mono text-emerald-400">
                  {lang === 'bn' ? 'EIM গ্রিন রেটিং' : 'EIM Green'}
                </span>
              </div>
              <h5 className="font-semibold text-sm text-zinc-100">
                {lang === 'bn' ? 'পটাশিয়াম পারম্যাঙ্গানেট স্প্রে বর্জন' : 'Elimination of PP Spray'}
              </h5>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {lang === 'bn'
                  ? 'বিষাক্ত পটাশিয়াম পারম্যাঙ্গানেট (PP) স্প্রে ও ক্ষতিকর সিলিকা স্যান্ডব্লাস্টিং পুরোপুরি বন্ধ করে। শ্রমিকদের ফুসফুসের সুরক্ষা নিশ্চিত করে এবং পোশাকের EIM স্কোর ২৫-এর নিচে নামিয়ে আনে।'
                  : 'Eliminates toxic Potassium Permanganate (PP) chemical spraying and hazardous silica sandblasting. Protects laundry operators and lowers the garment EIM score below 25.'}
              </p>
              <div className="pt-2 border-t border-zinc-800 text-[11px] font-mono text-zinc-400">
                ZDHC MRSL Level 3 Compliant
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-3">
              <span className="text-xs font-bold text-amber-400">
                {lang === 'bn' ? '১. হ্যান্ড স্ক্র্যাপিং ও স্যান্ডিং' : '1. Hand Scraping & Sanding'}
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {lang === 'bn'
                  ? 'ইনফ্ল্যাটেবল রাবার ডামিতে প্যান্ট পরিয়ে সিরিজ কাগজ (Sandpaper grit 220-320) দিয়ে অভিজ্ঞ কারিগররা থাই ও সিটে হাত দিয়ে ঘষে নীল রঙ তোলেন। শ্রমিকের হাতের চাপের ওপর কোয়ালিটি নির্ভর করে বিধায় শেড বৈষম্য দেখা দিতে পারে।'
                  : 'Jeans are fitted onto inflatable rubber mannequins. Artisans manually rub sandpaper (grit 220 to 320) over thighs and seat to abrade indigo. Quality depends on worker hand pressure.'}
              </p>
            </div>

            <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-3">
              <span className="text-xs font-bold text-amber-400">
                {lang === 'bn' ? '২. ৩ডি হুইস্কার্স ও রেজিন কিউরিং' : '2. 3D Whiskers & Resin Curing'}
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {lang === 'bn'
                  ? 'সামনের ল্যাপ ক্রিসে ভাঁজ করে থার্মোসেটিং DMDHEU রেজিন স্প্রে করা হয়। এরপর কনভেয়র ওভেনে ১৫০°C - ১৬০°C তাপমাত্রায় ১৫-২০ মিনিট বেক করে ৩ডি ভাঁজের স্থায়িত্ব নিশ্চিত করা হয়।'
                  : 'Front lap creases are folded and sprayed with liquid thermosetting DMDHEU resin. Garments hang in a continuous conveyor baking oven at 150°C - 160°C for 15-20 minutes.'}
              </p>
            </div>

            <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-3">
              <span className="text-xs font-bold text-amber-400">
                {lang === 'bn' ? '৩. গ্রাইন্ডিং ও ডিস্ট্রেসড আর্ট' : '3. Grinding, Nicking & Destroy'}
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {lang === 'bn'
                  ? 'রোটারি গ্রাইন্ডিং হুইল দিয়ে পকেটের ধার, বটম হেম ও ফ্লাই লিপে কাটা দাগ তৈরি করা হয়। হাঁটুতে সিরামিক নাইফ দিয়ে সাবধানে ছেঁড়া হয় যাতে ভেতরে সাদা ওয়েফট সুতা দেখা যায়।'
                  : 'Rotary abrasive wheels cut tiny nicks into pocket edges, hem cuffs, and fly lips. Rips on knees are slashed with ceramic knives while leaving white weft threads floating.'}
              </p>
            </div>
          </div>
        )}

        {/* Concise 8 Dry Processes Encyclopedia Grid */}
        <div className="pt-4 border-t border-zinc-800 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
              {lang === 'bn'
                ? 'ড্রাই প্রসেস ভিজ্যুয়াল ক্যাটালগ: ৮টি মূল কৌশল'
                : 'Concise Dry Process Encyclopedia: 8 Core Techniques'}
            </h4>
            <span className="text-[10px] font-mono text-zinc-400">
              Tool • Effect • Sequence Timing
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {CONCISE_DRY_PROCESSES.map((dp) => (
              <div
                key={dp.code}
                className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-2"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] font-black text-amber-400">
                      {dp.code}
                    </span>
                    <span className="text-[10px] font-mono text-sky-400">
                      {lang === 'bn' ? dp.timingBn : dp.timingEn}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-zinc-100">
                    {lang === 'bn' ? dp.nameBn : dp.nameEn}
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                    {lang === 'bn' ? dp.effectBn : dp.effectEn}
                  </p>
                </div>
                <div className="pt-1.5 border-t border-zinc-900 text-[10px] font-mono text-zinc-300">
                  {lang === 'bn' ? `টুল: ${dp.toolBn}` : `Tool: ${dp.toolEn}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Acid vs. Ice vs. Cloud Wash + Garment Dyeing (Tinting vs. Overdyeing) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 shadow-xl space-y-4">
          <div>
            <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              {lang === 'bn'
                ? 'অ্যাসিড বনাম আইস বনাম ক্লাউড ওয়াশ তুলনা'
                : 'Acid vs. Ice vs. Cloud Wash Comparison Matrix'}
            </h3>
            <p className="text-xs text-zinc-400">
              {lang === 'bn'
                ? 'পিউমিস স্টোন বনাম অতিরিক্ত পাথর বনাম স্টাইরোফোম বলের কারণে টেক্সচারের পার্থক্য'
                : 'How carrier media (Pumice vs. Extra Pumice vs. Styrofoam balls) changes contrast'}
            </p>
          </div>

          <div className="space-y-3">
            {ACID_ICE_CLOUD_MATRIX.map((row, idx) => (
              <div
                key={idx}
                className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800 flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="text-xs font-bold text-zinc-100">
                    {lang === 'bn' ? row.washNameBn : row.washNameEn}
                  </div>
                  <div className="text-[11px] font-mono text-amber-400">
                    {lang === 'bn' ? `মাধ্যম: ${row.mediumBn}` : `Medium: ${row.mediumEn}`}
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    {lang === 'bn' ? row.contrastEffectBn : row.contrastEffectEn}
                  </div>
                </div>
                <div className="flex gap-1 shrink-0">
                  {row.swatchColors.map((c, cIdx) => (
                    <span
                      key={cIdx}
                      className="w-4 h-10 rounded-xs border border-zinc-700 shadow-xs"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 shadow-xl space-y-4">
          <div>
            <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2">
              <Droplets className="w-4 h-4 text-emerald-400" />
              {lang === 'bn'
                ? 'গার্মেন্ট ডাইং: টিন্টিং বনাম ওভারডাইং পার্থক্য'
                : 'Garment Dyeing: Tinting (0.002%) vs. Overdyeing (8%)'}
            </h3>
            <p className="text-xs text-zinc-400">
              {lang === 'bn'
                ? 'হালকা ভিন্টেজ কাস্ট (Tinting) এবং সম্পূর্ণ রঙ পরিবর্তন (Overdyeing)-এর মূল পার্থক্য'
                : 'Concise chemical & visual comparison between vintage tinting and full garment overdyeing'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 font-mono text-[11px]">
                  <th className="py-2 pr-2">{lang === 'bn' ? 'প্যারামিটার' : 'Parameter'}</th>
                  <th className="py-2 px-2 text-amber-400">{lang === 'bn' ? 'টিন্টিং (Tinting)' : 'Tinting'}</th>
                  <th className="py-2 pl-2 text-emerald-400">{lang === 'bn' ? 'ওভারডাইং (Overdyeing)' : 'Overdyeing'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300 text-[11px]">
                {GARMENT_DYE_MATRIX.map((r, idx) => (
                  <tr key={idx}>
                    <td className="py-2.5 pr-2 font-semibold text-zinc-100">
                      {lang === 'bn' ? r.parameterBn : r.parameterEn}
                    </td>
                    <td className="py-2.5 px-2">{lang === 'bn' ? r.tintingBn : r.tintingEn}</td>
                    <td className="py-2.5 pl-2">{lang === 'bn' ? r.overdyeingBn : r.overdyeingEn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Development vs Bulk Merchandiser Tips Section */}
      <MerchandiserPlaybookSection lang={lang} defaultDomain="washing" />
    </div>
  );
};
