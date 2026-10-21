/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header, ActiveTab } from './components/Header.tsx';
import { FabricProcessModule } from './components/FabricProcessModule.tsx';
import { SewingProcessModule } from './components/SewingProcessModule.tsx';
import { WashProcessModule } from './components/WashProcessModule.tsx';
import { WashTypesCatalog } from './components/WashTypesCatalog.tsx';
import { MerchandiserWorkbench } from './components/MerchandiserWorkbench.tsx';
import { DefectsGuide } from './components/DefectsGuide.tsx';
import { QuizCertification } from './components/QuizCertification.tsx';
import { GlossarySearch } from './components/GlossarySearch.tsx';
import {
  Layers,
  Scissors,
  Droplets,
  Sparkles,
  Calculator,
  AlertTriangle,
  Award,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

import { Language, TRANSLATIONS } from './utils/i18n.ts';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('fabric');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lang, setLang] = useState<Language>('bn'); // Full page in Bangla by default

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Header & Navigation with Bangla Toggle */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 sm:px-6">
        {activeTab === 'fabric' && <FabricProcessModule lang={lang} />}
        {activeTab === 'sewing' && <SewingProcessModule lang={lang} />}
        {activeTab === 'wash-process' && <WashProcessModule lang={lang} />}
        {activeTab === 'wash-types' && <WashTypesCatalog searchQuery={searchQuery} lang={lang} />}
        {activeTab === 'calculators' && <MerchandiserWorkbench lang={lang} />}
        {activeTab === 'defects' && <DefectsGuide searchQuery={searchQuery} lang={lang} />}
        {activeTab === 'quiz' && <QuizCertification lang={lang} />}
        {activeTab === 'glossary' && <GlossarySearch searchQuery={searchQuery} lang={lang} />}
      </main>

      {/* Global Bottom Status Bar & Footer */}
      <footer className="mt-auto border-t border-indigo-900/40 bg-slate-950/90 text-xs text-slate-400 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-mono font-bold text-white text-xs shadow-md">
              DNM
            </div>
            <div>
              <div className="font-bold text-white">
                {lang === 'bn' ? 'ডেনিমআইকিউ (DenimIQ) • মাস্টার ডেনিম মার্চেন্ডাইজার একাডেমি' : 'DenimIQ • Master Denim Merchandiser Academy'}
              </div>
              <div className="text-[11px] text-slate-400">
                {lang === 'bn'
                  ? 'গার্মেন্টস ডেনিম মার্চেন্ডাইজার, সোর্সিং ডিরেক্টর ও ওয়াশ মাস্টারদের জন্য ইন্টারঅ্যাক্টিভ ইঞ্জিনিয়ারিং প্ল্যাটফর্ম'
                  : 'Interactive Engineering Platform for Apparel Merchandisers, Sourcing Directors & Wash Masters'}
              </div>
            </div>
          </div>

          {/* Quick Module Jump Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              onClick={() => setActiveTab('fabric')}
              className="hover:text-indigo-400 transition-colors cursor-pointer"
            >
              {t.tabs.fabric}
            </button>
            <span className="text-slate-700">&bull;</span>
            <button
              onClick={() => setActiveTab('sewing')}
              className="hover:text-indigo-400 transition-colors cursor-pointer"
            >
              {t.tabs.sewing}
            </button>
            <span className="text-slate-700">&bull;</span>
            <button
              onClick={() => setActiveTab('wash-process')}
              className="hover:text-indigo-400 transition-colors cursor-pointer"
            >
              {t.tabs.washProcess}
            </button>
            <span className="text-slate-700">&bull;</span>
            <button
              onClick={() => setActiveTab('wash-types')}
              className="hover:text-indigo-400 transition-colors cursor-pointer"
            >
              {t.tabs.washTypes}
            </button>
            <span className="text-slate-700">&bull;</span>
            <button
              onClick={() => setActiveTab('calculators')}
              className="hover:text-indigo-400 transition-colors cursor-pointer"
            >
              {t.tabs.calculators}
            </button>
            <span className="text-slate-700">&bull;</span>
            <button
              onClick={() => setActiveTab('defects')}
              className="hover:text-indigo-400 transition-colors cursor-pointer"
            >
              {t.tabs.defects}
            </button>
            <span className="text-slate-700">&bull;</span>
            <button
              onClick={() => setActiveTab('quiz')}
              className="hover:text-indigo-400 transition-colors cursor-pointer"
            >
              {t.tabs.quiz}
            </button>
            <span className="text-slate-700">&bull;</span>
            <button
              onClick={() => setActiveTab('glossary')}
              className="hover:text-indigo-400 transition-colors cursor-pointer"
            >
              {t.tabs.glossary}
            </button>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Jeanologia EIM Compatible &bull; ASTM D6193 &bull; ZDHC Level 3
          </div>
        </div>
      </footer>
    </div>
  );
}
