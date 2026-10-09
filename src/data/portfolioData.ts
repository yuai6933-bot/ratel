export interface Artwork {
  id: string;
  title: string;
  japaneseTitle: string;
  category: 'character' | 'apothecary' | 'celestial' | 'still-life';
  categoryLabel: string;
  image: string;
  year: string;
  medium: string;
  dimensions: string;
  exhibition: string;
  storySynopsis: string;
  motifs: string[];
  featured?: boolean;
}

export interface GrimoirePage {
  id: number;
  chapter: string;
  title: string;
  japaneseTitle: string;
  body: string;
  quote: string;
  image: string;
  marginNotes: string[];
  folio: string;
}

export const ARTWORKS: Artwork[] = [
  {
    id: 'white-rabbit-threshold',
    title: "The Scholar Rabbit's Threshold",
    japaneseTitle: '白兎の書斎と薔薇の扉',
    category: 'character',
    categoryLabel: 'Fairy Tale & Character',
    image: '/src/assets/antique1.png',
    year: '2026',
    medium: 'Pen, Indian Ink, Antique Sepia Wash & French Cotton Rag',
    dimensions: '420 × 594 mm (A2)',
    exhibition: "Solo Exhibition 'Atelier of the Rabbit Hour', Ginza",
    storySynopsis: 'オーク材の重厚な扉の前に佇む白兎の給仕官。胸元には鍵のペンダント、傍らには零れ落ちる薔薇の紅茶と赤の封蝋で閉じられた秘密の手紙。時を刻む懐中時計が止まる瞬間、物語の扉は静かに開かれます。',
    motifs: ['White Rabbit', 'Antique Key', 'Wax Seal Letter', 'Crimson Roses', 'Pocket Watch', 'Baroque Mirror'],
    featured: true,
  },
  {
    id: 'alchemists-apothecary',
    title: "The Alchemist's Secret Dispensary",
    japaneseTitle: '調薬師の秘密蒐集棚',
    category: 'apothecary',
    categoryLabel: 'Cabinet & Flora',
    image: '/src/assets/images/artwork_apothecary_1791520121372.jpg',
    year: '2025',
    medium: 'Graphite, Watercolor, Gold Leaf Accent on Aged Vellum',
    dimensions: '594 × 420 mm (A2)',
    exhibition: "Kyoto Antique Art Biennale 2025",
    storySynopsis: '真鍮の天秤、琥珀色の薬瓶、月の運行を示す星図。何世代にもわたり調合されてきた夢の雫と星屑のエリクサーが、無垢のウォールナット棚に整然と並ぶ秘密の研究室。',
    motifs: ['Glass Phials', 'Star Dust Elixir', 'Dried Herbs', 'Astronomical Charts', 'Brass Calipers'],
    featured: true,
  },
  {
    id: 'crimson-tea-tarot',
    title: 'Crimson Rose Tea & Floating Arcana',
    japaneseTitle: '零れる深紅の紅茶と浮遊するタロット',
    category: 'still-life',
    categoryLabel: 'Still Life & Arcana',
    image: '/src/assets/images/artwork_rose_tea_1791520132323.jpg',
    year: '2026',
    medium: 'Ink, Gouache & Mineral Pigments on Textured Arches Paper',
    dimensions: '500 × 350 mm',
    exhibition: "Featured Editorial: Victorian Literary Review Vol. 14",
    storySynopsis: '傾いたクラシカルな磁器のティーカップから零れ出す真紅の紅茶。紫煙とともに宙へ昇るタロットカードと、時を刻み続ける真鍮の懐中時計。静寂のティーテーブルに漂う優雅な予兆。',
    motifs: ['Porcelain Teacup', 'Tarot Cards', 'Crimson Roses', 'Raven Quill', 'Antique Timepiece'],
    featured: true,
  },
  {
    id: 'celestial-observatory',
    title: 'The Cartographer of Midnight Stars',
    japaneseTitle: '星辰儀の観測机と真夜中の天球図',
    category: 'celestial',
    categoryLabel: 'Celestial & Cartography',
    image: '/src/assets/images/artwork_astrolabe_1791520145414.jpg',
    year: '2025',
    medium: 'Sepia Ink, Walnut Wash & Hand-mixed Bronze Pigment',
    dimensions: '594 × 420 mm (A2)',
    exhibition: "London Fairytale & Dark Romance Gallery",
    storySynopsis: '石造りのアーチ窓から差し込む三日月の光。真鍮のアストロラーベと広げられた天球図の上で、羽ペンが新しい星座の神話を書き記す。時空を超えた天文学者の瞑想的な夜。',
    motifs: ['Brass Astrolabe', 'Armillary Sphere', 'Celestial Map', 'Wax Candle', 'Quill & Inkpot'],
    featured: true,
  },
];

