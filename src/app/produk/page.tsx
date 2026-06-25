import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import {
  TrustStrip,
  ProductBento,
  ProductCatalog,
  ProductComparison,
} from "@/components/produk/ProductSections";
import { company, waLink, defaultWaMessage } from "@/data/company";

export const metadata: Metadata = {
  title: "Katalog Produk",
  description:
    "Katalog material konstruksi Takka Steel: baja ringan, sistem atap, struktur lantai, dan aksesoris. Ready stock dan siap kirim ke Jabodetabek & seluruh Indonesia.",
};

export default function ProdukPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-steel-900 pt-24 text-white">
        <img
          src="/photos/kegiatan-3.jpg"
          alt="Gudang material baja Takka Steel — Ciomas, Bogor"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/90 to-steel-900/40" />
        <div className="container-px relative z-10">
          <div className="max-w-2xl">
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 rounded bg-gold px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-steel-900">
                <span className="h-1.5 w-1.5 rounded-full bg-steel-900/70" /> Ready Stock
              </span>
              <span className="rounded border border-white/25 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Material SNI
              </span>
            </div>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Material Konstruksi Lengkap, Siap Kirim
            </h1>
            <p className="mt-6 max-w-xl text-lg text-steel-300">
              Distributor besi, baja ringan, atap, dan bahan bangunan terlengkap. Ready stock, harga
              minimum, kirim cepat ke Jabodetabek &amp; seluruh Indonesia.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#katalog" className="btn-gold">
                Lihat Katalog <Icon name="arrow" className="ml-1 h-4 w-4" />
              </Link>
              <a
                href={waLink(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-2 border-white/25 text-white hover:bg-white/10"
              >
                <Icon name="whatsapp" className="h-5 w-5" /> Minta Penawaran
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />
      <ProductBento />
      <ProductCatalog />
      <ProductComparison />

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section className="bg-steel-900 py-20">
        <div className="container-px text-center text-white">
          <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
            Siap membangun dengan material terbaik?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-steel-300">
            Hubungi tim penjualan kami untuk penawaran harga grosir dan konsultasi teknis gratis. Dibalas
            cepat di jam operasional.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base"
            >
              <Icon name="whatsapp" className="h-5 w-5" /> Minta Penawaran
            </a>
            <a
              href={`tel:${company.whatsapp}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white"
            >
              <Icon name="phone" className="h-4 w-4 text-gold" /> {company.whatsappDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
