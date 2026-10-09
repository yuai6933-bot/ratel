import React from 'react';
import { ARTIST_INFO } from '../data/portfolioData';
import { Feather, Palette, Award, Compass, MapPin } from 'lucide-react';

interface AtelierSectionProps {
  isDarkMode: boolean;
}

export const AtelierSection: React.FC<AtelierSectionProps> = ({ isDarkMode }) => {
  return (
    <section id="atelier" className="py-20 border-t border-[#E6DEC9] dark:border-[#2C2621]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
            Artist & Philosophy · 03
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2 text-[#231B17] dark:text-[#F3EDE2]"
            style={{ fontFamily: "'Cormorant Garamond', 'Shippori Mincho', serif" }}
          >
            The Atelier & Lore · 画室と技法録
          </h2>
          <p className="text-sm sm:text-base text-[#6F6054] dark:text-[#A89A8E] mt-2 font-serif-antique">
            古書のインクの匂い、手漉き紙の繊維、静止した時間の標本。
            画家 Yuai の制作理念と、アトリエで紡がれる道具の記録。
          </p>
        </div>

        {/* 2-Column Split: Artist Profile & Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Portrait & Studio Vignette */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              className={`p-4 rounded-xl border max-w-md w-full shadow-lg ${
                isDarkMode
                  ? 'bg-[#191512] border-[#362D25]'
                  : 'bg-[#F6F0E3] border-[#E0D5BD]'
              }`}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square bg-[#1A1613]">
                <img
                  src={ARTIST_INFO.avatarImage}
                  alt={ARTIST_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <div className="text-xs tracking-widest text-[#E6C98A] font-serif-antique">
                      Atelier Desk · Tokyo Studio
                    </div>
                    <div
                      className="text-2xl font-bold tracking-wider mt-0.5"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {ARTIST_INFO.signature}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 px-1 flex items-center justify-between text-xs text-[#7A6B5F] dark:text-[#A6978A] font-serif-antique">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#8C6D46]" /> {ARTIST_INFO.location}
                </span>
                <span>Traditional & Digital Atelier</span>
              </div>
            </div>
          </div>

          {/* Right Column: Artist Bio & Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
                Concept Artist & Illustrator
              </div>
              <h3
                className="text-3xl font-bold text-[#231B17] dark:text-[#F3EDE2] mt-1"
                style={{ fontFamily: "'Cormorant Garamond', 'Shippori Mincho', serif" }}
              >
                {ARTIST_INFO.name} · ユアイ
              </h3>
              <div className="text-sm text-[#736357] dark:text-[#A6978A] font-serif-antique mt-1">
                {ARTIST_INFO.japaneseTitle}
              </div>
            </div>

            {/* Statement Paragraph */}
            <p className="text-base leading-relaxed text-[#4A3E35] dark:text-[#C4B7AC] font-serif-antique">
              {ARTIST_INFO.statement}
            </p>

            {/* Specialties List */}
            <div className="space-y-3 pt-3">
              <span className="text-xs uppercase tracking-wider text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
                Core Domains · 主な制作領域
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ARTIST_INFO.specialties.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className={`p-3.5 rounded-lg border text-xs font-serif-antique leading-relaxed ${
                      isDarkMode
                        ? 'bg-[#181512] border-[#2E2620] text-[#D8CCC0]'
                        : 'bg-[#F7F2E6] border-[#E4DAC3] text-[#4A3E35]'
                    }`}
                  >
                    <span className="text-[#822B38] mr-2">✦</span>
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools and Materials Grid */}
        <div className="mt-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique mb-4">
            Materials of the Study · 画材と支持体
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARTIST_INFO.toolsAndMaterials.map((tm, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border space-y-2 ${
                  isDarkMode
                    ? 'bg-[#191512] border-[#2E2620]'
                    : 'bg-[#FAF6EC] border-[#E2D8BF]'
                }`}
              >
                <div className="text-xs uppercase tracking-wider text-[#822B38] dark:text-[#E27D8C] font-semibold font-serif-antique">
                  {tm.category}
                </div>
                <div className="text-xs leading-relaxed text-[#5C4F46] dark:text-[#B5A89E] font-serif-antique">
                  {tm.items}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exhibitions Timeline */}
        <div id="exhibitions" className="mt-20 pt-16 border-t border-[#E6DEC9] dark:border-[#2C2621]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
                History & Honors · 04
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold mt-1 text-[#231B17] dark:text-[#F3EDE2]"
                style={{ fontFamily: "'Cormorant Garamond', 'Shippori Mincho', serif" }}
              >
                Selected Exhibitions · 展示・個展歴
              </h3>
            </div>
            <div className="text-xs text-[#7A6B5F] dark:text-[#9A8B7E] font-serif-antique">
              Tokyo · Kyoto · London
            </div>
          </div>

          <div
            className={`rounded-xl border divide-y ${
              isDarkMode
                ? 'bg-[#181512] border-[#2E2620] divide-[#2E2620]'
                : 'bg-[#FAF6EC] border-[#E3D8BF] divide-[#E3D8BF]'
            }`}
          >
            {ARTIST_INFO.exhibitions.map((ex, exIdx) => (
              <div
                key={exIdx}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <span className="text-lg font-bold font-mono tabular-nums text-[#822B38] dark:text-[#E27D8C] shrink-0">
                    {ex.year}
                  </span>
                  <div>
                    <h4
                      className="text-base sm:text-lg font-bold text-[#231B17] dark:text-[#F3EDE2]"
                      style={{ fontFamily: "'Cormorant Garamond', 'Shippori Mincho', serif" }}
                    >
                      {ex.title}
                    </h4>
                    <p className="text-xs text-[#736357] dark:text-[#A6978A] font-serif-antique mt-0.5">
                      {ex.venue}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-[#8C6D46] dark:text-[#C49B58] font-serif-antique shrink-0 sm:text-right">
                  Solo / Featured
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
