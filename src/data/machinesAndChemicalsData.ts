import { Language } from '../utils/i18n.ts';

export interface SewingMachineVideoSpec {
  id: string;
  stepNum: string;
  nameEn: string;
  nameBn: string;
  modelCode: string;
  stitchClass: string;
  rpm: number;
  spiRange: string;
  needleSpec: string;
  threadTex: string;
  videoDurationSec: number;
  animationMode: 'felling' | 'twin-needle' | 'keyhole' | 'waistband' | 'bartack' | 'belt-loop' | 'hemming';
  youtubeUrl: string;
  youtubeEmbedId: string;
  videoTitleEn: string;
  videoTitleBn: string;
  whatItDoesEn: string;
  whatItDoesBn: string;
  howOperatedEn: string;
  howOperatedBn: string;
  disadvantagesEn: string;
  disadvantagesBn: string;
}

export interface WashingMachineSpec {
  id: string;
  code: string;
  nameEn: string;
  nameBn: string;
  machineType:
    | 'belly-washer'
    | 'front-washer'
    | 'hydro-extractor'
    | 'tumble-dryer'
    | 'laser-system'
    | 'ozone-cabinet'
    | 'curing-oven'
    | 'sample-rotary-washer'
    | 'pp-spray-booth';
  capacityKg: string;
  speedOrTemp: string;
  liquorRatio: string;
  youtubeUrl: string;
  youtubeEmbedId: string;
  videoTitleEn: string;
  videoTitleBn: string;
  whatItDoesEn: string;
  whatItDoesBn: string;
  howOperatedEn: string;
  howOperatedBn: string;
  disadvantagesEn: string;
  disadvantagesBn: string;
}

export interface WashingChemicalSpec {
  id: string;
  code: string;
  nameEn: string;
  nameBn: string;
  chemicalFormula: string;
  categoryEn: string;
  categoryBn: string;
  dosageRange: string;
  tempRange: string;
  phRange: string;
  hazardLevel: 'Low (Bio)' | 'Medium' | 'High (Restricted)';
  swatchColor: string;
  whatItDoesEn: string;
  whatItDoesBn: string;
  howOperatedEn: string;
  howOperatedBn: string;
  disadvantagesEn: string;
  disadvantagesBn: string;
}

// 1. 7 Specialized Denim Sewing Machines + Process Video Specs
export const SEWING_MACHINES_AND_VIDEOS: SewingMachineVideoSpec[] = [
  {
    id: 'felling',
    stepNum: '01',
    nameEn: 'Feed-Off-The-Arm (FOA) Lap-Fell Machine',
    nameBn: 'ফিড-অফ-দ্য-আর্ম (FOA) ফেলিং মেশিন',
    modelCode: 'Union Special 35800 / Juki MS-1261',
    stitchClass: 'ISO 401 (2/3-Needle Chainstitch)',
    rpm: 4200,
    spiRange: '8 – 10 SPI',
    needleSpec: 'Nm 130 / #21 – #22',
    threadTex: 'Tex 105 Needle / Tex 80 Looper',
    videoDurationSec: 18,
    animationMode: 'felling',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Juki+MS-1261+Feed+Off+The+Arm+Denim+Inseam+Felling',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'FOA 3-Needle Denim Inseam & Back Yoke Lap-Felling Video',
    videoTitleBn: 'ফিড-অফ-দ্য-আর্ম ৩-নিডল ডেনিম ইনসিম ও ইয়ক ফেলিং প্রসেস ভিডিও',
    whatItDoesEn:
      'Interlocks two raw denim edges inside a lap-felled folder and sews 2 or 3 parallel chainstitch rows on inseams, back yokes, and seat risers.',
    whatItDoesBn:
      'ডেনিমের দুটি কাঁচা প্রান্ত ল্যাপ-ফেল ফোল্ডারের ভেতরে মুড়িয়ে ইনসিম, ব্যাক ইয়ক ও সিট রাইজারে ২ বা ৩ সারি শক্তিশালী চেইন-স্টিচ সেলাই দেয়।',
    howOperatedEn:
      'The operator feeds the left and right fabric panels into opposite scroll slots of the lap-fell folder while sliding the closed trouser leg over the cantilevered tubular arm using a tractor presser foot.',
    howOperatedBn:
      'অপারেটর কাপড়ের দুই প্রান্ত ফোল্ডারের দুই স্লটে প্রবেশ করান এবং প্যান্টের টিউবুলার পা মেশিনের ঝুলন্ত লম্বা আর্মের ওপর দিয়ে চালিয়ে ট্র্যাক্টর প্রেসার ফুটের সাহায্যে দ্রুত সেলাই করেন।',
    disadvantagesEn:
      '1. High thread consumption (3.5x lockstitch). 2. If one looper thread breaks, the entire seam can unravel (runback). 3. Folder choking occurs over thick 14oz+ cross-seams.',
    disadvantagesBn:
      '১. সুতার খরচ অনেক বেশি (লকস্টিচের চেয়ে ৩.৫ গুণ)। ২. লুপারের একটি সুতা ছিঁড়ে গেলে পুরো সেলাই খুলে যাওয়ার (Runback) ঝুঁকি থাকে। ৩. ১৪ oz+ মোটা কাপড়ের সংযোগস্থলে ফোল্ডার আটকে বা স্কিপ হতে পারে।',
  },
  {
    id: 'twin-needle',
    stepNum: '02',
    nameEn: 'Twin-Needle Lockstitch Machine',
    nameBn: 'টুইন-নিডল লকস্টিচ মেশিন (ডাবল নিডল)',
    modelCode: 'Juki LH-3588A / Brother LT2-B842',
    stitchClass: 'ISO 301 (Double Lockstitch)',
    rpm: 3200,
    spiRange: '8 – 9 SPI',
    needleSpec: 'Nm 125 / #20',
    threadTex: 'Tex 80 / Tex 105 Core-Spun',
    videoDurationSec: 16,
    animationMode: 'twin-needle',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Juki+LH-3588A+Double+Needle+Lockstitch+Jeans+Pocket',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'Twin-Needle Split-Bar Cornering on Jeans Back Pocket & J-Fly',
    videoTitleBn: 'টুইন-নিডল মেশিনে ব্যাক পকেট কর্নার ও জে-স্টিচ ফ্লাই সেলাই ভিডিও',
    whatItDoesEn:
      'Sews two parallel rows of non-unraveling lockstitches simultaneously for front J-stitch fly fronts, front scoop pockets, and back patch pocket attachment.',
    whatItDoesBn:
      'সামনের জে-স্টিচ (J-Stitch) ফ্লাই, ফ্রন্ট পকেট এবং ব্যাক পকেট সংযোজনের জন্য একই সাথে দুই সারি সমান্তরাল ও মজবুত লকস্টিচ সেলাই তৈরি করে।',
    howOperatedEn:
      'Equipped with split-needle bar disengagement: when turning a 90° corner on a back pocket, the operator engages a lever to pause the inner needle so the corner pivots cleanly without crossing stitches.',
    howOperatedBn:
      'এতে স্প্লিট-নিডল বার মেকানিজম থাকে; ব্যাক পকেটের কোণায় ঘোরার সময় অপারেটর লিভার চেপে ভেতরের সুই থামিয়ে দেন, ফলে কোণায় সেলাই ওভারল্যাপ ছাড়াই নিখুঁতভাবে ঘোরে।',
    disadvantagesEn:
      '1. Small metal bobbins run out every 15–20 jeans when using thick Tex 105 thread. 2. Lower seam elasticity than chainstitch—can snap under extreme stretch.',
    disadvantagesBn:
      '১. মোটা Tex 105 সুতা ব্যবহারের ফলে প্রতি ১৫–২০টি প্যান্ট পর পর ববিনের সুতা শেষ হয়ে যায়। ২. চেইন-স্টিচের তুলনায় নমনীয়তা কম, তাই অতিরিক্ত টানে সুতা ছিঁড়তে পারে।',
  },
  {
    id: 'keyhole',
    stepNum: '03',
    nameEn: 'Eyelet / Keyhole Buttonhole Machine',
    nameBn: 'আইলেট / কি-হোল বাটনহোল মেশিন',
    modelCode: 'Reece S2 / Juki MEB-3200SS',
    stitchClass: 'ISO 304 / 401 Purl Eyelet',
    rpm: 2200,
    spiRange: '85 – 110 Stitches / Hole',
    needleSpec: 'Nm 110 / #18',
    threadTex: 'Tex 60 Top / Tex 180 Gimp Cord',
    videoDurationSec: 12,
    animationMode: 'keyhole',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Juki+MEB-3200+Eyelet+Keyhole+Buttonhole+Denim+Jeans',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'Automatic Keyhole Eyelet Buttonhole & Knife Slitting Process',
    videoTitleBn: 'অটোমেটিক কি-হোল বাটনহোল সেলাই ও নাইফ কাটিং প্রসেস ভিডিও',
    whatItDoesEn:
      'Punches a teardrop keyhole slot into heavy waistbands and wraps the raw edge with dense purl stitches over a thick gimp cord to accommodate metal shank buttons.',
    whatItDoesBn:
      'মোটা ওয়েস্টব্যান্ডে টিয়ারড্রপ (চাবির ঘরের মতো) ছিদ্র কেটে তার চারপাশে মোটা গিম্প কর্ডের ওপর ঘন সেলাই দিয়ে মেটাল শ্যাঙ্ক বাটনের ঘর তৈরি করে।',
    howOperatedEn:
      'The operator places the waistband under the pneumatic clamp and presses the foot pedal; the machine automatically stitches the eyelet contour around a filler cord and drops a steel knife to slit the center.',
    howOperatedBn:
      'অপারেটর ওয়েস্টব্যান্ডটি নিউম্যাটিক ক্ল্যাম্পের নিচে রেখে পেডাল চাপেন; মেশিন স্বয়ংক্রিয়ভাবে কর্ডের চারপাশে সেলাই করে এবং স্টিল নাইফ নামিয়ে মাঝখানটা নিখুঁতভাবে কেটে দেয়।',
    disadvantagesEn:
      '1. Dull cutter blades leave frayed cotton whiskers inside the hole. 2. Misaligned knife drops can slice through the purl stitching, ruining the entire finished jean.',
    disadvantagesBn:
      '১. কাটার ব্লেড ভোঁতা হয়ে গেলে ছিদ্রের ভেতর সুতার রোঁয়া বের হয়ে থাকে। ২. নাইফের পজিশন সামান্য নড়ে গেলে সেলাই কেটে গিয়ে পুরো প্যান্ট রিজেক্ট হয়ে যায়।',
  },
  {
    id: 'waistband',
    stepNum: '04',
    nameEn: '4-Needle Chainstitch Waistband Machine',
    nameBn: '৪-নিডল চেইন-স্টিচ ওয়েস্টব্যান্ড মেশিন',
    modelCode: 'Kansai Special DFB-1404P / Union Special',
    stitchClass: 'ISO 401 (4-Needle Parallel)',
    rpm: 3800,
    spiRange: '8 SPI',
    needleSpec: 'Nm 130 / #21',
    threadTex: 'Tex 105 Top / Tex 80 Looper',
    videoDurationSec: 15,
    animationMode: 'waistband',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Kansai+Special+4+Needle+Denim+Waistband+Machine+Folder',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'Kansai 4-Needle Continuous Waistband Folder & Puller Feed',
    videoTitleBn: 'কানসাই ৪-নিডল ওয়েস্টব্যান্ড ফোল্ডার ও পুলার ফিডিং প্রসেস ভিডিও',
    whatItDoesEn:
      'Folds continuous waistband strip + fusible interlining around the top of the jean body and attaches it in a single pass with 2 upper and 2 lower rows of chainstitch.',
    whatItDoesBn:
      'লম্বা ওয়েস্টব্যান্ডের কাপড় ও ইন্টারলাইনিং একসাথে ভাঁজ করে প্যান্টের কোমরের সাথে একবারেই উপরে ও নিচে সমান্তরাল চেইন-স্টিচে সংযুক্ত করে।',
    howOperatedEn:
      'Roll-fed waistband fabric passes through a precision folder guide while a rear synchronous puller roller grips the heavy denim body to maintain uniform tension and zero puckering.',
    howOperatedBn:
      'রোল থেকে ওয়েস্টব্যান্ডের কাপড় ফোল্ডার গাইডের ভেতর দিয়ে যায় এবং পেছনের পুলার রোলার প্যান্টের বডিকে সমান টানে টেনে নিয়ে কুঁচকানো (Puckering) ছাড়াই সেলাই সম্পন্ন করে।',
    disadvantagesEn:
      '1. Cannot finish the waistband ends (requires a separate single-needle corner closing operation). 2. Incorrect puller tension twists or waves the waistband.',
    disadvantagesBn:
      '১. ওয়েস্টব্যান্ডের দুই মাথা বন্ধ করতে পারে না (এর জন্য আলাদা সিঙ্গেল-নিডল মেশিন লাগে)। ২. পুলার রোলারের টান কম-বেশি হলে কোমরের ব্যান্ড বাঁকা বা ঢেউ খেলানো হয়ে যায়।',
  },
  {
    id: 'bartack',
    stepNum: '05',
    nameEn: 'Computerized 42-Stitch Bar-Tack Machine',
    nameBn: 'কম্পিউটারাইজড ৪২-স্টিচ বার-ট্যাক মেশিন',
    modelCode: 'Juki LK-1900BN / Brother KE-430HX',
    stitchClass: 'ISO 304 (High-Density Zigzag Tack)',
    rpm: 3000,
    spiRange: '42 Stitches (12mm–16mm)',
    needleSpec: 'Nm 120 / #19 – #20',
    threadTex: 'Tex 60 / Tex 80 Core-Spun',
    videoDurationSec: 10,
    animationMode: 'bartack',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Juki+LK-1900BN+Bartack+Denim+Belt+Loop+Jeans',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'High-Speed 42-Stitch Bartack on Denim Belt Loops & Pocket Corners',
    videoTitleBn: 'হাই-স্পিড ৪২-স্টিচ বার-ট্যাক মেশিনে বেল্ট লুপ ও পকেট লক ভিডিও',
    whatItDoesEn:
      'Locks high-stress points—belt loops, J-stitch fly base, coin pocket corners, and back pocket top corners—with a dense 42-stitch zigzag reinforcement bar.',
    whatItDoesBn:
      'অতিরিক্ত চাপ পড়ে এমন স্থান—বেল্ট লুপ, ফ্লাইয়ের নিচের অংশ এবং পকেটের কোণায় ঘন ৪২-স্টিচের জিগজ্যাগ বার-ট্যাক দিয়ে সেলাই লক করে।',
    howOperatedEn:
      'The operator positions the stress point under the slotted clamping foot and depresses the pedal; the servo XY table executes 42 stitches and auto-trims threads in 0.8 seconds.',
    howOperatedBn:
      'অপারেটর নির্দিষ্ট স্থানটি ক্ল্যাম্প ফুটের নিচে রেখে পেডাল চাপেন; সার্ভো মোটর মাত্র ০.৮ সেকেন্ডে ৪২টি ঘন স্টিচ দিয়ে স্বয়ংক্রিয়ভাবে সুতা কেটে দেয়।',
    disadvantagesEn:
      '1. High needle-breakage rate when striking extreme 8-layer denim thickness at belt loops. 2. Too-tight tension cuts through stretch elastane yarns, causing "bar-tack holes" after stone washing.',
    disadvantagesBn:
      '১. বেল্ট লুপের ৮-স্তর মোটা কাপড়ে সুই ভেঙে যাওয়ার ঝুঁকি বেশি থাকে। ২. স্ট্রেচ ডেনিমে অতিরিক্ত টাইট বার-ট্যাক দিলে স্টোন ওয়াশের পর পকেটের কোণায় ছিদ্র (Bar-tack hole) হয়ে যায়।',
  },
  {
    id: 'belt-loop',
    stepNum: '06',
    nameEn: 'Belt-Loop Folder & Coverstitch Machine',
    nameBn: 'বেল্ট-লুপ ফোল্ডার ও কভারস্টিচ মেশিন',
    modelCode: 'Kansai Special / Yamato VF2500',
    stitchClass: 'ISO 406 (2-Needle Bottom Coverstitch)',
    rpm: 4500,
    spiRange: '9 – 10 SPI',
    needleSpec: 'Nm 110 / #18',
    threadTex: 'Tex 60 Needle / Tex 40 Looper',
    videoDurationSec: 14,
    animationMode: 'belt-loop',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Denim+Jeans+Belt+Loop+Making+Coverstitch+Machine',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'Continuous Raised Rope Belt-Loop Coverstitch & Auto Cutter',
    videoTitleBn: 'কভারস্টিচ মেশিনে একটানা ডেনিম বেল্ট-লুপ তৈরি ও কাটিং ভিডিও',
    whatItDoesEn:
      'Folds a narrow strip of denim around an inner filler cord to produce continuous raised ("rope") or flat belt-loop strapping ready for automatic cutting.',
    whatItDoesBn:
      'সরু ডেনিমের স্ট্রিপকে ভেতরের কর্ডসহ ভাঁজ করে একটানা রেইজড (উঁচু) বা ফ্ল্যাট বেল্ট লুপ তৈরি করে, যা পরে নির্দিষ্ট মাপে কাটা হয়।',
    howOperatedEn:
      'Pre-cut bias or warp denim tape feeds continuously from a reel through a snail folder while two needles stitch the top and a bottom looper binds the raw edges underneath.',
    howOperatedBn:
      'রিল থেকে ডেনিমের ফিতা স্নেইল ফোল্ডারের ভেতর দিয়ে স্বয়ংক্রিয়ভাবে প্রবেশ করে; উপরে দুটি সুই সেলাই দেয় এবং নিচে লুপার কাঁচা প্রান্তগুলো জালের মতো বেঁধে ফেলে।',
    disadvantagesEn:
      '1. Any seam joint in the feed tape jams the narrow folder mouth. 2. Skipped bottom coverstitches cause belt loops to fray open during heavy enzyme stone washing.',
    disadvantagesBn:
      '১. কাপড়ের ফিতায় জোড়া থাকলে সরু ফোল্ডারের মুখে আটকে মেশিন জ্যাম হয়ে যায়। ২. নিচের কভারস্টিচ স্কিপ করলে হেভি স্টোন ওয়াশের সময় বেল্ট লুপ খুলে যায়।',
  },
  {
    id: 'hemming',
    stepNum: '07',
    nameEn: 'Cylinder-Bed Chainstitch Hemmer ("Bulldog")',
    nameBn: 'সিলিন্ডার-বেড চেইন-স্টিচ হেমিং মেশিন (Union Special)',
    modelCode: 'Union Special 43200G / Juki MH-380',
    stitchClass: 'ISO 401 (Single-Needle Chainstitch)',
    rpm: 3600,
    spiRange: '7 – 8 SPI',
    needleSpec: 'Nm 130 / #21',
    threadTex: 'Tex 105 Top / Tex 80 Looper',
    videoDurationSec: 16,
    animationMode: 'hemming',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Union+Special+43200G+Denim+Chainstitch+Hemming+Roping',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'Union Special 43200G "Bulldog" Chainstitch Hemming & Roping Effect',
    videoTitleBn: 'ইউনিয়ন স্পেশাল ৪৩২০০জি চেইন-স্টিচ বটম হেমিং ও রোপিং ইফেক্ট ভিডিও',
    whatItDoesEn:
      'Double-folds and stitches the tubular bottom leg opening while introducing differential torque that creates the coveted vintage diagonal "roping effect" after washing.',
    whatItDoesBn:
      'প্যান্টের নিচের বটম হেম ডাবল-ফোল্ড করে চেইন-স্টিচ সেলাই দেয় এবং অসম টানের মাধ্যমে ওয়াশের পর ঐতিহ্যবাহী তির্যক "রোপিং ইফেক্ট (Roping)" তৈরি করে।',
    howOperatedEn:
      'The operator slips the leg opening around the compact cylinder bed and guides the raw edge into the helical folder; the angled feed dogs pull the bottom layer slightly faster than the top.',
    howOperatedBn:
      'অপারেটর প্যান্টের নিচের অংশ ছোট সিলিন্ডার বেডে পরিয়ে হেলিক্যাল ফোল্ডারে কাপড়ের প্রান্ত ধরেন; এর বাঁকানো ফিড-ডগ নিচের স্তরকে উপরের স্তরের চেয়ে সামান্য দ্রুত টানে।',
    disadvantagesEn:
      '1. Climbing over the thick felled inseam/outseam "hump" often causes skipped stitches or broken needles. 2. Original vintage 43200G spare parts are scarce and require master mechanics.',
    disadvantagesBn:
      '১. ইনসিম ও আউটসিমের মোটা জোড়ার (Hump) ওপর দিয়ে যাওয়ার সময় প্রায়ই স্টিচ স্কিপ হয় বা সুই ভেঙে যায়। ২. আসল Union Special 43200G মেশিনের পার্টস দুষ্প্রাপ্য ও রক্ষণাবেক্ষণ কঠিন।',
  },
];

