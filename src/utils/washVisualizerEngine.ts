export type VisualizerGarmentType = 'jeans' | 'jacket' | 'shorts' | 'shacket';
export type VisualizerTintCast = 'pure-indigo' | 'vintage-dirty' | 'ice-cyan' | 'sulfur-grey' | 'archive-green';

export interface WashVisualizerParams {
  washPresetId: string;
  garmentType: VisualizerGarmentType;
  stoneAbrasion: number; // 0 - 100
  bleachIntensity: number; // 0 - 100
  whiskerLaserIntensity: number; // 0 - 100
  ppThighHighlight: number; // 0 - 100
  acidMarbleEffect: number; // 0 - 100
  slubTexture: number; // 0 - 100
  tintCast: VisualizerTintCast;
  compareSplitPct: number; // 0 - 100 (0 = full washed, 50 = half raw/half washed)
  zoomMacro: boolean;
}

export interface WashOpticalProfile {
  baseRgb: [number, number, number];
  highlightRgb: [number, number, number];
  seamRopingRgb: [number, number, number];
  tintRgb: [number, number, number];
  indigoRetentionPct: number;
  tearStrengthRetentionPct: number;
  estimatedWashFobUsd: number;
  estimatedEimScore: number;
  eimCategory: 'Low (Green)' | 'Medium (Amber)' | 'High (Red)';
  riskAlertEn: string | null;
  riskAlertBn: string | null;
  activeProcessTags: string[];
}

export const WASH_VISUALIZER_PRESETS: Record<
  string,
  Omit<WashVisualizerParams, 'garmentType' | 'compareSplitPct' | 'zoomMacro'>
> = {
  'raw-rigid': {
    washPresetId: 'raw-rigid',
    stoneAbrasion: 0,
    bleachIntensity: 0,
    whiskerLaserIntensity: 5,
    ppThighHighlight: 0,
    acidMarbleEffect: 0,
    slubTexture: 65,
    tintCast: 'pure-indigo',
  },
  'rinse-wash': {
    washPresetId: 'rinse-wash',
    stoneAbrasion: 8,
    bleachIntensity: 0,
    whiskerLaserIntensity: 15,
    ppThighHighlight: 10,
    acidMarbleEffect: 0,
    slubTexture: 55,
    tintCast: 'pure-indigo',
  },
  'mid-stone-enzyme': {
    washPresetId: 'mid-stone-enzyme',
    stoneAbrasion: 65,
    bleachIntensity: 25,
    whiskerLaserIntensity: 72,
    ppThighHighlight: 65,
    acidMarbleEffect: 0,
    slubTexture: 75,
    tintCast: 'pure-indigo',
  },
  'bleach-ice-wash': {
    washPresetId: 'bleach-ice-wash',
    stoneAbrasion: 78,
    bleachIntensity: 84,
    whiskerLaserIntensity: 82,
    ppThighHighlight: 80,
    acidMarbleEffect: 0,
    slubTexture: 80,
    tintCast: 'ice-cyan',
  },
  'acid-snow-wash': {
    washPresetId: 'acid-snow-wash',
    stoneAbrasion: 70,
    bleachIntensity: 45,
    whiskerLaserIntensity: 35,
    ppThighHighlight: 30,
    acidMarbleEffect: 88,
    slubTexture: 85,
    tintCast: 'pure-indigo',
  },
  'vintage-dirty-wash': {
    washPresetId: 'vintage-dirty-wash',
    stoneAbrasion: 60,
    bleachIntensity: 30,
    whiskerLaserIntensity: 70,
    ppThighHighlight: 65,
    acidMarbleEffect: 12,
    slubTexture: 75,
    tintCast: 'vintage-dirty',
  },
  'eco-laser-ozone': {
    washPresetId: 'eco-laser-ozone',
    stoneAbrasion: 28,
    bleachIntensity: 36,
    whiskerLaserIntensity: 92,
    ppThighHighlight: 78,
    acidMarbleEffect: 0,
    slubTexture: 65,
    tintCast: 'pure-indigo',
  },
  'black-to-grey': {
    washPresetId: 'black-to-grey',
    stoneAbrasion: 64,
    bleachIntensity: 48,
    whiskerLaserIntensity: 76,
    ppThighHighlight: 70,
    acidMarbleEffect: 10,
    slubTexture: 75,
    tintCast: 'sulfur-grey',
  },
  'pigment-caustic-wash': {
    washPresetId: 'pigment-caustic-wash',
    stoneAbrasion: 55,
    bleachIntensity: 32,
    whiskerLaserIntensity: 48,
    ppThighHighlight: 45,
    acidMarbleEffect: 8,
    slubTexture: 70,
    tintCast: 'archive-green',
  },
  'super-white-wash': {
    washPresetId: 'super-white-wash',
    stoneAbrasion: 35,
    bleachIntensity: 96,
    whiskerLaserIntensity: 20,
    ppThighHighlight: 92,
    acidMarbleEffect: 15,
    slubTexture: 45,
    tintCast: 'ice-cyan',
  },
};

