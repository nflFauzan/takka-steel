import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import { products, getProduct } from "@/data/products";
import { waLink } from "@/data/company";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Produk tidak ditemukan" };
  return { title: product.name, description: product.summary };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const waMsg = `Halo TAKKA STEEL, saya tertarik dengan produk "${product.name}". Mohon info harga dan ketersediaannya.`;

  return (
    <>
      <PageHeader
        title={product.name}
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Produk", href: "/produk" },
          { label: product.name },
        ]}
      />

      <section className="section">
        <div className="container-px grid gap-10 lg:grid-cols-2">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="h-[360px] w-full rounded-2xl object-cover shadow-md md:h-[440px]"
            />
          </div>

          <div>
            <span className="rounded bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              {product.category}
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-steel-900 md:text-3xl">
              {product.name}
            </h2>
            <p className="mt-4 text-steel-600">{product.description}</p>

            <h3 className="mt-8 text-sm font-bold uppercase tracking-wide text-steel-900">
              Spesifikasi
            </h3>
            <dl className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-steel-100 bg-steel-100">
              {product.specs.map((s) => (
                <div key={s.label} className="bg-white p-4">
                  <dt className="text-xs uppercase tracking-wide text-steel-400">
                    {s.label}
                  </dt>
                  <dd className="mt-0.5 font-semibold text-steel-900">{s.value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-8 text-sm font-bold uppercase tracking-wide text-steel-900">
              Cocok Untuk
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {product.uses.map((u) => (
                <li
                  key={u}
                  className="flex items-center gap-1.5 rounded-full bg-steel-100 px-3 py-1.5 text-sm text-steel-700"
                >
                  <Icon name="check" className="h-4 w-4 text-accent" />
                  {u}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Minta Penawaran
              </a>
              <Link href="/produk" className="btn-outline">
                Kembali ke Produk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-steel-50">
        <div className="container-px">
          <h2 className="h2 mb-8">Produk Lainnya</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/produk/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-44 overflow-hidden bg-steel-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-steel-900 group-hover:text-accent">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-steel-500 line-clamp-2">{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
