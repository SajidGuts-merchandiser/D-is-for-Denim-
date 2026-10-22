import { Language } from '../utils/i18n.ts';

export interface ConciseFabricStep {
  step: string; // '01' to '10'
  titleEn: string;
  titleBn: string;
  keyFactEn: string;
  keyFactBn: string;
  tagEn: string;
  tagBn: string;
}

export interface DyeCrossSectionSpec {
  id: 'indigo' | 'sulfur' | 'sulfur-top' | 'sulfur-bottom' | 'reactive';
  nameEn: string;
  nameBn: string;
  outerColor: string;
  innerColor: string;
  corepenetrated: boolean;
  fadeSpeedEn: string;
  fadeSpeedBn: string;
  undertoneEn: string;
  undertoneBn: string;
  conciseNoteEn: string;
  conciseNoteBn: string;
}

export interface WeaveVariationSpec {
  id: string;
  nameEn: string;
  nameBn: string;
  ratio: string;
  category: 'weave' | 'texture' | 'coating' | 'printing';
  visualPattern: string;
  featureEn: string;
  featureBn: string;
}

export interface SilhouetteFitSpec {
  id: string;
  nameEn: string;
  nameBn: string;
  riseEn: string;
  riseBn: string;
  hipThighEn: string;
  hipThighBn: string;
  legOpeningEn: string;
  legOpeningBn: string;
  svgPath: string;
}

export interface TrimmingHardwareSpec {
  id: string;
  category: 'button' | 'rivet' | 'zipper' | 'premium';
  nameEn: string;
  nameBn: string;
  specCode: string;
  summaryEn: string;
  summaryBn: string;
}

export interface SpecializedMachineSpec {
  id: string;
  stepNum: string;
  nameEn: string;
  nameBn: string;
  operationEn: string;
  operationBn: string;
  outsideStitchEn: string;
  outsideStitchBn: string;
  insideStitchEn: string;
  insideStitchBn: string;
}

export interface ConciseDryProcess {
  code: string;
  nameEn: string;
  nameBn: string;
  toolEn: string;
  toolBn: string;
  effectEn: string;
  effectBn: string;
  timingEn: string;
  timingBn: string;
}

export interface AcidIceCloudRow {
  washNameEn: string;
  washNameBn: string;
  mediumEn: string;
  mediumBn: string;
  bleachAgentEn: string;
  bleachAgentBn: string;
  contrastEffectEn: string;
  contrastEffectBn: string;
  swatchColors: [string, string, string];
}

export interface GarmentDyeComparison {
  parameterEn: string;
  parameterBn: string;
  tintingEn: string;
  tintingBn: string;
  overdyeingEn: string;
  overdyeingBn: string;
}

// 1. 10-Step Concise Fiber-to-Fabric Flow (The Denim Manual, p. 17)
export const CONCISE_10_FABRIC_STEPS: ConciseFabricStep[] = [
  {
    step: '01',
    titleEn: 'Cleaning (Ginning & Opening)',
    titleBn: 'ক্লিনিং (তুলা পরিষ্কার ও ওপেনিং)',
    keyFactEn: 'Removes seeds, leaves & dirt from raw cotton bolls.',
    keyFactBn: 'কাঁচা তুলার বোল থেকে বীজ, পাতা ও ধুলোবালি আলাদা করা হয়।',
    tagEn: 'Raw Fiber',
    tagBn: 'কাঁচা তুলা',
  },
  {
    step: '02',
    titleEn: 'Blending & Carding',
    titleBn: 'ব্লেন্ডিং ও কার্ডিং (সমান্তরালকরণ)',
    keyFactEn: 'Aligns fibers into uniform slivers for consistent strength.',
    keyFactBn: 'ফাইবারগুলোকে সমান্তরাল স্লিভারে সাজিয়ে সুতার শক্তি নিশ্চিত করে।',
    tagEn: 'Sliver Prep',
    tagBn: 'স্লিভার প্রস্তুতি',
  },
  {
    step: '03',
    titleEn: 'Spinning (Ring vs. Rotor/OE)',
    titleBn: 'স্পিনিং (রিং বনাম রোটার/ওপেন-এন্ড)',
    keyFactEn: 'Ring = Soft, slubby, high fade. Rotor = Coarse, uniform, economical.',
    keyFactBn: 'রিং = নরম, স্লাবি ও দারুণ ফেড। রোটার = খসখসে, সমান ও সাশ্রয়ী।',
    tagEn: 'Ne 6s–16s',
    tagBn: 'কাউন্ট ৬s–১৬s',
  },
  {
    step: '04',
    titleEn: 'Warping (Rope or Sheet)',
    titleBn: 'ওয়ার্পিং (রোপ বা শিট আকারে সাজানো)',
    keyFactEn: 'Gathers 350–450 warp ends into ropes or flat beams.',
    keyFactBn: '৩৫০–৪৫০টি ওয়ার্প সুতা একত্র করে রোপ বা ফ্ল্যাট বিম তৈরি হয়।',
    tagEn: '350–450 Ends',
    tagBn: '৩৫০–৪৫০ সুতা',
  },
  {
    step: '05',
    titleEn: 'Indigo Dyeing & Skying',
    titleBn: 'ইনডিগো ডাইং ও স্কাইং (অক্সিডেশন)',
    keyFactEn: 'Dipped 6–12 times; air oxidizes yellow leuco-indigo to blue.',
    keyFactBn: '৬–১২ বার ডিপ ও বাতাসে অক্সিডেশনের মাধ্যমে সবুজ-হলুদ থেকে নীল রঙ হয়।',
    tagEn: 'Ring-Dyed Core',
    tagBn: 'রিং-ডাইড কোর',
  },
  {
    step: '06',
    titleEn: 'Beaming (Long Chain)',
    titleBn: 'বিমিং (উইভিং বিমে জড়ানো)',
    keyFactEn: 'Untangles dyed ropes onto parallel warp beams.',
    keyFactBn: 'ডাইং করা রোপ খুলে সমান্তরালভাবে লুমের বিমে জড়ানো হয়।',
    tagEn: '3,500+ Ends',
    tagBn: '৩,৫০০+ সুতা',
  },
  {
    step: '07',
    titleEn: 'Sizing (Starch Coating)',
    titleBn: 'সাইজিং (স্টার্চ বা মাড়ের প্রলেপ)',
    keyFactEn: 'Coats warp yarns with starch/PVA to prevent breakage on loom.',
    keyFactBn: 'লুমের ঘর্ষণে সুতা ছিঁড়ে যাওয়া রোধে স্টার্চ/মাড়ের প্রলেপ দেওয়া হয়।',
    tagEn: 'Warp Shield',
    tagBn: 'সুরক্ষা প্রলেপ',
  },
  {
    step: '08',
    titleEn: 'Weaving (3x1 / 2x1 Twill)',
    titleBn: 'উইভিং (৩x১ বা ২x১ টুইল বুনন)',
    keyFactEn: 'Interlaces dyed warp over white weft (Shuttle vs. Projectile loom).',
    keyFactBn: 'নীল ওয়ার্প ও সাদা ওয়েফট সুতার বুনন (শাটল বনাম আধুনিক লুম)।',
    tagEn: 'RHT / LHT',
    tagBn: 'ডান/বাম টুইল',
  },
  {
    step: '09',
    titleEn: 'Finishing (Sanforizing & Skew)',
    titleBn: 'ফিনিশিং (স্যানফোরাইজিং ও প্রি-স্কিউ)',
    keyFactEn: 'Controls shrinkage (<3%), prevents leg twist, singes fuzz.',
    keyFactBn: 'শ্রিংকেজ (<৩%) ও লেগ টুইস্ট নিয়ন্ত্রণ এবং বাড়তি রোঁয়া পুড়িয়ে ফেলা।',
    tagEn: 'Shrink < 3%',
    tagBn: 'শ্রিংকেজ < ৩%',
  },
  {
    step: '10',
    titleEn: 'Inspection & Packing',
    titleBn: 'ইন্সপেকশন, গ্রেডিং ও প্যাকিং',
    keyFactEn: '4-Point inspection, shade lot sorting (A/B/C), roll packing.',
    keyFactBn: '৪-পয়েন্ট কিউএ চেক, শেড লট গ্রুপিং এবং রোল প্যাকিং।',
    tagEn: '4-Point QA',
    tagBn: '৪-পয়েন্ট কিউএ',
  },
];

