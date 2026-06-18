// ============================================================
// siteConfig.ts — TAKKA STEEL
// File konfigurasi utama website. UPDATE FILE INI untuk
// semua perubahan data dasar. Tidak perlu sentuh file lain.
// ============================================================

export const siteConfig = {

  // ── IDENTITAS ──────────────────────────────────────────
  name: "Takka Steel",
  legalName: "Takka Steel",
  tagline: "Pusat Baja dan Bahan Bangunan",
  taglineLong: "Lagi cari material baja yang lengkap, cepat, dan terpercaya? Takka Steel solusinya!",
  description:
    "Takka Steel adalah pusat penyedia material baja dan bahan bangunan di Kabupaten Bogor. Solusi komprehensif untuk kebutuhan konstruksi dan pertukangan — produk lengkap, layanan cepat, harga kompetitif.",
  founded: "2025",
  foundedFull: "13 Januari 2025",

  // ── KONTAK ─────────────────────────────────────────────
  contact: {
    whatsapp: "6289518611616",
    whatsappDisplay: "0895-1861-1616",
    whatsappMessage:
      "Halo Takka Steel, saya ingin menanyakan informasi produk dan harga. %0A%0ANama: %0AKebutuhan: %0AProyek:",
    email: "takkasteelofficial@gmail.com",
    phone: "0895-1861-1616",
  },

  // ── ALAMAT ─────────────────────────────────────────────
  address: {
    street: "Jl. Lkr. Laladon No.51",
    detail: "RT.01/RW.07",
    village: "Laladon",
    district: "Kec. Ciomas",
    city: "Kabupaten Bogor",
    province: "Jawa Barat",
    postal: "16610",
    full: "Jl. Lkr. Laladon No.51, RT.01/RW.07, Laladon, Kec. Ciomas, Kabupaten Bogor, Jawa Barat 16610",
    googleMapsUrl: "https://maps.app.goo.gl/PCLXHbXJ9EeEdikP8",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0!2d106.75!3d-6.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c543483e7811%3A0x129d845199dc9ea8!2sTakka%20Steel!5e0!3m2!1sid!2sid!4v1234567890",
    // ↑ Ganti embed URL di atas dengan yang benar dari:
    // Google Maps → Share → Embed a map → Copy iframe src
  },

  // ── JAM OPERASIONAL ────────────────────────────────────
  hours: {
    display: "Senin – Sabtu, 08.00 – 17.00 WIB",
    short: "08.00 – 17.00 WIB",
    days: "Senin – Sabtu",
    schema: "Mo-Sa 08:00-17:00",
  },

  // ── SOSIAL MEDIA ───────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/takkasteelofficial/",
    instagramHandle: "@takkasteelofficial",
    tokopedia: "https://www.tokopedia.com/takka-steel",
    facebook: "",
    tiktok: "",
  },

  // ── VISI & MISI ────────────────────────────────────────
  vision:
    "Menjadi toko bangunan terpercaya yang mengutamakan kualitas produk dan kepuasan pelanggan dalam setiap layanan yang diberikan.",

  mission: [
    "Menyediakan produk bangunan berkualitas tinggi dengan harga yang kompetitif.",
    "Memberikan pelayanan terbaik dan solusi tepat untuk memenuhi kebutuhan pelanggan.",
    "Terus berinovasi dalam penyediaan produk dan layanan untuk mendukung perkembangan dunia konstruksi.",
  ],

  // ── STATISTIK (Trust Signal) ───────────────────────────
  // Update angka ini setelah konfirmasi dari client
  stats: [
    { value: "2025", label: "Tahun Berdiri" },
    { value: "100+", label: "Produk Tersedia" },       // ← konfirmasi client
    { value: "Kab. Bogor", label: "Area Layanan" },
    { value: "Cepat", label: "Pengiriman" },            // ← update setelah ada data
  ],

  // ── KEUNGGULAN ─────────────────────────────────────────
  features: [
    {
      icon: "package",
      title: "Produk Lengkap",
      description:
        "Tersedia material baja ringan, sistem atap, struktur lantai, dan aksesoris konstruksi dalam satu tempat.",
    },
    {
      icon: "zap",
      title: "Layanan Cepat",
      description:
        "Respons cepat dan pengiriman tepat waktu ke seluruh wilayah Kabupaten Bogor dan sekitarnya.",
    },
    {
      icon: "shield-check",
      title: "Produk Berkualitas",
      description:
        "Semua produk dipilih dari merek terpercaya dengan standar kualitas konstruksi yang terjamin.",
    },
    {
      icon: "headphones",
      title: "Konsultasi Gratis",
      description:
        "Tim kami siap membantu konsultasi kebutuhan material proyek Anda dari awal hingga selesai.",
    },
  ],

  // ── PRODUK ─────────────────────────────────────────────
  products: [
    {
      category: "Material Baja Ringan",
      slug: "baja-ringan",
      description: "Rangka atap dan partisi ringan berkualitas tinggi",
      items: [
        "TAKKA TRUSS (CNP 0.75)",
        "Reng Baja Ringan Galvalume",
        "Hollow Partisi / Plafond",
      ],
    },
    {
      category: "Sistem Atap",
      slug: "atap",
      description: "Berbagai pilihan atap untuk hunian dan komersial",
      items: [
        "Atap Spandek Pasir",
        "Atap Spandek Polos",
        "Atap Metal Pasir",
        "Atap Alderon Single Layer",
        "Atap Alderon Double Layer",
        "Seng Rol Galvalum",
      ],
    },
    {
      category: "Struktur Lantai",
      slug: "lantai",
      description: "Solusi lantai cor untuk konstruksi bertingkat",
      items: [
        "Bondeck / Floordeck (Lantai Cor)",
      ],
    },
    {
      category: "Aksesoris & Perkakas",
      slug: "aksesoris",
      description: "Perlengkapan konstruksi dan pertukangan",
      items: [
        "Kawat Bendrat",
        "Kawat Loket",
        "Kawat Las",
        "Dinabolt",
        "Skrup Gypsum",
        "Gunting Baja",
        "Mata Bor",
        "Gerinda",
        "Cat Besi / Kayu",
        "Thinner",
      ],
    },
  ],

  // ── TESTIMONI (PLACEHOLDER — isi setelah dapat dari client) ─
  testimonials: [
    {
      name: "[Nama Klien]",
      company: "[Nama Perusahaan / Proyek]",
      quote: "[Testimoni akan diisi setelah konfirmasi dari client]",
    },
  ],

  // ── SEO ────────────────────────────────────────────────
  seo: {
    titleTemplate: "%s | Takka Steel — Distributor Baja Bogor",
    defaultTitle:
      "Takka Steel — Pusat Baja & Bahan Bangunan Kabupaten Bogor",
    defaultDescription:
      "Takka Steel, pusat material baja ringan, atap spandek, bondeck, dan bahan bangunan di Kabupaten Bogor. Produk lengkap, harga kompetitif, pengiriman cepat. Hubungi 0895-1861-1616.",
    keywords: [
      "takka steel",
      "distributor baja bogor",
      "baja ringan bogor",
      "atap spandek bogor",
      "bondeck bogor",
      "material bangunan ciomas bogor",
      "toko besi bogor",
      "supplier baja ringan kabupaten bogor",
    ],
    ogImage: "/images/og-takka-steel.jpg",
    siteUrl: "https://takkasteel.com", // update setelah domain confirmed
  },

  // ── SCHEMA MARKUP (Local Business SEO) ────────────────
  schema: {
    type: "HardwareStore",
    name: "Takka Steel",
    description:
      "Pusat material baja dan bahan bangunan di Kabupaten Bogor",
    telephone: "+6289518611616",
    email: "takkasteelofficial@gmail.com",
    url: "https://takkasteel.com",
    address: {
      streetAddress: "Jl. Lkr. Laladon No.51, RT.01/RW.07",
      addressLocality: "Laladon, Kec. Ciomas",
      addressRegion: "Kabupaten Bogor, Jawa Barat",
      postalCode: "16610",
      addressCountry: "ID",
    },
    geo: {
      // Koordinat dari Google Maps link
      // 0x2e69c543483e7811:0x129d845199dc9ea8
      // Perlu extract lat/lng exak — estimasi dari Ciomas Bogor:
      latitude: "-6.570",   // ← update dengan koordinat exak
      longitude: "106.750", // ← update dengan koordinat exak
    },
    openingHours: "Mo-Sa 08:00-17:00",
    priceRange: "Rp",
    sameAs: [
      "https://www.instagram.com/takkasteelofficial/",
    ],
  },
};

// ── HELPER: WA LINK ────────────────────────────────────
export const getWhatsAppLink = (customMessage?: string) => {
  const msg = customMessage || siteConfig.contact.whatsappMessage;
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${msg}`;
};

// ── HELPER: FULL ADDRESS STRING ────────────────────────
export const getFullAddress = () => siteConfig.address.full;
