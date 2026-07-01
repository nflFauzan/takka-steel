

import HeroVideo from "@/components/HeroVideo";
import AboutSection from "@/components/AboutSection";
import CategoryShowcase from "@/components/CategoryShowcase";
import HomeBestsellers from "@/components/HomeBestsellers";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { company, waLink, waLink2, defaultWaMessage } from "@/data/company";
import { faqs, testimonials as clientTestimonials, partners } from "@/data/site";



export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <AboutSection />
      <CategoryShowcase />
      <HomeBestsellers />
      <OrderProcess />
      <TestimonialsSection />
      <FaqSection />
      <LocationSection />
      <CtaBandDark />
    </>
  );
}

function OrderProcess() {
  const steps: { num: string; icon: IconName; title: string; desc: string }[] = [
    {
      num: "01",
      icon: "headset",
      title: "Konsultasi & Pilih Material",
      desc: "Hubungi tim kami via WhatsApp — sampaikan jenis, ukuran, dan jumlah material yang Anda butuhkan.",
    },
    {
      num: "02",
      icon: "wallet",
      title: "Terima Penawaran",
      desc: "Kami kirim penawaran harga terbaik beserta ketersediaan stok dengan cepat dan transparan.",
    },
    {
      num: "03",
      icon: "truck",
      title: "Kirim ke Lokasi",
      desc: "Material dikirim tepat waktu ke lokasi proyek Anda di Jabodetabek dan seluruh Indonesia.",
    },
  ];
  return (
    <section className="section bg-steel-50">
      <div className="container-px">
        <Reveal className="mb-14 text-center">
          <span className="eyebrow">Mudah &amp; Cepat</span>
          <h2 className="h2 mt-2">Cara Pesan di TAKKA</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          <p className="mx-auto mt-4 max-w-2xl text-steel-600">
            Dari konsultasi sampai material tiba di lokasi — hanya tiga langkah sederhana.
          </p>
        </Reveal>
        <div className="relative grid gap-6 md:grid-cols-3">
          {/* Connector line (desktop) */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-steel-200 md:block" aria-hidden />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="group relative flex h-full flex-col items-center rounded-2xl border border-steel-100 bg-white p-8 text-center shadow-sm transition hover:shadow-card-hover">
                <div className="relative mb-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white ring-8 ring-steel-50 transition-colors duration-300 group-hover:bg-gold group-hover:text-steel-900">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </div>
                  <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-gold text-xs font-extrabold text-steel-900 ring-4 ring-white">
                    {s.num}
                  </span>
                </div>
                <h3 className="mb-2 font-bold text-steel-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-steel-500">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Mulai Konsultasi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <AnimatedTestimonials
      badgeText="Dipercaya Klien"
      title="Mengapa Klien Mempercayai Kami"
      subtitle="Lebih dari sekadar janji — bukti nyata dukungan material kami untuk proyek komersial maupun hunian."
      testimonials={clientTestimonials.map((t, i) => ({
        id: i + 1,
        name: t.name,
        role: t.role,
        content: t.quote,
        rating: 5,
      }))}
      trustedCompanies={partners}
      trustedCompaniesTitle="Dipercaya oleh mitra & kontraktor"
    />
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
          <div className="h-[300px] lg:h-[420px] rounded-2xl overflow-hidden border-4 border-white shadow-md bg-steel-100 isolate">
            <iframe
              title={`Lokasi ${company.name}`}
              src={company.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
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
            href={waLink2(defaultWaMessage)}
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
