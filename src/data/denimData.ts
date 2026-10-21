/**
 * Technical database and educational master data for Denim Merchandisers
 */

export interface WashRecipeStep {
  stepName: string;
  chemical: string;
  dosage: string;
  temperature: string;
  durationMinutes: number;
  phLevel: string;
  notes: string;
}

export interface WashType {
  id: string;
  name: string;
  badge: string;
  category: 'Classic' | 'Vintage' | 'High-Fashion' | 'Eco-Sustainable';
  targetShade: string;
  eimLevel: 'Low' | 'Medium' | 'High';
  estimatedCostPerPc: number;
  description: string;
  keyFeatures: string[];
  fabricSuitability: string;
  recipeSteps: WashRecipeStep[];
  dryProcesses: string[];
  merchandiserTip: string;
}

export interface DefectItem {
  id: string;
  title: string;
  category: 'Fabric' | 'Sewing' | 'Washing' | 'Finishing/Storage';
  severity: 'Critical' | 'Major' | 'Minor';
  visualSymptom: string;
  rootCause: string;
  preventionInProduction: string;
  merchandiserAction: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  merchandiserInsight: string;
}

export interface GlossaryTerm {
  term: string;
  category: 'Spinning & Dyeing' | 'Weaving & Fabric' | 'Sewing & Machine' | 'Wash & Chemistry' | 'Sustainability';
  definition: string;
  relevance: string;
}

export const FABRIC_PROCESS_STAGES = [
  {
    step: '01',
    title: 'Cotton Selection & Blending',
    subtitle: 'Fiber Staple & Micronaire Engineering',
    color: 'from-amber-500/20 to-amber-700/20 border-amber-500/40',
    summary: 'The foundation of denim strength, tear tolerance, and vintage fading characteristics.',
    details: [
      {
        heading: 'Staple Length & Micronaire',
        text: 'Denim primarily uses Medium to Long Staple Upland Cotton (26-30mm) or Extra Long Staple (ELS like Supima / Egyptian 34-38mm) for premium denim. Micronaire must be controlled between 3.8 - 4.5 to prevent immature cotton nep defects during indigo dyeing.',
      },
      {
        heading: 'Elastane & Modern Dual-Core Fibers',
        text: 'For stretch denim (comfort stretch 15-25%, super stretch 35-60%), core-spun yarns encase Lycra/Spandex with cotton. Modern performance denim uses Dual-Core yarns (e.g. Lycra + DuPont T400/Elasterell-p) to provide high stretch with >90% elastic recovery, stopping baggy knees and waist sagging.',
      },
      {
        heading: 'Sustainable Fiber Blends',
        text: 'Merchandisers frequently specify BCI (Better Cotton), GOTS Organic Cotton, Post-Consumer Waste (PCW) recycled denim fiber (10-20% max to preserve yarn tensile strength), and Tencel/Modal for draped women\'s denim.',
      },
    ],
    merchandiserKeyTakeaway: 'Always verify cotton micronaire on mill test reports; immature fibers refuse indigo uptake, causing white fleck speckles on washed dark shades.',
  },
  {
    step: '02',
    title: 'Yarn Spinning & Slub Architecture',
    subtitle: 'Ring Spun vs Open-End & Slub Character',
    color: 'from-blue-500/20 to-blue-700/20 border-blue-500/40',
    summary: 'Dictates the texture, handfeel, vertical streaking, and authentic vintage grain.',
    details: [
      {
        heading: 'Ring Spun vs Open-End (OE / Rotor)',
        text: 'Ring Spun yarn twists fibers helically around the axis, yielding high tensile strength, superior ring-dye indigo contrast, and supple drape. Open-End (OE) spins fibers centrifugally, creating a drier, crisper hand with lower tensile strength—popular for retro 80s / 90s crisp authentic rigid jeans.',
      },
      {
        heading: 'Ring-on-Ring vs Ring-on-OE',
        text: 'Ring x Ring (Warp x Weft) is the premium standard with smooth drape and high durability. Ring x OE pairs a ring warp with an open-end weft for cost optimization while preserving the surface ring aesthetic.',
      },
      {
        heading: 'Slub Yarn Engineering',
        text: 'Modern denim character relies on computerized slub spinners creating irregular yarn thickness. Parameters include Slub Length (distance of thick zone), Slub Pause (distance between slubs), and Slub Multiplier (1.5x - 3.0x standard count). Produces Crosshatch, Raindrop, or Bamboo grain aesthetics after enzyme washing.',
      },
    ],
    merchandiserKeyTakeaway: 'Ring spun yarns cost 15-25% more than OE yarns but offer 30% higher tear strength and withstand heavy stone and enzyme wash cycles without blowing out.',
  },
  {
    step: '03',
    title: 'Indigo Dyeing Chemistry & Methods',
    subtitle: 'Rope Dyeing vs Slasher Dyeing & Cast Control',
    color: 'from-indigo-500/20 to-indigo-700/20 border-indigo-500/40',
    summary: 'The holy grail of denim: achieving the ring-dye effect where indigo coats only the yarn perimeter.',
    details: [
      {
        heading: 'The Ring Dye Phenomenon',
        text: 'Unlike reactive or direct dyes that fully saturate yarn cores, Indigo is an insoluble vat pigment. It is chemically reduced to water-soluble "Leuco-Indigo" with Sodium Hydrosulfite (Na2S2O4) and Caustic Soda (NaOH). When yarn dips into the bath and rises into air ("skying"), atmospheric oxygen oxidizes the dye back to insoluble blue pigment onto the outer yarn shell, leaving the inner cotton core pure white. This white core enables high-contrast whiskers and stone washes.',
      },
      {
        heading: 'Rope Dyeing vs Slasher / Sheet Dyeing',
        text: 'Rope Dyeing gathers 350-450 yarn ends into long continuous ropes, passing through 12-24 dip boxes and skying towers. It achieves supreme ring-dye depth, lowest shade variance (side-to-center shading < 1%), and authentic vintage fade. Slasher Dyeing spreads yarns in open sheets; it has lower dye penetration and faster setup for short yardage runs but higher risk of side-to-side shade variance.',
      },
      {
        heading: 'Bottoming, Topping & Cast Chemistry',
        text: 'Pure Indigo gives a royal navy blue. Sulfur Bottoming applies sulfur dye (black, brown, green) before indigo, yielding earthy dirty vintage fades. Sulfur Topping applies sulfur dye over indigo, shifting the cast to olive-green or charcoal-tinted. Cast is specified as Pure Blue, Red Cast (purplish undertone), Green Cast, or Gray Cast.',
      },
    ],
    merchandiserKeyTakeaway: 'Always require Rope-Dyed fabric for high-contrast whiskers and abrasion washes; slasher-dyed fabrics will produce flatter, lower-contrast results.',
  },
  {
    step: '04',
    title: 'Weaving & Twill Structures',
    subtitle: '3/1 RHT, LHT, Broken Twill & Selvedge Shuttle Looms',
    color: 'from-cyan-500/20 to-cyan-700/20 border-cyan-500/40',
    summary: 'Weave direction controls diagonal texture, handfeel softness, and leg twist torque.',
    details: [
      {
        heading: '3/1 Right Hand Twill (RHT - "Z" Twill)',
        text: 'The universal denim standard popularized by Levi Strauss. The diagonal twill lines slant upward to the right (like the central stroke of the letter Z). Tight, crisp structure that creates distinct diagonal grain.',
      },
      {
        heading: '3/1 Left Hand Twill (LHT - "S" Twill)',
        text: 'Popularized by Lee Jeans. Twill diagonals run upward to the left (like the central stroke of S). Because Z-spun yarn unravels slightly during wear and wash in an S-weave, LHT yields a significantly softer handfeel and fuzzy surface abrasion.',
      },
      {
        heading: 'Broken Twill (Anti-Leg-Twist)',
        text: 'Engineered by Wrangler in 1964 to solve the cowboy problem of denim twisting around rodeo boots. The weave alternates 2 threads RHT and 2 threads LHT in a zig-zag chevron pattern. Zero directional torque completely eliminates leg twist.',
      },
      {
        heading: 'Selvedge (Shuttle Loom) vs Modern Rapier/Air-Jet',
        text: 'Selvedge denim is woven on vintage narrow shuttle looms (Toyoda, Draper) at 29-32 inches width. A continuous weft bobbin loops back and forth, creating a clean, unfrayed "self-edge" accented with colored ticker threads (traditionally red for Cone Mills White Oak). Modern air-jet looms weave 58-62 inch wide fabric with trimmed fringe selvedges at 4x the speed.',
      },
    ],
    merchandiserKeyTakeaway: 'Selvedge patterns require straight outseams (no curve) and higher fabric consumption (~2.4 - 2.8 yds/pc vs 1.4 - 1.6 yds/pc on 60" wide fabric), drastically increasing garment FOB.',
  },
  {
    step: '05',
    title: 'Finishing & Sanforization',
    subtitle: 'Singeing, Skewing & Compressive Shrinkage Control',
    color: 'from-emerald-500/20 to-emerald-700/20 border-emerald-500/40',
    summary: 'Controlling fabric dimensional stability and preventing post-wash garment distortion.',
    details: [
      {
        heading: 'Sanforization Process',
        text: 'Raw loomstate denim shrinks 10-14% in warp (length) and 3-5% in weft (width). Sanforization uses a heated cylinder, steam shoe, and thick rubber belt to compressively shrink warp yarns mechanically, reducing residual shrinkage to under 3% x 3% for reliable bulk cutting.',
      },
      {
        heading: 'Skewing / Torque Preset',
        text: 'Right-hand twill naturally twists toward the right when washed. In finishing, differential pin tenters intentionally skew the fabric 3-5% in the opposite direction before sanforization, canceling out twist so jean legs stay straight after domestic wash.',
      },
      {
        heading: 'Desizing & Mercerization Options',
        text: 'Denim can be brushed/singed to remove hairy protruding fibers, mercerized with caustic soda for higher luster and dye affinity, or coated with polyurethane/resin for a wax-coated wet look.',
      },
    ],
    merchandiserKeyTakeaway: 'Always test every fabric roll lot for residual shrinkage before issuing cut orders; elastic blends require minimum 24-hour fabric relaxation on cutting tables.',
  },
];

