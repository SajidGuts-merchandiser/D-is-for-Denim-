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
  machineType: 'belly-washer' | 'front-washer' | 'hydro-extractor' | 'tumble-dryer' | 'laser-system' | 'ozone-cabinet' | 'curing-oven';
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

// 2. 7 Industrial Washing Machines (Wet & Dry Laundry Equipment)
export const WASHING_MACHINES_DATA: WashingMachineSpec[] = [
  {
    id: 'belly-washer',
    code: 'W-MC-01',
    nameEn: 'Side-Loading Belly / Paddle Washing Machine',
    nameBn: 'সাইড-লোডিং বেলি / প্যাডেল ওয়াশিং মেশিন',
    machineType: 'belly-washer',
    capacityKg: '100 – 250 kg / batch',
    speedOrTemp: '22 – 32 RPM • Up to 85°C',
    liquorRatio: '1:8 to 1:12 (High Water)',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Industrial+Denim+Belly+Washing+Machine+Stone+Wash+Process',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'Industrial Belly Washer Pumice Stone & Enzyme Washing Process',
    videoTitleBn: 'ইন্ডাস্ট্রিয়াল বেলি ওয়াশিং মেশিনে স্টোন ও এনজাইম ওয়াশ ভিডিও',
    whatItDoesEn:
      'Executes heavy-duty desizing, stone washing, enzyme abrasion, chlorine bleaching, and neutralization for large bulk batches (150–300 jeans per load).',
    whatItDoesBn:
      'একবারে ১৫০–৩০০টি জিন্সের বড় ব্যাচে ডি-সাইজিং, স্টোন ওয়াশ, এনজাইম অ্যাব্রেশন, ব্লিচিং এবং নিউট্রালাইজেশন সম্পন্ন করে।',
    howOperatedEn:
      'Garments and volcanic pumice stones are loaded through the horizontal side door into a perforated stainless-steel inner drum that rotates forward and reverse inside an outer water-filled belly tank heated by direct steam.',
    howOperatedBn:
      'সামনের আনুভূমিক দরজা দিয়ে কাপড় ও পিউমিস স্টোন ছিদ্রযুক্ত স্টেইনলেস স্টিলের ড্রামে ভরা হয়; ড্রামটি গরম পানি ও কেমিক্যাল ভরা বাইরের ট্যাংকের ভেতর ঘড়ির কাঁটার দিকে ও বিপরীতে ঘুরতে থাকে।',
    disadvantagesEn:
      '1. High water and steam consumption (liquor ratio 1:10). 2. Heavy pumice stone battering pits the steel drum and can cause long vertical crease streaks if overloaded.',
    disadvantagesBn:
      '১. পানি ও স্টিম খরচ অনেক বেশি (লিক্যার রেশিও ১:১০)। ২. পাথরের অনবরত আঘাতে ড্রাম ক্ষয় হয় এবং অতিরিক্ত কাপড় দিলে লম্বালম্বি ক্রিস মার্ক (Crease mark) পড়ে।',
  },
  {
    id: 'front-washer',
    code: 'W-MC-02',
    nameEn: 'Front-Loading Eco Jet / Smart Rotary Washer',
    nameBn: 'ফ্রন্ট-লোডিং ইকো-জেট ও রোটারি ওয়াশার',
    machineType: 'front-washer',
    capacityKg: '60 – 180 kg / batch',
    speedOrTemp: '30 – 45 RPM (G-Force Control)',
    liquorRatio: '1:3 to 1:5 (Low Liquor)',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Tonello+Jeanologia+Eco+Front+Loading+Denim+Washing+Machine',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'Low-Liquor Smart Rotary Jet Washer & Nebulized Enzyme Process',
    videoTitleBn: 'ফ্রন্ট-লোডিং ইকো-জেট মেশিনে কম পানিতে মিস্ট এনজাইম ওয়াশ ভিডিও',
    whatItDoesEn:
      'Performs low-water nebulized enzyme washing, precision tinting/overdyeing, and computer-programmed recipe baths with minimal water waste.',
    whatItDoesBn:
      'কম পানিতে (Low Liquor) মিস্ট এনজাইম ওয়াশ, নিখুঁত টিন্টিং বা ওভারডাইং এবং কম্পিউটার নিয়ন্ত্রিত ওয়াশ রেসিপি পরিচালনা করে।',
    howOperatedEn:
      'Loaded via a large front circular glass/steel hatch; high-pressure recirculation nozzles spray atomized chemical mist directly onto tumbling garments while PLC sensors regulate pH, temperature, and dosing tanks automatically.',
    howOperatedBn:
      'সামনের গোলাকার দরজা দিয়ে কাপড় লোড করার পর হাই-প্রেসার জেট নজল দিয়ে কেমিক্যাল মিস্ট স্প্রে করা হয় এবং পিএলসি (PLC) কম্পিউটার স্বয়ংক্রিয়ভাবে তাপমাত্রা ও pH নিয়ন্ত্রণ করে।',
    disadvantagesEn:
      '1. High capital cost ($65,000–$120,000 per machine). 2. Spray nozzles clog easily if pumice stone dust or lint is not filtered every shift.',
    disadvantagesBn:
      '১. মেশিনের দাম অত্যন্ত বেশি ($৬৫,০০০–$১,২০,০০০)। ২. পাথরের গুঁড়ো বা সুতার আঁশ ফিল্টার না করলে স্প্রে নজল দ্রুত ব্লক হয়ে যায়।',
  },
  {
    id: 'hydro-extractor',
    code: 'W-MC-03',
    nameEn: 'Centrifugal Hydro Extractor (Spin Dewatering)',
    nameBn: 'সেন্ট্রিফিউগাল হাইড্রো এক্সট্রাক্টর (পানি ঝরানো মেশিন)',
    machineType: 'hydro-extractor',
    capacityKg: '100 – 200 kg / load',
    speedOrTemp: '950 – 1,200 RPM (High G-Force)',
    liquorRatio: 'Extracts 70%–75% moisture',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Industrial+Hydro+Extractor+Machine+Garment+Washing+Plant',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'High-RPM Centrifugal Hydro Extractor Dewatering in Denim Laundry',
    videoTitleBn: 'হাইড্রো এক্সট্রাক্টর মেশিনে উচ্চ গতিতে ডেনিমের পানি নিষ্কাশন ভিডিও',
    whatItDoesEn:
      'Rapidly spins soaked jeans after wet washing to fling out 70%–75% of absorbed water before tumble drying, cutting dryer energy time in half.',
    whatItDoesBn:
      'ওয়েট ওয়াশের পর ভেজা জিন্সকে প্রচণ্ড গতিতে ঘুরিয়ে ৭০%–৭৫% পানি বের করে দেয়, ফলে ড্রায়ারে শুকানোর সময় ও গ্যাস খরচ অর্ধেক কমে যায়।',
    howOperatedEn:
      'Wet jeans are packed evenly around the vertical perforated basket and covered with a safety net; the heavy cast-iron base spins at 1,000+ RPM for 5–8 minutes using centrifugal force.',
    howOperatedBn:
      'ভেজা প্যান্টগুলো খাড়া ছিদ্রযুক্ত বাস্কেটে সমানভাবে সাজিয়ে সেফটি নেট দিয়ে ঢেকে দেওয়া হয়; এরপর ১০০০+ RPM গতিতে ৫–৮ মিনিট ঘুরিয়ে সেন্ট্রিফিউগাল শক্তিতে পানি নিষ্কাশন করা হয়।',
    disadvantagesEn:
      '1. Over-spinning or uneven loading presses sharp "crow’s feet" / hydro crease marks into dark indigo jeans. 2. Severe mechanical vibration if the load is unbalanced.',
    disadvantagesBn:
      '১. অতিরিক্ত সময় ঘোরালে গাঢ় নীল ও রিজিড ডেনিমে স্থায়ী ভাঁজ বা ক্রিস দাগ (Hydro crease) বসে যায়। ২. কাপড় সমানভাবে না রাখলে মেশিনে প্রচণ্ড ভাইব্রেশন ও দুর্ঘটনা ঘটতে পারে।',
  },
  {
    id: 'tumble-dryer',
    code: 'W-MC-04',
    nameEn: 'Industrial Steam / Gas Reversing Tumble Dryer',
    nameBn: 'ইন্ডাস্ট্রিয়াল স্টিম / গ্যাস টাম্বল ড্রায়ার',
    machineType: 'tumble-dryer',
    capacityKg: '100 – 150 kg / batch',
    speedOrTemp: '60°C – 85°C • 35–50 min',
    liquorRatio: '0% Moisture Target',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Industrial+Tumble+Dryer+Denim+Jeans+Washing+Plant',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'Reversing Steam Tumble Dryer Operation & Unloading in Denim Plant',
    videoTitleBn: 'ইন্ডাস্ট্রিয়াল স্টিম টাম্বল ড্রায়ারে জিন্স শুকানো ও কুল-ডাউন ভিডিও',
    whatItDoesEn:
      'Dries hydro-extracted jeans using hot air while tumbling them to relax fabric tension, bulk up cotton yarns, and deliver a soft, lofty handfeel.',
    whatItDoesBn:
      'গরম বাতাসের প্রবাহে ভেজা জিন্স শুকানোর পাশাপাশি কাপড়কে ঘুরিয়ে নরম হ্যান্ডফিল ও স্বাভাবিক শ্রিংকেজ প্রদান করে।',
    howOperatedEn:
      'Steam radiator coils or direct gas burners heat intake air to 70°C–80°C while the giant mesh drum reverses direction every 60 seconds so jeans do not twist into tight ropes; finishes with a 10-minute cool-down cycle.',
    howOperatedBn:
      'স্টিম কয়েল বা গ্যাস বার্নার বাতাসকে ৭০°C–৮০°C তাপমাত্রায় গরম করে এবং ড্রামটি প্রতি ৬০ সেকেন্ড পর পর উল্টো দিকে ঘোরে যাতে প্যান্টগুলো জট না পাকায়; শেষে ১০ মিনিট ঠান্ডা বাতাসে কুল-ডাউন করা হয়।',
    disadvantagesEn:
      '1. Temperatures above 80°C embrittle and snap Lycra/elastane fibers in stretch denim. 2. Uncovered metal buttons/rivets overheat and scorch adjacent fabric or chip enamel coatings.',
    disadvantagesBn:
      '১. ৮০°C-এর বেশি তাপমাত্রায় স্ট্রেচ ডেনিমের লাইক্রা/ইলাস্টেন সুতা নষ্ট হয়ে স্থিতিস্থাপকতা হারায়। ২. মেটাল বাটন ও রিভেট অতিরিক্ত গরম হয়ে কাপড়ে পোড়া দাগ ফেলতে পারে।',
  },
  {
    id: 'laser-system',
    code: 'W-MC-05',
    nameEn: 'CO2 Digital Laser Distressing System',
    nameBn: 'CO2 ডিজিটাল লেজার ডিস্ট্রেসিং মেশিন',
    machineType: 'laser-system',
    capacityKg: '45 – 70 pcs / hour',
    speedOrTemp: '10.6 µm Infrared Beam (60–90 sec/pc)',
    liquorRatio: '0 Liters (100% Dry)',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Jeanologia+CO2+Laser+Denim+Jeans+Whiskers+Distressing',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: 'CO2 Digital Laser Engraving Whiskers & Vintage Fades on Jeans',
    videoTitleBn: 'ডিজিটাল CO2 লেজার মেশিনে জিন্সের হুইস্কার্স ও থাই ফেড তৈরি ভিডিও',
    whatItDoesEn:
      'Engraves precision whiskers, thigh sanding, honeycombs, rips, and vintage wear patterns directly onto raw or desized jeans in 60–90 seconds without water or chemicals.',
    whatItDoesBn:
      'পানি বা ক্ষতিকর কেমিক্যাল ছাড়াই মাত্র ৬০–৯০ সেকেন্ডে প্যান্টের ওপর হুইস্কার্স, থাই ফেড, হানিকম্ব ও ছেঁড়া ডিস্ট্রেসড ডিজাইন নিখুঁতভাবে তৈরি করে।',
    howOperatedEn:
      'The operator mounts the jean onto dual inflatable leg mannequins; overhead cameras align the garment position and galvanometer mirrors steer a high-wattage CO2 laser beam following a grayscale digital design file.',
    howOperatedBn:
      'অপারেটর ইনফ্ল্যাটেবল ডামি পায়ে প্যান্ট পরিয়ে দেন; উপরের ক্যামেরা পজিশন ঠিক করার পর কম্পিউটারে থাকা গ্রেস্কেল ডিজাইন অনুযায়ী লেজার রশ্মি স্ক্যান করে ইনডিগো রঙ বাষ্পীভূত করে দেয়।',
    disadvantagesEn:
      '1. Leaves brownish carbonized ash dust ("laser burn") that must be washed off in a follow-up enzyme rinse. 2. Excessive laser power burns through warp yarns and causes holes.',
    disadvantagesBn:
      '১. লেজার করার পর কাপড়ে হালকা বাদামি পোড়া ছাই (Carbon ash) জমে, যা ধুয়ে ফেলতে হালকা ওয়াশ দিতে হয়। ২. লেজার পাওয়ার বেশি হলে সুতা পুড়ে কাপড় ছিঁড়ে যেতে পারে।',
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
    nameEn: '3D Resin Curing & Baking Conveyor Oven',
    nameBn: '৩ডি রেজিন কিউরিং ও বেকিং কনভেয়ার ওভেন',
    machineType: 'curing-oven',
    capacityKg: '120 – 250 pcs / hour',
    speedOrTemp: '150°C – 165°C • 12–18 min',
    liquorRatio: 'Dry Thermal Cross-Linking',
    youtubeUrl: 'https://www.youtube.com/results?search_query=3D+Whisker+Resin+Curing+Oven+Denim+Jeans+Laundry',
    youtubeEmbedId: 'M7lc1UVf-VE',
    videoTitleEn: '3D Mannequin Resin Spraying & Conveyor Oven Baking Process',
    videoTitleBn: '৩ডি ডামিতে রেজিন স্প্রে ও কনভেয়ার ওভেনে বেকিং প্রসেস ভিডিও',
    whatItDoesEn:
      'Thermally bakes resin-sprayed jeans mounted on 3D wire/silicone mannequins to permanently lock rigid 3D lap whiskers and behind-the-knee honeycombs.',
    whatItDoesBn:
      'রেজিন স্প্রে করা জিন্সকে ৩ডি ডামিতে পরিয়ে উচ্চ তাপে বেক করে, যাতে কুঁচকি ও হাঁটুর পেছনের ত্রিমাত্রিক (3D) ভাঁজ ধোয়ার পরও স্থায়ী থাকে।',
    howOperatedEn:
      'Operators spray or sponge DMDHEU catalyst resin onto crinkled zones, clamp the jeans onto flexible wire leg forms, and hang them on an overhead motorized conveyor chain that travels through an insulated 155°C hot-air chamber.',
    howOperatedBn:
      'অপারেটর প্যান্টের নির্দিষ্ট স্থানে রেজিন স্প্রে করে তারের ফ্রেমে ভাঁজ করে আটকে দেন এবং ওভারহেড কনভেয়ার চেইনে ঝুলিয়ে ১৫৫°C তাপমাত্রার ওভেন টানেলের ভেতর দিয়ে ১৫ মিনিট চালনা করেন।',
    disadvantagesEn:
      '1. Resin cross-linking reduces cotton tear and tensile strength by 20%–35%. 2. Over-baking yellows light blue denim and can release formaldehyde odor if non-eco resin is used.',
    disadvantagesBn:
      '১. রেজিন কিউরিংয়ের ফলে তুলার টিয়ার স্ট্রেন্থ (ছিঁড়ে যাওয়ার শক্তি) ২০%–৩৫% কমে যায়। ২. অতিরিক্ত তাপে হালকা নীল কাপড় হলুদ হয়ে যায় এবং নিম্নমানের রেজিন থেকে ফরমালডিহাইডের গন্ধ বের হতে পারে।',
  },
];

