/**
 * Technical calculations for Denim Merchandisers:
 * - GSM & Ounce (Oz/yd²) conversions
 * - Fabric Consumption & Yield with Shrinkage & Wastage allowances
 * - Wash Recipe, Liquor Ratio & Chemical Costing
 * - Environmental Impact Measurement (EIM) Score Estimator
 * - Theoretical Fabric Weight from EPI/PPI & Yarn Counts
 */

export interface FabricConsumptionParams {
  markerLengthYards: number; // e.g. 10.5 yds for a 6-garment marker
  garmentsInMarker: number;  // e.g. 6
  warpShrinkagePct: number;  // e.g. 4.5% (lengthwise)
  weftShrinkagePct: number;  // e.g. 3.0% (widthwise)
  cuttingWastagePct: number; // e.g. 3% end-loss & cut waste
  fabricPricePerYard: number; // e.g. $3.20/yd
}

export interface FabricConsumptionResult {
  netConsumptionPerPcYards: number;
  grossConsumptionPerPcYards: number;
  consumptionPerDozenYards: number;
  fabricCostPerGarment: number;
  fabricCostPerDozen: number;
  shrinkageBufferRatio: number;
}

export function convertGsmToOz(gsm: number): number {
  if (gsm <= 0) return 0;
  // 1 oz/yd² = 33.906 g/m²
  return Number((gsm / 33.906).toFixed(2));
}

export function convertOzToGsm(oz: number): number {
  if (oz <= 0) return 0;
  return Math.round(oz * 33.906);
}

export function classifyDenimWeight(oz: number): {
  category: 'Lightweight' | 'Medium Weight' | 'Heavyweight' | 'Super Heavyweight';
  typicalGarments: string;
  needleSize: string;
  threadTex: string;
} {
  if (oz < 9) {
    return {
      category: 'Lightweight',
      typicalGarments: 'Denim shirts, western snap shirts, summer dresses, lightweight joggers',
      needleSize: 'NM 90 - 100 (Size 14 - 16)',
      threadTex: 'Tex 40 - 60',
    };
  } else if (oz <= 12) {
    return {
      category: 'Medium Weight',
      typicalGarments: 'Standard 5-pocket stretch jeans, denim jackets, dungarees, skirts',
      needleSize: 'NM 110 - 120 (Size 18 - 19)',
      threadTex: 'Tex 60 - 80',
    };
  } else if (oz <= 14.5) {
    return {
      category: 'Heavyweight',
      typicalGarments: 'Classic rigid 100% cotton heritage 5-pocket jeans, chore coats, utility vests',
      needleSize: 'NM 125 - 140 (Size 20 - 22)',
      threadTex: 'Tex 80 - 105',
    };
  } else {
    return {
      category: 'Super Heavyweight',
      typicalGarments: 'Selvedge collector jeans, raw motorcycle denim, winter heavy workwear (15 - 21+ oz)',
      needleSize: 'NM 140 - 160 (Size 22 - 23)',
      threadTex: 'Tex 105 - 135',
    };
  }
}

export function calculateFabricConsumption(params: FabricConsumptionParams): FabricConsumptionResult {
  const {
    markerLengthYards,
    garmentsInMarker,
    warpShrinkagePct,
    cuttingWastagePct,
    fabricPricePerYard,
  } = params;

  if (garmentsInMarker <= 0 || markerLengthYards <= 0) {
    return {
      netConsumptionPerPcYards: 0,
      grossConsumptionPerPcYards: 0,
      consumptionPerDozenYards: 0,
      fabricCostPerGarment: 0,
      fabricCostPerDozen: 0,
      shrinkageBufferRatio: 1,
    };
  }

  const netPerPc = markerLengthYards / garmentsInMarker;
  // Shrinkage addition: warp shrinkage affects pattern length requirements after wash
  const shrinkageFactor = 1 + Math.max(0, warpShrinkagePct) / 100;
  const wastageFactor = 1 + Math.max(0, cuttingWastagePct) / 100;

  const grossPerPc = Number((netPerPc * shrinkageFactor * wastageFactor).toFixed(3));
  const perDozen = Number((grossPerPc * 12).toFixed(3));
  const costPerGarment = Number((grossPerPc * fabricPricePerYard).toFixed(2));
  const costPerDozen = Number((perDozen * fabricPricePerYard).toFixed(2));

  return {
    netConsumptionPerPcYards: Number(netPerPc.toFixed(3)),
    grossConsumptionPerPcYards: grossPerPc,
    consumptionPerDozenYards: perDozen,
    fabricCostPerGarment: costPerGarment,
    fabricCostPerDozen: costPerDozen,
    shrinkageBufferRatio: Number(shrinkageFactor.toFixed(3)),
  };
}

