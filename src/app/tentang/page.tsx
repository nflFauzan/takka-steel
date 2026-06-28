import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { company, waLink, defaultWaMessage } from "@/data/company";
import { valueProps, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Mengenal ${company.name} — pusat baja & bahan bangunan terpercaya, didirikan ${company.founderName}. Melayani Jabodetabek & seluruh Indonesia.`,
};

// Foto pertama (index 0) tampil di tengah & membesar memenuhi layar saat scroll.
const PARALLAX_PHOTOS = [
  { src: "/photos/gudang-utama.webp", alt: "Gudang utama Takka Steel di Ciomas, Bogor" },
  { src: "/photos/tim.webp", alt: "Tim profesional Takka Steel berseragam" },
  { src: "/photos/founder.webp", alt: "Founder Takka Steel di depan toko" },
  { src: "/photos/kegiatan-1.webp", alt: "Tim Takka Steel memuat material baja ke armada" },
  { src: "/photos/kirim-istana.webp", alt: "Pengiriman material Takka Steel ke area Istana Bogor" },
  { src: "/photos/kirim-wiremesh.webp", alt: "Armada Takka Steel memuat besi wiremesh" },
  { src: "/photos/display-alderon.webp", alt: "Pengiriman pipa dan material bangunan oleh Takka Steel" },
];

export default function TentangPage() {
  return (
    <>
      <PageHeader
        title="Material baja yang lengkap, dekat, dan bisa diandalkan."
        subtitle="Pusat baja & bahan bangunan terlengkap. Harga minimum, kualitas premium. Melayani Jabodetabek & seluruh wilayah Indonesia."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Tentang Kami" }]}
      />

      {/* ── ZoomParallax (21st.dev) ──────────────────────────── */}
      <ZoomParallax images={PARALLAX_PHOTOS} />

      {/* ── Tentang Takka Steel (text-only, centered) ────────── */}
      <section className="section bg-white">
        <div className="container-px">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="eyebrow">Tentang Takka Steel</span>
              <span className="h-px w-8 bg-gold" />
            </div>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-steel-900 md:text-[2.5rem] md:leading-[1.15]">
              Satu tempat untuk semua kebutuhan baja &amp; bangunan Anda
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-steel-600 md:text-[17px]">
              <p>
                {company.name} berdiri pada {company.foundedFull} di Ciomas,
                Kabupaten Bogor, sebagai pusat material baja &amp; bahan bangunan
                terlengkap. Harga minimum, kualitas premium — melayani dari
                kebutuhan eceran hingga pasokan proyek kontraktor skala besar,
                ke Jabodetabek &amp; seluruh wilayah Indonesia.
              </p>
              <p>
                Sebagai usaha yang terus berkembang, fokus kami sederhana: stok
                yang siap, harga yang transparan, dan pengiriman tepat waktu ke
                Jabodetabek serta seluruh wilayah Indonesia. Kami juga senang
                membantu menghitung kebutuhan material sebelum Anda membeli.
              </p>
            </div>
          </Reveal>

          {/* Grounding facts — centered, elegant */}
          <Reveal delay={120} className="mx-auto mt-12 max-w-3xl">
            <dl className="grid grid-cols-2 gap-px overflow-hidden border border-steel-200 bg-steel-200 sm:grid-cols-4">
              <div className="bg-white p-5 text-center">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel-500">Berdiri</dt>
                <dd className="mt-1 font-heading text-lg font-extrabold text-steel-900">{company.foundedFull}</dd>
              </div>
              <div className="bg-white p-5 text-center">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel-500">Pelanggan</dt>
                <dd className="mt-1 font-heading text-lg font-extrabold text-steel-900">1.000+</dd>
              </div>
              <div className="bg-white p-5 text-center">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel-500">Wilayah</dt>
                <dd className="mt-1 font-heading text-sm font-extrabold leading-snug text-steel-900">Jabodetabek &amp; Seluruh Indonesia</dd>
              </div>
              <div className="bg-white p-5 text-center">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel-500">Melayani</dt>
                <dd className="mt-1 font-heading text-lg font-extrabold text-steel-900">Eceran &amp; Proyek</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Pendiri ──────────────────────────────────────────── */}
      <section className="section bg-steel-50">
        <div className="container-px grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:items-center">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-steel-100">
              <img
                src="/photos/founder.webp"
                alt={`${company.founderName} — Founder Takka Steel`}
                className="h-full w-full object-cover"
              />
              <span className="absolute -bottom-px left-0 h-1 w-24 bg-gold" />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden h-32 w-32 border-2 border-gold lg:block" />
          </Reveal>

          <Reveal delay={120}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="eyebrow">Pendiri</span>
            </div>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-steel-900 md:text-4xl">
              Dibangun dengan integritas, dijalankan dengan dedikasi.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-steel-600">
              <p>
                Takka Steel didirikan oleh <strong className="text-steel-900">{company.founderName}</strong>{" "}
                pada {company.foundedFull} dengan satu visi sederhana: menjadi pusat
                material baja &amp; bahan bangunan yang bisa diandalkan kontraktor,
                pemborong, dan pemilik rumah — tanpa kompromi kualitas dan tanpa
                permainan harga.
              </p>
              <p>
                Dari sebuah gudang di Ciomas, Bogor, Takka Steel kini melayani
                lebih dari 1.000 pelanggan di Jabodetabek dan berbagai wilayah
                Indonesia. Visi itu tetap sama: <em>harga minimum, kualitas premium</em>.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden border border-steel-200 bg-steel-200">
              <div className="bg-white p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel-500">Founder</dt>
                <dd className="mt-1 font-heading text-base font-extrabold text-steel-900">
                  {company.founderName}
                </dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel-500">Berdiri</dt>
                <dd className="mt-1 font-heading text-base font-extrabold text-steel-900">
                  {company.foundedFull}
                </dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel-500">Lokasi</dt>
                <dd className="mt-1 font-heading text-base font-extrabold text-steel-900">
                  Ciomas, Bogor
                </dd>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Tim Kami ─────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-px">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-steel-900 md:text-4xl">
              Tim yang terspesialisasi di setiap tahap pesanan Anda
            </h2>
            <p className="mt-4 text-steel-600">
              Staf gudang, admin, sales, dan kurir berseragam Takka Steel
              bekerja setiap hari. Stok selalu tersedia, pesanan diproses
              cepat, dan material sampai tepat waktu di lokasi proyek.
            </p>
          </div>

          <Reveal delay={100} className="mt-10">
            <div className="relative overflow-hidden">
              <img
                src="/photos/tim.webp"
                alt="Tim Takka Steel — staf gudang, admin, sales, dan kurir berseragam"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-steel-950/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8">
                <p className="font-heading text-xl font-extrabold sm:text-2xl">Tim Takka Steel</p>
                <p className="mt-1 text-sm text-steel-200">Senin–Sabtu, siap melayani Anda</p>
              </div>
            </div>
          </Reveal>

          {/* Role breakdown — no headcount, specialization focus */}
          <div className="mt-0 grid grid-cols-1 divide-y divide-steel-200 border border-steel-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {[
              {
                icon: "box" as const,
                title: "Staf Gudang",
                desc: "Stok besar selalu tersedia, siap diambil atau dikirim hari yang sama.",
              },
              {
                icon: "headset" as const,
                title: "Sales & Admin",
                desc: "Respons cepat untuk penawaran harga, konsultasi, dan konfirmasi pesanan.",
              },
              {
                icon: "truck" as const,
                title: "Kurir Berseragam",
                desc: "Armada Takka Steel antar langsung ke lokasi proyek Anda.",
              },
            ].map((r) => (
              <div key={r.title} className="flex gap-4 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center bg-steel-900 text-gold">
                  <Icon name={r.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold text-steel-900">{r.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-steel-600">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Armada & Pergudangan ─────────────────────────────── */}
      <section className="section bg-steel-950 text-white">
        <div className="container-px">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-extrabold leading-tight md:text-4xl">
              Stok besar, armada sendiri, kirim ke mana saja
            </h2>
            <p className="mt-4 text-steel-300">
              Kami mengoperasikan gudang sentral di Ciomas, Bogor, dengan armada
              pengiriman bermerek Takka Steel. Bukan reseller — kami menyimpan
              stok sendiri dan mengantar langsung ke lokasi Anda.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-steel-800 bg-steel-800 md:grid-cols-2 lg:grid-cols-3">
            <Reveal className="relative aspect-[3/4] overflow-hidden bg-steel-900">
              <img
                src="/photos/rak-baja.webp"
                alt="Stok besi dan baja ringan tertata rapi di rak toko Takka Steel"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-steel-950 to-transparent p-5">
                <p className="font-heading text-lg font-bold text-white">Pusat Material Lengkap</p>
                <p className="mt-1 text-sm text-steel-300">Segala jenis produk baja dan bahan bangunan siap sedia.</p>
              </div>
            </Reveal>
            <Reveal delay={80} className="relative aspect-[3/4] overflow-hidden bg-steel-900">
              <img
                src="/photos/kegiatan-2.webp"
                alt="Proses pemuatan pipa besi hollow ke armada Takka Steel"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-steel-950 to-transparent p-5">
                <p className="font-heading text-lg font-bold text-white">Armada Sendiri</p>
                <p className="mt-1 text-sm text-steel-300">Pengiriman cepat dan aman dengan kurir internal kami.</p>
              </div>
            </Reveal>
            <Reveal delay={160} className="relative aspect-[3/4] overflow-hidden bg-steel-900">
              <img
                src="/photos/kirim-istana.webp"
                alt="Truk Takka Steel melakukan pengiriman di area Istana Bogor"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-steel-950 to-transparent p-5">
                <p className="font-heading text-lg font-bold text-white">Proyek Prestisius</p>
                <p className="mt-1 text-sm text-steel-300">Dipercaya melayani pengiriman proyek penting Jabodetabek.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Kenapa Takka Steel ───────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-px">
          <h2 className="max-w-2xl font-heading text-3xl font-extrabold leading-tight text-steel-900 md:text-4xl">
            Kenapa pelanggan memilih kami
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {valueProps.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 80}
                className="flex gap-5 border-t border-steel-200 pt-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center bg-steel-900 text-gold">
                  <Icon name={v.icon as never} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-steel-900">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visi & Misi (real data) ──────────────────────────── */}
      <section className="section bg-steel-50">
        <div className="container-px grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="eyebrow">Visi &amp; Misi</span>
            </div>
            <p className="mt-5 font-heading text-2xl font-extrabold leading-snug text-steel-900 md:text-[1.75rem]">
              {company.vision}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ol className="divide-y divide-steel-200 border-y border-steel-200">
              {company.mission.map((m, i) => (
                <li key={i} className="flex items-start gap-5 py-5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center bg-gold font-heading text-sm font-black text-steel-900">
                    {i + 1}
                  </span>
                  <p className="text-[15px] leading-relaxed text-steel-700">{m}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ── Apa Kata Pelanggan ───────────────────────────────── */}
      <section className="section bg-steel-50">
        <div className="container-px">
          <h2 className="max-w-2xl font-heading text-3xl font-extrabold leading-tight text-steel-900 md:text-4xl">
            Apa kata pelanggan kami?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 90}
                className="flex h-full flex-col border-t-2 border-t-gold bg-steel-50 p-7"
              >
                <p className="flex-1 text-[15px] leading-relaxed text-steel-700">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-steel-200 pt-4">
                  <p className="font-bold text-steel-900">{t.name}</p>
                  <p className="mt-0.5 text-sm text-steel-500">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Info Praktis: Kunjungi Kami ──────────────────────── */}
      <section className="section bg-steel-50">
        <div className="container-px grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-steel-900 md:text-4xl">
              Kunjungi atau hubungi kami
            </h2>
            <p className="mt-4 text-steel-600">
              Datang langsung untuk melihat stok, atau pesan dari mana saja. Kami
              melayani pembelian eceran maupun grosir untuk proyek.
            </p>

            <dl className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-steel-900 text-gold">
                  <Icon name="pin" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="font-bold text-steel-900">Alamat Toko</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-steel-600">{company.address}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-steel-900 text-gold">
                  <Icon name="clock" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="font-bold text-steel-900">Jam Operasional</dt>
                  <dd className="mt-1 space-y-0.5 text-sm text-steel-600">
                    {company.operatingHours.map((h) => (
                      <p key={h.day}>
                        <span className="font-semibold text-steel-800">{h.day}:</span> {h.hours}
                      </p>
                    ))}
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-steel-900 text-gold">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="font-bold text-steel-900">Cara Pesan</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-steel-600">
                    WhatsApp {company.whatsappDisplay}, lewat{" "}
                    <a href={company.tokopedia} target="_blank" rel="noopener noreferrer" className="font-semibold text-steel-900 underline decoration-gold underline-offset-2">
                      {company.tokopediaName}
                    </a>
                    , atau datang langsung ke toko.
                  </dd>
                </div>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            {/* Real Google Maps embed — not a placeholder */}
            <div className="h-full min-h-[340px] w-full overflow-hidden border border-steel-200 bg-steel-100">
              <iframe
                title={`Lokasi ${company.name}`}
                src={company.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[340px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-steel-950 py-16 text-white">
        <div className="container-px flex flex-col items-start justify-between gap-8 border-t-2 border-t-gold pt-12 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl font-extrabold leading-tight md:text-3xl">
              Butuh material untuk proyek atau renovasi?
            </h2>
            <p className="mt-3 text-steel-400">
              Kirimkan jenis, ukuran, dan jumlah yang Anda butuhkan. Kami bantu
              siapkan penawaran harga terbaiknya.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Minta Penawaran
            </a>
            <Link href="/produk" className="btn border border-white/25 text-white hover:bg-white/10">
              Lihat Produk
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
