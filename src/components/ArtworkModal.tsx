import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Feather } from 'lucide-react';
import { Artwork } from '../data/portfolioData';

interface ArtworkModalProps {
  artwork: Artwork | null;
  allArtworks: Artwork[];
  isDarkMode: boolean;
  onClose: () => void;
  onSelectArtwork: (artwork: Artwork) => void;
  onInquireArtwork: (artwork: Artwork) => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({
  artwork,
  allArtworks,
  isDarkMode,
  onClose,
  onSelectArtwork,
  onInquireArtwork,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Keyboard navigation & lock body scroll
  useEffect(() => {
    if (!artwork) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        navigatePrev();
      } else if (e.key === 'ArrowRight') {
        navigateNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [artwork]);

  // Reset zoom on artwork change
  useEffect(() => {
    setZoomLevel(1);
  }, [artwork?.id]);

  if (!artwork) return null;

  const currentIndex = allArtworks.findIndex((item) => item.id === artwork.id);

  const navigatePrev = () => {
    const prevIndex = (currentIndex - 1 + allArtworks.length) % allArtworks.length;
    onSelectArtwork(allArtworks[prevIndex]);
  };

  const navigateNext = () => {
    const nextIndex = (currentIndex + 1) % allArtworks.length;
    onSelectArtwork(allArtworks[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-xl border flex flex-col lg:flex-row shadow-2xl ${
          isDarkMode
            ? 'bg-[#181412] border-[#382F28] text-[#E8DFD5]'
            : 'bg-[#F9F5EC] border-[#DDD2BA] text-[#2C2420]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-[#822B38] transition-colors"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* Left Side: High-Resolution Viewer with Controls */}
        <div className="relative lg:w-7/12 bg-[#120F0D] flex flex-col items-center justify-center min-h-[380px] lg:min-h-[560px] overflow-hidden p-4 select-none">
          {/* Main Artwork Image */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <img
              src={artwork.image}
              alt={artwork.title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto max-w-full object-contain rounded transition-transform duration-300"
              style={{ transform: `scale(${zoomLevel})` }}
            />
          </div>

          {/* Viewer Floating Controls */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white text-xs">
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
              className="p-1 hover:text-[#C49B58] transition-colors"
              title="Zoom Out"
            >
              <ZoomOut size={16} />
            </button>
            <span className="font-mono tabular-nums px-1 text-[11px] text-[#D4C3B2]">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
              className="p-1 hover:text-[#C49B58] transition-colors"
              title="Zoom In"
            >
              <ZoomIn size={16} />
            </button>
            <div className="w-[1px] h-3 bg-white/20 mx-1" />
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1 hover:text-[#C49B58] transition-colors text-[11px] flex items-center gap-1"
              title="Reset"
            >
              <RotateCcw size={14} />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>

          {/* Previous / Next Arrow Controls */}
          <button
            onClick={navigatePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous artwork"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={navigateNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-white/20 transition-colors"
            aria-label="Next artwork"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Right Side: Curatorial Lore, Medium & Specifications */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
                <span>{artwork.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{artwork.year}</span>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold mt-2 text-[#231B17] dark:text-[#F3EDE2]"
                style={{ fontFamily: "'Cormorant Garamond', 'Shippori Mincho', serif" }}
              >
                {artwork.japaneseTitle}
              </h2>
              <div className="text-sm text-[#736357] dark:text-[#A6978A] font-serif-antique mt-1">
                {artwork.title}
              </div>
            </div>

            {/* Curatorial Story Lore */}
            <div className="space-y-2">
              <h4 className="text-xs tracking-wider uppercase text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
                Story Narrative · 物語手記
              </h4>
              <p className="text-sm leading-relaxed text-[#5C4F46] dark:text-[#B5A89E] font-serif-antique bg-[#EDE6D4]/50 dark:bg-[#201C18] p-4 rounded-lg border border-[#E0D5BD] dark:border-[#2C241E]">
                {artwork.storySynopsis}
              </p>
            </div>

            {/* Specifications Matrix */}
            <div className="space-y-3 text-xs border-t border-b border-[#E6DEC9] dark:border-[#2C2621] py-4">
              <div className="grid grid-cols-3 gap-2">
                <span className="text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
                  Technique:
                </span>
                <span className="col-span-2 text-[#4A3E36] dark:text-[#C8BCB0]">
                  {artwork.medium}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
                  Sheet Size:
                </span>
                <span className="col-span-2 text-[#4A3E36] dark:text-[#C8BCB0] font-mono tabular-nums">
                  {artwork.dimensions}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
                  Exhibition:
                </span>
                <span className="col-span-2 text-[#4A3E36] dark:text-[#C8BCB0]">
                  {artwork.exhibition}
                </span>
              </div>
            </div>

            {/* Motifs List */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
                Motifs & Symbols
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#5C4F46] dark:text-[#A89A8E]">
                {artwork.motifs.map((motif, idx) => (
                  <span
                    key={motif}
                    className="px-2.5 py-1 rounded bg-[#EAE2CE]/70 dark:bg-[#221C18] border border-[#DDD3BC] dark:border-[#332A24]"
                  >
                    {motif}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action to Inquire or Commission similar */}
          <div className="pt-6 mt-6 border-t border-[#E6DEC9] dark:border-[#2C2621] flex items-center justify-between gap-4">
            <div className="text-xs text-[#8C6D46] dark:text-[#A89A8E] font-serif-antique">
              Plate {currentIndex + 1} of {allArtworks.length}
            </div>
            <button
              onClick={() => {
                onInquireArtwork(artwork);
                onClose();
              }}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#822B38] hover:bg-[#681E29] rounded-md transition-colors flex items-center gap-2"
            >
              <Feather size={14} />
              <span>Inquire This Motif · この作品について相談</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
