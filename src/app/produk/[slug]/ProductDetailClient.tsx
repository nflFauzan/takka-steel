"use client";

import Link from "next/link";
import Icon from "@/components/Icon";
import { waLink } from "@/data/company";
import { useTina } from "tinacms/dist/react";
import Image from "next/image";

export default function ProductDetailClient({ query, variables, data, relatedProducts }: any) {
  // Pass the data to useTina so it becomes editable in the admin
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  });

  const product = tinaData.products;
  const waMsg = `Halo Takka Steel, saya tertarik dengan produk "${product.name}". Mohon info harga dan ketersediaannya.`;

  return (
    <>
      <div className="bg-steel-50 pt-24 pb-8 border-b border-steel-100">
        <div className="container-px">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold text-steel-500 mb-8">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <Link href="/produk" className="hover:text-accent">Produk</Link>
            <span>/</span>
            <span className="text-steel-900">{product.name}</span>
          </div>

          {/* Hero Detail */}
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-white p-2 h-[400px]">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="rounded-xl object-cover"
                />
              ) : null}
            </div>
            
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block" data-tina-field={tinaData.products._tina_metadata?.category}>
                {product.category}
              </span>
              <h1 className="font-heading text-4xl font-extrabold text-steel-900 md:text-5xl mb-4" data-tina-field={tinaData.products._tina_metadata?.name}>
                {product.name}
              </h1>
              <p className="text-steel-600 leading-relaxed mb-8 text-lg" data-tina-field={tinaData.products._tina_metadata?.description}>
                {product.description}
              </p>
              
              <div className="flex gap-4 mb-10">
                <Link href="#cek-harga" className="btn bg-white text-steel-900 border border-steel-200 hover:bg-steel-50 shadow-sm rounded-full">
                  <Icon name="file" className="h-4 w-4" /> Minta Penawaran
                </Link>
                <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer" className="btn-primary rounded-full bg-steel-900 hover:bg-steel-800">
                  <Icon name="whatsapp" className="h-4 w-4 text-white" /> Hubungi WhatsApp
                </a>
              </div>

              <div className="flex gap-8 border-t border-steel-200 pt-6">
                <div className="flex items-center gap-2 text-sm font-bold text-steel-800">
                  <Icon name="check" className="h-5 w-5 text-green-500" /> SNI Certified
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-steel-800">
                  <Icon name="truck" className="h-5 w-5 text-accent" /> Pengiriman Seluruh RI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section bg-steel-50">
        <div className="container-px grid gap-8 lg:grid-cols-5 items-start">
          {/* Specs Table */}
          <div className="lg:col-span-3 rounded-2xl bg-white border border-steel-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-steel-100 p-2 rounded-lg text-accent"><Icon name="settings" className="h-6 w-6" /></div>
              <h2 className="font-heading text-2xl font-bold text-steel-900">Spesifikasi Produk</h2>
            </div>
            
            <div className="divide-y divide-steel-100">
              {product.specs?.map((s: any) => (
                <div key={s.label} className="grid grid-cols-3 py-4">
                  <div className="font-bold text-sm text-steel-900">{s.label}</div>
                  <div className="col-span-2 text-sm text-steel-600">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div id="cek-harga" className="lg:col-span-2 rounded-2xl bg-steel-950 p-8 text-white shadow-xl">
             <h2 className="font-heading text-xl font-bold mb-2">Cek Stok & Harga</h2>
             <p className="text-sm text-steel-400 mb-6">Dapatkan info ketersediaan barang dan harga terbaru dalam 15 menit.</p>
             
             <form className="space-y-4">
               <div>
                 <label className="block text-xs font-bold text-steel-300 mb-1.5">Nama Lengkap</label>
                 <input type="text" placeholder="Contoh: Budi Santoso" className="w-full rounded bg-steel-800 border-0 px-4 py-3 text-sm text-white focus:ring-1 focus:ring-gold" />
               </div>
               <div>
                 <label className="block text-xs font-bold text-steel-300 mb-1.5">Dimensi & Jumlah</label>
                 <textarea rows={3} placeholder="Contoh: 40x40 1.2mm x 50 batang" className="w-full rounded bg-steel-800 border-0 px-4 py-3 text-sm text-white focus:ring-1 focus:ring-gold"></textarea>
               </div>
               <button type="button" className="btn-gold w-full mt-4 rounded-full">Kirim Pertanyaan</button>
             </form>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section bg-white">
        <div className="container-px">
          <h2 className="h2 text-center mb-10 text-steel-900">Mengapa Pilih {product.name} Kami?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
             <div className="rounded-xl border border-steel-100 p-6 text-center lg:text-left shadow-sm">
               <Icon name="shield" className="h-6 w-6 text-gold mb-4 mx-auto lg:mx-0" />
               <h3 className="font-bold text-steel-900 mb-2">Anti Karat</h3>
               <p className="text-xs text-steel-500 leading-relaxed">Lapisan Zinc berkualitas tinggi melindungi baja dari korosi dan oksidasi luar.</p>
             </div>
             <div className="rounded-xl border border-steel-100 p-6 text-center lg:text-left shadow-sm">
               <Icon name="check" className="h-6 w-6 text-gold mb-4 mx-auto lg:mx-0" />
               <h3 className="font-bold text-steel-900 mb-2">Tahan Rayap</h3>
               <p className="text-xs text-steel-500 leading-relaxed">Alternatif material pengganti kayu yang tidak mungkin terserang hama atau lapuk.</p>
             </div>
             <div className="rounded-xl border border-steel-100 p-6 text-center lg:text-left shadow-sm">
               <Icon name="tool" className="h-6 w-6 text-gold mb-4 mx-auto lg:mx-0" />
               <h3 className="font-bold text-steel-900 mb-2">Mudah Diaplikasi</h3>
               <p className="text-xs text-steel-500 leading-relaxed">Ringan dan mudah dipotong, memudahkan proses pengelasan dan pemasangan.</p>
             </div>
             <div className="rounded-xl border border-steel-100 p-6 text-center lg:text-left shadow-sm">
               <Icon name="layout" className="h-6 w-6 text-gold mb-4 mx-auto lg:mx-0" />
               <h3 className="font-bold text-steel-900 mb-2">Kokoh & Tahan Lama</h3>
               <p className="text-xs text-steel-500 leading-relaxed">Struktur berongga memberikan kekuatan mekanik tinggi untuk beban konstruksi.</p>
             </div>
          </div>
          
          <div className="mt-12 rounded-2xl bg-steel-950 p-10 overflow-hidden relative">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1000')] bg-cover mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="font-heading text-2xl font-bold text-white mb-6">Aplikasi Penggunaan</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-sm text-steel-300">
                {product.uses?.map((u: string) => (
                   <div key={u} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold"></span> {u}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-steel-50">
        <div className="container-px">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="h2 text-steel-900">Produk Terkait</h2>
              <p className="text-sm text-steel-500 mt-1">Lengkapi kebutuhan konstruksi Anda</p>
            </div>
            <Link href="/produk" className="text-sm font-bold text-accent hover:text-steel-900 hidden sm:flex items-center gap-1">
              Lihat Semua <Icon name="arrow" className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts?.map((p: any) => {
              const rel = p.node ? p.node : p;
              const slug = rel._sys?.filename || rel.slug;
              return (
                <Link
                  key={slug}
                  href={`/produk/${slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative h-48 overflow-hidden bg-steel-100">
                    {rel.image ? (
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-steel-900 group-hover:text-accent mb-1">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-steel-500 mb-4">{rel.summary}</p>
                    <div className="text-xs font-bold text-steel-900 group-hover:text-accent flex items-center gap-1">Lihat Produk <Icon name="arrow" className="h-3 w-3" /></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