// 2. 9 Industrial Washing & Dry Finishing Machines (Wet & Dry Laundry Equipment)
export const WASHING_MACHINES_DATA: WashingMachineSpec[] = [
  {
    id: 'belly-washer',
    code: 'W-MC-01',
    nameEn: 'Side-Loading Belly / Open-Pocket Washing Machine',
    nameBn: 'সাইড-লোডিং বেলি / ওপেন-পকেট ওয়াশিং মেশিন',
    machineType: 'belly-washer',
    capacityKg: '100 – 300 kg / batch',
    speedOrTemp: '22 – 32 RPM • Up to 90°C',
    liquorRatio: '1:8 to 1:12 (High Water)',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Industrial+Denim+Belly+Washing+Machine+Stone+Wash+Process',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'Industrial Belly Washer Pumice Stone & Enzyme Washing Process',
    videoTitleBn: 'ইন্ডাস্ট্রিয়াল বেলি ওয়াশিং মেশিনে স্টোন ও এনজাইম ওয়াশ ভিডিও',
    whatItDoesEn:
      'Executes heavy-duty desizing, pumice stone washing, enzyme abrasion, chlorine/peroxide bleaching, caustic washing, and neutralization for large bulk batches (150–300 jeans per load).',
    whatItDoesBn:
      'একবারে ১৫০–৩০০টি জিন্সের বড় ব্যাচে ডি-সাইজিং, পিউমিস স্টোন ওয়াশ, এনজাইম অ্যাব্রেশন, ব্লিচিং, কস্টিক ওয়াশ এবং নিউট্রালাইজেশন সম্পন্ন করে।',
    howOperatedEn:
      'Garments and volcanic pumice stones (½ weight of garments) are loaded through mechanically interlocked stainless-steel side doors into a horizontal perforated inner drum driven by a heavy-duty V-belt gear motor with auto-timed forward/reverse agitation, gauge glass water-level indicator, and direct steam heating.',
    howOperatedBn:
      'মেকানিক্যালি ইন্টারলকড স্টেইনলেস স্টিলের আনুভূমিক দরজা দিয়ে কাপড় ও পিউমিস স্টোন ছিদ্রযুক্ত ড্রামে ভরা হয়; অটো-রিভার্স গিয়ার মোটর, ওয়াটার লেভেল গজ গ্লাস এবং ডিরেক্ট স্টিম হিটিংয়ের মাধ্যমে এটি ঘড়ির কাঁটার দিকে ও বিপরীতে ঘুরে ওয়াশ সম্পন্ন করে।',
    disadvantagesEn:
      '1. High water and steam consumption (liquor ratio 1:8–1:12). 2. Heavy pumice stone battering pits the steel drum and causes long crease streaks if overloaded or run at too low M:L ratio.',
    disadvantagesBn:
      '১. পানি ও স্টিম খরচ অনেক বেশি (লিক্যার রেশিও ১:৮–১:১২)। ২. পাথরের অনবরত আঘাতে ড্রাম ক্ষয় হয় এবং অতিরিক্ত কাপড় বা কম পানিতে চালালে লম্বালম্বি ক্রিস মার্ক (Crease mark) পড়ে।',
  },
  {
    id: 'front-washer',
    code: 'W-MC-02',
    nameEn: 'Front-Loading Eco Jet / Smart Rotary Washer',
    nameBn: 'ফ্রন্ট-লোডিং ইকো-জেট ও রোটারি ওয়াশার',
    machineType: 'front-washer',
    capacityKg: '60 – 180 kg / batch',
    speedOrTemp: '10 – 45 RPM (Auto-Reverse & Extract)',
    liquorRatio: '1:3 to 1:5 (Low Liquor)',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Tonello+Jeanologia+Eco+Front+Loading+Denim+Washing+Machine',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'Low-Liquor Smart Rotary Jet Washer & Nebulized Enzyme Process',
    videoTitleBn: 'ফ্রন্ট-লোডিং ইকো-জেট মেশিনে কম পানিতে মিস্ট এনজাইম ওয়াশ ভিডিও',
    whatItDoesEn:
      'Uses gravity and side-mounted baffles (without a central agitator) for low-water nebulized enzyme washing, stone washing, and high-temperature rotary garment dyeing.',
    whatItDoesBn:
      'গ্র্যাভিটি ও সাইড-বাফেল ব্যবহার করে কম পানিতে (Low Liquor) মিস্ট এনজাইম ওয়াশ, স্টোন ওয়াশ এবং রোটারি গার্মেন্টস ডাইং পরিচালনা করে।',
    howOperatedEn:
      'Loaded via a large toughened-glass front door that locks mechanically during the cycle; features separate wash/extract motors, electrically operated water and steam valves, auto water-level control, and high-pressure jet nozzles controlled by a PCB/PLC program.',
    howOperatedBn:
      'সামনের টাফেনড গ্লাসের বড় দরজা দিয়ে কাপড় লোড করার পর দরজাটি স্বয়ংক্রিয়ভাবে লক হয়ে যায়; এতে ওয়াশ ও এক্সট্রাক্টের জন্য আলাদা মোটর, অটো ওয়াটার লেভেল কন্ট্রোল এবং পিএলসি (PLC) নিয়ন্ত্রিত হাই-প্রেসার জেট নজল থাকে।',
    disadvantagesEn:
      '1. High capital investment ($65,000–$120,000 per machine). 2. Spray nozzles and drain pumps clog easily if pumice stone grit or lint is not filtered every shift.',
    disadvantagesBn:
      '১. মেশিনের প্রাথমিক দাম অত্যন্ত বেশি ($৬৫,০০০–$১,২০,০০০)। ২. পাথরের গুঁড়ো বা সুতার আঁশ ফিল্টার না করলে স্প্রে নজল ও পাম্প দ্রুত ব্লক হয়ে যায়।',
  },
  {
    id: 'hydro-extractor',
    code: 'W-MC-03',
    nameEn: 'Centrifugal Hydro Extractor (Spin Dewatering)',
    nameBn: 'সেন্ট্রিফিউগাল হাইড্রো এক্সট্রাক্টর (পানি ঝরানো মেশিন)',
    machineType: 'hydro-extractor',
    capacityKg: '100 – 200 kg / load',
    speedOrTemp: '800 – 1,600 RPM • 2–5 min',
    liquorRatio: 'Extracts 70%–75% moisture',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Industrial+Hydro+Extractor+Machine+Garment+Washing+Plant',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'High-RPM Centrifugal Hydro Extractor Dewatering in Denim Laundry',
    videoTitleBn: 'হাইড্রো এক্সট্রাক্টর মেশিনে উচ্চ গতিতে ডেনিমের পানি নিষ্কাশন ভিডিও',
    whatItDoesEn:
      'Spins wet garments at 800–1,600 RPM immediately after softening to squeeze out excess water via centrifugal force, slashing tumble dryer time and energy consumption by half.',
    whatItDoesBn:
      'সফটনিং ওয়াশের পর ভেজা জিন্সকে ৮০০–১,৬০০ RPM গতিতে ঘুরিয়ে সেন্ট্রিফিউগাল শক্তির মাধ্যমে ৭০%–৭৫% অতিরিক্ত পানি বের করে দেয়, ফলে ড্রায়ারে শুকানোর সময় ও শক্তি খরচ অর্ধেক কমে যায়।',
    howOperatedEn:
      'Wet garments are packed symmetrically around the vertical perforated stainless-steel inner drum and secured with a top safety cover; the drum spins at 800–1,600 RPM for 2–4 minutes while extracted water flings outward and exits through the bottom drainpipe.',
    howOperatedBn:
      'ভেজা প্যান্টগুলো খাড়া ছিদ্রযুক্ত স্টেইনলেস স্টিলের ড্রামে সমানভাবে সাজিয়ে সেফটি কভার দিয়ে ঢেকে দেওয়া হয়; এরপর ৮০০–১,৬০০ RPM গতিতে ২–৪ মিনিট ঘুরিয়ে নিষ্কাশিত পানি নিচের ড্রেইন পাইপ দিয়ে বের করে দেওয়া হয়।',
    disadvantagesEn:
      '1. Over-spinning (>5 min) or uneven loading presses sharp hydro crease marks into dark/rigid denim. 2. Severe mechanical vibration if garment bundles are unbalanced.',
    disadvantagesBn:
      '১. অতিরিক্ত সময় (>৫ মিনিট) ঘোরালে গাঢ় নীল ও রিজিড ডেনিমে স্থায়ী ভাঁজ বা ক্রিস দাগ (Hydro crease) বসে যায়। ২. কাপড় সমানভাবে না রাখলে মেশিনে প্রচণ্ড ভাইব্রেশন ও দুর্ঘটনা ঘটতে পারে।',
  },
  {
    id: 'tumble-dryer',
    code: 'W-MC-04',
    nameEn: 'Industrial Steam vs. Gas Reversing Tumble Dryer',
    nameBn: 'ইন্ডাস্ট্রিয়াল স্টিম ও গ্যাস রিভার্সিং টাম্বল ড্রায়ার',
    machineType: 'tumble-dryer',
    capacityKg: '100 – 150 kg / batch',
    speedOrTemp: 'Steam 60–70°C (40–50m) | Gas 70–85°C (30–35m)',
    liquorRatio: '+ 10–15 min Cold Dry Cycle',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Industrial+Tumble+Dryer+Denim+Jeans+Washing+Plant',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'Reversing Steam & Gas Tumble Dryer Operation in Denim Plant',
    videoTitleBn: 'ইন্ডাস্ট্রিয়াল স্টিম ও গ্যাস টাম্বল ড্রায়ারে জিন্স শুকানো ও কুল-ডাউন ভিডিও',
    whatItDoesEn:
      'Dries hydro-extracted garments via heated air circulation while relaxing fabric tension, removing creases (steam dryer), and developing a soft, lofty handfeel.',
    whatItDoesBn:
      'গরম বাতাসের প্রবাহে ভেজা জিন্স শুকানোর পাশাপাশি কাপড়কে ঘুরিয়ে ভাঁজ দূর করে, সুতা রিলাক্স করে এবং নরম হ্যান্ডফিল প্রদান করে।',
    howOperatedEn:
      'Steam dryers use a heat exchanger (60°C–70°C for 40–50 min hot dry + 10–15 min cold dry) to relax and soften garments; Gas dryers burn natural gas/propane in a burner assembly (70°C–85°C for 30–35 min hot dry + 10–15 min cold dry) while the drum reverses direction periodically.',
    howOperatedBn:
      'স্টিম ড্রায়ারে হিট এক্সচেঞ্জারের মাধ্যমে ৬০°C–৭০°C তাপে ৪০–৫০ মিনিট এবং গ্যাস ড্রায়ারে ন্যাচারাল গ্যাস বার্নারে ৭০°C–৮৫°C তাপে ৩০–৩৫ মিনিট গরম বাতাসে শুকানো হয়; সবশেষে ১০–১৫ মিনিট ঠান্ডা বাতাসে (Cold dry) কুল-ডাউন করা হয়।',
    disadvantagesEn:
      '1. Gas dryers produce a yellowish color cast on white or super-white fabrics. 2. Temperatures above 80°C degrade Lycra/spandex elasticity ("Lycra out" defect).',
    disadvantagesBn:
      '১. গ্যাস ড্রায়ারে সাদা বা সুপার-হোয়াইট কাপড় শুকালে কাপড়ে হলদেটে ভাব (Yellowish cast) চলে আসে। ২. ৮০°C-এর বেশি তাপে স্ট্রেচ ডেনিমের লাইক্রা সুতা আলগা হয়ে বেরিয়ে আসে (Lycra out)।',
  },
  {
    id: 'laser-system',
    code: 'W-MC-05',
    nameEn: 'CO2 Digital Laser Marking & Engraving System',
    nameBn: 'CO2 ডিজিটাল লেজার মার্কিং ও ফ্রেডিং মেশিন',
    machineType: 'laser-system',
    capacityKg: '45 – 70 pcs / hour',
    speedOrTemp: '150–250W Avg (230–400W Peak) • 10 µm Gas',
    liquorRatio: '0 Liters • Only 1.31% Strength Loss',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Jeanologia+CO2+Laser+Denim+Jeans+Whiskers+Distressing',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'CO2 Digital Laser Engraving Whiskers & Vintage Fades on Jeans',
    videoTitleBn: 'ডিজিটাল CO2 লেজার মেশিনে জিন্সের হুইস্কার্স ও থাই ফেড তৈরি ভিডিও',
    whatItDoesEn:
      'Replaces hazardous sandblasting, hand sanding, and PP spray by using a computer-driven CO2 laser beam (10 µm wavelength, 50–60 Hz, 1–100 ns pulse width) to vaporize surface indigo with casi-zero strength loss (1.31% warp loss vs. 56.68% for hand sand brush).',
    whatItDoesBn:
      'ক্ষতিকর স্যান্ডব্লাস্টিং, হ্যান্ড স্যান্ডিং ও পিপি স্প্রের বদলে কম্পিউটার নিয়ন্ত্রিত CO2 লেজার রশ্মি (১০ µm ওয়েভলেংথ, ১৫০–২৫০ ওয়াট) ব্যবহার করে মাত্র ১.৩১% শক্তি ক্ষয়ে নিখুঁত হুইস্কার্স, থাই ফেড ও ডিস্ট্রেসড ডিজাইন তৈরি করে (হ্যান্ড স্যান্ডিংয়ে শক্তি কমে ৫৬.৬৮%)।',
    howOperatedEn:
      'A graphic design is converted into an 8-bit grayscale `.bmp` bitmap file; pixel time and DPI resolution are set, the garment is mounted on a honeycomb table or inflatable dummy inside a protective housing with a fume extractor, and the laser beam rapidly melts and vaporizes dye at targeted points.',
    howOperatedBn:
      'ডিজাইনকে গ্রেস্কেল `.bmp` বিটম্যাপ ফাইলে রূপান্তর করে পিক্সেল টাইম ও রেজোলিউশন সেট করা হয়; ফিউম এক্সট্রাক্টরযুক্ত বদ্ধ হাউজিংয়ে হানিকম্ব টেবিল বা ডামিতে প্যান্ট রেখে লেজার রশ্মির তাপে নির্দিষ্ট স্থানের ইনডিগো রঙ বাষ্পীভূত করা হয়।',
    disadvantagesEn:
      '1. Very high initial capital and maintenance cost requiring skilled operators. 2. Uniform digital patterns can look artificial without a light follow-up enzyme wash; laser fumes require strict extraction.',
    disadvantagesBn:
      '১. মেশিন সেটআপ ও রক্ষণাবেক্ষণ খরচ অত্যন্ত বেশি এবং দক্ষ অপারেটর প্রয়োজন। ২. হালকা ওয়াশ ছাড়া শুধু লেজার করলে লুক কিছুটা কৃত্রিম মনে হতে পারে এবং ধোঁয়া বের করার ফিউম এক্সট্রাক্টর ছাড়া স্বাস্থ্যঝুঁকি থাকে।',
  },
  {
    id: 'ozone-cabinet',
    code: 'W-MC-06',
    nameEn: 'Ozone Gas Bleaching & Anti-Backstain Washer',
    nameBn: 'ওজোন গ্যাস ব্লিচিং ও ইকো-ক্যাবিনেট মেশিন',
    machineType: 'ozone-cabinet',
    capacityKg: '80 – 150 kg / cycle',
    speedOrTemp: 'Cold (25°C) • O3 Gas 30–80 g/m³',
    liquorRatio: 'Zero or Damp Tumbling',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Jeanologia+G2+Ozone+Denim+Washing+Machine+Process',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'Waterless Ozone (O3) Gas Bleaching & Pocket Cleaning Process',
    videoTitleBn: 'পানিহীন ওজোন (O3) গ্যাস ব্লিচিং ও ব্যাকস্টেইন ক্লিনিং প্রসেস ভিডিও',
    whatItDoesEn:
      'Bleaches indigo down to sun-faded vintage shades, eliminates backstaining on white pocket bags, and removes yellow cast using triatomic oxygen (O3) gas instead of liquid bleach.',
    whatItDoesBn:
      'তরল ক্লোরিন ব্লিচ ছাড়াই ওজোন গ্যাস (O3) ব্যবহার করে ইনডিগো শেড হালকা করে, সাদা পকেট ব্যাগের নীল দাগ দূর করে এবং কাপড় পরিষ্কার করে।',
    howOperatedEn:
      'An industrial corona-discharge generator converts oxygen from ambient air into O3 gas, which is injected into a hermetically sealed tumbling drum containing damp or dry garments; after 15–25 minutes, residual O3 is catalytically destroyed back into safe O2 before the door unlocks.',
    howOperatedBn:
      'বাতাসের অক্সিজেন থেকে ওজোন (O3) গ্যাস তৈরি করে সম্পূর্ণ বায়ুরোধী ড্রামে ভেজা বা শুকনো প্যান্টের মধ্যে প্রবাহিত করা হয়; ১৫–২৫ মিনিট পর অবশিষ্ট গ্যাসকে নিরাপদ অক্সিজেনে রূপান্তর করে দরজা খোলা হয়।',
    disadvantagesEn:
      '1. Ozone gas is toxic to human lungs if door seals leak (requires strict O3 sensors). 2. Prolonged dry ozone exposure degrades unprotected spandex/elastane fibers.',
    disadvantagesBn:
      '১. দরজার রাবার সিল লিক হয়ে ওজোন গ্যাস বের হলে তা শ্বাসযন্ত্রের জন্য ক্ষতিকর (সেন্সর থাকা আবশ্যক)। ২. দীর্ঘক্ষণ ওজোন প্রয়োগ করলে স্ট্রেচ ডেনিমের স্প্যানডেক্স দুর্বল হয়ে পড়ে।',
  },
  {
    id: 'curing-oven',
    code: 'W-MC-07',
    nameEn: '3D Resin Curing & Permanent Wrinkle Industrial Oven',
    nameBn: '৩ডি রেজিন কিউরিং ও পার্মানেন্ট রিঙ্কেল ইন্ডাস্ট্রিয়াল ওভেন',
    machineType: 'curing-oven',
    capacityKg: '120 – 250 pcs / hour',
    speedOrTemp: '140°C – 160°C • 20–40 min Cure',
    liquorRatio: '20% DMDHEU Resin + 80% Water + 10m Cool',
    youtubeUrl: 'https://www.youtube.com/results?search_query=3D+Whisker+Resin+Curing+Oven+Denim+Jeans+Laundry',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: '3D Mannequin Resin Spraying & Industrial Oven Curing Process',
    videoTitleBn: '৩ডি ডামিতে রেজিন স্প্রে ও ইন্ডাস্ট্রিয়াল ওভেনে বেকিং প্রসেস ভিডিও',
    whatItDoesEn:
      'Thermally cross-links cellulose hydroxyl (-OH) bonds in amorphous cotton regions using DMDHEU or formaldehyde-free glyoxal resin so 3D lap whiskers and overall crinkles stay permanently locked after home laundering.',
    whatItDoesBn:
      '২০% ডিএমডিএইচইউ (DMDHEU) রেজিন ও ৮০% পানির মিশ্রণ স্প্রে করা জিন্সকে উচ্চ তাপে বেক করে তুলার অ্যামোরফাস অংশের হাইড্রোক্সিল বন্ডের সাথে কোভ্যালেন্ট ক্রস-লিংক তৈরি করে, যাতে ৩ডি হুইস্কার্স ও ওভারঅল রিঙ্কেল স্থায়ী হয়।',
    howOperatedEn:
      'After all wet processes, 20% resin + 80% water (+ 0.5 g/L softener) is sprayed onto upper thighs or tumbled (5–10 min at 50°C for overall wrinkling), folded with clips on Dummies/hangers, baked inside the gas/electric industrial oven at 140°C–160°C for 20–40 minutes, and cooled for 10–15 minutes before clip removal.',
    howOperatedBn:
      'সব ওয়েট ওয়াশ শেষে ২০% রেজিন ও ৮০% পানির দ্রবণ প্যান্টের থাইয়ে স্প্রে করে ক্লিপ দিয়ে ভাঁজ আটকানো হয় এবং হ্যাঙ্গার ট্রলিতে ঝুলিয়ে ইন্ডাস্ট্রিয়াল ওভেনে ১৪০°C–১৬০°C তাপে ২০–৪০ মিনিট কিউরিং করার পর ১০–১৫ মিনিট ঠান্ডা করে ক্লিপ খোলা হয়।',
    disadvantagesEn:
      '1. DMDHEU hydrolysis can release toxic formaldehyde gas and reduces tensile/tear strength & abrasion resistance. 2. Causes yellowing after chlorine bleach and can damage spandex elasticity.',
    disadvantagesBn:
      '১. সাধারণ DMDHEU রেজিন থেকে বিষাক্ত ফরমালডিহাইড নির্গত হতে পারে এবং কাপড়ের টেনসাইল ও টিয়ার স্ট্রেন্থ কমে যায়। ২. ক্লোরিন ব্লিচের পর হলুদ দাগ পড়ে এবং স্ট্রেচ কাপড়ের ইলাস্টিসিটি নষ্ট হতে পারে।',
  },
  {
    id: 'sample-rotary-washer',
    code: 'W-MC-08',
    nameEn: 'Sample Washing & High-Temp Rotary Garment Dyeing Machine',
    nameBn: 'স্যাম্পল ওয়াশার ও রোটারি গার্মেন্টস ডাইং মেশিন',
    machineType: 'sample-rotary-washer',
    capacityKg: '15 – 50 kg (Sample / Small Batch)',
    speedOrTemp: '10 – 25 RPM • Up to 130°C HT Dyeing',
    liquorRatio: '1:10 to 1:15 (Garment Dyeing)',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Rotary+Garment+Dyeing+Machine+Sample+Washing+Denim',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'Sample Washing & Rotary Drum Garment Dyeing Machine Operation',
    videoTitleBn: 'স্যাম্পল ওয়াশিং ও রোটারি ড্রাম গার্মেন্টস ডাইং মেশিন প্রসেস ভিডিও',
    whatItDoesEn:
      'Executes small-scale R&D wash recipe trials before bulk production and performs full-immersion Rotary Garment Dyeing (Reactive, Direct, Sulfur, and Pigment wash-down) on RFD/grey garments in a single machine.',
    whatItDoesBn:
      'বাল্ক প্রোডাকশনের আগে ছোট স্কেলে ওয়াশ রেসিপি ট্রায়াল ও স্যাম্পল ডেভেলপমেন্ট করে এবং আরএফডি (RFD) পোশাকে এক মেশিনেই ডি-সাইজিং, স্কোরিং, ব্লিচিং, রিঅ্যাক্টিভ/পিগমেন্ট ডাইং ও ফিনিশিং সম্পন্ন করে।',
    howOperatedEn:
      'Replaced older European paddle/pedal dyeing machines; features a floor-fixed outer shell and a bidirectional perforated inner drum running at low speed (10 RPM wash / 80°C reactive dyeing with 50 g/L Glauber salt & 20 g/L Soda ash) to prevent garment abrasion while ensuring uniform dye liquor penetration.',
    howOperatedBn:
      'পুরোনো প্যাডেল ডাইং মেশিনের উন্নত সংস্করণ হিসেবে এতে স্থির বাইরের শেল ও ভেতরে ছিদ্রযুক্ত ঘূর্ণায়মান ড্রাম থাকে; কম গতিতে (১০ RPM) ও ৮০°C তাপে গ্লুবার সল্ট (৫০ g/L) ও সোডা অ্যাশ (২০ g/L) যোগে সমানভাবে গার্মেন্টস ডাইং করে।',
    disadvantagesEn:
      '1. High RPM causes chafe/abrasion marks on delicate garments, while low M:L ratio causes patchy dyeing. 2. Requires pre-shrunk interlinings, polyester/core-spun threads, and nickel/polyester buttons to avoid accessory destruction.',
    disadvantagesBn:
      '১. RPM বেশি হলে কাপড়ে ঘর্ষণের দাগ পড়ে এবং পানি কম হলে ছোপ ছোপ (Patchy) ডাইং হয়। ২. নাইলন বা রাবার বাটন গলে যায়, তাই পলিয়েস্টার বাটন ও কোর-স্পান সুতা ব্যবহার করা বাধ্যতামূলক।',
  },
  {
    id: 'pp-spray-booth',
    code: 'W-MC-09',
    nameEn: 'PP Spray Cabin with Inflatable Air Dummy & Water-Curtain Scrubber',
    nameBn: 'পিপি স্প্রে বুথ, এয়ার ডামি ও ওয়াটার-শাওয়ার এক্সহস্ট সিস্টেম',
    machineType: 'pp-spray-booth',
    capacityKg: '30 – 60 pcs / hour per booth',
    speedOrTemp: '60–100 PSI Air • 0.5–15 g/L KMnO4',
    liquorRatio: 'Closed-Loop Neutralized Water Shower',
    youtubeUrl: 'https://www.youtube.com/results?search_query=PP+Spray+Booth+Denim+Washing+Air+Dummy+Jeans',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'PP Spray Booth Air Dummy Operation & Water-Shower Fume Scrubber',
    videoTitleBn: 'পিপি স্প্রে কেবিনে এয়ার ডামি ও ওয়াটার-শাওয়ার পিউরিফিকেশন প্রসেস ভিডিও',
    whatItDoesEn:
      'Applies atomized Potassium Permanganate (`KMnO4`) solution onto localized thigh, knee, and hip zones while capturing toxic chemical mist via a negative-pressure exhaust and water-shower scrubber before releasing clean air.',
    whatItDoesBn:
      'ইনফ্ল্যাটেবল রাবার ডামিতে জিন্স পরিয়ে নির্দিষ্ট স্থানে পটাশিয়াম পারম্যাঙ্গানেট (PP) স্প্রে করে উজ্জ্বল সাদা ফেড তৈরি করে এবং ওয়াটার-শাওয়ার এক্সহস্ট সিস্টেমের মাধ্যমে বিষাক্ত কেমিক্যাল বাতাস পরিশোধন করে বাইরে ছাড়ে।',
    howOperatedEn:
      'Desized jeans are stretched tight over a pneumatic rubber air dummy; the operator sprays 0.4%–2% `KMnO4` solution (pink liquid turning muddy brown on fabric) while rear exhaust fans suck chemical mist through a cascading water shower that is neutralized before draining to the ETP.',
    howOperatedBn:
      'বাতাস ভরা রাবার ডামিতে প্যান্ট টাইট করে পরিয়ে অপারেটর স্প্রে গান দিয়ে পিপি দ্রবণ স্প্রে করেন; পেছনের এক্সহস্ট ফ্যান বিষাক্ত বাতাসকে টেনে ওয়াটার শাওয়ারের ভেতর দিয়ে পাঠায়, যেখানে পানি কেমিক্যাল শোষণ করে পরিষ্কার বাতাস বাইরে ছাড়ে এবং দূষিত পানি নিউট্রালাইজার দিয়ে শোধন করা হয়।',
    disadvantagesEn:
      '1. Low gun air-to-water pressure causes liquid droplets that burn bright spots into denim. 2. High occupational health hazard if operator PPE (respirator mask, goggles, gloves, apron) is not strictly worn.',
    disadvantagesBn:
      '১. স্প্রে গানের এয়ার প্রেসার কমে গেলে ফোঁটা পড়ে কাপড়ে উজ্জ্বল সাদা স্পট (Bright spot) তৈরি হয়। ২. অপারেটর মাস্ক, গগলস, গ্লাভস ও অ্যাপ্রন না পরলে শ্বাসকষ্ট ও চর্মরোগের তীব্র ঝুঁকি থাকে।',
  },
];

