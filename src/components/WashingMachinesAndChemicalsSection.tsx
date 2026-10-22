import React, { useState } from 'react';
import {
  WASHING_MACHINES_DATA,
  WashingMachineSpec,
  WashingChemicalSpec,
  filterWashingChemicals,
} from '../data/machinesAndChemicalsData.ts';
import { Language } from '../utils/i18n.ts';
import {
  Cpu,
  FlaskConical,
  CheckCircle2,
  Settings,
  AlertTriangle,
  ExternalLink,
  Play,
  Search,
  Video,
} from 'lucide-react';

interface WashingMachinesAndChemicalsSectionProps {
  lang?: Language;
}

/**
 * Renders a technical machine schematic (washing m/c image) for each of the 7 industrial laundry machines
 */
const WashingMachineSchematicImage: React.FC<{
  machineType: WashingMachineSpec['machineType'];
  code: string;
  speedOrTemp: string;
}> = ({ machineType, code, speedOrTemp }) => {
  return (
    <div className="relative w-full h-44 bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden flex items-center justify-center p-3">
      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #52525b 1px, transparent 1px), linear-gradient(to bottom, #52525b 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <svg viewBox="0 0 320 150" className="w-full h-full max-w-[300px] drop-shadow-md">
        {machineType === 'belly-washer' && (
          <g>
            {/* Horizontal Cylindrical Belly Tank */}
            <rect x="35" y="116" width="250" height="14" rx="3" fill="#27272a" stroke="#52525b" strokeWidth="2" />
            <rect x="45" y="28" width="230" height="88" rx="22" fill="#18181b" stroke="#71717a" strokeWidth="2.5" />
            {/* Perforated Inner Drum & Side Hatch Door */}
            <rect x="75" y="42" width="170" height="60" rx="10" fill="#09090b" stroke="#a1a1aa" strokeWidth="2" strokeDasharray="6 3" />
            {/* Water Bath Level + Pumice Stones */}
            <path d="M 78,76 Q 120,70 160,76 T 242,76 L 242,99 L 78,99 Z" fill="#0284c7" fillOpacity="0.35" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="110" cy="88" r="5" fill="#a8a29e" />
            <circle cx="135" cy="91" r="6" fill="#d6d3d1" />
            <circle cx="175" cy="87" r="5.5" fill="#a8a29e" />
            <circle cx="205" cy="90" r="4.5" fill="#d6d3d1" />
            {/* Control Panel */}
            <rect x="248" y="42" width="18" height="32" rx="2" fill="#27272a" stroke="#f59e0b" strokeWidth="1.2" />
          </g>
        )}

        {machineType === 'front-washer' && (
          <g>
            {/* Modern Smart Rotary Washer Cabinet */}
            <rect x="65" y="18" width="190" height="112" rx="10" fill="#18181b" stroke="#71717a" strokeWidth="2.5" />
            {/* Circular Glass Hatch */}
            <circle cx="155" cy="76" r="42" fill="#09090b" stroke="#a1a1aa" strokeWidth="3" />
            <circle cx="155" cy="76" r="33" fill="#18181b" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5 3" />
            {/* Jet Spray Mist Streams */}
            <path d="M 155,44 L 140,78 M 155,44 L 155,82 M 155,44 L 170,78" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="2 2" />
            {/* Tumbling Garment Inside */}
            <path d="M 132,78 Q 155,65 178,82 Q 160,98 135,90 Z" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
            {/* PLC Touch Screen */}
            <rect x="215" y="28" width="28" height="20" rx="3" fill="#09090b" stroke="#10b981" strokeWidth="1.5" />
          </g>
        )}

        {machineType === 'hydro-extractor' && (
          <g>
            {/* Heavy Cast-Iron Centrifugal Base */}
            <ellipse cx="160" cy="118" rx="95" ry="14" fill="#27272a" stroke="#71717a" strokeWidth="2" />
            <rect x="75" y="42" width="170" height="74" rx="12" fill="#18181b" stroke="#a1a1aa" strokeWidth="2.5" />
            {/* Perforated Spinning Basket */}
            <ellipse cx="160" cy="42" rx="85" ry="14" fill="#09090b" stroke="#38bdf8" strokeWidth="2" />
            {/* High-RPM Rotation Arrows */}
            <path d="M 115,78 Q 160,92 205,78" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
            <polygon points="205,74 214,78 205,83" fill="#f59e0b" />
            {/* Extracted Water Droplets */}
            <circle cx="55" cy="85" r="3" fill="#38bdf8" />
            <circle cx="265" cy="85" r="3" fill="#38bdf8" />
            <circle cx="48" cy="100" r="2.5" fill="#38bdf8" />
            <circle cx="272" cy="100" r="2.5" fill="#38bdf8" />
          </g>
        )}

        {machineType === 'tumble-dryer' && (
          <g>
            {/* Tall Industrial Steam Dryer */}
            <rect x="70" y="12" width="180" height="122" rx="8" fill="#18181b" stroke="#71717a" strokeWidth="2.5" />
            {/* Top Steam Radiator Coil Header */}
            <rect x="85" y="18" width="150" height="16" rx="3" fill="#27272a" stroke="#f59e0b" strokeWidth="1.5" />
            {/* Large Reversing Mesh Drum */}
            <circle cx="160" cy="82" r="40" fill="#09090b" stroke="#f59e0b" strokeWidth="2.2" />
            <path d="M 135,68 Q 160,55 182,74 M 182,94 Q 160,108 135,90" fill="none" stroke="#fbbf24" strokeWidth="2" />
          </g>
        )}

        {machineType === 'laser-system' && (
          <g>
            {/* Overhead CO2 Laser Galvo Head */}
            <rect x="125" y="10" width="70" height="24" rx="4" fill="#27272a" stroke="#f59e0b" strokeWidth="2" />
            {/* Red/Amber Infrared Laser Scanning Beams */}
            <line x1="160" y1="34" x2="115" y2="95" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
            <line x1="160" y1="34" x2="145" y2="95" stroke="#ef4444" strokeWidth="2.2" />
            <line x1="160" y1="34" x2="195" y2="95" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
            {/* Dual Inflatable Mannequin Jeans */}
            <path d="M 95,90 L 145,90 L 140,132 L 122,132 L 120,104 L 118,132 L 100,132 Z" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
            <path d="M 175,90 L 225,90 L 220,132 L 202,132 L 200,104 L 198,132 L 180,132 Z" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
            {/* Engraved Whisker Lines */}
            <line x1="103" y1="98" x2="116" y2="101" stroke="#f8fafc" strokeWidth="1.5" />
            <line x1="103" y1="103" x2="116" y2="105" stroke="#f8fafc" strokeWidth="1.5" />
          </g>
        )}

        {machineType === 'ozone-cabinet' && (
          <g>
            {/* O3 Generator Tower + Sealed Rotary Drum */}
            <rect x="42" y="24" width="52" height="102" rx="6" fill="#18181b" stroke="#10b981" strokeWidth="2" />
            <text x="53" y="55" fill="#10b981" fontSize="12" fontFamily="monospace" fontWeight="bold">
              O₃
            </text>
            <rect x="110" y="24" width="165" height="102" rx="10" fill="#18181b" stroke="#71717a" strokeWidth="2" />
            <circle cx="192" cy="75" r="36" fill="#09090b" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" />
            {/* Pipe Connecting O3 Generator to Drum */}
            <path d="M 94,45 L 156,45" stroke="#10b981" strokeWidth="3" />
          </g>
        )}

        {machineType === 'curing-oven' && (
          <g>
            {/* Conveyor Baking Oven Tunnel */}
            <rect x="35" y="28" width="250" height="96" rx="8" fill="#18181b" stroke="#f59e0b" strokeWidth="2" />
            {/* Overhead Conveyor Rail */}
            <line x1="20" y1="42" x2="300" y2="42" stroke="#a1a1aa" strokeWidth="3" />
            {/* 3 Hanging Crinkled Jeans on 3D Wire Mannequins */}
            {[85, 155, 225].map((xPos) => (
              <g key={xPos} transform={`translate(${xPos}, 44)`}>
                <line x1="15" y1="0" x2="15" y2="10" stroke="#f59e0b" strokeWidth="2" />
                <path d="M 4,10 L 26,10 L 24,64 L 16,64 L 15,28 L 14,64 L 6,64 Z" fill="#1e3a8a" stroke="#f59e0b" strokeWidth="1.2" />
              </g>
            ))}
          </g>
        )}

        {machineType === 'sample-rotary-washer' && (
          <g>
            {/* Compact Sample / Rotary Garment Dyeing Drum */}
            <rect x="75" y="20" width="170" height="106" rx="10" fill="#18181b" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="160" cy="74" r="38" fill="#09090b" stroke="#a1a1aa" strokeWidth="2.5" />
            <circle cx="160" cy="74" r="30" fill="#18181b" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4 3" />
            {/* Dye Bath & Bidirectional Arrows */}
            <path d="M 132,78 Q 160,68 188,78 L 184,98 Q 160,106 136,98 Z" fill="#e11d48" fillOpacity="0.45" />
            <path d="M 142,58 A 20,20 0 0 1 178,58" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <rect x="90" y="28" width="32" height="12" rx="2" fill="#27272a" stroke="#10b981" strokeWidth="1" />
          </g>
        )}

        {machineType === 'pp-spray-booth' && (
          <g>
            {/* Negative-Pressure Spray Booth with Water-Curtain Scrubber */}
            <rect x="45" y="16" width="230" height="112" rx="6" fill="#18181b" stroke="#71717a" strokeWidth="2" />
            {/* Rear Cascading Water Curtain */}
            <rect x="195" y="24" width="65" height="96" rx="4" fill="#0284c7" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Inflatable Air Dummy with Jeans */}
            <path d="M 95,40 L 145,40 L 142,116 L 124,116 L 120,68 L 116,116 L 98,116 Z" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
            {/* PP Pink Mist Spray Cone */}
            <polygon points="58,68 112,52 112,88" fill="#ec4899" fillOpacity="0.35" stroke="#f472b6" strokeWidth="1.2" strokeDasharray="2 2" />
            <rect x="48" y="64" width="12" height="10" rx="2" fill="#f59e0b" />
          </g>
        )}
      </svg>

      {/* Bottom Label */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
        <span className="text-amber-400 font-semibold">{code}</span>
        <span className="text-zinc-400 truncate">{speedOrTemp}</span>
      </div>
    </div>
  );
};

