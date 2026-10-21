import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FabricConsumptionResult, WashCostResult, EIMAssessmentResult } from './denimCalculations.ts';
import { WashType, WASH_TYPES } from '../data/denimData.ts';

export interface TechPackPdfOptions {
  styleName: string;
  styleCode: string;
  buyerName: string;
  season: string;
  fabricSpecs: string;
  fabricParams: {
    markerLengthYards: number;
    garmentsInMarker: number;
    warpShrinkagePct: number;
    weftShrinkagePct: number;
    cuttingWastagePct: number;
    fabricPricePerYard: number;
  };
  fabricResult: FabricConsumptionResult;
  selectedWashRecipe: WashType;
  washParams: {
    garmentWeightGrams: number;
    batchGarmentCount: number;
    liquorRatio: number;
    energyAndSteamPerBatch: number;
    manualDryProcessCostPerPc: number;
  };
  washResult: WashCostResult;
  eimResult: EIMAssessmentResult;
  merchandiserNotes?: string;
}

/**
 * Generates and downloads an executive technical denim costing & wash specification PDF
 */
export function generateTechPackPdf(options: TechPackPdfOptions): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;

  // Colors
  const primaryNavy = [11, 26, 48]; // #0b1a30
  const selvedgeRed = [220, 38, 38]; // #dc2626
  const accentGold = [202, 138, 4]; // #ca8a04
  const slateDark = [30, 41, 59];
  const slateLight = [241, 245, 249];

  // --- HEADER BANNER ---
  doc.setFillColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.rect(0, 0, pageWidth, 28, 'F');

  // Red Selvedge Accent Stripe
  doc.setFillColor(selvedgeRed[0], selvedgeRed[1], selvedgeRed[2]);
  doc.rect(0, 27, pageWidth, 2, 'F');

  // Logo / Header Text
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('DenimIQ', margin, 12);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(203, 213, 225);
  doc.text('DENIM APPAREL MERCHANDISING & TECHNICAL COSTING SPECIFICATION', margin, 18);

  doc.setFontSize(8);
  doc.setTextColor(253, 224, 71);
  doc.text('STANDARD: ASTM D6193 / JEANOLOGIA EIM COMPLIANT', margin, 24);

  // Document Info (Right Aligned)
  const todayStr = new Date().toISOString().split('T')[0];
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.text(`DOC REF: ${options.styleCode || 'DNM-SPEC-01'}`, pageWidth - margin, 12, { align: 'right' });
  doc.setTextColor(203, 213, 225);
  doc.text(`DATE: ${todayStr}`, pageWidth - margin, 18, { align: 'right' });
  doc.text(`SEASON: ${options.season || 'FW26/SS27'}`, pageWidth - margin, 24, { align: 'right' });

  let y = 35;

  // --- STYLE & COMMERCIAL METADATA TABLE ---
  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    theme: 'grid',
    styles: { fontSize: 8, cellPadding: 2, textColor: slateDark },
    headStyles: { fillColor: primaryNavy, textColor: [255, 255, 255], fontStyle: 'bold' },
    head: [['Style Name', 'Style Code', 'Target Buyer / Brand', 'Fabric Construction & Weight']],
    body: [
      [
        options.styleName || '5-Pocket Classic Heritage Jean',
        options.styleCode || 'DNM-2026-X',
        options.buyerName || 'Global Retail / Wholesale',
        options.fabricSpecs || '12.0 oz (407 GSM) 3/1 RHT Ring x Ring Denim',
      ],
    ],
  });

  // @ts-expect-error autoTable adds lastAutoTable to doc
  y = doc.lastAutoTable.finalY + 6;

  // --- SECTION 1: FABRIC CONSUMPTION & YIELD COSTING ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text('1. FABRIC YIELD & CONSUMPTION BREAKDOWN', margin, y);
  y += 3;

  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    theme: 'striped',
    styles: { fontSize: 8, cellPadding: 2 },
    headStyles: { fillColor: [30, 58, 138], textColor: [255, 255, 255], fontStyle: 'bold' },
    head: [['Parameter', 'Specification', 'Merchandiser Yield Metric', 'Cost Analysis']],
    body: [
      [
        'CAD Marker Length',
        `${options.fabricParams.markerLengthYards} Yards`,
        'Net Consumption / Pc',
        `${options.fabricResult.netConsumptionPerPcYards} Yds / Pc`,
      ],
      [
        'Garments in Marker',
        `${options.fabricParams.garmentsInMarker} Pcs`,
        'Gross Consumption / Pc (Warp Shrinkage Buffer)',
        `${options.fabricResult.grossConsumptionPerPcYards} Yds / Pc`,
      ],
      [
        'Warp x Weft Shrinkage Allowance',
        `${options.fabricParams.warpShrinkagePct}% x ${options.fabricParams.weftShrinkagePct}%`,
        'Consumption / Dozen (Dzn)',
        `${options.fabricResult.consumptionPerDozenYards} Yds / Dzn`,
      ],
      [
        'Cutting Wastage & End Loss',
        `${options.fabricParams.cuttingWastagePct}%`,
        'Fabric Price per Yard',
        `$${options.fabricParams.fabricPricePerYard.toFixed(2)} / Yard`,
      ],
      [
        'Shrinkage Buffer Multiplier',
        `${options.fabricResult.shrinkageBufferRatio}x Buffer`,
        'TOTAL FABRIC COST / GARMENT',
        `$${options.fabricResult.fabricCostPerGarment.toFixed(2)} (or $${options.fabricResult.fabricCostPerDozen.toFixed(2)}/Dzn)`,
      ],
    ],
  });

  // @ts-expect-error autoTable adds lastAutoTable to doc
  y = doc.lastAutoTable.finalY + 6;

  // --- SECTION 2: INDUSTRIAL WASH RECIPE & FORMULATION ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text(`2. INDUSTRIAL LAUNDRY RECIPE: ${options.selectedWashRecipe.name.toUpperCase()}`, margin, y);
  y += 3;

  const recipeStepsBody = options.selectedWashRecipe.recipeSteps.map((step, idx) => [
    `#${idx + 1} ${step.stepName}`,
    step.chemical,
    step.dosage,
    `${step.durationMinutes} min @ ${step.temperature}`,
    `pH ${step.phLevel}`,
    step.notes,
  ]);

  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    theme: 'grid',
    styles: { fontSize: 7.5, cellPadding: 1.8 },
    headStyles: { fillColor: primaryNavy, textColor: [255, 255, 255], fontStyle: 'bold' },
    head: [['Stage', 'Chemical Agent', 'Dosage / Ratio', 'Time & Temp', 'pH', 'Technical Laundry Notes']],
    body: recipeStepsBody,
  });

  // @ts-expect-error autoTable adds lastAutoTable to doc
  y = doc.lastAutoTable.finalY + 6;

  // Check if we need page break or if we have room
  if (y > pageHeight - 75) {
    doc.addPage();
    y = 20;
  }

  // --- SECTION 3: WASH COSTING & SUSTAINABILITY (EIM) ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text('3. LAUNDRY ECONOMICS & JEANOLOGIA EIM SCORE', margin, y);
  y += 3;

  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    theme: 'striped',
    styles: { fontSize: 8, cellPadding: 2 },
    headStyles: { fillColor: [13, 148, 136], textColor: [255, 255, 255], fontStyle: 'bold' },
    head: [['Cost Element', 'Batch Metric', 'Per Piece ($/Pc)', 'EIM Environmental Rating']],
    body: [
      [
        'Water & Liquor Volume',
        `${options.washResult.totalWaterLitersPerBatch} L per ${options.washParams.batchGarmentCount} pcs (${options.washParams.liquorRatio}:1 ratio)`,
        `$${(options.washResult.waterCostPerBatch / options.washParams.batchGarmentCount).toFixed(2)}/pc (${options.washResult.waterPerGarmentLiters} L/pc)`,
        `Water Rating: ${options.eimResult.waterRating}`,
      ],
      [
        'Wet Chemicals & Enzymes',
        `Active Cellulase + Sizing breakdown`,
        `$${options.washResult.chemicalCostPerGarment.toFixed(2)}/pc`,
        `Chemical Toxicity: ${options.eimResult.score <= 33 ? 'Low (ZDHC compliant)' : 'Monitored'}`,
      ],
      [
        'Energy, Steam & Drying',
        `$${options.washParams.energyAndSteamPerBatch.toFixed(2)} batch energy`,
        `$${(options.washParams.energyAndSteamPerBatch / options.washParams.batchGarmentCount).toFixed(2)}/pc`,
        `Energy Rating: ${options.eimResult.energyRating}`,
      ],
      [
        'Dry Finishing & Laser',
        options.selectedWashRecipe.dryProcesses.join(', ') || 'Standard Whiskers/Sanding',
        `$${options.washParams.manualDryProcessCostPerPc.toFixed(2)}/pc`,
        `Worker Impact: ${options.eimResult.rating}`,
      ],
      [
        'TOTAL LAUNDRY FOB WASH COST',
        `Batch Total: $${(options.washResult.totalWashCostPerGarment * options.washParams.batchGarmentCount).toFixed(2)}`,
        `$${options.washResult.totalWashCostPerGarment.toFixed(2)} / Garment ($${options.washResult.totalWashCostPerDozen.toFixed(2)}/Dzn)`,
        `EIM SCORE: ${options.eimResult.score} PTS (${options.eimResult.rating})`,
      ],
    ],
  });

  // @ts-expect-error autoTable adds lastAutoTable to doc
  y = doc.lastAutoTable.finalY + 6;

  // --- SECTION 4: COMBINED FOB FABRIC + WASH SUMMARY ---
  const combinedCostPerPc = Number(
    (options.fabricResult.fabricCostPerGarment + options.washResult.totalWashCostPerGarment).toFixed(2)
  );
  const combinedCostPerDzn = Number((combinedCostPerPc * 12).toFixed(2));

  doc.setFillColor(slateLight[0], slateLight[1], slateLight[2]);
  doc.rect(margin, y, pageWidth - margin * 2, 16, 'F');
  doc.setDrawColor(selvedgeRed[0], selvedgeRed[1], selvedgeRed[2]);
  doc.setLineWidth(0.5);
  doc.rect(margin, y, pageWidth - margin * 2, 16, 'D');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text('COMBINED FABRIC & WASH FOB SUB-TOTAL:', margin + 4, y + 6);

  doc.setFontSize(11);
  doc.setTextColor(selvedgeRed[0], selvedgeRed[1], selvedgeRed[2]);
  doc.text(`$${combinedCostPerPc.toFixed(2)} / Piece ($${combinedCostPerDzn.toFixed(2)} / Dozen)`, margin + 4, y + 12);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(slateDark[0], slateDark[1], slateDark[2]);
  doc.text(
    `* Excludes CMT (Cut-Make-Trim sewing labor) & trims (shank, rivets, zipper, labels). Fabric: $${options.fabricResult.fabricCostPerGarment.toFixed(2)} + Wash: $${options.washResult.totalWashCostPerGarment.toFixed(2)}`,
    pageWidth - margin - 4,
    y + 9,
    { align: 'right' }
  );

  y += 22;

  // Check room for sign-off block
  if (y > pageHeight - 35) {
    doc.addPage();
    y = 20;
  }

  // --- SECTION 5: SIGN-OFF & APPROVALS BLOCK ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text('FACTORY & BUYING HOUSE APPROVAL AUDIT TRAIL', margin, y);
  y += 4;

  const colWidth = (pageWidth - margin * 2) / 3;
  ['Prepared By (Merchandiser):', 'Laundry Master Review:', 'Buying House / Sourcing Sign-off:'].forEach(
    (title, i) => {
      const colX = margin + i * colWidth;
      doc.setDrawColor(203, 213, 225);
      doc.rect(colX, y, colWidth - 2, 18, 'D');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(100, 116, 139);
      doc.text(title, colX + 2, y + 4);
      doc.text('Signature & Date: _____________________', colX + 2, y + 15);
    }
  );

  // Footer on all pages
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `DenimIQ Master Merchandiser Platform &bull; Page ${p} of ${totalPages} &bull; Generated for ${options.buyerName || 'Standard Tech Pack'}`,
      margin,
      pageHeight - 6
    );
    doc.text('CONFIDENTIAL APPAREL SPECIFICATION', pageWidth - margin, pageHeight - 6, { align: 'right' });
  }

  return doc;
}

/**
 * Convenience method to export and trigger instant browser file download
 */
export function exportAndDownloadTechPackPdf(options: TechPackPdfOptions): void {
  const doc = generateTechPackPdf(options);
  const cleanCode = (options.styleCode || 'DENIM_TECH_PACK').replace(/[^a-zA-Z0-9_-]/g, '_');
  doc.save(`DenimIQ_Costing_WashSpec_${cleanCode}.pdf`);
}
