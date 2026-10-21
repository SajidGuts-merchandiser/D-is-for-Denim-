export type Language = 'en' | 'bn';

export interface Translations {
  appTitle: string;
  appSubtitle: string;
  badgeSelvedge: string;
  searchPlaceholder: string;
  tabs: {
    fabric: string;
    sewing: string;
    washProcess: string;
    washTypes: string;
    calculators: string;
    defects: string;
    quiz: string;
    glossary: string;
  };
  actions: {
    exportPdf: string;
    downloadPdf: string;
    preview: string;
    close: string;
    viewRecipe: string;
    retake: string;
    print: string;
    nextQuestion: string;
    viewCertificate: string;
  };
  workbench: {
    title: string;
    subtitle: string;
    fabricTab: string;
    gsmTab: string;
    washTab: string;
    exportButton: string;
    styleName: string;
    styleCode: string;
    buyerName: string;
    season: string;
    selectedRecipe: string;
    netConsumption: string;
    grossConsumption: string;
    consumptionPerDzn: string;
    fabricCostPerGarment: string;
    totalWashCost: string;
    waterPerGarment: string;
    eimScore: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    appTitle: 'DenimIQ',
    appSubtitle: 'Fabric Engineering • 5-Pocket Sewing • Wet & Dry Wash Recipes • Costing',
    badgeSelvedge: 'REDLINE SELVEDGE EDITION',
    searchPlaceholder: 'Search processes, washes, machines, defects...',
    tabs: {
      fabric: 'Fabric Process',
      sewing: 'Sewing & Specs',
      washProcess: 'Wash Chemistry',
      washTypes: 'Types of Wash',
      calculators: 'Costing & Yield',
      defects: 'Troubleshooting',
      quiz: 'Certification',
      glossary: 'Denim Lexicon',
    },
    actions: {
      exportPdf: 'Export Formatted PDF Spec Sheet',
      downloadPdf: 'Download Official PDF Tech Pack',
      preview: 'Preview Tech Pack Spec Sheet',
      close: 'Close',
      viewRecipe: 'View Industrial Laundry Recipe',
      retake: 'Retake Exam',
      print: 'Print Certificate',
      nextQuestion: 'Next Question',
      viewCertificate: 'View Certificate',
    },
    workbench: {
      title: 'Fabric Consumption, Weight & Wash Cost Calculators',
      subtitle: 'Essential mathematical tools used daily by denim merchandisers to quote FOB prices, calculate shrinkage buffers, convert fabric weights, and benchmark EIM sustainability compliance.',
      fabricTab: 'Fabric Yield & Costing',
      gsmTab: 'GSM ↔ Oz Converter',
      washTab: 'Wash Cost & EIM Simulator',
      exportButton: 'Export Formatted PDF Tech Sheet',
      styleName: 'Style Name / Article',
      styleCode: 'Style Code / Tech Pack ID',
      buyerName: 'Buyer / Retail Brand',
      season: 'Season / Delivery',
      selectedRecipe: 'Bundled Wash Recipe',
      netConsumption: 'Net Consumption / Pc',
      grossConsumption: 'Gross Consumption / Pc',
      consumptionPerDzn: 'Consumption / Dozen (Dzn)',
      fabricCostPerGarment: 'Fabric Cost / Garment',
      totalWashCost: 'Total Wash Cost / Pc',
      waterPerGarment: 'Water Usage / Garment',
      eimScore: 'Jeanologia EIM Score',
    },
  },
  bn: {
    appTitle: 'ডেনিমআইকিউ (DenimIQ)',
    appSubtitle: 'ফ্যাব্রিক ইঞ্জিনিয়ারিং • ৫-পকেট সুয়িং • ওয়েট ও ড্রাই ওয়াশ রেসিপি • মার্চেন্ডাইজিং কস্টিং',
    badgeSelvedge: 'রেডলাইন সেলভেজ স্পেশাল এডিশন',
    searchPlaceholder: 'ফ্যাব্রিক, ওয়াশ রেসিপি, মেশিন বা ডিফেক্ট সার্চ করুন...',
    tabs: {
      fabric: 'ফ্যাব্রিক প্রসেস',
      sewing: 'সুয়িং ও অ্যানাটমি',
      washProcess: 'ওয়াশ কেমিস্ট্রি',
      washTypes: 'ওয়াশের প্রকারভেদ',
      calculators: 'কস্টিং ও ইল্ড টুলস',
      defects: 'ডিফেক্ট সমাধান',
      quiz: 'প্রফেশনাল পরীক্ষা',
      glossary: 'ডেনিম পরিভাষা',
    },
    actions: {
      exportPdf: 'ফরম্যাটেড পিডিএফ টেক প্যাক এক্সপোর্ট',
      downloadPdf: 'অফিসিয়াল পিডিএফ টেক প্যাক ডাউনলোড',
      preview: 'টেক প্যাক প্রিভিউ',
      close: 'বন্ধ করুন',
      viewRecipe: 'ইন্ডাস্ট্রিয়াল ওয়াশ রেসিপি দেখুন',
      retake: 'পুনরায় পরীক্ষা দিন',
      print: 'সার্টিফিকেট প্রিন্ট করুন',
      nextQuestion: 'পরবর্তী প্রশ্ন',
      viewCertificate: 'সার্টিফিকেট দেখুন',
    },
    workbench: {
      title: 'ফ্যাব্রিক কনজাম্পশন, ওজন ও ওয়াশ কস্টিং ক্যালকুলেটর',
      subtitle: 'এফওবি (FOB) প্রাইস নির্ধারণ, শ্রিংকেজ বাফার হিসাব, ওজোন/ওয়াশ কেমিস্ট্রি ও Jeanologia EIM সাসটেইনেবিলিটি মূল্যায়নের নিখুঁত মার্চেন্ডাইজিং টুলস।',
      fabricTab: 'ফ্যাব্রিক ইল্ড ও কস্টিং',
      gsmTab: 'জিএসএম (GSM) ↔ আউন্স (Oz) কনভার্টার',
      washTab: 'ওয়াশ কস্ট ও EIM সিমুলেটর',
      exportButton: 'ফরম্যাটেড পিডিএফ টেক শীট এক্সপোর্ট',
      styleName: 'স্টাইলের নাম / আর্টিকেল',
      styleCode: 'স্টাইল কোড / টেক প্যাক আইডি',
      buyerName: 'বায়ার / ব্র্যান্ড',
      season: 'সিজন / ডেলিভারি',
      selectedRecipe: 'সংযুক্ত ওয়াশ রেসিপি',
      netConsumption: 'নেট কনজাম্পশন / পিস',
      grossConsumption: 'গ্রস কনজাম্পশন (শ্রিংকেজ সহ)',
      consumptionPerDzn: 'কনজাম্পশন / ডজন (ইয়ার্ড)',
      fabricCostPerGarment: 'ফ্যাব্রিক খরচ / পিস',
      totalWashCost: 'মোট ওয়াশ খরচ / পিস',
      waterPerGarment: 'পানি ব্যবহার / পিস',
      eimScore: 'Jeanologia EIM সাসটেইনেবিলিটি স্কোর',
    },
  },
};
