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
  Globe,
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
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  lang,
  setLang,
}) => {
  const t = TRANSLATIONS[lang];

  const navItems = [
    { id: 'fabric' as ActiveTab, label: t.tabs.fabric, icon: Layers, count: lang === 'bn' ? '৫ ধাপ' : '5 Steps' },
    { id: 'sewing' as ActiveTab, label: t.tabs.sewing, icon: Scissors, count: lang === 'bn' ? '৭ পয়েন্ট' : '7 Points' },
    { id: 'wash-process' as ActiveTab, label: t.tabs.washProcess, icon: Droplets, count: lang === 'bn' ? 'ওয়েট/ড্রাই' : 'Wet & Dry' },
    { id: 'wash-types' as ActiveTab, label: t.tabs.washTypes, icon: Sparkles, count: lang === 'bn' ? '৮ ওয়াশ' : '8 Washes' },
    { id: 'calculators' as ActiveTab, label: t.tabs.calculators, icon: Calculator, count: lang === 'bn' ? 'টুলস' : 'Tools' },
    { id: 'defects' as ActiveTab, label: t.tabs.defects, icon: AlertTriangle, count: lang === 'bn' ? '৮ কিউএ' : '8 QA' },
    { id: 'quiz' as ActiveTab, label: t.tabs.quiz, icon: Award, count: lang === 'bn' ? 'এক্সাম' : 'Exam' },
    { id: 'glossary' as ActiveTab, label: t.tabs.glossary, icon: BookOpen, count: 'A-Z' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-indigo-900/40">
      {/* Top Banner with Selvedge Detail */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 px-4 py-2 text-xs border-b border-indigo-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-red-600/90 text-white font-mono font-bold text-[10px] tracking-widest shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {t.badgeSelvedge}
            </span>
            <span className="text-slate-300 hidden sm:inline">
              {lang === 'bn'
                ? 'গার্মেন্টস ডেনিম মার্চেন্ডাইজার, সোর্সিং স্পেশালিস্ট ও ওয়াশ মাস্টারদের প্রফেশনাল প্ল্যাটফর্ম'
                : 'Technical Academy for Denim Apparel Merchandisers, Sourcing Specialists & Wash Masters'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-indigo-300">
            {/* Language Toggle Button */}
            <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-lg p-0.5 shadow-xs">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang('bn')}
                className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  lang === 'bn'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="বাংলা মোড চালু করুন"
              >
                বাংলা
              </button>
            </div>

            <span className="hidden md:flex items-center gap-1 font-mono">
              <span className="text-amber-400 font-bold">Standard 3/1 RHT</span> | EIM Certified
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer" onClick={() => setActiveTab('fabric')}>
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-indigo-600 via-blue-700 to-slate-900 p-0.5 shadow-lg shadow-indigo-600/20 border border-indigo-400/40 flex items-center justify-center">
              <div className="w-full h-full rounded-[6px] bg-slate-950 flex flex-col items-center justify-center p-1 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:4px_4px]" />
                <span className="font-mono text-xs font-black text-amber-400 tracking-tighter">DNM</span>
                <span className="text-[9px] font-black tracking-widest text-indigo-300">IQ</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-2.5 h-4 bg-red-600 rounded-xs border-r border-white/50" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
                {t.appTitle}
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {lang === 'bn' ? 'মার্চেন্ডাইজার হাব' : 'Merchandiser Hub'}
                </span>
              </h1>
            </div>
            <p className="text-xs text-slate-400 font-medium">
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
            className="w-full bg-slate-900/90 text-xs text-slate-200 placeholder-slate-400 px-3.5 py-2 pl-9 rounded-lg border border-slate-700 focus:outline-hidden focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all"
          />
          <svg
            className="w-4 h-4 text-slate-400 absolute left-3 top-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2 text-slate-400 hover:text-white text-xs"
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
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 shrink-0 ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'
                  }`}
                />
                <span>{item.label}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive
                      ? 'bg-indigo-900/60 text-indigo-100 border border-indigo-400/30'
                      : 'bg-slate-800 text-slate-400 group-hover:text-slate-300'
                  }`}
                >
                  {item.count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
