import React, { useState } from 'react';
import { ArrowDown, Maximize2, Sparkles, BookOpen, Clock, Key, Compass } from 'lucide-react';
import { Artwork } from '../data/portfolioData';

interface HeroSectionProps {
  isDarkMode: boolean;
  heroArtwork: Artwork;
  onSelectArtwork: (artwork: Artwork) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isDarkMode,
  heroArtwork,
  onSelectArtwork,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Decorative ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #822B38 0%, #C49B58 45%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            {/* Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs md:text-sm tracking-[0.2em] uppercase font-medium text-[#8C6D46] dark:text-[#C49B58]">
              <span>Atelier Yuai</span>
              <span aria-hidden="true">·</span>
              <span>Antique Storybook & Concept Art</span>
              <span aria-hidden="true">·</span>
              <span>2026 Edition</span>
            </div>

            {/* Display Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.18] font-bold tracking-tight text-[#231B17] dark:text-[#F3EDE2]"
              style={{
                fontFamily: "'Cormorant Garamond', 'Shippori Mincho', serif",
                textWrap: 'balance',
              }}
            >
              物語の扉を開く、<br />
              <span className="italic font-normal text-[#822B38] dark:text-[#E27D8C]">
                耽美と幻想
              </span>
              のアンティーク世界。
            </h1>

            {/* Subtitle / Lead Prose */}
            <p className="text-base sm:text-lg leading-relaxed text-[#5C4F46] dark:text-[#B8ACA2] max-w-xl font-serif-antique">
              ヴィクトリア朝の気品と、白兎の給仕官が守る不思議の国の扉。
              ペン画の精緻な線条、零れ落ちる薔薇の紅茶、時を刻む懐中時計。
              日常の裂け目から静かに立ち現れる、クラシカルで洗練されたダークファンタジー・ポートフォリオ。
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#gallery"
                className="px-7 py-3.5 text-sm font-semibold tracking-wider text-white bg-[#822B38] hover:bg-[#6B1F2A] rounded-md transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
              >
                <span>Explore Works · 作品鑑賞</span>
                <ArrowDown size={15} />
              </a>

              <a
                href="#grimoire"
                className="px-6 py-3.5 text-sm font-medium tracking-wide border border-[#C49B58]/60 text-[#2C2420] dark:text-[#E8DFD5] hover:bg-[#C49B58]/10 rounded-md transition-colors flex items-center gap-2 font-serif-antique"
              >
                <BookOpen size={16} className="text-[#8C6D46] dark:text-[#C49B58]" />
                <span>Read Grimoire · 挿話手稿</span>
              </a>
            </div>