// 3. 8 Core Washing Chemicals Encyclopedia
export const WASHING_CHEMICALS_DATA: WashingChemicalSpec[] = [
  {
    id: 'amylase',
    code: 'CHEM-01',
    nameEn: 'Alpha-Amylase Desizing Enzyme',
    nameBn: 'আলফা-অ্যামাইলেজ ডি-সাইজিং এনজাইম',
    chemicalFormula: 'α-Amylase Bio-Catalyst + Non-Ionic Surfactant',
    categoryEn: 'Step 01 • Starch Removal',
    categoryBn: 'ধাপ ০১ • মাড় বা স্টার্চ অপসারণ',
    dosageRange: '1.0 – 2.5 g/L',
    tempRange: '50°C – 60°C',
    phRange: 'pH 6.0 – 7.0',
    hazardLevel: 'Low (Bio)',
    swatchColor: '#0ea5e9',
    whatItDoesEn:
      'Breaks down insoluble weaving starch, tallow, and PVA sizing coating the warp yarns into water-soluble sugars so the fabric becomes absorbent and soft.',
    whatItDoesBn:
      'উইভিংয়ের সময় ওয়ার্প সুতায় দেওয়া অদ্রবণীয় মাড় (Starch) ও ওয়াক্স ভেঙে পানিতে দ্রবণীয় শর্করায় রূপান্তর করে, যাতে কাপড় নরম ও পরবর্তী ওয়াশের উপযোগী হয়।',
    howOperatedEn:
      'Dosed into the first warm bath (55°C, pH 6.5) together with 0.5 g/L wetting agent for 15–20 minutes, followed by two hot/warm rinses to flush out hydrolyzed starch.',
    howOperatedBn:
      'প্রথম বাথে ৫৫°C তাপমাত্রা ও pH ৬.৫-এ ওয়েটিং এজেন্টের সাথে মিশিয়ে ১৫–২০ মিনিট ওয়াশ করা হয় এবং শেষে গরম পানিতে ধুয়ে মাড় বের করে দেওয়া হয়।',
    disadvantagesEn:
      '1. Ineffective if bath temperature exceeds 75°C (denatures enzyme protein). 2. Incomplete desizing leaves invisible starch patches that block subsequent enzyme/bleach baths, creating blotchy shade defects.',
    disadvantagesBn:
      '১. পানির তাপমাত্রা ৭৫°C ছাড়িয়ে গেলে এনজাইম নষ্ট হয়ে কাজ করা বন্ধ করে দেয়। ২. মাড় পুরোপুরি না উঠলে পরবর্তী এনজাইম ও ব্লিচ ওয়াশে কাপড়ে ছোপ ছোপ দাগ (Uneven patchy shade) পড়ে।',
  },
  {
    id: 'cellulase',
    code: 'CHEM-02',
    nameEn: 'Cellulase Enzyme (Acid vs. Neutral)',
    nameBn: 'সেলুলেজ বায়ো-এনজাইম (অ্যাসিড ও নিউট্রাল)',
    chemicalFormula: 'Endoglucanase Cellulase Protein Complex',
    categoryEn: 'Step 02 • Bio-Stone Abrasion',
    categoryBn: 'ধাপ ০২ • বায়ো-স্টোন ও ফেডিং',
    dosageRange: '1.0 – 3.0 g/L',
    tempRange: '45°C – 55°C',
    phRange: 'pH 4.5–5.2 (Acid) | pH 6.0–7.0 (Neutral)',
    hazardLevel: 'Low (Bio)',
    swatchColor: '#3b82f6',
    whatItDoesEn:
      'Selectively digests surface cellulose micro-fibrils on dyed warp yarns, releasing trapped indigo ring dye to produce a salt-and-pepper stone-washed look with minimal stone load.',
    whatItDoesBn:
      'তুলার উপরিভাগের ক্ষুদ্র ফাইবারগুলোকে আংশিক হজম করে ইনডিগো রঙের কণা আলগা করে দেয়, ফলে কম পাথর ব্যবহার করেই আকর্ষণীয় সল্ট-অ্যান্ড-পেপার স্টোন ওয়াশ লুক পাওয়া যায়।',
    howOperatedEn:
      'Run in rotary drum for 30–45 minutes at 50°C with acetic acid buffer (for Acid Cellulase) or neutral buffer; deactivated at the end by raising temperature to 75°C or pH > 9 with soda ash for 10 minutes.',
    howOperatedBn:
      '৫০°C তাপমাত্রায় নির্দিষ্ট pH বাফারসহ ৩০–৪৫ মিনিট ঘোরানো হয়; ওয়াশ শেষে সোডা অ্যাশ দিয়ে pH ৯+ করে অথবা ৭৫°C গরম পানিতে ১০ মিনিট রেখে এনজাইম নিষ্ক্রিয় (Deactivate) করা হয়।',
    disadvantagesEn:
      '1. Acid cellulase works fast but causes severe indigo backstaining on white pocket bags and weft threads. 2. Over-running (>60 min) weakens cotton seams and causes fabric strength loss (>15%).',
    disadvantagesBn:
      '১. অ্যাসিড সেলুলেজ দ্রুত কাজ করলেও সাদা পকেট ব্যাগ ও ভেতরের ওয়েফট সুতায় নীল রঙ মাখিয়ে (Backstaining) নষ্ট করে। ২. অতিরিক্ত সময় চালালে কাপড়ের শক্তি ১৫%+ কমে গিয়ে সেলাই ছিঁড়ে যায়।',
  },
  {
    id: 'pumice-stone',
    code: 'CHEM-03',
    nameEn: 'Volcanic Pumice Stones (Lava Media)',
    nameBn: 'ভলকানিক পিউমিস স্টোন (আগ্নেয় ঝামা পাথর)',
    chemicalFormula: 'Porous Silicate Lava Rock (SiO2 / Al2O3)',
    categoryEn: 'Mechanical Abrasion & Acid Carrier',
    categoryBn: 'যান্ত্রিক ঘর্ষণ ও অ্যাসিড ওয়াশ মাধ্যম',
    dosageRange: '0.5 : 1 to 2 : 1 (Stone-to-Fabric Weight)',
    tempRange: '25°C – 60°C',
    phRange: 'All pH Ranges',
    hazardLevel: 'Medium',
    swatchColor: '#a8a29e',
    whatItDoesEn:
      'Physically batters raised seams, pocket hems, waistbands, and thigh surfaces to chip away outer indigo layers; also serves as the porous sponge carrier for Potassium Permanganate in Acid/Ice washes.',
    whatItDoesBn:
      'কাপড়ের উঁচু সেলাই, পকেট ও কোমরের প্রান্তে ঘর্ষণ ঘটিয়ে নীল রঙ তুলে ভিন্টেজ হাইলাইট তৈরি করে এবং অ্যাসিড/আইস ওয়াশে কেমিক্যাল বহনকারী স্পঞ্জ হিসেবে কাজ করে।',
    howOperatedEn:
      'Stones (2–6 cm diameter, imported from Turkey/Indonesia) are tumbled with jeans for 30–60 minutes; afterward, garments must go through a de-stoning shaker tumbler and manual pocket inspection.',
    howOperatedBn:
      '২–৬ সেমি আকারের ছিদ্রযুক্ত হালকা পাথর প্যান্টের সাথে ড্রামে ৩০–৬০ মিনিট ঘোরানো হয়; ওয়াশ শেষে শেকার ড্রাম ও হাতে চেক করে পকেট থেকে পাথরের টুকরো ও বালু ঝেড়ে ফেলা হয়।',
    disadvantagesEn:
      '1. Disintegrates into gritty stone sludge that clogs factory ETP drains and filters. 2. Damages metal buttons/zippers and leaves gritty sand trapped inside coin pockets.',
    disadvantagesBn:
      '১. পাথর ক্ষয়ে প্রচুর কাদা ও স্লাজ তৈরি হয় যা ফ্যাক্টরির ড্রেন ও ইটিপি (ETP) ব্লক করে দেয়। ২. মেটাল বাটন ও জিপারে দাগ ফেলে এবং পকেটের কোণায় বালু জমে থাকে।',
  },
  {
    id: 'hypochlorite',
    code: 'CHEM-04',
    nameEn: 'Sodium Hypochlorite (Liquid Chlorine Bleach)',
    nameBn: 'সোডিয়াম হাইপোক্লোরাইট (তরল ক্লোরিন ব্লিচ)',
    chemicalFormula: 'NaOCl (10%–12% Active Available Chlorine)',
    categoryEn: 'Step 03 • Shade Stripping & Ice Wash',
    categoryBn: 'ধাপ ০৩ • রঙ হালকা ও ব্লিচ ওয়াশ',
    dosageRange: '3 – 15 mL/L',
    tempRange: '40°C – 50°C',
    phRange: 'pH 10.5 – 11.5 (Strictly Alkaline)',
    hazardLevel: 'High (Restricted)',
    swatchColor: '#f59e0b',
    whatItDoesEn:
      'Oxidizes and cleaves the chromophore double bond of indigo dye into colorless isatin, rapidly stripping dark navy denim down to mid, sky, or ice-blue shades.',
    whatItDoesBn:
      'ইনডিগো রঙের অণুর ডাবল বন্ড ভেঙে বর্ণহীন যৌগে রূপান্তর করে, ফলে গাঢ় নীল ডেনিম দ্রুত হালকা আকাশি বা আইস-ব্লু শেডে পরিণত হয়।',
    howOperatedEn:
      'Buffered above pH 10.5 with soda ash (`Na2CO3`) before adding NaOCl slowly over 15–25 minutes; immediately followed by mandatory Antichlor neutralization (`Na2S2O5`).',
    howOperatedBn:
      'সোডা অ্যাশ দিয়ে পানির pH ১০.৫-এর ওপরে রেখে ধীরে ধীরে ব্লিচ যোগ করে ১৫–২৫ মিনিট চালানো হয়; এরপর অবশ্যই মেটাবাইসালফাইট দিয়ে অ্যান্টিক্লোর নিউট্রালাইজেশন করতে হয়।',
    disadvantagesEn:
      '1. Chemically attacks and snaps elastane/Lycra filaments (causes baggy knees/blistering). 2. If pH drops below 9, liberates toxic chlorine gas and causes catastrophic cellulose tendering (tearing).',
    disadvantagesBn:
      '১. স্ট্রেচ ডেনিমের লাইক্রা/ইলাস্টেন সুতা পুড়িয়ে নষ্ট করে দেয় (কাপড়ে ফোসকা বা ঢিলা হয়ে যাওয়া)। ২. pH ৯-এর নিচে নামলে বিষাক্ত ক্লোরিন গ্যাস নির্গত হয় এবং কাপড় কাগজের মতো ছিঁড়ে যায়।',
  },
  {
    id: 'permanganate',
    code: 'CHEM-05',
    nameEn: 'Potassium Permanganate (PP Spray / Acid Oxidizer)',
    nameBn: 'পটাশিয়াম পারম্যাঙ্গানেট (পিপি স্প্রে / অক্সিডাইজার)',
    chemicalFormula: 'KMnO4 + Phosphoric Acid Activator',
    categoryEn: 'Dry Local Bleach & Acid Wash',
    categoryBn: 'লোকাল হোয়াইট ফেড ও অ্যাসিড ওয়াশ',
    dosageRange: '2 – 8 g/L (Spray) | 5–15 g/L (Stone Soak)',
    tempRange: '25°C Ambient',
    phRange: 'pH 3.0 – 4.5 (Acidic)',
    hazardLevel: 'High (Restricted)',
    swatchColor: '#ec4899',
    whatItDoesEn:
      'Produces bright localized white thigh/knee highlights when sprayed on scraped areas, or sharp marbled Acid/Ice contrasts when soaked into pumice stones.',
    whatItDoesBn:
      'প্যান্টের থাই ও হাঁটুতে স্প্রে করলে উজ্জ্বল সাদা ফেড তৈরি করে এবং পিউমিস স্টোনে ভিজিয়ে টাম্বল করলে অ্যাসিড ও আইস ওয়াশের মার্বেল ইফেক্ট দেয়।',
    howOperatedEn:
      'Sprayed as a pink mist onto inflatable mannequins inside negative-pressure water-curtain booths (turning brown `MnO2` on fabric), then reduced to bright white in a Sodium Metabisulfite wet bath.',
    howOperatedBn:
      'ওয়াটার-কার্টেন স্প্রে বুথে ডামির ওপর গোলাপি তরল হিসেবে স্প্রে করা হয় (যা কাপড়ে বাদামি রঙ ধারণ করে) এবং পরে মেটাবাইসালফাইট বাথে ধুয়ে ধবধবে সাদা করা হয়।',
    disadvantagesEn:
      '1. Restricted by ZDHC/EIM due to operator inhalation toxicity and heavy metal (`Mn`) effluent. 2. Unneutralized brown `MnO2` spots cause severe fabric yellowing in shipping cartons.',
    disadvantagesBn:
      '১. শ্রমিকদের শ্বাসকষ্ট ও পরিবেশ দূষণের কারণে EIM ও বায়ারদের কাছে এটি অত্যন্ত নিয়ন্ত্রিত (লেজার এর বিকল্প)। ২. বাদামি দাগ ভালোভাবে নিউট্রালাইজ না করলে কার্টনে প্যান্ট হলুদ হয়ে নষ্ট হয়।',
  },
  {
    id: 'metabisulfite',
    code: 'CHEM-06',
    nameEn: 'Sodium Metabisulfite (Antichlor & PP Neutralizer)',
    nameBn: 'সোডিয়াম মেটাবাইসালফাইট (অ্যান্টিক্লোর ও নিউট্রালাইজার)',
    chemicalFormula: 'Na2S2O5 (or Sodium Thiosulfate)',
    categoryEn: 'Step 04 • Chemical Neutralization',
    categoryBn: 'ধাপ ০৪ • ব্লিচ ও পিপি নিষ্ক্রিয়করণ',
    dosageRange: '2.0 – 5.0 g/L',
    tempRange: '40°C – 50°C',
    phRange: 'pH 4.5 – 5.5',
    hazardLevel: 'Medium',
    swatchColor: '#10b981',
    whatItDoesEn:
      'Acts as a strong reducing agent that neutralizes residual active chlorine after NaOCl bleaching and converts brown manganese dioxide (`MnO2`) from PP spray into soluble colorless salt.',
    whatItDoesBn:
      'ক্লোরিন ব্লিচ এবং পিপি স্প্রে করার পর কাপড়ে থেকে যাওয়া ক্ষতিকর অক্সিডাইজার ও বাদামি দাগকে রাসায়নিকভাবে নিষ্ক্রিয় করে কাপড়কে নিরাপদ ও পরিষ্কার করে।',
    howOperatedEn:
      'Run for 10–15 minutes at 45°C immediately after draining bleach or after PP spraying; operators test the garment seam with Potassium Iodide (`KI`) starch paper to verify zero residual chlorine.',
    howOperatedBn:
      'ব্লিচ বা পিপি স্প্রের পরপরই ৪৫°C তাপমাত্রায় ১০–১৫ মিনিট ওয়াশ করা হয় এবং পটাশিয়াম আয়োডাইড (KI) পেপার দিয়ে পরীক্ষা করে নিশ্চিত করা হয় যে কাপড়ে কোনো ক্লোরিন অবশিষ্ট নেই।',
    disadvantagesEn:
      '1. Releases pungent sulfur dioxide (`SO2`) gas odor if bath is too hot or acidic. 2. Under-dosing leaves residual chlorine that rots sewing threads and causes storage yellowing.',
    disadvantagesBn:
      '১. অতিরিক্ত গরম বা অ্যাসিডিক পানিতে ঝাঁঝালো সালফার ডাই-অক্সাইড (SO2) গ্যাসের গন্ধ ছড়ায়। ২. পরিমাণ কম হলে কাপড়ে ক্লোরিন থেকে গিয়ে সেলাই পচে যায় ও কাপড় হলুদ হয়ে যায়।',
  },
  {
    id: 'anti-backstain',
    code: 'CHEM-07',
    nameEn: 'Polymeric Anti-Backstaining Dispersant',
    nameBn: 'অ্যান্টি-ব্যাকস্টেইনিং ডিসপারসিং এজেন্ট',
    chemicalFormula: 'Modified Polyacrylic / Ethoxylated Polymer',
    categoryEn: 'Indigo Suspension & Pocket Protection',
    categoryBn: 'সাদা পকেট ও ওয়েফট সুরক্ষা',
    dosageRange: '0.8 – 1.5 g/L',
    tempRange: '25°C – 60°C',
    phRange: 'pH 4.5 – 8.0',
    hazardLevel: 'Low (Bio)',
    swatchColor: '#06b6d4',
    whatItDoesEn:
      'Encapsulates loose indigo dye particles floating in the wash bath inside hydrophilic micelles so they flush down the drain instead of redepositing onto white cotton pocket bags and weft yarns.',
    whatItDoesBn:
      'ওয়াশের সময় কাপড় থেকে খসে পড়া ভাসমান নীল ইনডিগো কণাগুলোকে ঘিরে রাখে, যাতে সেগুলো সাদা পকেট ব্যাগ, লেবেল বা ভেতরের সাদা সুতায় পুনরায় লেগে না যায়।',
    howOperatedEn:
      'Added directly into the Desizing, Enzyme Stone, and Rinse baths alongside cellulase enzymes to keep liberated dye suspended in the liquor.',
    howOperatedBn:
      'ডি-সাইজিং, এনজাইম স্টোন ও রিন্স বাথে সরাসরি এনজাইমের সাথে যোগ করা হয়, যাতে খসে পড়া রঙ পানির সাথেই বেরিয়ে যায়।',
    disadvantagesEn:
      '1. Excess dosage creates heavy foam that cushions stone impact and reduces abrasion contrast. 2. Non-biodegradable synthetic acrylates increase COD load in wastewater.',
    disadvantagesBn:
      '১. অতিরিক্ত পরিমাণে দিলে ড্রামে প্রচুর ফেনা তৈরি হয়ে পাথরের ঘর্ষণ কমিয়ে দেয়। ২. সিন্থেটিক পলিমার বর্জ্য পানির সিওডি (COD) মাত্রা বাড়িয়ে দেয়।',
  },
  {
    id: 'silicone-softener',
    code: 'CHEM-08',
    nameEn: 'Amino-Silicone Softener & DMDHEU 3D Resin',
    nameBn: 'অ্যামিনো-সিলিকন সফটনার ও ৩ডি রেজিন',
    chemicalFormula: 'Amino-Polydimethylsiloxane / Low-Formaldehyde Resin',
    categoryEn: 'Step 06 • Handfeel & 3D Memory Finish',
    categoryBn: 'ধাপ ০৬ • সফট হ্যান্ডফিল ও ৩ডি ফিনিশ',
    dosageRange: '2.0 – 4.0 g/L (Softener) | 80–120 g/L (Resin)',
    tempRange: '35°C – 40°C (Bath) | 155°C (Cure)',
    phRange: 'pH 5.0 – 5.5 (Slightly Acidic)',
    hazardLevel: 'Medium',
    swatchColor: '#8b5cf6',
    whatItDoesEn:
      'Silicone micro-emulsion lubricates rough stone-washed cotton fibers for a silky drape, while DMDHEU resin cross-links cellulose chains to freeze 3D whiskers in place.',
    whatItDoesBn:
      'সিলিকন ইমালশন স্টোন ওয়াশে খসখসে হয়ে যাওয়া কাপড়কে মাখনের মতো নরম করে এবং ৩ডি রেজিন কাপড়ের তন্তুগুলোকে ক্রস-লিংক করে স্থায়ী ত্রিমাত্রিক ভাঁজ ধরে রাখে।',
    howOperatedEn:
      'Softener is run in the final 10-minute cold/lukewarm bath (40°C, pH 5.5, no rinse afterward); 3D resin is sprayed locally or dipped after drying and cured at 155°C.',
    howOperatedBn:
      'সফটনার একদম শেষ বাথে ৪০°C তাপমাত্রা ও pH ৫.৫-এ ১০ মিনিট চালিয়ে সরাসরি হাইড্রো ও ড্রাই করা হয় (ধোয়া হয় না); আর রেজিন স্প্রে করে ১৫৫°C ওভেনে বেক করা হয়।',
    disadvantagesEn:
      '1. Cationic/amino silicones turn white weft yarns yellow if over-dried above 85°C (phenolic yellowing). 2. Silicone buildup repels water and prevents rework/re-dyeing if shade fails QA.',
    disadvantagesBn:
      '১. ৮৫°C-এর বেশি তাপে শুকালে অ্যামিনো-সিলিকন কাপড়ের সাদা অংশকে হলুদ (Yellowing) করে ফেলে। ২. সিলিকন দেওয়ার পর শেড মিল না হলে পুনরায় ডাইং বা ওয়াশ করা খুব কঠিন হয়ে পড়ে।',
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

// 4. Development Merchandiser vs. Bulk Merchandiser Actionable Playbook
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

