import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-14 transition-colors duration-200 ${
        isDarkMode
          ? 'bg-[#120F0D] border-[#26201B] text-[#9E9084]'
          : 'bg-[#F4EFE2] border-[#E3D9C3] text-[#6E5F53]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Signature */}
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-3 text-center sm:text-left">
          <span
            className="text-xl font-bold tracking-[0.2em] text-[#2C2420] dark:text-[#EDE4DA]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            YUAI
          </span>
          <span className="text-xs font-serif-antique text-[#8C6D46] dark:text-[#C49B58]">
            Atelier of Fairytale & Antique Curiosities (Yuai1228.)
          </span>
        </div>

        {/* Social / External Links */}
        <div className="flex items-center gap-6 text-xs font-serif-antique tracking-wide">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#822B38] dark:hover:text-[#E27D8C] transition-colors"
          >
            Twitter / X (@yuai1228)
          </a>
          <span aria-hidden="true" className="text-[#C49B58]/40">·</span>
          <a
            href="https://pixiv.net"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#822B38] dark:hover:text-[#E27D8C] transition-colors"
          >
            Pixiv
          </a>
          <span aria-hidden="true" className="text-[#C49B58]/40">·</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#822B38] dark:hover:text-[#E27D8C] transition-colors"
          >
            Instagram
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-6 text-xs">
          <span className="font-serif-antique">
            © 2026 YUAI. All Rights Reserved.
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className={`p-2 rounded-md border transition-all ${
              isDarkMode
                ? 'border-[#332A24] bg-[#1A1613] hover:bg-[#25201C] text-[#C49B58]'
                : 'border-[#DACFBA] bg-[#EFE8D6] hover:bg-[#E5DDC9] text-[#786145]'
            }`}
            aria-label="Back to top"
            title="ページ先頭へ戻る"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};