// 2. 5 Dyeing Agents & Yarn Cross-Sections (The Denim Manual, p. 22)
export const DYE_CROSS_SECTIONS: DyeCrossSectionSpec[] = [
  {
    id: 'indigo',
    nameEn: 'Pure Indigo (Ring-Dyed)',
    nameBn: 'পিওর ইনডিগো (রিং-ডাইড)',
    outerColor: '#1d4ed8',
    innerColor: '#f8fafc',
    corepenetrated: false,
    fadeSpeedEn: 'Fast & High Contrast',
    fadeSpeedBn: 'দ্রুত ও হাই-কন্ট্রাস্ট ফেড',
    undertoneEn: 'Clean Sky Blue + White Core',
    undertoneBn: 'পরিষ্কার আকাশি নীল + সাদা কেন্দ্র',
    conciseNoteEn: 'Large dye molecules stay on surface; white core creates classic whiskers.',
    conciseNoteBn: 'বড় ডাই অণু কেবল বাইরে থাকে; সাদা কেন্দ্রের কারণে নিখুঁত হুইস্কার্স হয়।',
  },
  {
    id: 'sulfur',
    nameEn: 'Sulfur Dye (Black / Color)',
    nameBn: 'সালফার ডাই (কালো / রঙিন)',
    outerColor: '#27272a',
    innerColor: '#e4e4e7',
    corepenetrated: false,
    fadeSpeedEn: 'Moderate Greyish Fade',
    fadeSpeedBn: 'মাঝারি ধূসর (Grey) ফেড',
    undertoneEn: 'Charcoal / Ash Grey',
    undertoneBn: 'চারকোল / ছাই ধূসর',
    conciseNoteEn: 'Used for black, grey, mustard & olive denim; fades to vintage grey.',
    conciseNoteBn: 'ব্ল্যাক ও রঙিন ডেনিমে ব্যবহৃত হয়; ওয়াশে ভিন্টেজ গ্রে শেড দেয়।',
  },
  {
    id: 'sulfur-top',
    nameEn: 'Sulfur Top (Indigo + Sulfur)',
    nameBn: 'সালফার টপ (ইনডিগোর ওপর সালফার)',
    outerColor: '#115e59',
    innerColor: '#f8fafc',
    corepenetrated: false,
    fadeSpeedEn: 'Fast Vintage Cast',
    fadeSpeedBn: 'দ্রুত ভিন্টেজ কাস্ট ফেড',
    undertoneEn: 'Greenish / Olive Vintage Cast',
    undertoneBn: 'সবুজাভ-জলপাই ভিন্টেজ আভা',
    conciseNoteEn: 'Sulfur applied AFTER indigo; saves 20% indigo dips & adds murky cast.',
    conciseNoteBn: 'ইনডিগোর ওপরে সালফার প্রলেপ; সবুজাভ অ্যান্টিক ওয়ার্কওয়্যার লুক দেয়।',
  },
  {
    id: 'sulfur-bottom',
    nameEn: 'Sulfur Bottom (Sulfur + Indigo)',
    nameBn: 'সালফার বটম (সালফারের ওপর ইনডিগো)',
    outerColor: '#1e3a8a',
    innerColor: '#d6d3d1',
    corepenetrated: true,
    fadeSpeedEn: 'Deep Earthy Fade',
    fadeSpeedBn: 'গভীর মাটিরঙা (Earthy) ফেড',
    undertoneEn: 'Warm Khaki / Muddy Core',
    undertoneBn: 'খাকি / মেটে কোর আন্ডারটোন',
    conciseNoteEn: 'Sulfur dyes the core first, then indigo on top; no white core shows.',
    conciseNoteBn: 'আগে সালফারে সুতার কেন্দ্র রাঙিয়ে পরে ইনডিগো দেওয়া হয়; সাদা কেন্দ্র দেখা যায় না।',
  },
  {
    id: 'reactive',
    nameEn: 'Reactive Dye (Core-Penetrated)',
    nameBn: 'রিঅ্যাক্টিভ ডাই (কোর-ডাইড নন-ফেড)',
    outerColor: '#1e1b4b',
    innerColor: '#1e1b4b',
    corepenetrated: true,
    fadeSpeedEn: 'Zero Fade (Stay-Dark)',
    fadeSpeedBn: 'ফেড হয় না (Stay-Black/Dark)',
    undertoneEn: 'Solid Uniform Color',
    undertoneBn: 'অপরিবর্তিত গাঢ় রঙ',
    conciseNoteEn: 'Covalent bond penetrates 100% of fiber core; stays dark after 50 washes.',
    conciseNoteBn: 'সুতার কেন্দ্র পর্যন্ত ১০০% প্রবেশ করে; বারবার ধুলেও রঙ ফিকে হয় না।',
  },
];

