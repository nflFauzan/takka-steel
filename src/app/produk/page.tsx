import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Katalog Produk",
};

export default function ProdukPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-center bg-steel-900 text-white pt-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1900&q=70"
          alt="Gudang besi"
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-900/90 to-transparent" />
        <div className="container-px relative z-10">
          <div className="max-w-2xl">
            <div className="mb-4 flex gap-2">
              <span className="rounded bg-gold px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-steel-900">SNI CERTIFIED</span>
              <span className="rounded bg-steel-700 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">READY STOCK</span>
            </div>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
              Katalog Produk Material Konstruksi
            </h1>
            <p className="mt-6 text-lg text-steel-300">
              Distributor besi dan baja berkualitas tinggi untuk kebutuhan industri dan pembangunan.
            </p>
            <div className="mt-8">
              <Link href="/kontak" className="btn-gold">
                Minta Penawaran Sekarang <Icon name="arrow" className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subnav links */}
      <div className="bg-white border-b border-steel-100 sticky top-20 z-30 shadow-sm">
        <div className="container-px">
          <div className="flex overflow-x-auto py-4 gap-8 text-sm font-bold text-steel-500 whitespace-nowrap hide-scrollbar">
            <a href="#besi-baja" className="flex items-center gap-2 hover:text-accent"><Icon name="check" className="h-4 w-4 text-gold" /> Besi Beton</a>
            <a href="#rangka-atap" className="flex items-center gap-2 hover:text-accent"><Icon name="check" className="h-4 w-4 text-gold" /> Rangka Atap</a>
            <a href="#atap" className="flex items-center gap-2 hover:text-accent"><Icon name="check" className="h-4 w-4 text-gold" /> Atap</a>
            <a href="#material-cor" className="flex items-center gap-2 hover:text-accent"><Icon name="check" className="h-4 w-4 text-gold" /> Material Cor</a>
            <a href="#papan-interior" className="flex items-center gap-2 hover:text-accent"><Icon name="check" className="h-4 w-4 text-gold" /> Papan & Interior</a>
          </div>
        </div>
      </div>

      <div className="bg-steel-50 py-16 space-y-20">
        {/* BESI & BAJA */}
        <section id="besi-baja" className="container-px">
          <div className="mb-8 border-l-4 border-gold pl-4">
            <h2 className="font-heading text-2xl font-extrabold text-steel-900 uppercase tracking-tight">BESI & BAJA</h2>
            <p className="text-sm text-steel-500 mt-1">Material struktur baja karbon dengan ketahanan beban maksimal.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCatalogCard title="Hollow Galvanis" badge="SNI" desc="Tebal: 0.8mm - 1.8mm" />
            <ProductCatalogCard title="Besi Beton" badge="SNI" desc="Ukuran: 8mm, 10mm, 12mm" />
            <ProductCatalogCard title="Besi Siku" badge="READY STOCK" desc="Ukuran: 4x4, 5x5, 6x6" />
            <ProductCatalogCard title="Besi UNP / WF" desc="Standar Structural Steel" />
          </div>
        </section>

        {/* RANGKA ATAP BAJA RINGAN */}
        <section id="rangka-atap" className="container-px">
          <div className="mb-8 border-l-4 border-gold pl-4">
            <h2 className="font-heading text-2xl font-extrabold text-steel-900 uppercase tracking-tight">RANGKA ATAP BAJA RINGAN</h2>
            <p className="text-sm text-steel-500 mt-1">Produk baja ringan berlapis Zincalume untuk konstruksi atap kokoh.</p>
          </div>
          
          <div className="rounded-2xl bg-white border border-steel-100 overflow-hidden shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-3 flex items-center gap-3">
                  <h3 className="font-heading text-2xl font-extrabold text-steel-900">Baja Ringan CNP C75</h3>
                  <span className="rounded bg-steel-900 px-2 py-0.5 text-xs font-bold text-white">BEST SELLER</span>
                </div>
                <p className="text-steel-600 mb-6 text-sm leading-relaxed">
                  Material rangka atap utama dengan standar kekuatan tinggi. Pastikan menggunakan ketebalan asli (Full).
                </p>
                <div className="flex gap-4 mb-8">
                  <div className="bg-steel-50 rounded p-3 flex-1">
                    <div className="text-xs text-steel-500 uppercase font-bold">Ketebalan</div>
                    <div className="font-bold text-steel-900">0.75mm & 1.00mm</div>
                  </div>
                  <div className="bg-steel-50 rounded p-3 flex-1">
                    <div className="text-xs text-steel-500 uppercase font-bold">Kualitas</div>
                    <div className="font-bold text-steel-900">Full Specs</div>
                  </div>
                </div>
                <Link href="/produk/baja-ringan-cnp" className="btn-dark w-fit rounded-full px-8">MINTA PENAWARAN</Link>
              </div>
              <div className="bg-steel-200 min-h-[300px] relative">
                 <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" alt="Baja Ringan" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ATAP */}
        <section id="atap" className="container-px">
          <div className="mb-8 border-l-4 border-gold pl-4">
            <h2 className="font-heading text-2xl font-extrabold text-steel-900 uppercase tracking-tight">ATAP</h2>
            <p className="text-sm text-steel-500 mt-1">Solusi penutup bangunan modern dengan durabilitas tinggi.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-steel-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="home" className="h-6 w-6 text-accent" />
                <h3 className="font-bold text-steel-900">UPVC Alderon & Atap SL</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-steel-50 pb-3">
                  <span className="font-bold text-sm text-steel-800">Alderon</span>
                  <span className="text-xs text-steel-500">Single & Double Layer</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="font-bold text-sm text-steel-800">Atap SL</span>
                  <span className="text-xs text-steel-500">Premium Quality</span>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl border border-steel-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="layout" className="h-6 w-6 text-accent" />
                <h3 className="font-bold text-steel-900">Spandek</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-steel-50 pb-3">
                  <div>
                    <span className="font-bold text-sm text-steel-800 block">Spandek Polos</span>
                    <span className="text-xs text-steel-500">Tebal: 0.25 - 0.40</span>
                  </div>
                  <span className="rounded bg-steel-900 px-2 py-0.5 text-xs font-bold text-white">SNI</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <div>
                     <span className="font-bold text-sm text-steel-800 block">Spandek Pasir</span>
                     <span className="text-xs text-steel-500">Meredam suara</span>
                  </div>
                  <span className="rounded bg-gold px-2 py-0.5 text-xs font-bold text-steel-900">BARU</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MATERIAL COR */}
        <section id="material-cor" className="container-px">
          <div className="mb-8 border-l-4 border-gold pl-4">
            <h2 className="font-heading text-2xl font-extrabold text-steel-900 uppercase tracking-tight">MATERIAL COR</h2>
            <p className="text-sm text-steel-500 mt-1">Penguat struktur lantai beton untuk beban statis & dinamis.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
             <div className="rounded-xl border border-steel-100 bg-white p-6 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="bg-steel-50 p-3 rounded-lg"><Icon name="grid" className="h-6 w-6 text-accent" /></div>
                   <div>
                     <h3 className="font-bold text-steel-900">Bondeck (Floordeck)</h3>
                     <p className="text-xs text-steel-500">Tebal: 0.65, 0.70, 0.75</p>
                     <span className="mt-1 inline-block rounded bg-steel-900 px-2 py-0.5 text-[10px] font-bold text-white">STANDAR SNI</span>
                   </div>
                </div>
                <Icon name="arrow" className="h-5 w-5 text-steel-300" />
             </div>
             
             <div className="rounded-xl border border-steel-100 bg-white p-6 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="bg-steel-50 p-3 rounded-lg"><Icon name="grid" className="h-6 w-6 text-accent" /></div>
                   <div>
                     <h3 className="font-bold text-steel-900">Wiremesh</h3>
                     <p className="text-xs text-steel-500">M6, M8, M10 (Roll & Lembar)</p>
                     <span className="mt-1 inline-block rounded bg-steel-900 px-2 py-0.5 text-[10px] font-bold text-white">SERTIFIKASI ISO</span>
                   </div>
                </div>
                <Icon name="arrow" className="h-5 w-5 text-steel-300" />
             </div>
          </div>
        </section>

        {/* PAPAN & INTERIOR */}
        <section id="papan-interior" className="container-px">
          <div className="mb-8 border-l-4 border-gold pl-4">
            <h2 className="font-heading text-2xl font-extrabold text-steel-900 uppercase tracking-tight">PAPAN & INTERIOR</h2>
            <p className="text-sm text-steel-500 mt-1">Material finishing berkualitas untuk estetika dan ketahanan ruang.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
             <ProductCatalogCard title="GRC Board" badge="TAHAN AIR" desc="Tebal: 4mm - 12mm" />
             <ProductCatalogCard title="Lisplank" badge="MOTIF KAYU" desc="Tersedia Polos & Urat Kayu" />
             <ProductCatalogCard title="PVC Foam Board" badge="ANTI RAYAP" desc="Tebal: 3mm - 18mm" />
             <ProductCatalogCard title="Gypsum" badge="JAYABOARD" desc="Aplus & Knauf" />
          </div>
        </section>
      </div>

      <section className="bg-steel-950 py-20">
        <div className="container-px text-center text-white">
          <h2 className="text-3xl font-extrabold md:text-4xl">Siap Membangun Dengan Material Terbaik?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel-300 text-lg">
            Hubungi tim penjualan kami untuk mendapatkan penawaran harga grosir dan konsultasi teknis gratis.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a href="#" className="btn border-2 border-white/20 text-white hover:bg-white/10 rounded-full px-8">
              <Icon name="whatsapp" className="h-5 w-5" /> Hubungi Admin 1
            </a>
            <a href="#" className="btn border-2 border-white/20 text-white hover:bg-white/10 rounded-full px-8">
              <Icon name="whatsapp" className="h-5 w-5" /> Hubungi Admin 2
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCatalogCard({ title, badge, desc }: { title: string, badge?: string, desc: string }) {
  return (
    <div className="rounded-xl border border-steel-100 bg-white p-5 shadow-sm text-center flex flex-col h-full">
      <div className="bg-steel-100 rounded-lg h-32 mb-5 flex items-center justify-center relative overflow-hidden">
        <Icon name="image" className="h-8 w-8 text-steel-300" />
        {badge && <span className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded ${badge.includes('READY') || badge.includes('BARU') ? 'bg-gold text-steel-900' : 'bg-steel-900 text-white'}`}>{badge}</span>}
      </div>
      <h3 className="font-bold text-steel-900 mb-1">{title}</h3>
      <p className="text-xs text-steel-500 mb-5">{desc}</p>
      <div className="mt-auto">
        <Link href="/produk" className="block w-full border border-steel-900 text-steel-900 rounded py-2 text-xs font-bold hover:bg-steel-900 hover:text-white transition">FULL SPECS</Link>
      </div>
    </div>
  )
}
