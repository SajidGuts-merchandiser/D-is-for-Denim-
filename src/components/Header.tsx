import React from 'react';
import {
  Layers,
  Scissors,
  Droplets,
  Sparkles,
  Calculator,
  AlertTriangle,
  Award,
  BookOpen,
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../utils/i18n.ts';

export type ActiveTab =
  | 'fabric'
  | 'sewing'
  | 'wash-process'
  | 'wash-types'
  | 'calculators'
  | 'defects'
  | 'quiz'
  | 'glossary';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenManual?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  lang,
  setLang,
  onOpenManual,
}) => {
  const t = TRANSLATIONS[lang];

  const navItems = [
    { id: 'fabric' as ActiveTab, label: t.tabs.fabric, icon: Layers, count: lang === 'bn' ? '১০ ধাপ' : '10 Steps' },
    { id: 'sewing' as ActiveTab, label: t.tabs.sewing, icon: Scissors, count: lang === 'bn' ? 'ভিডিও+৭ মেশিন' : 'Video+7 M/C' },
    { id: 'wash-process' as ActiveTab, label: t.tabs.washProcess, icon: Droplets, count: lang === 'bn' ? 'মেশিন+কেমিক্যাল' : 'M/C+Chem' },
    { id: 'wash-types' as ActiveTab, label: t.tabs.washTypes, icon: Sparkles, count: lang === 'bn' ? '৮ ওয়াশ' : '8 Washes' },
    { id: 'calculators' as ActiveTab, label: t.tabs.calculators, icon: Calculator, count: lang === 'bn' ? 'টুলস+টিপস' : 'Tools+Tips' },
    { id: 'defects' as ActiveTab, label: t.tabs.defects, icon: AlertTriangle, count: lang === 'bn' ? '৮ কিউএ' : '8 QA' },
    { id: 'quiz' as ActiveTab, label: t.tabs.quiz, icon: Award, count: lang === 'bn' ? 'এক্সাম' : 'Exam' },
    { id: 'glossary' as ActiveTab, label: t.tabs.glossary, icon: BookOpen, count: 'A-Z' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
      {/* Top Bar */}
      <div className="bg-zinc-900/80 px-4 py-2 text-xs border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-red-600/90 text-white font-mono font-bold text-[10px] tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              {t.badgeSelvedge}
            </span>
            <span className="text-zinc-300 hidden sm:inline">
              {lang === 'bn'
                ? 'সংক্ষিপ্ত ভিজ্যুয়াল ডেনিম মার্চেন্ডাইজিং, সুয়িং মেশিন ও লন্ড্রি কেমিক্যাল ইঞ্জিনিয়ারিং গাইড'
                : 'Concise Visual Denim Merchandising, Sewing Machine & Laundry Chemical Engineering Guide'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-zinc-300">
            {onOpenManual && (
              <button
                onClick={onOpenManual}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-amber-500 text-amber-400 hover:text-zinc-950 border border-zinc-700 font-bold text-[11px] transition-all cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'কুইক রেফারেন্স চার্ট' : 'Quick Reference Charts'}</span>
              </button>
            )}

            {/* Language Toggle Button */}
            <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-lg p-0.5">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-amber-500 text-zinc-950 font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang('bn')}
                className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  lang === 'bn'
                    ? 'bg-amber-500 text-zinc-950 font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="বাংলা মোড চালু করুন"
              >
                বাংলা
              </button>
            </div>

            <span className="hidden lg:flex items-center gap-1 font-mono text-zinc-400">
              <span className="text-amber-400 font-bold">3x1 RHT</span> · EIM Standard
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer" onClick={() => setActiveTab('fabric')}>
            <div className="w-11 h-11 rounded-lg bg-zinc-900 p-0.5 border border-zinc-700 flex items-center justify-center">
              <div className="w-full h-full rounded-[6px] bg-zinc-950 flex flex-col items-center justify-center p-1 relative overflow-hidden">
                <span className="font-mono text-xs font-black text-amber-400 tracking-tighter">DNM</span>
                <span className="text-[9px] font-black tracking-widest text-zinc-300">IQ</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-2.5 h-4 bg-red-600 rounded-xs border-r border-white/50" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold tracking-tight text-zinc-100 flex items-center gap-2">
                {t.appTitle}
                <span className="text-xs font-mono font-medium text-amber-400">
                  · {lang === 'bn' ? 'মার্চেন্ডাইজার হাব' : 'Merchandiser Hub'}
                </span>
              </h1>
            </div>
            <p className="text-xs text-zinc-400 font-medium">
              {t.appSubtitle}
            </p>
          </div>
        </div>

        {/* Global Search Filter */}
        <div className="w-full md:w-72 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-zinc-900 text-xs text-zinc-200 placeholder-zinc-500 px-3.5 py-2 pl-9 rounded-lg border border-zinc-800 focus:outline-hidden focus:border-amber-400 transition-all"
          />
          <svg
            className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2 text-zinc-400 hover:text-white text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center space-x-1 lg:space-x-1.5 overflow-x-auto pb-2 scrollbar-none" aria-label="Tabs">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`group flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-zinc-800 text-amber-400 border border-zinc-700 shadow-xs'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/70'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 shrink-0 ${
                    isActive ? 'text-amber-400' : 'text-zinc-500 group-hover:text-zinc-300'
                  }`}
                />
                <span>{item.label}</span>
                <span
                  className={`text-[9px] font-mono ${
                    isActive
                      ? 'text-zinc-200'
                      : 'text-zinc-500 group-hover:text-zinc-400'
                  }`}
                >
                  · {item.count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