// 3. Concise Weave & Variation Matrix (The Denim Manual, p. 26–35)
export const WEAVE_AND_VARIATIONS: WeaveVariationSpec[] = [
  {
    id: '3x1-twill',
    nameEn: '3x1 Right-Hand Twill (RHT)',
    nameBn: '৩x১ রাইট-হ্যান্ড টুইল (RHT)',
    ratio: '3 Warp : 1 Weft (↗)',
    category: 'weave',
    visualPattern: 'repeating-linear-gradient(45deg, #3b82f6 0, #3b82f6 6px, #172554 6px, #172554 12px)',
    featureEn: 'Heavyweight (11–16 oz), crisp diagonal ribs, standard 5-pocket jean.',
    featureBn: 'ভারী ওজন (১১–১৬ oz), স্পষ্ট ডানমুখী ডায়াগনাল রেখা, ক্লাসিক জিন্স স্ট্যান্ডার্ড।',
  },
  {
    id: '2x1-twill',
    nameEn: '2x1 Twill (Lightweight)',
    nameBn: '২x১ টুইল (হালকা ডেনিম)',
    ratio: '2 Warp : 1 Weft',
    category: 'weave',
    visualPattern: 'repeating-linear-gradient(45deg, #60a5fa 0, #60a5fa 4px, #1e3a8a 4px, #1e3a8a 8px)',
    featureEn: 'Lighter (<10.5 oz), flatter surface, ideal for shirts & summer dresses.',
    featureBn: 'হালকা ওজন (<১০.৫ oz), মসৃণ উপরিভাগ, ডেনিম শার্ট ও সামার ড্রেসের জন্য সেরা।',
  },
  {
    id: 'broken-twill',
    nameEn: 'Broken Twill & Herringbone',
    nameBn: 'ব্রোকেন টুইল ও হেরিংবোন',
    ratio: 'Alternating RHT/LHT (↗↖)',
    category: 'weave',
    visualPattern: 'repeating-linear-gradient(90deg, #3b82f6 0, #3b82f6 6px, #1e1b4b 6px, #1e1b4b 12px)',
    featureEn: 'Zero leg twist (0% torque), zigzag structure invented in 1964.',
    featureBn: 'লেগ টুইস্ট শূন্য (০% টর্ক), জিগজ্যাগ বুননের ফলে সেলাই কখনোই ঘোরে না।',
  },
  {
    id: 'chambray',
    nameEn: 'Chambray (Plain Weave)',
    nameBn: 'শ্যামব্রে (১x১ প্লেইন উইভ)',
    ratio: '1 Warp : 1 Weft (+)',
    category: 'weave',
    visualPattern: 'radial-gradient(#93c5fd 1px, #1e3a8a 1px)',
    featureEn: 'Crisscross plain weave (4–7 oz), breathable, no diagonal twill line.',
    featureBn: '১x১ সাধারণ বুনন (৪–৭ oz), কোনো ডায়াগনাল রেখা নেই, শার্টের জন্য আরামদায়ক।',
  },
  {
    id: 'slub-crosshatch',
    nameEn: 'Slub & Crosshatch Denim',
    nameBn: 'স্লাব ও ক্রসহ্যাচ ডেনিম',
    ratio: 'Uneven Ring Yarn',
    category: 'texture',
    visualPattern: 'repeating-linear-gradient(0deg, #1d4ed8 0, #93c5fd 2px, #172554 5px)',
    featureEn: 'Thick-and-thin yarn knots create vertical rain-streaks (Tate-ochi) or grid texture.',
    featureBn: 'মোটা-চিকন স্লাব সুতার কারণে ওয়াশের পর লম্বালম্বি বৃষ্টির মতো ফেড (Tate-ochi) ফুটে ওঠে।',
  },
  {
    id: 'nep-metallic',
    nameEn: 'Nep & Colored-Weft Denim',
    nameBn: 'নেপ (Nep) ও রঙিন ওয়েফট ডেনিম',
    ratio: 'Snowy / Red-Cast Weft',
    category: 'texture',
    visualPattern: 'radial-gradient(circle, #f8fafc 1.5px, transparent 1.5px), linear-gradient(135deg, #1e3a8a, #0f172a)',
    featureEn: 'Tangled cotton specks (neps) on surface, or red/neon weft peeking inside cuffs.',
    featureBn: 'কাপড়ের ওপর সাদা তুলার দানাদার তুষার লুক অথবা ভেতরে রঙিন ওয়েফট সুতা।',
  },
  {
    id: 'coated-wax-pu',
    nameEn: 'PU, Wax & Metallic Coating',
    nameBn: 'পিইউ (PU), ওয়াক্স ও মেটালিক কোটিং',
    ratio: 'Surface Film Finish',
    category: 'coating',
    visualPattern: 'linear-gradient(110deg, #090d16 0%, #334155 48%, #090d16 100%)',
    featureEn: 'Leather-like sheen, water resistance, or reflective foil look over raw/washed denim.',
    featureBn: 'লেদারের মতো চকচকে লুক এবং পানি-প্রতিরোধী ওয়াক্স বা মেটালিক প্রলেপ।',
  },
  {
    id: 'discharge-flock',
    nameEn: 'Discharge, Foil & Flock Print',
    nameBn: 'ডিসচার্জ, ফয়েল ও ফ্লক প্রিন্ট',
    ratio: 'Bleach Paste / Velvet',
    category: 'printing',
    visualPattern: 'repeating-radial-gradient(circle at 8px 8px, #e2e8f0 0, #e2e8f0 2px, #1e3a8a 2px, #1e3a8a 10px)',
    featureEn: 'Discharge bleach removes indigo in patterns instead of adding heavy ink on top.',
    featureBn: 'ডিসচার্জ প্রিন্টে ভারী রঙের বদলে ব্লিচ পেস্ট দিয়ে ইনডিগো তুলে নকশা ফুটিয়ে তোলা হয়।',
  },
];

