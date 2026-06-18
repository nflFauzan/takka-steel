import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { articles } from "@/data/articles";

// Update this to the real production domain before deploying.
const BASE_URL = "https://takkasteel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/tentang", "/produk", "/artikel", "/kontak"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
    })
  );

  const productRoutes = products.map((p) => ({
    url: `${BASE_URL}/produk/${p.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${BASE_URL}/artikel/${a.slug}`,
    lastModified: new Date(a.date),
  }));

  return [...staticRoutes, ...productRoutes, ...articleRoutes];
}
