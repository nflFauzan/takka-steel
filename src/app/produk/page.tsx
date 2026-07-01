import type { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import ProdukClientPage from "./ProdukClientPage";

export const metadata: Metadata = {
  title: "Katalog Produk",
  description:
    "Katalog material konstruksi Takka Steel: baja ringan, sistem atap, struktur lantai, dan aksesoris. Ready stock dan siap kirim ke Jabodetabek & seluruh Indonesia.",
};

export default async function ProdukPage() {
  try {
    const productsRes = await client.queries.productsConnection();
    
    // Convert Tina connection to a simple array of products
    const rawProducts = productsRes.data.productsConnection.edges?.map((e: any) => ({
      ...e.node,
      slug: e.node._sys.filename
    })) || [];
    
    return (
      <ProdukClientPage 
        initialProducts={rawProducts} 
      />
    );
  } catch(e) {
    console.error(e);
    // Fallback if Tina fails
    return <ProdukClientPage initialProducts={[]} />;
  }
}
