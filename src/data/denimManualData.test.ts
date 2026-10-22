import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CONCISE_10_FABRIC_STEPS,
  DYE_CROSS_SECTIONS,
  WEAVE_AND_VARIATIONS,
  FIT_SILHOUETTES,
  SPECIALIZED_MACHINES_CONCISE,
  CONCISE_DRY_PROCESSES,
  ACID_ICE_CLOUD_MATRIX,
  GARMENT_DYE_MATRIX,
  getConciseKeyStepsForWash,
  getDyeRingMetrics,
} from './denimManualData.ts';
import {
  SEWING_MACHINES_AND_VIDEOS,
  WASHING_MACHINES_DATA,
  WASHING_CHEMICALS_DATA,
  DEV_VS_BULK_MERCHANDISER_TIPS,
  filterWashingChemicals,
  calculateMachineHourlyOutput,
  filterMerchandiserTips,
} from './machinesAndChemicalsData.ts';

test('CONCISE_10_FABRIC_STEPS contains all 10 steps from Cleaning (01) to Packing (10)', () => {
  assert.equal(CONCISE_10_FABRIC_STEPS.length, 10);
  assert.equal(CONCISE_10_FABRIC_STEPS[0].step, '01');
  assert.equal(CONCISE_10_FABRIC_STEPS[9].step, '10');
  for (const s of CONCISE_10_FABRIC_STEPS) {
    assert.ok(s.titleBn.length > 0 && s.titleEn.length > 0);
    assert.ok(s.keyFactBn.length > 0 && s.keyFactEn.length > 0);
  }
});

test('DYE_CROSS_SECTIONS defines 5 distinct dyeing agents with correct core penetration', () => {
  assert.equal(DYE_CROSS_SECTIONS.length, 5);
  const indigo = DYE_CROSS_SECTIONS.find((d) => d.id === 'indigo');
  const reactive = DYE_CROSS_SECTIONS.find((d) => d.id === 'reactive');
  assert.equal(indigo?.corepenetrated, false);
  assert.equal(reactive?.corepenetrated, true);
});

test('getDyeRingMetrics computes ring depth and white core percentage accurately', () => {
  const indigo12 = getDyeRingMetrics('indigo', 12);
  assert.ok(indigo12.ringDepthPercent > 35 && indigo12.ringDepthPercent < 60);
  assert.equal(indigo12.ringDepthPercent + indigo12.whiteCorePercent, 100);

  const reactiveMetrics = getDyeRingMetrics('reactive', 12);
  assert.equal(reactiveMetrics.ringDepthPercent, 100);
  assert.equal(reactiveMetrics.whiteCorePercent, 0);
});

test('getConciseKeyStepsForWash returns localized step arrays in Bangla and English', () => {
  const bnSteps = getConciseKeyStepsForWash('acid-snow-wash', 'bn');
  const enSteps = getConciseKeyStepsForWash('acid-snow-wash', 'en');
  assert.equal(bnSteps.length, 6);
  assert.equal(enSteps.length, 6);
  assert.ok(bnSteps[0].startsWith('০১'));
  assert.ok(enSteps[0].startsWith('01'));
});

test('Sewing, Dry Process, Acid/Ice/Cloud & Garment Dye matrices are complete', () => {
  assert.equal(WEAVE_AND_VARIATIONS.length, 8);
  assert.equal(FIT_SILHOUETTES.length, 6);
  assert.equal(SPECIALIZED_MACHINES_CONCISE.length, 7);
  assert.equal(CONCISE_DRY_PROCESSES.length, 8);
  assert.equal(ACID_ICE_CLOUD_MATRIX.length, 3);
  assert.equal(GARMENT_DYE_MATRIX.length, 4);
});

test('SEWING_MACHINES_AND_VIDEOS and WASHING_MACHINES_DATA have YouTube links and 3-part descriptions', () => {
  assert.equal(SEWING_MACHINES_AND_VIDEOS.length, 7);
  for (const m of SEWING_MACHINES_AND_VIDEOS) {
    assert.ok(m.youtubeUrl.startsWith('https://www.youtube.com/'));
    assert.ok(m.youtubeEmbedId.length > 3);
    assert.ok(m.whatItDoesBn.length > 0 && m.whatItDoesEn.length > 0);
    assert.ok(m.howOperatedBn.length > 0 && m.howOperatedEn.length > 0);
    assert.ok(m.disadvantagesBn.length >= 2 && m.disadvantagesEn.length >= 2);
  }

  assert.equal(WASHING_MACHINES_DATA.length, 7);
  for (const wm of WASHING_MACHINES_DATA) {
    assert.ok(wm.youtubeUrl.startsWith('https://www.youtube.com/'));
    assert.ok(wm.youtubeEmbedId.length > 3);
    assert.ok(wm.whatItDoesBn.length > 0 && wm.whatItDoesEn.length > 0);
    assert.ok(wm.howOperatedBn.length > 0 && wm.howOperatedEn.length > 0);
    assert.ok(wm.disadvantagesBn.length >= 2 && wm.disadvantagesEn.length >= 2);
  }
});

test('WASHING_CHEMICALS_DATA and filterWashingChemicals filter by query and hazard level', () => {
  assert.equal(WASHING_CHEMICALS_DATA.length, 8);
  const ecoList = filterWashingChemicals('', 'Low (Bio)');
  assert.ok(ecoList.length >= 2);
  const permanganate = filterWashingChemicals('KMnO4', 'All');
  assert.equal(permanganate.length, 1);
  assert.equal(permanganate[0].code, 'CHEM-05');
});

test('calculateMachineHourlyOutput and filterMerchandiserTips work accurately', () => {
  const hourly = calculateMachineHourlyOutput({
    rpm: 3600,
    spi: 9,
    seamLengthInches: 32,
    handlingSecondsPerPc: 12,
  });
  assert.equal(hourly.stitchesPerSeam, 288);
  assert.ok(hourly.piecesPerHourAt85Eff > 150);

  assert.equal(DEV_VS_BULK_MERCHANDISER_TIPS.length, 5);
  const washTips = filterMerchandiserTips('washing', '');
  assert.ok(washTips.length >= 1);
});