// 3. 14 Core Washing Chemicals & Textile Auxiliaries Encyclopedia
export const WASHING_CHEMICALS_DATA: WashingChemicalSpec[] = [
  {
    id: 'amylase',
    code: 'CHEM-01',
    nameEn: 'Alpha-Amylase Desizing Enzyme (Bacterial / Malt / Pancreatic)',
    nameBn: 'আলফা-অ্যামাইলেজ ডি-সাইজিং এনজাইম (ব্যাকটেরিয়াল ও মল্ট)',
    chemicalFormula: 'α-Amylase Bio-Catalyst (Bacillus subtilis) + Non-Ionic Wetting Agent',
    categoryEn: 'Step 01 • Starch & Size Hydrolysis',
    categoryBn: 'ধাপ ০১ • মাড় বা স্টার্চ অপসারণ (Desizing)',
    dosageRange: '0.5 – 2.0 g/L (M:L 1:9)',
    tempRange: '50°C – 70°C (Killed >75°C)',
    phRange: 'pH 5.5 – 7.5',
    hazardLevel: 'Low (Bio)',
    swatchColor: '#0ea5e9',
    whatItDoesEn:
      'Hydrolyzes 1,4-glycosidic linkages in insoluble warp starch (amylose/amylopectin), CMC, waxes, fats, and tallow into water-soluble short-chain dextrins and maltose without attacking cellulose fibers.',
    whatItDoesBn:
      'উইভিংয়ের সময় ওয়ার্প সুতায় দেওয়া অদ্রবণীয় স্টার্চ (অ্যামাইলোজ ও অ্যামাইলোপেকটিন), সিএমসি ও ওয়াক্সের ১:৪ গ্লাইকোসিডিক বন্ড ভেঙে পানিতে দ্রবণীয় ডেক্সট্রিন ও মল্টোজে রূপান্তর করে, কিন্তু তুলার সেলুলোজের কোনো ক্ষতি করে না।',
    howOperatedEn:
      'Dosed in Step 1 Desizing bath (M:L 1:9, 60°C, 15–25 min) alongside 0.8–1.0 g/L non-ionic detergent/wetting agent and salt; followed by a 70°C–80°C hot wash (5 min) to stop size redeposition and evaluated via TEGEWA Violet Scale (KI + Iodine test).',
    howOperatedBn:
      'প্রথম ধাপে ১:৯ লিক্যার রেশিওতে ৬০°C তাপমাত্রায় নন-আয়নিক ডিটারজেন্ট ও লবণের সাথে ১৫–২৫ মিনিট চালানো হয়; এরপর ৭০°C–৮০°C গরম পানিতে ৫ মিনিট ধুয়ে মাড় বের করা হয় এবং পটাশিয়াম আয়োডাইড (TEGEWA রেটিং) দিয়ে স্টার্চ পরীক্ষা করা হয়।',
    disadvantagesEn:
      '1. Deactivated if temperature exceeds 75°C–95°C or if anionic surfactants poison enzyme activity. 2. Skipping desizing causes patchy dyeing, uneven enzyme fade, and stiff handfeel.',
    disadvantagesBn:
      '১. তাপমাত্রা ৭৫°C ছাড়িয়ে গেলে বা ভুল সারফ্যাক্ট্যান্ট দিলে এনজাইম নষ্ট হয়ে যায়। ২. ডি-সাইজিং না করলে পরবর্তী ওয়াশ বা ডাইংয়ে ছোপ ছোপ দাগ (Patchy effect) পড়ে এবং কাপড় খসখসে থাকে।',
  },
  {
    id: 'cellulase',
    code: 'CHEM-02',
    nameEn: 'Cellulase Enzyme (Acid Liquid vs. Neutral Powder/SL)',
    nameBn: 'সেলুলেজ বায়ো-এনজাইম (অ্যাসিড ও নিউট্রাল এনজাইম)',
    chemicalFormula: 'Endoglucanase + Exoglucanase + β-Glucosidase Complex',
    categoryEn: 'Step 02 • Bio-Polishing & Stone Abrasion',
    categoryBn: 'ধাপ ০২ • বায়ো-পলিশিং ও স্টোন ফেডিং',
    dosageRange: '1.0 – 2.5 g/L (M:L 1:8)',
    tempRange: '40°C – 55°C (Acid) | 40°C – 60°C (Neutral)',
    phRange: 'pH 4.5–5.5 (Acid) | pH 6.0–7.0 (Neutral)',
    hazardLevel: 'Low (Bio)',
    swatchColor: '#3b82f6',
    whatItDoesEn:
      'Cleaves β-1,4-glycosidic bonds in cotton cellulose (Cellulose + H2O → Glucose): Endoglucanase attacks amorphous regions, Exoglucanase cuts chain ends, and β-glucosidase forms glucose—removing surface fuzz (bio-polishing) and releasing indigo ring dye.',
    whatItDoesBn:
      'তুলার বিটা-১,৪-গ্লাইকোসিডিক বন্ড ভেঙে উপরিভাগের ক্ষুদ্র ফাইবার (Micro-fibrils) পরিষ্কার করে (বায়ো-পলিশিং) এবং ইনডিগো রঙের কণা আলগা করে কম পাথরেই আকর্ষণীয় স্টোন-ওয়াশ লুক ও পিলিং প্রতিরোধ ক্ষমতা তৈরি করে।',
    howOperatedEn:
      'Acid enzyme (slightly brown liquid) runs 25–50 min at 40–55°C (pH 4.5–5.5 with 0.6 g/L acetic acid); Neutral enzyme runs 40–80 min at 40–60°C (pH 6–7). Must be deactivated ("enzyme killing") by raising bath to 90°C for 1 min or adding sodium metabisulfite/alkali.',
    howOperatedBn:
      'অ্যাসিড এনজাইম pH ৪.৫–৫.৫ ও ৪০–৫৫°C তাপে ২৫–৫০ মিনিট এবং নিউট্রাল এনজাইম pH ৬–৭ ও ৪০–৬০°C তাপে ৪০–৮০ মিনিট চালানো হয়। ওয়াশ শেষে ৯০°C তাপে ১ মিনিট চালিয়ে (Enzyme killing) অথবা মেটাবাইসালফাইট/ক্ষার দিয়ে এনজাইম নিষ্ক্রিয় করা বাধ্যতামূলক।',
    disadvantagesEn:
      '1. Acid enzyme works fast but causes heavy indigo backstaining on white weft/pockets. 2. Prolonged exposure causes over-fading, >10% tensile strength loss, and loss of dimensional stability.',
    disadvantagesBn:
      '১. অ্যাসিড এনজাইম দ্রুত কাজ করলেও সাদা পকেট ও ওয়েফট সুতায় তীব্র নীল দাগ (Backstaining) ফেলে। ২. অতিরিক্ত সময় বা ঘনত্বে চালালে কাপড়ের শক্তি কমে যায়, কাপড় ঝুলে পড়ে এবং সেলাই দুর্বল হয়ে যায়।',
  },
  {
    id: 'pumice-stone',
    code: 'CHEM-03',
    nameEn: 'Volcanic Pumice Stones & Thermocol / Styrofoam Media',
    nameBn: 'ভলকানিক পিউমিস স্টোন ও থার্মোকল বল (Stone & Knit Media)',
    chemicalFormula: '71.91% SiO2 + 12.66% Al2O3 + 4.30% K2O + 3.45% Na2O (Mohs 6)',
    categoryEn: 'Mechanical Abrasion & Acid Wash Carrier',
    categoryBn: 'যান্ত্রিক ঘর্ষণ ও অ্যাসিড ওয়াশ মাধ্যম',
    dosageRange: '0.5 : 1 (½ Weight of Garments)',
    tempRange: 'Ambient (Dry Acid) to 60°C–90°C',
    phRange: 'Natural Stone pH 8.0',
    hazardLevel: 'Medium',
    swatchColor: '#a8a29e',
    whatItDoesEn:
      'Perforated volcanic glass rock that floats on water, abrades multi-layer seam edges (collar, cuff, pocket, waistband, hem) for vintage contrast, and absorbs oxidizing solution (`KMnO4 + H3PO4`) for waterless Acid/Ice washes. (For delicate knit garments, lightweight Thermocol/Styrofoam balls replace stones).',
    whatItDoesBn:
      'আগ্নেয়গিরির অগ্ন্যুৎপাত থেকে তৈরি ছিদ্রযুক্ত ঝামা পাথর যা পানিতে ভাসে এবং কাপড়ের মোটা সেলাইয়ের কিনারা ঘষে ভিন্টেজ লুক দেয়; এছাড়া অ্যাসিড ওয়াশে কেমিক্যাল শুষে নেয়। (নিট পোশাকের ক্ষেত্রে কাপড়ের ক্ষতি এড়াতে পাথরের বদলে হালকা থার্মোকল বা স্টাইরোফোম বল ব্যবহৃত হয়)।',
    howOperatedEn:
      'Available in Turkish (white) and Indonesian (slightly brown) grades across 3 sizes: Small (2–3 cm for uniform abrasion), Medium (4–5 cm), and Large (6–7 cm for high contrast). Reused 2–3 times before disintegrating; requires multiple rinses and shaking to remove grit.',
    howOperatedBn:
      'ইন্দোনেশিয়ান (হালকা বাদামি) ও তুর্কি (সাদা) পাথর ৩টি সাইজে পাওয়া যায়: ছোট (২–৩ সেমি), মাঝারি (৪–৫ সেমি) ও বড় (৬–৭ সেমি, হাই-কনট্রাস্টের জন্য)। একই পাথর ২–৩ বার ব্যবহার করা যায় এবং ওয়াশ শেষে পাথর ও বালু ঝেড়ে ফেলতে হয়।',
    disadvantagesEn:
      '1. Abrades washing machine drums and garment hems ("after-wash holes"). 2. Generates heavy grit/sludge waste in ETP and requires high labor to de-stone pockets.',
    disadvantagesBn:
      '১. ওয়াশিং মেশিনের ড্রাম ক্ষয় করে এবং অতিরিক্ত ঘর্ষণে কাপড়ে ছিদ্র (After-wash hole) তৈরি করতে পারে। ২. প্রচুর পাথরের গুঁড়ো ও স্লাজ তৈরি করে যা ইটিপি (ETP)-তে পরিবেশগত সমস্যা সৃষ্টি করে।',
  },
  {
    id: 'hypochlorite',
    code: 'CHEM-04',
    nameEn: 'Sodium Hypochlorite vs. Bleaching Powder (Chlorine Bleach)',
    nameBn: 'সোডিয়াম হাইপোক্লোরাইট ও ব্লিচিং পাউডার (ক্লোরিন ব্লিচ)',
    chemicalFormula: 'NaOCl vs. Ca(OCl)2 + Na2CO3 / NaHCO3 Activator',
    categoryEn: 'Step 03 • Oxidative Color Stripping',
    categoryBn: 'ধাপ ০৩ • রঙ হালকা ও ব্লিচ ওয়াশ',
    dosageRange: '10 g/L K.C.I Bleach Powder + 5 g/L Soda Ash',
    tempRange: '40°C – 60°C (12–15 min)',
    phRange: 'pH 9.2 – 11.0 (Danger Point: pH 7.0)',
    hazardLevel: 'High (Restricted)',
    swatchColor: '#f59e0b',
    whatItDoesEn:
      'Liberates hypochlorous ions (`OCl-`) that cleave chromophore double bonds in indigo and sulfur dyes for fast, low-cost dark/medium/light shade fading. (`NaOCl` is stable and precipitate-free, whereas cheaper `Ca(OCl)2` forms `CaCO3` lime precipitate causing harsh handfeel).',
    whatItDoesBn:
      'হাইপোক্লোরাস আয়ন (OCl-) তৈরি করে ইনডিগো রঙের ডাবল বন্ড ভেঙে দ্রুত রঙ হালকা করে। (`NaOCl` স্থিতিশীল ও তলানিহীন, কিন্তু সস্তা ব্লিচিং পাউডার `Ca(OCl)2` কাপড়ে ক্যালসিয়াম কার্বনেটের সাদা তলানি ফেলে কাপড় খসখসে করে)।',
    howOperatedEn:
      'Run at M:L 1:8, 60°C for 12–15 min with 10 g/L bleaching powder and 5 g/L soda ash (or `NaHCO3` for rapid light shades) to keep pH strictly at 9.2–11.0. Followed immediately by 2 rinses and Antichlor neutralization (`3 g/L Sodium Hyposulfite` at 40°C for 10–12 min).',
    howOperatedBn:
      '১:৮ অনুপাতে ৬০°C তাপে ১০ g/L ব্লিচিং পাউডার ও ৫ g/L সোডা অ্যাশ দিয়ে pH ৯.২–১১.০ রেখে ১২–১৫ মিনিট চালানো হয়; এরপর ২ বার রিন্স করে সোডিয়াম হাইপোসালফাইট (৩ g/L) দিয়ে অ্যান্টিক্লোর নিউট্রালাইজেশন করা হয়।',
    disadvantagesEn:
      '1. Never run at neutral pH 7 ("Damage Point")—causes rapid cellulose degradation and pinholes. 2. Reacts with residual protein to form yellow chloramines (`>NCl`), corrodes stainless steel, and destroys spandex/wool.',
    disadvantagesBn:
      '১. কখনোই pH ৭ (Damage Point)-এ ব্লিচ করা যাবে না—এতে সেলুলোজ ভেঙে কাপড় ছিঁড়ে যায়। ২. ক্লোরামিন তৈরি হয়ে কাপড় হলুদ হয়ে যায়, মেশিনে মরিচা ধরে এবং স্প্যানডেক্স বা উলের কাপড় নষ্ট হয়ে যায়।',
  },
  {
    id: 'permanganate',
    code: 'CHEM-05',
    nameEn: 'Potassium Permanganate (PP Spray, Sponging & Acid Soak)',
    nameBn: 'পটাশিয়াম পারম্যাঙ্গানেট (পিপি স্প্রে, স্পঞ্জিং ও অ্যাসিড ওয়াশ)',
    chemicalFormula: 'KMnO4 + H3PO4 / CH3COOH (Pink → Brown MnO2)',
    categoryEn: 'Dry Local Whitening & Acid Wash Oxidizer',
    categoryBn: 'লোকাল হোয়াইট ফেড ও অ্যাসিড ওয়াশ অক্সিডাইজার',
    dosageRange: '0.5–15 g/L (Spray: 0.4% std) | 10 g/L + 2.5 g/L H3PO4 (Acid Stone)',
    tempRange: 'Ambient 25°C (Dry Process)',
    phRange: 'pH 3.0 – 4.5 (Acidic Activator)',
    hazardLevel: 'High (Restricted)',
    swatchColor: '#ec4899',
    whatItDoesEn:
      'Powerful oxidizing agent applied via spray gun (PP Spray), sponge/towel/brush over rubber pattern boards (PP Sponging: 20% PP + 80% water), or soaked into pumice stones (100L water + 1000g KMnO4 + 250g Phosphoric acid) for localized bright white fades and Acid Wash.',
    whatItDoesBn:
      'শক্তিশালী অক্সিডাইজার যা স্প্রে গান (PP Spray), রাবার বোর্ডের ওপর স্পঞ্জ/তোয়ালে/ব্রাশ (PP Sponging) অথবা পিউমিস স্টোনে ভিজিয়ে (১০০ লিটার পানি + ১০০০ গ্রাম KMnO4 + ২৫০ গ্রাম ফসফরিক অ্যাসিড) স্থানীয় সাদা ফেড ও অ্যাসিড ওয়াশ তৈরি করে।',
    howOperatedEn:
      'Indigo requires low PP concentration while sulfur black requires high concentration; spraying distance and gun air-to-water ratio are controlled inside water-curtain booths. Pink `KMnO4` oxidizes on fabric into muddy brown `MnO2`, which must be immediately neutralized with `3–5 g/L Sodium Metabisulfite` in wet wash.',
    howOperatedBn:
      'ইনডিগো ডেনিমে কম ঘনত্ব ও সালফার ব্ল্যাকে বেশি ঘনত্ব লাগে; স্প্রে করার পর গোলাপি তরল কাপড়ে শুকিয়ে মেটে বাদামি (`MnO2`) বর্ণ ধারণ করে, যা সাথে সাথে ওয়েট ওয়াশে সোডিয়াম মেটাবাইসালফাইট (৩–৫ g/L) দিয়ে ধুয়ে সাদা ও নিষ্ক্রিয় করতে হয়।',
    disadvantagesEn:
      '1. Micro-particle spray mist causes severe respiratory/lung damage if inhaled without exhaust scrubbers. 2. Incomplete neutralization leaves lingering bad odor and yellow manganese stains.',
    disadvantagesBn:
      '১. স্প্রে গানের ক্ষুদ্র রাসায়নিক কণা শ্বাসের সাথে ফুসফুসে গেলে মারাত্মক স্বাস্থ্যঝুঁকি তৈরি করে। ২. সম্পূর্ণ নিউট্রালাইজ না হলে কাপড়ে দুর্গন্ধ ও হলদেটে ম্যাঙ্গানিজ দাগ থেকে যায়।',
  },
  {
    id: 'metabisulfite',
    code: 'CHEM-06',
    nameEn: 'Sodium Metabisulfite & Sodium Hyposulfite (Neutralizers)',
    nameBn: 'সোডিয়াম মেটাবাইসালফাইট ও হাইপোসালফাইট (নিউট্রালাইজার)',
    chemicalFormula: 'Na2S2O5 (Metabisulfite) / Na2S2O3 (Hyposulfite)',
    categoryEn: 'Step 04 • Antichlor & PP Whitening Neutralizer',
    categoryBn: 'ধাপ ০৪ • ব্লিচ ও পিপি নিষ্ক্রিয়করণ (Neutralization)',
    dosageRange: '3.0 – 5.0 g/L (M:L 1:8 to 1:9)',
    tempRange: 'Cold to 40°C (5 – 12 min)',
    phRange: 'pH 4.5 – 5.5',
    hazardLevel: 'Medium',
    swatchColor: '#10b981',
    whatItDoesEn:
      '`Sodium Metabisulfite` reduces brown manganese dioxide (`MnO2`) from PP spray/acid wash into soluble colorless salts and permanently deactivates residual acid cellulase enzymes; `Sodium Hyposulfite` (3 g/L) neutralizes active chlorine after bleach washes.',
    whatItDoesBn:
      'সোডিয়াম মেটাবাইসালফাইট পিপি স্প্রে ও অ্যাসিড ওয়াশের বাদামি ম্যাঙ্গানিজ ডাই-অক্সাইড (`MnO2`) দাগ দূর করে কাপড় ধবধবে সাদা করে এবং অ্যাসিড এনজাইমকে স্থায়ীভাবে নিষ্ক্রিয় করে; আর সোডিয়াম হাইপোসালফাইট ক্লোরিন ব্লিচ নিষ্ক্রিয় করে।',
    howOperatedEn:
      'Run at M:L 1:8–1:9 for 5–12 minutes at cold to 40°C temperature right after PP washing or chlorine bleaching; verified with Potassium Iodide (`KI`) test paper before softening.',
    howOperatedBn:
      'পিপি ওয়াশ বা ব্লিচিংয়ের পরপরই ১:৮–১:৯ লিক্যার রেশিওতে ঠান্ডা বা ৪০°C পানিতে ৫–১২ মিনিট চালানো হয় এবং সফটনিংয়ের আগে KI পেপার দিয়ে টেস্ট করা হয়।',
    disadvantagesEn:
      '1. Emits sharp sulfur dioxide (`SO2`) gas odor in hot acidic baths. 2. Insufficient dosage results in post-wash yellowing, bad smell on garments, and tendered seams.',
    disadvantagesBn:
      '১. গরম বা অ্যাসিডিক বাথে ঝাঁঝালো সালফার ডাই-অক্সাইড (`SO2`) গ্যাসের গন্ধ বের হয়। ২. পরিমাণে কম দিলে ওয়াশের পর কাপড়ে দুর্গন্ধ থাকে এবং গোডাউনে কাপড় হলুদ হয়ে ছিঁড়ে যায়।',
  },
  {
    id: 'anti-backstain',
    code: 'CHEM-07',
    nameEn: 'Anti-Staining Agent & Non-Ionic Surfactant Detergent',
    nameBn: 'অ্যান্টি-স্টেইনিং এজেন্ট ও সারফ্যাক্ট্যান্ট ডিটারজেন্ট',
    chemicalFormula: 'Polyacrylic Dispersant + Ethoxylated Non-Ionic Surfactant',
    categoryEn: 'Indigo Suspension, Wetting & Pocket Protection',
    categoryBn: 'সাদা পকেট সুরক্ষা ও ওয়েটিং ডিটারজেন্ট',
    dosageRange: '0.6 – 1.0 g/L (Anti-Stain) | 0.5 – 1.0 g/L (Detergent)',
    tempRange: '40°C – 60°C',
    phRange: 'pH 6.0 – 9.0',
    hazardLevel: 'Low (Bio)',
    swatchColor: '#06b6d4',
    whatItDoesEn:
      'Surfactant detergents lower water surface tension via hydrophilic heads and hydrophobic tails to emulsify oils/grease, while Anti-Staining agents suspend discharged indigo dye in the bath so it cannot redeposit onto white weft yarns or pocket bags.',
    whatItDoesBn:
      'ডিটারজেন্ট পানির সারফেস টেনশন কমিয়ে তেল-ময়লা দূর করে এবং অ্যান্টি-স্টেইনিং এজেন্ট ওয়াশ বাথে খসে পড়া ইনডিগো রঙকে ভাসিয়ে রাখে যাতে তা পুনরায় সাদা পকেট ব্যাগ বা ওয়েফট সুতায় লেগে ব্যাক-স্টেইনিং না ঘটায়।',
    howOperatedEn:
      'Dosed directly into Desizing (1 g/L), Enzyme Wash (0.6–0.8 g/L), and Stone Wash baths. Note: Anionic and cationic surfactants must never be mixed together in the same bath as they precipitate into an insoluble complex.',
    howOperatedBn:
      'ডি-সাইজিং (১ g/L), এনজাইম ওয়াশ (০.৬–০.৮ g/L) এবং স্টোন ওয়াশ বাথে সরাসরি যোগ করা হয়। (সতর্কতা: অ্যানায়নিক এবং ক্যাটায়নিক সারফ্যাক্ট্যান্ট কখনোই এক বাথে মেশানো যাবে না, এতে তলানি পড়ে কার্যকারিতা নষ্ট হয়)।',
    disadvantagesEn:
      '1. Over-dosing creates excessive foam that cushions mechanical stone abrasion. 2. Nonylphenol ethoxylates (APEO/NPEO) are restricted by global eco-standards—must use biodegradable alcohol ethoxylates.',
    disadvantagesBn:
      '১. অতিরিক্ত দিলে প্রচুর ফেনা তৈরি হয়ে পাথরের ঘর্ষণ কমিয়ে দেয়। ২. ননিলফেনল (APEO/NPEO) পরিবেশের জন্য নিষিদ্ধ হওয়ায় বায়োডিগ্রেডেবল অ্যালকোহল ইথোক্সিলেট ব্যবহার করতে হয়।',
  },
  {
    id: 'silicone-softener',
    code: 'CHEM-08',
    nameEn: 'Flax Softener (Cationic/Non-Ionic) & Amino Micro-Emulsion Silicone',
    nameBn: 'ফ্ল্যাক্স সফটনার (ক্যাটায়নিক) ও অ্যামিনো-সিলিকন ইমালশন',
    chemicalFormula: 'Amino-Modified Polysiloxane + Natural Flax / Quaternary Ammonium',
    categoryEn: 'Step 06 • Silky Handfeel, Lubricity & Anti-Pilling',
    categoryBn: 'ধাপ ০৬ • সফট হ্যান্ডফিল ও সিলিকন ওয়াশ',
    dosageRange: '0.6–1.0 g/L Flax/Cationic + 0.4–0.5 g/L Silicone (M:L 1:6)',
    tempRange: 'Room Temp to 40°C (5 – 20 min)',
    phRange: 'pH 4.5 – 5.5 (Adjusted with 0.5–0.6 g/L Acetic Acid)',
    hazardLevel: 'Low (Bio)',
    swatchColor: '#8b5cf6',
    whatItDoesEn:
      'Creates an invisible lubricating film on negatively charged cotton fibers, imparting durable softness, elastic handle, anti-pilling, improved tear resistance, and high-speed sewability (preventing needle cutting).',
    whatItDoesBn:
      'তুলার তন্তুর ওপর অদৃশ্য পিচ্ছিল প্রলেপ তৈরি করে কাপড়কে মাখনের মতো নরম, সিল্কি ও স্থিতিস্থাপক করে; এছাড়া পিলিং রোধ করে, টিয়ার স্ট্রেন্থ বাড়ায় এবং সুইয়ের ঘর্ষণে সুতা কাটা প্রতিরোধ করে।',
    howOperatedEn:
      'Applied in the final bath at a strictly LOW liquor ratio (M:L 1:4 to 1:6) with 0.5–0.6 g/L Acetic Acid (pH 4.5–5.5 helps cationic/flax softener exhaust evenly onto fabric) for 5–15 minutes, then unloaded directly to hydro-extractor without rinsing.',
    howOperatedBn:
      'একদম শেষ বাথে কম লিক্যার রেশিওতে (M:L ১:৪ থেকে ১:৬) ০.৫–০.৬ g/L অ্যাসিটিক অ্যাসিডসহ (pH ৪.৫–৫.৫) ৫–১৫ মিনিট চালিয়ে কোনো রিন্স ছাড়াই সরাসরি হাইড্রো ও ড্রাই করা হয়।',
    disadvantagesEn:
      '1. Excess softener causes indigo backstaining and reduces fabric breathability/absorbency. 2. Amino/cationic silicones cause yellowing on white fabrics at high drying heat and can trigger skin allergies.',
    disadvantagesBn:
      '১. অতিরিক্ত সফটনার দিলে ব্যাক-স্টেইনিং বাড়ে এবং কাপড়ের বাতাস চলাচল ও পানি শোষণ ক্ষমতা কমে যায়। ২. উচ্চ তাপে শুকালে সাদা কাপড়ে হলদে ভাব (Yellowing) আসে এবং পুনরায় ডাইং বা ওয়াশ করা যায় না।',
  },
  {
    id: 'caustic-soda-ash',
    code: 'CHEM-09',
    nameEn: 'Caustic Soda (NaOH) & Soda Ash (Na2CO3) Alkali Builders',
    nameBn: 'কস্টিক সোডা (NaOH) ও সোডা অ্যাশ (Na2CO3) অ্যালকালি',
    chemicalFormula: 'Sodium Hydroxide (NaOH) & Sodium Carbonate (Na2CO3)',
    categoryEn: 'Caustic Wash, Pigment Wash & Reactive Dye Fixation',
    categoryBn: 'কস্টিক ওয়াশ, পিগমেন্ট ফেডিং ও অ্যালকালি মিডিয়াম',
    dosageRange: '0.8–1.6 g/L NaOH + 1.5–5.0 g/L Soda Ash (or 20 g/L Dyeing)',
    tempRange: '50°C – 90°C (20 – 60 min)',
    phRange: 'pH 10.5 – 11.5 (Strongly Alkaline)',
    hazardLevel: 'Medium',
    swatchColor: '#eab308',
    whatItDoesEn:
      'Introduces a strong alkaline medium that saponifies natural waxes/oils in scouring, strips 20%–30% of surface dye in Caustic/Pigment washes for an aged vintage look, stabilizes bleach baths, and fixes reactive dyes covalently to cotton.',
    whatItDoesBn:
      'ওয়াশ বাথে শক্তিশালী ক্ষারীয় মাধ্যম তৈরি করে তেল-চর্বি দূর করে (স্যাপোনিফিকেশন), কস্টিক ও পিগমেন্ট ওয়াশে ২০%–৩০% রঙ তুলে ভিন্টেজ লুক আনে, ব্লিচ বাথের pH নিয়ন্ত্রণ করে এবং রিঅ্যাক্টিভ ডাই ফিক্স করে।',
    howOperatedEn:
      'In Pigment/Caustic wash (Lot 80 kg, M:L 1:8, 50–60°C, 20–60 min), 0.8–1.6 g/L Caustic Soda + 0.8 g/L Detergent + 1.5 g/L Soda Ash are run together, followed by mandatory souring neutralization with 1 g/L Acetic Acid for 5 min.',
    howOperatedBn:
      'পিগমেন্ট বা কস্টিক ওয়াশে ১:৮ অনুপাতে ৫০°C–৬০°C তাপে ০.৮–১.৬ g/L কস্টিক সোডা, ডিটারজেন্ট ও সোডা অ্যাশ দিয়ে ২০–৬০ মিনিট চালানো হয় এবং শেষে ১ g/L অ্যাসিটিক অ্যাসিড দিয়ে ৫ মিনিট নিউট্রালাইজ (Souring) করা হয়।',
    disadvantagesEn:
      '1. Difficult to control shade uniformity; causes yellowing if not neutralized with acid souring. 2. Corrosive to skin/eyes and hydrolyzes polyester or degrades wool/silk if misused.',
    disadvantagesBn:
      '১. নিয়ন্ত্রণ করা কঠিন এবং অ্যাসিড দিয়ে ভালোভাবে নিউট্রালাইজ না করলে কাপড় হলুদ হয়ে যায়। ২. শ্রমিকদের ত্বক ও চোখের জন্য ক্ষতিকর এবং উল বা সিল্ক কাপড়কে গলিয়ে নষ্ট করে দেয়।',
  },
  {
    id: 'hydrogen-peroxide-stabilizer',
    code: 'CHEM-10',
    nameEn: 'Hydrogen Peroxide (H2O2) & Sodium Silicate Stabilizer',
    nameBn: 'হাইড্রোজেন পারঅক্সাইড (H2O2) ও স্টেবিলাইজার',
    chemicalFormula: 'H2O2 (35%–50%) → H+ + HO2- (Perhydroxyl Ion) + Na2SiO3',
    categoryEn: 'Universal Eco-Bleach & Super White Wash',
    categoryBn: 'ইউনিভার্সাল পারমানেন্ট ব্লিচ ও সুপার-হোয়াইট ওয়াশ',
    dosageRange: '4–12 g/L H2O2 + 2–5 g/L Stabilizer (6:1 Ratio)',
    tempRange: '85°C – 95°C (Requires High Heat)',
    phRange: 'pH 9.2 – 10.5',
    hazardLevel: 'Medium',
    swatchColor: '#38bdf8',
    whatItDoesEn:
      'Universal chlorine-free oxidizing agent that liberates perhydroxyl ions (`HO2-`) in alkaline baths to permanently whiten grey cotton fabrics (Super White wash) or gently brighten sulfur/stretch denim without toxic chloramines or antichlor corrosion.',
    whatItDoesBn:
      'ক্লোরিন-মুক্ত ইউনিভার্সাল ব্লিচিং এজেন্ট যা ক্ষারীয় মাধ্যমে পার-হাইড্রোক্সিল আয়ন (`HO2-`) তৈরি করে স্থায়ী সাদা রঙ (Super White Wash) দেয় এবং স্ট্রেচ বা সালফার ডেনিমকে নিরাপদে উজ্জ্বল করে।',
    howOperatedEn:
      'Requires temperature near boiling (85°C–95°C) with Caustic Soda/Soda Ash and a Peroxide Stabilizer (Sodium Silicate or organic chelator at 6:1 H2O2-to-Stabilizer ratio) to prevent rapid oxygen decomposition. In Super White wash, bleaching is done twice (12% owf then 10% owf) followed by Peroxide Killer / Acetic Acid.',
    howOperatedBn:
      '৮৫°C–৯৫°C উচ্চ তাপমাত্রায় কস্টিক সোডা ও স্টেবিলাইজারের (সোডিয়াম সিলিকেট, ৬:১ অনুপাতে) সাথে চালানো হয় যাতে পারঅক্সাইড অকালে ভেঙে না যায়। সুপার হোয়াইট ওয়াশে সর্বোচ্চ সাদা রঙ পেতে দুই ধাপে ব্লিচ করে পারঅক্সাইড কিলার ও অ্যাসিটিক অ্যাসিড দেওয়া হয়।',
    disadvantagesEn:
      '1. Without stabilizer or in presence of rust/iron (`Fe`), copper (`Cu`), or manganese catalysts, liberates nascent oxygen radical `[O]` that forms oxycellulose and causes catastrophic pinhole damage. 2. Sodium silicate can leave harsh silicate deposits if not hot-rinsed at 80°C.',
    disadvantagesBn:
      '১. স্টেবিলাইজার না দিলে বা পানিতে লোহা (`Fe`) ও তামা (`Cu`) থাকলে ক্যাটালাইটিক বিক্রিয়ায় অক্সিসেলুলোজ তৈরি হয়ে কাপড়ে অসংখ্য ক্ষুদ্র ছিদ্র (Pinhole) হয়ে যায়। ২. সোডিয়াম সিলিকেট গরম পানিতে না ধুলে কাপড় খসখসে হয়ে যায়।',
  },
  {
    id: 'acetic-acid-buffer',
    code: 'CHEM-11',
    nameEn: 'Glacial Acetic Acid (CH3COOH) & pH Buffer System',
    nameBn: 'গ্লেসিয়াল অ্যাসিটিক অ্যাসিড (CH3COOH) ও pH বাফার',
    chemicalFormula: 'CH3COOH (Weak Organic Acid) + Sodium Acetate Buffer',
    categoryEn: 'Alkali Souring & Enzyme/Softener pH Control',
    categoryBn: 'ক্ষার নিষ্ক্রিয়করণ (Souring) ও pH নিয়ন্ত্রণ',
    dosageRange: '0.5 – 2.0 g/L',
    tempRange: 'Ambient to 55°C (5 – 15 min)',
    phRange: 'Target pH 4.5 – 5.5',
    hazardLevel: 'Low (Bio)',
    swatchColor: '#14b8a6',
    whatItDoesEn:
      'Neutralizes residual caustic soda and soda ash on garments ("souring") after scouring, bleaching, or caustic washes, and maintains the exact acidic pH window (4.5–5.5) required by acid cellulase enzymes and cationic/flax softeners.',
    whatItDoesBn:
      'কস্টিক ওয়াশ, স্কোরিং ও ব্লিচিংয়ের পর কাপড়ে থেকে যাওয়া ক্ষারকে নিষ্ক্রিয় (Souring) করে এবং অ্যাসিড এনজাইম ও সফটনার বাথের pH ৪.৫–৫.৫-এ স্থির রাখে।',
    howOperatedEn:
      'Added at 0.5–0.6 g/L prior to dosing acid enzyme or flax/cationic softener, or run at 1.0–2.0 g/L for 5–10 minutes in cold/warm water after alkaline peroxide/caustic baths. Safe for cellulose unlike mineral acids (`H2SO4`/`HCl`) which form hydrocellulose and tender cotton.',
    howOperatedBn:
      'অ্যাসিড এনজাইম বা সফটনার দেওয়ার আগে ০.৫–০.৬ g/L এবং ক্ষারীয় ওয়াশের পর নিউট্রালাইজেশনের জন্য ১–২ g/L মাত্রায় ৫–১০ মিনিট ব্যবহার করা হয়। খনিজ অ্যাসিডের মতো এটি তুলার সেলুলোজের ক্ষতি করে না।',
    disadvantagesEn:
      '1. Concentrated glacial acetic acid has a pungent vinegar smell and is corrosive to skin/mucous membranes before dilution. 2. Over-dosing drops pH below 4.0, causing uneven softener strike or acid odor on dry jeans.',
    disadvantagesBn:
      '১. ঘন গ্লেসিয়াল অ্যাসিটিক অ্যাসিডে তীব্র ভিনেগারের গন্ধ থাকে এবং সরাসরি ত্বকে লাগলে ক্ষত হতে পারে। ২. অতিরিক্ত দিলে pH ৪.০-এর নিচে নেমে কাপড়ে অ্যাসিডের গন্ধ থেকে যায়।',
  },
  {
    id: 'edta-sequestering',
    code: 'CHEM-12',
    nameEn: 'EDTA Sequestering / Chelating Agent (Water Softening)',
    nameBn: 'ইডিটিএ (EDTA) সিকোয়েস্টারিং ও চিলেটিং এজেন্ট',
    chemicalFormula: 'Disodium EDTA (Na2-EDTA, MW 372) / Sodium Hexametaphosphate',
    categoryEn: 'Water Hardness Control & Metal Ion Chelation',
    categoryBn: 'খর পানি মৃদুকরণ ও ধাতব আয়ন নিষ্ক্রিয়করণ',
    dosageRange: '0.5 – 2.0 g/L (Target Water < 50 ppm CaCO3)',
    tempRange: '25°C – 100°C (All Wet Baths)',
    phRange: 'pH 4.0 – 11.5',
    hazardLevel: 'Low (Bio)',
    swatchColor: '#6366f1',
    whatItDoesEn:
      'Forms stable ring complexes (chelates) with heavy metal ions (`Ca2+`, `Mg2+`, `Fe3+`, `Cu2+`) present in hard supply water and raw cotton pectins, preventing insoluble lime-soap scum, tippy/patchy dyeing, enzyme deactivation, and peroxide pinhole damage.',
    whatItDoesBn:
      'খর পানিতে থাকা ক্যালসিয়াম (`Ca2+`), ম্যাগনেসিয়াম (`Mg2+`), লোহা (`Fe3+`) ও তামার (`Cu2+`) আয়নের সাথে শক্তিশালী রিং কমপ্লেক্স তৈরি করে সেগুলোকে নিষ্ক্রিয় করে; ফলে সাবানের গাদ (Scum), ছোপ ছোপ ডাইং এবং পারঅক্সাইড পিনহোল ড্যামেজ প্রতিরোধ হয়।',
    howOperatedEn:
      'Dosed first into scouring, bleaching, and garment dyeing baths at 0.5–2.0 g/L whenever factory supply water hardness exceeds 50 ppm `CaCO3` (ideal dye-house water standard: <50 dH/ppm hardness, Iron <0.1 mg/L, Copper <0.005 mg/L, pH ~7.8).',
    howOperatedBn:
      'ফ্যাক্টরির পানির হার্ডনেস ৫০ পিপিএম (ppm)-এর বেশি হলে স্কোরিং, ব্লিচিং ও ডাইং বাথের শুরুতে ০.৫–২.০ g/L মাত্রায় যোগ করা হয় (ডাই-হাউসের আদর্শ মান: হার্ডনেস <৫০ ppm, আয়রন <০.১ mg/L, কপার <০.০০৫ mg/L)।',
    disadvantagesEn:
      '1. EDTA has low biodegradability in ETP effluent compared to modern polyaspartate/gluconate chelators. 2. Cannot strip metal-complex dyes if over-dosed during dyeing.',
    disadvantagesBn:
      '১. সাধারণ ইডিটিএ (EDTA) সহজে বায়োডিগ্রেড হয় না। ২. মেটাল-কমপ্লেক্স ডাইংয়ের সময় অতিরিক্ত দিলে রঙের শেড পরিবর্তন করে ফেলতে পারে।',
  },
  {
    id: 'optical-brightener-oba',
    code: 'CHEM-13',
    nameEn: 'Optical Brightening Agent (OBA / Fluorescent Whitener)',
    nameBn: 'অপটিক্যাল ব্রাইটেনিং এজেন্ট (OBA / ফ্লুরোসেন্ট হোয়াইটেনার)',
    chemicalFormula: 'Stilbene Disulfonic Acid / Coumarin / Pyrazoline Derivatives',
    categoryEn: 'Super White Wash & High-Contrast Highlight Boost',
    categoryBn: 'সুপার-হোয়াইট ওয়াশ ও উজ্জ্বলতা বৃদ্ধিকারী',
    dosageRange: '0.5% owf or 0.5 – 1.0 g/L (M:L 1:7)',
    tempRange: '40°C – 50°C (5 – 10 min)',
    phRange: 'pH 6.0 – 8.0',
    hazardLevel: 'Low (Bio)',
    swatchColor: '#e0f2fe',
    whatItDoesEn:
      'Absorbs invisible short-wavelength ultraviolet (UV) radiation and re-emits it as visible blue/violet light (400–500 nm), counteracting natural yellow cotton undertones to produce a dazzling crisp white in Super White washes and bleached highlights.',
    whatItDoesBn:
      'অদৃশ্য আল্ট্রাভায়োলেট (UV) রশ্মি শোষণ করে দৃশ্যমান নীল-বেগুনি আলো হিসেবে প্রতিফলিত করে, যা তুলার স্বাভাবিক হলদেটে ভাব ঢেকে দিয়ে সুপার-হোয়াইট ওয়াশ ও ব্লিচড হাইলাইটে চোখধাঁধানো ধবধবে সাদা উজ্জ্বলতা আনে।',
    howOperatedEn:
      'Available in Blue-cast and Red-cast brighteners; run in Step 5 Brightening bath (M:L 1:7, 0.5% owf or 0.6 g/L for 5–10 minutes) after double peroxide bleaching and acetic acid neutralization, right before non-ionic/micro-emulsion silicone softening.',
    howOperatedBn:
      'ডাবল পারঅক্সাইড ব্লিচিং ও অ্যাসিটিক অ্যাসিড নিউট্রালাইজেশনের পর ১:৭ লিক্যার রেশিওতে ০.৫% owf বা ০.৬ g/L মাত্রায় ৫–১০ মিনিট চালানো হয় এবং এরপর নন-আয়নিক সফটনার দেওয়া হয়।',
    disadvantagesEn:
      '1. Causes metamerism (shade jumps drastically under store UV/D65 light vs. TL84/incandescent light). 2. Gradual loss of brightness on prolonged sunlight exposure; mixing OBA and non-OBA fabric panels ruins garment dyeing.',
    disadvantagesBn:
      '১. লাইট বক্সের ভিন্ন আলোতে (UV বনাম D65/TL84) শেড ভিন্ন দেখায় (মেটামেরিজম)। ২. রোদে দীর্ঘদিন থাকলে উজ্জ্বলতা কমে যায় এবং OBA-যুক্ত ও OBA-ছাড়া কাপড়ের প্যানেল একসাথে সেলাই করে গার্মেন্টস ডাইং করলে মারাত্মক শেড ভেরিয়েশন হয়।',
  },
  {
    id: 'cationic-fixer-catanizer',
    code: 'CHEM-14',
    nameEn: 'Cationic Dye Fixing Agent, Catanizer & Glauber’s Salt',
    nameBn: 'ক্যাটায়নিক ডাই ফিক্সিং এজেন্ট, ক্যাটানাইজার ও গ্লুবার সল্ট',
    chemicalFormula: 'Dicyandiamide-Formaldehyde / Quaternary Ammonium + Na2SO4',
    categoryEn: 'Garment Dyeing, Tinting & Fastness Lock',
    categoryBn: 'গার্মেন্টস ডাইং, টিন্টিং ও কালার ফাস্টনেস লক',
    dosageRange: '1.5–4.5 g/L Fixer (50°C) | 50 g/L Glauber Salt (Dye Exhaust)',
    tempRange: '50°C – 80°C (10 – 30 min)',
    phRange: 'pH 5.0 – 6.5 (Fixing)',
    hazardLevel: 'Medium',
    swatchColor: '#f43f5e',
    whatItDoesEn:
      '`Glauber’s Salt / NaCl` drives dye exhaustion onto cotton; `Catanizer` gives cotton a positive charge so zero-affinity pigments exhaust in Pigment Dyeing; `Cationic Fixing Agent` forms an insoluble large complex with unfixed anionic dye anions inside the fiber to boost wash and wet rubbing fastness.',
    whatItDoesBn:
      'গ্লুবার সল্ট (`Na2SO4`) বা লবণ পানিতে থাকা রঙকে সুতার ভেতরে প্রবেশ করায়; ক্যাটানাইজার পিগমেন্ট ডাইংয়ে কাপড় ও রঙের মধ্যে আকর্ষণ তৈরি করে; এবং ক্যাটায়নিক ফিক্সিং এজেন্ট সুতার ভেতরে রঙের অণুর সাথে অদ্রবণীয় যৌগ তৈরি করে ওয়াশ ও রাবিং ফাস্টনেস বৃদ্ধি করে।',
    howOperatedEn:
      'In garment dyeing (M:L 1:15), 50 g/L Glauber’s salt + 1.5–2% Reactive dye + 20 g/L Soda ash run at 80°C for 30 min, followed by hot soaping (1 g/L at 60°C for 10 min) and Cationic Fixing (4.5 g/L at 50°C for 10–15 min in slightly acidic bath).',
    howOperatedBn:
      'গার্মেন্টস ডাইংয়ে (১:১৫ অনুপাত) ৫০ g/L গ্লুবার সল্ট ও ২০ g/L সোডা অ্যাশসহ ৮০°C তাপে ৩০ মিনিট ডাইং করার পর ৬০°C তাপে সোপিং করা হয় এবং শেষে ৫০°C তাপে ৪.৫ g/L ফিক্সিং এজেন্ট দিয়ে ১০–১৫ মিনিট ট্রিটমেন্ট করা হয়।',
    disadvantagesEn:
      '1. Cationic fixers precipitate if mixed with anionic detergents/soaps (must rinse soap thoroughly before fixing). 2. Formaldehyde-based dicyandiamide fixers can release free formaldehyde and slightly lower light fastness.',
    disadvantagesBn:
      '১. সোপিংয়ের ডিটারজেন্ট ভালোভাবে না ধুয়ে ক্যাটায়নিক ফিক্সার দিলে বিক্রিয়া করে কাপড়ে দাগ পড়ে। ২. নিম্নমানের ডাইসায়ানডায়ামাইড ফিক্সার থেকে ফরমালডিহাইড মুক্ত হতে পারে এবং লাইট ফাস্টনেস সামান্য কমতে পারে।',
  },
];