            {/* Subtle Motif Badges (Clean unboxed inline list) */}
            <div className="pt-4 border-t border-[#E6DEC9] dark:border-[#2C2621] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#7A6B5F] dark:text-[#9E9084]">
              <span className="flex items-center gap-1.5">
                <Key size={13} className="text-[#8C6D46]" /> 鍵と封蝋
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-[#8C6D46]" /> 懐中時計
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Compass size={13} className="text-[#8C6D46]" /> 天球図
              </span>
              <span aria-hidden="true">·</span>
              <span>手漉き羊皮紙</span>
            </div>
          </div>

          {/* Right Column: Hero Artwork Showcase */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div
              className={`relative max-w-md lg:max-w-lg w-full group cursor-pointer p-3 sm:p-4 rounded-xl border transition-all duration-300 ${
                isDarkMode
                  ? 'bg-[#1C1815] border-[#382F28] shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
                  : 'bg-[#F4EFE2] border-[#DED4BC] shadow-[0_20px_50px_rgba(78,61,48,0.12)]'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => onSelectArtwork(heroArtwork)}
            >
              {/* Antique Filigree Corner Accents */}
              <div className="absolute top-2 left-2 text-[#C49B58] opacity-70 pointer-events-none select-none text-xs">
                ╔
              </div>
              <div className="absolute top-2 right-2 text-[#C49B58] opacity-70 pointer-events-none select-none text-xs">
                ╗
              </div>
              <div className="absolute bottom-2 left-2 text-[#C49B58] opacity-70 pointer-events-none select-none text-xs">
                ╚
              </div>
              <div className="absolute bottom-2 right-2 text-[#C49B58] opacity-70 pointer-events-none select-none text-xs">
                ╝
              </div>

              {/* Artwork Container */}
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-[#221C18]">
                <img
                  src={heroArtwork.image}
                  alt={heroArtwork.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay hint */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#14100D]/90 via-[#14100D]/30 to-transparent transition-opacity duration-300 flex flex-col justify-end p-6 ${
                    isHovered ? 'opacity-100' : 'opacity-0 sm:opacity-75'
                  }`}
                >
                  <div className="text-white">
                    <div className="text-xs uppercase tracking-widest text-[#E6C98A] font-serif-antique">
                      Featured Monograph · 2026
                    </div>
                    <h3
                      className="text-xl sm:text-2xl font-bold mt-1 text-[#FFF8ED]"
                      style={{ fontFamily: "'Cormorant Garamond', 'Shippori Mincho', serif" }}
                    >
                      {heroArtwork.japaneseTitle}
                    </h3>
                    <div className="text-xs text-[#D1C3B4] mt-1 font-serif-antique">
                      {heroArtwork.title}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-[#E6C98A]">
                    <span className="flex items-center gap-1.5">
                      <Maximize2 size={13} /> クリックで拡大鑑賞・解説
                    </span>
                    <span className="font-serif-antique tracking-widest">Yuai1228.</span>
                  </div>
                </div>
              </div>

              {/* Bottom Frame Caption */}
              <div className="mt-3 px-1 flex items-center justify-between text-xs text-[#6F6054] dark:text-[#A89A8E]">
                <span className="font-serif-antique font-medium">
                  Plate I: {heroArtwork.japaneseTitle}
                </span>
                <span className="font-mono text-[11px] tabular-nums text-[#8C6D46] dark:text-[#C49B58]">
                  420 × 594 mm · Ink & Wash
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Editorial Proof Strip below the split */}
        <div
          className={`mt-16 md:mt-20 py-8 px-6 md:px-10 rounded-xl border ${
            isDarkMode
              ? 'bg-[#181512] border-[#2E2620]'
              : 'bg-[#F5EFE1] border-[#E2D8BF]'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#DED3BA] dark:divide-[#2E2620]">
            <div className="pt-4 md:pt-0 md:px-4 first:pt-0 first:px-0">
              <div
                className="text-2xl sm:text-3xl font-bold text-[#822B38] dark:text-[#E27D8C] font-mono tabular-nums"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                10+ Years
              </div>
              <div className="text-xs sm:text-sm font-medium mt-1 text-[#2C2420] dark:text-[#EDE4DA] font-serif-antique">
                Antique Aesthetic Craft
              </div>
              <div className="text-[11px] text-[#78695C] dark:text-[#9A8B7E] mt-0.5">
                古典文学・絵本挿絵の追求
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <div
                className="text-2xl sm:text-3xl font-bold text-[#8C6D46] dark:text-[#C49B58] font-mono tabular-nums"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                24 Editions
              </div>
              <div className="text-xs sm:text-sm font-medium mt-1 text-[#2C2420] dark:text-[#EDE4DA] font-serif-antique">
                Book Covers & Publications
              </div>
              <div className="text-[11px] text-[#78695C] dark:text-[#9A8B7E] mt-0.5">
                書籍装丁・文芸誌表紙
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <div
                className="text-2xl sm:text-3xl font-bold text-[#822B38] dark:text-[#E27D8C] font-mono tabular-nums"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                4 Solo Shows
              </div>
              <div className="text-xs sm:text-sm font-medium mt-1 text-[#2C2420] dark:text-[#EDE4DA] font-serif-antique">
                Ginza · Kyoto · London
              </div>
              <div className="text-[11px] text-[#78695C] dark:text-[#9A8B7E] mt-0.5">
                個展・国際企画展歴
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <div
                className="text-2xl sm:text-3xl font-bold text-[#8C6D46] dark:text-[#C49B58] font-mono tabular-nums"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                100% Traditional
              </div>
              <div className="text-xs sm:text-sm font-medium mt-1 text-[#2C2420] dark:text-[#EDE4DA] font-serif-antique">
                Mineral Pigment & Gold Leaf
              </div>
              <div className="text-[11px] text-[#78695C] dark:text-[#9A8B7E] mt-0.5">
                天然顔料・本金箔の質感
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