export const SEWING_COMPONENTS = [
  {
    id: 'waistband',
    name: 'Waistband Construction',
    machine: '4-Needle Chainstitch Waistband Machine (Kansai Special / Union Special)',
    stitchType: 'Stitch Class 401 (Two-thread Chainstitch) with folder',
    threadSpec: 'Tex 80 - 105 Corespun Poly/Poly (Face) + Tex 40 (Looper)',
    spi: '7 - 8 SPI',
    description: 'Applied continuously in one pass using a puller feed and scroll folder. Chainstitch on the bottom waistband provides lateral elasticity to prevent thread snapping when the wearer sits.',
    merchandiserCheckpoint: 'Inspect for waistband roping and check skip stitches on thick seam transitions over the back yoke and fly.',
  },
  {
    id: 'back-yoke',
    name: 'Back Yoke (V-Shape Seat)',
    machine: 'Twin-Needle Feed-Off-The-Arm Lap Seam Machine',
    stitchType: 'Stitch Class 401 Chainstitch (Twin Needle Flat Fell Lap Seam)',
    threadSpec: 'Tex 80 - 105 Contrast Gold/Tobacco thread',
    spi: '8 - 9 SPI',
    description: 'The yoke replaces darting to sculpt the seat of the jean to human anatomy. The upper panel overlaps the lower panel with a flat fell double needle lap seam for extreme tear resistance.',
    merchandiserCheckpoint: 'Yoke junction must match perfectly at the center back seam within ±1.5mm tolerance.',
  },
  {
    id: 'inseam',
    name: 'Inseam Joining',
    machine: 'Feed-Off-The-Arm Cylinder Bed (2-Needle or 3-Needle)',
    stitchType: 'Flat Felled Lap Seam Class 401',
    threadSpec: 'Tex 80 Topstitch + Tex 60 looper',
    spi: '8 - 9 SPI',
    description: 'Formed by interlocking both raw fabric edges inside a folder so no raw edges are exposed. Withstands extreme thigh abrasion during walking and motorcycle riding.',
    merchandiserCheckpoint: 'Ensure needle cooling air jets are working on heavy 14oz+ denim to prevent needle friction burns and skipped stitches.',
  },
  {
    id: 'outseam',
    name: 'Outseam Assembly',
    machine: '5-Thread Safety Stitch Overlock or Lockstitch Split Bust',
    stitchType: 'Stitch Class 516 (Overedge + Chainstitch) OR Class 301 Plain Lockstitch (Selvedge)',
    threadSpec: 'Tex 40 Spun Poly for overlock; Tex 80 for topstitching',
    spi: '10 - 12 SPI',
    description: 'Standard 5-pocket jeans use 5-thread safety overlock. Selvedge jeans use open-bust seam with selvedge edges pressed flat and topstitched down from waist to hip.',
    merchandiserCheckpoint: 'For selvedge denim, ensure the selvedge ticker line is strictly aligned along the entire outseam without waviness.',
  },
  {
    id: 'back-pockets',
    name: 'Back Pockets & Arcuates',
    machine: 'Automatic Programmable Pattern Sewer / Twin Needle Lockstitch',
    stitchType: 'Class 301 Lockstitch with corner bar-tacks (Class 304)',
    threadSpec: 'Tex 80 / 105 Topstitch thread',
    spi: '7 - 8 SPI',
    description: 'Pockets are hemmed with a 1/2" double fold, decorative embroidery arcuate stitched, then automatically folded and topstitched onto back panels with reinforcing bar tacks at top stress corners.',
    merchandiserCheckpoint: 'Pocket height and horizontal symmetry between left and right pocket must be within 2mm. Ensure bar-tacks bite into pocket facing reinforcement.',
  },
  {
    id: 'hem',
    name: 'Bottom Leg Hem (Roping Effect)',
    machine: 'Union Special 43200G Cylinder Bed Chainstitch Hemmer',
    stitchType: 'Stitch Class 401 Chainstitch',
    threadSpec: 'Tex 80 - 105 Corespun Poly/Cotton',
    spi: '6 - 7 SPI',
    description: 'The holy grail of denim authenticity! The vintage Union Special 43200G feed dog creates unequal tension between upper and lower layers during folding. When washed, differential shrinkage causes diagonal helical rippling termed "The Roping Effect".',
    merchandiserCheckpoint: 'Never substitute a lockstitch machine on the hem of heritage denim; lockstitch produces flat, lifeless hems without roping highlights.',
  },
  {
    id: 'hardware',
    name: 'Rivets & Shank Buttons',
    machine: 'Pneumatic Auto-Feed Rivet & Tack Press',
    stitchType: 'Mechanical Tack Clinch (Pure Brass / Copper / Zinc)',
    threadSpec: 'Reinforced underneath with washer burr / backing',
    spi: 'N/A Hardware',
    description: 'Rivets reinforce stress points on front scoop pocket corners and coin pocket. Rivet pull strength must exceed 300N (ASTM D4846) to pass child safety and brand durability standards.',
    merchandiserCheckpoint: 'Check for sharp burr edges, crooked shank insertion, and ensure metal hardware is 100% nickel-free to comply with EU REACH regulations.',
  },
];