// 4. Concise Fit Silhouettes (The Denim Manual, p. 43)
export const FIT_SILHOUETTES: SilhouetteFitSpec[] = [
  {
    id: 'straight',
    nameEn: 'Straight Fit',
    nameBn: 'স্ট্রেইট ফিট (Straight)',
    riseEn: 'Mid / Regular Rise',
    riseBn: 'মিড / রেগুলার রাইজ',
    hipThighEn: 'Regular through hip & thigh',
    hipThighBn: 'হিপ ও থাইয়ে স্বাভাবিক ফিট',
    legOpeningEn: 'Straight knee to ankle (15.5"–16.5")',
    legOpeningBn: 'হাঁটু থেকে গোড়ালি পর্যন্ত সোজা (১৫.৫"–১৬.৫")',
    svgPath: 'M 15,8 L 45,8 L 46,30 L 44,88 L 32,88 L 30,36 L 28,88 L 16,88 L 14,30 Z',
  },
  {
    id: 'slim-tapered',
    nameEn: 'Slim & Tapered',
    nameBn: 'স্লিম ও টেপারড (Tapered)',
    riseEn: 'Low to Mid Rise',
    riseBn: 'লো থেকে মিড রাইজ',
    hipThighEn: 'Trim hip, contoured thigh',
    hipThighBn: 'হিপ ও থাইয়ে চাপা আধুনিক কাট',
    legOpeningEn: 'Narrows toward ankle (13"–14.5")',
    legOpeningBn: 'গোড়ালির দিকে ক্রমশ সরু (১৩"–১৪.৫")',
    svgPath: 'M 16,8 L 44,8 L 45,28 L 40,88 L 32,88 L 30,36 L 28,88 L 20,88 L 15,28 Z',
  },
  {
    id: 'skinny',
    nameEn: 'Skinny / Super Skinny',
    nameBn: 'স্কিনি / সুপার স্কিনি',
    riseEn: 'Low / Mid / High Rise',
    riseBn: 'লো / মিড / হাই রাইজ',
    hipThighEn: 'Second-skin stretch fit (2–4% Elastane)',
    hipThighBn: 'গায়ের সাথে মিশে থাকা হাই-স্ট্রেচ ফিট',
    legOpeningEn: 'Tight ankle opening (10.5"–12")',
    legOpeningBn: 'গোড়ালিতে একদম চাপা (১০.৫"–১২")',
    svgPath: 'M 17,8 L 43,8 L 43,26 L 38,88 L 32,88 L 30,35 L 28,88 L 22,88 L 17,26 Z',
  },
  {
    id: 'boot-flare',
    nameEn: 'Boot-Cut & Flare',
    nameBn: 'বুট-কাট ও ফ্লেয়ার (Flare)',
    riseEn: 'Mid to High Rise',
    riseBn: 'মিড থেকে হাই রাইজ',
    hipThighEn: 'Fitted through hip and knee',
    hipThighBn: 'হিপ থেকে হাঁটু পর্যন্ত ফিট',
    legOpeningEn: 'Widens below knee (18"–22")',
    legOpeningBn: 'হাঁটুর নিচ থেকে চওড়া ঘের (১৮"–২২")',
    svgPath: 'M 16,8 L 44,8 L 44,28 L 42,52 L 49,88 L 32,88 L 30,36 L 28,88 L 11,88 L 18,52 L 16,28 Z',
  },
  {
    id: 'mom-boyfriend',
    nameEn: 'Mom & Boyfriend Fit',
    nameBn: 'মম (Mom) ও বয়ফ্রেন্ড ফিট',
    riseEn: 'High Rise (11"–12.5")',
    riseBn: 'হাই রাইজ (১১"–১২.৫")',
    hipThighEn: 'Relaxed hip & curved roomy seat',
    hipThighBn: 'হিপ ও থাইয়ে ঢিলেঢালা ভিন্টেজ কাট',
    legOpeningEn: 'Tapered ankle, often cuffed',
    legOpeningBn: 'গোড়ালিতে সরু ও ফোল্ডেড কাফ',
    svgPath: 'M 17,8 L 43,8 L 48,30 L 42,88 L 32,88 L 30,38 L 28,88 L 18,88 L 12,30 Z',
  },
  {
    id: 'wide-baggy',
    nameEn: 'Wide-Leg & Baggy / Dad',
    nameBn: 'ওয়াইড-লেগ ও ব্যাগি ফিট',
    riseEn: 'Mid to High Rise',
    riseBn: 'মিড থেকে হাই রাইজ',
    hipThighEn: 'Generous, boxy room throughout',
    hipThighBn: 'হিপ ও থাই জুড়ে সম্পূর্ণ ঢিলেঢালা',
    legOpeningEn: 'Wide cylinder hem (19"–23")',
    legOpeningBn: ' প্রশস্ত বটম হেম (১৯"–২৩")',
    svgPath: 'M 15,8 L 45,8 L 49,32 L 50,88 L 31,88 L 30,38 L 29,88 L 10,88 L 11,32 Z',
  },
];

// 5. Trimmings, Hardware & 6-Point Premium Denim Indicators (The Denim Manual, p. 50–53)
export const TRIMMINGS_AND_PREMIUM_SPECS: TrimmingHardwareSpec[] = [
  {
    id: 'tack-buttons',
    category: 'button',
    nameEn: 'Tack / Shank Buttons (Flat, Donut, Swivel)',
    nameBn: 'ট্যাক / শ্যাঙ্ক বাটন (ফ্ল্যাট, ডোনাট ও সুইভেল)',
    specCode: '17mm (27L) / 20mm (32L)',
    summaryEn: 'Two-part metal hardware pressed through waistband; Swivel tack moves slightly for easy fastening on 14oz+ denim.',
    summaryBn: 'ওয়েস্টব্যান্ডে ব্যবহৃত টু-পার্ট মেটাল বাটন; ভারী ডেনিমে সহজ ব্যবহারের জন্য সুইভেল শ্যাঙ্ক নড়াচড়া করতে পারে।',
  },
  {
    id: 'rivets-burr',
    category: 'rivet',
    nameEn: 'Copper Rivets (Perforated, Nipple & Hidden)',
    nameBn: 'কপার রিভেট (পারফোরেটেড, নিপল ও হিডেন)',
    specCode: '9mm–10mm Burr & Post',
    summaryEn: 'Reinforces pocket corner stress points (patented 1873). Hidden rivets secure back pockets from inside without scratching seats.',
    summaryBn: 'পকেটের কোণার চাপ সহ্য করতে ব্যবহৃত (১৮৭৩ পেটেন্ট)। হিডেন রিভেট ভেতর থেকে ব্যাক পকেট আটকে রাখে।',
  },
  {
    id: 'zipper-bartack',
    category: 'zipper',
    nameEn: 'Brass Auto-Lock Zipper & 42-Stitch Bar-Tack',
    nameBn: 'ব্রাস অটো-লক জিপার ও ৪২-স্টিচ বার-ট্যাক',
    specCode: 'YKK #4.5YG + Class 304',
    summaryEn: 'Heavy brass teeth withstand stone washing; dense 42-stitch zigzag bar-tacks lock fly base, belt loops & pocket openings.',
    summaryBn: 'স্টোন ওয়াশ সহনশীল পিতলের জিপার এবং ফ্লাই ও বেল্ট লুপ মজবুত করতে ঘন ৪২-স্টিচ বার-ট্যাক।',
  },
  {
    id: 'premium-6point',
    category: 'premium',
    nameEn: '6-Point Premium Denim Checklist',
    nameBn: 'প্রিমিয়াম ডেনিমের ৬টি বিশেষ বৈশিষ্ট্য',
    specCode: 'Heritage Craft Spec',
    summaryEn: '1. Raised Belt Loops • 2. Hidden Back Rivets • 3. Selvedge Outseam • 4. Roped Chain-Stitch Hem • 5. Lined Back Pockets • 6. Crotch Rivet.',
    summaryBn: '১. রেইজড বেল্ট লুপ • ২. হিডেন রিভেট • ৩. সেলভেজ আউটসিম • ৪. চেইন-স্টিচ রোপিং হেম • ৫. লাইনড পকেট • ৬. ক্রচ রিভেট।',
  },
];

