import React, { useState, useEffect } from 'react';
import {
  SEWING_MACHINES_AND_VIDEOS,
  SewingMachineVideoSpec,
  calculateMachineHourlyOutput,
} from '../data/machinesAndChemicalsData.ts';
import { Language } from '../utils/i18n.ts';
import {
  Play,
  Pause,
  RotateCcw,
  Cpu,
  CheckCircle2,
  Settings,
  AlertTriangle,
  Video,
  ExternalLink,
} from 'lucide-react';

interface SewingVideoAndMachinesSectionProps {
  lang?: Language;
}

/**
 * Renders a detailed technical machine illustration (m/c image) for each of the 7 denim sewing machines
 */
const SewingMachineSchematicImage: React.FC<{
  mode: SewingMachineVideoSpec['animationMode'];
  modelCode: string;
}> = ({ mode, modelCode }) => {
  return (
    <div className="relative w-full h-44 bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden flex items-center justify-center p-3">
      {/* Subtle Technical Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #52525b 1px, transparent 1px), linear-gradient(to bottom, #52525b 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <svg viewBox="0 0 320 150" className="w-full h-full max-w-[300px] drop-shadow-md">
        {/* Base Table / Bed */}
        {mode === 'felling' || mode === 'hemming' ? (
          /* Cantilevered Tubular Cylinder Arm (FOA / 43200G Bulldog) */
          <g>
            <rect x="190" y="25" width="95" height="98" rx="8" fill="#18181b" stroke="#52525b" strokeWidth="2" />
            <rect x="115" y="25" width="110" height="32" rx="6" fill="#27272a" stroke="#71717a" strokeWidth="2" />
            {/* Tubular Cylinder Feed Arm */}
            <rect x="28" y="96" width="175" height="22" rx="10" fill="#3f3f46" stroke="#a1a1aa" strokeWidth="2" />
            {/* Fabric Workpiece Wrapped Around Cylinder Arm */}
            <path d="M 35,93 L 155,93 L 155,121 L 35,121 Z" fill="#27272a" fillOpacity="0.85" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Helical / Lap-Fell Folder Scroll */}
            <path d="M 95,82 Q 112,78 118,93 L 95,93 Z" fill="#f59e0b" stroke="#fde68a" strokeWidth="1.2" />
          </g>
        ) : (
          /* Standard Flatbed Industrial Machine Casting */
          <g>
            <rect x="20" y="108" width="280" height="20" rx="4" fill="#27272a" stroke="#71717a" strokeWidth="2" />
            <rect x="210" y="24" width="68" height="86" rx="6" fill="#18181b" stroke="#52525b" strokeWidth="2" />
            <rect x="75" y="24" width="165" height="34" rx="6" fill="#27272a" stroke="#71717a" strokeWidth="2" />
            <rect x="75" y="52" width="44" height="28" rx="4" fill="#18181b" stroke="#52525b" strokeWidth="2" />
            {/* Fabric Workpiece on Flatbed */}
            <rect x="30" y="101" width="160" height="8" rx="2" fill="#27272a" stroke="#38bdf8" strokeWidth="1.2" />
          </g>
        )}

        {/* Handwheel & Tension Discs */}
        <circle cx="282" cy="44" r="16" fill="#09090b" stroke="#a1a1aa" strokeWidth="2.5" />
        <circle cx="282" cy="44" r="5" fill="#f59e0b" />
        <circle cx="135" cy="40" r="6" fill="#f59e0b" stroke="#fef08a" strokeWidth="1.5" />
        <circle cx="152" cy="40" r="6" fill="#38bdf8" stroke="#bae6fd" strokeWidth="1.5" />

        {/* Cone Thread Stand & Golden Thread Path */}
        <polygon points="248,6 260,6 264,24 244,24" fill="#f59e0b" />
        <path d="M 254,6 Q 190,2 135,34 L 96,76" fill="none" stroke="#fbbf24" strokeWidth="1.6" strokeDasharray="3 2" />

        {/* Needle Bar & Presser Foot Assembly */}
        {mode === 'waistband' ? (
          <g>
            <rect x="86" y="72" width="24" height="10" rx="2" fill="#d4d4d8" />
            <line x1="89" y1="82" x2="89" y2="101" stroke="#fafafa" strokeWidth="2" />
            <line x1="95" y1="82" x2="95" y2="101" stroke="#fafafa" strokeWidth="2" />
            <line x1="101" y1="82" x2="101" y2="101" stroke="#fafafa" strokeWidth="2" />
            <line x1="107" y1="82" x2="107" y2="101" stroke="#fafafa" strokeWidth="2" />
            <circle cx="58" cy="94" r="11" fill="#0284c7" stroke="#bae6fd" strokeWidth="2" />
          </g>
        ) : mode === 'twin-needle' || mode === 'belt-loop' ? (
          <g>
            <rect x="88" y="72" width="18" height="10" rx="2" fill="#d4d4d8" />
            <line x1="93" y1="82" x2="93" y2="101" stroke="#fafafa" strokeWidth="2.2" />
            <line x1="101" y1="82" x2="101" y2="101" stroke="#fafafa" strokeWidth="2.2" />
          </g>
        ) : (
          <g>
            <rect x="91" y="68" width="12" height="12" rx="2" fill="#d4d4d8" />
            <line x1="97" y1="80" x2="97" y2="100" stroke="#fafafa" strokeWidth="2.5" />
          </g>
        )}

        {/* Presser Foot */}
        <path d="M 78,99 L 114,99 L 118,93" fill="none" stroke="#38bdf8" strokeWidth="2.5" />

        {/* Inset Stitch Appearance Preview Box */}
        <g transform="translate(14, 14)">
          <rect x="0" y="0" width="92" height="44" rx="6" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />
          <text x="8" y="13" fill="#a1a1aa" fontSize="8" fontFamily="monospace">
            STITCH VIEW
          </text>
          {mode === 'keyhole' ? (
            <g transform="translate(12, 20)">
              <path d="M 4,8 L 48,8 A 7,7 0 1 1 48,10 L 4,10 Z" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="2 1" />
              <circle cx="52" cy="9" r="3.5" fill="#09090b" />
            </g>
          ) : mode === 'bartack' ? (
            <path
              d="M 10,24 L 16,34 L 22,24 L 28,34 L 34,24 L 40,34 L 46,24 L 52,34 L 58,24 L 64,34 L 70,24 L 76,34"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
            />
          ) : mode === 'hemming' ? (
            <g>
              <line x1="8" y1="22" x2="82" y2="22" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 2" />
              <path d="M 10,34 L 22,26 M 26,34 L 38,26 M 42,34 L 54,26 M 58,34 L 70,26" stroke="#38bdf8" strokeWidth="2.5" />
            </g>
          ) : (
            <g>
              <line x1="8" y1="23" x2="82" y2="23" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 2" />
              <line x1="8" y1="32" x2="82" y2="32" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 2" />
            </g>
          )}
        </g>
      </svg>

      {/* Bottom Model Label Overlay */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
        <span className="text-amber-400 font-semibold truncate">{modelCode}</span>
        <span className="text-zinc-500">m/c schematic</span>
      </div>
    </div>
  );
};

