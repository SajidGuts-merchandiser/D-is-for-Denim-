import test from 'node:test';
import assert from 'node:assert/strict';
import {
  convertGsmToOz,
  convertOzToGsm,
  classifyDenimWeight,
  calculateFabricConsumption,
  calculateWashCost,
  assessEIMScore,
} from './denimCalculations.ts';

test('convertGsmToOz converts GSM to Oz/yd² accurately', () => {
  // Standard 400 GSM denim ≈ 11.8 oz/yd²
  assert.equal(convertGsmToOz(407), 12.0);
  assert.equal(convertGsmToOz(0), 0);
  assert.equal(convertGsmToOz(475), 14.01);
});

test('convertOzToGsm converts Oz/yd² to GSM accurately', () => {
  assert.equal(convertOzToGsm(12), 407);
  assert.equal(convertOzToGsm(0), 0);
  assert.equal(convertOzToGsm(14.5), 492);
});

test('classifyDenimWeight classifies denim tiers and specs', () => {
  const light = classifyDenimWeight(7.5);
  assert.equal(light.category, 'Lightweight');

  const medium = classifyDenimWeight(11.5);
  assert.equal(medium.category, 'Medium Weight');

  const heavy = classifyDenimWeight(13.5);
  assert.equal(heavy.category, 'Heavyweight');

  const superHeavy = classifyDenimWeight(18.0);
  assert.equal(superHeavy.category, 'Super Heavyweight');
});

test('calculateFabricConsumption computes yields with shrinkage buffer', () => {
  const result = calculateFabricConsumption({
    markerLengthYards: 9.0,
    garmentsInMarker: 6,
    warpShrinkagePct: 5.0,
    weftShrinkagePct: 3.0,
    cuttingWastagePct: 2.0,
    fabricPricePerYard: 3.5,
  });

  // Net = 9 / 6 = 1.5 yds
  assert.equal(result.netConsumptionPerPcYards, 1.5);
  // Gross = 1.5 * 1.05 * 1.02 = 1.6065 -> 1.607
  assert.equal(result.grossConsumptionPerPcYards, 1.607);
  // Consumption per dozen = 1.607 * 12 = 19.284
  assert.equal(result.consumptionPerDozenYards, 19.284);
  // Cost per garment = 1.607 * 3.50 = 5.62
  assert.equal(result.fabricCostPerGarment, 5.62);
});

test('calculateWashCost calculates water, enzyme, and total cost per piece and dozen', () => {
  const cost = calculateWashCost({
    garmentWeightGrams: 600,
    batchGarmentCount: 100,
    liquorRatio: 8,
    waterCostPerCubicMeter: 2.5,
    enzymeCostPerKg: 10,
    enzymeDosageGramsPerLiter: 1.5,
    auxiliariesCostPerPc: 0.3,
    energyAndSteamPerBatch: 20,
    manualDryProcessCostPerPc: 0.5,
  });

  // 100 * 0.6kg = 60kg fabric
  assert.equal(cost.totalBatchFabricWeightKg, 60);
  // 60kg * 8 L/kg * 3.5 = 1680 L
  assert.equal(cost.totalWaterLitersPerBatch, 1680);
  assert.equal(cost.waterPerGarmentLiters, 16.8);
  assert(cost.totalWashCostPerGarment > 0);
  assert.equal(cost.totalWashCostPerDozen, Number((cost.totalWashCostPerGarment * 12).toFixed(2)));
});

test('assessEIMScore evaluates environmental impact score and green/amber/red rating', () => {
  const ecoFriendly = assessEIMScore({
    waterLitersPerGarment: 25,
    energyKwhPerGarment: 1.2,
    usesHazardousChemicals: false,
    workerHealthRisk: 'Low',
  });

  assert.equal(ecoFriendly.rating, 'Green (Low Impact)');
  assert.equal(ecoFriendly.waterRating, 'Low');
  assert(ecoFriendly.score <= 33);

  const heavyPollution = assessEIMScore({
    waterLitersPerGarment: 90,
    energyKwhPerGarment: 4.5,
    usesHazardousChemicals: true,
    workerHealthRisk: 'High',
  });

  assert.equal(heavyPollution.rating, 'Red (High Impact)');
  assert.equal(heavyPollution.waterRating, 'High');
  assert(heavyPollution.score > 66);
  assert(heavyPollution.recommendations.length > 0);
});
