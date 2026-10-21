import React, { useState } from 'react';
import {
  DEFECTS_MATRIX,
  DefectItem,
} from '../data/denimData.ts';
import {
  AlertTriangle,
  AlertOctagon,
  CheckCircle2,
  ShieldCheck,
  Search,
  Filter,
  Layers,
  Scissors,
  Droplets,
  Package,
} from 'lucide-react';
import { Language } from '../utils/i18n.ts';

interface DefectsGuideProps {
  searchQuery?: string;
  lang?: Language;
}

export const DefectsGuide: React.FC<DefectsGuideProps> = ({ searchQuery = '', lang = 'bn' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('All');

  const filteredDefects = DEFECTS_MATRIX.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.visualSymptom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.rootCause.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.merchandiserAction.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSeverity = selectedSeverity === 'All' || item.severity === selectedSeverity;

    return matchesSearch && matchesCategory && matchesSeverity;
  });

  const categoryLabels: Record<string, { en: string; bn: string }> = {
    All: { en: 'All', bn: 'সবগুলো' },
    Fabric: { en: 'Fabric', bn: 'ফ্যাব্রিক' },
    Sewing: { en: 'Sewing', bn: 'সুয়িং' },
    Washing: { en: 'Washing', bn: 'ওয়াশিং' },
    'Finishing/Storage': { en: 'Finishing/Storage', bn: 'ফিনিশিং ও স্টোরেজ' },
  };

  const severityLabels: Record<string, { en: string; bn: string }> = {
    All: { en: 'All', bn: 'সব' },
    Critical: { en: 'Critical', bn: 'মারাত্মক' },
    Major: { en: 'Major', bn: 'গুরুত্বপূর্ণ' },
    Minor: { en: 'Minor', bn: 'সাধারণ' },
  };

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-950/80 via-slate-900 to-slate-950 p-6 md:p-8 border border-red-500/20 shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-400/30 text-red-300 text-xs font-semibold mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            {lang === 'bn' ? 'মডিউল ৬: কোয়ালিটি অ্যাসিউরেন্স ও ডিফেক্ট সমাধান' : 'Module 6: Quality Assurance & Defect Troubleshooting'}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'bn'
              ? 'ডেনিম ডিফেক্ট মেট্রিক্স ও ফ্যাক্টরি প্রিভেনশন গাইড'
              : 'Denim Defect Matrix & Production Prevention'}
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            {lang === 'bn'
              ? 'ডেনিম পোশাকে ডিফেক্টের কারণে তৈরি পোশাক কারখানার লাখ লাখ টাকার বায়ার ক্লেইম ও এয়ার শিপমেন্ট ক্ষতিপূরণ গুনতে হয়। রাসায়নিক ও মেকানিক্যাল মূল কারণ চিহ্নিত করে শিপমেন্টের আগেই প্রতিকার নিশ্চিত করুন।'
              : 'Denim defects cost garment factories millions in buyer claims and discount chargebacks. Identify root chemical and mechanical causes, enforce laboratory standard test methods, and take swift corrective action before shipment.'}
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mr-1">
            <Filter className="w-3.5 h-3.5" />
            {lang === 'bn' ? 'স্টেজ ফিল্টার:' : 'Stage:'}
          </span>
          {['All', 'Fabric', 'Sewing', 'Washing', 'Finishing/Storage'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-sm font-semibold'
                  : 'bg-slate-950 text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'bn' ? categoryLabels[cat]?.bn || cat : categoryLabels[cat]?.en || cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-400">
            {lang === 'bn' ? 'তীব্রতা (Severity):' : 'Severity:'}
          </span>
          {['All', 'Critical', 'Major', 'Minor'].map((sev) => (
            <button
              key={sev}
              onClick={() => setSelectedSeverity(sev)}
              className={`text-xs px-2.5 py-1 rounded-md font-mono transition-all cursor-pointer ${
                selectedSeverity === sev
                  ? sev === 'Critical'
                    ? 'bg-red-600 text-white font-bold'
                    : sev === 'Major'
                    ? 'bg-amber-600 text-white font-bold'
                    : 'bg-indigo-600 text-white font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'bn' ? severityLabels[sev]?.bn || sev : severityLabels[sev]?.en || sev}
            </button>
          ))}
        </div>
      </div>

      {/* Defects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDefects.map((defect) => (
          <div
            key={defect.id}
            className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-red-500/40 transition-all shadow-xl space-y-4"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-slate-950 text-indigo-300 border border-slate-800">
                      {lang === 'bn' ? categoryLabels[defect.category]?.bn || defect.category : defect.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm ${
                        defect.severity === 'Critical'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : defect.severity === 'Major'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}
                    >
                      {lang === 'bn' ? severityLabels[defect.severity]?.bn || defect.severity : defect.severity}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1.5">{defect.title}</h4>
                </div>
              </div>

              {/* Visual Symptom */}
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 mb-3">
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5 font-bold">
                  {lang === 'bn' ? 'দৃশ্যমান লক্ষণ ও উপসর্গ:' : 'Visual Appearance & Symptom:'}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">{defect.visualSymptom}</p>
              </div>

              {/* Root Cause */}
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 mb-3">
                <span className="text-[10px] font-mono uppercase text-amber-400 block mb-0.5 font-bold">
                  {lang === 'bn' ? 'বৈজ্ঞানিক ও টেকনিক্যাল কারণ:' : 'Scientific / Technical Root Cause:'}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">{defect.rootCause}</p>
              </div>

              {/* Prevention in Production */}
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-0.5 font-bold">
                  {lang === 'bn' ? 'ফ্যাক্টরি প্রোডাকশন প্রতিরোধ ব্যবস্থা:' : 'Factory Production Prevention:'}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {defect.preventionInProduction}
                </p>
              </div>
            </div>

            {/* Merchandiser Action Rule */}
            <div className="pt-3 border-t border-slate-800">
              <div className="bg-indigo-950/40 p-3.5 rounded-xl border border-indigo-500/30">
                <div className="flex items-center gap-1.5 text-indigo-300 text-xs font-bold mb-1">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  {lang === 'bn' ? 'মার্চেন্ডাইজারের বাণিজ্যিক করণীয়:' : 'Merchandiser Commercial Action:'}
                </div>
                <p className="text-xs text-indigo-200/90 leading-relaxed font-medium">
                  {defect.merchandiserAction}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