export interface WashCostParams {
  garmentWeightGrams: number;  // e.g. 650g for standard pair of jeans
  batchGarmentCount: number;   // e.g. 100 pcs per washer load
  liquorRatio: number;        // e.g. 1:8 (8 liters of water per 1 kg garment)
  waterCostPerCubicMeter: number; // e.g. $2.50 per 1000L ($0.0025/L)
  enzymeCostPerKg: number;    // e.g. $8.00/kg
  enzymeDosageGramsPerLiter: number; // e.g. 1.5 g/L
  auxiliariesCostPerPc: number; // e.g. softener, desizer, anti-backstaining, stones ($0.35/pc)
  energyAndSteamPerBatch: number; // e.g. $18.00 per batch
  manualDryProcessCostPerPc: number; // e.g. whiskers, hand sanding, laser ($0.45/pc)
}

export interface WashCostResult {
  totalBatchFabricWeightKg: number;
  totalWaterLitersPerBatch: number;
  waterCostPerBatch: number;
  enzymeCostPerBatch: number;
  chemicalCostPerGarment: number;
  totalWashCostPerGarment: number;
  totalWashCostPerDozen: number;
  waterPerGarmentLiters: number;
}

export function calculateWashCost(params: WashCostParams): WashCostResult {
  const {
    garmentWeightGrams,
    batchGarmentCount,
    liquorRatio,
    waterCostPerCubicMeter,
    enzymeCostPerKg,
    enzymeDosageGramsPerLiter,
    auxiliariesCostPerPc,
    energyAndSteamPerBatch,
    manualDryProcessCostPerPc,
  } = params;

  if (batchGarmentCount <= 0 || garmentWeightGrams <= 0) {
    return {
      totalBatchFabricWeightKg: 0,
      totalWaterLitersPerBatch: 0,
      waterCostPerBatch: 0,
      enzymeCostPerBatch: 0,
      chemicalCostPerGarment: 0,
      totalWashCostPerGarment: 0,
      totalWashCostPerDozen: 0,
      waterPerGarmentLiters: 0,
    };
  }

  const totalFabricWeightKg = (garmentWeightGrams * batchGarmentCount) / 1000;
  // Multi-step wet wash uses multiple baths (desize bath, enzyme bath, rinse baths, softening).
  // A typical industrial recipe cycle utilizes ~3.5 bath equivalents:
  const totalWaterLitersPerBatch = totalFabricWeightKg * liquorRatio * 3.5;
  const waterPerGarmentLiters = totalWaterLitersPerBatch / batchGarmentCount;

  // Water cost ($ per Liter = waterCostPerCubicMeter / 1000)
  const waterCostPerLiter = waterCostPerCubicMeter / 1000;
  const waterCostPerBatch = totalWaterLitersPerBatch * waterCostPerLiter;

  // Enzyme volume for the active enzyme bath (1 bath volume)
  const enzymeBathLiters = totalFabricWeightKg * liquorRatio;
  const totalEnzymeGrams = enzymeBathLiters * enzymeDosageGramsPerLiter;
  const enzymeCostPerBatch = (totalEnzymeGrams / 1000) * enzymeCostPerKg;

  const wetChemicalPerGarment = (enzymeCostPerBatch / batchGarmentCount) + auxiliariesCostPerPc;
  const energyPerGarment = energyAndSteamPerBatch / batchGarmentCount;
  const waterPerGarmentCost = waterCostPerBatch / batchGarmentCount;

  const totalWashCostPerGarment = Number(
    (waterPerGarmentCost + wetChemicalPerGarment + energyPerGarment + manualDryProcessCostPerPc).toFixed(2)
  );

  return {
    totalBatchFabricWeightKg: Number(totalFabricWeightKg.toFixed(1)),
    totalWaterLitersPerBatch: Math.round(totalWaterLitersPerBatch),
    waterCostPerBatch: Number(waterCostPerBatch.toFixed(2)),
    enzymeCostPerBatch: Number(enzymeCostPerBatch.toFixed(2)),
    chemicalCostPerGarment: Number(wetChemicalPerGarment.toFixed(2)),
    totalWashCostPerGarment,
    totalWashCostPerDozen: Number((totalWashCostPerGarment * 12).toFixed(2)),
    waterPerGarmentLiters: Number(waterPerGarmentLiters.toFixed(1)),
  };
}