export const WASH_TYPES: WashType[] = [
  {
    id: 'raw-rigid',
    name: 'Raw / Rigid Denim',
    badge: 'Heritage Classic',
    category: 'Classic',
    targetShade: 'Deep Dark Indigo (Level 1)',
    eimLevel: 'Low',
    estimatedCostPerPc: 0.20,
    description: 'Unwashed loomstate or sanforized denim with factory sizing starch intact. Zero water washdown; worn raw by denim purists to develop personalized natural fade lines over 6-12 months.',
    keyFeatures: ['Stiff, structured handfeel', '100% color depth preserved', 'Natural break-in crease potential', 'Lowest environmental footprint'],
    fabricSuitability: '12 - 16 oz 100% Cotton Selvedge or Ring x Ring denim',
    recipeSteps: [
      {
        stepName: 'Quality Inspection',
        chemical: 'None',
        dosage: '0 g/L',
        temperature: 'Room Temp',
        durationMinutes: 5,
        phLevel: 'Neutral',
        notes: 'Dry vacuuming and thread trimming only; no water bath immersion.',
      },
    ],
    dryProcesses: ['Optional raw 3D starch pressing'],
    merchandiserTip: 'Warn retail buyers about crocking (dry rubbing color transfer onto white sneakers and car upholstery). Always include garment hangtags warning customers of indigo bleed.',
  },
  {
    id: 'rinse-wash',
    name: 'One Wash / Dark Rinse',
    badge: 'Commercial Best-Seller',
    category: 'Classic',
    targetShade: 'Dark Indigo with Clean Surface (Level 2)',
    eimLevel: 'Low',
    estimatedCostPerPc: 0.65,
    description: 'Mildest wet wash process designed to strip sizing starch, eliminate residual shrinkage, and impart a soft, supple handfeel without fading the dark indigo hue.',
    keyFeatures: ['Preserves deep indigo navy shade', 'Soft handfeel via silicone micro-emulsion', 'Zero post-purchase shrinkage for consumer', 'Clean pockets with no stone residue'],
    fabricSuitability: '9 - 14 oz Rigid or Stretch Denim (Cotton/Elastane)',
    recipeSteps: [
      {
        stepName: 'Desizing Bath',
        chemical: 'Alpha-Amylase Enzyme + Wetting Agent',
        dosage: '1.5 - 2.0 g/L',
        temperature: '55°C - 60°C',
        durationMinutes: 15,
        phLevel: '6.0 - 7.0',
        notes: 'Breaks down polyvinyl alcohol (PVA) and corn starch sizing.',
      },
      {
        stepName: 'Warm Rinse',
        chemical: 'Clean Water',
        dosage: 'Liquor Ratio 1:8',
        temperature: '40°C',
        durationMinutes: 5,
        phLevel: '7.0',
        notes: 'Washes away hydrolysed sizing molecules.',
      },
      {
        stepName: 'Softening Bath',
        chemical: 'Cationic or Silicone Micro-Emulsion Softener',
        dosage: '2.0 - 3.0 g/L',
        temperature: '40°C',
        durationMinutes: 10,
        phLevel: '5.5',
        notes: 'Gives silky, smooth handle and improves sewability.',
      },
      {
        stepName: 'Hydro-Extraction & Tumble Dry',
        chemical: 'None',
        dosage: 'Mechanical Centrifuge',
        temperature: '75°C',
        durationMinutes: 25,
        phLevel: 'N/A',
        notes: 'Spin at 800 RPM to remove 50% moisture, then tumble dry.',
      },
    ],
    dryProcesses: ['None (pure clean finish)'],
    merchandiserTip: 'Rinse wash has the lowest wash reject rate (~0.5%) and predictable production lead times of just 2-3 days.',
  },
  {
    id: 'mid-stone-enzyme',
    name: 'Mid-Stone Bio-Enzyme Wash',
    badge: 'Authentic Vintage',
    category: 'Vintage',
    targetShade: 'Mid-Blue with Salt & Pepper Grain (Level 4)',
    eimLevel: 'Medium',
    estimatedCostPerPc: 1.45,
    description: 'The industry workhorse wash. Combines pumice stones with cellulase enzymes to abrade the outer indigo ring-dyed shell, exposing the white core on seams, pockets, and fly.',
    keyFeatures: ['Pronounced high-low contrast along seams', 'Soft worn-in drape', 'Salt & pepper textured twill grain', 'Classic American denim aesthetic'],
    fabricSuitability: '10.5 - 13.5 oz 100% Cotton or Low-Stretch (1-2% Lycra)',
    recipeSteps: [
      {
        stepName: 'Desizing',
        chemical: 'Thermostable Amylase',
        dosage: '2.0 g/L',
        temperature: '60°C',
        durationMinutes: 15,
        phLevel: '6.5',
        notes: 'Crucial to open fiber surface for uniform enzyme attack.',
      },
      {
        stepName: 'Bio-Stone Abrasion',
        chemical: 'Neutral Cellulase Enzyme + Pumice Stones + Anti-Backstaining Agent',
        dosage: 'Enzyme 1.5 g/L, Anti-backstaining 1.0 g/L, Stone ratio 1:1.5',
        temperature: '50°C - 55°C',
        durationMinutes: 35,
        phLevel: '6.5 - 7.0',
        notes: 'Neutral cellulase digests cellulose micro-fibrils while stones create seam highlights without aggressive fiber damage.',
      },
      {
        stepName: 'Enzyme Inactivation & Clean Rinse',
        chemical: 'Soda Ash / Temperature Spike',
        dosage: 'Raise to 80°C or pH 9.0',
        temperature: '75°C',
        durationMinutes: 10,
        phLevel: '9.0',
        notes: 'Denatures cellulase enzymes to halt continued fabric degradation.',
      },
      {
        stepName: 'Softening & Tumble Drying',
        chemical: 'Polyethylene + Silicone Softener',
        dosage: '2.5 g/L',
        temperature: '45°C',
        durationMinutes: 10,
        phLevel: '5.5',
        notes: 'Imparts drape and eliminates pumice stone dust.',
      },
    ],
    dryProcesses: ['Manual hand-scraping on thigh', '3D front whiskers', 'Pocket hem grinding'],
    merchandiserTip: 'Always specify Anti-Backstaining agents (polyacrylic dispersion). Without it, loosened indigo redeposits onto white pocket bags, causing retailer reject.',
  },
  {
    id: 'bleach-ice-wash',
    name: 'Bleach / Light Sky Wash',
    badge: 'Summer Highlight',
    category: 'Classic',
    targetShade: 'Light Powder Sky Blue (Level 7)',
    eimLevel: 'High',
    estimatedCostPerPc: 1.95,
    description: 'Aggressive washdown utilizing hypochlorite or hydrogen peroxide bleaching agents following enzyme wash to strip 60-75% of indigo pigment.',
    keyFeatures: ['Bright, vibrant chalky light blue', 'Bright white seam highlights', 'Very soft drape', 'Vintage 90s aesthetic'],
    fabricSuitability: 'Heavy to medium denim (12-14 oz) with high initial tear strength',
    recipeSteps: [
      {
        stepName: 'Enzyme Washdown',
        chemical: 'Cellulase Enzyme',
        dosage: '2.0 g/L',
        temperature: '55°C',
        durationMinutes: 30,
        phLevel: '6.5',
        notes: 'Initial washdown before chemical bleaching.',
      },
      {
        stepName: 'Chlorine Bleaching',
        chemical: 'Sodium Hypochlorite (NaOCl, 12% available chlorine)',
        dosage: '5 - 8 ml/L',
        temperature: '45°C - 50°C',
        durationMinutes: 20,
        phLevel: '10.5 - 11.5',
        notes: 'Rapid oxidative degradation of indigo pigment molecule.',
      },
      {
        stepName: 'Neutralization (Antichlor)',
        chemical: 'Sodium Metabisulfite (Na2S2O5)',
        dosage: '3.0 g/L',
        temperature: '45°C',
        durationMinutes: 10,
        phLevel: '5.0',
        notes: 'CRITICAL: Destroys residual chlorine to prevent fabric tenderization and ozone yellowing.',
      },
      {
        stepName: 'Optical Brightener & Softener',
        chemical: 'Stilbene Fluorescent Brightener + Silicone',
        dosage: '0.5 g/L Brightener, 2.0 g/L Softener',
        temperature: '40°C',
        durationMinutes: 10,
        phLevel: '5.5',
        notes: 'Enhances bright white contrast in pocketings and abraded areas.',
      },
    ],
    dryProcesses: ['Light sanding', 'Ticking', 'Grinding on hem & pockets'],
    merchandiserTip: 'Bleach reduces fabric tensile and tear strength by 20-30%. Always test base fabric Elmendorf tear strength (>1800g minimum) before approving light bleach washes.',
  },
  {
    id: 'acid-snow-wash',
    name: 'Acid / Snow / Marble Wash',
    badge: '80s Retro Icon',
    category: 'High-Fashion',
    targetShade: 'High Contrast Marble White & Indigo (Level 8)',
    eimLevel: 'High',
    estimatedCostPerPc: 2.30,
    description: 'Dry pumice stones pre-soaked in potassium permanganate or sodium hypochlorite tumble with dry garments. Chemical bleaches only the peak surfaces hit by stones, creating random marble veins.',
    keyFeatures: ['Radical high-contrast marbling effect', 'Randomized organic pattern across seams', 'Distinctive tactile 1980s retro rock look'],
    fabricSuitability: '100% Cotton 12-14 oz Rigid denim (not recommended for high-stretch)',
    recipeSteps: [
      {
        stepName: 'Stone Pre-Soaking',
        chemical: 'Pumice Stones soaked in Potassium Permanganate (5%) or Chlorine',
        dosage: 'Stones soaked and drained dry for 2 hours',
        temperature: 'Ambient',
        durationMinutes: 120,
        phLevel: 'N/A',
        notes: 'Stones must be damp, not dripping, so bleach only transfers upon contact.',
      },
      {
        stepName: 'Dry Tumble Reaction',
        chemical: 'Mechanical contact only',
        dosage: 'No water in drum',
        temperature: 'Ambient (dry)',
        durationMinutes: 15 - 25,
        phLevel: 'N/A',
        notes: 'Tumbling drum rotates at 24 RPM; stones strike garments randomly.',
      },
      {
        stepName: 'Neutralization & Washing Bath',
        chemical: 'Sodium Metabisulfite + Oxalic Acid rinse',
        dosage: '4.0 g/L Metabisulfite',
        temperature: '50°C',
        durationMinutes: 15,
        phLevel: '4.5',
        notes: 'Clears brown manganese dioxide residue to pure white.',
      },
    ],
    dryProcesses: ['No manual scraping needed; texture generated by stones'],
    merchandiserTip: 'Acid wash stones produce massive pumice sludge that clogs effluent treatment plants (ETP). Check local environmental compliance permits.',
  },
  {
    id: 'vintage-dirty-wash',
    name: 'Vintage Dirty / Tinted Wash',
    badge: 'Heritage Workwear',
    category: 'Vintage',
    targetShade: 'Aged Khaki-Olive Indigo Tint (Level 5)',
    eimLevel: 'Medium',
    estimatedCostPerPc: 1.85,
    description: 'Simulates decades of authentic workwear wear. Garments undergo stone wash, 3D whisker distressing, and a final overdye tint bath with direct, reactive, or sulfur khaki dyes.',
    keyFeatures: ['Muddy, antique yellowish/khaki undertone', 'Subtle 3D honeycombs and thigh wear', 'Antiqued brass hardware harmony'],
    fabricSuitability: 'Ring x Ring 12-14 oz Denim with sulfur bottom or pure indigo',
    recipeSteps: [
      {
        stepName: 'Stone Enzyme Wash',
        chemical: 'Neutral Cellulase + Stones',
        dosage: '1.5 g/L',
        temperature: '55°C',
        durationMinutes: 35,
        phLevel: '6.5',
        notes: 'Creates mid-blue worn base.',
      },
      {
        stepName: 'Overdye Tint Bath',
        chemical: 'Direct Yellow / Brown / Olive Dyes + Salt',
        dosage: '0.2 - 0.5% on weight of garment',
        temperature: '60°C',
        durationMinutes: 20,
        phLevel: '8.0 - 9.0',
        notes: 'Tints white cotton cores and abraded highlights to an aged dirty patina.',
      },
      {
        stepName: 'Dye Fixing & Softening',
        chemical: 'Cationic Dye Fixative + Silicone',
        dosage: '1.5 g/L Fixative, 2.0 g/L Softener',
        temperature: '45°C',
        durationMinutes: 10,
        phLevel: '5.5',
        notes: 'Locks tinting dye to pass home laundering wash-fastness.',
      },
    ],
    dryProcesses: ['3D resin whiskers', 'Knee honeycombs', 'Hand sanding with 280 grit', 'Pumice edge grinding'],
    merchandiserTip: 'Always check washing fastness (ISO 105-C06); poorly fixed tints bleed into pocket linings in customer washing machines.',
  },
  {
    id: 'eco-laser-ozone',
    name: 'Smart Eco: Laser + Ozone + e-Flow',
    badge: 'Future Sustainable',
    category: 'Eco-Sustainable',
    targetShade: 'Customizable (Level 3 - 6)',
    eimLevel: 'Low',
    estimatedCostPerPc: 1.70,
    description: 'The pinnacle of zero-discharge denim engineering. Replaces manual scraping and PP spray with CO2 lasers, pumice stones with enzyme nebulization (e-Flow), and chlorine with gaseous ozone bleaching.',
    keyFeatures: ['Saves 70-85% water vs conventional wash', 'Zero pumice stone sludge & zero toxic PP spray', 'EIM Green Score (< 25 points)', '100% digital repeatability from sample to bulk'],
    fabricSuitability: 'All denim types (Rigid, Stretch, Hyperstretch, Tencel blends)',
    recipeSteps: [
      {
        stepName: 'Digital Laser Engraving',
        chemical: 'No chemicals (CO2 Laser Beam)',
        dosage: 'Laser Power 45-85W (Jeanologia / Tonello)',
        temperature: 'Ambient',
        durationMinutes: 1.5,
        phLevel: 'N/A',
        notes: 'Digital template vaporizes indigo instantly creating whiskers, chevrons, and wear patterns in 60-90 seconds.',
      },
      {
        stepName: 'Ozone Gas Pre-Oxidation',
        chemical: 'Gaseous Ozone (O3)',
        dosage: 'Dry Ozone Chamber (Tonello Radel / Jeanologia G2)',
        temperature: 'Ambient',
        durationMinutes: 15,
        phLevel: 'N/A',
        notes: 'Ozone breaks double bonds in indigo, lightening shades dry without water.',
      },
      {
        stepName: 'Micro-Bubble Nebulization (e-Flow)',
        chemical: 'Eco-Enzyme + Softener carried by nanobubbles',
        dosage: 'Liquor ratio 1:1 (extreme low water)',
        temperature: '45°C',
        durationMinutes: 20,
        phLevel: '6.0',
        notes: 'Transports active chemistry via micronized air bubbles, slashing chemical usage by 50%.',
      },
      {
        stepName: 'Ozone Neutralization Rinse',
        chemical: 'Ozone Destructor / Air Rinse',
        dosage: 'O3 converted back to pure Oxygen (O2)',
        temperature: 'Ambient',
        durationMinutes: 10,
        phLevel: '7.0',
        notes: 'Zero toxic chemical effluent discharged to nature.',
      },
    ],
    dryProcesses: ['Digital CO2 Laser engraving replaces all manual scraping, whiskers, and grinding'],
    merchandiserTip: 'Major global brands (Levi\'s, H&M, PVH) require EIM Green score certification (<33) for all preferred vendor suppliers.',
  },
  {
    id: 'black-to-grey',
    name: 'Sulfur Black-to-Grey Fade',
    badge: 'Modern Urban',
    category: 'High-Fashion',
    targetShade: 'Charcoal Wash / Pepper Grey (Level 5)',
    eimLevel: 'Medium',
    estimatedCostPerPc: 1.60,
    description: 'Sulfur black dyed warp yarns washed down to reveal smoky graphite and washed pepper tones. Requires different enzyme and bleaching dynamics than indigo.',
    keyFeatures: ['Deep charcoal to light concrete grey gradients', 'Sulfur dye breakdown resistance', 'Sharp monochrome edge contrast'],
    fabricSuitability: '10 - 13 oz Black Warp / Black Weft (Stay Black) or Black Warp / White Weft (Washdown)',
    recipeSteps: [
      {
        stepName: 'Desize & Scour',
        chemical: 'Non-ionic Scouring Agent + Amylase',
        dosage: '2.0 g/L',
        temperature: '65°C',
        durationMinutes: 20,
        phLevel: '7.5',
        notes: 'Clears sulfur yarn spinning waxes.',
      },
      {
        stepName: 'Acid Cellulase Wash',
        chemical: 'Acid Cellulase + Laccase Enzyme',
        dosage: '2.0 g/L',
        temperature: '50°C',
        durationMinutes: 40,
        phLevel: '4.5 - 5.0',
        notes: 'Laccase specifically targets sulfur black aromatic rings for gentle grey washdown.',
      },
      {
        stepName: 'Mild Hydrogen Peroxide Bleach',
        chemical: 'H2O2 (50%) + Caustic Soda',
        dosage: '3 - 5 ml/L',
        temperature: '70°C',
        durationMinutes: 20,
        phLevel: '10.5',
        notes: 'Brightens pepper highlights without causing red/bronze sulfur bronzing defect.',
      },
    ],
    dryProcesses: ['Hand sanding', 'Whisker tagging', 'Hem abrasion'],
    merchandiserTip: 'Check if buyer wants "Stay Black" or "Washdown Black". Stay Black uses vat black dyes that will not fade; washdown uses sulfur black.',
  },
];

