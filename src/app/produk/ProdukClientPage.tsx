"use client";

import Link from "next/link";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import {
  TrustStrip,
  ProductBento,
  ProductCatalog,
  ProductComparison,
} from "@/components/produk/ProductSections";
import { company, waLink, defaultWaMessage } from "@/data/company";

export default function ProdukClientPage({ initialProducts }: { initialProducts: any[] }) {
  return (
    <>
      <PageHeader
        title="Katalog Produk"
        subtitle="Distributor besi, baja ringan, atap, dan bahan bangunan terlengkap. Ready stock, harga minimum, kirim cepat ke Jabodetabek & seluruh Indonesia."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Katalog Produk" }]}
      />

      <TrustStrip />
      <ProductBento products={initialProducts} />
      <ProductCatalog products={initialProducts} />
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
