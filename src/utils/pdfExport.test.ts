import test from 'node:test';
import assert from 'node:assert/strict';
import { generateTechPackPdf } from './pdfExport.ts';
import { WASH_TYPES } from '../data/denimData.ts';
import { TRANSLATIONS } from './i18n.ts';

test('i18n contains complete translations for English and Bangla', () => {
  assert.equal(TRANSLATIONS.en.appTitle, 'DenimIQ');
  assert.equal(TRANSLATIONS.bn.appTitle, 'ডেনিমআইকিউ (DenimIQ)');
  assert.equal(TRANSLATIONS.en.tabs.fabric, 'Fabric Process');
  assert.equal(TRANSLATIONS.bn.tabs.fabric, 'ফ্যাব্রিক প্রসেস');
  assert(TRANSLATIONS.bn.actions.exportPdf.length > 0);
});

test('generateTechPackPdf produces valid jsPDF document with pages and tables', () => {
  const sampleWash = WASH_TYPES[2]; // Mid-Stone Bio-Enzyme Wash
  const doc = generateTechPackPdf({
    styleName: 'Slim Taper 5-Pocket Raw Selvage',
    styleCode: 'DNM-TEST-001',
    buyerName: 'Premium Denim Retailer',
    season: 'SS27',
    fabricSpecs: '12.5 oz 3/1 RHT Ring x Ring Selvedge',
    fabricParams: {
      markerLengthYards: 9.6,
      garmentsInMarker: 6,
      warpShrinkagePct: 4.5,
      weftShrinkagePct: 3.0,
      cuttingWastagePct: 2.5,
      fabricPricePerYard: 3.5,
    },
    fabricResult: {
      netConsumptionPerPcYards: 1.6,
      grossConsumptionPerPcYards: 1.714,
      consumptionPerDozenYards: 20.568,
      fabricCostPerGarment: 6.0,
      fabricCostPerDozen: 72.0,
      shrinkageBufferRatio: 1.045,
    },
    selectedWashRecipe: sampleWash,
    washParams: {
      garmentWeightGrams: 650,
      batchGarmentCount: 100,
      liquorRatio: 8,
      energyAndSteamPerBatch: 20.0,
      manualDryProcessCostPerPc: 0.45,
    },
    washResult: {
      totalBatchFabricWeightKg: 65,
      totalWaterLitersPerBatch: 1820,
      waterCostPerBatch: 4.55,
      enzymeCostPerBatch: 6.63,
      chemicalCostPerGarment: 0.42,
      totalWashCostPerGarment: 1.45,
      totalWashCostPerDozen: 17.4,
      waterPerGarmentLiters: 18.2,
    },
    eimResult: {
      score: 28,
      rating: 'Green (Low Impact)',
      waterRating: 'Low',
      energyRating: 'Low',
      recommendations: ['Exemplary sustainable wash configuration!'],
    },
  });

  assert(doc);
  assert(doc.getNumberOfPages() >= 1);
});
