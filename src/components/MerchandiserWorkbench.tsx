import React, { useState } from 'react';
import {
  convertGsmToOz,
  convertOzToGsm,
  classifyDenimWeight,
  calculateFabricConsumption,
  calculateWashCost,
  assessEIMScore,
  FabricConsumptionParams,
  WashCostParams,
  EIMAssessmentParams,
} from '../utils/denimCalculations.ts';
import {
  Calculator,
  Layers,
  Droplets,
  DollarSign,
  Leaf,
  ShieldCheck,
  AlertTriangle,
  ArrowRightLeft,
  Sparkles,
  FileDown,
  Printer,
  X,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import { WASH_TYPES, WashType } from '../data/denimData.ts';
import { exportAndDownloadTechPackPdf, TechPackPdfOptions } from '../utils/pdfExport.ts';
import { Language, TRANSLATIONS } from '../utils/i18n.ts';

interface MerchandiserWorkbenchProps {
  lang?: Language;
}

export const MerchandiserWorkbench: React.FC<MerchandiserWorkbenchProps> = ({ lang = 'en' }) => {
  const t = TRANSLATIONS[lang];
  const [activeTab, setActiveTab] = useState<'fabric' | 'gsm' | 'wash-eim'>('fabric');
  const [showPdfModal, setShowPdfModal] = useState<boolean>(false);

  // PDF Export Metadata State
  const [pdfMeta, setPdfMeta] = useState({
    styleName: '5-Pocket Classic Heritage Straight',
    styleCode: 'DNM-2026-REG',
    buyerName: "Levi's / Contemporary Global",
    season: 'SS27 / Main Production',
    fabricSpecs: '12.0 oz (407 GSM) 3/1 RHT Ring x Ring Selvedge',
    selectedWashId: 'mid-stone-enzyme',
    merchandiserNotes: 'Approve after pre-production pilot wash meeting ASTM D1424 tear test standards (>1800g).',
  });

  // Fabric Consumption State
  const [fabricParams, setFabricParams] = useState<FabricConsumptionParams>({
    markerLengthYards: 9.6,
    garmentsInMarker: 6,
    warpShrinkagePct: 4.5,
    weftShrinkagePct: 3.0,
    cuttingWastagePct: 2.5,
    fabricPricePerYard: 3.45,
  });

  // GSM / Ounce Converter State
  const [currentGsm, setCurrentGsm] = useState<number>(407); // ~12.0 oz
  const [currentOz, setCurrentOz] = useState<number>(12.0);

  // Wash & EIM Costing State
  const [washParams, setWashParams] = useState<WashCostParams>({
    garmentWeightGrams: 650,
    batchGarmentCount: 120,
    liquorRatio: 8,
    waterCostPerCubicMeter: 2.5,
    enzymeCostPerKg: 8.5,
    enzymeDosageGramsPerLiter: 1.5,
    auxiliariesCostPerPc: 0.35,
    energyAndSteamPerBatch: 22.0,
    manualDryProcessCostPerPc: 0.5,
  });

  const [eimParams, setEimParams] = useState<EIMAssessmentParams>({
    waterLitersPerGarment: 38,
    energyKwhPerGarment: 1.8,
    usesHazardousChemicals: false,
    workerHealthRisk: 'Low',
  });

  // Computed results
  const fabricResult = calculateFabricConsumption(fabricParams);
  const weightClass = classifyDenimWeight(currentOz);
  const washResult = calculateWashCost(washParams);
  const eimResult = assessEIMScore(eimParams);

  const handleGsmChange = (gsm: number) => {
    setCurrentGsm(gsm);
    setCurrentOz(convertGsmToOz(gsm));
  };

  const handleOzChange = (oz: number) => {
    setCurrentOz(oz);
    setCurrentGsm(convertOzToGsm(oz));
  };

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-6 md:p-8 border border-indigo-500/20 shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5 text-indigo-400" />
            {lang === 'bn' ? 'মডিউল ৫: মার্চেন্ডাইজার ইঞ্জিনিয়ারিং ওয়ার্কবেঞ্চ' : 'Module 5: Merchandiser Engineering Workbench'}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {t.workbench.title}
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            {t.workbench.subtitle}
          </p>
        </div>
      </div>

      {/* Navigation Sub-Tabs & PDF Export Action */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 w-fit">
          <button
            onClick={() => setActiveTab('fabric')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'fabric'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            {t.workbench.fabricTab}
          </button>
          <button
            onClick={() => setActiveTab('gsm')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'gsm'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ArrowRightLeft className="w-4 h-4" />
            {t.workbench.gsmTab}
          </button>
          <button
            onClick={() => setActiveTab('wash-eim')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'wash-eim'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Droplets className="w-4 h-4" />
            {t.workbench.washTab}
          </button>
        </div>

        {/* Highlighted PDF Export Button */}
        <button
          onClick={() => setShowPdfModal(true)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-indigo-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 border border-white/20 transition-all cursor-pointer active:scale-95"
        >
          <FileDown className="w-4 h-4 text-white" />
          <span>{t.workbench.exportButton}</span>
          <span className="bg-black/40 text-[9px] px-1.5 py-0.5 rounded-sm font-mono tracking-wider border border-white/30">
            PDF
          </span>
        </button>
      </div>

      {/* TAB 1: Fabric Consumption Calculator */}
      {activeTab === 'fabric' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Inputs */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              {lang === 'bn' ? 'মার্কার কনজাম্পশন ও শ্রিংকেজ ইনপুট' : 'Marker Consumption & Shrinkage Inputs'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {lang === 'bn' ? 'মার্কার দৈর্ঘ্য (গজ / Yards)' : 'Marker Length (Yards)'}
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={fabricParams.markerLengthYards}
                  onChange={(e) =>
                    setFabricParams({ ...fabricParams, markerLengthYards: Number(e.target.value) })
                  }
                  className="w-full bg-slate-950 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 font-mono focus:border-indigo-500"
                />
                <span className="text-[10px] text-slate-500">
                  {lang === 'bn' ? 'ক্যাড মার্কারের মোট দৈর্ঘ্য' : 'Total length of cad marker'}
                </span>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {lang === 'bn' ? 'মার্কারে মোট পিস সংখ্যা (Pcs)' : 'Garments in Marker (Pcs)'}
                </label>
                <input
                  type="number"
                  step="1"
                  value={fabricParams.garmentsInMarker}
                  onChange={(e) =>
                    setFabricParams({ ...fabricParams, garmentsInMarker: Number(e.target.value) })
                  }
                  className="w-full bg-slate-950 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 font-mono focus:border-indigo-500"
                />
                <span className="text-[10px] text-slate-500">
                  {lang === 'bn' ? 'যেমন: ৬-ওয়ে বা ৮-ওয়ে মার্কার' : 'e.g. 6-way or 8-way marker'}
                </span>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {lang === 'bn' ? 'ওয়ার্প শ্রিংকেজ / সংকোচন (%)' : 'Warp Shrinkage (%)'}
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={fabricParams.warpShrinkagePct}
                  onChange={(e) =>
                    setFabricParams({ ...fabricParams, warpShrinkagePct: Number(e.target.value) })
                  }
                  className="w-full bg-slate-950 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 font-mono focus:border-indigo-500"
                />
                <span className="text-[10px] text-slate-500">
                  {lang === 'bn' ? 'ওয়াশের পর লম্বায় সংকোচনের শতকরা হার' : 'Lengthwise shrinkage after wash'}
                </span>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {lang === 'bn' ? 'কাটিং অপচয় ও এন্ড লস (%)' : 'Cutting Wastage & End Loss (%)'}
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={fabricParams.cuttingWastagePct}
                  onChange={(e) =>
                    setFabricParams({ ...fabricParams, cuttingWastagePct: Number(e.target.value) })
                  }
                  className="w-full bg-slate-950 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 font-mono focus:border-indigo-500"
                />
                <span className="text-[10px] text-slate-500">
                  {lang === 'bn' ? 'এন্ড বিট, স্প্লাইসিং ও লে অপচয়' : 'End bits, splicing & lay loss'}
                </span>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {lang === 'bn' ? 'ফ্যাব্রিক মূল্য ($ / গজ)' : 'Fabric Price ($ / Yard)'}
                </label>
                <input
                  type="number"
                  step="0.05"
                  value={fabricParams.fabricPricePerYard}
                  onChange={(e) =>
                    setFabricParams({ ...fabricParams, fabricPricePerYard: Number(e.target.value) })
                  }
                  className="w-full bg-slate-950 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 font-mono focus:border-indigo-500"
                />
                <span className="text-[10px] text-slate-500">
                  {lang === 'bn' ? 'মিল ইনভয়েস এফওবি (FOB) মূল্য' : 'Mill invoice FOB price'}
                </span>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl border border-indigo-900/40 p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-indigo-400 font-bold">
                  {lang === 'bn' ? 'মার্চেন্ডাইজার ইল্ড আউটপুট' : 'Merchandiser Yield Readout'}
                </span>
                <span className="text-xs font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded-sm">
                  {lang === 'bn' ? `বাফার অনুপাত: ${fabricResult.shrinkageBufferRatio}x` : `Buffer: ${fabricResult.shrinkageBufferRatio}x`}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">
                    {t.workbench.netConsumption}
                  </span>
                  <div className="text-xl font-bold font-mono text-white mt-1">
                    {fabricResult.netConsumptionPerPcYards} <span className="text-xs text-slate-400">{lang === 'bn' ? 'গজ' : 'yds'}</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-indigo-500/30">
                  <span className="text-[10px] font-mono text-indigo-400 block uppercase font-bold">
                    {t.workbench.grossConsumption}
                  </span>
                  <div className="text-xl font-bold font-mono text-cyan-300 mt-1">
                    {fabricResult.grossConsumptionPerPcYards} <span className="text-xs text-slate-400">{lang === 'bn' ? 'গজ' : 'yds'}</span>
                  </div>
                  <span className="text-[10px] text-slate-500">
                    {lang === 'bn' ? 'শ্রিংকেজ ও কাটিং লস সহ' : 'Includes shrinkage & cutting loss'}
                  </span>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">
                    {t.workbench.consumptionPerDzn}
                  </span>
                  <div className="text-xl font-bold font-mono text-amber-300 mt-1">
                    {fabricResult.consumptionPerDozenYards} <span className="text-xs text-slate-400">{lang === 'bn' ? 'গজ/ডজন' : 'yds/dz'}</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                  <span className="text-[10px] font-mono text-emerald-400 block uppercase font-bold">
                    {t.workbench.fabricCostPerGarment}
                  </span>
                  <div className="text-2xl font-black font-mono text-emerald-400 mt-1">
                    ${fabricResult.fabricCostPerGarment}
                  </div>
                  <span className="text-[10px] text-slate-500">${fabricResult.fabricCostPerDozen} / {lang === 'bn' ? 'ডজন' : 'Dozen'}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="text-amber-400 font-bold block text-[11px]">
                {lang === 'bn' ? 'হিসাবের সূত্র (Formula Breakdown):' : 'Formula Breakdown:'}
              </span>
              <p className="font-mono text-[11px] text-slate-400">
                Gross = (Marker Length &divide; Pcs) &times; (1 + Warp Shrinkage%) &times; (1 + Wastage%)
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: GSM &harr; Oz Converter */}
      {activeTab === 'gsm' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-6 shadow-xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-indigo-400" />
              Bidirectional Weight Converter
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Grams per Square Meter (GSM):</span>
                  <span className="font-mono font-bold text-amber-400">{currentGsm} g/m²</span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="700"
                  step="5"
                  value={currentGsm}
                  onChange={(e) => handleGsmChange(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-2 bg-slate-950 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Ounces per Square Yard (Oz/yd²):</span>
                  <span className="font-mono font-bold text-cyan-400">{currentOz} oz</span>
                </div>
                <input
                  type="range"
                  min="4.5"
                  max="21.0"
                  step="0.1"
                  value={currentOz}
                  onChange={(e) => handleOzChange(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-2 bg-slate-950 rounded-lg cursor-pointer"
                />
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                <div>Conversion Constant: 1 oz/yd² = 33.906 g/m²</div>
                <div className="text-indigo-300 font-bold">
                  {currentGsm} GSM &divide; 33.906 = {currentOz} Oz/yd²
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl border border-indigo-900/40 p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-indigo-400 font-bold">
                  Technical Classification
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-bold">
                  {weightClass.category}
                </span>
              </div>

              <div className="space-y-4 mt-6">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                    Typical Garment End-Uses
                  </span>
                  <div className="text-xs font-semibold text-white">{weightClass.typicalGarments}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                      Recommended Needle Size
                    </span>
                    <div className="text-xs font-mono font-bold text-cyan-300">
                      {weightClass.needleSize}
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                      Target Thread Tex
                    </span>
                    <div className="text-xs font-mono font-bold text-amber-300">
                      {weightClass.threadTex}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-[11px] text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
              Merchandiser note: Fabrics &gt; 14.5 oz require high-torque sewing motors, needle cooling air blowers, and heavy-duty Union Special folders to prevent needle breakage.
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Wash Cost & EIM Simulator */}
      {activeTab === 'wash-eim' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Droplets className="w-5 h-5 text-blue-400" />
              Laundry Recipe & Batch Parameters
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Garment Weight (Grams / Pc)
                </label>
                <input
                  type="number"
                  value={washParams.garmentWeightGrams}
                  onChange={(e) =>
                    setWashParams({ ...washParams, garmentWeightGrams: Number(e.target.value) })
                  }
                  className="w-full bg-slate-950 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Batch Drum Capacity (Pcs)
                </label>
                <input
                  type="number"
                  value={washParams.batchGarmentCount}
                  onChange={(e) =>
                    setWashParams({ ...washParams, batchGarmentCount: Number(e.target.value) })
                  }
                  className="w-full bg-slate-950 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Liquor Ratio (1 : X)
                </label>
                <input
                  type="number"
                  step="1"
                  min="4"
                  max="12"
                  value={washParams.liquorRatio}
                  onChange={(e) =>
                    setWashParams({ ...washParams, liquorRatio: Number(e.target.value) })
                  }
                  className="w-full bg-slate-950 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 font-mono"
                />
                <span className="text-[10px] text-slate-500">1:8 standard, 1:5 low-liquor</span>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Dry Craft / Laser Cost ($/pc)
                </label>
                <input
                  type="number"
                  step="0.05"
                  value={washParams.manualDryProcessCostPerPc}
                  onChange={(e) =>
                    setWashParams({
                      ...washParams,
                      manualDryProcessCostPerPc: Number(e.target.value),
                    })
                  }
                  className="w-full bg-slate-950 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 font-mono"
                />
              </div>
            </div>

            {/* EIM Sliders */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-emerald-400" />
                Jeanologia EIM Simulation Factors:
              </span>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Uses Chlorine or Potassium Permanganate (PP):</span>
                <input
                  type="checkbox"
                  checked={eimParams.usesHazardousChemicals}
                  onChange={(e) =>
                    setEimParams({ ...eimParams, usesHazardousChemicals: e.target.checked })
                  }
                  className="accent-indigo-500 w-4 h-4 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Worker Exposure Risk:</span>
                <select
                  value={eimParams.workerHealthRisk}
                  onChange={(e) =>
                    setEimParams({
                      ...eimParams,
                      workerHealthRisk: e.target.value as 'Low' | 'Medium' | 'High',
                    })
                  }
                  className="bg-slate-950 text-xs text-white px-2.5 py-1 rounded-md border border-slate-700"
                >
                  <option value="Low">Low (Laser & Enclosed)</option>
                  <option value="Medium">Medium (Manual with PPE)</option>
                  <option value="High">High (Manual Sandblast/PP)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl border border-indigo-900/40 p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-indigo-400 font-bold">
                  Laundry Cost & EIM Sustainability Score
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    eimResult.rating.includes('Green')
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : eimResult.rating.includes('Amber')
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                      : 'bg-red-500/20 text-red-400 border border-red-500/40'
                  }`}
                >
                  {eimResult.rating} ({eimResult.score} pts)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                  <span className="text-[10px] font-mono text-emerald-400 block uppercase font-bold">
                    Total Wash Cost / Pc
                  </span>
                  <div className="text-2xl font-black font-mono text-emerald-400 mt-1">
                    ${washResult.totalWashCostPerGarment}
                  </div>
                  <span className="text-[10px] text-slate-500">${washResult.totalWashCostPerDozen} / Dozen</span>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">
                    Water Usage / Garment
                  </span>
                  <div className="text-xl font-bold font-mono text-cyan-300 mt-1">
                    {washResult.waterPerGarmentLiters} <span className="text-xs text-slate-400">Liters</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Total batch: {washResult.totalWaterLitersPerBatch} L</span>
                </div>
              </div>

              {/* Recommendations */}
              <div className="mt-6 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-amber-400 block">
                  Buyer Compliance & Sourcing Action:
                </span>
                {eimResult.recommendations.map((rec, rIdx) => (
                  <p key={rIdx} className="text-xs text-slate-300 leading-relaxed">
                    &bull; {rec}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PDF Export & Customization Modal Dialog */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-indigo-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header with Selvedge Line */}
            <div className="p-6 border-b border-slate-800 bg-slate-950 flex items-start justify-between relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-sm bg-red-600/90 text-white font-mono text-[10px] font-bold tracking-wider">
                    EXECUTIVE TECH PACK EXPORT
                  </span>
                  <span className="font-mono text-xs text-indigo-400">
                    ASTM D6193 &bull; Jeanologia EIM Certified
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-400" />
                  {lang === 'bn'
                    ? 'ফরম্যাটেড ডেনিম কস্টিং ও ওয়াশ রেসিপি পিডিএফ এক্সপোর্টার'
                    : 'Formatted Denim Costing & Wash Recipe PDF Exporter'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {lang === 'bn'
                    ? 'বায়ার বা ফ্যাক্টরি ম্যানেজমেন্টের জন্য সম্পূর্ণ টেকনিক্যাল স্পেসিফিকেশন শিট তৈরি ও ডাউনলোড করুন।'
                    : 'Configure garment article details and bundle industrial wash recipes into an official production PDF.'}
                </p>
              </div>

              <button
                onClick={() => setShowPdfModal(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-950 p-5 rounded-xl border border-slate-800">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    {t.workbench.styleName}:
                  </label>
                  <input
                    type="text"
                    value={pdfMeta.styleName}
                    onChange={(e) => setPdfMeta({ ...pdfMeta, styleName: e.target.value })}
                    className="w-full bg-slate-900 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 font-semibold focus:border-indigo-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    {t.workbench.styleCode}:
                  </label>
                  <input
                    type="text"
                    value={pdfMeta.styleCode}
                    onChange={(e) => setPdfMeta({ ...pdfMeta, styleCode: e.target.value })}
                    className="w-full bg-slate-900 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 font-mono text-cyan-300 focus:border-indigo-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    {t.workbench.buyerName}:
                  </label>
                  <input
                    type="text"
                    value={pdfMeta.buyerName}
                    onChange={(e) => setPdfMeta({ ...pdfMeta, buyerName: e.target.value })}
                    className="w-full bg-slate-900 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 text-amber-300 focus:border-indigo-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    {t.workbench.season}:
                  </label>
                  <input
                    type="text"
                    value={pdfMeta.season}
                    onChange={(e) => setPdfMeta({ ...pdfMeta, season: e.target.value })}
                    className="w-full bg-slate-900 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    Fabric Specs & Weight:
                  </label>
                  <input
                    type="text"
                    value={pdfMeta.fabricSpecs}
                    onChange={(e) => setPdfMeta({ ...pdfMeta, fabricSpecs: e.target.value })}
                    className="w-full bg-slate-900 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    {t.workbench.selectedRecipe}:
                  </label>
                  <select
                    value={pdfMeta.selectedWashId}
                    onChange={(e) => setPdfMeta({ ...pdfMeta, selectedWashId: e.target.value })}
                    className="w-full bg-slate-900 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 font-medium focus:border-indigo-400"
                  >
                    {WASH_TYPES.map((w) => (
                      <option key={w.id} value={w.id}>
                        {w.name} (${w.estimatedCostPerPc.toFixed(2)}/pc)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2 lg:col-span-3">
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    Merchandiser Sign-Off & Audit Instructions:
                  </label>
                  <input
                    type="text"
                    value={pdfMeta.merchandiserNotes}
                    onChange={(e) => setPdfMeta({ ...pdfMeta, merchandiserNotes: e.target.value })}
                    className="w-full bg-slate-900 text-white text-xs px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-400"
                  />
                </div>
              </div>

              {/* Live Metric Readout Strip */}
              <div className="bg-slate-950 p-5 rounded-xl border border-indigo-500/30 space-y-4">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase block">
                  Document Preview & Financial Summary:
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-mono">GROSS FABRIC YIELD</span>
                    <span className="text-sm font-bold text-cyan-300 font-mono">
                      {fabricResult.grossConsumptionPerPcYards} yds/pc
                    </span>
                    <span className="text-[10px] text-slate-500 block">({fabricResult.consumptionPerDozenYards} yds/dz)</span>
                  </div>

                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-mono">FABRIC FOB / PC</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">
                      ${fabricResult.fabricCostPerGarment.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-slate-500 block">(${fabricResult.fabricCostPerDozen.toFixed(2)}/dz)</span>
                  </div>

                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-mono">FOB WASH RECIPE</span>
                    <span className="text-sm font-bold text-indigo-300 font-mono">
                      ${washResult.totalWashCostPerGarment.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-slate-500 block">(${washResult.totalWashCostPerDozen.toFixed(2)}/dz)</span>
                  </div>

                  <div className="bg-slate-900/80 p-3 rounded-lg border border-red-500/30">
                    <span className="text-[10px] text-red-400 block font-mono font-bold">TOTAL FOB SUB-TOTAL</span>
                    <span className="text-base font-black text-white font-mono">
                      ${(fabricResult.fabricCostPerGarment + washResult.totalWashCostPerGarment).toFixed(2)}
                    </span>
                    <span className="text-[10px] text-slate-400 block">
                      (${((fabricResult.fabricCostPerGarment + washResult.totalWashCostPerGarment) * 12).toFixed(2)}/dz)
                    </span>
                  </div>
                </div>

                {/* Selected Wash Recipe Preview */}
                {(() => {
                  const selWash = WASH_TYPES.find((w) => w.id === pdfMeta.selectedWashId) || WASH_TYPES[0];
                  return (
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-xs text-slate-300 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          Bundled Wash: {selWash.name}
                        </span>
                        <span className="text-emerald-400 font-mono font-bold">
                          EIM Score: {eimResult.score} pts ({eimResult.rating})
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {selWash.recipeSteps.length} wet processing baths ({selWash.recipeSteps.map((s) => s.stepName).join(' → ')})
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Modal Footer with Download Action */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400 font-mono">
                Formats: Standard A4 PDF &bull; Auto-table Grid &bull; Ready for Email & Print
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  {t.actions.close}
                </button>
                <button
                  onClick={() => {
                    const selWash = WASH_TYPES.find((w) => w.id === pdfMeta.selectedWashId) || WASH_TYPES[0];
                    exportAndDownloadTechPackPdf({
                      styleName: pdfMeta.styleName,
                      styleCode: pdfMeta.styleCode,
                      buyerName: pdfMeta.buyerName,
                      season: pdfMeta.season,
                      fabricSpecs: pdfMeta.fabricSpecs,
                      fabricParams,
                      fabricResult,
                      selectedWashRecipe: selWash,
                      washParams,
                      washResult,
                      eimResult,
                      merchandiserNotes: pdfMeta.merchandiserNotes,
                    });
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-red-600 via-indigo-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer active:scale-95"
                >
                  <FileDown className="w-4 h-4" />
                  {t.actions.downloadPdf}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Development vs Bulk Merchandiser Playbook */}
      <MerchandiserPlaybookSection lang={lang} defaultDomain="costing-qa" />
    </div>
  );
};