/**
 * Pure helper to filter machines or chemicals by search query
 */
export function filterWashingChemicals(
  query: string,
  hazardFilter: string = 'All'
): WashingChemicalSpec[] {
  const q = query.trim().toLowerCase();
  return WASHING_CHEMICALS_DATA.filter((chem) => {
    const matchesHazard = hazardFilter === 'All' || chem.hazardLevel === hazardFilter;
    if (!q) return matchesHazard;
    return (
      matchesHazard &&
      (chem.nameEn.toLowerCase().includes(q) ||
        chem.nameBn.toLowerCase().includes(q) ||
        chem.chemicalFormula.toLowerCase().includes(q) ||
        chem.whatItDoesEn.toLowerCase().includes(q) ||
        chem.whatItDoesBn.toLowerCase().includes(q))
    );
  });
}

/**
 * Pure helper to calculate sewing cycle output per hour given RPM, SPI, and seam length inches
 */
export function calculateMachineHourlyOutput(params: {
  rpm: number;
  spi: number;
  seamLengthInches: number;
  handlingSecondsPerPc: number;
}): {
  stitchesPerSeam: number;
  sewingTimeSeconds: number;
  totalCycleSeconds: number;
  piecesPerHourAt85Eff: number;
} {
  const stitchesPerSeam = Math.round(params.seamLengthInches * params.spi);
  const stitchesPerSecond = Math.max(1, params.rpm / 60);
  const sewingTimeSeconds = Number((stitchesPerSeam / stitchesPerSecond).toFixed(1));
  const totalCycleSeconds = Number((sewingTimeSeconds + params.handlingSecondsPerPc).toFixed(1));
  const piecesPerHourAt85Eff = Math.max(1, Math.floor((3600 / totalCycleSeconds) * 0.85));
  return {
    stitchesPerSeam,
    sewingTimeSeconds,
    totalCycleSeconds,
    piecesPerHourAt85Eff,
  };
}