// 6. 7 Specialized Denim Sewing Machines (The Denim Manual, p. 54–55)
export const SPECIALIZED_MACHINES_CONCISE: SpecializedMachineSpec[] = [
  {
    id: 'felling',
    stepNum: '01',
    nameEn: 'Feed-Off-The-Arm Felling Machine',
    nameBn: 'ফিড-অফ-দ্য-আর্ম ফেলিং মেশিন',
    operationEn: 'Risers, Back Yokes & Inseams',
    operationBn: 'রাইজার, ব্যাক ইয়ক ও ইনসিম জোড়া',
    outsideStitchEn: '2 or 3 Parallel Straight Rows',
    outsideStitchBn: 'বাইরে ২ বা ৩ সারি সমান্তরাল সেলাই',
    insideStitchEn: 'Looped Chain-Stitch (Class 401)',
    insideStitchBn: 'ভেতরে চেইন-স্টিচ লুপ (Class 401)',
  },
  {
    id: 'twin-needle',
    stepNum: '02',
    nameEn: 'Twin-Needle Lockstitch Machine',
    nameBn: 'টুইন-নিডল লকস্টিচ মেশিন',
    operationEn: 'J-Stitch Fly & Back Pocket Attach',
    operationBn: 'জে-স্টিচ ফ্লাই ও ব্যাক পকেট সেলাই',
    outsideStitchEn: 'Twin Parallel Rows',
    outsideStitchBn: 'বাইরে জোড়া সমান্তরাল সারি',
    insideStitchEn: 'Flat Lockstitch (Class 301)',
    insideStitchBn: 'ভেতরে ফ্ল্যাট লকস্টিচ (Class 301)',
  },
  {
    id: 'keyhole',
    stepNum: '03',
    nameEn: 'Eyelet / Keyhole Buttonhole Machine',
    nameBn: 'কি-হোল বাটনহোল মেশিন',
    operationEn: 'Waistband & Button-Fly Holes',
    operationBn: 'ওয়েস্টব্যান্ড ও বাটন-ফ্লাইয়ের ঘর',
    outsideStitchEn: 'Teardrop Eyelet Purl Stitch',
    outsideStitchBn: 'বাইরে কি-হোল আকৃতির ঘন বুনন',
    insideStitchEn: 'Gimp-Corded Reinforced Edge',
    insideStitchBn: 'ভেতরে শক্ত কর্ডযুক্ত প্রান্ত',
  },
  {
    id: 'waistband',
    stepNum: '04',
    nameEn: '4-Needle Waistband Machine',
    nameBn: '৪-নিডল ওয়েস্টব্যান্ড মেশিন',
    operationEn: 'One-Piece Waistband Attachment',
    operationBn: 'একবারে পুরো ওয়েস্টব্যান্ড সংযোজন',
    outsideStitchEn: 'Top & Bottom Parallel Rows',
    outsideStitchBn: 'বাইরে উপর-নিচ সমান্তরাল সেলাই',
    insideStitchEn: 'Flexible Chain-Stitch Loops',
    insideStitchBn: 'ভেতরে নমনীয় চেইন-স্টিচ লুপ',
  },
  {
    id: 'bartack',
    stepNum: '05',
    nameEn: 'High-Speed Bar-Tack Machine',
    nameBn: 'হাই-স্পিড বার-ট্যাক মেশিন',
    operationEn: 'Belt Loops, Fly Base & Pocket Corners',
    operationBn: 'বেল্ট লুপ, ফ্লাই ও পকেটের কোণা লক',
    outsideStitchEn: 'Dense Zigzag Tack (42 Stitches)',
    outsideStitchBn: 'বাইরে ঘন জিগজ্যাগ ট্যাক (৪২ স্টিচ)',
    insideStitchEn: 'Locked Tension Bar',
    insideStitchBn: 'ভেতরে লকড টেনশন বার',
  },
  {
    id: 'belt-loop',
    stepNum: '06',
    nameEn: 'Belt-Loop Folder & Coverstitch',
    nameBn: 'বেল্ট-লুপ কভারস্টিচ মেশিন',
    operationEn: 'Continuous Raised/Flat Belt Loops',
    operationBn: 'রেইজড বা ফ্ল্যাট বেল্ট লুপ তৈরি',
    outsideStitchEn: 'Twin Straight Topstitch',
    outsideStitchBn: 'বাইরে দুই সারি সোজা সেলাই',
    insideStitchEn: 'Coverstitch Mesh (Class 406)',
    insideStitchBn: 'নিচে কভারস্টিচ জালি বুনন (Class 406)',
  },
  {
    id: 'hemming',
    stepNum: '07',
    nameEn: 'Cylinder-Bed Hemming (Union Special)',
    nameBn: 'সিলিন্ডার-বেড হেমিং (Union Special)',
    operationEn: 'Tubular Leg Opening Hem',
    operationBn: 'প্যান্টের বটম হেম ও রোপিং ইফেক্ট',
    outsideStitchEn: 'Single Row + Diagonal Roping',
    outsideStitchBn: 'বাইরে সিঙ্গেল সারি ও তির্যক রোপিং',
    insideStitchEn: 'Thick Chain-Stitch Loop',
    insideStitchBn: 'ভেতরে মোটা চেইন-স্টিচ লুপ',
  },
];

