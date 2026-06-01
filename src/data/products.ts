/**
 * Product catalog for TAKKA STEEL.
 *
 * ⚠️ PLACEHOLDER DATA — categories are modeled on a typical Indonesian
 * "toko besi & baja". Replace names, descriptions, specs and image URLs
 * with the real catalog. Images currently use remote Unsplash photos via
 * a plain <img>; swap for local files in /public/products if preferred.
 */

export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  summary: string;
  description: string;
  specs: { label: string; value: string }[];
  uses: string[];
};

export const productCategories = [
  "Besi Beton",
  "Baja Ringan",
  "Besi Hollow",
  "Plat Baja",
  "CNP & UNP",
  "WF & H-Beam",
  "Pipa Besi",
  "Wiremesh",
  "Atap & Genteng Metal",
  "Aksesoris",
] as const;

export const products: Product[] = [
  {
    slug: "besi-beton-polos-ulir",
    name: "Besi Beton (Polos & Ulir)",
    category: "Besi Beton",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=70",
    summary:
      "Besi beton SNI untuk tulangan struktur, tersedia tipe polos dan ulir berbagai diameter.",
    description:
      "Besi beton TAKKA STEEL diproduksi sesuai Standar Nasional Indonesia (SNI) untuk menjamin kekuatan tarik dan kelenturan tulangan beton bertulang. Cocok untuk pondasi, kolom, balok, dan pelat lantai pada proyek rumah tinggal maupun gedung bertingkat.",
    specs: [
      { label: "Diameter", value: "6 – 25 mm" },
      { label: "Panjang", value: "12 m per batang" },
      { label: "Tipe", value: "Polos (BjTP) & Ulir (BjTS)" },
      { label: "Standar", value: "SNI" },
    ],
    uses: ["Pondasi & sloof", "Kolom & balok", "Pelat lantai", "Tangga beton"],
  },
  {
    slug: "baja-ringan-truss-reng",
    name: "Baja Ringan (Truss & Reng)",
    category: "Baja Ringan",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=70",
    summary:
      "Rangka atap baja ringan anti karat, ringan namun kuat, untuk kuda-kuda dan reng.",
    description:
      "Baja ringan galvalume/zincalume dengan lapisan anti karat untuk rangka atap yang tahan lama dan bebas rayap. Tersedia profil kanal C (truss) dan reng dengan ketebalan bervariasi sesuai beban atap.",
    specs: [
      { label: "Profil", value: "Kanal C75 / C100, Reng" },
      { label: "Ketebalan", value: "0,75 – 1,00 mm" },
      { label: "Lapisan", value: "Galvalume / Zincalume" },
      { label: "Panjang", value: "6 m (custom tersedia)" },
    ],
    uses: ["Kuda-kuda atap", "Reng penopang genteng", "Kanopi", "Mezzanine ringan"],
  },
  {
    slug: "besi-hollow",
    name: "Besi Hollow",
    category: "Besi Hollow",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=70",
    summary:
      "Besi hollow galvanis & hitam untuk rangka plafon, partisi, pagar, dan furnitur.",
    description:
      "Besi hollow berpenampang kotak/persegi panjang yang ringan dan presisi, ideal untuk rangka plafon gypsum, partisi, railing, hingga konstruksi dekoratif. Tersedia versi hitam dan galvanis tahan karat.",
    specs: [
      { label: "Ukuran", value: "20×20 s/d 40×80 mm" },
      { label: "Ketebalan", value: "0,8 – 2,0 mm" },
      { label: "Finishing", value: "Hitam / Galvanis" },
      { label: "Panjang", value: "6 m per batang" },
    ],
    uses: ["Rangka plafon", "Partisi & sekat", "Pagar & railing", "Furnitur besi"],
  },
  {
    slug: "plat-baja",
    name: "Plat Baja",
    category: "Plat Baja",
    image:
      "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=900&q=70",
    summary:
      "Plat baja lembaran (hitam, bordes/kembang) untuk fabrikasi dan struktur.",
    description:
      "Plat baja lembaran berkualitas untuk kebutuhan fabrikasi, base plate, tangga industri, dan pelapis lantai. Tersedia plat hitam polos dan plat bordes (kembang) anti selip.",
    specs: [
      { label: "Ketebalan", value: "1,2 – 25 mm" },
      { label: "Ukuran", value: "4' × 8' / custom potong" },
      { label: "Jenis", value: "Plat hitam & plat bordes" },
      { label: "Layanan", value: "Potong sesuai ukuran" },
    ],
    uses: ["Base plate", "Tangga industri", "Pelat lantai anti selip", "Fabrikasi"],
  },
  {
    slug: "cnp-unp",
    name: "Kanal CNP & UNP",
    category: "CNP & UNP",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=70",
    summary:
      "Kanal C (CNP) dan kanal U (UNP) untuk gording, rangka, dan struktur ringan.",
    description:
      "Profil kanal CNP dan UNP untuk gording atap, rangka dinding, penyangga, dan berbagai struktur baja ringan-menengah. Material kuat dengan dimensi presisi.",
    specs: [
      { label: "CNP", value: "60 – 150 mm" },
      { label: "UNP", value: "50 – 200 mm" },
      { label: "Panjang", value: "6 m per batang" },
      { label: "Standar", value: "SNI" },
    ],
    uses: ["Gording atap", "Rangka dinding", "Penyangga & bracket", "Struktur gudang"],
  },
  {
    slug: "wf-h-beam",
    name: "WF & H-Beam",
    category: "WF & H-Beam",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=70",
    summary:
      "Baja profil WF (Wide Flange) dan H-Beam untuk struktur utama bangunan berat.",
    description:
      "Baja profil WF dan H-Beam sebagai elemen struktur utama gedung, gudang, pabrik, dan jembatan. Menahan beban besar dengan defleksi minimal. Tersedia berbagai dimensi sesuai perhitungan struktur.",
    specs: [
      { label: "WF", value: "150 – 400 mm" },
      { label: "H-Beam", value: "100 – 400 mm" },
      { label: "Panjang", value: "12 m per batang" },
      { label: "Standar", value: "SNI / JIS" },
    ],
    uses: ["Kolom & balok baja", "Struktur gudang/pabrik", "Konstruksi jembatan", "Mezzanine"],
  },
  {
    slug: "pipa-besi",
    name: "Pipa Besi",
    category: "Pipa Besi",
    image:
      "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=900&q=70",
    summary:
      "Pipa besi hitam & galvanis untuk konstruksi, pagar, dan saluran.",
    description:
      "Pipa besi bulat dan kotak untuk kebutuhan konstruksi, railing, pagar, scaffolding, hingga saluran air non-tekanan. Tersedia versi hitam dan galvanis anti karat.",
    specs: [
      { label: "Diameter", value: '1/2" – 6"' },
      { label: "Ketebalan", value: "1,5 – 4,0 mm" },
      { label: "Finishing", value: "Hitam / Galvanis" },
      { label: "Panjang", value: "6 m per batang" },
    ],
    uses: ["Pagar & railing", "Scaffolding", "Saluran air", "Rangka konstruksi"],
  },
  {
    slug: "wiremesh",
    name: "Wiremesh",
    category: "Wiremesh",
    image:
      "https://images.unsplash.com/photo-1597844808175-bd6c95f1f6e2?auto=format&fit=crop&w=900&q=70",
    summary:
      "Wiremesh lembaran & roll untuk tulangan dak, lantai, dan jalan beton.",
    description:
      "Wiremesh (besi anyaman las) sebagai pengganti tulangan konvensional yang lebih cepat dipasang dan merata. Ideal untuk dak beton, lantai kerja, dan rigid pavement.",
    specs: [
      { label: "Diameter", value: "M4 – M10" },
      { label: "Bentuk", value: "Lembaran & roll" },
      { label: "Ukuran lembar", value: "2,1 × 5,4 m" },
      { label: "Standar", value: "SNI" },
    ],
    uses: ["Dak & pelat lantai", "Rigid pavement jalan", "Lantai gudang", "Dinding precast"],
  },
  {
    slug: "atap-genteng-metal",
    name: "Atap & Genteng Metal",
    category: "Atap & Genteng Metal",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=900&q=70",
    summary:
      "Atap spandek, galvalum, dan genteng metal berpasir berbagai warna.",
    description:
      "Beragam pilihan penutup atap: spandek, galvalum gelombang, dan genteng metal berpasir yang ringan, tahan karat, dan estetis. Tersedia banyak pilihan warna dan ketebalan.",
    specs: [
      { label: "Jenis", value: "Spandek, Galvalum, Genteng Metal" },
      { label: "Ketebalan", value: "0,25 – 0,40 mm" },
      { label: "Warna", value: "Beragam (custom)" },
      { label: "Panjang", value: "Potong sesuai kebutuhan" },
    ],
    uses: ["Atap rumah", "Atap gudang/pabrik", "Kanopi", "Carport"],
  },
  {
    slug: "aksesoris-besi",
    name: "Aksesoris & Material Pendukung",
    category: "Aksesoris",
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=900&q=70",
    summary:
      "Kawat las, kawat beton, paku, baut dynabolt, dan kelengkapan lainnya.",
    description:
      "Pelengkap kebutuhan konstruksi Anda: kawat las, kawat beton (bendrat), paku, baut, dynabolt, elektroda, hingga perlengkapan teknik lainnya. Belanja besi dan kelengkapannya dalam satu tempat.",
    specs: [
      { label: "Kawat", value: "Las, beton/bendrat, seng" },
      { label: "Pengencang", value: "Baut, dynabolt, paku" },
      { label: "Lainnya", value: "Elektroda, alat teknik" },
      { label: "Satuan", value: "Kg / pak / pcs" },
    ],
    uses: ["Pengikat tulangan", "Pengelasan", "Pemasangan struktur", "Finishing"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
