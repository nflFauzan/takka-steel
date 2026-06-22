"use client";

import { motion, type Variants } from "framer-motion";
import { categoryTiles } from "@/data/products";
import { CategoryCard } from "@/components/ui/category-card";

/* Staggered reveal — container drives a left-to-right cascade of cards. */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

export default function CategoryShowcase() {
  return (
    <section className="section bg-steel-50">
      <div className="container-px">
        <div className="mb-12 text-center">
          <span className="eyebrow">Kategori Produk</span>
          <h2 className="h2 mt-2 text-steel-900">
            Jelajahi Kategori Produk Unggulan Kami
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          <p className="mx-auto mt-4 max-w-2xl text-steel-600">
            Material lengkap untuk kebutuhan struktural hingga finishing — siap
            stok dan siap kirim untuk proyek skala kecil maupun besar.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {categoryTiles.map((c) => (
            <motion.div key={c.slug} variants={itemVariants}>
              <CategoryCard
                name={c.name}
                tagline={c.tagline}
                image={c.image}
                href="/produk"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
