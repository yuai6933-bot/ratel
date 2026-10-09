import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GallerySection } from './components/GallerySection';
import { GrimoireReader } from './components/GrimoireReader';
import { AtelierSection } from './components/AtelierSection';
import { CommissionSection } from './components/CommissionSection';
import { Footer } from './components/Footer';
import { ArtworkModal } from './components/ArtworkModal';
import { ARTWORKS, Artwork } from './data/portfolioData';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [preselectedArtworkForCommission, setPreselectedArtworkForCommission] = useState<Artwork | null>(null);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenCommission = () => {
    const el = document.getElementById('commission');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireFromModal = (artwork: Artwork) => {
    setPreselectedArtworkForCommission(artwork);
    const el = document.getElementById('commission');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'dark bg-[#141210] text-[#E8DFD5]' : 'bg-[#FAF8F3] text-[#2C2420]'
      }`}
    >
      {/* Background Subtle Texture */}
      <div
        className={`fixed inset-0 pointer-events-none opacity-40 ${
          isDarkMode ? 'parchment-pattern-dark' : 'parchment-pattern'
        }`}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Navigation Bar */}
        <Navbar
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
          onOpenCommission={handleOpenCommission}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection
            isDarkMode={isDarkMode}
            heroArtwork={ARTWORKS[0]}
            onSelectArtwork={setSelectedArtwork}
          />

          {/* Curated Gallery Section */}
          <GallerySection
            isDarkMode={isDarkMode}
            artworks={ARTWORKS}
            onSelectArtwork={setSelectedArtwork}
          />

          {/* Interactive Grimoire Reader Section */}
          <GrimoireReader
            isDarkMode={isDarkMode}
            onOpenCommission={handleOpenCommission}
          />

          {/* Atelier & Lore Section */}
          <AtelierSection isDarkMode={isDarkMode} />

          {/* Commission & Inquiry Desk */}
          <CommissionSection
            isDarkMode={isDarkMode}
            preselectedArtwork={preselectedArtworkForCommission}
            onClearPreselectedArtwork={() => setPreselectedArtworkForCommission(null)}
          />
        </main>

        {/* Footer */}
        <Footer isDarkMode={isDarkMode} />

        {/* High-Resolution Artwork Lightbox Modal */}
        <ArtworkModal
          artwork={selectedArtwork}
          allArtworks={ARTWORKS}
          isDarkMode={isDarkMode}
          onClose={() => setSelectedArtwork(null)}
          onSelectArtwork={setSelectedArtwork}
          onInquireArtwork={handleInquireFromModal}
        />
      </div>
    </div>
  );
}
