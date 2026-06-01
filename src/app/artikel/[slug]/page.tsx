import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import { articles, getArticle, formatDate } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) return { title: "Artikel tidak ditemukan" };
  return { title: article.title, description: article.excerpt };
}

export default function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <PageHeader
        title={article.title}
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Artikel", href: "/artikel" },
          { label: "Detail" },
        ]}
      />

      <article className="section">
        <div className="container-px mx-auto max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-steel-500">
            <span>{formatDate(article.date)}</span>
            <span>•</span>
            <span>{article.author}</span>
          </div>

          <img
            src={article.image}
            alt={article.title}
            className="mt-6 h-[320px] w-full rounded-2xl object-cover shadow-md md:h-[420px]"
          />

          <div className="prose mt-8 max-w-none">
            {article.body.map((p, i) => (
              <p key={i} className="mb-5 leading-relaxed text-steel-700">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 border-t border-steel-100 pt-6">
            <Link href="/artikel" className="btn-outline">
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              Kembali ke Artikel
            </Link>
          </div>
        </div>
      </article>

      <section className="section bg-steel-50">
        <div className="container-px mx-auto max-w-5xl">
          <h2 className="h2 mb-8">Artikel Lainnya</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {more.map((a) => (
              <Link
                key={a.slug}
                href={`/artikel/${a.slug}`}
                className="group flex gap-4 rounded-xl border border-steel-100 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <img
                  src={a.image}
                  alt={a.title}
                  className="h-24 w-24 shrink-0 rounded-lg object-cover"
                />
                <div>
                  <time className="text-xs text-steel-400">{formatDate(a.date)}</time>
                  <h3 className="mt-1 font-bold text-steel-900 group-hover:text-accent">
                    {a.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
