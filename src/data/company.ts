/**
 * Central company information for Takka Steel.
 * This is the single source of truth — values flow into the navbar, footer,
 * contact page, metadata, and structured data.
 */

export const company = {
  name: "Takka Steel",
  legalName: "Takka Steel",
  tagline: "Pusat Baja dan Bahan Bangunan",
  taglineLong:
    "Lagi cari material baja yang lengkap, cepat, dan terpercaya? Takka Steel solusinya!",
  shortDescription:
    "Takka Steel adalah pusat penyedia material baja dan bahan bangunan di Kabupaten Bogor. Solusi lengkap untuk kebutuhan konstruksi dan pertukangan — produk lengkap, layanan cepat, dan harga kompetitif.",
  city: "Kabupaten Bogor",

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

  // ── Geo coordinates (estimate — update with exact GPS) ────
  geo: {
    latitude: "-6.570",
    longitude: "106.750",
  },
};

/** Pre-filled WhatsApp chat link helper. */
export function waLink(message?: string) {
  const base = `https://wa.me/${company.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage =
  "Halo Takka Steel, saya ingin menanyakan informasi produk dan harga.";
