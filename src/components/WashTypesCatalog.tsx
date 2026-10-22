import React, { useState } from 'react';
import {
  WASH_TYPES,
  WashType,
} from '../data/denimData.ts';
import {
  getConciseKeyStepsForWash,
} from '../data/denimManualData.ts';
import {
  Sparkles,
  X,
  FileText,
  Clock,
  Thermometer,
  ShieldCheck,
  Filter,
  FileDown,
} from 'lucide-react';
import { exportAndDownloadTechPackPdf } from '../utils/pdfExport.ts';
import { Language, TRANSLATIONS } from '../utils/i18n.ts';

import { WashTexturePreview } from './WashTexturePreview.tsx';

interface WashTypesCatalogProps {
  searchQuery?: string;
  lang?: Language;
}

export const WashTypesCatalog: React.FC<WashTypesCatalogProps> = ({
  searchQuery = '',
  lang = 'bn',
}) => {
  const t = TRANSLATIONS[lang];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedEim, setSelectedEim] = useState<string>('All');
  const [activeRecipeModal, setActiveRecipeModal] = useState<WashType | null>(null);

  const handleExportSingleRecipePdf = (wash: WashType) => {
    exportAndDownloadTechPackPdf({
      styleName: `${wash.name} Standard Production`,
      styleCode: `DNM-${wash.id.toUpperCase()}`,
      buyerName: 'Global Denim Apparel Buyer',
      season: 'SS27 / All-Season',
      fabricSpecs: wash.fabricSuitability,
      fabricParams: {
        markerLengthYards: 9.6,
        garmentsInMarker: 6,
        warpShrinkagePct: 4.5,
        weftShrinkagePct: 3.0,
        cuttingWastagePct: 2.5,
        fabricPricePerYard: 3.45,
      },
      fabricResult: {
        netConsumptionPerPcYards: 1.6,
        grossConsumptionPerPcYards: 1.714,
        consumptionPerDozenYards: 20.568,
        fabricCostPerGarment: 5.91,
        fabricCostPerDozen: 70.92,
        shrinkageBufferRatio: 1.045,
      },
      selectedWashRecipe: wash,
      washParams: {
        garmentWeightGrams: 650,
        batchGarmentCount: 120,
        liquorRatio: 8,
        energyAndSteamPerBatch: 22.0,
        manualDryProcessCostPerPc: 0.45,
      },
      washResult: {
        totalBatchFabricWeightKg: 78,
        totalWaterLitersPerBatch: 2184,
        waterCostPerBatch: 5.46,
        enzymeCostPerBatch: 7.96,
        chemicalCostPerGarment: 0.42,
        totalWashCostPerGarment: wash.estimatedCostPerPc,
        totalWashCostPerDozen: Number((wash.estimatedCostPerPc * 12).toFixed(2)),
        waterPerGarmentLiters: 18.2,
      },
      eimResult: {
        score: wash.eimLevel === 'Low' ? 24 : wash.eimLevel === 'Medium' ? 48 : 74,
        rating:
          wash.eimLevel === 'Low'
            ? 'Green (Low Impact)'
            : wash.eimLevel === 'Medium'
            ? 'Amber (Medium Impact)'
            : 'Red (High Impact)',
        waterRating: wash.eimLevel === 'Low' ? 'Low' : 'Medium',
        energyRating: 'Medium',
        recommendations: [wash.merchandiserTip],
      },
      merchandiserNotes: `Technical wash tech pack approved for bulk production. Target shade: ${wash.targetShade}.`,
    });
  };

  const filteredWashes = WASH_TYPES.filter((w) => {
    const matchesSearch =
      w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.targetShade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.badge.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || w.category === selectedCategory;
    const matchesEim = selectedEim === 'All' || w.eimLevel === selectedEim;

    return matchesSearch && matchesCategory && matchesEim;
  });

  return (
    <div className="space-y-5">
      {/* Compact Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-zinc-900 p-4 md:p-5 border border-zinc-800 shadow-lg">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-zinc-950 border border-zinc-700 text-amber-400 text-[11px] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            {lang === 'bn'
              ? 'মডিউল ৪: কমার্শিয়াল ওয়াশ ক্যাটালগ ও কী-স্টেপস ফ্লো'
              : 'Module 4: Commercial Wash Directory & Key Steps Flow'}
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-zinc-100 tracking-tight">
            {lang === 'bn'
              ? '৮টি প্রধান ডেনিম ওয়াশের সংক্ষিপ্ত কী-স্টেপস ও কেমিক্যাল রেসিপি'
              : '8 Essential Denim Washes with Concise Key Steps & Chemical Recipes'}
          </h2>
          <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
            {lang === 'bn'
              ? 'ইন্ডাস্ট্রিয়াল লন্ড্রি প্রাকটিস অনুযায়ী প্রতিটি ওয়াশের নিচে সংক্ষিপ্ত "KEY STEPS" (০১ → ০২ → ০৩...) ফ্লো স্ট্রিপ, এফওবি (FOB) খরচ এবং সুনির্দিষ্ট কাপড়ের স্পেসিফিকেশন দেওয়া হলো।'
              : 'Each commercial wash card features a concise numbered "KEY STEPS" flow strip, FOB benchmark cost, and fabric suitability.'}
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-zinc-900 px-4 py-2.5 rounded-xl border border-zinc-800">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-zinc-400 flex items-center gap-1.5 mr-1">
            <Filter className="w-3.5 h-3.5" />
            {lang === 'bn' ? 'ক্যাটাগরি:' : 'Category:'}
          </span>
          {['All', 'Classic', 'Vintage', 'High-Fashion', 'Eco-Sustainable'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-zinc-100 text-zinc-950 font-bold shadow-xs'
                  : 'bg-zinc-950 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-zinc-400">EIM Impact:</span>
          {['All', 'Low', 'Medium', 'High'].map((eim) => (
            <button
              key={eim}
              onClick={() => setSelectedEim(eim)}
              className={`text-xs px-2.5 py-1 rounded-md font-mono transition-all cursor-pointer ${
                selectedEim === eim
                  ? eim === 'Low'
                    ? 'bg-emerald-600 text-white'
                    : eim === 'Medium'
                    ? 'bg-amber-600 text-white'
                    : eim === 'High'
                    ? 'bg-red-600 text-white'
                    : 'bg-zinc-100 text-zinc-950 font-bold'
                  : 'bg-zinc-950 text-zinc-400 hover:text-zinc-100'
              }`}
            >
              {eim === 'Low' ? 'Green (Low)' : eim === 'Medium' ? 'Amber (Med)' : eim === 'High' ? 'Red (High)' : 'All'}
            </button>
          ))}
        </div>
      </div>

      {/* Wash Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredWashes.map((wash) => {
          const conciseSteps = getConciseKeyStepsForWash(wash.id, lang);
          return (
            <div
              key={wash.id}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden flex flex-col justify-between hover:border-zinc-700 hover:shadow-xl transition-all group"
            >
              <div>
                {/* Realistic Wash Texture Swatch Header */}
                <div className="p-3 bg-zinc-950 border-b border-zinc-800 space-y-2">
                  <WashTexturePreview
                    washId={wash.id}
                    washName={wash.name}
                    targetShade={wash.targetShade}
                    isDetailed={false}
                  />
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-black/80 text-zinc-100 border border-zinc-700">
                      {wash.badge}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-bold shadow-xs ${
                        wash.eimLevel === 'Low'
                          ? 'bg-emerald-500 text-zinc-950'
                          : wash.eimLevel === 'Medium'
                          ? 'bg-amber-400 text-zinc-950'
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      EIM {wash.eimLevel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3.5">
                  <div>
                    <h4 className="text-base font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                      {wash.name}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                      {wash.description}
                    </p>
                  </div>

                  {/* Pricing and Fabric */}
                  <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">
                        {lang === 'bn' ? 'ওয়াশ এফওবি (FOB):' : 'Est. Wash FOB:'}
                      </span>
                      <span className="font-mono font-bold text-emerald-400">
                        ${wash.estimatedCostPerPc.toFixed(2)} / pc
                      </span>
                    </div>
                    <div className="text-[11px] text-zinc-400 border-t border-zinc-800 pt-1">
                      <span className="text-sky-400 font-semibold block">
                        {lang === 'bn' ? 'উপযুক্ত কাপড়:' : 'Fabric Base:'}
                      </span>
                      <span className="truncate block">{wash.fabricSuitability}</span>
                    </div>
                  </div>

                  {/* Concise "KEY STEPS" Strip */}
                  <div className="bg-zinc-950 p-2.5 rounded-xl border border-zinc-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase text-amber-400 font-extrabold tracking-wider">
                        {lang === 'bn' ? 'সংক্ষিপ্ত কী-স্টেপস (KEY STEPS):' : 'KEY STEPS SEQUENCE:'}
                      </span>
                      <span className="text-[9px] font-mono text-zinc-400">
                        {conciseSteps.length} {lang === 'bn' ? 'ধাপ' : 'steps'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {conciseSteps.map((st, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded-xs bg-zinc-900 text-zinc-200 border border-zinc-800"
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex gap-2">
                <button
                  onClick={() => setActiveRecipeModal(wash)}
                  className="flex-1 py-2.5 px-3 bg-zinc-950 hover:bg-zinc-100 text-zinc-200 hover:text-zinc-950 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border border-zinc-700 transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t.actions.viewRecipe}</span>
                </button>
                <button
                  onClick={() => handleExportSingleRecipePdf(wash)}
                  className="py-2.5 px-3 bg-zinc-950 hover:bg-amber-500 text-zinc-300 hover:text-zinc-950 rounded-xl text-xs font-bold flex items-center justify-center gap-1 border border-zinc-700 hover:border-amber-400 transition-all cursor-pointer shadow-xs"
                  title="Export Recipe as PDF"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span className="text-[10px]">PDF</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Laundry Recipe Modal Dialog */}
      {activeRecipeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-800 bg-zinc-950 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-sm bg-zinc-900 text-amber-400 border border-zinc-700 font-mono text-[10px] font-bold uppercase">
                    Tech Pack Recipe Sheet
                  </span>
                  <span className="font-mono text-xs text-emerald-400 font-bold">
                    Est. FOB: ${activeRecipeModal.estimatedCostPerPc.toFixed(2)}/pc
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-100">{activeRecipeModal.name}</h3>
                <p className="text-xs text-zinc-400 mt-1">{activeRecipeModal.description}</p>
              </div>
              <button
                onClick={() => setActiveRecipeModal(null)}
                className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Detailed Macro Texture Swatch */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">
                  {lang === 'bn' ? 'ম্যাক্রো ফ্যাব্রিক টেক্সচার সোয়াচ (Macro Wash Swatch)' : 'Authentic Macro Fabric Wash Swatch'}:
                </span>
                <WashTexturePreview
                  washId={activeRecipeModal.id}
                  washName={activeRecipeModal.name}
                  targetShade={activeRecipeModal.targetShade}
                  isDetailed={true}
                />
              </div>

              {/* Recipe Steps Table */}
              <div>
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Standard Wet Wash Process Sequence & Dosages
                </h4>

                <div className="space-y-3">
                  {activeRecipeModal.recipeSteps.map((step, sIdx) => (
                    <div key={sIdx} className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-zinc-800">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-md bg-zinc-100 text-zinc-950 font-mono text-[10px] flex items-center justify-center font-bold">
                            {sIdx + 1}
                          </span>
                          <span className="font-bold text-sm text-zinc-100">{step.stepName}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs font-mono">
                          <span className="text-sky-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {step.durationMinutes} min
                          </span>
                          <span className="text-amber-400 flex items-center gap-1">
                            <Thermometer className="w-3 h-3" /> {step.temperature}
                          </span>
                          <span className="text-emerald-400">pH: {step.phLevel}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="text-zinc-500 block text-[10px] font-mono">CHEMICAL & DOSAGE:</span>
                          <span className="font-semibold text-amber-300 font-mono">{step.chemical}</span>
                          <span className="text-zinc-400 block mt-0.5">Ratio / Dosage: {step.dosage}</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px] font-mono">TECHNICAL NOTES:</span>
                          <span className="text-zinc-300">{step.notes}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dry Process Details */}
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <h5 className="text-xs font-bold text-zinc-300 mb-2 font-mono uppercase">
                  Required Dry Finishing Operations:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activeRecipeModal.dryProcesses.map((dry, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium"
                    >
                      {dry}
                    </span>
                  ))}
                </div>
              </div>

              {/* Merchandiser Pro Tip */}
              <div className="bg-zinc-950 p-4 rounded-xl border border-emerald-500/30">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Merchandiser Commercial Sourcing Tip:
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {activeRecipeModal.merchandiserTip}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-zinc-800 bg-zinc-950 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] text-zinc-400 font-mono">
                Standard Industrial Laundry Spec &bull; Ready for Bulk Production
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveRecipeModal(null)}
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  {t.actions.close}
                </button>
                <button
                  onClick={() => {
                    handleExportSingleRecipePdf(activeRecipeModal);
                  }}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-lg text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <FileDown className="w-4 h-4" />
                  <span>{t.actions.exportPdf}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
