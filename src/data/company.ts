/**
 * Central company information for TAKKA STEEL.
 *
 * ⚠️ PLACEHOLDER DATA — replace the values below with the real company
 * details (address, phone numbers, email, social links, operating hours).
 * Everything here flows into the navbar, footer, contact page and metadata.
 */

export const company = {
  name: "TAKKA STEEL",
  legalName: "TAKKA STEEL",
  tagline: "Supplier Besi & Baja Terpercaya untuk Kebutuhan Konstruksi Anda",
  shortDescription:
    "TAKKA STEEL adalah distributor besi, baja, dan bahan bangunan di Bogor. Kami menyediakan material berkualitas dengan harga bersaing dan pengiriman cepat ke lokasi proyek Anda.",
  city: "Bogor",
  // TODO: ganti dengan alamat asli
  address:
    "Jl. Raya Contoh No. 00, Kecamatan Contoh, Kabupaten Bogor, Jawa Barat 16000",
  // TODO: ganti dengan koordinat / embed Google Maps asli
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Bogor,Jawa+Barat&output=embed",
  mapsLink: "https://maps.google.com/?q=Bogor+Jawa+Barat",
  email: "info@takkasteel.co.id", // TODO: email asli
  // WhatsApp dalam format internasional tanpa "+" / spasi.
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  phone: "(0251) 000-0000", // TODO: nomor telepon kantor asli
  instagram: "https://www.instagram.com/takkasteelofficial/",
  instagramHandle: "@takkasteelofficial",
  operatingHours: [
    { day: "Senin – Jumat", hours: "08.00 – 17.00 WIB" },
    { day: "Sabtu", hours: "08.00 – 14.00 WIB" },
    { day: "Minggu & Hari Libur", hours: "Tutup" },
  ],
  foundedYear: 2019, // TODO: tahun berdiri asli
};

/** Pre-filled WhatsApp chat link helper. */
export function waLink(message?: string) {
  const base = `https://wa.me/${company.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage =
  "Halo TAKKA STEEL, saya ingin menanyakan ketersediaan dan harga produk.";
