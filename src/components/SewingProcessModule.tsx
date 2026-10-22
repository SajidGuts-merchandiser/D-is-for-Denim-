import React, { useState } from 'react';
import {
  SEWING_COMPONENTS,
} from '../data/denimData.ts';
import {
  FIT_SILHOUETTES,
  TRIMMINGS_AND_PREMIUM_SPECS,
} from '../data/denimManualData.ts';
import {
  Scissors,
  Cpu,
  ShieldAlert,
  Sliders,
  Sparkles,
  Video,
} from 'lucide-react';

import { MultiGarmentStudio } from './MultiGarmentStudio.tsx';
import { SewingVideoAndMachinesSection } from './SewingVideoAndMachinesSection.tsx';
import { MerchandiserPlaybookSection } from './MerchandiserPlaybookSection.tsx';
import { Language } from '../utils/i18n.ts';

interface SewingProcessModuleProps {
  lang?: Language;
}

export const SewingProcessModule: React.FC<SewingProcessModuleProps> = ({ lang = 'bn' }) => {
  const [activeView, setActiveView] = useState<'videos-machines' | 'multi' | 'silhouettes' | 'jeans'>('videos-machines');
  const [selectedComponentId, setSelectedComponentId] = useState<string>('hem');
  const [jeanView, setJeanView] = useState<'front' | 'back'>('front');

  const activeComponent =
    SEWING_COMPONENTS.find((c) => c.id === selectedComponentId) || SEWING_COMPONENTS[0];

  return (
    <div className="space-y-8">
      {/* Module Banner - Simple Dark Theme */}
      <div className="rounded-2xl bg-zinc-900 p-6 md:p-8 border border-zinc-800 shadow-xl">
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-2 mb-2">
            <Scissors className="w-3.5 h-3.5" />
            <span>
              {lang === 'bn'
                ? 'মডিউল ২: সুয়িং প্রসেস ভিডিও, মেশিন গাইড (m/c) ও গার্মেন্ট কনস্ট্রাকশন'
                : 'Module 2: Sewing Process Videos, Machine Guide (m/c) & Garment Construction'}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-100 tracking-tight">
            {lang === 'bn'
              ? 'ডেনিম ও নন-ডেনিম সুয়িং কনস্ট্রাকশন, প্রসেস ভিডিও এবং মেশিন ডিরেক্টরি'
              : 'Denim & Non-Denim Sewing Construction, Process Videos & Machine Directory'}
          </h2>
          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            {lang === 'bn'
              ? '৭টি বিশেষায়িত ডেনিম সুয়িং মেশিনের লাইভ স্টিচ ভিডিও সিমুলেটর, ইউটিউব প্রসেস ভিডিও, মেশিন ডায়াগ্রাম (m/c images), কার্যপ্রণালী ও অসুবিধার পাশাপাশি ৮টি ডেনিম/নন-ডেনিম আইটেম ও ফিট সিলুয়েট স্টুডিও।'
              : 'Explore live stitch process videos, YouTube factory references, and schematic m/c images for all 7 specialized denim sewing machines alongside 8 garment constructions and fit silhouettes.'}
          </p>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="bg-zinc-950 px-3.5 py-2.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-500 block text-[10px]">
                {lang === 'bn' ? 'টপস্টিচ স্ট্যান্ডার্ড' : 'STANDARD TOPSTITCH'}
              </span>
              <span className="text-amber-400 font-bold">Class 401 Chainstitch (Tex 80–105)</span>
            </div>
            <div className="bg-zinc-950 px-3.5 py-2.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-500 block text-[10px]">
                {lang === 'bn' ? 'সেলাই ঘনত্ব (SPI)' : 'RECOMMENDED SPI'}
              </span>
              <span className="text-sky-400 font-bold">7–9 SPI Topstitch / 10–12 SPI Seam</span>
            </div>
            <div className="bg-zinc-950 px-3.5 py-2.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-500 block text-[10px]">
                {lang === 'bn' ? 'প্রিমিয়াম চেকলিস্ট' : 'PREMIUM CHECKLIST'}
              </span>
              <span className="text-emerald-400 font-bold">Raised Loop • Hidden Rivet • Roped Hem</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Way View Switcher */}
      <div className="flex flex-wrap bg-zinc-900 p-1.5 rounded-xl border border-zinc-800 w-fit gap-1">
        <button
          onClick={() => setActiveView('videos-machines')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            activeView === 'videos-machines'
              ? 'bg-zinc-800 text-amber-400 border border-zinc-700'
              : 'text-zinc-400 hover:text-zinc-100'
          }`}
        >
          <Video className="w-4 h-4" />
          {lang === 'bn'
            ? 'সুয়িং প্রসেস ভিডিও ও ৭টি মেশিন (m/c Images)'
            : 'Sewing Process Videos & 7 Machines (m/c)'}
        </button>
        <button
          onClick={() => setActiveView('multi')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            activeView === 'multi'
              ? 'bg-zinc-800 text-amber-400 border border-zinc-700'
              : 'text-zinc-400 hover:text-zinc-100'
          }`}
        >
          <Scissors className="w-4 h-4" />
          {lang === 'bn' ? 'সকল ডেনিম ও নন-ডেনিম আইটেম (৮টি)' : 'All Denim & Non-Denim Items (8)'}
        </button>
        <button
          onClick={() => setActiveView('silhouettes')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            activeView === 'silhouettes'
              ? 'bg-zinc-800 text-amber-400 border border-zinc-700'
              : 'text-zinc-400 hover:text-zinc-100'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          {lang === 'bn' ? 'ফিট সিলুয়েট ও হার্ডওয়্যার ট্রিমিংস' : 'Fit Silhouettes & Hardware Trimmings'}
        </button>
        <button
          onClick={() => setActiveView('jeans')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            activeView === 'jeans'
              ? 'bg-zinc-800 text-amber-400 border border-zinc-700'
              : 'text-zinc-400 hover:text-zinc-100'
          }`}
        >
          <Sliders className="w-4 h-4" />
          {lang === 'bn' ? '৫-পকেট জিন্স অ্যানাটমি ও হটস্পট' : '5-Pocket Jean Anatomy & Hotspots'}
        </button>
      </div>

      {/* Render Selected View */}
      {activeView === 'videos-machines' ? (
        <SewingVideoAndMachinesSection lang={lang} />
      ) : activeView === 'multi' ? (
        <MultiGarmentStudio lang={lang} />
      ) : activeView === 'silhouettes' ? (
        <div className="space-y-6">
          {/* 6 Fit Silhouettes Visual Taxonomy */}
          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 shadow-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-zinc-100">
                  {lang === 'bn'
                    ? 'ডেনিম ফিট ও সিলুয়েট ভিজ্যুয়াল গাইড'
                    : 'Denim Fit & Silhouette Visual Taxonomy'}
                </h3>
                <p className="text-xs text-zinc-400">
                  {lang === 'bn'
                    ? 'রাইজ (Rise), হিপ/থাই এবং বটম লেগ ওপেনিং অনুযায়ী ৬টি প্রধান জিন্স সিলুয়েট'
                    : '6 essential jean silhouettes categorized by Rise, Hip/Thigh contour, and Leg Opening'}
                </p>
              </div>
              <span className="text-[11px] font-mono text-amber-400">
                Rise: High (11"+) · Mid (9–10.5") · Low (&lt;8.5")
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FIT_SILHOUETTES.map((fit) => (
                <div
                  key={fit.id}
                  className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex items-center gap-4 hover:border-zinc-700 transition-all"
                >
                  <div className="w-16 h-24 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 p-1">
                    <svg viewBox="0 0 60 96" className="h-full w-auto">
                      <path
                        d={fit.svgPath}
                        fill="#27272a"
                        stroke="#f59e0b"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-zinc-100 text-sm">
                      {lang === 'bn' ? fit.nameBn : fit.nameEn}
                    </div>
                    <div className="text-[11px] text-amber-400 font-mono">
                      {lang === 'bn' ? fit.riseBn : fit.riseEn}
                    </div>
                    <div className="text-[11px] text-zinc-300">
                      {lang === 'bn' ? fit.hipThighBn : fit.hipThighEn}
                    </div>
                    <div className="text-[11px] text-sky-400 font-mono">
                      {lang === 'bn' ? fit.legOpeningBn : fit.legOpeningEn}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trimmings, Hardware & 6-Point Premium Denim Indicators */}
          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-zinc-100">
              {lang === 'bn'
                ? 'ট্রিমিংস, হার্ডওয়্যার ও প্রিমিয়াম ডেনিমের ৬টি বৈশিষ্ট্য'
                : 'Hardware Trimmings & 6-Point Premium Denim Checklist'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TRIMMINGS_AND_PREMIUM_SPECS.map((tr) => (
                <div
                  key={tr.id}
                  className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400">
                      {lang === 'bn' ? tr.nameBn : tr.nameEn}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">
                      {tr.specCode}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {lang === 'bn' ? tr.summaryBn : tr.summaryEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Interactive 5-Pocket Jean Anatomy Inspector */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-zinc-900 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-base font-bold text-zinc-100">5-Pocket Jean Anatomy Explorer</h4>
                  <p className="text-xs text-zinc-400">Click any hotspot to inspect machine specs and SPI</p>
                </div>
                <div className="flex bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-xs">
                  <button
                    onClick={() => setJeanView('front')}
                    className={`px-3 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                      jeanView === 'front'
                        ? 'bg-zinc-800 text-amber-400'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Front View
                  </button>
                  <button
                    onClick={() => setJeanView('back')}
                    className={`px-3 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                      jeanView === 'back'
                        ? 'bg-zinc-800 text-amber-400'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Back View
                  </button>
                </div>
              </div>

              <div className="relative w-full h-[430px] bg-zinc-950 rounded-xl border border-zinc-800 p-4 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 320 460" className="h-full w-auto drop-shadow-2xl">
                  {jeanView === 'front' ? (
                    <g className="transition-all duration-300">
                      <path
                        d="M 50,40 L 270,40 L 275,130 L 255,430 L 175,430 L 160,170 L 145,430 L 65,430 L 45,130 Z"
                        fill="#18181b"
                        stroke="#52525b"
                        strokeWidth="2"
                      />
                      <path
                        d="M 49,40 L 271,40 L 270,68 L 50,68 Z"
                        fill="#27272a"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                      />
                      <path
                        d="M 50,68 Q 100,75 105,120 L 50,110 Z"
                        fill="#09090b"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 270,68 Q 220,75 215,120 L 270,110 Z"
                        fill="#09090b"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="70"
                        y="74"
                        width="26"
                        height="24"
                        fill="#27272a"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 160,68 L 160,125 Q 160,150 178,140"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        strokeDasharray="3 2"
                      />
                      <line x1="160" y1="160" x2="145" y2="430" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                      <line x1="160" y1="160" x2="175" y2="430" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                      <line x1="50" y1="68" x2="65" y2="430" stroke="#71717a" strokeWidth="1.5" />
                      <line x1="270" y1="68" x2="255" y2="430" stroke="#71717a" strokeWidth="1.5" />
                      <rect x="65" y="420" width="80" height="10" fill="#27272a" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                      <rect x="175" y="420" width="80" height="10" fill="#27272a" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                    </g>
                  ) : (
                    <g className="transition-all duration-300">
                      <path
                        d="M 50,40 L 270,40 L 275,130 L 255,430 L 175,430 L 160,170 L 145,430 L 65,430 L 45,130 Z"
                        fill="#18181b"
                        stroke="#52525b"
                        strokeWidth="2"
                      />
                      <path d="M 49,40 L 271,40 L 270,68 L 50,68 Z" fill="#27272a" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
                      <path d="M 50,68 L 160,95 L 270,68" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
                      <line x1="160" y1="68" x2="160" y2="170" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
                      <path
                        d="M 75,110 L 130,110 L 125,175 L 102,192 L 80,175 Z"
                        fill="#09090b"
                        stroke="#f59e0b"
                        strokeWidth="1.8"
                      />
                      <path d="M 80,140 Q 102,160 125,140" fill="none" stroke="#eab308" strokeWidth="1.5" />
                      <path
                        d="M 190,110 L 245,110 L 240,175 L 218,192 L 195,175 Z"
                        fill="#09090b"
                        stroke="#f59e0b"
                        strokeWidth="1.8"
                      />
                      <path d="M 195,140 Q 218,160 240,140" fill="none" stroke="#eab308" strokeWidth="1.5" />
                      <line x1="160" y1="165" x2="145" y2="430" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                      <line x1="160" y1="165" x2="175" y2="430" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                      <rect x="65" y="420" width="80" height="10" fill="#27272a" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                      <rect x="175" y="420" width="80" height="10" fill="#27272a" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                    </g>
                  )}
                </svg>

                {jeanView === 'front' ? (
                  <>
                    <button
                      onClick={() => setSelectedComponentId('waistband')}
                      className={`absolute top-[68px] left-[45%] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform cursor-pointer ${
                        selectedComponentId === 'waistband'
                          ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                          : 'bg-zinc-700 text-white hover:scale-110'
                      }`}
                      title="Waistband"
                    >
                      1
                    </button>
                    <button
                      onClick={() => setSelectedComponentId('hardware')}
                      className={`absolute top-[108px] left-[26%] w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform cursor-pointer ${
                        selectedComponentId === 'hardware'
                          ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                          : 'bg-red-600 text-white hover:scale-110'
                      }`}
                      title="Rivets & Shanks"
                    >
                      2
                    </button>
                    <button
                      onClick={() => setSelectedComponentId('inseam')}
                      className={`absolute top-[260px] left-[47%] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform cursor-pointer ${
                        selectedComponentId === 'inseam'
                          ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                          : 'bg-zinc-700 text-white hover:scale-110'
                      }`}
                      title="Inseam"
                    >
                      3
                    </button>
                    <button
                      onClick={() => setSelectedComponentId('outseam')}
                      className={`absolute top-[260px] left-[18%] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform cursor-pointer ${
                        selectedComponentId === 'outseam'
                          ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                          : 'bg-zinc-700 text-white hover:scale-110'
                      }`}
                      title="Outseam"
                    >
                      4
                    </button>
                    <button
                      onClick={() => setSelectedComponentId('hem')}
                      className={`absolute bottom-[24px] left-[32%] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform cursor-pointer ${
                        selectedComponentId === 'hem'
                          ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                          : 'bg-zinc-700 text-white hover:scale-110'
                      }`}
                      title="Bottom Hem"
                    >
                      5
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setSelectedComponentId('back-yoke')}
                      className={`absolute top-[88px] left-[52%] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform cursor-pointer ${
                        selectedComponentId === 'back-yoke'
                          ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                          : 'bg-zinc-700 text-white hover:scale-110'
                      }`}
                      title="Back Yoke"
                    >
                      6
                    </button>
                    <button
                      onClick={() => setSelectedComponentId('back-pockets')}
                      className={`absolute top-[148px] left-[32%] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform cursor-pointer ${
                        selectedComponentId === 'back-pockets'
                          ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                          : 'bg-zinc-700 text-white hover:scale-110'
                      }`}
                      title="Back Pocket"
                    >
                      7
                    </button>
                    <button
                      onClick={() => setSelectedComponentId('hem')}
                      className={`absolute bottom-[24px] left-[32%] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform cursor-pointer ${
                        selectedComponentId === 'hem'
                          ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                          : 'bg-zinc-700 text-white hover:scale-110'
                      }`}
                      title="Bottom Hem"
                    >
                      5
                    </button>
                  </>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {SEWING_COMPONENTS.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedComponentId(comp.id)}
                    className={`text-[11px] px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
                      selectedComponentId === comp.id
                        ? 'bg-amber-500 text-zinc-950 font-bold'
                        : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                    }`}
                  >
                    {comp.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-zinc-900 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div>
                  <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
                    Technical Specification Sheet
                  </span>
                  <h3 className="text-xl font-bold text-zinc-100 mt-1">{activeComponent.name}</h3>
                </div>
                <span className="font-mono text-xs text-amber-400 font-bold">
                  {activeComponent.spi}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                    Machine Model & Configuration
                  </span>
                  <div className="font-semibold text-xs text-zinc-200 flex items-start gap-2">
                    <Cpu className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{activeComponent.machine}</span>
                  </div>
                </div>

                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                    ISO Stitch Classification
                  </span>
                  <div className="font-semibold text-xs text-sky-400 flex items-start gap-2">
                    <Sliders className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{activeComponent.stitchType}</span>
                  </div>
                </div>

                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                    Thread Ticket & Tex Specification
                  </span>
                  <div className="font-semibold text-xs text-amber-400">
                    {activeComponent.threadSpec}
                  </div>
                </div>

                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                    Target Stitches Per Inch (SPI)
                  </span>
                  <div className="font-mono font-bold text-xs text-emerald-400">
                    {activeComponent.spi} (Tolerance: ±0.5 SPI)
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <h5 className="text-xs font-bold text-zinc-100 mb-1">Engineering & Functional Rationale:</h5>
                <p className="text-xs text-zinc-300 leading-relaxed">{activeComponent.description}</p>
              </div>

              <div className="mt-4 bg-amber-500/10 p-4 rounded-xl border border-amber-500/30">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                  <ShieldAlert className="w-4 h-4" />
                  Merchandiser Quality Inspection Audit Rule:
                </div>
                <p className="text-xs text-amber-200/90 leading-relaxed font-medium">
                  {activeComponent.merchandiserCheckpoint}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span>Tech Pack Reference Standard: 5-Pocket Regular Straight Jean</span>
              <span className="font-mono text-amber-400">ASTM D6193 Seam Standards</span>
            </div>
          </div>
        </div>
      )}

      {/* Development vs Bulk Merchandiser Playbook Section */}
      <MerchandiserPlaybookSection lang={lang} defaultDomain="sewing" />
    </div>
  );
};
