import React, { useState } from 'react';
import { Sparkles, ZoomIn, Eye } from 'lucide-react';

interface WashTexturePreviewProps {
  washId: string;
  washName: string;
  targetShade: string;
  isDetailed?: boolean;
}

export const WashTexturePreview: React.FC<WashTexturePreviewProps> = ({
  washId,
  washName,
  targetShade,
  isDetailed = false,
}) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Return stylized SVG texture representation with authentic denim weave, whiskers, and stone wash effects
  const renderTextureSvg = () => {
    switch (washId) {
      case 'raw-rigid':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <defs>
              <pattern id="raw-twill" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="6" stroke="#0a1120" strokeWidth="2.5" />
                <line x1="3" y1="0" x2="3" y2="6" stroke="#172554" strokeWidth="1.8" />
                <circle cx="2" cy="2" r="0.4" fill="#3b82f6" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#080e1a" />
            <rect width="100%" height="100%" fill="url(#raw-twill)" />
            {/* Starch Sheen Gradient */}
            <rect width="100%" height="100%" fill="url(#sheen-grad)" opacity="0.15" />
            <defs>
              <linearGradient id="sheen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="transparent" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'rinse-wash':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <defs>
              <pattern id="rinse-twill" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="6" stroke="#0f172a" strokeWidth="2" />
                <line x1="3" y1="0" x2="3" y2="6" stroke="#1d4ed8" strokeWidth="2" />
                <circle cx="3" cy="3" r="0.5" fill="#93c5fd" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#172554" />
            <rect width="100%" height="100%" fill="url(#rinse-twill)" />
            <radialGradient id="rinse-soft" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.6" />
            </radialGradient>
            <rect width="100%" height="100%" fill="url(#rinse-soft)" />
          </svg>
        );

      case 'mid-stone-enzyme':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <defs>
              <pattern id="stone-twill" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#1e3a8a" strokeWidth="2.5" />
                <line x1="4" y1="0" x2="4" y2="8" stroke="#60a5fa" strokeWidth="2.5" />
                {/* Exposed white core speckles (salt & pepper) */}
                <circle cx="2" cy="3" r="0.8" fill="#f8fafc" opacity="0.85" />
                <circle cx="6" cy="7" r="0.7" fill="#f1f5f9" opacity="0.9" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#1e40af" />
            <rect width="100%" height="100%" fill="url(#stone-twill)" />
            {/* Whisker Fades */}
            <path d="M 0,60 Q 150,110 400,70" stroke="#93c5fd" strokeWidth="16" opacity="0.45" filter="blur(6px)" />
            <path d="M 0,130 Q 180,180 400,140" stroke="#bae6fd" strokeWidth="22" opacity="0.5" filter="blur(8px)" />
            <path d="M 0,190 Q 200,230 400,195" stroke="#bfdbfe" strokeWidth="18" opacity="0.4" filter="blur(6px)" />
          </svg>
        );

      case 'bleach-ice-wash':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <defs>
              <pattern id="bleach-twill" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#93c5fd" strokeWidth="2" />
                <line x1="4" y1="0" x2="4" y2="8" stroke="#ffffff" strokeWidth="3" />
                <circle cx="2" cy="2" r="1.0" fill="#ffffff" opacity="0.9" />
                <circle cx="6" cy="6" r="0.9" fill="#e0f2fe" opacity="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#bae6fd" />
            <rect width="100%" height="100%" fill="url(#bleach-twill)" />
            {/* Bright Bleach Highlights */}
            <ellipse cx="200" cy="120" rx="160" ry="80" fill="#ffffff" opacity="0.5" filter="blur(16px)" />
            <path d="M 0,40 Q 200,80 400,45" stroke="#ffffff" strokeWidth="24" opacity="0.75" filter="blur(10px)" />
          </svg>
        );

      case 'acid-snow-wash':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <defs>
              <radialGradient id="marble-blob" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#cbd5e1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="#1e3a8a" />
            {/* Randomized pumice strike marble patches */}
            <circle cx="60" cy="50" r="45" fill="url(#marble-blob)" filter="blur(3px)" />
            <circle cx="180" cy="70" r="55" fill="url(#marble-blob)" filter="blur(4px)" />
            <circle cx="320" cy="60" r="50" fill="url(#marble-blob)" filter="blur(3px)" />
            <circle cx="110" cy="170" r="60" fill="url(#marble-blob)" filter="blur(5px)" />
            <circle cx="260" cy="180" r="65" fill="url(#marble-blob)" filter="blur(4px)" />
            <circle cx="370" cy="160" r="40" fill="url(#marble-blob)" filter="blur(3px)" />
            <circle cx="210" cy="120" r="35" fill="url(#marble-blob)" filter="blur(2px)" />
            {/* Fine texture overlay */}
            <path d="M 30,30 Q 120,90 220,40 T 380,100" stroke="#ffffff" strokeWidth="4" opacity="0.6" filter="blur(2px)" fill="none" />
          </svg>
        );

      case 'vintage-dirty-wash':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <defs>
              <pattern id="dirty-twill" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#1c1917" strokeWidth="2.5" />
                <line x1="4" y1="0" x2="4" y2="8" stroke="#78716c" strokeWidth="2.2" />
                <circle cx="2" cy="4" r="0.8" fill="#d97706" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#292524" />
            <rect width="100%" height="100%" fill="url(#dirty-twill)" />
            {/* Khaki / Tea Stain Wash Tint */}
            <rect width="100%" height="100%" fill="#b45309" opacity="0.22" mix-blend-mode="color" />
            <path d="M 0,70 Q 180,120 400,80" stroke="#f59e0b" strokeWidth="18" opacity="0.35" filter="blur(8px)" />
            <path d="M 0,150 Q 210,190 400,160" stroke="#d97706" strokeWidth="22" opacity="0.3" filter="blur(10px)" />
          </svg>
        );

      case 'eco-laser-ozone':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <defs>
              <pattern id="laser-twill" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="6" stroke="#0f766e" strokeWidth="2" />
                <line x1="3" y1="0" x2="3" y2="6" stroke="#14b8a6" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#115e59" />
            <rect width="100%" height="100%" fill="url(#laser-twill)" />
            {/* Precision Laser Vector Whiskers */}
            <path d="M 30,60 L 160,85 L 370,65" stroke="#ccfbf1" strokeWidth="7" opacity="0.8" filter="blur(2px)" fill="none" />
            <path d="M 40,110 L 190,140 L 360,115" stroke="#ccfbf1" strokeWidth="9" opacity="0.85" filter="blur(2px)" fill="none" />
            <path d="M 60,160 L 210,190 L 340,168" stroke="#f0fdfa" strokeWidth="6" opacity="0.75" filter="blur(2px)" fill="none" />
            <ellipse cx="200" cy="130" rx="140" ry="60" fill="#99f6e4" opacity="0.25" filter="blur(12px)" />
          </svg>
        );

      case 'black-to-grey':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <defs>
              <pattern id="black-twill" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="7" stroke="#18181b" strokeWidth="2.5" />
                <line x1="3.5" y1="0" x2="3.5" y2="7" stroke="#71717a" strokeWidth="2" />
                <circle cx="2" cy="3" r="0.7" fill="#e4e4e7" opacity="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#27272a" />
            <rect width="100%" height="100%" fill="url(#black-twill)" />
            {/* Charcoal & Pepper Highs */}
            <ellipse cx="200" cy="120" rx="150" ry="70" fill="#d4d4d8" opacity="0.35" filter="blur(14px)" />
            <path d="M 0,80 Q 200,130 400,90" stroke="#f4f4f5" strokeWidth="16" opacity="0.4" filter="blur(8px)" />
          </svg>
        );

      default:
        return (
          <div className="w-full h-full bg-gradient-to-r from-indigo-900 to-slate-900 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-indigo-400" />
          </div>
        );
    }
  };

  return (
    <div className="relative group overflow-hidden rounded-xl border border-slate-700/80 shadow-md">
      {/* Texture Surface */}
      <div className={`relative w-full ${isDetailed ? 'h-44' : 'h-32'} transition-transform duration-300 ${isZoomed ? 'scale-125' : 'scale-100'}`}>
        {renderTextureSvg()}

        {/* Micro-weave grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.6px,transparent_0.6px)] [background-size:6px_6px] opacity-15 pointer-events-none" />
      </div>

      {/* Overlay Badge & Zoom Button */}
      <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5">
        <span className="bg-black/70 backdrop-blur-md text-[10px] font-mono font-bold text-white px-2 py-0.5 rounded-sm border border-white/20">
          {targetShade}
        </span>
      </div>

      <div className="absolute bottom-2 right-2 z-10">
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="p-1.5 rounded-lg bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer"
          title={isZoomed ? 'Zoom Out' : 'Zoom In Texture'}
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="absolute bottom-2 left-2 z-10 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-sm border border-slate-800 text-[10px] font-mono text-cyan-300">
        Authentic Weave Swatch
      </div>
    </div>
  );
};