export const DEFECTS_MATRIX: DefectItem[] = [
  {
    id: 'backstaining',
    title: 'Pocket Back-Staining (Blue Pockets)',
    category: 'Washing',
    severity: 'Major',
    visualSymptom: 'White cotton pocket bags and inner waistband labels turn dull murky blue after enzyme wash.',
    rootCause: 'Loosened indigo pigment suspended in wash liquor redeposits onto cellulose fibers of pocketing fabric in acidic wash baths.',
    preventionInProduction: 'Add 1.0 - 2.0 g/L Polyacrylic Dispersing Anti-Backstaining agent during enzyme bath; keep wash pH neutral (6.5) rather than acid (4.5).',
    merchandiserAction: 'Issue immediate wash recipe amendment to laundry manager; reject lots where white pocket bag color change exceeds Grade 3 on Grey Scale.',
  },
  {
    id: 'leg-twist',
    title: 'Leg Twist / Inseam Skewing',
    category: 'Fabric',
    severity: 'Major',
    visualSymptom: 'After domestic wash, the outseam twists to the front of the ankle by 1 to 2.5 inches.',
    rootCause: 'Right Hand Twill naturally relaxes along diagonal weave lines during water immersion. Fabric was not skewed properly during mill finishing.',
    preventionInProduction: 'Ensure mill applies 3-5% anti-skew angle during tenter finishing; or specify Left Hand Twill or Broken Twill fabric construction.',
    merchandiserAction: 'Test garment wash pilot samples prior to bulk cutting. If skewing > 3%, shift marker pattern grainline slightly to compensate.',
  },
  {
    id: 'lycra-rupture',
    title: 'Lycra Rupture / Grinning & Creep',
    category: 'Washing',
    severity: 'Critical',
    visualSymptom: 'Tiny white elastic whiskers pop out from fabric surface (grinning), accompanied by wavy puckered fabric patches and lost elasticity.',
    rootCause: 'Elastane core fibers degraded by excess wash temperatures (>65°C), strong chlorine bleach, or tumble drying heat (>80°C).',
    preventionInProduction: 'Keep wash and dry temperatures strictly below 60°C for stretch denim; replace chlorine with hydrogen peroxide or ozone.',
    merchandiserAction: 'Inspect stretch retention test (ASTM D3107) - elastic recovery must exceed 85%. Never allow chlorine bleach on dual-core or Lycra denim.',
  },
  {
    id: 'tender-fabric',
    title: 'Tender Fabric / Tear Strength Failure',
    category: 'Washing',
    severity: 'Critical',
    visualSymptom: 'Fabric tears effortlessly like paper at pocket corners, knees, or thighs during minimal tensile pull.',
    rootCause: 'Over-bleaching with sodium hypochlorite without adequate antichlor neutralization; or excessive acid cellulase bath duration degrading cellulose backbone.',
    preventionInProduction: 'Monitor bleach bath ORP (Oxidation Reduction Potential); enforce strict antichlor neutralization with sodium metabisulfite.',
    merchandiserAction: 'Mandate ASTM D1424 Elmendorf Tear test before shipment approval. Warp tear strength must be >= 1800 grams; Weft tear >= 1400 grams.',
  },
  {
    id: 'ozone-yellowing',
    title: 'Ozone Yellowing in Warehouse Storage',
    category: 'Finishing/Storage',
    severity: 'Major',
    visualSymptom: 'Folded light blue or bleached jeans develop yellowish-brown bands along exposed creases while sitting in warehouse cartons.',
    rootCause: 'Atmospheric ozone (O3) and nitrogen oxides (NOx) react with residual amine softeners and trace chlorine bleach compounds left in fabric.',
    preventionInProduction: 'Use non-yellowing silicone softeners; avoid cationic tallow-based softeners; neutralize 100% of residual chlorine; use anti-ozone finishing agents.',
    merchandiserAction: 'Specify antioxidant polybag packaging (butylated hydroxytoluene - BHT free) and verify ISO 105-G03 ozone fastness test before warehouse packing.',
  },
  {
    id: 'hem-no-roping',
    title: 'Flat Lifeless Bottom Hem (No Roping)',
    category: 'Sewing',
    severity: 'Minor',
    visualSymptom: 'Bottom hem remains straight and flat without classic helical ripples and high-low faded highlights after wash.',
    rootCause: 'Hem was sewn on a standard lockstitch machine instead of a vintage Union Special 43200G cylinder bed chainstitch machine with differential folder tension.',
    preventionInProduction: 'Enforce Union Special 43200G chainstitch machine requirement in factory tech pack with Tex 80 Corespun poly/cotton thread.',
    merchandiserAction: 'Ensure PP (pre-production) sample hem is examined and approved by buyer denim connoisseur team prior to mass line feed.',
  },
  {
    id: 'crocking-fastness',
    title: 'Excessive Crocking / Indigo Rubbing Bleed',
    category: 'Fabric',
    severity: 'Major',
    visualSymptom: 'Dry rubbing transfers heavy blue tint onto white test cloth, customer skin, sofa fabrics, or car seats (Crocking rating < 2.0).',
    rootCause: 'Surface unfixed indigo dye particles remain sitting on fiber perimeters due to insufficient washing-off at the fabric mill or poor scouring.',
    preventionInProduction: 'Perform intense post-dye wash boxes with dispersing agents; add washing-off baths at laundry stage before softener application.',
    merchandiserAction: 'Run AATCC 8 Crockmeter test. Dry crocking must meet Grade 3.0 minimum; Wet crocking Grade 2.0 minimum. Add warning hangtag if raw denim.',
  },
  {
    id: 'seam-puckering',
    title: 'Excessive Seam Puckering & Waviness',
    category: 'Sewing',
    severity: 'Minor',
    visualSymptom: 'Wavy wrinkles along front fly, outseams, or pocket borders that cannot be ironed out.',
    rootCause: 'Sewing machine thread tension too tight; differential feed dog pulling top and bottom fabric layers unevenly; or sewing thread shrinks at different rate than denim.',
    preventionInProduction: 'Calibrate machine tension using digital tension meters; use low-shrinkage Corespun threads; adjust differential feed dogs.',
    merchandiserAction: 'Verify sewing sample after a mock wash cycle before production start. Adjust SPI (Stitches Per Inch) from 12 down to 8-9 SPI.',
  },
];

