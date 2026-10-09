import React, { useState } from 'react';
import { GRIMOIRE_PAGES, GrimoirePage } from '../data/portfolioData';
import { BookOpen, ChevronLeft, ChevronRight, Stamp, Feather } from 'lucide-react';

interface GrimoireReaderProps {
  isDarkMode: boolean;
  onOpenCommission: () => void;
}

export const GrimoireReader: React.FC<GrimoireReaderProps> = ({
  isDarkMode,
  onOpenCommission,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [sealedPages, setSealedPages] = useState<Record<number, boolean>>({});

  const currentPage: GrimoirePage = GRIMOIRE_PAGES[currentPageIndex];

  const handleNextPage = () => {
    setCurrentPageIndex((prev) => (prev + 1) % GRIMOIRE_PAGES.length);
  };

  const handlePrevPage = () => {
    setCurrentPageIndex((prev) => (prev - 1 + GRIMOIRE_PAGES.length) % GRIMOIRE_PAGES.length);
  };

  const handleToggleSeal = (pageId: number) => {
    setSealedPages((prev) => ({
      ...prev,
      [pageId]: !prev[pageId],
    }));
  };

  return (
    <section id="grimoire" className="py-20 border-t border-[#E6DEC9] dark:border-[#2C2621]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
            Interactive Manuscript · 02
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2 text-[#231B17] dark:text-[#F3EDE2]"
            style={{ fontFamily: "'Cormorant Garamond', 'Shippori Mincho', serif" }}
          >
            The Scholar’s Grimoire · 白兎の挿話手稿
          </h2>
          <p className="text-sm sm:text-base text-[#6F6054] dark:text-[#A89A8E] mt-2 font-serif-antique">
            一冊の古書を紐解くように。装画の背景に隠された物語と余白のメモを、
            インタラクティブな二つ折り手稿でめくる体験。
          </p>
        </div>

        {/* Folio Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div
            className={`p-1 rounded-lg border flex flex-wrap gap-1 ${
              isDarkMode
                ? 'bg-[#181512] border-[#332A24]'
                : 'bg-[#F2ECE0] border-[#DDD3BC]'
            }`}
          >
            {GRIMOIRE_PAGES.map((page, idx) => (
              <button
                key={page.id}
                onClick={() => setCurrentPageIndex(idx)}
                className={`px-3 sm:px-4 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 font-serif-antique ${
                  currentPageIndex === idx
                    ? 'bg-[#822B38] text-white shadow-sm'
                    : 'text-[#655549] dark:text-[#B0A294] hover:text-[#231B17] dark:hover:text-[#F3EDE2]'
                }`}
              >
                {page.chapter} · {page.title}
              </button>
            ))}
          </div>
        </div>

        {/* Grimoire Open Book Layout */}
        <div
          className={`relative max-w-5xl mx-auto rounded-2xl border p-6 sm:p-10 transition-all duration-300 shadow-2xl ${
            isDarkMode
              ? 'bg-[#191512] border-[#362D25]'
              : 'bg-[#FAF6EC] border-[#DECFAe]'
          }`}
        >
          {/* Subtle center spine book crease */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C49B58]/30 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left Page: Illustrated Plate */}
            <div className="relative flex flex-col items-center">
              {/* Antique Filigree Frame */}
              <div
                className={`relative p-3 rounded-xl border w-full max-w-md ${
                  isDarkMode
                    ? 'bg-[#14110E] border-[#2E2620]'
                    : 'bg-[#F2EBDC] border-[#DDD2BA]'
                }`}
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-[#0E0B09]">
                  <img
                    src={currentPage.image}
                    alt={currentPage.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-[#8C6D46] dark:text-[#C49B58] font-serif-antique px-1">
                  <span>{currentPage.folio}</span>
                  <span className="italic">Plate {currentPage.id}</span>
                </div>
              </div>

              {/* Wax Seal Stamp (Interactive) */}
              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleToggleSeal(currentPage.id)}
                  className={`px-4 py-2 text-xs rounded-md border transition-all flex items-center gap-2 ${
                    sealedPages[currentPage.id]
                      ? 'bg-[#822B38] text-[#FFF0F2] border-[#822B38]'
                      : 'bg-transparent text-[#8C6D46] dark:text-[#C49B58] border-[#C49B58]/40 hover:bg-[#C49B58]/10'
                  }`}
                >
                  <Stamp size={14} />
                  <span>
                    {sealedPages[currentPage.id]
                      ? 'Sealed with Red Wax · 封蝋捺印済'
                      : 'Stamp Wax Seal · 秘密の封蝋を捺す'}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Page: Literary Narrative & Marginalia */}
            <div className="space-y-6 flex flex-col justify-between">
              <div>
                {/* Chapter Kicker */}
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6D46] dark:text-[#C49B58] font-serif-antique">
                  <span>{currentPage.chapter}</span>
                  <span aria-hidden="true">·</span>
                  <span>Fragmentum Manuscript</span>
                </div>

                {/* Main Chapter Title */}
                <h3
                  className="text-2xl sm:text-3xl font-bold mt-2 text-[#231B17] dark:text-[#F3EDE2]"
                  style={{ fontFamily: "'Cormorant Garamond', 'Shippori Mincho', serif" }}
                >
                  {currentPage.japaneseTitle}
                </h3>
                <div className="text-xs text-[#7F6F62] dark:text-[#A89A8E] font-serif-antique mt-0.5">
                  {currentPage.title}
                </div>

                {/* Poetic Quote Box */}
                <div className="my-5 p-4 rounded-lg border-l-2 border-[#822B38] bg-[#F1EADA]/50 dark:bg-[#1E1916] text-[#2C2420] dark:text-[#E8DFD5] italic font-serif-antique text-sm leading-relaxed">
                  {currentPage.quote}
                </div>

                {/* Body Manuscript */}
                <p className="text-sm sm:text-base leading-relaxed text-[#4A3E35] dark:text-[#C4B7AC] font-serif-antique">
                  {currentPage.body}
                </p>
              </div>

              {/* Marginal Notes (手稿余白メモ) */}
              <div className="pt-4 border-t border-[#E6DEC9] dark:border-[#2C2621] space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
                  Margin Notes · 余白の覚え書き
                </span>
                <ul className="text-xs space-y-1 text-[#6B5C51] dark:text-[#9A8B7E] font-serif-antique">
                  {currentPage.marginNotes.map((note, nIdx) => (
                    <li key={nIdx} className="flex items-center gap-2">
                      <span className="text-[#822B38]">✦</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation pagination buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E6DEC9] dark:border-[#2C2621]">
                <button
                  type="button"
                  onClick={handlePrevPage}
                  className="px-4 py-2 text-xs font-serif-antique font-medium text-[#655549] dark:text-[#B0A294] hover:text-[#822B38] transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft size={16} /> 前の断片へ
                </button>

                <span className="text-xs font-mono tabular-nums text-[#8C6D46] dark:text-[#C49B58]">
                  {currentPageIndex + 1} / {GRIMOIRE_PAGES.length}
                </span>

                <button
                  type="button"
                  onClick={handleNextPage}
                  className="px-4 py-2 text-xs font-serif-antique font-medium text-[#655549] dark:text-[#B0A294] hover:text-[#822B38] transition-colors flex items-center gap-1.5"
                >
                  次の断片へ <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
