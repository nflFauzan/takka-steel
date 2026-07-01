import type { Metadata } from "next";
import { notFound } from "next/navigation";
import client from "../../../../tina/__generated__/client";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  try {
    const productsResponse = await client.queries.productsConnection();
    return productsResponse.data.productsConnection.edges?.map((p: any) => ({
      slug: p.node._sys.filename,
    })) || [];
  } catch (e) {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { data } = await client.queries.products({ relativePath: `${params.slug}.json` });
    return { title: data.products.name, description: data.products.summary };
  } catch (e) {
    return { title: "Produk tidak ditemukan" };
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    // Fetch product data
    const res = await client.queries.products({ relativePath: `${params.slug}.json` });
    
    // Fetch related products (just fetching first 3 for simplicity)
    const relatedRes = await client.queries.productsConnection({ first: 3 });
    const relatedProducts = relatedRes.data.productsConnection.edges?.filter(
      (e: any) => e.node._sys.filename !== params.slug
    ) || [];

    return (
      <ProductDetailClient
        query={res.query}
        variables={res.variables}
        data={res.data}
        relatedProducts={relatedProducts}
      />
    );
  } catch (e) {
    console.error(e);
    notFound();
  }
}
