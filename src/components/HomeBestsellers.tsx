"use client";

/**
 * HomeBestsellers — the homepage conversion layer beneath the department
 * showcase. Surfaces the 8 flagship products (those flagged `featured`),
 * each backed by a strong real photo, linking straight to the detail page.
 *
 * Pairs with CategoryShowcase: departments answer "where do I browse?",
 * bestsellers answer "what should I buy?".
 */

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Icon from "@/components/Icon";
import { featuredProducts, stockLabel } from "@/data/products";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

export default function HomeBestsellers() {
  const reduce = useReducedMotion();
  const items = featuredProducts.slice(0, 8);
  if (items.length === 0) return null;

  return (
    <section className="section bg-white">
      <div className="container-px">
        <div className="mb-12 text-center">
          <span className="eyebrow">Produk Terlaris</span>
          <h2 className="h2 mt-2 text-steel-900">Paling Banyak Dipesan</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          <p className="mx-auto mt-4 max-w-2xl text-steel-600">
            Material inti yang selalu ready stock dan paling sering dipakai
            kontraktor maupun pemilik rumah.
          </p>
        </div>

        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6"
        >
          {items.map((p) => (
            <motion.div key={p.slug} variants={reduce ? undefined : item}>
              <Link
                href={`/produk/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-steel-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <div className="relative aspect-square overflow-hidden bg-steel-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded bg-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-steel-900">
                    <span className="h-1.5 w-1.5 rounded-full bg-steel-900/70" />
                    {stockLabel[p.stock]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  {p.brand && (
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-steel-400">
                      {p.brand}
                    </span>
                  )}
                  <h3 className="mt-0.5 font-heading text-sm font-bold leading-tight text-steel-900 transition-colors group-hover:text-accent">
                    {p.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-accent">
                    Lihat detail <Icon name="chevron" className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/produk#katalog" className="btn-gold text-sm">
            Lihat Katalog Lengkap
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