export const GRIMOIRE_PAGES: GrimoirePage[] = [
  {
    id: 1,
    chapter: '葉の一',
    title: 'The Door of Memories',
    japaneseTitle: '記憶の扉と真鍮の鍵',
    body: 'アンティークの木製扉には、幾重にも刻まれた小さな傷がある。それは過去の旅人たちが残した合言葉であり、忘れ去られた童話の断片。鍵穴の形はハートを象り、その奥からは微かに紅茶と薔薇の香りが漂ってくる。',
    quote: '「扉を叩く必要はありません。あなたの持つ鍵は、すでにその手の中で回っています。」',
    image: '/src/assets/images/antique_rabbit_hero_1791520109192.jpg',
    marginNotes: ['手稿断片：第IV扉の記録', '鍵の素材：真鍮及び鍍金', '香調：ダマスクローズとベルガモット'],
    folio: 'Folio I / Wonderland Fragments',
  },
  {
    id: 2,
    chapter: '葉の二',
    title: 'The Apothecary’s Vials',
    japaneseTitle: '星屑とエリクサーの棚',
    body: '琥珀色のガラス瓶に閉じ込められているのは、満月の夜に採取された露草のエキスと、流星の尾から集めた金色の粉末。ラベルには古い手書きの筆跡で、効能と保存期間がラテン語で記されている。',
    quote: '「記憶を琥珀に変え、時間を静止させるための調合。」',
    image: '/src/assets/images/artwork_apothecary_1791520121372.jpg',
    marginNotes: ['天体運行：木星と金星の合', '蒸留法：低温砂浴加熱', '標本番号：#884-D'],
    folio: 'Folio II / Herbarium & Alchemia',
  },
  {
    id: 3,
    chapter: '葉の三',
    title: 'The Fortune in Tea Leaves',
    japaneseTitle: '深紅の紅茶と夜のタロット',
    body: '零れ落ちる紅茶はテーブルクロスを染めながら、まるで未知の地図のような紋様を描く。立ち上る湯気はカードの形を成し、愚者から恋人たちへと運命の糸を繋いでいく。',
    quote: '「こぼれた紅茶を嘆く者は、そこに映る星空を見落とす。」',
    image: '/src/assets/images/artwork_rose_tea_1791520132323.jpg',
    marginNotes: ['茶葉品種：キームン・アンティーク選別', 'タロット配列：ケルト十字の変形', '懐中時計停止時刻：11時42分'],
    folio: 'Folio III / Divination Still Life',
  },
  {
    id: 4,
    chapter: '葉の四',
    title: 'The Midnight Observatory',
    japaneseTitle: '星辰の観測と星座の記録',
    body: '羽ペンの先から流れるインクは、夜空の暗黒そのもの。天球儀が静かに回転し、大熊座とカシオペア座の位置が羊皮紙の上で正確に測定される。それは失われた星々の物語を編み直す作業である。',
    quote: '「夜が深いほど、羊皮紙の上に灯る星々は鮮やかに輝く。」',
    image: '/src/assets/images/artwork_astrolabe_1791520145414.jpg',
    marginNotes: ['器具：1684年製 観測用アストロラーベ', '羊皮紙：仔羊皮の手漉き製本', '月齢：初月（三日月）'],
    folio: 'Folio IV / Celestial Ephemeris',
  },
];

export const ARTIST_INFO = {
  name: 'YUAI',
  signature: 'Yuai1228.',
  title: 'Antique Illustrator & Dark Fairytale Concept Artist',
  japaneseTitle: '装画・挿絵画家 / アンティーク幻想作家',
  location: 'Tokyo & Kyoto, Japan',
  avatarImage: '/src/assets/images/artist_studio_avatar_1791520157860.jpg',
  statement:
    '古典的な英国ヴィクトリア朝の気品、ダークファンタジーの耽美性、そして幼少期に魅了された絵本の温もりを融合させ、ペン画と水彩技法によって時間を閉じ込めたような作品を描いています。懐中時計、アンティーク鍵、零れる紅茶、装飾写本——それらは日常の裂け目から覗く、もうひとつの世界の標本です。',
  specialties: [
    'Book Cover & Editorial Illustration (書籍装画・装丁挿絵)',
    'Concept Art for Narrative Games (世界観設定・キービジュアル)',
    'Private Collectors Commissions (原画・限定版画の制作)',
    'Antique Themed Product & Packaging (パッケージ装飾・ラベル設計)',
  ],
  exhibitions: [
    { year: '2026', title: 'Atelier of the Rabbit Hour (白兎の時針展)', venue: 'Gallery L’Étoile, Ginza, Tokyo' },
    { year: '2025', title: 'Cabinet of Curiosities (驚異の調薬室)', venue: 'Antique Hall, Sanjo, Kyoto' },
    { year: '2024', title: 'Nocturnal Fairytales in Ink', venue: 'Maison D’Art, London' },
    { year: '2023', title: 'The Sealed Letter & Rose Thorns', venue: 'Ochanomizu Paper Arts, Tokyo' },
  ],
  toolsAndMaterials: [
    { category: 'Ink & Pens', items: 'Winsor & Newton Indian Ink, Antique Glass Dip Pens, Brause Steno Nibs' },
    { category: 'Pigments', items: 'Holbein Artists’ Watercolors, Daniel Smith Mineral Primatek, Raw Umber Wash' },
    { category: 'Paper', items: 'Arches Cold-Pressed 300g/m², French Vintage Book Parchment, Heavy Rag' },
    { category: 'Accents', items: '23.75K Real Gold Leaf, Hand-poured Wax Seals, Brass Calipers & Compasses' },
  ],
};