export interface MerchandiserTipSpec {
  id: string;
  code: string;
  stageEn: string;
  stageBn: string;
  domain: 'fabric' | 'sewing' | 'washing' | 'costing-qa';
  devTitleEn: string;
  devTitleBn: string;
  devActionEn: string;
  devActionBn: string;
  devPitfallEn: string;
  devPitfallBn: string;
  bulkTitleEn: string;
  bulkTitleBn: string;
  bulkActionEn: string;
  bulkActionBn: string;
  bulkPitfallEn: string;
  bulkPitfallBn: string;
}

// 4. Development Merchandiser vs. Bulk Merchandiser Actionable Playbook (8 Stages)
export const DEV_VS_BULK_MERCHANDISER_TIPS: MerchandiserTipSpec[] = [
  {
    id: 'shrinkage-pattern',
    code: 'TIP-01',
    stageEn: 'Fabric Shrinkage & Pattern Grading',
    stageBn: 'ফ্যাব্রিক শ্রিংকেজ ও প্যাটার্ন গ্রেডিং',
    domain: 'fabric',
    devTitleEn: 'Proto / Fit Sample Shrinkage Testing',
    devTitleBn: 'প্রোটো ও ফিট স্যাম্পল শ্রিংকেজ টেস্ট',
    devActionEn:
      'Never cut a Proto or Fit sample using mill datasheet shrinkage alone. Wash a 1m x 1m mock leg panel using the exact target buyer wash recipe (e.g. Heavy Enzyme Bleach) to lock the true Warp/Weft shrinkage % before pattern cutting.',
    devActionBn:
      'কখনোই শুধু মিলের কাগজের শ্রিংকেজ দেখে প্রোটো বা ফিট স্যাম্পল কাটবেন না। বায়ারের আসল ওয়াশ রেসিপিতে ১ মিটার কাপড়ের মক-লেগ ওয়াশ করে প্রকৃত ওয়ার্প ও ওয়েফট শ্রিংকেজ বের করে প্যাটার্ন তৈরি করুন।',
    devPitfallEn:
      'If sample yardage has 2% weft shrinkage but bulk fabric has 4.5%, the Fit sample passes while bulk production fails hip/thigh measurements.',
    devPitfallBn:
      'স্যাম্পলের কাপড়ে ২% এবং বাল্ক কাপড়ে ৪.৫% শ্রিংকেজ হলে ফিট স্যাম্পল পাস করলেও বাল্ক প্রোডাকশনে কোমর ও থাইয়ের মাপ ছোট হয়ে যাবে।',
    bulkTitleEn: 'Roll-to-Roll Shrinkage Grouping & Pattern Families',
    bulkTitleBn: 'রোল-টু-রোল শ্রিংকেজ গ্রুপিং ও মাল্টি-প্যাটার্ন',
    bulkActionEn:
      'Test shrinkage on 10% of incoming bulk rolls across all shade lots. Group rolls into shrinkage brackets (e.g., Group A: 9%–11% weft; Group B: 11.5%–13.5% weft) and issue separate graded markers for each group.',
    bulkActionBn:
      'বাল্ক কাপড় আসার পর অন্তত ১০% রোলের শ্রিংকেজ টেস্ট করুন। কাছাকাছি শ্রিংকেজের রোলগুলোকে আলাদা গ্রুপে (Group A, Group B) ভাগ করে প্রতিটি গ্রুপের জন্য আলাদা মার্কার ও প্যাটার্ন ব্যবহার করুন।',
    bulkPitfallEn:
      'Cutting all bulk rolls with a single marker causes ±1.5 inch waist variation inside the same carton.',
    bulkPitfallBn:
      'সব রোল একই মার্কারে কাটলে একই কার্টনের ভেতর প্যান্টের কোমরের মাপে ১.৫ ইঞ্চি পর্যন্ত তারতম্য ঘটে।',
  },
  {
    id: 'shade-blanket-lot',
    code: 'TIP-02',
    stageEn: 'Shade Continuity & Wash Blanket Approval',
    stageBn: 'শেড কন্টিনিউটি ও ওয়াশ ব্ল্যাঙ্কেট অনুমোদন',
    domain: 'washing',
    devTitleEn: 'SMS / Wash Standard Target & Tolerance Band',
    devTitleBn: 'ওয়াশ স্ট্যান্ডার্ড ও শেড টলারেন্স অনুমোদন',
    devActionEn:
      'When submitting the Salesman Sample (SMS) or Pre-Production (PP) sample, always get the buyer to sign a 3-shade tolerance hanger: Standard Master, Light Limit (-5%), and Dark Limit (+5%).',
    devActionBn:
      'পিপি (PP) স্যাম্পল অনুমোদনের সময় বায়ারের কাছ থেকে শুধু ১টি পিস নয়, বরং মাস্টার শেডের পাশাপাশি লাইট লিমিট (-৫%) এবং ডার্ক লিমিট (+৫%)—এই ৩টি শেড ব্যান্ড সাইন করিয়ে নিন।',
    devPitfallEn:
      'Approving a single hand-finished "golden sample" gives the QC team zero tolerance for natural indigo bath variation in bulk.',
    devPitfallBn:
      'শুধুমাত্র একটি স্যাম্পল অ্যাপ্রুভ করালে বাল্ক ওয়াশে সামান্য ১৯-২০ শেড পার্থক্য হলেও বায়ার কিউসি (QC) শিপমেন্ট আটকে দেয়।',
    bulkTitleEn: 'Wash Blanket (Shade Band) & First-Batch Trial',
    bulkTitleBn: 'ওয়াশ ব্ল্যাঙ্কেট ও প্রথম ব্যাচ ট্রায়াল',
    bulkActionEn:
      'Sew a continuous "Wash Blanket" containing 6-inch strips from every bulk fabric roll and wash it in the actual laundry recipe. Segregate rolls into Shade Lots (Lot A, B, C) and never mix lots inside a bundle or washing drum.',
    bulkActionBn:
      'বাল্কের প্রতিটি রোল থেকে ৬ ইঞ্চি কাপড় কেটে একসাথে সেলাই করে "ওয়াশ ব্ল্যাঙ্কেট" ওয়াশ করুন। এরপর শেড অনুযায়ী লট (A, B, C) আলাদা করুন এবং কাটিং বান্ডেল বা ওয়াশিং মেশিনে কখনো দুই লট মেশাবেন না।',
    bulkPitfallEn:
      'Mixing Lot A and Lot C panels on the sewing line creates "two-tone leg / pocket shading" that only becomes visible after stone washing.',
    bulkPitfallBn:
      'সুয়িং লাইনে ভিন্ন লটের পার্টস মিশে গেলে স্টোন ওয়াশের পর প্যান্টের এক পা হালকা ও অন্য পা গাঢ় (Shading defect) হয়ে যায়।',
  },
  {
    id: 'sewing-construction-ppm',
    code: 'TIP-03',
    stageEn: 'Sewing Tension, Folders & Roping Effect',
    stageBn: 'সুয়িং টেনশন, ফোল্ডার ও হেম রোপিং',
    domain: 'sewing',
    devTitleEn: 'Tech Pack Folder & Thread Spec Locking',
    devTitleBn: 'টেক প্যাকে ফোল্ডার ও সুতার স্পেক চূড়ান্তকরণ',
    devActionEn:
      'Specify exact folder scroll sizes (e.g. 12mm hem folder for vintage roping vs. 15mm trouser hem) and core-spun polyester-cotton thread tickets (Tex 105 top / Tex 80 looper) during proto stage so wash abrasion highlights the seam.',
    devActionBn:
      'প্রোটো স্টেজেই হেম ফোল্ডারের মাপ (যেমন ভিন্টেজ রোপিংয়ের জন্য ১২ মিমি) এবং কোর-স্পান সুতার কাউন্ট (Tex 105/80) টেক প্যাকে নির্দিষ্ট করুন যাতে ওয়াশের পর সেলাইয়ের হাইলাইট সুন্দরভাবে ফুটে ওঠে।',
    devPitfallEn:
      'Using cheap 100% spun polyester thread on development samples causes shiny plastic-looking seams that refuse to abrade during stone wash.',
    devPitfallBn:
      'স্যাম্পলে সাধারণ পলিয়েস্টার সুতা ব্যবহার করলে ওয়াশের পর সেলাই চকচকে দেখায় এবং ভিন্টেজ লুক আসে না।',
    bulkTitleEn: 'PPM Mock-Up & Heavy Cross-Seam Choking Check',
    bulkTitleBn: 'পিপিএম (PPM) মক-আপ ও ক্রস-সিম চেক',
    bulkActionEn:
      'Before starting bulk sewing lines, run 30 pilot pieces through sewing AND full laundry washing. Inspect the riser/inseam cross-junction and belt-loop bar-tacks after washing to verify zero skipped chainstitches or bar-tack holes.',
    bulkActionBn:
      'বাল্ক লাইন চালুর আগে ৩০ পিস পাইলট রান করে ফুল ওয়াশ করিয়ে আনুন। ওয়াশের পর ক্রচ জয়েন্ট, ব্যাক ইয়ক ও বেল্ট লুপের বার-ট্যাক পরীক্ষা করুন যেন কোথাও সেলাই খুলে না যায় বা ছিদ্র না হয়।',
    bulkPitfallEn:
      'Discovering bar-tack holes or broken elastane at pocket corners after sewing 10,000 jeans leads to massive darning/rework claims.',
    bulkPitfallBn:
      '১০,০০০ পিস সেলাই শেষ হওয়ার পর ওয়াশে গিয়ে পকেটের কোণায় বার-ট্যাক ছিদ্র ধরা পড়লে পুরো অর্ডার বাতিল হতে পারে।',
  },
  {
    id: 'dry-wet-laundry-control',
    code: 'TIP-04',
    stageEn: 'Dry Process Placement & Chemical Neutralization',
    stageBn: 'ড্রাই প্রসেস প্লেসমেন্ট ও কেমিক্যাল নিউট্রালাইজেশন',
    domain: 'washing',
    devTitleEn: 'Laser Greyscale Map vs. Hand Scraping Template',
    devTitleBn: 'লেজার ডিজাইন ফাইল ও হুইস্কার টেমপ্লেট',
    devActionEn:
      'Convert buyer-approved hand-scraped whiskers into a calibrated CO2 laser `.bmp` file graded for Small, Medium, and Large size groups so whisker placement scales proportionally from size 28 to size 40.',
    devActionBn:
      'বায়ার অনুমোদিত হুইস্কার ও থাই ফেডকে সাইজ অনুযায়ী (Small, Medium, Large) গ্রেডিং করা লেজার ফাইলে রূপান্তর করুন, যাতে ২৮ সাইজ এবং ৪০ সাইজে হুইস্কারের অনুপাত একই থাকে।',
    devPitfallEn:
      'Using one fixed whisker mould for all sizes places whiskers on the knee of a size 26 jean and too high on a size 42 jean.',
    devPitfallBn:
      'সব সাইজের প্যান্টে একই মাপের রাবার প্যাটার্ন ব্যবহার করলে ছোট সাইজে হুইস্কার হাঁটুতে নেমে যায়।',
    bulkTitleEn: 'Antichlor KI Paper Test & Tear Strength Audit',
    bulkTitleBn: 'অ্যান্টিক্লোর (KI) টেস্ট ও টিয়ার স্ট্রেন্থ অডিট',
    bulkActionEn:
      'Mandate Potassium Iodide (KI) starch paper testing on every bleach/PP batch before unloading the hydro extractor, and pull 2 garments per 1,000 pcs for ASTM D1424 warp/weft tear strength testing (minimum > 1,800g on weft).',
    bulkActionBn:
      'প্রতিটি ব্লিচ ও পিপি ওয়াশ ব্যাচ নামানোর আগে পটাশিয়াম আয়োডাইড (KI) পেপার দিয়ে ক্লোরিন টেস্ট বাধ্যতামূলক করুন এবং প্রতি ১,০০০ পিসে ২টি প্যান্টের টিয়ার স্ট্রেন্থ (কমপক্ষে ১৮০০ গ্রাম) ল্যাবে পরীক্ষা করুন।',
    bulkPitfallEn:
      'Skipping antichlor tests causes jeans to turn yellow inside sea-freight containers after 3 weeks on the ocean.',
    bulkPitfallBn:
      'অ্যান্টিক্লোর টেস্ট না করলে জাহাজে কন্টেইনারের ভেতর ৩ সপ্তাহ থাকার পর প্যান্ট হলুদ হয়ে দুর্গন্ধ তৈরি হয়।',
  },
  {
    id: 'costing-wastage-buffer',
    code: 'TIP-05',
    stageEn: 'FOB Costing, Consumption & Process Loss Buffers',
    stageBn: 'এফওবি (FOB) কস্টিং, কনজাম্পশন ও প্রসেস লস বাফার',
    domain: 'costing-qa',
    devTitleEn: 'Initial Costing Quote & Wash Rejection Buffer',
    devTitleBn: 'প্রাথমিক কস্টিং কোটেশন ও ওয়াশ রিস্ক বাফার',
    devActionEn:
      'When quoting FOB on heavy bleach, acid wash, or 3D resin styles, build in a 3%–4% laundry process loss buffer and add $0.25/pc for anti-backstaining + tear-strength protective auxiliaries.',
    devActionBn:
      'হেভি ব্লিচ, অ্যাসিড ওয়াশ বা ৩ডি রেজিন স্টাইলের এফওবি (FOB) প্রাইস দেওয়ার সময় ৩%–৪% ওয়াশ ড্যামেজ বাফার এবং $০.২৫/পিস প্রোটেক্টিভ কেমিক্যাল খরচ যুক্ত করে কোটেশন দিন।',
    devPitfallEn:
      'Quoting rock-bottom wash cost on an Ice Wash forces the laundry to skip neutralizers, resulting in a 12% B-grade rejection rate.',
    devPitfallBn:
      'আইস ওয়াশে কম রেট ধরলে লন্ড্রি খরচ বাঁচাতে নিউট্রালাইজার কম দেয়, ফলে ১০%–১২% প্যান্ট ড্যামেজ বা বি-গ্রেড হয়ে যায়।',
    bulkTitleEn: 'Cut-to-Ship Ratio & Roll End / Width Reconciliation',
    bulkTitleBn: 'কাট-টু-শিপ রেশিও এবং কাপড়ের বহর (Width) হিসাব',
    bulkActionEn:
      'Sort bulk rolls by usable cuttable width (e.g. 57" vs 59" inside selvedge) before marker making. Using a 58.5" marker on wider rolls saves 3.5% fabric consumption—enough to cover all laundry seconds.',
    bulkActionBn:
      'মার্কার করার আগে কাপড়ের কাটযোগ্য বহর (Cuttable Width: ৫৭" বনাম ৫৯") অনুযায়ী রোল বাছাই করুন। চওড়া রোলের জন্য আলাদা মার্কার করলে ৩.৫% কাপড় সাশ্রয় হয় যা দিয়ে বাড়তি শিপমেন্ট কোয়ান্টিটি পূরণ করা যায়।',
    bulkPitfallEn:
      'Making one narrow marker for the narrowest roll wastes 2 inches of fabric along the edge of every wider roll.',
    bulkPitfallBn:
      'সবচেয়ে কম বহরের রোলের মাপে সব মার্কার করলে চওড়া রোলগুলোর দুই পাশ দিয়ে ২ ইঞ্চি করে দামি কাপড় ওয়েস্টেজ হয়।',
  },
  {
    id: 'garment-dyeing-rfd-control',
    code: 'TIP-06',
    stageEn: 'Garment Dyeing (RFD), Overdyeing & Accessory Engineering',
    stageBn: 'গার্মেন্টস ডাইং (RFD), ওভারডাইং ও অ্যাক্সেসরিজ কন্ট্রোল',
    domain: 'sewing',
    devTitleEn: 'RFD Thread, Trim & Grey Cutting Wastage Savings',
    devTitleBn: 'RFD সুতা, ট্রিমস ও গ্রে-কাটিং ওয়েস্টেজ সাশ্রয়',
    devActionEn:
      'For garment-dyed or overdyed styles, specify 100% cotton or core-spun cotton thread, polyester buttons (never nylon/rubber), polyamide zippers, and nickel-alloy hardware. Cutting RFD grey fabric saves 10%–15% dyed fabric wastage.',
    devActionBn:
      'গার্মেন্টস ডাইং বা ওভারডাইং স্টাইলের জন্য ১০০% সুতি বা কোর-স্পান সুতা, পলিয়েস্টার বাটন (নাইলন বা রাবার নয়), পলিঅ্যামাইড জিপার ও নিকেল মেটাল বাছাই করুন। গ্রে (RFD) কাপড় কেটে গার্মেন্টস ডাই করলে ১০%–১৫% রঙিন কাপড়ের ওয়েস্টেজ খরচ বাঁচে।',
    devPitfallEn:
      'Sewing RFD garments with tight stitch tension leaves white undyed seam tracks underneath the thread after high-temperature rotary dyeing.',
    devPitfallBn:
      'সেলাইয়ের সুতার টেনশন বেশি টাইট থাকলে ডাইংয়ের সময় সেলাইয়ের নিচে রঙ ঢুকতে পারে না, ফলে সাদা আন-ডাইড দাগ (White seam mark) থেকে যায়।',
    bulkTitleEn: 'OBA-Free Panel Segregation & Glauber Salt Dosing',
    bulkTitleBn: 'OBA-মুক্ত কাপড় বাছাই ও গ্লুবার সল্ট ডোজিং',
    bulkActionEn:
      'Never mix fabric rolls treated with Optical Brightener (OBA) and non-OBA rolls in the same garment, and ensure knitting oils/softeners are scoured off before dyeing at 80°C with 50 g/L Glauber salt and 20 g/L Soda ash.',
    bulkActionBn:
      'গার্মেন্টস ডাইংয়ের কাটিংয়ে কখনোই OBA-যুক্ত এবং OBA-ছাড়া কাপড়ের প্যানেল মেশাবেন না; এবং ডাইংয়ের আগে কাপড়ের তেল বা সফটনার সম্পূর্ণ স্কোরিং করে তুলে ফেলুন।',
    bulkPitfallEn:
      'Residual hydrogen peroxide or chlorine from bleaching reacts with reactive dyes in the drum, causing severe panel-to-panel shade variation and white specks.',
    bulkPitfallBn:
      'ব্লিচিংয়ের পর কাপড়ে সামান্য হাইড্রোজেন পারঅক্সাইড বা ক্লোরিন থেকে গেলে ডাইং বাথে রঙ নষ্ট হয়ে প্যানেল-টু-প্যানেল শেড ভেরিয়েশন হয়।',
  },
  {
    id: 'physical-lab-testing-compliance',
    code: 'TIP-07',
    stageEn: 'Physical Lab Testing: Tear, Tensile, Abrasion & Pilling',
    stageBn: 'ফিজিক্যাল ল্যাব টেস্টিং: টিয়ার, টেনসাইল, অ্যাব্রেশন ও পিলিং',
    domain: 'costing-qa',
    devTitleEn: 'Pre-Wash vs. Post-Wash Strength Hierarchy Validation',
    devTitleBn: 'ওয়াশের আগে ও পরে কাপড়ের শক্তি ও পিলিং যাচাই',
    devActionEn:
      'Validate base fabric against international lab standards before booking: Tensile Strength (ISO 13934-1, 300×60mm strip), Elmendorf Tear Strength (ISO 13937-1, 100×75mm), Martindale Abrasion (ISO 12947, 38mm specimen), and ICI Box Pilling (ISO 12945-1, Grade 1–5 scale).',
    devActionBn:
      'ফ্যাব্রিক বুকিংয়ের আগে আন্তর্জাতিক মান অনুযায়ী ল্যাব টেস্ট নিশ্চিত করুন: টেনসাইল স্ট্রেন্থ (ISO 13934-1), এলমেনডর্ফ টিয়ার স্ট্রেন্থ (ISO 13937-1), মার্টিনডেল অ্যাব্রেশন (ISO 12947) এবং আইসিআই বক্স পিলিং (ISO 12945-1, রেটিং ৪–৫)।',
    devPitfallEn:
      'Hand-sanding brush reduces warp tensile strength by up to 56.68% (compared to only 1.31% for CO2 laser and 2.57% for PP spray)—ignoring this causes knee blowouts.',
    devPitfallBn:
      'হ্যান্ড স্যান্ডিং ব্রাশে ওয়ার্প সুতার শক্তি ৫৬.৬৮% পর্যন্ত কমে যায় (যেখানে CO2 লেজারে কমে মাত্র ১.৩১%)—তাই হেভি ডিস্ট্রেসড স্টাইলে লেজার ব্যবহার না করলে হাঁটু সহজেই ছিঁড়ে যায়।',
    bulkTitleEn: 'Destroy Hole Reinforcement & Post-Wash Lab Audit',
    bulkTitleBn: 'ডেস্ট্রয় হোল রিইনফোর্সমেন্ট ও ফাইনাল ল্যাব অডিট',
    bulkActionEn:
      'After manual knife or grinding-pen destroy processes, apply acetic silicone seal to exposed white weft yarns or stitch an internal backing patch so weft threads do not snap during bulk tumble drying.',
    bulkActionBn:
      'নাইফ বা গ্রাইন্ডিং পেন দিয়ে ডেস্ট্রয় (Destroy) করার পর সাদা ওয়েফট সুতাগুলোর শক্তি কমে যায়; তাই সুতা ছিঁড়ে যাওয়া রোধে অ্যাসিটিক সিলিকন সিল (Acetic silicon seal) বা ভেতরে ব্যাকিং প্যাচ সেলাই করে দিন।',
    bulkPitfallEn:
      'In tensile testing (ISO 13934-1), jaw slippage >2mm or cross-wise tearing in Elmendorf tests invalidates the lab report and delays final inspection release.',
    bulkPitfallBn:
      'ল্যাব টেস্টে ক্ল্যাম্প থেকে ২ মিমি-এর বেশি স্লিপ করলে বা ক্রস-ওয়াইজ টিয়ার হলে টেস্ট রিপোর্ট বাতিল হয়ে শিপমেন্ট রিলিজ আটকে যেতে পারে।',
  },
  {
    id: 'water-hardness-ml-ratio-tegewa',
    code: 'TIP-08',
    stageEn: 'Water Hardness, M:L Ratio & Pretreatment Absorbency',
    stageBn: 'পানির হার্ডনেস, M:L রেশিও ও প্রিট্রিটমেন্ট শোষণ পরীক্ষা',
    domain: 'fabric',
    devTitleEn: 'TEGEWA Desizing Scale & AATCC 79 Absorbency Spec',
    devTitleBn: 'TEGEWA ডি-সাইজিং স্কেল ও AATCC 79 শোষণ মানদণ্ড',
    devActionEn:
      'Include pretreatment benchmarks in the wash tech pack: Desizing efficiency >90% (TEGEWA Violet Scale rating), Scouring weight loss 4%–8%, AATCC 79 drop absorbency <1 second, and wicking height >30–50 mm in 5 minutes.',
    devActionBn:
      'টেক প্যাকে প্রিট্রিটমেন্ট মানদণ্ড উল্লেখ করুন: ডি-সাইজিং এফিসিয়েন্সি ৯০%+ (TEGEWA স্কেল), স্কোরিং ওয়েট লস ৪%–৮%, ড্রপ টেস্টে পানি শোষণ <১ সেকেন্ড (AATCC 79) এবং উইকিং হাইট ৩০–৫০ মিমি।',
    devPitfallEn:
      'Improper singeing on uneven guide rollers causes widthways streaks, while over-singeing melts synthetic blend fibers into tiny hard beads that resist dye.',
    devPitfallBn:
      'সিঞ্জিং মেশিনে বার্নারের দূরত্ব (৬–৮ মিমি) বা গতি (৫০–১৬০ মি/মিনিট) ঠিক না থাকলে কাপড়ে লম্বালম্বি দাগ পড়ে এবং ব্লেন্ডেড কাপড়ের সিন্থেটিক ফাইবার গলে শক্ত দানার (Molten beads) সৃষ্টি করে।',
    bulkTitleEn: 'Daily Water Hardness Check (<50 ppm) & Low Softening M:L Ratio',
    bulkTitleBn: 'দৈনিক পানির হার্ডনেস (<৫০ ppm) ও সফটনিং M:L রেশিও নিয়ন্ত্রণ',
    bulkActionEn:
      'Check supply water hardness daily via 0.01M EDTA titration (Eriochrome Black T indicator at pH 10; keep <50 ppm CaCO3), and keep M:L ratio at 1:8–1:10 for washing but lower it to 1:4–1:6 during softening.',
    bulkActionBn:
      'প্রতিদিন ওয়াশিং ফ্লোরের পানির হার্ডনেস ইডিটিএ (EDTA) টাইট্রেশনের মাধ্যমে পরীক্ষা করুন (<৫০ ppm রাখা আবশ্যক) এবং মূল ওয়াশে M:L রেশিও ১:৮–১:১০ রাখলেও সফটনিংয়ের সময় ১:৪–১:৬ এ নামিয়ে আনুন।',
    bulkPitfallEn:
      'High M:L ratio during softening dilutes the softener and leaves stiff patches, whereas too-low M:L ratio during enzyme/bleach washing causes drum-rubbing washing marks.',
    bulkPitfallBn:
      'সফটনিংয়ে পানি বেশি (উচ্চ M:L রেশিও) হলে সফটনার পাতলা হয়ে কাপড় খসখসে থেকে যায়, আবার মূল ওয়াশে পানি অতিরিক্ত কম হলে ড্রামের ঘর্ষণে কাপড়ে ওয়াশিং মার্ক (Washing mark) পড়ে।',
  },
];

/**
 * Pure helper to filter merchandiser tips by domain and search query
 */
export function filterMerchandiserTips(
  domain: 'all' | MerchandiserTipSpec['domain'],
  query: string = ''
): MerchandiserTipSpec[] {
  const q = query.trim().toLowerCase();
  return DEV_VS_BULK_MERCHANDISER_TIPS.filter((tip) => {
    const matchesDomain = domain === 'all' || tip.domain === domain;
    if (!q) return matchesDomain;
    return (
      matchesDomain &&
      (tip.stageEn.toLowerCase().includes(q) ||
        tip.stageBn.toLowerCase().includes(q) ||
        tip.devTitleEn.toLowerCase().includes(q) ||
        tip.devTitleBn.toLowerCase().includes(q) ||
        tip.bulkTitleEn.toLowerCase().includes(q) ||
        tip.bulkTitleBn.toLowerCase().includes(q))
    );
  });
}


