import React, { useState } from 'react';
import {
  ALL_GARMENT_CONSTRUCTIONS,
  GarmentConstruction,
  GarmentPart,
} from '../data/garmentConstructionData.ts';
import {
  Scissors,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldAlert,
  Info,
  Sliders,
  Filter,
  Package,
} from 'lucide-react';
import { Language } from '../utils/i18n.ts';

interface MultiGarmentStudioProps {
  lang?: Language;
}

export const MultiGarmentStudio: React.FC<MultiGarmentStudioProps> = ({ lang = 'bn' }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Denim' | 'Non-Denim'>('All');
  const [selectedGarmentId, setSelectedGarmentId] = useState<string>('trucker-jacket');

  const filteredGarments = ALL_GARMENT_CONSTRUCTIONS.filter(
    (g) => selectedCategory === 'All' || g.category === selectedCategory
  );

  const activeGarment =
    ALL_GARMENT_CONSTRUCTIONS.find((g) => g.id === selectedGarmentId) ||
    ALL_GARMENT_CONSTRUCTIONS[0];

  return (
    <div className="space-y-6">
      {/* Category Filter and Garment Ribbon */}
      <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Package className="w-4 h-4 text-indigo-400" />
              {lang === 'bn'
                ? 'গার্মেন্টস সুয়িং কনস্ট্রাকশন ক্যাটালগ (ডেনিম ও নন-ডেনিম)'
                : 'Garment Sewing Construction Catalog (Denim & Non-Denim)'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {lang === 'bn'
                ? 'জ্যাকেট, শ্যাকেট, শর্টস, ওভারঅল এবং নন-ডেনিম চিনো, কার্গো ও ডাক ক্যানভাস আইটেম'
                : 'Jackets, Shackets, Shorts, Overalls plus Non-Denim Chinos, Cargos & Duck Canvas'}
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'bn' ? 'সকল আইটেম' : 'All Items'} ({ALL_GARMENT_CONSTRUCTIONS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('Denim')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer ${
                selectedCategory === 'Denim'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'bn' ? 'ডেনিম আইটেম' : 'Denim Items'} (6)
            </button>
            <button
              onClick={() => setSelectedCategory('Non-Denim')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer ${
                selectedCategory === 'Non-Denim'
                  ? 'bg-amber-600 text-white shadow-xs font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'bn' ? 'নন-ডেনিম আইটেম' : 'Non-Denim Items'} (4)
            </button>
          </div>
        </div>

        {/* Garment Selector Buttons List */}
        <div className="flex flex-wrap gap-2">
          {filteredGarments.map((garment) => {
            const isSelected = selectedGarmentId === garment.id;
            return (
              <button
                key={garment.id}
                onClick={() => setSelectedGarmentId(garment.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                  isSelected
                    ? garment.category === 'Denim'
                      ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30 ring-2 ring-indigo-400/30'
                      : 'bg-amber-600 text-white border-amber-400 shadow-md shadow-amber-600/30 ring-2 ring-amber-400/30'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-xs font-mono font-bold ${
                    garment.category === 'Denim'
                      ? 'bg-blue-950 text-blue-300 border border-blue-700/50'
                      : 'bg-amber-950 text-amber-300 border border-amber-700/50'
                  }`}
                >
                  {garment.category}
                </span>
                <span>{garment.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Garment Deep Dive Specification Card */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 md:p-8 shadow-xl space-y-6">
        {/* Header Summary */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider ${
                  activeGarment.category === 'Denim'
                    ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                }`}
              >
                {activeGarment.category} Engineering &bull; {activeGarment.garmentType}
              </span>
              <span className="font-mono text-xs text-slate-400">
                Silhouette: {activeGarment.silhouette}
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">{activeGarment.name}</h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800 text-xs font-mono">
              <span className="text-slate-400 block text-[10px] uppercase">
                {lang === 'bn' ? 'ফ্যাব্রিক ওজন' : 'Fabric Weight'}
              </span>
              <span className="text-amber-300 font-bold">{activeGarment.fabricWeight}</span>
            </div>
            <div className="bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800 text-xs font-mono">
              <span className="text-slate-400 block text-[10px] uppercase">
                {lang === 'bn' ? 'প্রস্তাবিত ওয়াশ' : 'Typical Wash'}
              </span>
              <span className="text-cyan-300 font-bold truncate max-w-[180px] block">
                {activeGarment.typicalWash}
              </span>
            </div>
          </div>
        </div>

        {/* Key Features Bullet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
              {lang === 'bn' ? 'প্রধান গঠনগত বৈশিষ্ট্য' : 'Key Structural & Silhouette Features'}:
            </span>
            <div className="space-y-1.5">
              {activeGarment.keyFeatures.map((feat, idx) => (
                <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
              {lang === 'bn' ? 'মার্চেন্ডাইজার সোর্সিং গাইডলাইন' : 'Merchandiser Commercial Rule'}:
            </span>
            <p className="text-xs text-amber-200/90 leading-relaxed font-medium">
              {activeGarment.merchandiserTip}
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
              <span className="text-indigo-300 font-semibold">Standard Base: </span>
              {activeGarment.standardFabric}
            </div>
          </div>
        </div>

        {/* Specialized Sewing Machinery & Part Operations */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            {lang === 'bn'
              ? 'নির্দিষ্ট পার্টস, সেলাই মেশিন মডেল ও সুতার স্পেসিফিকেশন'
              : 'Component Operations, Specialized Machines & Thread Specs'}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeGarment.parts.map((part, pIdx) => (
              <div
                key={pIdx}
                className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-2">
                    <span className="font-bold text-sm text-indigo-300">{part.partName}</span>
                    <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded-sm border border-indigo-800/60 font-bold">
                      {part.spi}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">মেশিন মডেল / টাইপ:</span>
                      <span className="text-white font-semibold text-[11px]">{part.machine}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">ISO স্টিচ ক্লাস:</span>
                      <span className="text-cyan-300 font-mono text-[11px]">{part.stitchClass}</span>
                    </div>
                  </div>

                  <div className="text-xs text-amber-300 font-mono text-[11px] mb-2">
                    সুতা: {part.threadTex}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{part.description}</p>
                </div>

                <div className="pt-2 border-t border-slate-800/60 bg-slate-900/50 p-2.5 rounded-lg">
                  <div className="flex items-center gap-1.5 text-red-400 text-[11px] font-bold mb-0.5">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    {lang === 'bn' ? 'কিউএ ইন্সপেকশন পয়েন্ট' : 'Audit Checkpoint'}:
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">{part.checkpoint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Pack Measurement Tolerances Table */}
        <div className="space-y-3 pt-4 border-t border-slate-800">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Sliders className="w-4 h-4 text-emerald-400" />
            {lang === 'bn'
              ? 'টেক প্যাক সাইজ স্পেক ও মেজারমেন্ট টলারেন্স'
              : 'Tech Pack Size Specs & Inspection Tolerances'}
          </h4>

          <div className="overflow-x-auto bg-slate-950 rounded-xl border border-slate-800">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase">
                  <th className="py-2.5 px-4">{lang === 'bn' ? 'মেজারমেন্ট পয়েন্ট' : 'Point of Measurement'}</th>
                  <th className="py-2.5 px-4 text-emerald-400 font-bold">{lang === 'bn' ? 'অনুমোদিত টলারেন্স' : 'Allowed Tolerance'}</th>
                  <th className="py-2.5 px-4 text-slate-400">{lang === 'bn' ? 'স্ট্যান্ডার্ড' : 'Standard'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {activeGarment.techPackTolerances.map((tol, tIdx) => (
                  <tr key={tIdx} className="hover:bg-slate-900/50">
                    <td className="py-2 px-4 font-semibold text-white">{tol.measurement}</td>
                    <td className="py-2 px-4 font-mono font-bold text-emerald-400">{tol.tolerance}</td>
                    <td className="py-2 px-4 text-slate-400 text-[11px]">ASTM D6193 Certified</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
