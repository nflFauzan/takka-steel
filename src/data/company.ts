/**
 * Central company information for Takka Steel.
 * This is the single source of truth — values flow into the navbar, footer,
 * contact page, metadata, and structured data.
 */

export const company = {
  name: "Takka Steel",
  legalName: "Takka Steel",
  tagline: "Harga Minimum, Kualitas Premium",
  taglineLong:
    "Pusat baja & bahan bangunan terlengkap — harga minimum, kualitas premium, melayani Jabodetabek & seluruh Indonesia.",
  shortDescription:
    "Takka Steel adalah pusat penyedia material baja dan bahan bangunan. Harga minimum, kualitas premium. Melayani Jabodetabek & seluruh wilayah Indonesia untuk kebutuhan eceran hingga proyek besar.",
  city: "Kabupaten Bogor",
  founderName: "M Dafa Fakhrika",
  serviceArea: "Jabodetabek & Seluruh Wilayah Indonesia",

  // ── Address ──────────────────────────────────────────────
  address:
    "Jl. Lkr. Laladon No.51, RT.01/RW.07, Laladon, Kec. Ciomas, Kabupaten Bogor, Jawa Barat 16610",
  // Google Maps embed iframe src. Replace with the confirmed embed src from
  // Google Maps → Share → Embed a map when available.
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Takka+Steel+Jl.+Lkr.+Laladon+No.51+Ciomas+Bogor&output=embed",
  mapsLink: "https://maps.app.goo.gl/PCLXHbXJ9EeEdikP8",

  // ── Contact ──────────────────────────────────────────────
  email: "takkasteelofficial@gmail.com",
  // WhatsApp in international format, no "+" / spaces.
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6289518611616",
  whatsappDisplay: "0895-1861-1616",
  phone: "0895-1861-1616",
  whatsapp2: "6287873953335",
  whatsappDisplay2: "0878-7395-3335",

  // ── Social ───────────────────────────────────────────────
  instagram: "https://www.instagram.com/takkasteelofficial/",
  instagramHandle: "@takkasteelofficial",
  tokopedia: "https://www.tokopedia.com/takka-steel",
  tokopediaName: "Toko Takka Steel",

  // ── Operating hours ──────────────────────────────────────
  operatingHours: [
    { day: "Senin – Sabtu", hours: "08.00 – 17.00 WIB" },
    { day: "Minggu & Hari Libur", hours: "Tutup" },
  ],
  hoursDisplay: "Senin – Sabtu, 08.00 – 17.00 WIB",

  foundedYear: 2025,
  foundedFull: "13 Januari 2025",

  // ── Vision & mission ─────────────────────────────────────
  vision:
    "Menjadi toko bangunan terpercaya yang mengutamakan kualitas produk dan kepuasan pelanggan dalam setiap layanan yang diberikan.",
  mission: [
    "Menyediakan produk bangunan berkualitas tinggi dengan harga yang kompetitif.",
    "Memberikan pelayanan terbaik dan solusi tepat untuk memenuhi kebutuhan pelanggan.",
    "Terus berinovasi dalam penyediaan produk dan layanan untuk mendukung perkembangan dunia konstruksi.",
  ],

  // ── Geo coordinates (exact — from Google Maps place pin) ──
  geo: {
    latitude: "-6.5789964",
    longitude: "106.7520805",
  },
};

/** Pre-filled WhatsApp chat link helper — Admin 1. */
export function waLink(message?: string) {
  const base = `https://wa.me/${company.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Pre-filled WhatsApp chat link helper — Admin 2. */
export function waLink2(message?: string) {
  const base = `https://wa.me/${company.whatsapp2}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage =
  "Halo Takka Steel, saya ingin menanyakan informasi produk dan harga.";
