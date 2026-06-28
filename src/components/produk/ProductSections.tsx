"use client";

/**
 * Catalog sections for the /produk page, adapted to Takka Steel's navy/gold
 * system (no shadcn tokens, no extra deps beyond framer-motion). Patterns are
 * inspired by 21st.dev references but rebuilt on the project's own primitives:
 *  - TrustStrip       — brands carried + honest service facts
 *  - ProductBento     — flagship hierarchy (asymmetric tiles)
 *  - ProductCatalog   — category filter + search → detail pages
 *  - ProductComparison — side-by-side spec variants
 */

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import Icon, { type IconName } from "@/components/Icon";
import {
  products,
  featuredProducts,
  comparisonGroups,
  stockLabel,
  departments,
  categoriesInDepartment,
  type Product,
  type DepartmentSlug,
} from "@/data/products";
import { waLink } from "@/data/company";

/* ── Shared badge system: gold = availability, navy = material/cert ───── */

function StockBadge({ product }: { product: Product }) {
  return (
    <span className="inline-flex items-center gap-1 rounded bg-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-steel-900">
      <span className="h-1.5 w-1.5 rounded-full bg-steel-900/70" />
      {stockLabel[product.stock]}
    </span>
  );
}

function MaterialBadge({ label }: { label: string }) {
  return (
    <span className="rounded bg-steel-900/85 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">
      {label}
    </span>
  );
}

function quoteMessage(name: string) {
  return `Halo Takka Steel, saya tertarik dengan ${name}. Mohon info harga dan ketersediaan stoknya.`;
}

/* ====================================================================== */
/*  TRUST STRIP                                                            */
/* ====================================================================== */

const brands = ["TAKKA", "Alderon", "Bondek", "Galvalume", "Jayaboard", "Knauf", "Aplus"];

const facts: { icon: IconName; title: string; desc: string }[] = [
  { icon: "shield", title: "Material Bermerek", desc: "Produk pilihan dari merek terpercaya, sebagian berstandar SNI." },
  { icon: "box", title: "Ready Stock", desc: "Stok material tersedia langsung di gudang — siap diambil atau dikirim." },
  { icon: "truck", title: "Pengiriman Luas", desc: "Antar ke lokasi proyek Jabodetabek & seluruh Indonesia, tepat waktu." },
  { icon: "headset", title: "Konsultasi Teknis", desc: "Dibantu hitung kebutuhan material proyek tanpa biaya." },
];

