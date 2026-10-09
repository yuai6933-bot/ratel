import React, { useState } from 'react';
import { Artwork } from '../data/portfolioData';
import { Feather, Send, CheckCircle2, Clock, Stamp, X } from 'lucide-react';

interface CommissionSectionProps {
  isDarkMode: boolean;
  preselectedArtwork?: Artwork | null;
  onClearPreselectedArtwork?: () => void;
}

export const CommissionSection: React.FC<CommissionSectionProps> = ({
  isDarkMode,
  preselectedArtwork,
  onClearPreselectedArtwork,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'book-cover',
    timeline: '1-2-months',
    budget: 'mid',
    motifs: preselectedArtwork ? [preselectedArtwork.title] : [] as string[],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableMotifs = [
    'White Rabbit & Pocket Watch (白兎と懐中時計)',
    'Antique Wooden Door & Key (古扉と真鍮鍵)',
    'Crimson Tea & Porcelain (深紅の紅茶と磁器)',
    'Apothecary & Secret Elixirs (調薬棚と秘薬瓶)',
    'Celestial Sphere & Astrolabe (天球儀と星辰図)',
    'Vintage Book & Wax Seal (古書と封蝋)',
  ];

  const handleToggleMotif = (motif: string) => {
    setFormData((prev) => {
      const exists = prev.motifs.includes(motif);
      if (exists) {
        return { ...prev, motifs: prev.motifs.filter((m) => m !== motif) };
      } else {
        return { ...prev, motifs: [...prev.motifs, motif] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      projectType: 'book-cover',
      timeline: '1-2-months',
      budget: 'mid',
      motifs: [],
      message: '',
    });
    if (onClearPreselectedArtwork) {
      onClearPreselectedArtwork();
    }
  };

  return (
    <section id="commission" className="py-20 border-t border-[#E6DEC9] dark:border-[#2C2621]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique">
            Inquiry & Correspondence · 05
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2 text-[#231B17] dark:text-[#F3EDE2]"
            style={{ fontFamily: "'Cormorant Garamond', 'Shippori Mincho', serif" }}
          >
            Commission Desk · 制作・装画のご相談
          </h2>
          <p className="text-sm sm:text-base text-[#6F6054] dark:text-[#A89A8E] mt-2 font-serif-antique">
            書籍の装画・装丁挿絵、ゲームのキービジュアル、個人コレクター様向けの原画制作など、
            重厚なアンティーク世界観の表現を承っております。
          </p>
        </div>

        {/* Selected artwork banner notice if any */}
        {preselectedArtwork && !submitted && (
          <div
            className={`mb-8 p-4 rounded-xl border flex items-center justify-between gap-4 ${
              isDarkMode
                ? 'bg-[#1D1714] border-[#822B38]/40 text-[#E8DFD5]'
                : 'bg-[#F9F0EE] border-[#822B38]/30 text-[#2C2420]'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-[#822B38]">❖</span>
              <div>
                <span className="text-xs font-serif-antique text-[#822B38] font-semibold">
                  Reference Plate Selected:
                </span>
                <span className="text-xs ml-2 font-medium">
                  {preselectedArtwork.japaneseTitle} ({preselectedArtwork.title})
                </span>
              </div>
            </div>
            {onClearPreselectedArtwork && (
              <button
                type="button"
                onClick={onClearPreselectedArtwork}
                className="text-xs p-1 hover:text-[#822B38]"
              >
                <X size={16} />
              </button>
            )}
          </div>
        )}

        {submitted ? (
          /* Sealed Letter Confirmation View */
          <div
            className={`p-8 sm:p-12 rounded-2xl border text-center relative overflow-hidden shadow-2xl animate-fadeIn ${
              isDarkMode
                ? 'bg-[#181412] border-[#382F28] text-[#E8DFD5]'
                : 'bg-[#FAF6EC] border-[#DECFAe] text-[#2C2420]'
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-[#822B38] text-white flex items-center justify-center mx-auto mb-6 shadow-md">
              <Stamp size={28} />
            </div>

            <div className="text-xs uppercase tracking-[0.25em] text-[#8C6D46] dark:text-[#C49B58] font-serif-antique">
              Letter Sealed & Received · 受付完了
            </div>

            <h3
              className="text-2xl sm:text-3xl font-bold mt-2"
              style={{ fontFamily: "'Cormorant Garamond', 'Shippori Mincho', serif" }}
            >
              ご相談の手紙をお預かりいたしました
            </h3>

            <p className="text-sm leading-relaxed text-[#6B5C51] dark:text-[#B5A89E] font-serif-antique mt-4 max-w-lg mx-auto">
              {formData.name} 様、この度は Atelier Yuai へのお問い合わせを誠にありがとうございます。
              通常 2〜3 営業日以内に、記載いただいたメールアドレス（{formData.email}）宛てに
              手稿のスケッチプランとお見積りのご案内をお送りいたします。
            </p>

            <div className="mt-8 pt-6 border-t border-[#E6DEC9] dark:border-[#2C2621] flex justify-center">
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#822B38] text-white rounded-md hover:bg-[#681E29] transition-colors"
              >
                新しく手紙を送る
              </button>
            </div>
          </div>
        ) : (
          /* Commission Input Form */
          <form
            onSubmit={handleSubmit}
            className={`p-6 sm:p-10 rounded-2xl border shadow-xl space-y-6 ${
              isDarkMode
                ? 'bg-[#181412] border-[#332A24]'
                : 'bg-[#FAF6EC] border-[#DFD3BA]'
            }`}
          >
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique mb-2">
                  お名前 / 貴社名 <span className="text-[#822B38]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="例：早川 航平 / 株式会社創文社"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:ring-1 focus:ring-[#822B38] ${
                    isDarkMode
                      ? 'bg-[#1E1916] border-[#362D25] text-[#EDE4DA] placeholder-[#66584E]'
                      : 'bg-white border-[#D6CBB2] text-[#2C2420] placeholder-[#A89A8E]'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique mb-2">
                  メールアドレス <span className="text-[#822B38]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@atelier-client.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:ring-1 focus:ring-[#822B38] ${
                    isDarkMode
                      ? 'bg-[#1E1916] border-[#362D25] text-[#EDE4DA] placeholder-[#66584E]'
                      : 'bg-white border-[#D6CBB2] text-[#2C2420] placeholder-[#A89A8E]'
                  }`}
                />
              </div>
            </div>

            {/* Row 2: Project Category & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique mb-2">
                  ご依頼の種別
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:ring-1 focus:ring-[#822B38] ${
                    isDarkMode
                      ? 'bg-[#1E1916] border-[#362D25] text-[#EDE4DA]'
                      : 'bg-white border-[#D6CBB2] text-[#2C2420]'
                  }`}
                >
                  <option value="book-cover">書籍装画・装丁イラストレーション</option>
                  <option value="game-concept">ゲーム世界観・キービジュアル</option>
                  <option value="private-original">個人コレクター様 原画コミッション</option>
                  <option value="branding-label">アンティーク調パッケージ・ラベル意匠</option>
                  <option value="other">その他・企画展出展依頼</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique mb-2">
                  ご希望納期
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:ring-1 focus:ring-[#822B38] ${
                    isDarkMode
                      ? 'bg-[#1E1916] border-[#362D25] text-[#EDE4DA]'
                      : 'bg-white border-[#D6CBB2] text-[#2C2420]'
                  }`}
                >
                  <option value="rush">1ヶ月以内（特急・要相談）</option>
                  <option value="1-2-months">1〜2ヶ月以内</option>
                  <option value="3-plus-months">3ヶ月以降（ゆったりと制作）</option>
                  <option value="undecided">未定・企画進行中</option>
                </select>
              </div>
            </div>

            {/* Motifs selector */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique mb-2">
                取り入れたいモチーフ・雰囲気（複数選択可）
              </label>
              <div className="flex flex-wrap gap-2">
                {availableMotifs.map((motif) => {
                  const isChecked = formData.motifs.includes(motif);
                  return (
                    <button
                      type="button"
                      key={motif}
                      onClick={() => handleToggleMotif(motif)}
                      className={`px-3 py-2 text-xs rounded-md border transition-all text-left ${
                        isChecked
                          ? 'bg-[#822B38] text-white border-[#822B38]'
                          : isDarkMode
                          ? 'bg-[#1E1916] border-[#362D25] text-[#B8ACA2] hover:border-[#C49B58]'
                          : 'bg-white border-[#D6CBB2] text-[#5C4F46] hover:border-[#8C6D46]'
                      }`}
                    >
                      {isChecked ? '✓ ' : '+ '}
                      {motif}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message field */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#8C6D46] dark:text-[#C49B58] font-medium font-serif-antique mb-2">
                企画の概要・ご希望の内容 <span className="text-[#822B38]">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="作品の世界観、媒体（紙書籍、限定版画、Webなど）、サイズ感や描いてほしいキャラクター・モチーフのイメージをご自由にご記入ください。"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:ring-1 focus:ring-[#822B38] ${
                  isDarkMode
                    ? 'bg-[#1E1916] border-[#362D25] text-[#EDE4DA] placeholder-[#66584E]'
                    : 'bg-white border-[#D6CBB2] text-[#2C2420] placeholder-[#A89A8E]'
                }`}
              />
            </div>

            {/* Submit button */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-[#7A6B5F] dark:text-[#A6978A] font-serif-antique">
                ✦ 封蝋印の確認メールを自動送信いたします
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-7 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#822B38] hover:bg-[#681E29] rounded-md transition-all flex items-center gap-2 shadow-md active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>封蝋を捺印中...</span>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Send Inquiry · 依頼状を送る</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