// 7. 10 Concise Dry Processes (Mechanical & Chemical Dry Finishing)
export const CONCISE_DRY_PROCESSES: ConciseDryProcess[] = [
  {
    code: 'D01',
    nameEn: 'Whiskering (Hige / Cat’s Whiskers)',
    nameBn: 'হুইস্কারিং (Whiskering / Cat’s Whiskers)',
    toolEn: 'Plywood + Sloped Foam Rubber Mould + 320–500 Grit Paper',
    toolBn: 'প্লাইউড ও ফোম রাবার প্যাটার্ন বোর্ড + ৩২০–৫০০ গ্রিট এমেরি পেপার',
    effectEn: '3D faded crease lines at hip, crotch & behind knees (honeycombs) mimicking sitting posture.',
    effectBn: 'হিপ, কুঁচকি ও হাঁটুর পেছনে (হানিকম্ব) বসার ভাঁজের মতো প্রাকৃতিক সাদা ফেড লাইন।',
    timingEn: 'Rigid / Before Wet Wash',
    timingBn: 'রিজিড কাপড়ে / ওয়েট ওয়াশের আগে',
  },
  {
    code: 'D02',
    nameEn: 'Tacking / Tagging',
    nameBn: 'ট্যাকিং / ট্যাগিং (Tacking / Tagging)',
    toolEn: 'Nylon Tag Gun (5mm–15mm Pins) / Heavy Thread',
    toolBn: 'নাইলন ট্যাগ গান (৫–১৫ মিমি পিন) বা মোটা সুতা',
    effectEn: 'Locks folds at waistbands, hems & pocket corners so inner creases stay dark after wash.',
    effectBn: 'ওয়েস্টব্যান্ড, বটম হেম ও পকেটের কোণায় ভাঁজ আটকে রাখে যাতে ভেতরের অংশ গাঢ় নীল থাকে।',
    timingEn: 'Before Wet Wash (Remove before softening to avoid pinholes)',
    timingBn: 'ওয়েট ওয়াশের আগে (পিনহোল এড়াতে সফটনিংয়ের আগে খোলা হয়)',
  },
  {
    code: 'D03',
    nameEn: 'Hand Sanding / Scraping',
    nameBn: 'হ্যান্ড স্যান্ডিং / স্ক্র্যাপিং',
    toolEn: 'Inflatable Rubber Balloon + 220 / 320 / 400 Grit Emery Paper',
    toolBn: 'রাবার বেলুন ডামি + ২২০ / ৩২০ / ৪০০ নম্বর স্যান্ডপেপার (Al2O3 / SiC)',
    effectEn: 'Safe manual alternative to sandblasting; feathers thigh & seat centers to expose white core.',
    effectBn: 'স্যান্ডব্লাস্টিংয়ের নিরাপদ বিকল্প; থাই ও সিটের মাঝখানে ঘষে প্রাকৃতিক ফেড তৈরি করে।',
    timingEn: 'Before Wet Wash',
    timingBn: 'ওয়েট ওয়াশের আগে',
  },
  {
    code: 'D04',
    nameEn: 'PP Spray (Potassium Permanganate)',
    nameBn: 'পিপি স্প্রে (PP Spray)',
    toolEn: 'Water-Curtain Spray Booth + Air Dummy + 0.4%–1.5% KMnO4',
    toolBn: 'স্প্রে বুথ + এয়ার ডামি + পটাশিয়াম পারম্যাঙ্গানেট ও মেটাবাইসালফাইট',
    effectEn: 'Local pink spray turns muddy brown (MnO2), then bright white after metabisulfite neutralization.',
    effectBn: 'স্ক্র্যাপ করা থাই ও হাঁটুতে স্প্রে করার পর নিউট্রালাইজ করলে উজ্জ্বল সাদা হাইলাইট ফুটে ওঠে।',
    timingEn: 'After First Wash (Followed immediately by Neutralization)',
    timingBn: 'প্রথম ওয়াশের পর (সাথে সাথে নিউট্রালাইজেশন আবশ্যক)',
  },
  {
    code: 'D05',
    nameEn: 'PP Sponging / Brushing',
    nameBn: 'পিপি স্পঞ্জিং / ব্রাশিং (PP Sponging)',
    toolEn: 'Sponge / Towel / Cut Painter’s Brush + 20% PP : 80% Water',
    toolBn: 'স্পঞ্জ, তোয়ালে বা ব্রাশ + ২০% পিপি ও ৮০% পানির মিশ্রণ + রাবার বোর্ড',
    effectEn: 'Selective hand-rubbed oxidation on raised seams, whiskers & moustaches without spray mist.',
    effectBn: 'রাবার বোর্ডের ওপর রেখে স্পঞ্জ বা তোয়ালে দিয়ে ঘষে নির্দিষ্ট স্থানে নরম ও প্রাকৃতিক সাদা ফেড তৈরি।',
    timingEn: 'After Enzyme / Bleach Wash (Best natural soft white effect)',
    timingBn: 'এনজাইম বা ব্লিচ ওয়াশের পর (সর্বোত্তম প্রাকৃতিক লুকের জন্য)',
  },
  {
    code: 'D06',
    nameEn: 'Grinding & Pocket Edge Nicking',
    nameBn: 'গ্রাইন্ডিং ও পকেট এজ নিকিং',
    toolEn: 'High-Speed Grinding Machine (2,500 – 3,000 RPM)',
    toolBn: 'হাই-স্পিড গ্রাইন্ডিং মেশিন (২,৫০০ – ৩,০০০ RPM) ও এমেরি হুইল',
    effectEn: 'Physically abrades pocket openings, waist belts & bottom hems for frayed vintage edges.',
    effectBn: 'পকেটের মুখ, ওয়েস্ট বেল্ট ও বটম হেমের কিনারা ঘষে সুতা বের করে পুরোনো ভিন্টেজ লুক দেয়।',
    timingEn: 'Before or Mid-Wash',
    timingBn: 'ওয়াশের আগে বা মাঝামাঝি পর্যায়ে',
  },
  {
    code: 'D07',
    nameEn: 'Destroy / Ripping (Auto, Semi-Auto & Manual)',
    nameBn: 'ডেস্ট্রয় ও রিপিং (Destroy: অটো, সেমি-অটো ও ম্যানুয়াল)',
    toolEn: 'CO2 Laser (Auto) / Grinding Pen (Semi-Auto) / Knife & Needle (Manual)',
    toolBn: 'CO2 লেজার / গ্রাইন্ডিং পেন / নাইফ ও নিডল + অ্যাসিটিক সিলিকন সিল',
    effectEn: 'Cuts blue warp threads 10+ times while keeping horizontal white weft threads unbroken.',
    effectBn: 'নীল ওয়ার্প সুতা কেটে আড়াআড়ি সাদা ওয়েফট সুতা অক্ষত রেখে ছেঁড়া ডিস্ট্রেসড লুক তৈরি করে।',
    timingEn: 'Mid-Wash (Reinforce white weft with Acetic Silicone Seal or patch)',
    timingBn: 'ওয়াশের মাঝে (সাদা সুতা রক্ষায় সিলিকন সিল বা ব্যাকিং প্যাচ ব্যবহৃত হয়)',
  },
  {
    code: 'D08',
    nameEn: '3D Wrinkle & Overall Permanent Crinkle',
    nameBn: '৩ডি রিঙ্কেল ও ওভারঅল পার্মানেন্ট ক্রিস',
    toolEn: '20% DMDHEU Resin (or Glyoxal / Citric Acid) + 140°C–160°C Oven',
    toolBn: '২০% রেজিন ও ৮০% পানি + ক্লিপ/ডামি + ১৪০°C–১৬০°C ইন্ডাস্ট্রিয়াল ওভেন',
    effectEn: 'Cross-links amorphous cotton bonds for 20–40 min cure (+10m cool) to lock 3D creases.',
    effectBn: 'উচ্চ তাপে ২০–৪০ মিনিট বেকিং ও ১০ মিনিট কুলিংয়ের মাধ্যমে স্থায়ী ত্রিমাত্রিক ভাঁজ সেট করে।',
    timingEn: 'After All Wet Processes',
    timingBn: 'সব ওয়েট ওয়াশ শেষ হওয়ার পর',
  },
  {
    code: 'D09',
    nameEn: 'CO2 Laser Fading (Sustainable Dry Tech)',
    nameBn: 'CO2 লেজার ফেডিং (ইকো ড্রাই টেকনোলজি)',
    toolEn: '150–250W CO2 Laser (10 µm) + Grayscale .bmp File + Honeycomb Bed',
    toolBn: '১৫০–২৫০ ওয়াট CO2 লেজার + গ্রেস্কেল .bmp ফাইল + ফিউম এক্সট্রাক্টর',
    effectEn: 'Vaporizes indigo with ~100% accuracy, zero water/chemicals & only 1.31% warp strength loss.',
    effectBn: 'পানি ও কেমিক্যাল ছাড়াই মাত্র ১.৩১% শক্তি ক্ষয়ে নিখুঁত হুইস্কার্স, রিপ ও ফেড তৈরি করে।',
    timingEn: 'Before Enzyme Wash',
    timingBn: 'এনজাইম ওয়াশের আগে',
  },
  {
    code: 'D10',
    nameEn: 'Sand Blasting (Banned Legacy Process)',
    nameBn: 'স্যান্ড ব্লাস্টিং (নিষিদ্ধ পুরোনো পদ্ধতি — Silicosis ঝুঁকি)',
    toolEn: 'Al2O3 / SiO2 Powder + 90–100 PSI Air Gun at 10°–20° Angle',
    toolBn: 'অ্যালুমিনিয়াম অক্সাইড (Al2O3) বালু + ৯০–১০০ PSI এয়ার গান (১০°–২০° কোণে)',
    effectEn: 'High-speed abrasive sand strips indigo; BANNED by global buyers due to fatal lung silicosis.',
    effectBn: 'উচ্চ চাপে বালু স্প্রে করে ফেড করা হতো; মারাত্মক সিলিকোসিস (ফুসফুসের ক্যান্সার) ঝুঁকির কারণে বিশ্বজুড়ে নিষিদ্ধ।',
    timingEn: 'Replaced by Laser & Hand Sanding',
    timingBn: 'বর্তমানে লেজার ও হ্যান্ড স্যান্ডিং দ্বারা প্রতিস্থাপিত',
  },
];