export interface EIMAssessmentParams {
  waterLitersPerGarment: number; // Jeanologia EIM scale: <35L Green, 35-65L Amber, >65L Red
  energyKwhPerGarment: number;   // <1.5 kWh Green, 1.5-3.0 kWh Amber, >3.0 kWh Red
  usesHazardousChemicals: boolean; // e.g. Potassium Permanganate (PP) or chlorine bleach vs GOTS/Oeko-Tex certified
  workerHealthRisk: 'Low' | 'Medium' | 'High'; // Manual sandblasting/PP spray = High, Laser/E-Flow = Low
}

export interface EIMAssessmentResult {
  score: number; // 0 - 100 (lower is better in Jeanologia EIM system)
  rating: 'Green (Low Impact)' | 'Amber (Medium Impact)' | 'Red (High Impact)';
  waterRating: 'Low' | 'Medium' | 'High';
  energyRating: 'Low' | 'Medium' | 'High';
  recommendations: string[];
}

export function assessEIMScore(params: EIMAssessmentParams): EIMAssessmentResult {
  const { waterLitersPerGarment, energyKwhPerGarment, usesHazardousChemicals, workerHealthRisk } = params;

  let waterPoints = 0;
  let waterRating: 'Low' | 'Medium' | 'High' = 'Low';
  if (waterLitersPerGarment <= 35) {
    waterPoints = 8;
    waterRating = 'Low';
  } else if (waterLitersPerGarment <= 65) {
    waterPoints = 22;
    waterRating = 'Medium';
  } else {
    waterPoints = 40;
    waterRating = 'High';
  }

  let energyPoints = 0;
  let energyRating: 'Low' | 'Medium' | 'High' = 'Low';
  if (energyKwhPerGarment <= 1.5) {
    energyPoints = 6;
    energyRating = 'Low';
  } else if (energyKwhPerGarment <= 3.0) {
    energyPoints = 16;
    energyRating = 'Medium';
  } else {
    energyPoints = 28;
    energyRating = 'High';
  }

  const chemicalPoints = usesHazardousChemicals ? 25 : 5;
  const workerPoints = workerHealthRisk === 'High' ? 20 : workerHealthRisk === 'Medium' ? 10 : 3;

  const totalScore = Math.min(100, waterPoints + energyPoints + chemicalPoints + workerPoints);

  const recommendations: string[] = [];
  if (waterRating === 'High') {
    recommendations.push('Switch from traditional stone wash to Low Liquor Ratio (1:5) and introduce nebulization (e-Flow) or Ozone gas bleaching to cut water consumption below 35L.');
  }
  if (usesHazardousChemicals) {
    recommendations.push('Replace Potassium Permanganate (PP) spray with Jeanologia/Tonello Laser whiskers and PP-free ecological activator chemicals (Zero Discharge of Hazardous Chemicals - ZDHC compliant).');
  }
  if (workerHealthRisk === 'High') {
    recommendations.push('Eliminate open-cabin manual spraying of bleaching agents; substitute with enclosed robotic spraying or automated laser patterning.');
  }
  if (energyRating === 'High') {
    recommendations.push('Optimize drying cycle temperatures and replace conventional curing ovens with smart infrared conveyors.');
  }
  if (recommendations.length === 0) {
    recommendations.push('Exemplary sustainable wash configuration! Meets Global Recycled Standard (GRS) and Cradle-to-Cradle Gold wash benchmarks.');
  }

  let rating: 'Green (Low Impact)' | 'Amber (Medium Impact)' | 'Red (High Impact)' = 'Green (Low Impact)';
  if (totalScore <= 33) {
    rating = 'Green (Low Impact)';
  } else if (totalScore <= 66) {
    rating = 'Amber (Medium Impact)';
  } else {
    rating = 'Red (High Impact)';
  }

  return {
    score: totalScore,
    rating,
    waterRating,
    energyRating,
    recommendations,
  };
}