/**
 * Renders a visual chemical vessel / swatch graphic for each of the washing chemicals
 */
const ChemicalVesselGraphic: React.FC<{
  chem: WashingChemicalSpec;
}> = ({ chem }) => {
  return (
    <div className="w-14 h-16 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center p-1.5 shrink-0">
      <svg viewBox="0 0 48 56" className="w-full h-full">
        {/* Erlenmeyer Flask Outline */}
        <path
          d="M 18,6 L 30,6 L 30,18 L 42,46 Q 44,50 39,50 L 9,50 Q 4,50 6,46 L 18,18 Z"
          fill="#09090b"
          stroke="#71717a"
          strokeWidth="2"
        />
        {/* Colored Chemical Liquid Fill */}
        <path
          d="M 13,30 L 35,30 L 41,45 Q 42,48 38,48 L 10,48 Q 6,48 7,45 Z"
          fill={chem.swatchColor}
          fillOpacity="0.75"
        />
        <circle cx="22" cy="40" r="2" fill="#ffffff" fillOpacity="0.7" />
        <circle cx="28" cy="36" r="1.5" fill="#ffffff" fillOpacity="0.7" />
      </svg>
    </div>
  );
};

export const WashingMachinesAndChemicalsSection: React.FC<WashingMachinesAndChemicalsSectionProps> = ({
  lang = 'bn',
}) => {
  const [selectedMachineIdx, setSelectedMachineIdx] = useState<number>(0);
  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);
  const [chemQuery, setChemQuery] = useState<string>('');
  const [hazardFilter, setHazardFilter] = useState<string>('All');

  const activeWashMachine = WASHING_MACHINES_DATA[selectedMachineIdx];
  const visibleChemicals = filterWashingChemicals(chemQuery, hazardFilter);

  return (
    <div className="space-y-8">
      {/* PART 1: Industrial Washing Machines (washing m/c) Directory + Process Video Links */}
      <section className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              {lang === 'bn'
                ? 'ইন্ডাস্ট্রিয়াল ওয়াশিং মেশিন গাইড (Washing m/c Images & Videos)'
                : 'Industrial Washing & Dry Laundry Machines (Washing m/c)'}
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-zinc-100 mt-0.5">
              {lang === 'bn'
                ? '৯টি প্রধান ডেনিম ওয়াশিং, ডাইং ও ড্রাই ফিনিশিং মেশিন: কার্যপ্রণালী ও অসুবিধা'
                : '9 Core Denim Washing, Dyeing & Dry Finishing Machines: Operation & Disadvantages'}
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              {lang === 'bn'
                ? 'প্রতিটি ওয়াশিং মেশিন কী কাজ করে, কীভাবে অপারেট করা হয়, কী কী অসুবিধা রয়েছে এবং ইউটিউব প্রসেস ভিডিও লিংক'
                : 'Detailed breakdown of what each laundry machine does, how it is operated, its production disadvantages, and YouTube process video links'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start">
            <button
              onClick={() => setShowVideoPlayer((prev) => !prev)}
              className="px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Video className="w-3.5 h-3.5" />
              <span>
                {showVideoPlayer
                  ? lang === 'bn' ? 'ভিডিও প্লেয়ার লুকান' : 'Hide Video Player'
                  : lang === 'bn' ? 'ওয়াশ প্রসেস ভিডিও প্লেয়ার' : 'Open Wash Video Player'}
              </span>
            </button>
            <a
              href={activeWashMachine.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-amber-400 border border-zinc-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'ইউটিউবে দেখুন (YT)' : 'Watch on YouTube'}</span>
            </a>
          </div>
        </div>

        {/* Optional Embedded YouTube / Open-Source Wash Process Video Panel */}
        {showVideoPlayer && (
          <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold">
                  {activeWashMachine.code} · {lang === 'bn' ? activeWashMachine.nameBn : activeWashMachine.nameEn}
                </span>
                <h4 className="text-sm font-bold text-zinc-100">
                  {lang === 'bn' ? activeWashMachine.videoTitleBn : activeWashMachine.videoTitleEn}
                </h4>
              </div>
              <a
                href={activeWashMachine.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-amber-500 text-zinc-950 text-xs font-bold flex items-center gap-1.5"
              >
                <span>{lang === 'bn' ? 'ইউটিউবে সম্পূর্ণ তালিকা খুলুন' : 'Open Full YouTube Videos'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-7 aspect-video max-h-[240px] w-full rounded-lg overflow-hidden border border-zinc-800 bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeWashMachine.youtubeEmbedId}?rel=0`}
                  title={lang === 'bn' ? activeWashMachine.videoTitleBn : activeWashMachine.videoTitleEn}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="lg:col-span-5 space-y-2 text-xs">
                <div className="font-bold text-zinc-200">
                  {lang === 'bn' ? 'অন্যান্য ওয়াশিং মেশিনের ভিডিও নির্বাচন করুন:' : 'Select Washing Machine Video:'}
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  {WASHING_MACHINES_DATA.map((wm, idx) => (
                    <button
                      key={wm.id}
                      onClick={() => setSelectedMachineIdx(idx)}
                      className={`text-left px-3 py-1.5 rounded-lg border text-xs flex items-center justify-between cursor-pointer ${
                        selectedMachineIdx === idx
                          ? 'bg-zinc-900 border-amber-500/60 text-amber-400 font-bold'
                          : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <span className="truncate">{lang === 'bn' ? wm.nameBn : wm.nameEn}</span>
                      <span className="font-mono text-[10px] shrink-0 ml-2">{wm.code}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 9 Washing Machine Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {WASHING_MACHINES_DATA.map((wm, idx) => (
            <div
              key={wm.id}
              className="bg-zinc-950 rounded-xl border border-zinc-800 p-4 flex flex-col justify-between space-y-3.5 hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-3">
                {/* Washing Machine Schematic (washing m/c image) */}
                <WashingMachineSchematicImage
                  machineType={wm.machineType}
                  code={wm.code}
                  speedOrTemp={wm.speedOrTemp}
                />

                {/* Title, Specs & Video Link */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="text-xs font-mono text-zinc-400">
                      <span className="text-amber-400 font-semibold">{wm.code}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{wm.capacityKg}</span>
                      <span aria-hidden="true"> · </span>
                      <span className="text-sky-400">{wm.liquorRatio}</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-zinc-100 mt-0.5">
                      {lang === 'bn' ? wm.nameBn : wm.nameEn}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        setSelectedMachineIdx(idx);
                        setShowVideoPlayer(true);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Play className="w-3 h-3 text-amber-400" />
                      <span>{lang === 'bn' ? 'প্লেয়ার' : 'Player'}</span>
                    </button>
                    <a
                      href={wm.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-zinc-950 border border-amber-500/30 text-[11px] font-semibold flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>{lang === 'bn' ? 'ইউটিউব ভিডিও' : 'YT Video'}</span>
                    </a>
                  </div>
                </div>

                {/* Structured 3-Part Description (What It Does / How Operated / Disadvantages) */}
                <div className="space-y-2 text-xs pt-2 border-t border-zinc-800">
                  <div>
                    <span className="font-bold text-emerald-400 inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                      {lang === 'bn' ? 'কী কাজ করে: ' : 'What It Does: '}
                    </span>
                    <span className="text-zinc-300">
                      {lang === 'bn' ? wm.whatItDoesBn : wm.whatItDoesEn}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-sky-400 inline-flex items-center gap-1">
                      <Settings className="w-3 h-3 shrink-0" />
                      {lang === 'bn' ? 'কীভাবে পরিচালিত হয়: ' : 'How Operated: '}
                    </span>
                    <span className="text-zinc-300">
                      {lang === 'bn' ? wm.howOperatedBn : wm.howOperatedEn}
                    </span>
                  </div>
                  <div className="bg-rose-950/20 p-2.5 rounded-lg border border-rose-500/25 text-rose-200/90">
                    <span className="font-bold text-rose-400 inline-flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      {lang === 'bn' ? 'অসুবিধা ও ঝুঁকি: ' : 'Disadvantages: '}
                    </span>
                    <span>{lang === 'bn' ? wm.disadvantagesBn : wm.disadvantagesEn}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PART 2: Washing Chemicals & Textile Auxiliaries Encyclopedia (14 Core Laundry Chemicals) */}
      <section className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
              <FlaskConical className="w-4 h-4" />
              {lang === 'bn'
                ? 'ডেনিম ওয়াশিং কেমিক্যাল ও টেক্সটাইল অক্সিলিয়ারিজ এনসাইক্লোপিডিয়া'
                : 'Denim Washing Chemicals & Textile Auxiliaries Encyclopedia (14 Core Agents)'}
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-zinc-100 mt-0.5">
              {lang === 'bn'
                ? '১৪টি অপরিহার্য লন্ড্রি কেমিক্যাল ও অক্সিলিয়ারিজ: কী কাজ করে, ব্যবহারের নিয়ম ও ক্ষতিকর দিক'
                : '14 Essential Denim Laundry Chemicals & Auxiliaries: Function, Operation & Disadvantages'}
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              {lang === 'bn'
                ? 'অ্যামাইলেজ, সেলুলেজ, পিউমিস স্টোন, ক্লোরিন ও পারঅক্সাইড ব্লিচ, পিপি, মেটাবাইসালফাইট, কস্টিক সোডা, ইডিটিএ, ওবিএ, ক্যাটানাইজার ও সফটনারের পূর্ণাঙ্গ গাইড'
                : 'Complete chemical guide covering Enzymes, Pumice Stones, NaOCl & H2O2 Bleaches, KMnO4, Neutralizers, Alkalis, EDTA Chelators, OBA, Dye Fixers & Softeners'}
            </p>
          </div>

          {/* Search & Hazard Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 self-start">
            <div className="relative">
              <input
                type="text"
                value={chemQuery}
                onChange={(e) => setChemQuery(e.target.value)}
                placeholder={lang === 'bn' ? 'কেমিক্যাল খুঁজুন...' : 'Search chemical...'}
                aria-label="Search washing chemicals"
                className="bg-zinc-950 text-xs text-zinc-200 placeholder-zinc-500 pl-8 pr-3 py-1.5 rounded-lg border border-zinc-800 focus:outline-hidden focus:border-amber-400"
              />
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-2.5 top-2" />
            </div>

            <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-xs">
              {['All', 'Low (Bio)', 'Medium', 'High (Restricted)'].map((hz) => (
                <button
                  key={hz}
                  onClick={() => setHazardFilter(hz)}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                    hazardFilter === hz
                      ? 'bg-zinc-800 text-amber-400'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {hz === 'All'
                    ? lang === 'bn' ? 'সব (১৪)' : 'All (14)'
                    : hz}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 8 Chemicals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {visibleChemicals.map((chem) => (
            <div
              key={chem.id}
              className="bg-zinc-950 rounded-xl border border-zinc-800 p-4 flex flex-col justify-between space-y-3.5 hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-3">
                {/* Top Header with Chemical Vessel SVG */}
                <div className="flex items-start gap-3.5">
                  <ChemicalVesselGraphic chem={chem} />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1 text-xs font-mono">
                      <span className="text-amber-400 font-bold">{chem.code}</span>
                      <span
                        className={
                          chem.hazardLevel === 'High (Restricted)'
                            ? 'text-rose-400'
                            : chem.hazardLevel === 'Medium'
                            ? 'text-amber-400'
                            : 'text-emerald-400'
                        }
                      >
                        {chem.hazardLevel}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-zinc-100 mt-0.5">
                      {lang === 'bn' ? chem.nameBn : chem.nameEn}
                    </h4>
                    <div className="text-[11px] font-mono text-zinc-400 truncate mt-0.5">
                      {chem.chemicalFormula}
                    </div>
                  </div>
                </div>

                {/* Dosage / Temp / pH Strip */}
                <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px] bg-zinc-900 p-2 rounded-lg border border-zinc-800">
                  <div>
                    <span className="text-[10px] text-zinc-500 block">
                      {lang === 'bn' ? 'মাত্রা (Dosage)' : 'Dosage'}
                    </span>
                    <span className="text-zinc-200 font-semibold">{chem.dosageRange}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 block">
                      {lang === 'bn' ? 'তাপমাত্রা' : 'Temp'}
                    </span>
                    <span className="text-amber-400 font-semibold">{chem.tempRange}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 block">
                      {lang === 'bn' ? 'pH রেঞ্জ' : 'pH Range'}
                    </span>
                    <span className="text-sky-400 font-semibold">{chem.phRange}</span>
                  </div>
                </div>

                {/* Structured 3-Part Description */}
                <div className="space-y-2 text-xs pt-1">
                  <div>
                    <span className="font-bold text-emerald-400">
                      {lang === 'bn' ? 'কী কাজ করে (Function): ' : 'What It Does: '}
                    </span>
                    <span className="text-zinc-300">
                      {lang === 'bn' ? chem.whatItDoesBn : chem.whatItDoesEn}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-sky-400">
                      {lang === 'bn' ? 'কীভাবে ব্যবহৃত হয় (How Operated): ' : 'How Operated: '}
                    </span>
                    <span className="text-zinc-300">
                      {lang === 'bn' ? chem.howOperatedBn : chem.howOperatedEn}
                    </span>
                  </div>
                  <div className="bg-rose-950/20 p-2.5 rounded-lg border border-rose-500/25 text-rose-200/90">
                    <span className="font-bold text-rose-400">
                      {lang === 'bn' ? 'অসুবিধা ও ঝুঁকি (Disadvantages): ' : 'Disadvantages: '}
                    </span>
                    <span>{lang === 'bn' ? chem.disadvantagesBn : chem.disadvantagesEn}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
