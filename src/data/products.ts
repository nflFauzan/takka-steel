/**
 * Product catalog for Takka Steel — single source of truth for the catalog
 * grid, the featured bento, the spec comparison, and the product detail pages.
 *
 * Categories and items reflect Takka Steel's real product range: material
 * baja ringan, sistem atap, struktur lantai, dan aksesoris/perkakas.
 * Images currently use remote Unsplash photos via a plain <img>; swap for
 * local files in /public/products when high-resolution photos are available.
 */

export type StockStatus = "ready" | "indent";

export type Product = {
  slug: string;
  name: string;
  category: string;
  /** Brand / line name shown as a small label (e.g. Alderon, Bondek). */
  brand?: string;
  /** Short navy badge: material or certification (e.g. SNI, Galvalume). */
  badge?: string;
  /** Availability — drives the gold stock badge. */
  stock: StockStatus;
  /** Flagged products surface in the featured bento. */
  featured?: boolean;
  image: string;
  summary: string;
  description: string;
  specs: { label: string; value: string }[];
  uses: string[];
};

export const productCategories = [
  "Baja Ringan",
  "Sistem Atap",
  "Struktur Lantai",
  "Aksesoris & Perkakas",
] as const;

export const products: Product[] = [
  {
    slug: "takka-truss-cnp",
    name: "TAKKA TRUSS (CNP 0.75)",
    category: "Baja Ringan",
    brand: "TAKKA",
    badge: "Galvalume",
    stock: "ready",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=70",
    summary:
      "Kanal C baja ringan profil CNP tebal 0,75 mm untuk rangka kuda-kuda atap yang kuat dan tahan karat.",
    description:
      "TAKKA TRUSS adalah profil kanal C (CNP) baja ringan galvalume dengan ketebalan 0,75 mm sebagai rangka utama kuda-kuda atap. Ringan, presisi, anti rayap, dan tahan karat — pilihan ekonomis dan kuat untuk rangka atap hunian maupun komersial.",
    specs: [
      { label: "Profil", value: "Kanal C (CNP)" },
      { label: "Ketebalan", value: "0,75 mm" },
      { label: "Lapisan", value: "Galvalume (AZ)" },
      { label: "Panjang", value: "6 m per batang" },
    ],
    uses: ["Kuda-kuda atap", "Rangka baja ringan", "Kanopi", "Mezzanine ringan"],
  },
  {
    slug: "reng-baja-ringan",
    name: "Reng Baja Ringan",
    category: "Baja Ringan",
    brand: "Galvalume",
    badge: "Galvalume",
    stock: "ready",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=70",
    summary:
      "Reng baja ringan galvalume sebagai dudukan penutup atap di atas rangka truss.",
    description:
      "Reng baja ringan berfungsi sebagai penopang genteng atau penutup atap di atas rangka kuda-kuda. Material galvalume anti karat dengan profil presisi memastikan pemasangan rapi dan jarak reng yang konsisten.",
    specs: [
      { label: "Profil", value: "Reng (Omega/B)" },
      { label: "Ketebalan", value: "0,40 – 0,45 mm" },
      { label: "Lapisan", value: "Galvalume" },
      { label: "Panjang", value: "6 m per batang" },
    ],
    uses: ["Dudukan genteng", "Penopang spandek", "Rangka atap", "Plafon ekspos"],
  },
  {
    slug: "hollow-partisi-plafond",
    name: "Hollow Partisi / Plafond",
    category: "Baja Ringan",
    brand: "Galvanis",
    badge: "Galvanis",
    stock: "ready",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=70",
    summary:
      "Besi hollow galvanis untuk rangka plafon gypsum dan partisi dinding interior.",
    description:
      "Besi hollow ringan dengan penampang kotak untuk rangka plafon gypsum/PVC dan partisi/sekat ruangan. Presisi, ringan, dan tahan karat — mempercepat pemasangan rangka interior.",
    specs: [
      { label: "Ukuran", value: "20×40 / 40×40 mm" },
      { label: "Ketebalan", value: "0,30 – 0,40 mm" },
      { label: "Finishing", value: "Galvanis" },
      { label: "Panjang", value: "4 m per batang" },
    ],
    uses: ["Rangka plafon", "Partisi & sekat", "Drop ceiling", "Rangka interior"],
  },
  {
    slug: "atap-spandek-pasir",
    name: "Atap Spandek Pasir",
    category: "Sistem Atap",
    brand: "Spandek",
    badge: "Peredam Panas",
    stock: "ready",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=900&q=70",
    summary:
      "Spandek berlapis pasir yang meredam panas dan suara hujan, tampilan lebih estetis.",
    description:
      "Atap spandek pasir dilapisi batuan pasir pada permukaannya sehingga lebih efektif meredam panas dan kebisingan saat hujan dibandingkan spandek polos. Ringan, kuat, dan tersedia beragam warna.",
    specs: [
      { label: "Ketebalan", value: "0,30 – 0,35 mm" },
      { label: "Lebar efektif", value: "± 760 mm" },
      { label: "Lapisan", value: "Batu pasir + cat" },
      { label: "Panjang", value: "Potong sesuai kebutuhan" },
    ],
    uses: ["Atap rumah", "Atap teras", "Kanopi", "Bangunan komersial"],
  },
  {
    slug: "atap-spandek-polos",
    name: "Atap Spandek Polos",
    category: "Sistem Atap",
    brand: "Spandek",
    badge: "Galvalume",
    stock: "ready",
    image:
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=900&q=70",
    summary:
      "Spandek galvalume polos yang ringan, kuat, dan ekonomis untuk berbagai bangunan.",
    description:
      "Atap spandek polos dari galvalume gelombang yang ringan, tahan karat, dan ekonomis. Cocok untuk atap gudang, pabrik, garasi, hingga hunian dengan biaya material yang efisien.",
    specs: [
      { label: "Ketebalan", value: "0,25 – 0,40 mm" },
      { label: "Lebar efektif", value: "± 760 / 1000 mm" },
      { label: "Material", value: "Galvalume" },
      { label: "Panjang", value: "Potong sesuai kebutuhan" },
    ],
    uses: ["Atap gudang", "Atap pabrik", "Carport", "Bangunan komersial"],
  },
  {
    slug: "atap-metal-pasir",
    name: "Atap Metal Pasir",
    category: "Sistem Atap",
    brand: "Genteng Metal",
    badge: "Berpasir",
    stock: "ready",
    image:
      "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=900&q=70",
    summary:
      "Genteng metal berpasir ringan dengan tampilan menyerupai genteng konvensional.",
    description:
      "Genteng metal berpasir memberikan tampilan estetis menyerupai genteng tanah liat namun jauh lebih ringan dan tahan lama. Lapisan pasir meredam panas dan suara, ideal untuk atap hunian modern.",
    specs: [
      { label: "Ketebalan", value: "0,25 – 0,35 mm" },
      { label: "Tipe", value: "Genteng metal berpasir" },
      { label: "Warna", value: "Beragam pilihan" },
      { label: "Modul", value: "Per lembar / multi-roof" },
    ],
    uses: ["Atap rumah tinggal", "Perumahan", "Renovasi atap", "Villa"],
  },
  {
    slug: "alderon-single-layer",
    name: "Atap Alderon Single Layer",
    category: "Sistem Atap",
    brand: "Alderon",
    badge: "uPVC",
    stock: "ready",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=70",
    summary:
      "Atap uPVC single layer yang kuat, anti karat, dan meredam panas.",
    description:
      "Atap uPVC Alderon single layer tahan terhadap korosi dan bahan kimia, tidak menghantarkan panas seperti logam, serta lebih senyap saat hujan. Pilihan premium untuk kanopi dan atap carport.",
    specs: [
      { label: "Material", value: "uPVC single layer" },
      { label: "Tebal", value: "± 3 mm" },
      { label: "Sifat", value: "Anti karat & korosi" },
      { label: "Panjang", value: "Beragam ukuran" },
    ],
    uses: ["Kanopi", "Carport", "Atap teras", "Area basah"],
  },
  {
    slug: "alderon-double-layer",
    name: "Atap Alderon Double Layer",
    category: "Sistem Atap",
    brand: "Alderon",
    badge: "uPVC",
    stock: "ready",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=70",
    summary:
      "Atap uPVC double layer (rongga) dengan peredaman panas & suara maksimal.",
    description:
      "Atap uPVC Alderon double layer berongga (twinwall) memberikan insulasi panas dan peredaman suara terbaik di kelasnya. Kokoh, tahan lama, dan ideal untuk area yang membutuhkan kenyamanan ekstra.",
    specs: [
      { label: "Material", value: "uPVC double layer (twinwall)" },
      { label: "Tebal", value: "± 10 mm" },
      { label: "Keunggulan", value: "Insulasi panas & kedap suara" },
      { label: "Panjang", value: "Beragam ukuran" },
    ],
    uses: ["Kanopi premium", "Atap rumah", "Foodcourt", "Area komersial"],
  },
  {
    slug: "seng-rol-galvalum",
    name: "Seng Rol Galvalum",
    category: "Sistem Atap",
    brand: "Galvalume",
    badge: "Galvalume",
    stock: "ready",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=900&q=70",
    summary:
      "Seng galvalum bentuk roll/coil untuk kebutuhan atap dan talang custom.",
    description:
      "Seng galvalum dalam bentuk rol/coil yang dapat dipotong dan dibentuk sesuai kebutuhan, baik untuk lembaran atap, talang air, maupun flashing. Anti karat dan fleksibel untuk berbagai aplikasi.",
    specs: [
      { label: "Bentuk", value: "Roll / coil" },
      { label: "Ketebalan", value: "0,25 – 0,40 mm" },
      { label: "Material", value: "Galvalume" },
      { label: "Layanan", value: "Potong sesuai ukuran" },
    ],
    uses: ["Lembaran atap", "Talang air", "Flashing", "Penutup dinding"],
  },
  {
    slug: "bondeck-floordeck",
    name: "Bondeck / Floordeck",
    category: "Struktur Lantai",
    brand: "Bondek",
    badge: "SNI",
    stock: "ready",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1597844808175-bd6c95f1f6e2?auto=format&fit=crop&w=900&q=70",
    summary:
      "Pelat baja bergelombang sebagai bekisting permanen sekaligus tulangan lantai cor.",
    description:
      "Bondeck (floordeck) adalah pelat baja berprofil yang berfungsi sebagai bekisting permanen sekaligus tulangan bawah pada lantai beton bertingkat. Mempercepat pengecoran, menghemat material, dan menghasilkan dak yang lebih kuat.",
    specs: [
      { label: "Ketebalan", value: "0,70 – 1,00 mm" },
      { label: "Tinggi gelombang", value: "± 50 mm" },
      { label: "Lapisan", value: "Galvanis" },
      { label: "Panjang", value: "Potong sesuai bentang" },
    ],
    uses: ["Dak lantai cor", "Mezzanine", "Lantai bertingkat", "Bangunan komersial"],
  },
  {
    slug: "kawat-bendrat-loket-las",
    name: "Kawat Bendrat, Loket & Las",
    category: "Aksesoris & Perkakas",
    brand: "Kawat",
    badge: "Per Kg / Rol",
    stock: "ready",
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=900&q=70",
    summary:
      "Aneka kawat konstruksi: bendrat pengikat tulangan, kawat loket, dan kawat las.",
    description:
      "Kelengkapan kawat untuk kebutuhan konstruksi: kawat bendrat untuk mengikat tulangan besi, kawat loket (anyaman) untuk plesteran dan pagar, serta kawat las untuk pengelasan. Tersedia per kg maupun per rol.",
    specs: [
      { label: "Kawat bendrat", value: "Pengikat tulangan" },
      { label: "Kawat loket", value: "Anyaman, beragam lubang" },
      { label: "Kawat las", value: "Untuk pengelasan" },
      { label: "Satuan", value: "Kg / rol" },
    ],
    uses: ["Pengikat tulangan", "Plesteran dinding", "Pagar & kandang", "Pengelasan"],
  },
  {
    slug: "perkakas-material-pendukung",
    name: "Perkakas & Material Pendukung",
    category: "Aksesoris & Perkakas",
    brand: "Perkakas",
    badge: "Pelengkap",
    stock: "ready",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=70",
    summary:
      "Dinabolt, skrup gypsum, gunting baja, mata bor, gerinda, cat besi/kayu, dan thinner.",
    description:
      "Lengkapi kebutuhan pertukangan Anda dalam satu tempat: dinabolt, skrup gypsum, gunting baja ringan, mata bor, mesin gerinda, cat besi/kayu, hingga thinner. Belanja material baja dan perkakas pendukungnya sekaligus di Takka Steel.",
    specs: [
      { label: "Pengencang", value: "Dinabolt, skrup gypsum" },
      { label: "Alat potong", value: "Gunting baja, gerinda" },
      { label: "Mata bor", value: "Beragam ukuran" },
      { label: "Finishing", value: "Cat besi/kayu, thinner" },
    ],
    uses: ["Pemasangan rangka", "Pengeboran", "Pemotongan baja ringan", "Finishing"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

/** Flagship products shown in the featured bento at the top of the catalog. */
export const featuredProducts = products.filter((p) => p.featured);

/** Stock labels for the gold availability badge. */
export const stockLabel: Record<StockStatus, string> = {
  ready: "Ready Stock",
  indent: "Indent",
};

/* ------------------------------------------------------------------ */
/*  Spec comparison — side-by-side variants buyers actually weigh.      */
/*  All values are pulled from the product specs above (no invented     */
/*  numbers); `slug` links each option to its detail page.              */
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
          { label: "Tebal", value: "± 3 mm" },
          { label: "Insulasi", value: "Sedang" },
          { label: "Sifat", value: "Anti karat & korosi" },
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
          { label: "Tebal", value: "± 10 mm" },
          { label: "Insulasi", value: "Maksimal, kedap suara" },
          { label: "Sifat", value: "Anti karat & korosi" },
        ],
      },
    ],
  },
  {
    id: "spandek",
    label: "Atap Spandek",
    title: "Spandek Polos vs Spandek Pasir",
    subtitle:
      "Spandek galvalume dengan dua finishing. Polos lebih ekonomis, pasir lebih meredam panas dan suara.",
    options: [
      {
        slug: "atap-spandek-polos",
        name: "Spandek Polos",
        tag: "Galvalume polos",
        bestFor: "Atap gudang, pabrik, dan carport dengan biaya material paling efisien.",
        rows: [
          { label: "Ketebalan", value: "0,25 - 0,40 mm" },
          { label: "Lapisan", value: "Galvalume polos" },
          { label: "Peredaman", value: "Standar" },
          { label: "Lebar efektif", value: "± 760 / 1000 mm" },
        ],
      },
      {
        slug: "atap-spandek-pasir",
        name: "Spandek Pasir",
        tag: "Lapis batu pasir",
        recommended: true,
        bestFor: "Atap rumah dan teras yang ingin lebih sejuk dan senyap saat hujan.",
        rows: [
          { label: "Ketebalan", value: "0,30 - 0,35 mm" },
          { label: "Lapisan", value: "Batu pasir + cat" },
          { label: "Peredaman", value: "Panas & suara lebih baik" },
          { label: "Lebar efektif", value: "± 760 mm" },
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Category tiles — material range shown on the homepage showcase.    */
/*  `image` is intentionally empty: the card renders a premium navy    */
/*  placeholder tile until a REAL Takka photo is provided. To add a    */
/*  photo, drop it in /public/products and set e.g.                    */
/*  image: "/products/besi-beton.jpg" (or a full URL).                 */
/* ------------------------------------------------------------------ */

export type CategoryTile = {
  name: string;
  slug: string;
  tagline: string;
  image: string;
};

export const categoryTiles: CategoryTile[] = [
  { name: "Besi Beton", slug: "besi-beton", tagline: "Tulangan polos & ulir SNI", image: "" },
  { name: "Hollow", slug: "hollow", tagline: "Besi kotak galvanis & hitam", image: "" },
  { name: "CNP & UNP", slug: "cnp-unp", tagline: "Kanal C & U profil baja", image: "" },
  { name: "Plat", slug: "plat", tagline: "Plat besi & strip beragam tebal", image: "" },
  { name: "Baja", slug: "baja", tagline: "Baja struktural & profil", image: "" },
  { name: "Kawat Beton", slug: "kawat-beton", tagline: "Kawat bendrat pengikat tulangan", image: "" },
  { name: "Kawat Seng", slug: "kawat-seng", tagline: "Kawat galvanis serbaguna", image: "" },
  { name: "Kawat Duri", slug: "kawat-duri", tagline: "Pengaman pagar & area", image: "" },
  { name: "Paku", slug: "paku", tagline: "Aneka ukuran & jenis", image: "" },
  { name: "Semen", slug: "semen", tagline: "Semen merek terpercaya", image: "" },
  { name: "Bata Ringan", slug: "bata-ringan", tagline: "Ringan, presisi, hemat", image: "" },
  { name: "Pipa", slug: "pipa", tagline: "Pipa PVC, galvanis & besi", image: "" },
  { name: "Wiremesh", slug: "wiremesh", tagline: "Tulangan praktis pengecoran", image: "" },
  { name: "Pagar BRC", slug: "pagar-brc", tagline: "Pagar mesh siap pasang", image: "" },
  { name: "Triplek", slug: "triplek", tagline: "Plywood & papan olahan", image: "" },
  { name: "Alat Teknik", slug: "alat-teknik", tagline: "Perkakas & alat bantu proyek", image: "" },
  { name: "Kunci Pas / Ring", slug: "kunci-pas-ring", tagline: "Kunci & perkakas tangan", image: "" },
];
