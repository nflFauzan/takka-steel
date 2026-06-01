import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { products } from "@/data/products";
import { waLink, defaultWaMessage } from "@/data/company";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Katalog produk besi & baja TAKKA STEEL: besi beton, baja ringan, hollow, plat, CNP/UNP, WF, wiremesh, dan lainnya.",
};

export default function ProdukPage() {
  return (
    <>
      <PageHeader
        title="Produk Kami"
        subtitle="Beragam pilihan material besi & baja berkualitas untuk semua kebutuhan konstruksi Anda."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Produk" }]}
      />

      <section className="section">
        <div className="container-px">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70}>
                <Link
                  href={`/produk/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-52 overflow-hidden bg-steel-100">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded bg-steel-900/80 px-2.5 py-1 text-xs font-medium text-white">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-bold text-steel-900 group-hover:text-accent">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm text-steel-500">{p.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      Lihat detail <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-steel-100 bg-steel-50 p-8 text-center md:p-12">
            <h2 className="text-xl font-extrabold text-steel-900 md:text-2xl">
              Tidak menemukan produk yang Anda cari?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-steel-600">
              Katalog kami terus bertambah. Hubungi kami untuk menanyakan
              ketersediaan material lain dan mendapatkan penawaran harga.
            </p>
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Tanya Ketersediaan
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