// 8. Acid vs. Ice vs. Cloud Wash Comparison Table
export const ACID_ICE_CLOUD_MATRIX: AcidIceCloudRow[] = [
  {
    washNameEn: 'Acid Wash (1986 Patent)',
    washNameBn: 'অ্যাসিড ওয়াশ (Acid Wash)',
    mediumEn: 'Pumice Stones (Standard Load: ½ Garment Weight)',
    mediumBn: 'পিউমিস স্টোন (স্বাভাবিক পরিমাণ: কাপড়ের ওজনের অর্ধেক)',
    bleachAgentEn: 'Potassium Permanganate (10g/L + 2.5g/L H3PO4) OR Sodium Hypochlorite (Dry Tumbling 7–10 min)',
    bleachAgentBn: 'পটাশিয়াম পারম্যাঙ্গানেট ও ফসফরিক অ্যাসিড বা হাইপোক্লোরাইট ভেজানো পাথর (পানি ছাড়া ড্রামে ঘূর্ণন)',
    contrastEffectEn: 'Sharp marbled blue-and-white contrast across surface and seams',
    contrastEffectBn: 'নীল ও সাদার তীক্ষ্ণ মার্বেল কনট্রাস্ট প্যাটার্ন',
    swatchColors: ['#1e3a8a', '#93c5fd', '#f8fafc'],
  },
  {
    washNameEn: 'Ice Wash / Snow Wash',
    washNameBn: 'আইস ওয়াশ / স্নো ওয়াশ (Ice Wash)',
    mediumEn: 'Extra Heavy Load of Pumice Stones (More Pumice)',
    mediumBn: 'অতিরিক্ত বেশি পরিমাণে পিউমিস স্টোন (More Pumice)',
    bleachAgentEn: 'Concentrated PP / Hypochlorite + Heavy Stone Battering',
    bleachAgentBn: 'উচ্চ ঘনত্বের ব্লিচ এজেন্ট ভেজানো প্রচুর পাথরের ঘর্ষণ',
    contrastEffectEn: 'Frosty, snow-white dominant surface (whiter than Acid Wash)',
    contrastEffectBn: 'তুষারের মতো ধবধবে সাদা প্রাধান্য (অ্যাসিড ওয়াশের চেয়ে বেশি সাদা)',
    swatchColors: ['#60a5fa', '#e2e8f0', '#ffffff'],
  },
  {
    washNameEn: 'Cloud Wash ( & Knit Acid Wash)',
    washNameBn: 'ক্লাউড ওয়াশ ও নিট অ্যাসিড ওয়াশ (Cloud Wash)',
    mediumEn: 'Thermocol / Styrofoam Balls (Lightweight Flexible Foam Media)',
    mediumBn: 'থার্মোকল বা স্টাইরোফোম বল (হালকা নমনীয় ফোম বল)',
    bleachAgentEn: 'Potassium Permanganate / Bleach soaked on lightweight Thermocol balls (safe for knits)',
    bleachAgentBn: 'থার্মোকল বা স্টাইরোফোম বলে লাগানো ব্লিচ কেমিক্যাল (নিট কাপড়ের জন্য নিরাপদ)',
    contrastEffectEn: 'Soft, billowy, larger cloud-like patches without sharp stone damage or pilling',
    contrastEffectBn: 'মেঘের মতো বড়, নরম ও মোলায়েম সাদা-নীল ছোপ (কাপড় ছিদ্র বা পিলিং হয় না)',
    swatchColors: ['#1d4ed8', '#60a5fa', '#dbeafe'],
  },
];

// 9. Tinting vs. Overdyeing Concise Matrix
export const GARMENT_DYE_MATRIX: GarmentDyeComparison[] = [
  {
    parameterEn: 'Purpose & Visual Goal',
    parameterBn: 'মূল উদ্দেশ্য ও ভিজ্যুয়াল লুক',
    tintingEn: 'Adds subtle warm/vintage cast (0.001%–0.002% yellow, pink, tea, khaki) to abraded white yarns.',
    tintingBn: 'ওয়াশের পর সাদা সুতায় হালকা ভিন্টেজ/চা-রঙা বা মেটে আভা (০.০০১%–০.০০২% ডাই) যোগ করে।',
    overdyeingEn: 'Completely changes the garment color or rescues/saturates faded/RFD jeans in bold hues.',
    overdyeingBn: 'পুরো পোশাকের রঙ পরিবর্তন করে অথবা RFD/ওয়াশড জিন্সকে গাঢ় নতুন রঙে রাঙিয়ে তোলে।',
  },
  {
    parameterEn: 'Base Fabric Used',
    parameterBn: 'ব্যবহৃত বেস কাপড়',
    tintingEn: 'Indigo-dyed denim (after enzyme/bleach wash; applied only on garments, not fabric)',
    tintingBn: 'ইনডিগো ডেনিম (এনজাইম বা ব্লিচ ওয়াশের পর কেবল তৈরি পোশাকে প্রয়োগ করা হয়)',
    overdyeingEn: 'RFD (Ready-For-Dyeing) grey/white garments OR pigment-dyed/washed indigo denim',
    overdyeingBn: 'RFD (Ready-For-Dyeing) সাদা পোশাক অথবা পিগমেন্ট/ওয়াশড ইনডিগো ডেনিম',
  },
  {
    parameterEn: 'Typical Dye Concentration & Recipe',
    parameterBn: 'রঙের ঘনত্ব ও রেসিপি (Dye %)',
    tintingEn: '~0.001% – 0.3% Direct or Reactive dye (indigo remains dominant)',
    tintingBn: '~০.০০১% – ০.৩% ডিরেক্ট বা রিঅ্যাক্টিভ ডাই (নীল রঙ প্রধান থাকে)',
    overdyeingEn: '~1.5% – 8.0% Reactive/Direct/Pigment dye + 50 g/L Glauber salt + 20 g/L Soda ash at 80°C',
    overdyeingBn: '~১.৫% – ৮.০% রিঅ্যাক্টিভ/ডিরেক্ট/পিগমেন্ট ডাই + ৫০ g/L গ্লুবার সল্ট + ২০ g/L সোডা অ্যাশ (৮০°C)',
  },
  {
    parameterEn: 'Stitch Thread & Trim Behavior',
    parameterBn: 'সেলাইয়ের সুতা ও অ্যাক্সেসরিজ',
    tintingEn: 'Polyester threads stay original gold/white; cotton pocket bags tint slightly.',
    tintingBn: 'পলিয়েস্টার সুতার রঙ বদলায় না; সুতি পকেট ব্যাগ হালকা রঙিন হয়।',
    overdyeingEn: 'Requires core-spun cotton thread, polyester buttons & nickel hardware; tight seams resist dye penetration.',
    overdyeingBn: 'কোর-স্পান সুতি সুতা, পলিয়েস্টার বাটন ও নিকেল মেটাল আবশ্যক; অতিরিক্ত টাইট সেলাইয়ের নিচে রঙ ঢোকে না।',
  },
];

