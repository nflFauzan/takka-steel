import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { articles, formatDate } from "@/data/articles";

export const metadata: Metadata = {
  title: "Artikel",
  description:
    "Tips dan informasi seputar besi, baja, dan material konstruksi dari Takka Steel.",
};

export default function ArtikelPage() {
  return (
    <>
      <PageHeader
        title="Artikel & Tips"
        subtitle="Wawasan seputar material konstruksi untuk membantu Anda membuat keputusan yang tepat."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Artikel" }]}
      />

      <section className="section">
        <div className="container-px grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Link href={`/artikel/${a.slug}`} className="block h-48 overflow-hidden bg-steel-100">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <time className="text-xs uppercase tracking-wide text-steel-400">
                    {formatDate(a.date)}
                  </time>
                  <h2 className="mt-2 font-bold text-steel-900 group-hover:text-accent">
                    <Link href={`/artikel/${a.slug}`}>{a.title}</Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-steel-500">{a.excerpt}</p>
                  <Link
                    href={`/artikel/${a.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent"
                  >
                    Baca selengkapnya <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
