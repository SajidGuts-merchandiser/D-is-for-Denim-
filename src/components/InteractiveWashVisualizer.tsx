import React, { useState, useEffect, useRef } from 'react';
import {
  Sliders,
  Sparkles,
  Download,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  SplitSquareHorizontal,
  ShieldAlert,
  CheckCircle2,
  Droplets,
  DollarSign,
  Gauge,
  Layers,
} from 'lucide-react';
import {
  WashVisualizerParams,
  WASH_VISUALIZER_PRESETS,
  VisualizerGarmentType,
  VisualizerTintCast,
  computeWashOpticalProfile,
} from '../utils/washVisualizerEngine.ts';
import { WASH_TYPES } from '../data/denimData.ts';
import { Language } from '../utils/i18n.ts';

interface InteractiveWashVisualizerProps {
  lang?: Language;
  selectedPresetId?: string;
  onSelectWashPreset?: (washId: string) => void;
}

export const InteractiveWashVisualizer: React.FC<InteractiveWashVisualizerProps> = ({
  lang = 'en',
  selectedPresetId = 'mid-stone-enzyme',
  onSelectWashPreset,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const initialPreset =
    WASH_VISUALIZER_PRESETS[selectedPresetId] || WASH_VISUALIZER_PRESETS['mid-stone-enzyme'];

  const [params, setParams] = useState<WashVisualizerParams>({
    ...initialPreset,
    garmentType: 'jeans',
    compareSplitPct: 28,
    zoomMacro: false,
  });

  // Sync when parent selects a different wash preset
  useEffect(() => {
    const preset = WASH_VISUALIZER_PRESETS[selectedPresetId];
    if (preset) {
      setParams((prev) => ({
        ...prev,
        ...preset,
      }));
    }
  }, [selectedPresetId]);

  const optical = computeWashOpticalProfile(params);

  const applyPreset = (washId: string) => {
    const preset = WASH_VISUALIZER_PRESETS[washId];
    if (!preset) return;
    setParams((prev) => ({
      ...prev,
      ...preset,
    }));
    if (onSelectWashPreset) {
      onSelectWashPreset(washId);
    }
  };

  // Render high-definition realistic denim wash simulation on HTML5 Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    // Background studio dark surface
    ctx.fillStyle = '#09090b';
    ctx.fillRect(0, 0, width, height);

    // Subtle studio grid
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 28) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 28) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    const splitX = Math.round((params.compareSplitPct / 100) * width);

    // Helper to draw textured denim fabric pass (either 'raw' or 'washed')
    const renderDenimPass = (mode: 'raw' | 'washed') => {
      const [bR, bG, bB] = mode === 'raw' ? [18, 30, 56] : optical.baseRgb;
      const [hR, hG, hB] = mode === 'raw' ? [24, 38, 68] : optical.highlightRgb;
      const [ropeR, ropeG, ropeB] = mode === 'raw' ? [26, 42, 74] : optical.seamRopingRgb;

      const whiskerAmt = mode === 'raw' ? 0.04 : params.whiskerLaserIntensity / 100;
      const ppAmt = mode === 'raw' ? 0 : params.ppThighHighlight / 100;
      const acidAmt = mode === 'raw' ? 0 : params.acidMarbleEffect / 100;
      const slubAmt = params.slubTexture / 100;
      const abrasionAmt = mode === 'raw' ? 0 : params.stoneAbrasion / 100;

      if (params.zoomMacro) {
        // 4x Macro Twill Weave + Yarn Core Inspection View
        ctx.fillStyle = `rgb(${bR}, ${bG}, ${bB})`;
        ctx.fillRect(24, 24, width - 48, height - 48);

        // Soft highlight center
        const macroGrad = ctx.createRadialGradient(
          width * 0.55,
          height * 0.5,
          20,
          width * 0.55,
          height * 0.5,
          width * 0.42
        );
        macroGrad.addColorStop(0, `rgba(${hR}, ${hG}, ${hB}, ${0.65 * ppAmt})`);
        macroGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = macroGrad;
        ctx.fillRect(24, 24, width - 48, height - 48);

        // 3x1 Right-Hand Twill Diagonal Ribs (Macro Scale)
        const step = 7;
        for (let i = -height; i < width + height; i += step) {
          ctx.beginPath();
          ctx.moveTo(i, 24);
          ctx.lineTo(i - height + 48, height - 24);
          ctx.strokeStyle = `rgba(245, 248, 255, ${0.14 + abrasionAmt * 0.25})`;
          ctx.lineWidth = 2.2;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(i + 3, 24);
          ctx.lineTo(i + 3 - height + 48, height - 24);
          ctx.strokeStyle = `rgba(6, 10, 22, 0.35)`;
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }

        // Ring-spun vertical slub yarns
        for (let x = 28; x < width - 28; x += 6) {
          const hash = Math.sin(x * 12.9898) * 43758.5453;
          const frac = hash - Math.floor(hash);
          if (frac < slubAmt * 0.65) {
            const yStart = 28 + ((x * 37) % (height - 140));
            const slubLen = 35 + ((x * 19) % 85);
            ctx.strokeStyle = `rgba(${ropeR}, ${ropeG}, ${ropeB}, ${0.32 + slubAmt * 0.35})`;
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.moveTo(x, yStart);
            ctx.lineTo(x, Math.min(height - 28, yStart + slubLen));
            ctx.stroke();
          }
        }

        // Acid / Snow marble blotches in macro view
        if (acidAmt > 0.05) {
          for (let m = 0; m < 48; m++) {
            const mx = 45 + ((m * 137) % (width - 90));
            const my = 45 + ((m * 97) % (height - 90));
            const mr = 14 + (m % 4) * 11;
            const mGrad = ctx.createRadialGradient(mx, my, 2, mx, my, mr);
            mGrad.addColorStop(0, `rgba(236, 244, 255, ${acidAmt * 0.62})`);
            mGrad.addColorStop(1, 'rgba(236, 244, 255, 0)');
            ctx.fillStyle = mGrad;
            ctx.beginPath();
            ctx.arc(mx, my, mr, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Macro felled seam with high-low roping down the middle
        const seamY = Math.round(height * 0.68);
        ctx.fillStyle = `rgba(8, 12, 24, 0.45)`;
        ctx.fillRect(24, seamY - 12, width - 48, 28);

        for (let rx = 30; rx < width - 36; rx += 14) {
          ctx.fillStyle = `rgba(${ropeR + 28}, ${ropeG + 28}, ${ropeB + 22}, ${0.35 + abrasionAmt * 0.55})`;
          ctx.beginPath();
          ctx.ellipse(rx, seamY - 5, 6, 3.5, -0.45, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(rx + 4, seamY + 9, 6, 3.5, -0.45, 0, Math.PI * 2);
          ctx.fill();
        }

        // Twin needle gold chainstitch
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2.6;
        ctx.setLineDash([9, 5]);
        ctx.beginPath();
        ctx.moveTo(24, seamY - 5);
        ctx.lineTo(width - 24, seamY - 5);
        ctx.moveTo(24, seamY + 9);
        ctx.lineTo(width - 24, seamY + 9);
        ctx.stroke();
        ctx.setLineDash([]);
        return;
      }

      // 1x Garment Silhouette Path
      ctx.save();
      ctx.beginPath();
      if (params.garmentType === 'jeans') {
        // 5-Pocket Jeans Front & Thigh Silhouette
        ctx.moveTo(230, 36);
        ctx.lineTo(610, 36); // Waistband top
        ctx.lineTo(626, 150); // Right hip
        ctx.lineTo(605, 504); // Right outer leg
        ctx.lineTo(458, 504); // Right hem
        ctx.lineTo(426, 215); // Crotch / Fly base
        ctx.lineTo(414, 215);
        ctx.lineTo(382, 504); // Left inner leg
        ctx.lineTo(235, 504); // Left hem
        ctx.lineTo(214, 150); // Left hip
        ctx.closePath();
      } else if (params.garmentType === 'shorts') {
        // Denim Carpenter / 5-Pocket Shorts Silhouette
        ctx.moveTo(220, 48);
        ctx.lineTo(620, 48);
        ctx.lineTo(640, 175);
        ctx.lineTo(628, 395);
        ctx.lineTo(445, 395);
        ctx.lineTo(425, 235);
        ctx.lineTo(415, 235);
        ctx.lineTo(395, 395);
        ctx.lineTo(212, 395);
        ctx.lineTo(200, 175);
        ctx.closePath();
      } else {
        // Trucker Jacket / Utility Shacket Silhouette
        ctx.moveTo(315, 38);
        ctx.lineTo(525, 38); // Collar/Shoulder top
        ctx.lineTo(635, 92); // Right shoulder
        ctx.lineTo(715, 380); // Right sleeve outer
        ctx.lineTo(648, 398); // Right cuff
        ctx.lineTo(575, 195); // Right armhole pit
        ctx.lineTo(570, 485); // Right waist hem
        ctx.lineTo(270, 485); // Left waist hem
        ctx.lineTo(265, 195); // Left armhole pit
        ctx.lineTo(192, 398); // Left cuff
        ctx.lineTo(125, 380); // Left sleeve outer
        ctx.lineTo(205, 92); // Left shoulder
        ctx.closePath();
      }

      ctx.clip();

      // Base Indigo Fill
      ctx.fillStyle = `rgb(${bR}, ${bG}, ${bB})`;
      ctx.fillRect(100, 20, 640, 500);

      // Thigh / Chest PP & Sanding Highlight Gradients
      if (ppAmt > 0.02 || abrasionAmt > 0.1) {
        const fadeIntensity = Math.min(0.92, ppAmt * 0.72 + abrasionAmt * 0.25);
        if (params.garmentType === 'jeans' || params.garmentType === 'shorts') {
          const leftThigh = ctx.createRadialGradient(
            318,
            265,
            12,
            318,
            265,
            params.garmentType === 'shorts' ? 110 : 165
          );
          leftThigh.addColorStop(0, `rgba(${hR}, ${hG}, ${hB}, ${fadeIntensity})`);
          leftThigh.addColorStop(0.65, `rgba(${hR}, ${hG}, ${hB}, ${fadeIntensity * 0.42})`);
          leftThigh.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = leftThigh;
          ctx.fillRect(180, 90, 260, 390);

          const rightThigh = ctx.createRadialGradient(
            522,
            265,
            12,
            522,
            265,
            params.garmentType === 'shorts' ? 110 : 165
          );
          rightThigh.addColorStop(0, `rgba(${hR}, ${hG}, ${hB}, ${fadeIntensity})`);
          rightThigh.addColorStop(0.65, `rgba(${hR}, ${hG}, ${hB}, ${fadeIntensity * 0.42})`);
          rightThigh.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = rightThigh;
          ctx.fillRect(410, 90, 260, 390);
        } else {
          // Jacket chest + sleeve fade
          const leftChest = ctx.createRadialGradient(350, 250, 15, 350, 250, 145);
          leftChest.addColorStop(0, `rgba(${hR}, ${hG}, ${hB}, ${fadeIntensity})`);
          leftChest.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = leftChest;
          ctx.fillRect(220, 90, 220, 360);

          const rightChest = ctx.createRadialGradient(490, 250, 15, 490, 250, 145);
          rightChest.addColorStop(0, `rgba(${hR}, ${hG}, ${hB}, ${fadeIntensity})`);
          rightChest.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = rightChest;
          ctx.fillRect(400, 90, 220, 360);
        }
      }

      // Acid / Snow Pumice Marbling Clouds
      if (acidAmt > 0.05) {
        for (let a = 0; a < 55; a++) {
          const ax = 160 + ((a * 97) % 520);
          const ay = 45 + ((a * 73) % 445);
          const ar = 12 + (a % 5) * 9;
          const aGrad = ctx.createRadialGradient(ax, ay, 2, ax, ay, ar);
          aGrad.addColorStop(0, `rgba(235, 244, 255, ${acidAmt * 0.58})`);
          aGrad.addColorStop(1, 'rgba(235, 244, 255, 0)');
          ctx.fillStyle = aGrad;
          ctx.beginPath();
          ctx.arc(ax, ay, ar, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 3x1 Diagonal Twill Texture Lines across garment
      ctx.strokeStyle = `rgba(240, 246, 255, ${0.07 + abrasionAmt * 0.11})`;
      ctx.lineWidth = 1;
      for (let d = -500; d < 850; d += 5) {
        ctx.beginPath();
        ctx.moveTo(d, 30);
        ctx.lineTo(d - 460, 510);
        ctx.stroke();
      }

      // Vertical Ring-Spun Slub Streaks
      if (slubAmt > 0.1) {
        ctx.strokeStyle = `rgba(${ropeR + 20}, ${ropeG + 20}, ${ropeB + 20}, ${slubAmt * 0.24})`;
        ctx.lineWidth = 1.2;
        for (let sx = 160; sx < 680; sx += 9) {
          const sy = 40 + ((sx * 29) % 390);
          const sLen = 22 + ((sx * 13) % 52);
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx, sy + sLen);
          ctx.stroke();
        }
      }

      // 3D Hip Whiskers & Crease Lines (Laser / Hand Sanding)
      if (whiskerAmt > 0.05) {
        ctx.strokeStyle = `rgba(${Math.min(255, hR + 38)}, ${Math.min(255, hG + 38)}, ${Math.min(
          255,
          hB + 32
        )}, ${whiskerAmt * 0.78})`;
        ctx.lineWidth = 3.2;
        ctx.lineCap = 'round';

        if (params.garmentType === 'jeans' || params.garmentType === 'shorts') {
          // Left hip whiskers
          const leftWhiskers = [
            [395, 152, 248, 134],
            [398, 168, 236, 158],
            [396, 184, 244, 184],
            [392, 198, 262, 208],
            [385, 212, 285, 226],
          ];
          leftWhiskers.forEach(([x1, y1, x2, y2]) => {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.quadraticCurveTo((x1 + x2) / 2, y1 - 6, x2, y2);
            ctx.stroke();
          });

          // Right hip whiskers
          const rightWhiskers = [
            [445, 152, 592, 134],
            [442, 168, 604, 158],
            [444, 184, 596, 184],
            [448, 198, 578, 208],
            [455, 212, 555, 226],
          ];
          rightWhiskers.forEach(([x1, y1, x2, y2]) => {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.quadraticCurveTo((x1 + x2) / 2, y1 - 6, x2, y2);
            ctx.stroke();
          });

          // Knee chevrons on full jeans
          if (params.garmentType === 'jeans') {
            const kneeLines = [
              [255, 345, 365, 358],
              [260, 362, 362, 372],
              [475, 358, 585, 345],
              [478, 372, 580, 362],
            ];
            kneeLines.forEach(([x1, y1, x2, y2]) => {
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            });
          }
        } else {
          // Jacket elbow honeycombs
          const elbowLines = [
            [170, 240, 235, 255],
            [162, 258, 228, 272],
            [155, 276, 220, 288],
            [670, 240, 605, 255],
            [678, 258, 612, 272],
            [685, 276, 620, 288],
          ];
          elbowLines.forEach(([x1, y1, x2, y2]) => {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          });
        }
      }

      // Garment Construction Seams, Roping & Contrast Topstitching
      ctx.strokeStyle = `rgba(${ropeR + 30}, ${ropeG + 30}, ${ropeB + 25}, ${0.35 + abrasionAmt * 0.55})`;
      ctx.lineWidth = 4;

      if (params.garmentType === 'jeans' || params.garmentType === 'shorts') {
        const hemY = params.garmentType === 'shorts' ? 382 : 490;
        // Waistband seam + hem roping
        ctx.beginPath();
        ctx.moveTo(222, 70);
        ctx.lineTo(618, 70);
        ctx.moveTo(212, hemY);
        ctx.lineTo(628, hemY);
        ctx.stroke();

        // Gold contrast topstitching (Tex 105)
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1.6;
        ctx.setLineDash([4, 3]);

        // Waistband & J-Stitch Fly
        ctx.beginPath();
        ctx.moveTo(222, 68);
        ctx.lineTo(618, 68);
        ctx.moveTo(420, 68);
        ctx.lineTo(420, 198);
        ctx.quadraticCurveTo(420, 212, 442, 212);

        // Left & Right Scoop Pockets + Coin Pocket
        ctx.moveTo(222, 92);
        ctx.quadraticCurveTo(285, 145, 325, 82);
        ctx.moveTo(618, 92);
        ctx.quadraticCurveTo(555, 145, 515, 82);
        ctx.rect(528, 95, 54, 42);

        // Hem Chainstitch
        ctx.moveTo(210, hemY);
        ctx.lineTo(630, hemY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Copper Rivets & Shank Button
        ctx.fillStyle = '#d97706';
        [
          [325, 82],
          [515, 82],
          [528, 95],
          [582, 95],
        ].forEach(([rx, ry]) => {
          ctx.beginPath();
          ctx.arc(rx, ry, 3.2, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.beginPath();
        ctx.arc(430, 53, 6, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Trucker Jacket V-seams & Twin Chest Flap Pockets
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1.6;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        // Center placket
        ctx.moveTo(410, 40);
        ctx.lineTo(410, 485);
        ctx.moveTo(430, 40);
        ctx.lineTo(430, 485);
        // Chest yoke
        ctx.moveTo(265, 145);
        ctx.lineTo(575, 145);
        // V-taper seams
        ctx.moveTo(315, 145);
        ctx.lineTo(345, 460);
        ctx.moveTo(525, 145);
        ctx.lineTo(495, 460);
        // Chest flap pockets
        ctx.rect(295, 160, 82, 74);
        ctx.rect(463, 160, 82, 74);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      ctx.restore();
    };

    // Draw Left Side (Raw Unwashed Reference if split > 0)
    if (splitX > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, splitX, height);
      ctx.clip();
      renderDenimPass('raw');
      ctx.restore();
    }

    // Draw Right Side (Live Washed Finish)
    ctx.save();
    ctx.beginPath();
    ctx.rect(splitX, 0, width - splitX, height);
    ctx.clip();
    renderDenimPass('washed');
    ctx.restore();

    // Draw Split Divider Bar if compareSplitPct > 0 and < 100
    if (params.compareSplitPct > 0 && params.compareSplitPct < 100) {
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(splitX, 0);
      ctx.lineTo(splitX, height);
      ctx.stroke();

      // Handle pill
      ctx.fillStyle = '#18181b';
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(splitX - 52, 16, 104, 22, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('RAW ◄ | ► WASH', splitX, 30);
    }

    // Corner HUD Metadata Overlay
    ctx.fillStyle = 'rgba(9, 9, 11, 0.85)';
    ctx.strokeStyle = '#27272a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(14, height - 42, 275, 28, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#a1a1aa';
    ctx.font = '11px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(
      `SHADE: ${optical.indigoRetentionPct}% INDIGO | EIM: ${optical.estimatedEimScore} PTS`,
      24,
      height - 24
    );
  }, [params, optical]);

  const handleDownloadSnapshot = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `DenimIQ-Wash-Visualizer-${params.washPresetId}-${params.garmentType}.png`;
    a.click();
  };

  return (
    <div
      data-testid="interactive-wash-visualizer"
      className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 md:p-6 space-y-6 shadow-xl"
    >
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-zinc-950 border border-zinc-700 text-amber-400 text-[11px] font-mono font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            {lang === 'bn'
              ? 'ইন্টারঅ্যাক্টিভ ওয়াশ ভিজ্যুয়ালাইজার ও ফিনিশ সিমুলেটর'
              : 'INTERACTIVE WASH VISUALIZER & FINISH STUDIO'}
          </div>
          <h3 className="text-lg md:text-xl font-extrabold text-zinc-100">
            {lang === 'bn'
              ? 'ডেনিম ওয়াশ ফিনিশ, হুইস্কার, ব্লিচ ও শেড সিমুলেটর'
              : 'Real-Time Denim Wash Finish, Abrasion & Shade Visualizer'}
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            {lang === 'bn'
              ? 'স্টোন ওয়াশ, ব্লিচ, লেজার হুইস্কার, পিপি হাইলাইট ও টিন্ট প্যারামিটার পরিবর্তন করে চূড়ান্ত গার্মেন্টস আউটপুট, টিয়ার স্ট্রেংথ ও এফওবি (FOB) খরচ তাৎক্ষণিক দেখুন।'
              : 'Adjust stone abrasion, bleach lift, laser whiskers, PP spray, and tint cast parameters to visualize the final wash finish alongside live EIM and FOB metrics.'}
          </p>
        </div>

        {/* Garment Type Selector & Quick Actions */}
        <div className="flex flex-wrap items-center gap-2">
          {(
            [
              { id: 'jeans', en: '5-Pocket Jeans', bn: '৫-পকেট জিন্স' },
              { id: 'jacket', en: 'Trucker Jacket', bn: 'ট্রাকার জ্যাকেট' },
              { id: 'shorts', en: 'Denim Shorts', bn: 'ডেনিম শর্টস' },
              { id: 'shacket', en: 'Utility Shacket', bn: 'শ্যাকেট' },
            ] as { id: VisualizerGarmentType; en: string; bn: string }[]
          ).map((g) => (
            <button
              key={g.id}
              onClick={() => setParams((p) => ({ ...p, garmentType: g.id }))}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                params.garmentType === g.id
                  ? 'bg-amber-500 text-zinc-950 border-amber-400 font-bold'
                  : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-zinc-100'
              }`}
            >
              {lang === 'bn' ? g.bn : g.en}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Wash Recipe Preset Strip */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono uppercase text-zinc-400 font-bold">
            {lang === 'bn'
              ? '১. বেস ওয়াশ ফিনিশ প্রিসেট নির্বাচন করুন:'
              : '1. Select Base Wash Finish Preset:'}
          </span>
          <span className="text-[11px] font-mono text-amber-400">
            {lang === 'bn' ? '৮টি কমার্শিয়াল প্রিসেট' : '8 Commercial Presets'}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {WASH_TYPES.map((w) => {
            const active = params.washPresetId === w.id;
            return (
              <button
                key={w.id}
                onClick={() => applyPreset(w.id)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  active
                    ? 'bg-zinc-950 border-amber-500/80 ring-1 ring-amber-500/30'
                    : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="text-[10px] font-mono text-amber-400 truncate">{w.badge}</div>
                <div className="text-xs font-bold text-zinc-100 truncate mt-0.5">{w.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Studio Grid: Left Canvas Viewport (7 cols) | Right Parameter Controls (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Live Wash Canvas + Readout Strip */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-inner">
            {/* Top Viewport Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setParams((p) => ({ ...p, zoomMacro: !p.zoomMacro }))}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    params.zoomMacro
                      ? 'bg-amber-500 text-zinc-950 border-amber-400 font-bold'
                      : 'bg-zinc-950 text-zinc-300 border-zinc-700 hover:text-white'
                  }`}
                >
                  {params.zoomMacro ? (
                    <>
                      <ZoomOut className="w-3.5 h-3.5" />
                      <span>{lang === 'bn' ? '১x গার্মেন্ট ভিউ' : '1x Garment View'}</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>{lang === 'bn' ? '৪x ম্যাক্রো টুইল জুম' : '4x Macro Twill Zoom'}</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 bg-zinc-950 px-2.5 py-1 rounded-lg border border-zinc-800 text-xs">
                  <SplitSquareHorizontal className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] text-zinc-400">
                    {lang === 'bn' ? 'র (Raw) তুলনা:' : 'Raw Split:'}
                  </span>
                  <input
                    type="range"
                    aria-label="Raw vs Washed Comparison Split"
                    min={0}
                    max={85}
                    value={params.compareSplitPct}
                    onChange={(e) =>
                      setParams((p) => ({ ...p, compareSplitPct: Number(e.target.value) }))
                    }
                    className="w-20 accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => applyPreset(params.washPresetId)}
                  className="px-2.5 py-1 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 text-xs font-medium flex items-center gap-1 cursor-pointer"
                  title="Reset parameters to preset"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'রিসেট' : 'Reset'}</span>
                </button>
                <button
                  onClick={handleDownloadSnapshot}
                  className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'PNG ডাউনলোড' : 'Download Wash PNG'}</span>
                </button>
              </div>
            </div>

            {/* High-Resolution Canvas */}
            <canvas
              ref={canvasRef}
              width={840}
              height={520}
              className="w-full h-auto block"
            />
          </div>

          {/* Live Merchandiser KPI Readout Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-zinc-400">
                <Droplets className="w-3.5 h-3.5 text-sky-400" />
                {lang === 'bn' ? 'ইনডিগো শেড রিটেনশন' : 'Indigo Shade Retained'}
              </div>
              <div className="text-lg font-extrabold font-mono text-sky-400 mt-1">
                {optical.indigoRetentionPct}%
              </div>
              <span className="text-[10px] text-zinc-500">
                {optical.indigoRetentionPct > 70
                  ? 'Dark / Rinse Tone'
                  : optical.indigoRetentionPct > 40
                  ? 'Mid Vintage Tone'
                  : 'Light / Ice Bleach Tone'}
              </span>
            </div>

            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-zinc-400">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                {lang === 'bn' ? 'টিয়ার স্ট্রেংথ অবশিষ্ট' : 'Tear Strength Retained'}
              </div>
              <div
                className={`text-lg font-extrabold font-mono mt-1 ${
                  optical.tearStrengthRetentionPct < 70 ? 'text-rose-400' : 'text-emerald-400'
                }`}
              >
                {optical.tearStrengthRetentionPct}%
              </div>
              <span className="text-[10px] text-zinc-500">ASTM D1424 Standard</span>
            </div>

            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-zinc-400">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                {lang === 'bn' ? 'আনুমানিক ওয়াশ FOB' : 'Est. Wash FOB / Pc'}
              </div>
              <div className="text-lg font-extrabold font-mono text-emerald-400 mt-1">
                ${optical.estimatedWashFobUsd.toFixed(2)}
              </div>
              <span className="text-[10px] text-zinc-500">
                ${(optical.estimatedWashFobUsd * 12).toFixed(2)} / Dozen
              </span>
            </div>

            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-zinc-400">
                <Gauge className="w-3.5 h-3.5 text-amber-400" />
                {lang === 'bn' ? 'Jeanologia EIM স্কোর' : 'Jeanologia EIM Score'}
              </div>
              <div
                className={`text-lg font-extrabold font-mono mt-1 ${
                  optical.eimCategory.includes('Green')
                    ? 'text-emerald-400'
                    : optical.eimCategory.includes('Amber')
                    ? 'text-amber-400'
                    : 'text-rose-400'
                }`}
              >
                {optical.estimatedEimScore} pts
              </div>
              <span className="text-[10px] text-zinc-500">{optical.eimCategory}</span>
            </div>
          </div>
        </div>

        {/* Right: 6 Interactive Wash Engineering Sliders + Tint & Process Pipeline */}
        <div className="lg:col-span-5 bg-zinc-950 rounded-2xl border border-zinc-800 p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <h4 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-amber-400" />
              {lang === 'bn'
                ? '২. ওয়াশ রেসিপি ও ফিনিশ প্যারামিটার কন্ট্রোল'
                : '2. Wash Recipe & Finish Parameter Controls'}
            </h4>
            <span className="text-[10px] font-mono text-zinc-400">LIVE CANVAS</span>
          </div>

          <div className="space-y-3.5">
            {/* Slider 1: Stone & Enzyme Abrasion */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-300 font-medium">
                  {lang === 'bn'
                    ? 'স্টোন ও সেলুলেজ এনজাইম অ্যাব্রেশন (Pumice + Enzyme)'
                    : 'Pumice Stone & Cellulase Abrasion'}
                </span>
                <span className="font-mono font-bold text-amber-400">{params.stoneAbrasion}%</span>
              </div>
              <input
                type="range"
                aria-label="Pumice Stone and Cellulase Abrasion"
                min={0}
                max={100}
                value={params.stoneAbrasion}
                onChange={(e) =>
                  setParams((p) => ({ ...p, stoneAbrasion: Number(e.target.value) }))
                }
                className="w-full accent-amber-500 h-1.5 bg-zinc-900 rounded-lg cursor-pointer"
              />
            </div>

            {/* Slider 2: Bleach Shade Lift */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-300 font-medium">
                  {lang === 'bn'
                    ? 'হাইপোক্লোরাইট / ওজোন ব্লিচ ফেড (Bleach Lift)'
                    : 'Hypochlorite / Ozone Bleach Shade Lift'}
                </span>
                <span className="font-mono font-bold text-sky-400">{params.bleachIntensity}%</span>
              </div>
              <input
                type="range"
                aria-label="Bleach Shade Lift Intensity"
                min={0}
                max={100}
                value={params.bleachIntensity}
                onChange={(e) =>
                  setParams((p) => ({ ...p, bleachIntensity: Number(e.target.value) }))
                }
                className="w-full accent-sky-400 h-1.5 bg-zinc-900 rounded-lg cursor-pointer"
              />
            </div>

            {/* Slider 3: Laser / Hand Whiskers */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-300 font-medium">
                  {lang === 'bn'
                    ? 'লেজার ৩ডি হুইস্কার ও হানিকম্ব (3D Whiskers)'
                    : 'CO2 Laser 3D Whiskers & Honeycombs'}
                </span>
                <span className="font-mono font-bold text-amber-400">
                  {params.whiskerLaserIntensity}%
                </span>
              </div>
              <input
                type="range"
                aria-label="Laser 3D Whiskers Intensity"
                min={0}
                max={100}
                value={params.whiskerLaserIntensity}
                onChange={(e) =>
                  setParams((p) => ({ ...p, whiskerLaserIntensity: Number(e.target.value) }))
                }
                className="w-full accent-amber-500 h-1.5 bg-zinc-900 rounded-lg cursor-pointer"
              />
            </div>

            {/* Slider 4: PP Thigh Highlight */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-300 font-medium">
                  {lang === 'bn'
                    ? 'পিপি স্প্রে / থাই স্যান্ডিং হাইলাইট (PP Highlight)'
                    : 'PP Spray / Thigh Sanding Contrast'}
                </span>
                <span className="font-mono font-bold text-emerald-400">
                  {params.ppThighHighlight}%
                </span>
              </div>
              <input
                type="range"
                aria-label="PP Thigh Highlight Contrast"
                min={0}
                max={100}
                value={params.ppThighHighlight}
                onChange={(e) =>
                  setParams((p) => ({ ...p, ppThighHighlight: Number(e.target.value) }))
                }
                className="w-full accent-emerald-400 h-1.5 bg-zinc-900 rounded-lg cursor-pointer"
              />
            </div>

            {/* Slider 5: Acid / Snow Marble Effect */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-300 font-medium">
                  {lang === 'bn'
                    ? 'অ্যাসিড / স্নো ওয়াশ মার্বল ইফেক্ট (Acid Snow)'
                    : 'Acid / Snow Pumice Marbling'}
                </span>
                <span className="font-mono font-bold text-sky-400">{params.acidMarbleEffect}%</span>
              </div>
              <input
                type="range"
                aria-label="Acid Snow Marble Intensity"
                min={0}
                max={100}
                value={params.acidMarbleEffect}
                onChange={(e) =>
                  setParams((p) => ({ ...p, acidMarbleEffect: Number(e.target.value) }))
                }
                className="w-full accent-sky-400 h-1.5 bg-zinc-900 rounded-lg cursor-pointer"
              />
            </div>

            {/* Slider 6: Ring-Spun Slub Character */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-300 font-medium">
                  {lang === 'bn'
                    ? 'রিং-স্পান স্লাব টেক্সচার (Ring Slub Grain)'
                    : 'Ring-Spun Slub & Twill Grain'}
                </span>
                <span className="font-mono font-bold text-zinc-300">{params.slubTexture}%</span>
              </div>
              <input
                type="range"
                aria-label="Ring Spun Slub Texture"
                min={0}
                max={100}
                value={params.slubTexture}
                onChange={(e) =>
                  setParams((p) => ({ ...p, slubTexture: Number(e.target.value) }))
                }
                className="w-full accent-zinc-400 h-1.5 bg-zinc-900 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Tint / Overdye Cast Selector */}
          <div className="pt-2 border-t border-zinc-800 space-y-2">
            <span className="text-[11px] font-mono uppercase text-zinc-400 font-bold block">
              {lang === 'bn' ? 'টিন্ট ও ওভারডাই কাস্ট (Tint Cast):' : 'Tint / Overdye Cast:'}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {(
                [
                  { id: 'pure-indigo', label: 'Pure Indigo' },
                  { id: 'vintage-dirty', label: 'Dirty Khaki Tint' },
                  { id: 'ice-cyan', label: 'Ice Cyan Cast' },
                  { id: 'sulfur-grey', label: 'Sulfur Grey' },
                  { id: 'archive-green', label: 'Archive Olive' },
                ] as { id: VisualizerTintCast; label: string }[]
              ).map((tc) => (
                <button
                  key={tc.id}
                  onClick={() => setParams((p) => ({ ...p, tintCast: tc.id }))}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition-all cursor-pointer ${
                    params.tintCast === tc.id
                      ? 'bg-zinc-100 text-zinc-950 border-zinc-100 font-bold'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                  }`}
                >
                  {tc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Process Sequence Tags */}
          <div className="pt-2 border-t border-zinc-800 space-y-1.5">
            <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase text-emerald-400 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {lang === 'bn'
                ? 'সক্রিয় লন্ড্রি প্রসেস ফ্লো:'
                : 'Active Laundry Process Sequence:'}
            </div>
            <div className="flex flex-wrap gap-1">
              {optical.activeProcessTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-zinc-900 text-zinc-200 border border-zinc-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Risk Alert Banner if triggered */}
          {(optical.riskAlertEn || optical.riskAlertBn) && (
            <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/40 text-xs text-rose-200 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{lang === 'bn' ? optical.riskAlertBn : optical.riskAlertEn}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