// 10. "KEY STEPS" Horizontal Flow Strips for Each Wash ID
export const WASH_KEY_STEPS_FLOW: Record<string, { en: string[]; bn: string[] }> = {
  'raw-rigid': {
    en: ['01 Loomstate weave', '02 Singeing', '03 Sanforizing', '04 Inspection'],
    bn: ['০১ লুমস্টেট বুনন', '০২ সিঞ্জিং', '০৩ স্যানফোরাইজিং', '০৪ কিউএ প্যাকিং'],
  },
  'rinse-wash': {
    en: ['01 Desizing', '02 Warm rinse', '03 Softening', '04 Hydro extract', '05 Tumble dry'],
    bn: ['০১ ডি-সাইজিং', '০২ ওয়ার্ম রিন্স', '০৩ সফটনিং', '০৪ হাইড্রো এক্সট্রাক্ট', '০৫ টাম্বল ড্রাই'],
  },
  'mid-stone-enzyme': {
    en: ['01 Dry scraping', '02 Desizing', '03 Enzyme stone', '04 Anti-backstain rinse', '05 Softening', '06 Tumble dry'],
    bn: ['০১ ড্রাই স্ক্র্যাপিং', '০২ ডি-সাইজিং', '০৩ এনজাইম স্টোন', '০৪ অ্যান্টি-ব্যাকস্টেইন রিন্স', '০৫ সফটনিং', '০৬ টাম্বল ড্রাই'],
  },
  'bleach-ice-wash': {
    en: ['01 Dry process', '02 Desizing', '03 Heavy stone', '04 Chlorine bleach', '05 Antichlor', '06 Optical brightener', '07 Tumble dry'],
    bn: ['০১ ড্রাই প্রসেস', '০২ ডি-সাইজিং', '০৩ হেভি স্টোন', '০৪ ক্লোরিন ব্লিচ', '০৫ অ্যান্টিক্লোর', '০৬ ব্রাইটেনার', '০৭ টাম্বল ড্রাই'],
  },
  'acid-snow-wash': {
    en: ['01 Desizing', '02 Hydro extract', '03 PP-soaked pumice tumble', '04 Metabisulfite neutralizing', '05 Double rinse', '06 Tumble dry'],
    bn: ['০১ ডি-সাইজিং', '০২ হাইড্রো এক্সট্রাক্ট', '০৩ পিপি ভেজানো পাথরে ড্রাই টাম্বল', '০৪ নিউট্রালাইজিং', '০৫ ডাবল রিন্স', '০৬ টাম্বল ড্রাই'],
  },
  'vintage-dirty-wash': {
    en: ['01 Whiskering & sanding', '02 Desizing', '03 Enzyme stone', '04 PP spray', '05 Neutralizing', '06 Khaki tinting', '07 3D resin bake'],
    bn: ['০১ হুইস্কার ও স্যান্ডিং', '০২ ডি-সাইজিং', '০৩ এনজাইম স্টোন', '০৪ পিপি স্প্রে', '০৫ নিউট্রালাইজিং', '০৬ খাকি টিন্টিং', '০৭ ৩ডি রেজিন বেক'],
  },
  'eco-laser-ozone': {
    en: ['01 CO2 laser art (90s)', '02 Cold nebulized enzyme', '03 Ozone gas cabinet', '04 Nano-bubble softener', '05 Heat recovery dry'],
    bn: ['০১ CO2 লেজার (৯০ সে.)', '০২ কোল্ড মিস্ট এনজাইম', '০৩ ওজোন গ্যাস ব্লিচ', '০৪ ন্যানো-বাবল সফটনার', '০৫ হিট-রিকভারি ড্রাই'],
  },
  'black-to-grey': {
    en: ['01 Thigh scraping', '02 Desizing', '03 Acid cellulase + stone', '04 Mild H2O2 strip', '05 Antichlor', '06 Silicone softener'],
    bn: ['০১ থাই স্ক্র্যাপিং', '০২ ডি-সাইজিং', '০৩ অ্যাসিড সেলুলেজ + স্টোন', '০৪ মৃদু পারঅক্সাইড', '০৫ অ্যান্টিক্লোর', '০৬ সিলিকন সফটনার'],
  },
  'pigment-caustic-wash': {
    en: ['01 Caustic + Soda ash (55°C)', '02 Hot wash (50°C)', '03 Acetic acid souring', '04 Flax + Silicone (M:L 1:6)', '05 Hydro & Steam dry'],
    bn: ['০১ কস্টিক + সোডা অ্যাশ (৫৫°C)', '০২ হট ওয়াশ (৫০°C)', '০৩ অ্যাসিটিক অ্যাসিড নিষ্ক্রিয়করণ', '০৪ ফ্ল্যাক্স + সিলিকন (১:৬)', '০৫ হাইড্রো ও স্টিম ড্রাই'],
  },
  'super-white-wash': {
    en: ['01 Scour-bleach H2O2 (90°C)', '02 Refine H2O2 bleach', '03 Hot wash', '04 Acetic acid souring', '05 OBA brightening', '06 Non-ionic softener'],
    bn: ['০১ ১ম পারঅক্সাইড ব্লিচ (৯০°C)', '০২ ২য় রিফাইন ব্লিচ', '০৩ হট ওয়াশ', '০৪ অ্যাসিটিক অ্যাসিড', '০৫ ওবিএ (OBA) ব্রাইটেনিং', '০৬ নন-আয়নিক সফটনার'],
  },
};

/**
 * Pure helper to retrieve localized concise key steps for any wash recipe ID
 */
export function getConciseKeyStepsForWash(washId: string, lang: Language = 'bn'): string[] {
  const entry = WASH_KEY_STEPS_FLOW[washId];
  if (!entry) {
    return lang === 'bn'
      ? ['০১ ডি-সাইজিং', '০২ এনজাইম ওয়াশ', '০৩ রিন্সিং', '০৪ টাম্বল ড্রাই']
      : ['01 Desizing', '02 Enzyme wash', '03 Rinsing', '04 Tumble dry'];
  }
  return lang === 'bn' ? entry.bn : entry.en;
}

/**
 * Pure helper to calculate dye penetration ratio and contrast index for yarn cross-section
 */
export function getDyeRingMetrics(dyeId: DyeCrossSectionSpec['id'], dips: number): {
  ringDepthPercent: number;
  whiteCorePercent: number;
  contrastScore: number;
} {
  const clampedDips = Math.max(2, Math.min(24, dips));
  if (dyeId === 'reactive') {
    return { ringDepthPercent: 100, whiteCorePercent: 0, contrastScore: 10 };
  }
  if (dyeId === 'sulfur-bottom') {
    const ring = Math.min(65, 20 + clampedDips * 2);
    return { ringDepthPercent: ring, whiteCorePercent: 0, contrastScore: 68 };
  }
  const ringDepthPercent = Math.min(72, Math.round(18 + clampedDips * 2.1));
  const whiteCorePercent = 100 - ringDepthPercent;
  const contrastScore = Math.min(99, Math.round(45 + clampedDips * 2.2));
  return { ringDepthPercent, whiteCorePercent, contrastScore };
}
