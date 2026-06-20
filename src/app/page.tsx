import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";
import { company, waLink, defaultWaMessage } from "@/data/company";
import { faqs } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <TrustSection />
      <ProductCategories />
      <WhyUsCards />
      <TestimonialsDark />
      <FaqSection />
      <LocationSection />
      <CtaBandDark />
    </>
  );
}

function TrustSection() {
  return (
    <section className="section bg-steel-50">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="h2 text-steel-900">Membangun Kepercayaan Sejak 2025</h2>
          <p className="mt-5 text-lg leading-relaxed text-steel-600">
            Kepercayaan klien adalah aset terbesar kami. Dengan dedikasi untuk selalu memberikan material berkualitas standar nasional dan layanan prima, kami memastikan setiap proyek yang Anda jalankan dapat berdiri kokoh.
          </p>
          <p className="mt-4 text-steel-600">
            Langkah demi langkah, Takka Steel berkembang dari distributor lokal menjadi mitra andalan bagi berbagai skala proyek.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 rounded-lg bg-white px-5 py-3 shadow-sm font-semibold text-steel-800 border border-steel-100">
              <Icon name="check" className="h-5 w-5 text-accent" /> Standar SNI
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white px-5 py-3 shadow-sm font-semibold text-steel-800 border border-steel-100">
              <Icon name="check" className="h-5 w-5 text-accent" /> Pengiriman Cepat
            </div>
          </div>
        </Reveal>
        <Reveal delay={100} className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gold/10 blur-xl"></div>
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
            alt="Proses Konstruksi"
            className="relative rounded-xl border-4 border-white shadow-xl h-[450px] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

function ProductCategories() {
  return (
    <section className="section bg-white">
      <div className="container-px">
        <Reveal className="mb-12 text-center">
          <h2 className="h2 text-steel-900">Kategori Produk</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          <p className="mt-4 text-steel-600">
            Material berkualitas tinggi untuk kebutuhan struktural dan penyelesaian akhir proyek Anda.
          </p>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 md:h-[500px]">
          {/* Main Block */}
          <Link href="/produk" className="group relative col-span-1 md:col-span-2 md:row-span-2 overflow-hidden rounded-xl bg-steel-900 min-h-[300px] md:min-h-0">
            <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80" alt="Hollow & Besi" className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-steel-900 via-steel-900/40 to-transparent" />
            <div className="absolute bottom-0 p-6 md:p-8">
              <span className="mb-3 inline-block rounded bg-gold px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-steel-900">Best Seller</span>
              <h3 className="font-heading text-2xl font-bold text-white md:text-4xl">Hollow &amp; Besi</h3>
              <p className="mt-2 text-steel-200">Beragam besi konstruksi, struktur baja SNI terjamin kualitasnya.</p>
            </div>
          </Link>

          <Link href="/produk" className="group relative overflow-hidden rounded-xl bg-steel-800 min-h-[200px] md:min-h-0">
            <img src="https://images.unsplash.com/photo-1621643916942-8c886a0bdfce?auto=format&fit=crop&w=600&q=80" alt="Baja Ringan" className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-steel-900 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <h3 className="font-heading text-lg font-bold text-white">Baja Ringan</h3>
              <p className="text-sm text-steel-300">CNP &amp; Reng</p>
            </div>
          </Link>

          <Link href="/produk" className="group relative overflow-hidden rounded-xl bg-steel-800 min-h-[200px] md:min-h-0">
            <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80" alt="Atap UPVC & Spandek" className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-steel-900 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <h3 className="font-heading text-lg font-bold text-white">Atap UPVC &amp; Spandek</h3>
              <p className="text-sm text-steel-300">Kuat &amp; Tahan Lama</p>
            </div>
          </Link>
        </div>
        <div className="grid gap-4 mt-4 md:grid-cols-2 h-[200px]">
          <Link href="/produk" className="group relative overflow-hidden rounded-xl bg-steel-800">
            <img src="https://images.unsplash.com/photo-1590483736622-39fbdf419a4e?auto=format&fit=crop&w=800&q=80" alt="Wiremesh" className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-steel-900 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <h3 className="font-heading text-lg font-bold text-white">Wiremesh</h3>
              <p className="text-sm text-steel-300">Struktur Pengecoran</p>
            </div>
          </Link>
          <Link href="/produk" className="group relative overflow-hidden rounded-xl bg-steel-800">
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" alt="Papan & Interior" className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-steel-900 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <h3 className="font-heading text-lg font-bold text-white">Papan &amp; Interior</h3>
              <p className="text-sm text-steel-300">GRC, Gypsum, &amp; Lisplank</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyUsCards() {
  const points = [
    { title: "Solusi Cepat Proyek", desc: "Dukungan penuh untuk skala industri." },
    { title: "Kualitas SNI Terjamin", desc: "Produk bersertifikat resmi terpercaya." },
    { title: "Armada Pengiriman", desc: "Tersedia berbagai pilihan pengiriman." },
    { title: "Konsultasi Ahli", desc: "Tim profesional siap mendampingi Anda." },
  ];
  return (
    <section className="section bg-steel-50">
      <div className="container-px">
        <Reveal className="mb-12 text-center">
          <span className="eyebrow">Nilai Lebih</span>
          <h2 className="h2 mt-2">Mengapa Memilih TAKKA</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 50}>
              <div className="flex h-full flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm border border-steel-100 transition hover:shadow-card-hover">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
                  <Icon name="check" className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold text-steel-900">{p.title}</h3>
                <p className="text-sm text-steel-500">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsDark() {
  const items = [
    { name: "Andi Wijaya", role: "Kontraktor Sipil", quote: "Pilihan produk terlengkap, respon cepat, dan pengiriman aman sampai tujuan." },
    { name: "Budi Santoso", role: "Pemilik Toko Material", quote: "Harga sangat bersaing. Stok selalu ready untuk kebutuhan mendadak proyek kami." },
    { name: "Citra Lestari", role: "Arsitek", quote: "Kualitas baja SNI sesuai standar yang kami tetapkan di spesifikasi proyek." },
  ];
  return (
    <section className="section bg-white">
      <div className="container-px">
        <Reveal className="mb-12 text-center">
          <h2 className="h2">Mengapa Klien Kami Mempercayai Kami</h2>
          <p className="mt-3 text-steel-600">Lebih dari sekedar janji, bukti nyata dukungan material kami untuk puluhan proyek komersial dan residensial.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl bg-gradient-to-b from-steel-900 to-steel-950 p-8 text-white shadow-lg">
                <div className="mb-4 text-gold text-xl">★★★★★</div>
                <p className="flex-1 text-steel-300 italic mb-6">"{t.quote}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-steel-400">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section bg-steel-50">
      <div className="container-px max-w-4xl">
        <Reveal className="mb-10 text-center">
          <h2 className="h2">Pertanyaan yang Sering Diajukan</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
        </Reveal>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details className="group rounded-xl bg-white p-6 shadow-sm border border-steel-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-steel-900">
                  {f.q}
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-steel-100 text-steel-600 group-open:rotate-45 transition">＋</span>
                </summary>
                <p className="mt-4 text-sm text-steel-600 leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="section bg-white">
      <div className="container-px">
        <Reveal className="mb-12 text-center">
          <h2 className="h2">Lokasi Kami</h2>
          <p className="mt-3 text-steel-600">Kunjungi depot gudang utama kami untuk melihat stok dan berdiskusi langsung.</p>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-2 bg-steel-50 rounded-3xl p-6 md:p-10 border border-steel-100">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-steel-900 mb-6">Kantor & Gudang Utama</h3>
            <ul className="space-y-5 text-steel-700">
              <li className="flex gap-4">
                <div className="mt-1 bg-white p-2 rounded shadow-sm text-accent"><Icon name="pin" className="h-5 w-5" /></div>
                <div>
                  <p className="font-semibold text-steel-900">Alamat</p>
                  <p className="text-sm mt-1 leading-relaxed">{company.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-white p-2 rounded shadow-sm text-accent"><Icon name="phone" className="h-5 w-5" /></div>
                <div>
                  <p className="font-semibold text-steel-900">Kontak</p>
                  <p className="text-sm mt-1">{company.whatsappDisplay}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-white p-2 rounded shadow-sm text-accent"><Icon name="mail" className="h-5 w-5" /></div>
                <div>
                  <p className="font-semibold text-steel-900">Email</p>
                  <p className="text-sm mt-1">{company.email}</p>
                </div>
              </li>
            </ul>
            <a href={company.mapsLink} target="_blank" rel="noreferrer" className="btn-gold mt-8 w-fit">
              Petunjuk Arah <Icon name="arrow" className="h-4 w-4 ml-2" />
            </a>
          </div>
          <div className="h-[300px] lg:h-auto rounded-2xl overflow-hidden bg-steel-200 border-4 border-white shadow-md relative flex items-center justify-center">
            <div className="text-center text-steel-500">
              <Icon name="pin" className="h-10 w-10 mx-auto mb-2 text-steel-400" />
              <p className="font-semibold">Peta Interaktif</p>
              <p className="text-xs mt-1">Google Maps Integrasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBandDark() {
  return (
    <section className="bg-steel-950 py-20">
      <div className="container-px text-center text-white">
        <h2 className="text-3xl font-extrabold md:text-5xl">Butuh Material Cepat?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-steel-300 text-lg">
          Tim spesialis kami siap merespon kebutuhan harga dan detail stok dalam hitungan menit untuk memastikan kelancaran proyek Anda.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Hubungi Admin 1
          </a>
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border-2 border-white/20 text-white hover:bg-white/10 text-base"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Hubungi Admin 2
          </a>
        </div>
      </div>
    </section>
  );
}
