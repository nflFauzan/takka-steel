import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Mengenal ${company.name}, pusat baja & bahan bangunan terpercaya di ${company.city}. Visi, misi, dan komitmen kami.`,
};

export default function TentangPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[45vh] items-center justify-center bg-steel-900 text-center text-white pt-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1900&q=70"
          alt="Gudang besi"
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950 to-steel-900/60" />
        <div className="container-px relative z-10 max-w-3xl">
          <div className="mb-4 flex justify-center gap-2 text-xs font-bold text-steel-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Tentang Kami</span>
          </div>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl uppercase">
            Tentang Kami
          </h1>
          <p className="mt-4 text-lg text-steel-300">
            Dedikasi dalam menyuplai besi dan baja konstruksi berkualitas tinggi untuk pembangunan infrastruktur yang berkelanjutan.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="border-l-4 border-gold pl-4 mb-6">
               <span className="text-xs font-bold uppercase tracking-widest text-gold mb-1 block">TENTANG TAKKA STEEL</span>
               <h2 className="font-heading text-3xl font-extrabold text-steel-900 leading-tight">
                 Pusat Distribusi Baja Terpercaya di Jabodetabek
               </h2>
            </div>
            <div className="space-y-4 text-steel-600 leading-relaxed text-sm">
              <p>
                {company.name} adalah pusat penyedia material baja dan bahan
                bangunan yang berlokasi strategis. Hadir sebagai jawaban atas kebutuhan
                material konstruksi industri, kontraktor, dan end-user untuk proyek berskala kecil
                hingga besar dengan spesifikasi standar SNI dan sertifikasi pabrik.
              </p>
              <p>
                Dengan fasilitas pergudangan modern dan jaringan rantai pasok yang luas, kami memastikan
                ketersediaan produk unggulan secara konsisten. Tim ahli kami siap memberikan solusi
                konstruksi yang tepat, efisien, dan ekonomis untuk menunjang kesuksesan proyek Anda.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="relative">
            <div className="rounded-2xl overflow-hidden bg-steel-100 aspect-[4/5] md:aspect-square relative shadow-lg border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"
                alt="Tim Takka Steel"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-left-8 bg-steel-950 p-6 rounded-xl text-white shadow-2xl max-w-[250px] border border-steel-800">
              <p className="font-bold leading-snug">"Kualitas besi adalah pondasi kepercayaan."</p>
              <p className="text-xs text-steel-400 mt-2">— Tim Quality Control TAKKA</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="section relative bg-steel-950 overflow-hidden">
        {/* Large BG Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-black text-steel-900/50 text-[150px] md:text-[250px] tracking-tighter select-none z-0">
          VISION
        </div>
        
        <div className="container-px relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-extrabold text-white">Visi & Misi Strategis</h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <div className="h-full rounded-2xl bg-steel-900 p-8 shadow-xl border border-steel-800/50">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-steel-800 text-gold border border-steel-700">
                  <Icon name="link" className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-white mb-4">Visi Kami</h3>
                <p className="text-steel-300 leading-relaxed">{company.vision} Menjadi pusat penyedia material bangunan terlengkap dan paling terpercaya di Indonesia dengan mengutamakan standar SNI dan efisiensi distribusi.</p>
              </div>
            </Reveal>
            <Reveal delay={100} className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-xl bg-steel-900/80 backdrop-blur p-6 border border-steel-800 flex gap-5 items-start">
                <div className="text-gold font-bold">01</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Produk & Harga Kompetitif</h4>
                  <p className="text-sm text-steel-400">Menyediakan material baja dengan standar tinggi, dipadukan dengan penawaran harga terbaik yang transparan dari produsen langsung.</p>
                </div>
              </div>
              <div className="rounded-xl bg-steel-900/80 backdrop-blur p-6 border border-steel-800 flex gap-5 items-start">
                <div className="text-gold font-bold">02</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Fokus pada Pelayanan</h4>
                  <p className="text-sm text-steel-400">Membangun budaya layanan konsumen yang proaktif, responsif, serta memberikan solusi tepat bagi kebutuhan material spesifik proyek.</p>
                </div>
              </div>
              <div className="rounded-xl bg-steel-900/80 backdrop-blur p-6 border border-steel-800 flex gap-5 items-start">
                <div className="text-gold font-bold">03</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Inovasi Berkelanjutan</h4>
                  <p className="text-sm text-steel-400">Terus mengembangkan efisiensi operasional dan sistem pergudangan digital untuk mempercepat waktu respons pengiriman material.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Armada & Fasilitas */}
      <section className="section bg-steel-50">
        <div className="container-px">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-steel-500 mb-1 block">INFRASTRUKTUR KAMI</span>
              <h2 className="font-heading text-3xl font-extrabold text-steel-900 leading-tight">
                Kekuatan Armada &<br/>Pergudangan
              </h2>
            </div>
            <div className="flex gap-8">
               <div className="text-right border-r border-steel-200 pr-8">
                 <div className="text-3xl font-black text-steel-900">100%</div>
                 <div className="text-xs font-bold text-steel-500 uppercase">Ready Stock SNI</div>
               </div>
               <div className="text-right">
                 <div className="text-3xl font-black text-steel-900">24h</div>
                 <div className="text-xs font-bold text-steel-500 uppercase">Delivery Response</div>
               </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-steel-900 overflow-hidden relative aspect-video shadow-md">
              <img src="https://images.unsplash.com/photo-1580983556488-87b64f331904?auto=format&fit=crop&w=800&q=80" alt="Armada Truk" className="absolute inset-0 h-full w-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-950 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="font-bold text-white">Armada Distribusi</h3>
                <p className="text-xs text-steel-300 mt-1">Truk engkel hingga tronton siap mengirim partai besar maupun eceran ke lokasi proyek secara aman.</p>
              </div>
            </div>
            <div className="rounded-2xl bg-steel-900 overflow-hidden relative aspect-video shadow-md">
              <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80" alt="Gudang Indoor" className="absolute inset-0 h-full w-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-950 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="font-bold text-white">Pusat Pergudangan Indoor</h3>
                <p className="text-xs text-steel-300 mt-1">Material baja terlindung dari cuaca hujan dan karat, memastikan kualitas besi tetap terjaga prima.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-white pb-24">
        <div className="container-px">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-extrabold text-steel-900">Dokumentasi Aktivitas</h2>
            <p className="text-sm text-steel-500 mt-2 max-w-lg mx-auto">Momen dari aktivitas pergudangan, muat barang, kolaborasi tim, hingga pengiriman ke lapangan.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <img src="https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&w=400&q=80" alt="Gallery" className="rounded-xl w-full aspect-square object-cover grayscale hover:grayscale-0 transition duration-300" />
             <img src="https://images.unsplash.com/photo-1541888086925-920a0b6330ce?auto=format&fit=crop&w=400&q=80" alt="Gallery" className="rounded-xl w-full aspect-square object-cover grayscale hover:grayscale-0 transition duration-300" />
             <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80" alt="Gallery" className="rounded-xl w-full aspect-square object-cover grayscale hover:grayscale-0 transition duration-300" />
             <img src="https://images.unsplash.com/photo-1532087532321-df627e3ff717?auto=format&fit=crop&w=400&q=80" alt="Gallery" className="rounded-xl w-full aspect-square object-cover grayscale hover:grayscale-0 transition duration-300" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="-mt-12 relative z-10 pb-16">
        <div className="container-px">
          <div className="rounded-2xl bg-steel-950 px-8 py-12 md:py-16 text-white shadow-xl border border-steel-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-2">Siap Memulai Proyek Anda?</h2>
              <p className="text-steel-400 text-sm">Konsultasikan kebutuhan spesifikasi baja dan volume secara langsung dengan pakar material kami.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link href="/kontak" className="btn border border-white/20 hover:bg-white/10 rounded-full px-6">
                <Icon name="mail" className="h-4 w-4" /> Hubungi Admin 1
              </Link>
              <Link href="/kontak" className="btn border border-white/20 hover:bg-white/10 rounded-full px-6">
                <Icon name="mail" className="h-4 w-4" /> Hubungi Admin 2
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
