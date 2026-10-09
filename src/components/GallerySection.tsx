import React, { useState } from 'react';
import { Artwork } from '../data/portfolioData';
import { Maximize2, Compass, Eye } from 'lucide-react';

interface GallerySectionProps {
  isDarkMode: boolean;
  artworks: Artwork[];
  onSelectArtwork: (artwork: Artwork) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  isDarkMode,
  artworks,
  onSelectArtwork,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredArtworks =
    selectedCategory === 'all'
      ? artworks
      : artworks.filter((item) => item.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Works · すべて' },
    { id: 'character', label: 'Fairy Tale & Character · 童話・給仕官' },
    { id: 'apothecary', label: 'Cabinet & Flora · 調薬棚・標本' },
    { id: 'still-life', label: 'Still Life & Arcana · 静物・タロット' },
    { id: 'celestial', label: 'Celestial & Lore · 星辰・天球図' },
  ];

  return (
    <section id="gallery" className="py-20 border-t border-[#E6DEC9] dark:border-[#2C2621]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
              Collection Archives · 01
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-2 text-[#231B17] dark:text-[#F3EDE2]"
              style={{ fontFamily: "'Cormorant Garamond', 'Shippori Mincho', serif" }}
            >
              Selected Plates · 厳選装画録
            </h2>
            <p className="text-sm sm:text-base text-[#6F6054] dark:text-[#A89A8E] mt-2 max-w-xl font-serif-antique">
              時を止めた書斎の道具、鍵の記憶、星屑のエリクサー。
              一枚一枚の羊皮紙に宿る物語を、手稿を開くようにお愉しみください。
            </p>
          </div>

          {/* Interactive Filter Controls (Functional segmented buttons) */}
          <div
            className={`p-1.5 rounded-lg border flex flex-wrap gap-1 ${
              isDarkMode
                ? 'bg-[#181512] border-[#332A24]'
                : 'bg-[#F2ECE0] border-[#DDD3BC]'
            }`}
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#822B38] text-white shadow-sm'
                      : 'text-[#655549] dark:text-[#B0A294] hover:text-[#231B17] dark:hover:text-[#F3EDE2]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento & Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredArtworks.map((artwork, idx) => (
            <article
              key={artwork.id}
              onClick={() => onSelectArtwork(artwork)}
              className={`group cursor-pointer rounded-xl border p-4 sm:p-5 transition-all duration-300 ornate-card flex flex-col justify-between ${
                isDarkMode
                  ? 'bg-[#1B1714] border-[#382F28] hover:border-[#C49B58]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]'
                  : 'bg-[#FAF6EC] border-[#E3D9C3] hover:border-[#8C6D46]/40 hover:shadow-[0_15px_35px_rgba(68,52,41,0.08)]'
              }`}
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-[#221C18]">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Scrim Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5 text-white">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-[#E6C98A] font-serif-antique">
                      {artwork.categoryLabel}
                    </span>
                    <p className="text-sm font-serif-antique text-[#EFE4D6]">
                      {artwork.dimensions} · {artwork.year}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-full bg-white/10 backdrop-blur-md text-[#E6C98A] border border-white/20">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>

              {/* Text Information & Metadata */}
              <div className="mt-5 space-y-3">
                {/* Clean unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-[#8C6D46] dark:text-[#C49B58] font-serif-antique">
                  <span>{artwork.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{artwork.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{artwork.dimensions}</span>
                </div>

                {/* Primary Titles */}
                <div>
                  <h3
                    className="text-2xl font-bold text-[#231B17] dark:text-[#F3EDE2] group-hover:text-[#822B38] dark:group-hover:text-[#E27D8C] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', 'Shippori Mincho', serif" }}
                  >
                    {artwork.japaneseTitle}
                  </h3>
                  <div className="text-sm text-[#736357] dark:text-[#A6978A] font-serif-antique mt-0.5">
                    {artwork.title}
                  </div>
                </div>

                {/* Story Synopsis */}
                <p className="text-sm leading-relaxed text-[#5C4F46] dark:text-[#B5A89E] font-serif-antique line-clamp-2">
                  {artwork.storySynopsis}
                </p>

                {/* Motifs (Clean unboxed text with bullets) */}
                <div className="pt-3 border-t border-[#E6DEC9] dark:border-[#2C2621] flex flex-wrap items-center gap-x-2 text-xs text-[#7F7064] dark:text-[#9A8B7E]">
                  <span className="text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
                    Motifs:
                  </span>
                  {artwork.motifs.map((motif, mIdx) => (
                    <React.Fragment key={motif}>
                      <span>{motif}</span>
                      {mIdx < artwork.motifs.length - 1 && <span aria-hidden="true">/</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
