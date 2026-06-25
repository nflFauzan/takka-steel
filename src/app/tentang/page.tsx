import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { company, waLink, defaultWaMessage } from "@/data/company";
import { productCategories } from "@/data/products";
import { valueProps, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Mengenal ${company.name}, pusat baja ringan, atap, bondeck & bahan bangunan di Ciomas, ${company.city}. Melayani kebutuhan eceran hingga proyek.`,
};

/* Material range per category — derived from the real catalog (products.ts). */
const CATEGORY_BLURB: Record<(typeof productCategories)[number], string> = {
  "Baja Ringan": "Truss CNP, reng galvalume, hollow partisi & plafon.",
  "Sistem Atap": "Spandek pasir & polos, metal pasir, Alderon uPVC, seng galvalum.",
  "Struktur Lantai": "Bondeck / floordeck untuk dak lantai cor bertingkat.",
  "Aksesoris & Perkakas": "Kawat bendrat, dinabolt, mata bor, gerinda, cat & thinner.",
};

export default function TentangPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[42vh] items-center overflow-hidden bg-steel-900 pt-28 pb-16 text-white">
        <img
          src="/photos/kegiatan-3.jpg"
          alt="Gudang utama Takka Steel — Ciomas, Bogor"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/85 to-steel-900/40" />
        <div className="container-px relative z-10">
          <nav className="mb-4 flex gap-2 text-xs font-bold text-steel-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Tentang Kami</span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Tentang Takka Steel</span>
          </div>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Material baja yang lengkap, dekat, dan bisa diandalkan.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-300 md:text-lg">
            Pusat baja &amp; bahan bangunan terlengkap. Harga minimum, kualitas
            premium. Melayani Jabodetabek &amp; seluruh wilayah Indonesia.
          </p>
        </div>
      </section>

      {/* ── Siapa Kami ───────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-px grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-steel-900 md:text-4xl">
              Satu tempat untuk semua kebutuhan baja & bangunan Anda
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-steel-600">
              <p>
                {company.name} berdiri pada {company.foundedFull} di Ciomas,
                Kabupaten Bogor, sebagai pusat material baja ringan, sistem atap,
                struktur lantai, dan bahan bangunan. Produk lengkap dalam satu
                tempat, dari kebutuhan eceran untuk renovasi rumah hingga pasokan
                untuk proyek kontraktor.
              </p>
              <p>
                Sebagai usaha yang terus berkembang, fokus kami sederhana: stok
                yang siap, harga yang transparan, dan pengiriman tepat waktu ke
                Jabodetabek serta seluruh wilayah Indonesia. Kami juga senang
                membantu menghitung kebutuhan material sebelum Anda membeli.
              </p>
            </div>

            {/* Honest grounding facts (replaces the old fictional QC quote) */}
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-steel-200 bg-steel-200 sm:grid-cols-4">
              <div className="bg-white p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel-500">Berdiri</dt>
                <dd className="mt-1 font-heading text-lg font-extrabold text-steel-900">{company.foundedFull}</dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel-500">Pelanggan</dt>
                <dd className="mt-1 font-heading text-lg font-extrabold text-steel-900">1.000+</dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel-500">Wilayah</dt>
                <dd className="mt-1 font-heading text-base font-extrabold text-steel-900">Jabodetabek &amp; Seluruh Indonesia</dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel-500">Melayani</dt>
                <dd className="mt-1 font-heading text-lg font-extrabold text-steel-900">Eceran &amp; Proyek</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden bg-steel-100 md:aspect-square"
              style={{ clipPath: "polygon(8% 0, 100% 0, 100% 92%, 0 100%)" }}
            >
              <img
                src="/photos/kegiatan-1.jpg"
                alt="Tim Takka Steel memuat material baja ke armada pengiriman"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-steel-950/70 via-transparent to-transparent" />
            </div>
            <span className="absolute left-0 top-0 h-16 w-1 bg-gold" />
          </Reveal>
        </div>
      </section>

      {/* ── Apa yang Kami Sediakan ───────────────────────────── */}
      <section className="section bg-steel-950 text-white">
        <div className="container-px">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-extrabold leading-tight md:text-4xl">
              Empat lini produk, satu alamat
            </h2>
            <p className="mt-4 text-steel-300">
              Mulai dari rangka atap hingga aksesoris pemasangan, semua bisa
              dibelanjakan sekaligus tanpa berpindah toko.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-steel-800 bg-steel-800 sm:grid-cols-2">
            {productCategories.map((cat, i) => (
              <Reveal key={cat} delay={i * 80} className="bg-steel-900">
                <Link
                  href="/produk"
                  className="group flex h-full items-start gap-5 p-7 transition-colors hover:bg-steel-800"
                >
                  <span className="font-heading text-2xl font-black text-gold/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-white">{cat}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-400">
                      {CATEGORY_BLURB[cat]}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-transform group-hover:translate-x-1">
                      Lihat produk
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
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
      {/* ⚠️ PLACEHOLDER — ganti dengan testimoni nyata bila sudah ada. */}
      <section className="section bg-white">
        <div className="container-px">
          <h2 className="max-w-2xl font-heading text-3xl font-extrabold leading-tight text-steel-900 md:text-4xl">
            Apa kata pelanggan kami
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
