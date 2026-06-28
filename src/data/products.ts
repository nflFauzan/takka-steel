/**
 * Product catalog for Takka Steel — single source of truth for the catalog
 * grid, the featured bento, the spec comparison, the homepage department
 * showcase, and the product detail pages.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * DATA PROVENANCE (temporary, 2026-06)
 * ──────────────────────────────────────────────────────────────────────────
 * This catalog is reconstructed from two client-provided assets until the
 * client delivers complete official product data:
 *   1. "PRODUCT CATALOG TAKKA STEEL 2025.pdf" — product names, specs, prices.
 *   2. "gambar produk.zip" — 26 real product photos (partial coverage).
 *
 * Photos live in /public/products. Items WITHOUT a real photo yet carry
 * image: "" and render a premium navy placeholder tile — these are the
 * categories that still need photography (see PHOTO_STATUS below).
 *
 * IA: Department → Category → Product (3-tier, scales to 100+ SKUs).
 * Adding a product = one entry below with `department` + `category`; the
 * homepage, filters and detail pages update automatically.
 */

export type StockStatus = "ready" | "indent";

/** Top-level navigable buckets. Stable: new SKUs flow into these, the
 *  homepage never needs re-curating when the range grows. */
export type DepartmentSlug =
  | "struktur-baja"
  | "atap-spandek"
  | "atap-upvc"
  | "plafon-interior"
  | "pipa-saluran"
  | "aksesoris-perkakas";

export type Product = {
  slug: string;
  name: string;
  /** Mid-level grouping shown as a chip filter (e.g. "Baja Ringan"). */
  category: string;
  /** Top-level department — drives homepage cards & department tabs. */
  department: DepartmentSlug;
  /** Brand / line name shown as a small label (e.g. Alderon, Bondek). */
  brand?: string;
  /** Short navy badge: material or certification (e.g. SNI, Galvalume). */
  badge?: string;
  /** Availability — drives the gold stock badge. */
  stock: StockStatus;
  /** Flagged products surface in the featured bento + homepage bestsellers. */
  featured?: boolean;
  /** Indicative starting price from the 2025 PDF (subject to change).
   *  Not rendered as a hard price — the site is quote-based — but kept for
   *  reference and possible "mulai dari" hinting. */
  priceFrom?: string;
  /** Real photo path under /public/products, or "" for a placeholder tile. */
  image: string;
  summary: string;
  description: string;
  specs: { label: string; value: string }[];
  uses: string[];
};

/* ────────────────────────────────────────────────────────────────────── */
/*  DEPARTMENTS (homepage "Kategori Utama" + /produk tabs)                  */
/* ────────────────────────────────────────────────────────────────────── */

export type Department = {
  slug: DepartmentSlug;
  name: string;
  tagline: string;
  /** Cover photo (strongest real photo in the department). */
  image: string;
};

export const departments: Department[] = [
  {
    slug: "struktur-baja",
    name: "Struktur & Baja",
    tagline: "Baja ringan, besi struktural, plat & wiremesh",
    image: "/products/baja-ringan.jpg",
  },
  {
    slug: "atap-spandek",
    name: "Atap & Spandek",
    tagline: "Spandek, bondeck, genteng metal & nok",
    image: "/products/atap-metal.png",
  },
  {
    slug: "atap-upvc",
    name: "Atap uPVC",
    tagline: "Alderon, Atlas & Takka — peredam panas & suara",
    image: "/products/alderon.jpg",
  },
  {
    slug: "plafon-interior",
    name: "Plafon, Dinding & Interior",
    tagline: "Gypsum, GRC, PVC board, list & triplek",
    image: "/products/plafond-pvc.png",
  },
  {
    slug: "pipa-saluran",
    name: "Pipa & Saluran Air",
    tagline: "Pipa PVC, besi, fitting & selang",
    image: "/products/pipa.jpg",
  },
  {
    slug: "aksesoris-perkakas",
    name: "Aksesoris & Perkakas",
    tagline: "Baut, sekrup, kawat & material pendukung",
    image: "/products/baut-screw.png",
  },
];

export const departmentBySlug = (slug: string) =>
  departments.find((d) => d.slug === slug);

/* ────────────────────────────────────────────────────────────────────── */
/*  PRODUCTS                                                                */
/* ────────────────────────────────────────────────────────────────────── */

