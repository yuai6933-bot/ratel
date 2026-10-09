import React, { useState } from 'react';
import { Feather, Moon, Sun, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenCommission: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleDarkMode,
  onOpenCommission,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        isDarkMode
          ? 'bg-[#141210]/95 border-[#2E2824] text-[#E8DFD5]'
          : 'bg-[#FAF8F3]/95 border-[#E6DEC9] text-[#2C2420]'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="group flex items-center gap-3 text-xl font-semibold tracking-widest whitespace-nowrap shrink-0"
          style={{ fontFamily: "'Cinzel', 'Shippori Mincho', serif" }}
        >
          <span className="text-[#822B38] font-bold text-2xl group-hover:rotate-12 transition-transform duration-300">
            ❖
          </span>
          <span className="tracking-[0.25em] text-[#2C2420] dark:text-[#EAE3D9]">
            YUAI
          </span>
          <span className="hidden sm:inline text-xs font-normal tracking-widest text-[#8C6D46] border-l border-[#8C6D46]/30 pl-3">
            Atelier 1228
          </span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#gallery"
            className="hover:text-[#822B38] dark:hover:text-[#D4818E] transition-colors whitespace-nowrap shrink-0 font-serif-antique tracking-wide text-base"
          >
            Works · 作品集
          </a>
          <a
            href="#grimoire"
            className="hover:text-[#822B38] dark:hover:text-[#D4818E] transition-colors whitespace-nowrap shrink-0 font-serif-antique tracking-wide text-base"
          >
            Grimoire · 挿話手稿
          </a>
          <a
            href="#atelier"
            className="hover:text-[#822B38] dark:hover:text-[#D4818E] transition-colors whitespace-nowrap shrink-0 font-serif-antique tracking-wide text-base"
          >
            Atelier · 画室録
          </a>
          <a
            href="#exhibitions"
            className="hover:text-[#822B38] dark:hover:text-[#D4818E] transition-colors whitespace-nowrap shrink-0 font-serif-antique tracking-wide text-base"
          >
            Exhibitions · 展示歴
          </a>
        </nav>

        {/* Zone 3: 1 primary action & theme toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={onToggleDarkMode}
            className={`p-2 rounded-lg transition-colors border ${
              isDarkMode
                ? 'border-[#38312B] bg-[#1E1B18] text-[#C49B58] hover:bg-[#2A2622]'
                : 'border-[#E2D8C0] bg-[#F3EEDF] text-[#6E5536] hover:bg-[#EAE2CE]'
            }`}
            title={isDarkMode ? '切替: 羊皮紙モード (Light)' : '切替: 夜想書斎モード (Dark)'}
            aria-label="Toggle theme mode"
          >
            {isDarkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            onClick={onOpenCommission}
            className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-md whitespace-nowrap shrink-0 text-white bg-[#822B38] hover:bg-[#681E29] shadow-sm active:scale-95 flex items-center gap-2"
          >
            <Feather size={14} />
            <span>Commission · 制作依頼</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#6E5536] hover:text-[#822B38]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-6 border-t ${
            isDarkMode ? 'bg-[#171412] border-[#2E2824]' : 'bg-[#F7F4EE] border-[#E6DEC9]'
          } flex flex-col gap-4`}
        >
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-serif-antique py-2 hover:text-[#822B38]"
          >
            Works · 作品集
          </a>
          <a
            href="#grimoire"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-serif-antique py-2 hover:text-[#822B38]"
          >
            Grimoire · 挿話手稿
          </a>
          <a
            href="#atelier"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-serif-antique py-2 hover:text-[#822B38]"
          >
            Atelier · 画室録
          </a>
          <a
            href="#exhibitions"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-serif-antique py-2 hover:text-[#822B38]"
          >
            Exhibitions · 展示歴
          </a>
          <div className="pt-2 border-t border-[#E6DEC9]/40 dark:border-[#2E2824]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommission();
              }}
              className="w-full py-3 text-xs tracking-wider uppercase font-semibold text-white bg-[#822B38] rounded-md flex items-center justify-center gap-2"
            >
              <Feather size={14} />
              <span>Commission · 制作依頼</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