export function TrustStrip() {
  return (
    <section className="border-y border-steel-100 bg-white py-10">
      <div className="container-px">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-steel-400">
          Brand &amp; material yang kami sediakan
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {brands.map((b) => (
            <span
              key={b}
              className="font-heading text-lg font-extrabold uppercase tracking-tight text-steel-300 transition-colors hover:text-steel-700"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.title} className="flex gap-3 rounded-xl border border-steel-100 bg-steel-50 p-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-white">
                <Icon name={f.icon} className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-steel-900">{f.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-steel-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================================================================== */
/*  FEATURED BENTO                                                         */
/* ====================================================================== */

const bentoContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const bentoItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } },
};

export function ProductBento() {
  const reduce = useReducedMotion();
  const items = featuredProducts;
  if (items.length === 0) return null;
  const [hero, ...rest] = items;

  return (
    <section className="bg-steel-50 py-16 md:py-20">
      <div className="container-px">
        <div className="mb-10 max-w-2xl">
          <h2 className="h2 text-steel-900">Paling banyak dipesan untuk proyek</h2>
          <p className="mt-3 text-steel-600">
            Material inti yang siap stok dan paling sering dipakai kontraktor maupun pemilik rumah.
          </p>
        </div>

        <motion.div
          variants={reduce ? undefined : bentoContainer}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:auto-rows-[210px]"
        >
          <BentoTile product={hero} reduce={reduce} hero />
          {rest.map((p) => (
            <BentoTile key={p.slug} product={p} reduce={reduce} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BentoTile({ product, hero, reduce }: { product: Product; hero?: boolean; reduce: boolean | null }) {
  return (
    <motion.div
      variants={reduce ? undefined : bentoItem}
      className={`group relative ${hero ? "col-span-2 min-h-[280px] lg:row-span-2 lg:min-h-0" : "min-h-[190px]"}`}
    >
      <Link
        href={`/produk/${product.slug}`}
        className="relative flex h-full w-full flex-col justify-end overflow-hidden rounded-2xl shadow-card transition-shadow hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950/90 via-steel-950/35 to-transparent" />
        <div className="relative z-10 p-4 md:p-5">
          {product.brand && (
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">{product.brand}</span>
          )}
          <h3 className={`font-heading font-extrabold leading-tight text-white drop-shadow ${hero ? "text-2xl md:text-3xl" : "text-base"}`}>
            {product.name}
          </h3>
          {hero && <p className="mt-2 max-w-md text-sm leading-relaxed text-steel-200">{product.summary}</p>}
          <div className="mt-2 flex flex-wrap gap-1.5">
            <StockBadge product={product} />
            {product.badge && <MaterialBadge label={product.badge} />}
          </div>
          <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-white">
            Lihat detail <Icon name="chevron" className="h-3.5 w-3.5 text-gold" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* ====================================================================== */
/*  FILTERABLE CATALOG                                                     */
/* ====================================================================== */

/**
 * Local spelling/synonym map so customer-typed terms still match. Indonesian
 * builders type phonetically ("holo", "galvalum") or by brand/use-case.
 * Keys are what people type; values are a term that exists in the catalog.
 */
const SEARCH_SYNONYMS: Record<string, string> = {
  holo: "hollow",
  hollo: "hollow",
  galvalum: "galvalume",
  gipsum: "gypsum",
  gibsum: "gypsum",
  bondek: "bondeck",
  bondex: "bondeck",
  spandex: "spandek",
  wermes: "wiremesh",
  weremesh: "wiremesh",
  triplex: "triplek",
  pintu: "nako",
  teralis: "nako",
  dak: "bondeck",
};

export function ProductCatalog() {
  const reduce = useReducedMotion();
  const [dept, setDept] = useState<DepartmentSlug | "all">("all");
  const [cat, setCat] = useState<string>("Semua");
  const [query, setQuery] = useState("");

  // Deep-link support: /produk?dept=atap-spandek from homepage department cards.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("dept");
    if (param && departments.some((d) => d.slug === param)) {
      setDept(param as DepartmentSlug);
      // jump the user to the catalog so the filtered result is in view
      document.getElementById("katalog")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Category chips depend on the selected department.
  const catChips = useMemo(() => {
    const cats =
      dept === "all"
        ? Array.from(new Set(products.map((p) => p.category)))
        : categoriesInDepartment(dept);
    return ["Semua", ...cats];
  }, [dept]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const canon = SEARCH_SYNONYMS[q] ?? q; // map typo/synonym to a catalog term
    return products.filter((p) => {
      const matchDept = dept === "all" || p.department === dept;
      const matchCat = cat === "Semua" || p.category === cat;
      // Search across name, brand, summary, category AND use-cases so queries
      // like "kanopi" or "dak" surface the right products.
      const haystack = [
        p.name,
        p.brand ?? "",
        p.summary,
        p.category,
        ...p.uses,
      ]
        .join(" ")
        .toLowerCase();
      const matchQuery =
        q === "" || haystack.includes(q) || haystack.includes(canon);
      return matchDept && matchCat && matchQuery;
    });
  }, [dept, cat, query]);

  const activeDeptName =
    dept === "all" ? null : departments.find((d) => d.slug === dept)?.name;

  const selectDept = (d: DepartmentSlug | "all") => {
    setDept(d);
    setCat("Semua"); // reset sub-category when switching department
  };

  return (
    <section id="katalog" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="container-px">
        <div className="mb-8 max-w-2xl">
          <h2 className="h2 text-steel-900">Katalog material lengkap</h2>
          <p className="mt-3 text-steel-600">
            Pilih departemen, saring kategori, atau cari nama produk. Klik produk untuk melihat spesifikasi lengkap.
          </p>
        </div>

        {/* Sticky filter bar — stays in reach while the customer scrolls. */}
        <div className="sticky top-20 z-30 mb-8 rounded-2xl border border-steel-100 bg-white/90 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/75">
          {/* Row 1 — Departemen (level 1) + search */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-steel-400">
                Kategori Utama
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => selectDept("all")}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    dept === "all"
                      ? "bg-steel-900 text-white shadow-sm"
                      : "border border-steel-200 bg-white text-steel-600 hover:border-steel-400 hover:text-steel-900"
                  }`}
                >
                  Semua Produk
                </button>
                {departments.map((d) => {
                  const active = dept === d.slug;
                  return (
                    <button
                      key={d.slug}
                      type="button"
                      onClick={() => selectDept(d.slug)}
                      className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                        active
                          ? "bg-steel-900 text-white shadow-sm"
                          : "border border-steel-200 bg-white text-steel-600 hover:border-steel-400 hover:text-steel-900"
                      }`}
                    >
                      {d.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative w-full lg:w-72 lg:shrink-0">
              <label htmlFor="cari-produk" className="sr-only">
                Cari produk
              </label>
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-steel-400">
                <Icon name="search" className="h-4 w-4" />
              </span>
              <input
                id="cari-produk"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari produk, mis. kanopi, dak, hollow…"
                className="w-full rounded-full border border-steel-200 bg-white py-2.5 pl-9 pr-9 text-sm text-steel-900 placeholder:text-steel-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Hapus pencarian"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-steel-400 hover:text-steel-700"
                >
                  <Icon name="x" className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Row 2 — Sub-kategori (level 2), only once a department is chosen */}
          {dept !== "all" && (
            <div className="mt-4 border-t border-steel-100 pt-4">
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-steel-400">
                Sub-kategori {activeDeptName}
              </span>
              <div className="flex flex-wrap gap-2">
                {catChips.map((c) => {
                  const active = cat === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCat(c)}
                      className={`rounded-full px-3.5 py-1.5 text-sm font-bold transition ${
                        active
                          ? "bg-accent text-white shadow-sm"
                          : "border border-steel-200 bg-white text-steel-600 hover:border-accent hover:text-accent"
                      }`}
                    >
                      {c === "Semua" ? "Semua Kategori" : c}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <p className="mb-6 text-sm text-steel-500">
          Menampilkan <span className="font-bold text-steel-900">{filtered.length}</span> produk
          {activeDeptName && (
            <> di <span className="font-bold text-steel-900">{activeDeptName}</span></>
          )}
          {cat !== "Semua" && (
            <> › <span className="font-bold text-steel-900">{cat}</span></>
          )}
          .
        </p>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-steel-200 bg-steel-50 py-16 text-center">
            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-white text-steel-400 shadow-sm">
              <Icon name="search" className="h-6 w-6" />
            </div>
            <p className="font-bold text-steel-900">Produk tidak ditemukan</p>
            <p className="mt-1 text-sm text-steel-500">Coba kata kunci lain atau pilih kategori berbeda.</p>
            <button
              type="button"
              onClick={() => {
                setDept("all");
                setCat("Semua");
                setQuery("");
              }}
              className="btn-dark mt-6 text-sm"
            >
              Reset filter
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <CatalogCard product={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function CatalogCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produk/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-steel-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
    >
      <div className="relative h-44 overflow-hidden bg-steel-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950/30 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-steel-400">
          {product.category}
        </span>
        <h3 className="mt-1 font-heading font-bold text-steel-900 transition-colors group-hover:text-accent">
          {product.name}
        </h3>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <StockBadge product={product} />
          {product.badge && <MaterialBadge label={product.badge} />}
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-steel-500">{product.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-accent">
          Lihat detail <Icon name="chevron" className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}

/* ====================================================================== */
/*  SPEC COMPARISON                                                        */
/* ====================================================================== */

export function ProductComparison() {
  const [activeId, setActiveId] = useState(comparisonGroups[0].id);
  const group = comparisonGroups.find((g) => g.id === activeId) ?? comparisonGroups[0];

  return (
    <section className="bg-steel-950 py-16 md:py-20">
      <div className="container-px">
        <div className="mb-8 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Bandingkan Tipe</span>
          <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-white md:text-4xl">
            Pilih varian yang tepat
          </h2>
          <p className="mt-3 text-steel-300">
            Ragu antara dua tipe? Bandingkan spesifikasinya berdampingan sebelum minta penawaran.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 inline-flex flex-wrap gap-2 rounded-full bg-white/5 p-1">
          {comparisonGroups.map((g) => {
            const active = g.id === activeId;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveId(g.id)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                  active ? "bg-gold text-steel-900" : "text-steel-300 hover:text-white"
                }`}
              >
                {g.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-heading text-xl font-bold text-white">{group.title}</h3>
            <p className="mt-1 max-w-xl text-sm text-steel-400">{group.subtitle}</p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {group.options.map((opt) => (
                <div
                  key={opt.slug}
                  className={`flex flex-col rounded-2xl bg-white p-6 ${
                    opt.recommended ? "ring-2 ring-gold" : "ring-1 ring-white/10"
                  }`}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-heading text-lg font-extrabold text-steel-900">{opt.name}</h4>
                      <span className="mt-1 inline-block rounded bg-steel-100 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-steel-600">
                        {opt.tag}
                      </span>
                    </div>
                    {opt.recommended && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-steel-900">
                        <Icon name="star" className="h-3 w-3" /> Rekomendasi
                      </span>
                    )}
                  </div>

                  <dl className="divide-y divide-steel-100 border-y border-steel-100">
                    {opt.rows.map((r) => (
                      <div key={r.label} className="grid grid-cols-2 gap-2 py-2.5">
                        <dt className="text-xs font-bold uppercase tracking-wide text-steel-400">{r.label}</dt>
                        <dd className="text-sm font-medium text-steel-800">{r.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-4 flex items-start gap-2 text-sm text-steel-600">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{opt.bestFor}</span>
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={waLink(quoteMessage(opt.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold flex-1 text-sm"
                    >
                      <Icon name="whatsapp" className="h-4 w-4" /> Minta Penawaran
                    </a>
                    <Link href={`/produk/${opt.slug}`} className="btn-outline text-sm">
                      Detail
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
