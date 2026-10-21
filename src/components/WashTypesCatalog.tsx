import React, { useState } from 'react';
import {
  WASH_TYPES,
  WashType,
} from '../data/denimData.ts';
import {
  Sparkles,
  DollarSign,
  Droplets,
  Layers,
  CheckCircle2,
  ExternalLink,
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

  const getShadeGradient = (id: string) => {
    switch (id) {
      case 'raw-rigid':
        return 'from-[#0b172a] via-[#111f38] to-[#070e1c]';
      case 'rinse-wash':
        return 'from-[#1e3a8a] via-[#172554] to-[#0f172a]';
      case 'mid-stone-enzyme':
        return 'from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a]';
      case 'bleach-ice-wash':
        return 'from-[#93c5fd] via-[#bfdbfe] to-[#60a5fa] text-slate-900';
      case 'acid-snow-wash':
        return 'from-[#e2e8f0] via-[#3b82f6] to-[#1e293b] text-slate-900';
      case 'vintage-dirty-wash':
        return 'from-[#78716c] via-[#44403c] to-[#1c1917]';
      case 'eco-laser-ozone':
        return 'from-[#0d9488] via-[#0f766e] to-[#115e59]';
      case 'black-to-grey':
        return 'from-[#52525b] via-[#27272a] to-[#18181b]';
      default:
        return 'from-indigo-900 to-slate-900';
    }
  };

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-6 md:p-8 border border-indigo-500/20 shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Module 4: Commercial Wash Directory & Laundry Recipes
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Comprehensive Types of Wash & Chemical Recipes
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Every denim wash represents a unique formulation of water, mechanical action, temperature, and enzymes.
            Review complete laundry step sequences, FOB cost benchmarks, and fabric requirements for the 8 industry pillars.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mr-1">
            <Filter className="w-3.5 h-3.5" />
            Category:
          </span>
          {['All', 'Classic', 'Vintage', 'High-Fashion', 'Eco-Sustainable'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-400">EIM Impact:</span>
          {['All', 'Low', 'Medium', 'High'].map((eim) => (
            <button
              key={eim}
              onClick={() => setSelectedEim(eim)}
              className={`text-xs px-2.5 py-1 rounded-md font-mono transition-all ${
                selectedEim === eim
                  ? eim === 'Low'
                    ? 'bg-emerald-600 text-white'
                    : eim === 'Medium'
                    ? 'bg-amber-600 text-white'
                    : eim === 'High'
                    ? 'bg-red-600 text-white'
                    : 'bg-indigo-600 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-white'
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
          const isBleachOrLight = wash.id === 'bleach-ice-wash' || wash.id === 'acid-snow-wash';
          return (
            <div
              key={wash.id}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-xl transition-all group"
            >
              <div>
                {/* Realistic Wash Texture Swatch Header */}
                <div className="p-3 bg-slate-950 border-b border-slate-800 space-y-2">
                  <WashTexturePreview
                    washId={wash.id}
                    washName={wash.name}
                    targetShade={wash.targetShade}
                    isDetailed={false}
                  />
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-black/80 text-white border border-slate-700">
                      {wash.badge}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold shadow-sm ${
                        wash.eimLevel === 'Low'
                          ? 'bg-emerald-500 text-slate-950'
                          : wash.eimLevel === 'Medium'
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      EIM {wash.eimLevel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {wash.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {wash.description}
                    </p>
                  </div>

                  {/* Pricing and Fabric */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Est. Wash FOB Cost:</span>
                      <span className="font-mono font-bold text-emerald-400">
                        ${wash.estimatedCostPerPc.toFixed(2)} / pc
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 border-t border-slate-800/60 pt-1.5">
                      <span className="text-indigo-300 font-semibold block">Fabric Base:</span>
                      <span className="truncate block">{wash.fabricSuitability}</span>
                    </div>
                  </div>

                  {/* Key Features Bullet List */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                      Characteristics:
                    </span>
                    {wash.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex gap-2">
                <button
                  onClick={() => setActiveRecipeModal(wash)}
                  className="flex-1 py-2.5 px-3 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border border-indigo-500/30 transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t.actions.viewRecipe}</span>
                </button>
                <button
                  onClick={() => handleExportSingleRecipePdf(wash)}
                  className="py-2.5 px-3 bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 border border-slate-700 hover:border-red-500 transition-all cursor-pointer shadow-sm"
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
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 bg-slate-950 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-sm bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono text-[10px] font-bold uppercase">
                    Tech Pack Recipe Sheet
                  </span>
                  <span className="font-mono text-xs text-emerald-400 font-bold">
                    Est. FOB: ${activeRecipeModal.estimatedCostPerPc.toFixed(2)}/pc
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{activeRecipeModal.name}</h3>
                <p className="text-xs text-slate-400 mt-1">{activeRecipeModal.description}</p>
              </div>
              <button
                onClick={() => setActiveRecipeModal(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Detailed Macro Texture Swatch */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
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
                    <div key={sIdx} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-800/80">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-mono text-[10px] flex items-center justify-center font-bold">
                            {sIdx + 1}
                          </span>
                          <span className="font-bold text-sm text-white">{step.stepName}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs font-mono">
                          <span className="text-cyan-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {step.durationMinutes} min
                          </span>
                          <span className="text-amber-400 flex items-center gap-1">
                            <Thermometer className="w-3 h-3" /> {step.temperature}
                          </span>
                          <span className="text-indigo-400">pH: {step.phLevel}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="text-slate-400 block text-[10px] font-mono">CHEMICAL & DOSAGE:</span>
                          <span className="font-semibold text-indigo-300 font-mono">{step.chemical}</span>
                          <span className="text-slate-400 block mt-0.5">Ratio / Dosage: {step.dosage}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] font-mono">TECHNICAL NOTES:</span>
                          <span className="text-slate-300">{step.notes}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dry Process Details */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <h5 className="text-xs font-bold text-slate-300 mb-2 font-mono uppercase">
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
              <div className="bg-indigo-950/40 p-4 rounded-xl border border-indigo-500/30">
                <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold mb-1">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  Merchandiser Commercial Sourcing Tip:
                </div>
                <p className="text-xs text-indigo-200/90 leading-relaxed">
                  {activeRecipeModal.merchandiserTip}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400 font-mono">
                Standard Industrial Laundry Spec &bull; Ready for Bulk Production
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveRecipeModal(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  {t.actions.close}
                </button>
                <button
                  onClick={() => {
                    handleExportSingleRecipePdf(activeRecipeModal);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-red-600 via-indigo-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
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