export const products: Product[] = [
  /* ═══ STRUKTUR & BAJA ═════════════════════════════════════════════════ */

  /* — Baja Ringan — */
  {
    slug: "takka-truss-cnp",
    name: "TAKKA TRUSS (Profil C75 × 35)",
    category: "Baja Ringan",
    department: "struktur-baja",
    brand: "TAKKA",
    badge: "Galvalume",
    stock: "ready",
    featured: true,
    priceFrom: "Rp55.000",
    image: "/products/baja-ringan.jpg",
    summary:
      "Kanal C baja ringan profil C75×35 untuk rangka kuda-kuda atap — lebih kuat & ringan dibanding kayu, tahan rayap & karat.",
    description:
      "TAKKA TRUSS adalah profil kanal C (C75×35) baja ringan galvalume sebagai rangka utama kuda-kuda atap. Kualitas material konsisten, tahan rayap selamanya, tahan api, dan tidak memerlukan pengelasan sehingga pemasangan lebih mudah, cepat, dan murah. Tidak perlu dicat karena lebih tahan karat.",
    specs: [
      { label: "Profil", value: "Kanal C (C75 × 35)" },
      { label: "Lapisan", value: "Galvalume (AZ)" },
      { label: "Keunggulan", value: "Tahan rayap & api, anti karat" },
      { label: "Panjang", value: "6 m per batang" },
    ],
    uses: ["Kuda-kuda atap", "Rangka baja ringan", "Kanopi", "Mezzanine ringan"],
  },
  {
    slug: "reng-baja-ringan",
    name: "Reng Baja Ringan",
    category: "Baja Ringan",
    department: "struktur-baja",
    brand: "Galvalume",
    badge: "Galvalume",
    stock: "ready",
    priceFrom: "Rp18.000",
    image: "",
    summary:
      "Reng baja ringan galvalume sebagai dudukan penutup atap di atas rangka truss — presisi, ringan, dan anti karat.",
    description:
      "Reng baja ringan berfungsi sebagai penopang genteng atau penutup atap di atas rangka kuda-kuda. Lebih kuat dan ringan dibanding kayu, tahan rayap dan api, serta tidak memerlukan pengelasan. Profil presisi memastikan jarak reng yang konsisten.",
    specs: [
      { label: "Profil", value: "Reng baja ringan" },
      { label: "Lapisan", value: "Galvalume" },
      { label: "Keunggulan", value: "Tahan rayap, anti karat" },
      { label: "Panjang", value: "6 m per batang" },
    ],
    uses: ["Dudukan genteng", "Penopang spandek", "Rangka atap", "Plafon ekspos"],
  },
  {
    slug: "hollow-galvanis",
    name: "Besi Hollow Galvanis",
    category: "Baja Ringan",
    department: "struktur-baja",
    brand: "Galvanis",
    badge: "Galvanis",
    stock: "ready",
    priceFrom: "Rp38.000",
    image: "",
    summary:
      "Besi hollow galvanis kotak untuk rangka plafon & partisi — tahan karat & korosi, kuat namun ringan.",
    description:
      "Besi hollow galvanis dengan penampang kotak untuk rangka plafon gypsum/PVC dan partisi/sekat ruangan. Tahan karat & korosi, kuat dan ringan, mudah dipasang & dibentuk, serta ramah anggaran.",
    specs: [
      { label: "Bentuk", value: "Hollow kotak" },
      { label: "Finishing", value: "Galvanis" },
      { label: "Keunggulan", value: "Tahan karat & korosi" },
      { label: "Panjang", value: "4 m per batang" },
    ],
    uses: ["Rangka plafon", "Partisi & sekat", "Drop ceiling", "Pagar ringan"],
  },
  {
    slug: "hollow-stainless",
    name: "Besi Hollow Stainless",
    category: "Baja Ringan",
    department: "struktur-baja",
    brand: "Stainless",
    badge: "Stainless",
    stock: "ready",
    priceFrom: "Rp57.000",
    image: "",
    summary:
      "Hollow stainless anti karat & korosi untuk aplikasi yang menuntut tampilan rapi dan tahan lama.",
    description:
      "Besi hollow stainless yang tahan karat & korosi, kuat namun ringan, serbaguna, dan mudah dipasang & dibentuk. Pilihan untuk railing, kanopi, dan elemen ekspos yang membutuhkan ketahanan dan estetika.",
    specs: [
      { label: "Bentuk", value: "Hollow kotak" },
      { label: "Material", value: "Stainless steel" },
      { label: "Keunggulan", value: "Tahan karat & korosi" },
      { label: "Panjang", value: "6 m per batang" },
    ],
    uses: ["Railing tangga", "Kanopi minimalis", "Pagar", "Elemen ekspos"],
  },
  {
    slug: "hollow-plafond",
    name: "Hollow Plafond",
    category: "Baja Ringan",
    department: "struktur-baja",
    brand: "Galvanis",
    badge: "Galvanis",
    stock: "ready",
    priceFrom: "Rp8.000",
    image: "",
    summary:
      "Hollow khusus rangka plafon — hemat waktu & biaya, kuat, kokoh, dan rapi tanpa pengelasan.",
    description:
      "Hollow plafond untuk rangka plafon gypsum & PVC. Hemat waktu dan biaya, kuat dan kokoh, struktur lebih rapi, praktis dalam pemasangan, tidak memerlukan pengelasan, dengan biaya perawatan minim.",
    specs: [
      { label: "Fungsi", value: "Rangka plafon" },
      { label: "Finishing", value: "Galvanis" },
      { label: "Keunggulan", value: "Rapi, tanpa las" },
      { label: "Satuan", value: "Per batang" },
    ],
    uses: ["Rangka plafon", "Drop ceiling", "Partisi interior", "Sekat ruang"],
  },

  /* — Besi Struktural — */
  {
    slug: "besi-wf",
    name: "Besi WF (6 m & 12 m)",
    category: "Besi Struktural",
    department: "struktur-baja",
    brand: "Hot Rolled",
    badge: "Struktural",
    stock: "ready",
    priceFrom: "Rp945.000",
    image: "",
    summary:
      "Besi WF (Wide Flange) hot rolled untuk struktur utama bangunan — kekuatan struktur tinggi & serbaguna.",
    description:
      "Besi WF dari hot rolled steel untuk balok dan kolom struktur bangunan bertingkat, gudang, dan pabrik. Kekuatan struktur tinggi, kuat dan kokoh, serbaguna, serta mudah dalam proses fabrikasi.",
    specs: [
      { label: "Bahan", value: "Hot Rolled Steel" },
      { label: "Berat", value: "148 – 440 kg" },
      { label: "Panjang", value: "6 m & 12 m" },
      { label: "Aplikasi", value: "Balok & kolom struktur" },
    ],
    uses: ["Struktur baja gudang", "Pabrik", "Bangunan bertingkat", "Jembatan"],
  },
  {
    slug: "besi-h-beam",
    name: "Besi H-Beam (6 m & 12 m)",
    category: "Besi Struktural",
    department: "struktur-baja",
    brand: "Hot Rolled",
    badge: "Struktural",
    stock: "ready",
    priceFrom: "Rp1.507.500",
    image: "",
    summary:
      "Besi H-Beam untuk kolom & balok beban berat — kekuatan struktur tinggi, kokoh, dan serbaguna.",
    description:
      "Besi H-Beam untuk struktur kolom dan balok dengan beban berat. Kekuatan struktur tinggi, kuat dan kokoh, serbaguna, serta mudah difabrikasi untuk berbagai kebutuhan konstruksi skala besar.",
    specs: [
      { label: "Bahan", value: "Hot Rolled Steel" },
      { label: "Profil", value: "H-Beam" },
      { label: "Panjang", value: "6 m & 12 m" },
      { label: "Aplikasi", value: "Kolom & balok berat" },
    ],
    uses: ["Kolom struktur", "Bangunan bertingkat", "Gudang bentang lebar", "Pabrik"],
  },
  {
    slug: "besi-unp",
    name: "Besi UNP (Kanal U)",
    category: "Besi Struktural",
    department: "struktur-baja",
    badge: "Struktural",
    stock: "ready",
    priceFrom: "Rp220.000",
    image: "",
    summary:
      "Kanal U (UNP) untuk rangka & dudukan struktur — kekuatan tinggi, serbaguna, dan mudah difabrikasi.",
    description:
      "Besi UNP berprofil kanal U untuk rangka, dudukan mesin, dan elemen struktur. Kekuatan struktur tinggi, kuat dan kokoh, serbaguna, dan mudah dalam proses fabrikasi.",
    specs: [
      { label: "Profil", value: "Kanal U (UNP)" },
      { label: "Material", value: "Baja struktural" },
      { label: "Panjang", value: "6 m per batang" },
      { label: "Aplikasi", value: "Rangka & dudukan" },
    ],
    uses: ["Rangka struktur", "Dudukan mesin", "Tangga industri", "Fabrikasi"],
  },
  {
    slug: "besi-cnp-hitam",
    name: "Besi CNP Hitam (Kanal C)",
    category: "Besi Struktural",
    department: "struktur-baja",
    badge: "Struktural",
    stock: "ready",
    featured: true,
    priceFrom: "Rp264.000",
    image: "/products/cnp.png",
    summary:
      "Kanal C (CNP) baja hitam untuk gording & rangka atap berat — kekuatan & ketahanan tinggi, serbaguna.",
    description:
      "Besi CNP hitam berprofil kanal C untuk gording, rangka atap baja konvensional, dan struktur. Kekuatan dan ketahanan tinggi, multifungsi, mudah dipasang dan difabrikasi, dengan biaya lebih efisien.",
    specs: [
      { label: "Profil", value: "Kanal C (CNP)" },
      { label: "Material", value: "Baja hitam" },
      { label: "Panjang", value: "6 m per batang" },
      { label: "Aplikasi", value: "Gording & rangka atap" },
    ],
    uses: ["Gording atap", "Rangka baja", "Purlin", "Struktur ringan"],
  },
  {
    slug: "besi-siku",
    name: "Besi Siku",
    category: "Besi Struktural",
    department: "struktur-baja",
    badge: "Struktural",
    stock: "ready",
    image: "",
    summary:
      "Besi siku (L) untuk rangka, sambungan & dudukan — kuat, kokoh, efisien dan serbaguna.",
    description:
      "Besi siku berprofil L untuk rangka, bracket, sambungan, dan dudukan. Kuat dan kokoh, serbaguna, efisien dan ekonomis, tersedia dalam berbagai ukuran untuk menjaga stabilitas struktur.",
    specs: [
      { label: "Profil", value: "Siku (L)" },
      { label: "Material", value: "Baja struktural" },
      { label: "Panjang", value: "6 m per batang" },
      { label: "Ukuran", value: "Beragam pilihan" },
    ],
    uses: ["Rangka & bracket", "Sambungan struktur", "Dudukan", "Pagar"],
  },
  {
    slug: "besi-nako",
    name: "Besi Nako",
    category: "Besi Struktural",
    department: "struktur-baja",
    badge: "Per Batang",
    stock: "ready",
    priceFrom: "Rp42.000",
    image: "/products/nako-polos.png",
    summary:
      "Besi nako (jalusi) untuk teralis & ventilasi — mudah dibentuk, multifungsi, dan harga terjangkau.",
    description:
      "Besi nako tipe 8/10/12 untuk teralis jendela, pagar, dan ventilasi. Mudah dibentuk dan dipotong, multifungsi, tersedia beragam ukuran, mudah dipasang dengan harga terjangkau.",
    specs: [
      { label: "Tipe", value: "8, 10, 12" },
      { label: "Ukuran", value: "8×8, 10×10, 12×12 mm" },
      { label: "Panjang", value: "6 m per batang" },
      { label: "Aplikasi", value: "Teralis & ventilasi" },
    ],
    uses: ["Teralis jendela", "Pagar", "Ventilasi", "Kerangka dekoratif"],
  },
  {
    slug: "besi-beton-full",
    name: "Besi Beton Full (Banci)",
    category: "Besi Struktural",
    department: "struktur-baja",
    badge: "Tulangan",
    stock: "ready",
    priceFrom: "Rp26.000",
    image: "",
    summary:
      "Besi beton untuk tulangan cor — kekuatan tarik tinggi, daya lekat baik, dan harga ekonomis.",
    description:
      "Besi beton (full/banci) sebagai tulangan beton untuk kolom, balok, dan plat lantai. Kekuatan tarik tinggi, daya lekat tinggi dengan beton, mudah dibentuk dan dipasang, serta tersedia dalam berbagai ukuran.",
    specs: [
      { label: "Jenis", value: "Beton polos" },
      { label: "Keunggulan", value: "Daya lekat tinggi" },
      { label: "Panjang", value: "Per batang" },
      { label: "Ukuran", value: "Beragam diameter" },
    ],
    uses: ["Tulangan kolom & balok", "Plat lantai", "Sloof", "Cor beton"],
  },
  {
    slug: "besi-beton-sertifikat",
    name: "Besi Beton Sertifikat (SNI)",
    category: "Besi Struktural",
    department: "struktur-baja",
    badge: "SNI",
    stock: "ready",
    priceFrom: "Rp29.000",
    image: "",
    summary:
      "Besi beton berstandar SNI untuk proyek struktural yang menuntut sertifikasi & kekuatan terjamin.",
    description:
      "Besi beton bersertifikat SNI dengan dimensi dan mutu terjamin untuk proyek struktural. Kekuatan tarik tinggi, daya lekat tinggi dengan beton, mudah dibentuk dan dipasang, tersedia berbagai ukuran.",
    specs: [
      { label: "Standar", value: "SNI bersertifikat" },
      { label: "Jenis", value: "Polos / ulir" },
      { label: "Panjang", value: "Per batang" },
      { label: "Ukuran", value: "Beragam diameter" },
    ],
    uses: ["Proyek bersertifikat", "Struktur gedung", "Tulangan utama", "Cor beton"],
  },

  /* — Plat Besi — */
  {
    slug: "plat-bordes",
    name: "Plat Bordes",
    category: "Plat Besi",
    department: "struktur-baja",
    badge: "Anti Selip",
    stock: "ready",
    priceFrom: "Rp613.000",
    image: "",
    summary:
      "Plat besi bermotif (bordes) anti selip untuk tangga & lantai injak — kuat, kokoh, dan serbaguna.",
    description:
      "Plat bordes dengan permukaan bermotif anti selip untuk anak tangga, lantai injak, dan platform. Kuat dan kokoh, serbaguna, efisien dan ekonomis, tersedia dalam berbagai ukuran untuk menjaga stabilitas struktur.",
    specs: [
      { label: "Tebal", value: "1,8 – 4,0 mm" },
      { label: "Ukuran", value: "120 × 240 cm" },
      { label: "Permukaan", value: "Bermotif anti selip" },
      { label: "Aplikasi", value: "Tangga & lantai injak" },
    ],
    uses: ["Anak tangga", "Lantai injak", "Platform mesin", "Jembatan kecil"],
  },
  {
    slug: "plat-galvanis",
    name: "Plat Galvanis",
    category: "Plat Besi",
    department: "struktur-baja",
    badge: "Galvanis",
    stock: "ready",
    priceFrom: "Rp253.000",
    image: "/products/plat.jpg",
    summary:
      "Plat galvanis lembaran anti karat untuk talang, ducting & fabrikasi — kuat, serbaguna, dan ekonomis.",
    description:
      "Plat galvanis lembaran dengan lapisan seng anti karat untuk talang, ducting, penutup, dan fabrikasi ringan. Kuat dan kokoh, serbaguna, efisien dan ekonomis, tersedia berbagai ukuran dan cocok untuk berbagai aplikasi.",
    specs: [
      { label: "Tebal", value: "0,8 – 2,0 mm" },
      { label: "Ukuran", value: "120 × 240 cm" },
      { label: "Lapisan", value: "Galvanis (anti karat)" },
      { label: "Aplikasi", value: "Talang, ducting, fabrikasi" },
    ],
    uses: ["Talang air", "Ducting", "Penutup & flashing", "Fabrikasi ringan"],
  },
  {
    slug: "plat-eyser-hitam",
    name: "Plat Eyser / Hitam",
    category: "Plat Besi",
    department: "struktur-baja",
    badge: "Lembaran",
    stock: "ready",
    priceFrom: "Rp231.000",
    image: "",
    summary:
      "Plat besi hitam (eyser) lembaran untuk base plate, gusset & fabrikasi — kuat dan serbaguna.",
    description:
      "Plat eyser/hitam lembaran untuk base plate, pelat sambung (gusset), dan kebutuhan fabrikasi. Kuat dan kokoh, serbaguna, efisien dan ekonomis, tersedia berbagai ukuran dan cocok untuk berbagai aplikasi.",
    specs: [
      { label: "Tebal", value: "0,7 – 4,0 mm" },
      { label: "Ukuran", value: "120 × 240 cm" },
      { label: "Material", value: "Baja hitam (eyser)" },
      { label: "Aplikasi", value: "Base plate & fabrikasi" },
    ],
    uses: ["Base plate kolom", "Pelat sambung", "Fabrikasi", "Penguat struktur"],
  },
  {
    slug: "plat-strip",
    name: "Plat Strip",
    category: "Plat Besi",
    department: "struktur-baja",
    badge: "Per Batang",
    stock: "ready",
    priceFrom: "Rp14.000",
    image: "",
    summary:
      "Plat strip besi pipih multifungsi untuk pengikat, bracket & teralis — mudah dibentuk dan dipotong.",
    description:
      "Plat strip besi pipih untuk pengikat, bracket, teralis, dan penguat. Mudah dibentuk dan dipotong, multifungsi, tersedia beragam ukuran, mudah dipasang dengan harga terjangkau.",
    specs: [
      { label: "Lebar", value: "19 / 30 / 38 mm" },
      { label: "Panjang", value: "2 m & 6 m" },
      { label: "Material", value: "Baja strip" },
      { label: "Aplikasi", value: "Pengikat & bracket" },
    ],
    uses: ["Bracket & pengikat", "Teralis", "Penguat sambungan", "Kerangka"],
  },

  /* — Wiremesh & Kawat — */
  {
    slug: "wiremesh",
    name: "Wiremesh",
    category: "Wiremesh & Kawat",
    department: "struktur-baja",
    brand: "Hot Rolled",
    badge: "Per Lembar",
    stock: "ready",
    featured: true,
    priceFrom: "Rp483.000",
    image: "/products/wiremesh.png",
    summary:
      "Anyaman tulangan siap pakai untuk cor dak & lantai — mempercepat pekerjaan, efisien dan ekonomis.",
    description:
      "Wiremesh adalah anyaman besi tulangan siap pasang untuk pengecoran plat lantai, dak, dan jalan. Mempercepat proses pekerjaan, daya lekat tinggi dengan beton, efisien dan ekonomis, serta tersedia dalam berbagai ukuran.",
    specs: [
      { label: "Bahan", value: "Hot Rolled Steel" },
      { label: "Diameter", value: "6 / 8 / 10 mm" },
      { label: "Ukuran", value: "2,1 × 5,4 m" },
      { label: "Bentuk", value: "Lembaran & roll" },
    ],
    uses: ["Cor plat lantai", "Dak beton", "Cor jalan & halaman", "Lantai gudang"],
  },
  {
    slug: "kawat-bendrat-las",
    name: "Kawat Bendrat & Las",
    category: "Wiremesh & Kawat",
    department: "struktur-baja",
    badge: "Per Kg / Rol",
    stock: "ready",
    image: "/products/kawat.png",
    summary:
      "Aneka kawat konstruksi: bendrat pengikat tulangan dan kawat las — tersedia per kg maupun rol.",
    description:
      "Kelengkapan kawat untuk konstruksi: kawat bendrat untuk mengikat tulangan besi dan kawat las untuk pengelasan. Praktis, ekonomis, dan tersedia per kilogram maupun per rol sesuai kebutuhan.",
    specs: [
      { label: "Kawat bendrat", value: "Pengikat tulangan" },
      { label: "Kawat las", value: "Untuk pengelasan" },
      { label: "Satuan", value: "Kg / rol" },
      { label: "Aplikasi", value: "Pengikat & las" },
    ],
    uses: ["Mengikat tulangan", "Pengelasan", "Pagar & kandang", "Serbaguna"],
  },
  {
    slug: "kawat-expanda",
    name: "Kawat Expanda (Expanded Metal)",
    category: "Wiremesh & Kawat",
    department: "struktur-baja",
    brand: "FF 2028",
    badge: "Per Lembar",
    stock: "ready",
    priceFrom: "Rp210.000",
    image: "",
    summary:
      "Lembaran expanded metal untuk plester, pagar & dekorasi — anti karat, kuat, dan mudah dipasang.",
    description:
      "Kawat expanda (expanded metal) untuk penguat plesteran, pagar, ventilasi, dan elemen dekoratif. Tahan cuaca, efisien dan ekonomis, mudah dipasang, memberi ventilasi & pencahayaan alami, serta anti karat.",
    specs: [
      { label: "Tipe", value: "FF 2028" },
      { label: "Ukuran", value: "240 × 120 cm" },
      { label: "Sifat", value: "Anti karat, tahan cuaca" },
      { label: "Aplikasi", value: "Plester, pagar, dekorasi" },
    ],
    uses: ["Penguat plesteran", "Pagar & teralis", "Ventilasi", "Dekorasi fasad"],
  },

  /* ═══ ATAP & SPANDEK ═════════════════════════════════════════════════ */

  /* — Spandek — */
  {
    slug: "atap-metal-warna",
    name: "Atap Metal / Spandek Warna",
    category: "Spandek",
    department: "atap-spandek",
    brand: "Zincalume",
    badge: "Warna",
    stock: "ready",
    featured: true,
    image: "/products/atap-metal.png",
    summary:
      "Atap metal berwarna ringan & kuat dengan banyak pilihan warna — estetis untuk hunian & komersial.",
    description:
      "Atap metal/spandek berwarna dari plat zincalume yang ringan, kuat, dan tahan karat dengan beragam pilihan warna. Tampilan estetis, pemasangan mudah dan murah, serta perawatan minim untuk atap rumah hingga bangunan komersial.",
    specs: [
      { label: "Bahan", value: "Plat Zincalume" },
      { label: "Warna", value: "Merah, biru, hijau, dll" },
      { label: "Panjang", value: "4 m, 5 m, 6 m" },
      { label: "Keunggulan", value: "Ringan, anti karat" },
    ],
    uses: ["Atap rumah", "Atap teras & carport", "Gudang", "Bangunan komersial"],
  },
  {
    slug: "atap-spandek-pasir",
    name: "Atap Spandek Pasir",
    category: "Spandek",
    department: "atap-spandek",
    brand: "Zincalume",
    badge: "Peredam Panas",
    stock: "ready",
    priceFrom: "Rp35.000",
    image: "",
    summary:
      "Spandek dilapis pasir silika yang meredam panas & suara hujan — tampilan estetis dan tahan lama.",
    description:
      "Atap spandek pasir dari plat zincalume yang dilapisi pasir silika sehingga meredam suara hujan lebih baik dan mengurangi panas dibanding spandek polos. Tahan rayap, tahan lama dan kuat, estetis, dengan biaya perawatan minim.",
    specs: [
      { label: "Bahan", value: "Zincalume + pasir silika" },
      { label: "Tebal", value: "0,35 & 0,45 mm" },
      { label: "Warna", value: "Merah, hitam, cokelat, hijau, biru" },
      { label: "Panjang", value: "4 m, 5 m, 6 m" },
    ],
    uses: ["Atap rumah", "Atap teras", "Kanopi", "Bangunan komersial"],
  },
  {
    slug: "atap-spandek-polos",
    name: "Atap Spandek Polos",
    category: "Spandek",
    department: "atap-spandek",
    brand: "Zincalume",
    badge: "Galvalume",
    stock: "ready",
    priceFrom: "Rp26.500",
    image: "",
    summary:
      "Spandek zincalume polos yang ringan, kuat, dan ekonomis untuk gudang, pabrik, dan carport.",
    description:
      "Atap spandek polos dari plat zincalume (aluminium & seng) yang ringan, tahan karat, dan ekonomis. Tahan rayap, tahan lama dan kuat, pemasangan mudah dan murah, cocok untuk atap gudang, pabrik, garasi, hingga hunian.",
    specs: [
      { label: "Bahan", value: "Plat Zincalume" },
      { label: "Tebal", value: "0,30 & 0,35 mm" },
      { label: "Panjang", value: "4 m, 5 m, 6 m" },
      { label: "Keunggulan", value: "Ringan & ekonomis" },
    ],
    uses: ["Atap gudang", "Atap pabrik", "Carport", "Bangunan komersial"],
  },
  {
    slug: "atap-spandek-transparan",
    name: "Atap Spandek Transparan",
    category: "Spandek",
    department: "atap-spandek",
    brand: "Polycarbonate",
    badge: "Transparan",
    stock: "ready",
    priceFrom: "Rp85.000",
    image: "",
    summary:
      "Lembaran transparan dari polycarbonate resin untuk pencahayaan alami pada atap spandek.",
    description:
      "Atap spandek transparan dari polycarbonate resin untuk memasukkan cahaya alami pada area beratap. Tahan lama dan kuat, meredam suara, mengurangi panas, dan dipasang berselang dengan spandek untuk skylight hemat energi.",
    specs: [
      { label: "Bahan", value: "Polycarbonate Resin" },
      { label: "Tebal", value: "0,30 & 0,35 mm" },
      { label: "Warna", value: "Transparan" },
      { label: "Panjang", value: "4 m, 5 m, 6 m" },
    ],
    uses: ["Skylight", "Pencahayaan alami", "Kanopi", "Area jemur"],
  },

  /* — Bondeck — */
  {
    slug: "bondeck-floordeck",
    name: "Bondeck / Floordeck",
    category: "Bondeck",
    department: "atap-spandek",
    brand: "Bondek",
    badge: "Galvalume",
    stock: "ready",
    featured: true,
    priceFrom: "Rp65.000",
    image: "/products/bondeck.png",
    summary:
      "Pelat baja bergelombang sebagai bekisting permanen sekaligus tulangan bawah lantai cor — kuat & efisien.",
    description:
      "Bondeck (floordeck) adalah pelat zincalume berprofil yang berfungsi sebagai bekisting permanen sekaligus tulangan bawah pada lantai beton bertingkat. Efisiensi waktu & tenaga, lebih ekonomis, struktur lebih kuat, permukaan bawah rapi, dan mengurangi limbah konstruksi.",
    specs: [
      { label: "Bahan", value: "Plat Zincalume (galvalume)" },
      { label: "Tebal", value: "0,65 & 0,75 mm" },
      { label: "Lebar efektif", value: "1 meter" },
      { label: "Panjang", value: "4 m, 5 m, 6 m" },
    ],
    uses: ["Dak lantai cor", "Mezzanine", "Lantai bertingkat", "Bangunan komersial"],
  },

  /* — Genteng Metal — */
  {
    slug: "genteng-metal-pasir",
    name: "Genteng Metal Pasir",
    category: "Genteng Metal",
    department: "atap-spandek",
    brand: "Genteng Metal",
    badge: "Berpasir",
    stock: "ready",
    featured: true,
    priceFrom: "Rp21.500",
    image: "/products/genteng-metal.png",
    summary:
      "Genteng metal berpasir ringan menyerupai genteng konvensional — hemat waktu, kuat, dan rapi.",
    description:
      "Genteng metal berpasir memberikan tampilan estetis menyerupai genteng tanah liat namun jauh lebih ringan dan tahan lama. Hemat waktu dan biaya, kuat dan kokoh, struktur rapi, praktis dalam pemasangan, dengan biaya perawatan minim.",
    specs: [
      { label: "Tipe", value: "Genteng metal berpasir" },
      { label: "Permukaan", value: "Lapis pasir" },
      { label: "Warna", value: "Beragam pilihan" },
      { label: "Satuan", value: "Per lembar / multi-roof" },
    ],
    uses: ["Atap rumah tinggal", "Perumahan", "Renovasi atap", "Villa"],
  },
  {
    slug: "koko-roof",
    name: "Genteng Metal Koko Roof",
    category: "Genteng Metal",
    department: "atap-spandek",
    brand: "Koko Roof",
    badge: "Coral / Warna",
    stock: "ready",
    priceFrom: "Rp33.000",
    image: "",
    summary:
      "Genteng metal Koko Roof (coral & warna) — ringan, kuat, dan rapi dengan tampilan modern.",
    description:
      "Genteng metal Koko Roof tersedia tipe coral dan warna. Hemat waktu dan biaya, kuat dan kokoh, struktur rapi, praktis dipasang, dengan perawatan minim. Pilihan ekonomis untuk atap hunian.",
    specs: [
      { label: "Panjang efektif", value: "56 cm" },
      { label: "Lebar efektif", value: "80 cm" },
      { label: "Warna", value: "Cokelat & hitam" },
      { label: "Tipe", value: "Coral / Warna" },
    ],
    uses: ["Atap rumah", "Perumahan", "Renovasi atap", "Ruko"],
  },
  {
    slug: "ultima-roof",
    name: "Genteng Metal Ultima Roof",
    category: "Genteng Metal",
    department: "atap-spandek",
    brand: "Ultima Roof",
    badge: "Coral / Warna",
    stock: "ready",
    priceFrom: "Rp44.000",
    image: "",
    summary:
      "Genteng metal Ultima Roof (coral & warna) dengan modul lebih panjang — efisien dan tahan lama.",
    description:
      "Genteng metal Ultima Roof tersedia tipe coral dan warna dengan panjang efektif lebih besar. Hemat waktu dan biaya, kuat dan kokoh, rapi, praktis dipasang, dengan perawatan minim.",
    specs: [
      { label: "Panjang efektif", value: "72 cm" },
      { label: "Lebar efektif", value: "80 cm" },
      { label: "Warna", value: "Cokelat & hitam" },
      { label: "Tipe", value: "Coral / Warna" },
    ],
    uses: ["Atap rumah", "Perumahan", "Renovasi atap", "Villa"],
  },

  /* — Atap Lain — */
  {
    slug: "atap-asbes",
    name: "Atap Asbes / Fiber Semen",
    category: "Atap Lain",
    department: "atap-spandek",
    badge: "Gelombang",
    stock: "ready",
    image: "/products/asbes.png",
    summary:
      "Lembaran atap gelombang fiber semen yang ekonomis, meredam panas, dan mudah dipasang.",
    description:
      "Atap asbes/fiber semen bergelombang sebagai penutup atap ekonomis untuk gudang, garasi, dan bangunan semi permanen. Meredam panas, tidak menghantarkan listrik, kuat, dan mudah dipasang.",
    specs: [
      { label: "Bentuk", value: "Lembaran gelombang" },
      { label: "Material", value: "Fiber semen" },
      { label: "Keunggulan", value: "Ekonomis, peredam panas" },
      { label: "Aplikasi", value: "Atap ekonomis" },
    ],
    uses: ["Atap gudang", "Garasi", "Bangunan semi permanen", "Kandang"],
  },
  {
    slug: "atap-onduline",
    name: "Atap Onduline (Bitumen)",
    category: "Atap Lain",
    department: "atap-spandek",
    brand: "Onduline",
    badge: "Bitumen",
    stock: "ready",
    image: "/products/onduline.png",
    summary:
      "Atap bitumen bergelombang ringan & lentur — kedap air, senyap saat hujan, dengan warna tahan lama.",
    description:
      "Atap Onduline dari bahan bitumen bergelombang yang ringan, lentur, dan kedap air. Senyap saat hujan, tidak berkarat, mudah dipasang mengikuti lengkung atap, dengan warna yang tahan lama — cocok untuk hunian dan area tropis.",
    specs: [
      { label: "Material", value: "Bitumen bergelombang" },
      { label: "Sifat", value: "Ringan, lentur, kedap air" },
      { label: "Warna", value: "Merah, hijau, cokelat, hitam" },
      { label: "Keunggulan", value: "Senyap & anti karat" },
    ],
    uses: ["Atap rumah", "Kanopi melengkung", "Gazebo", "Renovasi atap"],
  },

  /* — Nok & Aksesoris Atap — */
  {
    slug: "nok-atap",
    name: "Nok Atap (Spandek & Genteng Metal)",
    category: "Nok & Aksesoris Atap",
    department: "atap-spandek",
    badge: "Per Lembar",
    stock: "ready",
    priceFrom: "Rp11.000",
    image: "/products/nok.png",
    summary:
      "Penutup pertemuan atap (nok) untuk spandek & genteng metal — rapi, kuat, dan kedap bocor.",
    description:
      "Nok atap sebagai penutup pertemuan bidang atap (bubungan) untuk spandek pasir/polos dan genteng metal Koko/Ultima. Hemat waktu dan biaya, kuat dan kokoh, rapi, praktis dipasang, mencegah kebocoran pada sambungan atap.",
    specs: [
      { label: "Tipe", value: "Nok spandek & genteng metal" },
      { label: "Fungsi", value: "Penutup bubungan" },
      { label: "Warna", value: "Menyesuaikan atap" },
      { label: "Satuan", value: "Per lembar / meter" },
    ],
    uses: ["Bubungan atap", "Sambungan bidang atap", "Anti bocor", "Finishing atap"],
  },

  /* ═══ ATAP uPVC ═══════════════════════════════════════════════════════ */
  {
    slug: "alderon-double-layer",
    name: "Atap Alderon Double Layer",
    category: "Alderon",
    department: "atap-upvc",
    brand: "Alderon",
    badge: "uPVC",
    stock: "ready",
    featured: true,
    priceFrom: "Rp149.000",
    image: "/products/alderon.jpg",
    summary:
      "Atap uPVC berongga (twinwall) dengan peredaman panas & suara maksimal — premium dan tahan lama.",
    description:
      "Atap uPVC Alderon double layer berongga (twinwall) memberikan insulasi panas dan peredaman suara terbaik di kelasnya. Tahan korosi dan bahan kimia, tidak menghantarkan panas seperti logam, dan jauh lebih senyap saat hujan.",
    specs: [
      { label: "Material", value: "uPVC double layer (twinwall)" },
      { label: "Tebal", value: "10 mm" },
      { label: "Lebar efektif", value: "83 cm" },
      { label: "Warna", value: "Putih, biru, abu" },
    ],
    uses: ["Kanopi premium", "Atap rumah", "Foodcourt", "Area komersial"],
  },
  {
    slug: "alderon-single-layer",
    name: "Atap Alderon Single Layer",
    category: "Alderon",
    department: "atap-upvc",
    brand: "Alderon",
    badge: "uPVC",
    stock: "ready",
    priceFrom: "Rp75.000",
    image: "",
    summary:
      "Atap uPVC single layer yang kuat, anti karat, dan meredam panas — efisien untuk kanopi & carport.",
    description:
      "Atap uPVC Alderon single layer tahan terhadap korosi dan bahan kimia, tidak menghantarkan panas seperti logam, serta lebih senyap saat hujan. Pilihan efisien untuk kanopi, carport, dan teras.",
    specs: [
      { label: "Material", value: "uPVC single layer" },
      { label: "Tebal", value: "6 mm" },
      { label: "Panjang", value: "4 m, 5 m, 6 m" },
      { label: "Warna", value: "Putih, biru, abu" },
    ],
    uses: ["Kanopi", "Carport", "Atap teras", "Area basah"],
  },
  {
    slug: "alderon-twinlite-greca",
    name: "Atap Alderon Twinlite Greca",
    category: "Alderon",
    department: "atap-upvc",
    brand: "Alderon",
    badge: "Transparan",
    stock: "ready",
    priceFrom: "Rp223.000",
    image: "",
    summary:
      "uPVC twinwall transparan (greca) yang meneruskan cahaya alami namun tetap meredam panas.",
    description:
      "Alderon Twinlite Greca adalah uPVC twinwall transparan yang meneruskan cahaya alami sekaligus meredam panas. Cocok untuk skylight kanopi dan area yang membutuhkan pencahayaan tanpa silau dan panas berlebih.",
    specs: [
      { label: "Material", value: "uPVC twinwall" },
      { label: "Tebal", value: "10 mm" },
      { label: "Lebar efektif", value: "75 cm" },
      { label: "Warna", value: "Transparan" },
    ],
    uses: ["Skylight kanopi", "Pencahayaan alami", "Teras", "Area transisi"],
  },
  {
    slug: "atlas-double-layer",
    name: "Atap Atlas Double Layer",
    category: "Atlas",
    department: "atap-upvc",
    brand: "Atlas",
    badge: "uPVC",
    stock: "ready",
    priceFrom: "Rp115.000",
    image: "",
    summary:
      "Atap uPVC Atlas double layer — alternatif twinwall ekonomis dengan peredaman panas & suara baik.",
    description:
      "Atap uPVC Atlas double layer berongga sebagai alternatif twinwall yang ekonomis dengan peredaman panas dan suara yang baik. Tahan karat dan korosi, ringan, dan tahan lama.",
    specs: [
      { label: "Material", value: "uPVC double layer" },
      { label: "Tebal", value: "10 mm" },
      { label: "Lebar efektif", value: "83 cm" },
      { label: "Warna", value: "Putih, biru" },
    ],
    uses: ["Kanopi", "Atap rumah", "Carport", "Area komersial"],
  },
  {
    slug: "atlas-single-layer",
    name: "Atap Atlas Single Layer",
    category: "Atlas",
    department: "atap-upvc",
    brand: "Atlas",
    badge: "uPVC",
    stock: "ready",
    priceFrom: "Rp61.000",
    image: "",
    summary:
      "Atap uPVC Atlas single layer yang ringan & anti karat — pilihan hemat untuk kanopi dan teras.",
    description:
      "Atap uPVC Atlas single layer yang ringan, anti karat, dan meredam panas. Pilihan paling hemat di lini uPVC untuk kanopi, carport, dan teras.",
    specs: [
      { label: "Material", value: "uPVC single layer" },
      { label: "Tebal", value: "10 mm" },
      { label: "Panjang", value: "4 m, 5 m, 6 m" },
      { label: "Warna", value: "Putih" },
    ],
    uses: ["Kanopi", "Carport", "Teras", "Area basah"],
  },
  {
    slug: "takka-upvc-double-layer",
    name: "Atap Takka uPVC Double Layer",
    category: "Takka uPVC",
    department: "atap-upvc",
    brand: "TAKKA",
    badge: "uPVC",
    stock: "ready",
    priceFrom: "Rp110.000",
    image: "",
    summary:
      "Atap uPVC double layer label TAKKA — peredaman panas & suara baik dengan harga bersaing.",
    description:
      "Atap Takka uPVC double layer berongga dengan peredaman panas dan suara yang baik serta harga bersaing. Tahan karat dan korosi, ringan, dan tahan lama untuk kanopi dan atap hunian.",
    specs: [
      { label: "Material", value: "uPVC double layer" },
      { label: "Tebal", value: "10 mm" },
      { label: "Lebar efektif", value: "83 cm" },
      { label: "Warna", value: "Putih" },
    ],
    uses: ["Kanopi", "Atap rumah", "Carport", "Area komersial"],
  },

  /* ═══ PLAFON, DINDING & INTERIOR ═════════════════════════════════════ */

  /* — Plafon — */
  {
    slug: "plafon-pvc",
    name: "Plafon PVC",
    category: "Plafon",
    department: "plafon-interior",
    badge: "Anti Air",
    stock: "ready",
    featured: true,
    image: "/products/plafond-pvc.png",
    summary:
      "Panel plafon PVC anti air & anti rayap dengan beragam motif — rapi, ringan, dan mudah dibersihkan.",
    description:
      "Plafon PVC berupa panel modular yang anti air, anti rayap, dan tidak mudah lapuk. Tersedia beragam motif (polos, kayu, marmer), ringan, mudah dipasang dan dibersihkan — ideal untuk area lembap seperti dapur dan kamar mandi.",
    specs: [
      { label: "Material", value: "PVC panel" },
      { label: "Motif", value: "Polos, kayu, marmer" },
      { label: "Sifat", value: "Anti air & rayap" },
      { label: "Aplikasi", value: "Plafon interior" },
    ],
    uses: ["Plafon ruang", "Dapur & kamar mandi", "Teras", "Renovasi plafon"],
  },
  {
    slug: "gypsum",
    name: "Papan Gypsum",
    category: "Plafon",
    department: "plafon-interior",
    badge: "9 mm",
    stock: "ready",
    priceFrom: "Rp48.000",
    image: "/products/gypsum.png",
    summary:
      "Papan gypsum permukaan halus untuk plafon & partisi — mudah dibentuk, tahan api, dan kedap suara.",
    description:
      "Papan gypsum dengan permukaan halus dan rapi untuk plafon dan partisi interior. Mudah dibentuk dan dipasang, efisien dan ekonomis, tahan terhadap api, ramah lingkungan, dan membantu meredam suara.",
    specs: [
      { label: "Tebal", value: "9 mm" },
      { label: "Ukuran", value: "120 × 240 cm" },
      { label: "Berat", value: "± 16 kg" },
      { label: "Warna", value: "Putih" },
    ],
    uses: ["Plafon interior", "Partisi & sekat", "Drop ceiling", "Backdrop"],
  },

  /* — List / Profil — */
  {
    slug: "list-gypsum",
    name: "List Gypsum",
    category: "List / Profil",
    department: "plafon-interior",
    badge: "Profil",
    stock: "ready",
    image: "/products/list-gypsum.png",
    summary:
      "List gypsum dekoratif sebagai penutup pertemuan plafon & dinding — rapi dan menambah estetika.",
    description:
      "List gypsum berfungsi sebagai lis profil dekoratif pada pertemuan plafon dan dinding. Memberikan kesan rapi dan estetis, mudah dipasang, tersedia dalam beragam motif dan ukuran.",
    specs: [
      { label: "Material", value: "Gypsum" },
      { label: "Fungsi", value: "List plafon dekoratif" },
      { label: "Motif", value: "Beragam pilihan" },
      { label: "Satuan", value: "Per batang" },
    ],
    uses: ["Lis plafon", "Pertemuan dinding-plafon", "Dekorasi interior", "Finishing"],
  },
  {
    slug: "list-plafond",
    name: "List Plafond",
    category: "List / Profil",
    department: "plafon-interior",
    badge: "Profil",
    stock: "ready",
    image: "/products/list-plafond.png",
    summary:
      "List plafond sebagai bingkai tepi plafon — merapikan sambungan dan mempercantik tampilan ruang.",
    description:
      "List plafond digunakan sebagai bingkai tepi plafon untuk merapikan sambungan antara plafon dan dinding. Ringan, mudah dipasang, dan memberikan tampilan akhir yang rapi.",
    specs: [
      { label: "Fungsi", value: "Bingkai tepi plafon" },
      { label: "Pemasangan", value: "Mudah & cepat" },
      { label: "Motif", value: "Beragam pilihan" },
      { label: "Satuan", value: "Per batang" },
    ],
    uses: ["Bingkai plafon", "Finishing tepi", "Dekorasi interior", "Renovasi"],
  },
  {
    slug: "list-pvc",
    name: "List PVC",
    category: "List / Profil",
    department: "plafon-interior",
    badge: "Anti Air",
    stock: "ready",
    image: "/products/list-pvc.png",
    summary:
      "List PVC anti air & anti rayap untuk finishing plafon PVC — awet di area lembap dan mudah dibersihkan.",
    description:
      "List PVC sebagai profil penutup dan finishing untuk plafon PVC. Anti air dan anti rayap, tidak mudah lapuk, cocok untuk area lembap, mudah dipasang dan dibersihkan.",
    specs: [
      { label: "Material", value: "PVC" },
      { label: "Sifat", value: "Anti air & rayap" },
      { label: "Fungsi", value: "Finishing plafon PVC" },
      { label: "Satuan", value: "Per batang" },
    ],
    uses: ["Finishing plafon PVC", "Area lembap", "Lis dinding", "Dekorasi"],
  },

  /* — Board & Panel — */
  {
    slug: "triplek-furniture",
    name: "Triplek Furniture",
    category: "Board & Panel",
    department: "plafon-interior",
    badge: "Plywood",
    stock: "ready",
    featured: true,
    priceFrom: "Rp64.000",
    image: "/products/triplek.png",
    summary:
      "Triplek/plywood furniture permukaan halus & anti melengkung — kuat namun ringan untuk interior.",
    description:
      "Triplek furniture (plywood, melamin, blokmin) dengan permukaan halus dan rapi untuk pembuatan furnitur dan interior. Mudah dibentuk dan dipasang, efisien dan ekonomis, anti melengkung, ringan tapi kokoh.",
    specs: [
      { label: "Tebal", value: "3 – 18 mm" },
      { label: "Ukuran", value: "120 × 240 cm" },
      { label: "Jenis", value: "Plywood, Melamin, Blokmin" },
      { label: "Permukaan", value: "Halus, anti melengkung" },
    ],
    uses: ["Furnitur & lemari", "Partisi interior", "Backdrop", "Pelapis"],
  },
  {
    slug: "grc-board-plank",
    name: "GRC Board & Plank",
    category: "Board & Panel",
    department: "plafon-interior",
    badge: "Tahan Cuaca",
    stock: "ready",
    priceFrom: "Rp17.000",
    image: "",
    summary:
      "Papan GRC tahan cuaca & api untuk plafon, dinding & lisplang — ringan tapi kokoh dan tahan lama.",
    description:
      "GRC Board & Plank (glassfibre reinforced cement) untuk plafon, dinding partisi, lisplang, dan fasad. Permukaan halus, tahan cuaca, tahan api dan tidak mudah terbakar, ringan tapi kokoh, serta ramah lingkungan.",
    specs: [
      { label: "Tebal", value: "4 mm" },
      { label: "Jenis", value: "Polos, serat, board" },
      { label: "Panjang", value: "240 / 244 / 300 cm" },
      { label: "Lebar", value: "10 – 30 cm" },
    ],
    uses: ["Lisplang", "Plafon luar", "Dinding partisi", "Fasad"],
  },
  {
    slug: "pvc-foam-board",
    name: "PVC Foam Board",
    category: "Board & Panel",
    department: "plafon-interior",
    badge: "Anti Air",
    stock: "ready",
    priceFrom: "Rp155.000",
    image: "/products/pvc-board.png",
    summary:
      "Papan PVC foam anti air & rayap sebagai pengganti triplek untuk furnitur area basah — mudah dicetak.",
    description:
      "PVC Foam Board sebagai pengganti kayu/triplek untuk furnitur dan partisi, khususnya area basah. Permukaan halus dan rapi, tahan air dan anti rayap, tahan bahan kimia, mudah dipasang dan dicetak, dengan harga terjangkau.",
    specs: [
      { label: "Tebal", value: "5 mm & 18 mm" },
      { label: "Ukuran", value: "120 × 240 cm" },
      { label: "Sifat", value: "Tahan air & anti rayap" },
      { label: "Aplikasi", value: "Furnitur area basah" },
    ],
    uses: ["Kitchen set", "Furnitur kamar mandi", "Partisi", "Pelapis dinding"],
  },

  /* — Dinding — */
  {
    slug: "bata-ringan-hebel",
    name: "Bata Ringan (Hebel)",
    category: "Dinding",
    department: "plafon-interior",
    badge: "AAC",
    stock: "ready",
    image: "/products/hebel.jpg",
    summary:
      "Bata ringan AAC presisi yang ringan & hemat — pemasangan cepat, meredam panas, dan kedap suara.",
    description:
      "Bata ringan (hebel/AAC) dengan dimensi presisi yang ringan dan hemat material perekat. Pemasangan lebih cepat, meredam panas dan suara, tahan api, serta menghasilkan dinding yang rapi dan rata.",
    specs: [
      { label: "Material", value: "AAC (autoclaved aerated concrete)" },
      { label: "Keunggulan", value: "Presisi & ringan" },
      { label: "Sifat", value: "Peredam panas & suara" },
      { label: "Aplikasi", value: "Dinding bangunan" },
    ],
    uses: ["Dinding rumah", "Partisi bata", "Pagar", "Bangunan komersial"],
  },

  /* ═══ PIPA & SALURAN AIR ═════════════════════════════════════════════ */
  {
    slug: "pipa-pvc",
    name: "Pipa PVC",
    category: "Pipa",
    department: "pipa-saluran",
    badge: "Saluran Air",
    stock: "ready",
    image: "/products/pipa-pvc.webp",
    summary:
      "Pipa PVC untuk instalasi air bersih & buang — ringan, anti karat, dan mudah disambung.",
    description:
      "Pipa PVC untuk instalasi air bersih, air buang, dan saluran. Ringan, anti karat, tahan bahan kimia, dan mudah disambung. Tersedia beragam diameter sesuai kebutuhan instalasi.",
    specs: [
      { label: "Material", value: "PVC" },
      { label: "Fungsi", value: "Air bersih & buang" },
      { label: "Diameter", value: "Beragam ukuran" },
      { label: "Sifat", value: "Anti karat & ringan" },
    ],
    uses: ["Instalasi air bersih", "Saluran air buang", "Drainase", "Talang"],
  },
  {
    slug: "pipa-besi-galvanis",
    name: "Pipa Besi / Galvanis",
    category: "Pipa",
    department: "pipa-saluran",
    badge: "Galvanis",
    stock: "ready",
    image: "/products/pipa.jpg",
    summary:
      "Pipa besi/galvanis untuk struktur ringan, railing & instalasi bertekanan — kuat dan tahan karat.",
    description:
      "Pipa besi/galvanis untuk kebutuhan struktur ringan, railing, tiang, dan instalasi air bertekanan. Kuat, tahan karat berkat lapisan galvanis, dan mudah difabrikasi.",
    specs: [
      { label: "Material", value: "Besi galvanis" },
      { label: "Bentuk", value: "Pipa bulat" },
      { label: "Sifat", value: "Tahan karat" },
      { label: "Aplikasi", value: "Struktur & instalasi" },
    ],
    uses: ["Railing & pagar", "Tiang", "Instalasi air", "Rangka ringan"],
  },
  {
    slug: "pipa-stainless",
    name: "Pipa Stainless",
    category: "Pipa",
    department: "pipa-saluran",
    badge: "Stainless",
    stock: "ready",
    priceFrom: "Rp78.000",
    image: "",
    summary:
      "Pipa stainless anti karat & korosi untuk railing dan elemen ekspos — kuat, ringan, dan estetis.",
    description:
      "Pipa stainless yang tahan karat dan korosi, kuat namun ringan, serbaguna, dan mudah dipasang & dibentuk. Pilihan untuk railing, handrail, dan elemen ekspos yang menuntut tampilan bersih dan tahan lama.",
    specs: [
      { label: "Material", value: "Stainless steel" },
      { label: "Bentuk", value: "Pipa bulat" },
      { label: "Sifat", value: "Tahan karat & korosi" },
      { label: "Aplikasi", value: "Railing & ekspos" },
    ],
    uses: ["Railing tangga", "Handrail", "Pagar minimalis", "Elemen ekspos"],
  },
  {
    slug: "aksesoris-pipa",
    name: "Aksesoris & Fitting Pipa",
    category: "Aksesoris Pipa",
    department: "pipa-saluran",
    badge: "Fitting",
    stock: "ready",
    image: "/products/aksesoris-pipa.png",
    summary:
      "Kelengkapan sambungan pipa: elbow, tee, sock, reducer & flange — untuk instalasi rapi dan rapat.",
    description:
      "Aneka aksesoris dan fitting pipa: elbow, tee, sock, reducer, dop, dan flange untuk melengkapi instalasi pipa air. Memastikan sambungan rapi, rapat, dan sesuai jalur instalasi.",
    specs: [
      { label: "Jenis", value: "Elbow, tee, sock, reducer" },
      { label: "Material", value: "PVC / besi" },
      { label: "Fungsi", value: "Sambungan pipa" },
      { label: "Ukuran", value: "Beragam diameter" },
    ],
    uses: ["Sambungan pipa", "Belokan instalasi", "Percabangan", "Penyambung"],
  },
  {
    slug: "selang-air",
    name: "Selang Air",
    category: "Aksesoris Pipa",
    department: "pipa-saluran",
    badge: "Per Meter / Rol",
    stock: "ready",
    image: "/products/selang.png",
    summary:
      "Aneka selang air (PVC, benang, spiral) untuk taman, cuci & distribusi air — lentur dan tahan lama.",
    description:
      "Aneka selang air mulai dari selang PVC bening, selang berserat (benang), hingga selang spiral untuk kebutuhan taman, cuci kendaraan, dan distribusi air. Lentur, kuat, dan tahan lama. Tersedia per meter maupun per rol.",
    specs: [
      { label: "Jenis", value: "PVC, benang, spiral" },
      { label: "Sifat", value: "Lentur & tahan lama" },
      { label: "Satuan", value: "Per meter / rol" },
      { label: "Aplikasi", value: "Taman & distribusi air" },
    ],
    uses: ["Penyiraman taman", "Cuci kendaraan", "Distribusi air", "Industri ringan"],
  },

  /* ═══ AKSESORIS & PERKAKAS ═══════════════════════════════════════════ */
  {
    slug: "baut-sekrup",
    name: "Baut & Sekrup (Screw)",
    category: "Pengencang",
    department: "aksesoris-perkakas",
    badge: "Per Pcs / Dus",
    stock: "ready",
    image: "/products/baut-screw.png",
    summary:
      "Aneka baut, sekrup roofing, sekrup gypsum & dinabolt — pengencang lengkap untuk semua pemasangan.",
    description:
      "Kelengkapan pengencang: baut & mur, sekrup roofing (atap), sekrup gypsum, dan dinabolt. Material kuat dan tahan karat untuk pemasangan rangka baja ringan, atap, plafon, dan angkur ke beton.",
    specs: [
      { label: "Jenis", value: "Baut, sekrup, dinabolt" },
      { label: "Aplikasi", value: "Rangka, atap, plafon" },
      { label: "Material", value: "Tahan karat" },
      { label: "Satuan", value: "Pcs / dus" },
    ],
    uses: ["Pemasangan atap", "Rangka baja ringan", "Plafon & partisi", "Angkur beton"],
  },
  {
    slug: "perkakas-pendukung",
    name: "Perkakas & Material Pendukung",
    category: "Perkakas",
    department: "aksesoris-perkakas",
    badge: "Pelengkap",
    stock: "ready",
    image: "",
    summary:
      "Gunting baja, mata bor, gerinda, cat besi/kayu & thinner — perkakas pendukung lengkap dalam satu tempat.",
    description:
      "Lengkapi kebutuhan pertukangan dalam satu tempat: gunting baja ringan, mata bor, mesin gerinda, cat besi/kayu, hingga thinner. Belanja material baja dan perkakas pendukungnya sekaligus di Takka Steel.",
    specs: [
      { label: "Alat potong", value: "Gunting baja, gerinda" },
      { label: "Mata bor", value: "Beragam ukuran" },
      { label: "Finishing", value: "Cat besi/kayu, thinner" },
      { label: "Fungsi", value: "Pendukung pemasangan" },
    ],
    uses: ["Pemotongan baja ringan", "Pengeboran", "Finishing & cat", "Perawatan alat"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

/** Distinct mid-level categories, in catalog order (for chip filters). */
export const productCategories = Array.from(
  new Set(products.map((p) => p.category))
);

/** Categories that belong to a department (for the /produk tabbed filter). */
export function categoriesInDepartment(dept: DepartmentSlug) {
  return Array.from(
    new Set(products.filter((p) => p.department === dept).map((p) => p.category))
  );
}

/** Flagship products shown in the featured bento + homepage bestsellers. */
export const featuredProducts = products.filter((p) => p.featured);

/** Stock labels for the gold availability badge. */
export const stockLabel: Record<StockStatus, string> = {
  ready: "Ready Stock",
  indent: "Indent",
};

/* ------------------------------------------------------------------ */
/*  Spec comparison — side-by-side variants buyers actually weigh.      */
/* ------------------------------------------------------------------ */

export type ComparisonOption = {
  slug: string;
  name: string;
  tag: string;
  recommended?: boolean;
  bestFor: string;
  rows: { label: string; value: string }[];
};

export type ComparisonGroup = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  options: ComparisonOption[];
};

export const comparisonGroups: ComparisonGroup[] = [
  {
    id: "alderon",
    label: "Atap Alderon",
    title: "Alderon Single vs Double Layer",
    subtitle:
      "Dua tipe uPVC Alderon. Pilih sesuai kebutuhan insulasi panas dan kedap suara di area Anda.",
    options: [
      {
        slug: "alderon-single-layer",
        name: "Alderon Single Layer",
        tag: "uPVC 1 lapis",
        bestFor: "Kanopi, carport, dan teras dengan budget efisien.",
        rows: [
          { label: "Material", value: "uPVC single layer" },
          { label: "Tebal", value: "6 mm" },
          { label: "Insulasi", value: "Sedang" },
          { label: "Harga mulai", value: "Rp75.000 / m" },
        ],
      },
      {
        slug: "alderon-double-layer",
        name: "Alderon Double Layer",
        tag: "uPVC twinwall",
        recommended: true,
        bestFor: "Atap rumah, foodcourt, dan area komersial yang butuh kenyamanan ekstra.",
        rows: [
          { label: "Material", value: "uPVC double layer (twinwall)" },
          { label: "Tebal", value: "10 mm" },
          { label: "Insulasi", value: "Maksimal, kedap suara" },
          { label: "Harga mulai", value: "Rp149.000 / m" },
        ],
      },
    ],
  },
  {
    id: "spandek",
    label: "Atap Spandek",
    title: "Spandek Polos vs Spandek Pasir",
    subtitle:
      "Spandek zincalume dengan dua finishing. Polos lebih ekonomis, pasir lebih meredam panas dan suara.",
    options: [
      {
        slug: "atap-spandek-polos",
        name: "Spandek Polos",
        tag: "Zincalume polos",
        bestFor: "Atap gudang, pabrik, dan carport dengan biaya material paling efisien.",
        rows: [
          { label: "Tebal", value: "0,30 & 0,35 mm" },
          { label: "Lapisan", value: "Zincalume polos" },
          { label: "Peredaman", value: "Standar" },
          { label: "Harga mulai", value: "Rp26.500 / m" },
        ],
      },
      {
        slug: "atap-spandek-pasir",
        name: "Spandek Pasir",
        tag: "Lapis pasir silika",
        recommended: true,
        bestFor: "Atap rumah dan teras yang ingin lebih sejuk dan senyap saat hujan.",
        rows: [
          { label: "Tebal", value: "0,35 & 0,45 mm" },
          { label: "Lapisan", value: "Pasir silika" },
          { label: "Peredaman", value: "Panas & suara lebih baik" },
          { label: "Harga mulai", value: "Rp35.000 / m" },
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Homepage department tiles — the stable "Kategori Utama" showcase.   */
/*  Kept as `categoryTiles` for backward compat with existing imports,  */
/*  now sourced from the 6 departments above.                           */
/* ------------------------------------------------------------------ */

export type CategoryTile = {
  name: string;
  slug: string;
  tagline: string;
  image: string;
};

export const categoryTiles: CategoryTile[] = departments.map((d) => ({
  name: d.name,
  slug: d.slug,
  tagline: d.tagline,
  image: d.image,
}));

/* ------------------------------------------------------------------ */
/*  PHOTO_STATUS — provenance note for the temporary catalog.          */
/*  Categories still needing real photography (PDF item, no photo yet):*/
/*  Reng, Hollow Galvanis/Stainless/Plafond, Besi WF/H-Beam/UNP/Siku,  */
/*  Besi Beton (Full & Sertifikat), Plat Bordes/Eyser/Strip, Spandek   */
/*  (pasir/polos/transparan), Koko & Ultima Roof, Alderon Single &     */
/*  Twinlite, Atlas Single/Double, Takka uPVC, GRC Board & Plank,      */
/*  Pipa Stainless, Perkakas pendukung. Photos needing cleanup:        */
/*  pipa-pvc (green bg), pipa (blue bg), genteng-metal (text overlay). */
/* ------------------------------------------------------------------ */
