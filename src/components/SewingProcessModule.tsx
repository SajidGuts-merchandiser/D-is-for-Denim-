import React, { useState } from 'react';
import {
  SEWING_COMPONENTS,
} from '../data/denimData.ts';
import {
  Scissors,
  CheckCircle2,
  Cpu,
  Info,
  Maximize2,
  ChevronRight,
  ShieldAlert,
  Sliders,
} from 'lucide-react';

import { MultiGarmentStudio } from './MultiGarmentStudio.tsx';
import { Language } from '../utils/i18n.ts';

interface SewingProcessModuleProps {
  lang?: Language;
}

export const SewingProcessModule: React.FC<SewingProcessModuleProps> = ({ lang = 'bn' }) => {
  const [activeView, setActiveView] = useState<'multi' | 'jeans'>('multi');
  const [selectedComponentId, setSelectedComponentId] = useState<string>('hem');
  const [jeanView, setJeanView] = useState<'front' | 'back'>('front');

  const activeComponent =
    SEWING_COMPONENTS.find((c) => c.id === selectedComponentId) || SEWING_COMPONENTS[0];

  return (
    <div className="space-y-8">
      {/* Module Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-6 md:p-8 border border-indigo-500/20 shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-4">
            <Scissors className="w-3.5 h-3.5 text-indigo-400" />
            Module 2: {lang === 'bn' ? 'গার্মেন্টস ইঞ্জিনিয়ারিং ও সুয়িং স্পেসিফিকেশন' : 'Garment Engineering & Tech Pack Specs'}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'bn'
              ? 'ডেনিম ও নন-ডেনিম আইটেম সুয়িং কনস্ট্রাকশন স্টুডিও'
              : 'Denim & Non-Denim Garments Sewing Construction Studio'}
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            {lang === 'bn'
              ? '৫-পকেট জিন্স ছাড়াও ট্র্যাকার জ্যাকেট, ওভারশার্ট/শ্যাকেট, শর্টস, ওভারঅল এবং নন-ডেনিম চিনো ট্রাউজার্স ও মিলিটারি কার্গো প্যান্টের সম্পূর্ণ মেশিন মডেল, সুতার Tex এবং SPI স্ট্যান্ডার্ড।'
              : '5-Pocket Jeans, Trucker Jackets, Shackets, Cut-off Shorts, Bib Overalls plus Non-Denim Chinos, Tactical Cargo Pants, and Heavy Duck Canvas workwear.'}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono">
            <div className="bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-700/60">
              <span className="text-slate-400 block text-[10px]">STANDARD TOPSTITCH</span>
              <span className="text-amber-300 font-bold">Stitch Class 401 Chainstitch (Tex 80 - 105)</span>
            </div>
            <div className="bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-700/60">
              <span className="text-slate-400 block text-[10px]">RECOMMENDED SPI</span>
              <span className="text-cyan-300 font-bold">7 - 9 SPI for Topstitch / 10 - 12 SPI Seams</span>
            </div>
            <div className="bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-700/60">
              <span className="text-slate-400 block text-[10px]">RIVET PULL STRENGTH</span>
              <span className="text-emerald-300 font-bold">&gt; 300 Newtons (ASTM D4846)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Switcher: Multi-Garment Studio vs 5-Pocket Jean Anatomy */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 w-fit">
        <button
          onClick={() => setActiveView('multi')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            activeView === 'multi'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Scissors className="w-4 h-4" />
          {lang === 'bn' ? 'সকল ডেনিম ও নন-ডেনিম আইটেম ক্যাটালগ' : 'All Denim & Non-Denim Garments Catalog'}
        </button>
        <button
          onClick={() => setActiveView('jeans')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            activeView === 'jeans'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sliders className="w-4 h-4" />
          {lang === 'bn' ? '৫-পকেট জিন্স অ্যানাটমি ও হটস্পট' : '5-Pocket Jean Anatomy & Hotspots'}
        </button>
      </div>

      {/* Render Selected View */}
      {activeView === 'multi' ? (
        <MultiGarmentStudio lang={lang} />
      ) : (
        /* Interactive 5-Pocket Jean Anatomy Inspector */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive Schematic Diagram */}
        <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-base font-bold text-white">5-Pocket Jean Anatomy Explorer</h4>
                <p className="text-xs text-slate-400">Click any hotspot to inspect machine specs and SPI</p>
              </div>
              {/* Front / Back Toggle */}
              <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setJeanView('front')}
                  className={`px-3 py-1 rounded-md font-semibold transition-all ${
                    jeanView === 'front'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Front View
                </button>
                <button
                  onClick={() => setJeanView('back')}
                  className={`px-3 py-1 rounded-md font-semibold transition-all ${
                    jeanView === 'back'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Back View
                </button>
              </div>
            </div>

            {/* Stylized Jean Schematic with Hotspots */}
            <div className="relative w-full h-[430px] bg-slate-950 rounded-xl border border-slate-800/80 p-4 flex items-center justify-center overflow-hidden">
              {/* Visual Jean Silhouette using SVG */}
              <svg viewBox="0 0 320 460" className="h-full w-auto drop-shadow-2xl">
                {/* Denim Jean Body Paths */}
                {jeanView === 'front' ? (
                  <g className="transition-all duration-300">
                    {/* Jean Silhouette */}
                    <path
                      d="M 50,40 L 270,40 L 275,130 L 255,430 L 175,430 L 160,170 L 145,430 L 65,430 L 45,130 Z"
                      fill="#1e293b"
                      stroke="#475569"
                      strokeWidth="2"
                    />
                    {/* Waistband */}
                    <path
                      d="M 49,40 L 271,40 L 270,68 L 50,68 Z"
                      fill="#1e3a8a"
                      stroke="#c8963e"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                    />
                    {/* Front Pockets */}
                    <path
                      d="M 50,68 Q 100,75 105,120 L 50,110 Z"
                      fill="#0f172a"
                      stroke="#c8963e"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 270,68 Q 220,75 215,120 L 270,110 Z"
                      fill="#0f172a"
                      stroke="#c8963e"
                      strokeWidth="1.5"
                    />
                    {/* Coin Pocket */}
                    <rect
                      x="70"
                      y="74"
                      width="26"
                      height="24"
                      fill="#1e3a8a"
                      stroke="#c8963e"
                      strokeWidth="1.5"
                    />
                    {/* Fly J-Stitch */}
                    <path
                      d="M 160,68 L 160,125 Q 160,150 178,140"
                      fill="none"
                      stroke="#c8963e"
                      strokeWidth="2"
                      strokeDasharray="3 2"
                    />
                    {/* Inseam */}
                    <line x1="160" y1="160" x2="145" y2="430" stroke="#c8963e" strokeWidth="1.5" strokeDasharray="3 2" />
                    <line x1="160" y1="160" x2="175" y2="430" stroke="#c8963e" strokeWidth="1.5" strokeDasharray="3 2" />
                    {/* Outseams */}
                    <line x1="50" y1="68" x2="65" y2="430" stroke="#64748b" strokeWidth="1.5" />
                    <line x1="270" y1="68" x2="255" y2="430" stroke="#64748b" strokeWidth="1.5" />
                    {/* Hems */}
                    <rect x="65" y="420" width="80" height="10" fill="#1e3a8a" stroke="#c8963e" strokeWidth="1.5" strokeDasharray="2 2" />
                    <rect x="175" y="420" width="80" height="10" fill="#1e3a8a" stroke="#c8963e" strokeWidth="1.5" strokeDasharray="2 2" />
                  </g>
                ) : (
                  <g className="transition-all duration-300">
                    {/* Back Jean Silhouette */}
                    <path
                      d="M 50,40 L 270,40 L 275,130 L 255,430 L 175,430 L 160,170 L 145,430 L 65,430 L 45,130 Z"
                      fill="#1e293b"
                      stroke="#475569"
                      strokeWidth="2"
                    />
                    {/* Waistband */}
                    <path d="M 49,40 L 271,40 L 270,68 L 50,68 Z" fill="#1e3a8a" stroke="#c8963e" strokeWidth="2" strokeDasharray="4 2" />
                    {/* Back Yoke (V-Shape) */}
                    <path d="M 50,68 L 160,95 L 270,68" fill="none" stroke="#c8963e" strokeWidth="2.5" />
                    {/* Center Back Rise Seam */}
                    <line x1="160" y1="68" x2="160" y2="170" stroke="#c8963e" strokeWidth="2" strokeDasharray="3 2" />
                    {/* Back Left Pocket with Arcuate */}
                    <path
                      d="M 75,110 L 130,110 L 125,175 L 102,192 L 80,175 Z"
                      fill="#0f172a"
                      stroke="#c8963e"
                      strokeWidth="1.8"
                    />
                    <path d="M 80,140 Q 102,160 125,140" fill="none" stroke="#eab308" strokeWidth="1.5" />
                    {/* Back Right Pocket with Arcuate */}
                    <path
                      d="M 190,110 L 245,110 L 240,175 L 218,192 L 195,175 Z"
                      fill="#0f172a"
                      stroke="#c8963e"
                      strokeWidth="1.8"
                    />
                    <path d="M 195,140 Q 218,160 240,140" fill="none" stroke="#eab308" strokeWidth="1.5" />
                    {/* Inseam & Outseam */}
                    <line x1="160" y1="165" x2="145" y2="430" stroke="#c8963e" strokeWidth="1.5" strokeDasharray="3 2" />
                    <line x1="160" y1="165" x2="175" y2="430" stroke="#c8963e" strokeWidth="1.5" strokeDasharray="3 2" />
                    {/* Hems */}
                    <rect x="65" y="420" width="80" height="10" fill="#1e3a8a" stroke="#c8963e" strokeWidth="1.5" strokeDasharray="2 2" />
                    <rect x="175" y="420" width="80" height="10" fill="#1e3a8a" stroke="#c8963e" strokeWidth="1.5" strokeDasharray="2 2" />
                  </g>
                )}
              </svg>

              {/* Clickable Hotspot Overlay Buttons */}
              {jeanView === 'front' ? (
                <>
                  {/* Waistband */}
                  <button
                    onClick={() => setSelectedComponentId('waistband')}
                    className={`absolute top-[68px] left-[45%] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform ${
                      selectedComponentId === 'waistband'
                        ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                        : 'bg-indigo-600 text-white hover:scale-110 opacity-90'
                    }`}
                    title="Waistband"
                  >
                    1
                  </button>
                  {/* Hardware Rivet */}
                  <button
                    onClick={() => setSelectedComponentId('hardware')}
                    className={`absolute top-[108px] left-[26%] w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform ${
                      selectedComponentId === 'hardware'
                        ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                        : 'bg-red-600 text-white hover:scale-110 opacity-90'
                    }`}
                    title="Rivets & Shanks"
                  >
                    2
                  </button>
                  {/* Inseam */}
                  <button
                    onClick={() => setSelectedComponentId('inseam')}
                    className={`absolute top-[260px] left-[47%] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform ${
                      selectedComponentId === 'inseam'
                        ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                        : 'bg-indigo-600 text-white hover:scale-110 opacity-90'
                    }`}
                    title="Inseam"
                  >
                    3
                  </button>
                  {/* Outseam */}
                  <button
                    onClick={() => setSelectedComponentId('outseam')}
                    className={`absolute top-[260px] left-[18%] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform ${
                      selectedComponentId === 'outseam'
                        ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                        : 'bg-indigo-600 text-white hover:scale-110 opacity-90'
                    }`}
                    title="Outseam"
                  >
                    4
                  </button>
                  {/* Hem */}
                  <button
                    onClick={() => setSelectedComponentId('hem')}
                    className={`absolute bottom-[24px] left-[32%] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform ${
                      selectedComponentId === 'hem'
                        ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                        : 'bg-indigo-600 text-white hover:scale-110 opacity-90'
                    }`}
                    title="Bottom Hem"
                  >
                    5
                  </button>
                </>
              ) : (
                <>
                  {/* Back Yoke */}
                  <button
                    onClick={() => setSelectedComponentId('back-yoke')}
                    className={`absolute top-[88px] left-[52%] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform ${
                      selectedComponentId === 'back-yoke'
                        ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                        : 'bg-indigo-600 text-white hover:scale-110 opacity-90'
                    }`}
                    title="Back Yoke"
                  >
                    6
                  </button>
                  {/* Back Pocket */}
                  <button
                    onClick={() => setSelectedComponentId('back-pockets')}
                    className={`absolute top-[148px] left-[32%] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform ${
                      selectedComponentId === 'back-pockets'
                        ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                        : 'bg-indigo-600 text-white hover:scale-110 opacity-90'
                    }`}
                    title="Back Pocket"
                  >
                    7
                  </button>
                  {/* Hem */}
                  <button
                    onClick={() => setSelectedComponentId('hem')}
                    className={`absolute bottom-[24px] left-[32%] w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-transform ${
                      selectedComponentId === 'hem'
                        ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/40 z-20'
                        : 'bg-indigo-600 text-white hover:scale-110 opacity-90'
                    }`}
                    title="Bottom Hem"
                  >
                    5
                  </button>
                </>
              )}
            </div>

            {/* Quick Component Buttons List */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {SEWING_COMPONENTS.map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComponentId(comp.id)}
                  className={`text-[11px] px-2.5 py-1 rounded-md font-medium transition-all ${
                    selectedComponentId === comp.id
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {comp.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Component Technical Spec Sheet */}
        <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
                  Technical Specification Sheet
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{activeComponent.name}</h3>
              </div>
              <span className="px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs">
                {activeComponent.spi}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* Machine Type */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                  Machine Model & Configuration
                </span>
                <div className="font-semibold text-xs text-indigo-300 flex items-start gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{activeComponent.machine}</span>
                </div>
              </div>

              {/* Stitch Type */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                  ISO Stitch Classification
                </span>
                <div className="font-semibold text-xs text-cyan-300 flex items-start gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{activeComponent.stitchType}</span>
                </div>
              </div>

              {/* Thread Spec */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                  Thread Ticket & Tex Specification
                </span>
                <div className="font-semibold text-xs text-amber-300">
                  {activeComponent.threadSpec}
                </div>
              </div>

              {/* SPI */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                  Target Stitches Per Inch (SPI)
                </span>
                <div className="font-mono font-bold text-xs text-emerald-400">
                  {activeComponent.spi} (Tolerance: ±0.5 SPI)
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <h5 className="text-xs font-bold text-white mb-1">Engineering & Functional Rationale:</h5>
              <p className="text-xs text-slate-300 leading-relaxed">{activeComponent.description}</p>
            </div>

            {/* Merchandiser Quality Checkpoint */}
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

          {/* Bottom Callout */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Tech Pack Reference Standard: 5-Pocket Regular Straight Jean</span>
            <span className="font-mono text-indigo-400">ASTM D6193 Seam Standards</span>
          </div>
        </div>
        </div>
      )}

      {/* Specialized Denim Machinery Guide */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl">
        <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-indigo-400" />
          The Essential Specialized Denim Machinery Hall of Fame
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-400">Union Special 43200G</span>
              <span className="text-[10px] font-mono bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded-sm">
                Vintage Legend
              </span>
            </div>
            <div className="text-xs font-semibold text-white mb-1">Cylinder Bed Chainstitch Hemmer</div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Equipped with a differential helical folder. Causes unequal drag between inner and outer fabric folds during hemming, which blossoms into the iconic <strong>"roping effect"</strong> after laundry shrinkage.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-cyan-400">Feed-Off-The-Arm (FOA)</span>
              <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-sm">
                Inseam & Yoke
              </span>
            </div>
            <div className="text-xs font-semibold text-white mb-1">2/3-Needle Lap Fell Seamer</div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Features a hollow cantilevered tubular arm. Allows operators to slide closed trouser legs onto the arm to fold and sew double or triple-needle lap fell chainstitches with high seam burst strength.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-indigo-400">Kansai / Union Special</span>
              <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-1.5 py-0.5 rounded-sm">
                Waistband
              </span>
            </div>
            <div className="text-xs font-semibold text-white mb-1">4-Needle Chainstitch Waistbander</div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Continuous roll feed folder attaching waistband facing, denim shell, and interlining simultaneously. The bottom chainstitch provides lateral give so the waistband flexes with the human body.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