export function computeWashOpticalProfile(params: WashVisualizerParams): WashOpticalProfile {
  const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

  const abrasionFactor = clamp(params.stoneAbrasion, 0, 100) / 100;
  const bleachFactor = clamp(params.bleachIntensity, 0, 100) / 100;
  const whiskerFactor = clamp(params.whiskerLaserIntensity, 0, 100) / 100;
  const ppFactor = clamp(params.ppThighHighlight, 0, 100) / 100;
  const acidFactor = clamp(params.acidMarbleEffect, 0, 100) / 100;

  const lift = clamp(abrasionFactor * 0.45 + bleachFactor * 0.55 + acidFactor * 0.25, 0, 0.95);
  const highLift = clamp(lift + ppFactor * 0.38 + whiskerFactor * 0.22, 0, 0.98);
  const ropingLift = clamp(lift + abrasionFactor * 0.42, 0, 0.96);

  let baseR: number;
  let baseG: number;
  let baseB: number;
  let highR: number;
  let highG: number;
  let highB: number;
  let ropeR: number;
  let ropeG: number;
  let ropeB: number;
  let tR = 0;
  let tG = 0;
  let tB = 0;

  if (params.tintCast === 'sulfur-grey') {
    // Monochrome charcoal-to-grey washdown
    baseR = Math.round(clamp(22 + lift * 135, 16, 210));
    baseG = Math.round(clamp(24 + lift * 137, 18, 212));
    baseB = Math.round(clamp(28 + lift * 142, 22, 218));

    highR = Math.round(clamp(32 + highLift * 175, 24, 240));
    highG = Math.round(clamp(34 + highLift * 177, 26, 242));
    highB = Math.round(clamp(38 + highLift * 182, 30, 246));

    ropeR = Math.round(clamp(28 + ropingLift * 168, 22, 235));
    ropeG = Math.round(clamp(30 + ropingLift * 170, 24, 237));
    ropeB = Math.round(clamp(34 + ropingLift * 175, 28, 242));
  } else {
    const tintOffsets: Record<VisualizerTintCast, [number, number, number]> = {
      'pure-indigo': [0, 0, 0],
      'vintage-dirty': [28, 22, -18],
      'ice-cyan': [-8, 14, 24],
      'sulfur-grey': [0, 0, 0],
      'archive-green': [-6, 18, -10],
    };

    [tR, tG, tB] = tintOffsets[params.tintCast] || [0, 0, 0];

    baseR = Math.round(clamp(18 + lift * 145 + tR, 10, 235));
    baseG = Math.round(clamp(30 + lift * 162 + tG, 15, 240));
    baseB = Math.round(clamp(56 + lift * 168 + tB, 28, 248));

    highR = Math.round(clamp(24 + highLift * 195 + tR * 0.8, 20, 248));
    highG = Math.round(clamp(38 + highLift * 202 + tG * 0.8, 25, 250));
    highB = Math.round(clamp(68 + highLift * 182 + tB * 0.6, 40, 255));

    ropeR = Math.round(clamp(22 + ropingLift * 185 + tR * 0.5, 18, 245));
    ropeG = Math.round(clamp(36 + ropingLift * 195 + tG * 0.5, 24, 248));
    ropeB = Math.round(clamp(64 + ropingLift * 180 + tB * 0.5, 38, 252));
  }

  const indigoRetentionPct = Math.round(clamp(100 - (lift * 78 + ppFactor * 14), 8, 100));

  // Tear strength degrades significantly with heavy stone abrasion + hypochlorite/acid
  const strengthLoss =
    abrasionFactor * 14 + bleachFactor * 20 + acidFactor * 12 + ppFactor * 6;
  const tearStrengthRetentionPct = Math.round(clamp(100 - strengthLoss, 52, 100));

  // Cost calculation ($/pc)
  const baseCost = 0.55;
  const estimatedWashFobUsd = Number(
    (
      baseCost +
      abrasionFactor * 0.55 +
      bleachFactor * 0.45 +
      whiskerFactor * 0.48 +
      ppFactor * 0.38 +
      acidFactor * 0.65 +
      (params.tintCast !== 'pure-indigo' ? 0.32 : 0)
    ).toFixed(2)
  );

  // Jeanologia EIM Score calculation (0 - 100; <=33 Low/Green, 34-66 Medium/Amber, >66 High/Red)
  const rawEim = Math.round(
    14 +
      abrasionFactor * 22 +
      bleachFactor * 28 +
      acidFactor * 24 +
      ppFactor * 16 -
      (params.washPresetId === 'eco-laser-ozone' ? 18 : 0)
  );
  const estimatedEimScore = clamp(rawEim, 12, 94);
  const eimCategory: WashOpticalProfile['eimCategory'] =
    estimatedEimScore <= 33
      ? 'Low (Green)'
      : estimatedEimScore <= 66
      ? 'Medium (Amber)'
      : 'High (Red)';

  let riskAlertEn: string | null = null;
  let riskAlertBn: string | null = null;

  if (tearStrengthRetentionPct < 70) {
    riskAlertEn =
      'Critical Tear Strength Alert (<70% retained): High risk of warp failure at bar-tacks & knee. Mandate minimum 12.5 oz ring-spun base fabric and thorough Sodium Metabisulfite antichlor neutralization.';
    riskAlertBn =
      'টিয়ার স্ট্রেংথ সতর্কতা (<৭০% অবশিষ্ট): অতিরিক্ত ব্লিচ ও স্টোন অ্যাব্রেশনের কারণে বার-ট্যাক ও হাঁটুতে কাপড় ছিঁড়ে যাওয়ার ঝুঁকি। ন্যূনতম ১২.৫ oz রিং-স্পান ডেনিম ও অ্যান্টিক্লোর নিউট্রালাইজেশন বাধ্যতামূলক।';
  } else if (params.acidMarbleEffect > 60) {
    riskAlertEn =
      'Pumice Permanganate Marbling Notice: Pre-soak pumice stones evenly and run strict KI starch-iodide paper test after neutralization to prevent post-shipment yellowing.';
    riskAlertBn =
      'অ্যাসিড ওয়াশ সতর্কতা: পিউমিস স্টোন সমানভাবে ভিজিয়ে ব্যবহার করুন এবং শিপমেন্টের পর হলুদ হওয়া রোধে অ্যান্টিক্লোর (KI পেপার) টেস্ট নিশ্চিত করুন।';
  }

  const activeProcessTags: string[] = ['01 Desize'];
  if (params.whiskerLaserIntensity > 20) activeProcessTags.push('CO2 Laser Whiskers');
  if (params.stoneAbrasion > 15) activeProcessTags.push('Cellulase + Pumice Stone');
  if (params.acidMarbleEffect > 25) activeProcessTags.push('Acid Snow Tumbling');
  if (params.ppThighHighlight > 20) activeProcessTags.push('Thigh Highlight Fade');
  if (params.bleachIntensity > 15) activeProcessTags.push('Hypochlorite / Ozone Bleach');
  if (params.tintCast !== 'pure-indigo') activeProcessTags.push(`Tint (${params.tintCast})`);
  activeProcessTags.push('Antichlor + Silicone Softener');

  return {
    baseRgb: [baseR, baseG, baseB],
    highlightRgb: [highR, highG, highB],
    seamRopingRgb: [ropeR, ropeG, ropeB],
    tintRgb: [tR, tG, tB],
    indigoRetentionPct,
    tearStrengthRetentionPct,
    estimatedWashFobUsd,
    estimatedEimScore,
    eimCategory,
    riskAlertEn,
    riskAlertBn,
    activeProcessTags,
  };
}