export const SewingVideoAndMachinesSection: React.FC<SewingVideoAndMachinesSectionProps> = ({
  lang = 'bn',
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [frameTick, setFrameTick] = useState<number>(0);
  const [videoMode, setVideoMode] = useState<'simulator' | 'youtube'>('simulator');

  const activeMachine = SEWING_MACHINES_AND_VIDEOS[selectedIndex];

  useEffect(() => {
    if (!isPlaying || videoMode !== 'simulator') return;
    const intervalMs = Math.max(25, Math.round(60 / playbackSpeed));
    const timer = setInterval(() => {
      setFrameTick((prev) => (prev + 1) % 240);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isPlaying, playbackSpeed, videoMode]);

  const outputMetrics = calculateMachineHourlyOutput({
    rpm: activeMachine.rpm,
    spi: 8.5,
    seamLengthInches: activeMachine.animationMode === 'bartack' ? 1.5 : 32,
    handlingSecondsPerPc: activeMachine.animationMode === 'bartack' ? 4 : 11,
  });

  const phase = (frameTick % 20) / 20;
  const needleOffsetY = Math.sin(phase * Math.PI * 2) * 14;
  const fabricScrollOffset = (frameTick * 3) % 48;

  return (
    <div className="space-y-8">
      {/* 1. Interactive Sewing Process Video Simulator + YouTube / Open-Source Video Hub */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-1.5">
              <Video className="w-4 h-4" />
              {lang === 'bn'
                ? 'সুয়িং প্রসেস ভিডিও সিমুলেটর ও ইউটিউব ভিডিও রেফারেন্স'
                : 'Sewing Process Video Simulator & YouTube Video Reference'}
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-zinc-100 mt-0.5">
              {lang === 'bn'
                ? `${activeMachine.stepNum}. ${activeMachine.nameBn}`
                : `${activeMachine.stepNum}. ${activeMachine.nameEn}`}
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              {lang === 'bn'
                ? 'মেশিন নির্বাচন করে লাইভ স্টিচ অ্যানিমেশন দেখুন অথবা সরাসরি ইউটিউব/ওপেন-সোর্স ফ্যাক্টরি ভিডিও চালু করুন'
                : 'Select any sewing operation below to inspect live stitch kinematics or open the YouTube factory process video'}
            </p>
          </div>

          {/* Mode Switcher + Playback Controls + Direct YouTube Link */}
          <div className="flex flex-wrap items-center gap-2 self-start">
            <div className="flex items-center bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-xs">
              <button
                onClick={() => setVideoMode('simulator')}
                className={`px-2.5 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
                  videoMode === 'simulator'
                    ? 'bg-zinc-800 text-amber-400'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {lang === 'bn' ? 'লাইভ স্টিচ সিমুলেটর' : 'Stitch Simulator'}
              </button>
              <button
                onClick={() => setVideoMode('youtube')}
                className={`px-2.5 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
                  videoMode === 'youtube'
                    ? 'bg-zinc-800 text-amber-400'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {lang === 'bn' ? 'ইউটিউব প্লেয়ার' : 'YouTube Player'}
              </button>
            </div>

            {videoMode === 'simulator' && (
              <>
                <button
                  onClick={() => setIsPlaying((p) => !p)}
                  className="px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>
                    {isPlaying
                      ? lang === 'bn' ? 'পজ (Pause)' : 'Pause'
                      : lang === 'bn' ? 'প্লে (Play)' : 'Play'}
                  </span>
                </button>
                <button
                  onClick={() => setFrameTick(0)}
                  className="px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  aria-label="Reset video simulation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'রিসেট' : 'Reset'}</span>
                </button>
                <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-xs font-mono">
                  {[0.5, 1, 2].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => setPlaybackSpeed(spd)}
                      className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                        playbackSpeed === spd
                          ? 'bg-zinc-800 text-amber-400 font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              </>
            )}

            <a
              href={activeMachine.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-amber-400 border border-zinc-700 text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'ইউটিউবে ভিডিও দেখুন (YT)' : 'Watch on YouTube'}</span>
            </a>
          </div>
        </div>

        {/* 7 Operation Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {SEWING_MACHINES_AND_VIDEOS.map((m, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedIndex(idx)}
                className={`text-left p-2.5 rounded-xl border transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-950 border-amber-500/60 text-zinc-100'
                    : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className={isSelected ? 'text-amber-400 font-bold' : 'text-zinc-500'}>
                    OP {m.stepNum}
                  </span>
                  <span>{m.rpm} RPM</span>
                </div>
                <div className="text-xs font-bold truncate">
                  {lang === 'bn' ? m.nameBn : m.nameEn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Two-Zone Sandbox Stage: Left Video Canvas (7 cols) + Right Live Telemetry & Explanation (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left: Animated Sewing Video Viewport OR YouTube Video Embed */}
          <div
            data-testid="sewing-video-canvas"
            className="lg:col-span-7 bg-zinc-950 rounded-xl border border-zinc-800 p-4 flex flex-col justify-between relative overflow-hidden min-h-[300px]"
          >
            {/* Top Video HUD Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono border-b border-zinc-800 pb-2.5 z-10">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">{activeMachine.modelCode}</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span className="text-sky-400">{activeMachine.stitchClass}</span>
              </div>
              <a
                href={activeMachine.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-amber-400 flex items-center gap-1 underline"
              >
                <span>{lang === 'bn' ? 'ওপেন-সোর্স/ইউটিউব লিংক' : 'Open-Source / YT Link'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {videoMode === 'simulator' ? (
              /* Center Animated SVG Sewing Cross-Section Stage */
              <div className="my-auto py-3 flex items-center justify-center">
                <svg viewBox="0 0 520 210" className="w-full h-auto max-h-[210px]">
                  {/* Background Machine Head Frame */}
                  <rect x="150" y="6" width="90" height="45" rx="6" fill="#18181b" stroke="#52525b" strokeWidth="2" />
                  <text x="162" y="26" fill="#a1a1aa" fontSize="9" fontFamily="monospace">
                    NEEDLE HEAD
                  </text>
                  <text x="162" y="40" fill="#f59e0b" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    {activeMachine.rpm} RPM
                  </text>

                  {/* Presser Foot & Folder Guide */}
                  <path
                    d="M 135,108 L 255,108 L 270,94"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <rect x="275" y="88" width="75" height="22" rx="5" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1.5" />
                  <text x="283" y="102" fill="#fde68a" fontSize="9" fontFamily="monospace">
                    FOLDER GUIDE
                  </text>

                  {/* Animated Needle(s) Moving Up & Down */}
                  <g transform={`translate(0, ${needleOffsetY})`}>
                    <rect x="184" y="48" width="22" height="16" rx="2" fill="#d4d4d8" />
                    <line x1="195" y1="64" x2="195" y2="132" stroke="#fafafa" strokeWidth="3.5" strokeLinecap="round" />
                    {(activeMachine.animationMode === 'felling' ||
                      activeMachine.animationMode === 'twin-needle' ||
                      activeMachine.animationMode === 'waistband' ||
                      activeMachine.animationMode === 'belt-loop') && (
                      <line x1="205" y1="64" x2="205" y2="132" stroke="#e4e4e7" strokeWidth="3" strokeLinecap="round" />
                    )}
                    <path
                      d="M 140,20 Q 175,65 195,124"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="2.2"
                    />
                  </g>

                  {/* Moving Multi-Ply Fabric Layers */}
                  <g>
                    <rect x="20" y="112" width="480" height="14" rx="2" fill="#27272a" stroke="#52525b" strokeWidth="1.5" />
                    <rect x="20" y="126" width="480" height="14" rx="2" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />

                    {/* Animated Topstitch Loops Moving Left */}
                    <g transform={`translate(-${fabricScrollOffset}, 0)`}>
                      {Array.from({ length: 16 }, (_, i) => {
                        const xPos = 30 + i * 24;
                        return (
                          <g key={i}>
                            <rect x={xPos} y="108" width="14" height="4" rx="1.5" fill="#f59e0b" />
                            <line x1={xPos + 14} y1="110" x2={xPos + 14} y2="143" stroke="#f59e0b" strokeWidth="2" />
                            <path
                              d={`M ${xPos},143 Q ${xPos + 12},152 ${xPos + 24},143`}
                              fill="none"
                              stroke="#38bdf8"
                              strokeWidth="2.5"
                            />
                          </g>
                        );
                      })}
                    </g>
                  </g>

                  {/* Underneath Oscillating Looper / Rotary Hook & Feed Dogs */}
                  <g transform={`translate(${needleOffsetY * 0.8}, 0)`}>
                    <path
                      d="M 175,152 L 222,144 L 210,162 Z"
                      fill="#38bdf8"
                      stroke="#bae6fd"
                      strokeWidth="1.5"
                    />
                    <text x="165" y="178" fill="#38bdf8" fontSize="9" fontFamily="monospace">
                      LOOPER / HOOK (UNDERNEATH)
                    </text>
                  </g>

                  {/* Feed Dog Teeth */}
                  <path
                    d="M 140,145 L 146,140 L 152,145 L 158,140 L 164,145 L 170,140 L 176,145"
                    fill="none"
                    stroke="#a1a1aa"
                    strokeWidth="2.5"
                  />

                  <text x="380" y="165" fill="#a1a1aa" fontSize="10" fontFamily="monospace">
                    ← FABRIC FEED ({activeMachine.spiRange})
                  </text>
                </svg>
              </div>
            ) : (
              /* Embedded YouTube / Open-Source Video View + Direct Search Link */
              <div className="my-auto py-3 flex flex-col items-center justify-center space-y-3">
                <div className="w-full aspect-video max-h-[210px] rounded-lg overflow-hidden border border-zinc-800 bg-black relative">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeMachine.youtubeEmbedId}?rel=0`}
                    title={lang === 'bn' ? activeMachine.videoTitleBn : activeMachine.videoTitleEn}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="w-full flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-zinc-300 font-medium truncate">
                    {lang === 'bn' ? activeMachine.videoTitleBn : activeMachine.videoTitleEn}
                  </span>
                  <a
                    href={activeMachine.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-md bg-amber-500 text-zinc-950 font-bold flex items-center gap-1 hover:bg-amber-400 transition-colors"
                  >
                    <span>{lang === 'bn' ? 'ইউটিউবে সম্পূর্ণ প্রসেস দেখুন' : 'Open Full YouTube Videos'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Bottom Video Progress & Legend Bar */}
            <div className="pt-2.5 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
              <div className="flex items-center gap-4">
                <span className="text-amber-400">━━ Top Needle Thread (Gold)</span>
                <span className="text-sky-400">━━ Bottom Looper/Bobbin (Cyan)</span>
              </div>
              <span className="tabular-nums">
                {lang === 'bn' ? 'নিডল সাইজ:' : 'Needle:'} {activeMachine.needleSpec}
              </span>
            </div>
          </div>

          {/* Right: Selected Machine Live Breakdown (What It Does / How Operated / Disadvantages) */}
          <div className="lg:col-span-5 bg-zinc-950 rounded-xl border border-zinc-800 p-4 sm:p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {/* Telemetry Strip */}
              <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs bg-zinc-900 p-2.5 rounded-lg border border-zinc-800">
                <div>
                  <span className="text-[10px] text-zinc-400 block">
                    {lang === 'bn' ? 'মেশিন গতি' : 'Speed'}
                  </span>
                  <span className="font-bold text-amber-400 tabular-nums">{activeMachine.rpm} RPM</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 block">
                    {lang === 'bn' ? 'সেলাই ঘনত্ব' : 'Target SPI'}
                  </span>
                  <span className="font-bold text-sky-400 tabular-nums">{activeMachine.spiRange}</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 block">
                    {lang === 'bn' ? 'উৎপাদন/ঘণ্টা' : 'Output/Hr'}
                  </span>
                  <span className="font-bold text-emerald-400 tabular-nums">
                    ~{outputMetrics.piecesPerHourAt85Eff} pcs
                  </span>
                </div>
              </div>

              {/* 1. What It Does */}
              <div className="space-y-1">
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {lang === 'bn' ? 'কী কাজ করে (What It Does):' : 'What It Does (Function):'}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {lang === 'bn' ? activeMachine.whatItDoesBn : activeMachine.whatItDoesEn}
                </p>
              </div>

              {/* 2. How It Is Operated */}
              <div className="space-y-1 pt-2 border-t border-zinc-800">
                <div className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  {lang === 'bn' ? 'কীভাবে পরিচালিত হয় (How Operated):' : 'How It Is Operated:'}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {lang === 'bn' ? activeMachine.howOperatedBn : activeMachine.howOperatedEn}
                </p>
              </div>

              {/* 3. Disadvantages & Limitations */}
              <div className="space-y-1 pt-2 border-t border-zinc-800">
                <div className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  {lang === 'bn' ? 'অসুবিধা ও সীমাবদ্ধতা (Disadvantages):' : 'Disadvantages & Limitations:'}
                </div>
                <p className="text-xs text-rose-200/90 leading-relaxed">
                  {lang === 'bn' ? activeMachine.disadvantagesBn : activeMachine.disadvantagesEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. All 7 Specialized Sewing Machines Gallery (m/c Images + Full Descriptions + YT Links) */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-zinc-800">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-zinc-100 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-amber-400" />
              {lang === 'bn'
                ? 'ডেনিমের ৭টি বিশেষায়িত সুয়িং মেশিন চিত্র (m/c Images), কার্যপ্রণালী ও অসুবিধা'
                : '7 Specialized Denim Sewing Machines (m/c Images): Function, Operation & Disadvantages'}
            </h3>
            <p className="text-xs text-zinc-400">
              {lang === 'bn'
                ? 'প্রতিটি মেশিনের স্কিম্যাটিক ডায়াগ্রাম, ইউটিউব ভিডিও লিংক, কী কাজ করে, কীভাবে অপারেট করা হয় এবং প্রোডাকশনের অসুবিধাসমূহ'
                : 'Complete visual directory of all 7 denim sewing machines with schematic diagrams, YouTube video links, operation, and disadvantages'}
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            ISO 301 • ISO 304 • ISO 401 • ISO 406
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SEWING_MACHINES_AND_VIDEOS.map((m, idx) => (
            <div
              key={m.id}
              className="bg-zinc-950 rounded-xl border border-zinc-800 p-4 flex flex-col justify-between space-y-3.5 hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-3">
                {/* Machine Image / Schematic */}
                <SewingMachineSchematicImage mode={m.animationMode} modelCode={m.modelCode} />

                {/* Title & Action Links */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="text-xs font-mono text-amber-400 font-semibold">
                      {m.stepNum} · {m.stitchClass} · {m.spiRange}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-zinc-100 mt-0.5">
                      {lang === 'bn' ? m.nameBn : m.nameEn}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        setSelectedIndex(idx);
                        setVideoMode('simulator');
                        setIsPlaying(true);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Play className="w-3 h-3 text-amber-400" />
                      <span>{lang === 'bn' ? 'সিমুলেটর' : 'Simulate'}</span>
                    </button>
                    <a
                      href={m.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-zinc-950 border border-amber-500/30 text-[11px] font-semibold flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>{lang === 'bn' ? 'ইউটিউব ভিডিও' : 'YT Video'}</span>
                    </a>
                  </div>
                </div>

                {/* Structured 3-Part Description */}
                <div className="space-y-2 text-xs pt-2 border-t border-zinc-800">
                  <div>
                    <span className="font-bold text-emerald-400">
                      {lang === 'bn' ? 'কী কাজ করে: ' : 'What It Does: '}
                    </span>
                    <span className="text-zinc-300">
                      {lang === 'bn' ? m.whatItDoesBn : m.whatItDoesEn}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-sky-400">
                      {lang === 'bn' ? 'কীভাবে পরিচালিত হয়: ' : 'How Operated: '}
                    </span>
                    <span className="text-zinc-300">
                      {lang === 'bn' ? m.howOperatedBn : m.howOperatedEn}
                    </span>
                  </div>
                  <div className="bg-rose-950/20 p-2.5 rounded-lg border border-rose-500/25 text-rose-200/90">
                    <span className="font-bold text-rose-400">
                      {lang === 'bn' ? 'অসুবিধা ও ঝুঁকি: ' : 'Disadvantages: '}
                    </span>
                    <span>{lang === 'bn' ? m.disadvantagesBn : m.disadvantagesEn}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
