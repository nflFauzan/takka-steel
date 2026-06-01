import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";
import { company, waLink, defaultWaMessage } from "@/data/company";
import { products } from "@/data/products";
import { valueProps, testimonials, partners, faqs } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <ProductsPreview />
      <WhyUs />
      <Stats />
      <Testimonials />
      <Partners />
      <FaqPreview />
      <CtaBand />
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-steel-900 text-white">
      <img
        src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1900&q=70"
        alt="Gudang besi dan baja"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-900/85 to-steel-900/40" />
      <div className="container-px relative pt-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-light">
            Supplier Besi &amp; Baja · {company.city}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
            Solusi Material Konstruksi yang{" "}
            <span className="text-accent">Kuat &amp; Terpercaya</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-steel-300">
            {company.shortDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Minta Penawaran
            </a>
            <Link href="/produk" className="btn bg-white/10 text-white hover:bg-white/20">
              Lihat Produk
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[
              { n: "10+", l: "Kategori Produk" },
              { n: "SNI", l: "Standar Mutu" },
              { n: "Cepat", l: "Pengiriman" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-extrabold text-white">{s.n}</dt>
                <dd className="text-xs uppercase tracking-wide text-steel-400">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Value strip ---------------- */
function ValueStrip() {
  return (
    <section className="border-b border-steel-100 bg-white">
      <div className="container-px grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((v) => (
          <div key={v.title} className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
              <Icon name={v.icon as IconName} className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-steel-900">{v.title}</h3>
              <p className="text-xs text-steel-500">{v.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Products preview ---------------- */
function ProductsPreview() {
  return (
    <section className="section">
      <div className="container-px">
        <Reveal className="mb-12 max-w-2xl">
          <span className="eyebrow">Produk Kami</span>
          <h2 className="h2 mt-2">Material Lengkap untuk Setiap Proyek</h2>
          <p className="mt-3 text-steel-600">
            Dari besi beton hingga baja profil, semua kebutuhan konstruksi Anda
            tersedia di satu tempat dengan kualitas terjamin.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                href={`/produk/${p.slug}`}
                className="group block overflow-hidden rounded-xl border border-steel-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden bg-steel-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded bg-steel-900/80 px-2.5 py-1 text-xs font-medium text-white">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-steel-900 group-hover:text-accent">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-steel-500 line-clamp-2">{p.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Selengkapnya <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/produk" className="btn-dark">
            Lihat Semua Produk <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why us ---------------- */
function WhyUs() {
  return (
    <section className="section bg-steel-50">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1100&q=70"
            alt="Pekerja konstruksi baja"
            className="h-[420px] w-full rounded-2xl object-cover shadow-md"
          />
        </Reveal>
        <Reveal delay={100}>
          <span className="eyebrow">Mengapa Memilih Kami</span>
          <h2 className="h2 mt-2">Mitra Material yang Bisa Anda Andalkan</h2>
          <p className="mt-3 text-steel-600">
            Kami memahami bahwa ketepatan waktu dan kualitas material sangat
            menentukan keberhasilan proyek Anda. Itulah komitmen TAKKA STEEL.
          </p>
          <ul className="mt-6 space-y-4">
            {[
              "Produk besi & baja sesuai Standar Nasional Indonesia (SNI).",
              "Pengiriman cepat ke seluruh wilayah Bogor dan sekitarnya.",
              "Harga distributor yang transparan dan bersaing.",
              "Tim berpengalaman siap membantu konsultasi kebutuhan material.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-white">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-steel-700">{t}</span>
              </li>
            ))}
          </ul>
          <Link href="/tentang" className="btn-primary mt-8">
            Tentang TAKKA STEEL <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Stats band ---------------- */
function Stats() {
  const stats = [
    { n: "500+", l: "Proyek Terlayani" },
    { n: "10+", l: "Kategori Produk" },
    { n: "100%", l: "Material SNI" },
    { n: "24 Jam", l: "Respon Penawaran" },
  ];
  return (
    <section className="bg-accent text-white">
      <div className="container-px grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-3xl font-extrabold md:text-5xl">{s.n}</div>
            <div className="mt-1 text-sm text-white/80">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  return (
    <section className="section">
      <div className="container-px">
        <Reveal className="mb-12 text-center">
          <span className="eyebrow">Testimoni</span>
          <h2 className="h2 mt-2">Dipercaya oleh Pelanggan Kami</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-xl border border-steel-100 bg-white p-6 shadow-sm">
                <div className="mb-3 text-accent">
                  {"★★★★★".split("").map((s, k) => (
                    <span key={k}>{s}</span>
                  ))}
                </div>
                <blockquote className="flex-1 text-steel-700">“{t.quote}”</blockquote>
                <figcaption className="mt-5 border-t border-steel-100 pt-4">
                  <div className="font-bold text-steel-900">{t.name}</div>
                  <div className="text-sm text-steel-500">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Partners ---------------- */
function Partners() {
  return (
    <section className="border-y border-steel-100 bg-steel-50 py-12">
      <div className="container-px">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-steel-400">
          Klien &amp; Mitra Kami
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((p) => (
            <span key={p} className="text-xl font-extrabold text-steel-300">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ preview ---------------- */
function FaqPreview() {
  return (
    <section className="section">
      <div className="container-px grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="eyebrow">FAQ</span>
          <h2 className="h2 mt-2">Pertanyaan yang Sering Diajukan</h2>
          <p className="mt-3 text-steel-600">
            Tidak menemukan jawaban yang Anda cari? Hubungi kami langsung dan tim
            kami akan dengan senang hati membantu.
          </p>
          <Link href="/kontak" className="btn-outline mt-6">
            Hubungi Kami
          </Link>
        </Reveal>
        <Reveal delay={100}>
          <div className="divide-y divide-steel-100 rounded-xl border border-steel-100 bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-steel-900">
                  {f.q}
                  <span className="text-accent transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-sm text-steel-600">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CTA band ---------------- */
function CtaBand() {
  return (
    <section className="bg-steel-900">
      <div className="container-px py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent-dark to-accent px-8 py-12 text-center text-white md:py-16">
          <h2 className="text-2xl font-extrabold md:text-4xl">
            Butuh Material untuk Proyek Anda?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Dapatkan penawaran harga terbaik hari ini. Tim TAKKA STEEL siap
            membantu kebutuhan besi &amp; baja Anda.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-accent-dark hover:bg-steel-100"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Chat WhatsApp
            </a>
            <Link href="/kontak" className="btn border border-white/40 text-white hover:bg-white/10">
              Form Kontak
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