export const DENIM_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: 'Why is the "Ring Dyeing" phenomenon essential for authentic denim washing and distressing?',
    options: [
      'It makes the fabric 100% waterproof',
      'It coats only the outer yarn shell, leaving the inner cotton core white to create high-contrast whiskers and abrasion',
      'It allows reactive dyes to penetrate deeply into the center',
      'It prevents the fabric from shrinking in the wash',
    ],
    correctIndex: 1,
    explanation: 'Indigo is insoluble vat pigment. During rope dyeing, quick dips and air oxidation (skying) deposit indigo onto the outer circumference of the yarn while the core remains pure white. When stone washed or laser abraded, this white core is exposed, creating the iconic high-contrast denim highlights.',
    merchandiserInsight: 'If a mill fully penetrates the yarn core with dye, the garment will wash down to a dull, flat monotone blue rather than authentic vintage denim.',
  },
  {
    id: 2,
    question: 'Which vintage sewing machine is universally recognized for creating the coveted "Roping Effect" on bottom hems?',
    options: [
      'Juki DDL-8700 single needle lockstitch',
      'Union Special 43200G cylinder bed chainstitch hemmer',
      'Yamato 4-thread overlock machine',
      'Brother programmable bar-tacker',
    ],
    correctIndex: 1,
    explanation: 'The Union Special 43200G has a specific folder and eccentric feed mechanism that feeds the upper and lower fabric layers slightly unequally while applying chainstitch tension. Upon washing, differential shrinkage twists the hem into diagonal helical ripples called "roping".',
    merchandiserInsight: 'Heritage denim brands like Levi\'s Vintage Clothing, Pure Blue Japan, and Iron Heart strictly mandate Union Special 43200G hems on tech packs.',
  },
  {
    id: 3,
    question: 'What is the role of Alpha-Amylase enzyme during the denim washing cycle?',
    options: [
      'To bleach the dark indigo dye into sky blue',
      'To hydrolyse and dissolve starch/PVA sizing agents applied during warp yarn preparation',
      'To soften the denim with silicone oils',
      'To neutralize residual potassium permanganate',
    ],
    correctIndex: 1,
    explanation: 'Before weaving, warp yarns are coated with starch or polyvinyl alcohol (PVA) sizing to prevent breakage on high-speed looms. Desizing with Alpha-Amylase enzyme at 55-60°C breaks down this starch, allowing subsequent cellulase enzymes and water to penetrate the cotton fiber uniformly.',
    merchandiserInsight: 'Poor desizing is the #1 cause of patchy, streaky enzyme washes and stone streaks in bulk laundry production.',
  },
  {
    id: 4,
    question: 'What is the standard formula to convert Denim Fabric GSM to Ounces per square yard (Oz/yd²)?',
    options: [
      'GSM ÷ 33.906 = Oz/yd²',
      'GSM × 2.54 = Oz/yd²',
      'GSM ÷ 28.35 = Oz/yd²',
      'GSM × 1.196 = Oz/yd²',
    ],
    correctIndex: 0,
    explanation: '1 ounce = 28.3495 grams; 1 square yard = 0.836127 square meters. Thus, 1 oz/yd² = 28.3495 / 0.836127 ≈ 33.906 g/m². Dividing GSM by 33.906 gives Oz/yd².',
    merchandiserInsight: 'Quick rule of thumb for merchandisers: 400 GSM ÷ 33.9 ≈ 11.8 oz (standard medium weight stretch denim).',
  },
  {
    id: 5,
    question: 'How was "Broken Twill" denim developed, and what defect did it solve?',
    options: [
      'Developed by Levi\'s to stop pocket holes',
      'Developed by Wrangler in 1964 to eliminate leg twist caused by directional twill torque',
      'Developed by Lee to create fuzzy soft fleece',
      'Developed by Candiani to eliminate elastane breakage',
    ],
    correctIndex: 1,
    explanation: 'Right Hand Twill twists to the right, and Left Hand Twill twists to the left. Wrangler designed Broken Twill (alternating 2 ends right, 2 ends left in a zig-zag chevron) so opposing directional tensions neutralize each other, achieving zero post-wash leg twist.',
    merchandiserInsight: 'Wrangler 13MWZ Cowboy Cut jeans use Broken Twill so rodeo cowboys\' pants never twist around their riding boots.',
  },
  {
    id: 6,
    question: 'What chemical is used as an "antichlor" to stop hypochlorite bleach from destroying cotton fabric tensile strength?',
    options: [
      'Caustic soda (NaOH)',
      'Sodium Metabisulfite (Na2S2O5) or Hydrogen Peroxide',
      'Pumice stone powder',
      'Acetic acid',
    ],
    correctIndex: 1,
    explanation: 'Sodium Metabisulfite chemically reduces residual active chlorine (hypochlorite) to harmless chloride ions. If not neutralized, trace chlorine continues to degrade cellulose molecular chains, causing fabric tenderization, tearing, and severe ozone yellowing in storage.',
    merchandiserInsight: 'Never sign off on a light bleach wash tech pack without confirming antichlor neutralization in the laundry recipe sheet.',
  },
  {
    id: 7,
    question: 'What does an EIM score of 22 mean in Jeanologia\'s Environmental Impact Measurement system?',
    options: [
      'Red (High Environmental Impact - Non-compliant)',
      'Amber (Medium Environmental Impact)',
      'Green (Low Environmental Impact - Highly Sustainable)',
      'Invalid test result',
    ],
    correctIndex: 2,
    explanation: 'In the Jeanologia EIM scoring index: 0 - 33 points is Green (Low Impact), 34 - 66 is Amber (Medium Impact), and > 66 is Red (High Impact). A score of 22 is an exemplary Green wash, typically achieved using Laser + Ozone + e-Flow nebulization.',
    merchandiserInsight: 'Global retailers like Levi\'s, Zara, H&M, and Marks & Spencer now require garment EIM scores under 33 on sustainable lines.',
  },
  {
    id: 8,
    question: 'Why should chlorine bleaching NEVER be used on denim containing Lycra or Dual-Core elastane yarns?',
    options: [
      'Because chlorine turns the fabric bright pink',
      'Because hypochlorite chemically breaks the polyurethane bonds in elastane, causing Lycra rupture, grinning, and complete loss of stretch recovery',
      'Because chlorine makes the fabric too heavy',
      'Because chlorine increases shrinkage to over 30%',
    ],
    correctIndex: 1,
    explanation: 'Chlorine aggressively attacks the urethane bonds of elastane polymers. The elastane breaks into fragments, snaps inside the cotton sheath, and pops out onto the surface as tiny white hairs ("grinning"), completely ruining garment recovery.',
    merchandiserInsight: 'For stretch denim light washes, always substitute chlorine with Hydrogen Peroxide at 70°C, Ozone gas, or bio-bleach laccase enzymes.',
  },
  {
    id: 9,
    question: 'What is the primary difference between Rope Dyeing and Slasher (Sheet) Dyeing?',
    options: [
      'Rope dyeing uses wool yarn; slasher uses cotton',
      'Rope dyeing bundles yarns into continuous ropes for superior ring-dye depth and batch uniformity; slasher dyes open sheets of flat yarns with faster setup for short runs',
      'Rope dyeing only dyes black sulfur; slasher only dyes blue indigo',
      'Rope dyeing cannot be sanforized',
    ],
    correctIndex: 1,
    explanation: 'Rope dyeing gathers 350-450 yarn ends into ropes, ensuring uniform chemical uptake and deep oxidation across 12-24 dip boxes with virtually zero side-to-center shade variation. Slasher dyeing runs yarns in flat sheet form; it is quicker for changing lots but prone to shade variance across the wide sheet.',
    merchandiserInsight: 'Rope dyeing requires minimum mill batch orders of 5,000 - 10,000 yards. For boutique small-batch orders (<1,500 yds), mills usually quote slasher-dyed fabric.',
  },
  {
    id: 10,
    question: 'What is "Crocking" in denim quality assurance, and how is it tested?',
    options: [
      'The speed at which a zipper closes',
      'The tendency of indigo dye to rub off onto other surfaces, evaluated using an AATCC Crockmeter under dry and wet rubbing conditions',
      'The degree of yarn slub thickness',
      'The melting point of button shanks',
    ],
    correctIndex: 1,
    explanation: 'Crocking is the transfer of surface indigo color onto another material by rubbing. It is tested using an AATCC Crockmeter, rubbing a standard white cotton square 10 cycles across the denim, then rating the stained cloth on the AATCC Chromatic Transference Scale (Grade 1 worst to Grade 5 best).',
    merchandiserInsight: 'Commercial buyers generally accept Grade 3.0 dry crocking and Grade 2.0 wet crocking for dark indigo denim. Higher ratings require special fixatives or wash-downs.',
  },
];

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Ring Spun Yarn',
    category: 'Spinning & Dyeing',
    definition: 'Yarn created by twisting cotton fibers on a ring spinning frame. Yields highest tensile strength, smooth surface, and distinct ring-dye white core contrast.',
    relevance: 'Premium denim standard; essential for high-contrast whiskers and authentic wear patterns.',
  },
  {
    term: 'Open-End (OE) Yarn',
    category: 'Spinning & Dyeing',
    definition: 'Yarn spun on a rotor system without a spindle. Fibers are less parallel, producing a bulkier, rougher, drier texture.',
    relevance: 'Lower cost than ring spun; authentic for retro 1980s rigid cowboy and workwear styles.',
  },
  {
    term: 'Rope Dyeing',
    category: 'Spinning & Dyeing',
    definition: 'Continuous indigo dyeing method where hundreds of warp ends are bundled into long ropes and guided through multi-box dip and skying sequences.',
    relevance: 'Gold standard for indigo consistency, lowest side-to-side shade variance, and supreme ring-dye effect.',
  },
  {
    term: 'Skying (Oxidation)',
    category: 'Spinning & Dyeing',
    definition: 'The vertical travel of dyed yarn ropes through high towers into open air, allowing atmospheric oxygen to oxidize soluble leuco-indigo back into insoluble blue pigment.',
    relevance: 'Number of dips and skying cycles determines shade depth and ring thickness.',
  },
  {
    term: 'Sulfur Bottom / Sulfur Top',
    category: 'Spinning & Dyeing',
    definition: 'Bottoming: applying sulfur dye before indigo (e.g., sulfur brown/black bottom + indigo top). Topping: applying sulfur dye over indigo.',
    relevance: 'Controls the "cast" (green cast, red cast, dirty antique cast) as the denim fades with washing.',
  },
  {
    term: 'Right Hand Twill (RHT / Z-Twill)',
    category: 'Weaving & Fabric',
    definition: 'Twill weave with diagonal ribs slanting upward to the right. The standard denim weave used in classic Levi\'s 501.',
    relevance: 'Crisp texture; requires anti-skew finishing to counteract rightward leg twist.',
  },
  {
    term: 'Left Hand Twill (LHT / S-Twill)',
    category: 'Weaving & Fabric',
    definition: 'Twill weave with diagonal ribs running upward to the left. Championed historically by Lee Jeans.',
    relevance: 'Untwists slightly in wash, yielding a noticeably softer, silkier handfeel than RHT.',
  },
  {
    term: 'Broken Twill',
    category: 'Weaving & Fabric',
    definition: 'Zig-zag twill weave invented by Wrangler in 1964 that alternates direction every two warp threads.',
    relevance: 'Completely eliminates leg twisting caused by directional twill torque.',
  },
  {
    term: 'Selvedge (Self-Edge)',
    category: 'Weaving & Fabric',
    definition: 'Clean woven edge of denim produced on narrow shuttle looms (29"-32" width) where the continuous weft yarn loops around without cutting.',
    relevance: 'Sign of artisanal heritage; usually identified by colored ticker line (e.g. redline selvedge) in outseam cuff.',
  },
  {
    term: 'Sanforization',
    category: 'Weaving & Fabric',
    definition: 'A patented mechanical finishing process using steam and heavy rubber belts to compressively shrink fabric warp yarns.',
    relevance: 'Reduces residual fabric shrinkage from 12-14% down to under 3% x 3% for predictable garment sizing.',
  },
  {
    term: 'Feed-Off-The-Arm',
    category: 'Sewing & Machine',
    definition: 'Specialized sewing machine with a tubular cylindrical arm, allowing closed tubular garments (like pant legs) to be fed around the arm for lap-felling.',
    relevance: 'Used to sew the double or triple-needle flat-fell chainstitch on denim inseams and back rises.',
  },
  {
    term: 'Union Special 43200G',
    category: 'Sewing & Machine',
    definition: 'Legendary vintage cylinder-bed chainstitch sewing machine built specifically for trouser and jeans hems.',
    relevance: 'Differential feed creates the signature twisting "roping effect" prized by denim connoisseurs worldwide.',
  },
  {
    term: 'Corespun Thread',
    category: 'Sewing & Machine',
    definition: 'Sewing thread made with a continuous polyester filament core wrapped in staple polyester or cotton fibers.',
    relevance: 'Poly/Poly offers maximum strength for high-speed industrial sewing; Poly/Cotton allows thread to fade naturally with washings.',
  },
  {
    term: 'SPI (Stitches Per Inch)',
    category: 'Sewing & Machine',
    definition: 'Number of stitches per linear inch along a seam.',
    relevance: 'Denim topstitching uses 7-8 SPI to withstand stone abrasion; structural seams use 10-12 SPI for seam strength.',
  },
  {
    term: 'Desizing',
    category: 'Wash & Chemistry',
    definition: 'The initial wet wash stage using alpha-amylase enzyme to break down starch and PVA sizing agents from warp yarns.',
    relevance: 'Essential first step; without desizing, enzyme washes and bleaching become streaky and uneven.',
  },
  {
    term: 'Bio-Stone / Cellulase Enzyme',
    category: 'Wash & Chemistry',
    definition: 'Enzymes (acid or neutral cellulase) that selectively hydrolyse the surface cellulose fibrils of cotton, loosening outer indigo particles.',
    relevance: 'Replaces or assists pumice stones; neutral cellulase preserves tensile strength and minimizes pocket backstaining.',
  },
  {
    term: 'Antichlor / Neutralization',
    category: 'Wash & Chemistry',
    definition: 'Chemical bath (typically sodium metabisulfite) that halts sodium hypochlorite chlorine bleaching.',
    relevance: 'Prevents progressive fabric tenderization (tearing) and yellowing during warehouse storage.',
  },
  {
    term: 'Whiskers / Moustache',
    category: 'Wash & Chemistry',
    definition: 'Pattern of faded horizontal and diagonal crease lines radiating from the front crotch across the upper thighs.',
    relevance: 'Simulates natural wear creases formed when sitting; created via manual scraping, 3D resin curing, or laser.',
  },
  {
    term: 'Honeycombs',
    category: 'Wash & Chemistry',
    definition: 'Geometric diamond or hexagonal crease fade patterns formed behind the knee.',
    relevance: 'High-wear indicator in vintage denim; replicated using laser or hand-buffing on rubber mannequins.',
  },
  {
    term: 'Ozone Washing',
    category: 'Sustainability',
    definition: 'Using ozone gas (O3) inside tumbling wash chambers to bleach indigo and clear backstaining without water or harsh chemicals.',
    relevance: 'Slashes water and energy usage; reduces EIM score; converts back into pure oxygen upon cycle completion.',
  },
  {
    term: 'EIM (Environmental Impact Measurement)',
    category: 'Sustainability',
    definition: 'Software platform developed by Jeanologia that calculates environmental score based on water, energy, chemicals, and worker health.',
    relevance: 'Global retail benchmark: Green (<33), Amber (34-66), Red (>66). Required by Tier-1 apparel buyers.',
  },
  {
    term: 'e-Flow (Nebulization)',
    category: 'Sustainability',
    definition: 'Technology that carries washing chemistry (enzymes, softeners) onto garments via micronized nanobubbles instead of full water baths.',
    relevance: 'Reduces water consumption to a 1:1 liquor ratio (almost dry) and cuts chemical usage by up to 50%.',
  },
  {
    term: 'Crocking (Rubbing Fastness)',
    category: 'Fabric & Quality',
    definition: 'The transfer of indigo dye from fabric surface onto adjacent materials by friction, tested via AATCC 8 Crockmeter.',
    relevance: 'Crucial quality metric: Grade 3 dry / Grade 2 wet standard. Lower ratings cause consumer returns.',
  },
];
