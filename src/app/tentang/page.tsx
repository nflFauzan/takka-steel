import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Mengenal ${company.name}, supplier besi & baja terpercaya di ${company.city}.`,
};

export default function TentangPage() {
  return (
    <>
      <PageHeader
        title="Tentang TAKKA STEEL"
        subtitle="Mitra material konstruksi Anda di Bogor — mengutamakan mutu, harga bersaing, dan pelayanan yang responsif."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Tentang Kami" }]}
      />

      <section className="section">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1100&q=70"
              alt="Tim TAKKA STEEL"
              className="h-[420px] w-full rounded-2xl object-cover shadow-md"
            />
          </Reveal>
          <Reveal delay={100}>
            <span className="eyebrow">Profil Perusahaan</span>
            <h2 className="h2 mt-2">
              Menyediakan Material Berkualitas Sejak {company.foundedYear}
            </h2>
            <div className="mt-4 space-y-4 text-steel-600">
              <p>
                {company.name} adalah distributor besi, baja, dan bahan bangunan
                yang berlokasi di {company.city}. Kami hadir untuk menjawab
                kebutuhan material konstruksi para kontraktor, developer, hingga
                masyarakat umum dengan produk yang berkualitas dan harga yang
                bersaing.
              </p>
              <p>
                Berawal dari komitmen untuk menjadi pemasok yang dapat
                diandalkan, kami terus berupaya memastikan setiap material yang
                kami kirim memenuhi standar mutu dan tiba tepat waktu di lokasi
                proyek Anda.
              </p>
              <p className="rounded-lg border-l-4 border-accent bg-steel-50 p-4 text-sm italic text-steel-700">
                Catatan: konten ini merupakan contoh. Silakan sesuaikan dengan
                sejarah dan profil asli {company.name}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="section bg-steel-50">
        <div className="container-px grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-white p-8 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon name="shield" className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-steel-900">Visi</h3>
              <p className="mt-2 text-steel-600">
                Menjadi supplier besi dan baja terpercaya di wilayah Bogor dan
                sekitarnya, yang dikenal karena kualitas produk dan pelayanan
                yang prima.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl bg-white p-8 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon name="check" className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-steel-900">Misi</h3>
              <ul className="mt-2 space-y-2 text-steel-600">
                <li>• Menyediakan material berkualitas sesuai standar SNI.</li>
                <li>• Memberikan harga yang transparan dan bersaing.</li>
                <li>• Menjamin ketepatan waktu pengiriman ke lokasi proyek.</li>
                <li>• Mengutamakan kepuasan dan kepercayaan pelanggan.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-px">
          <Reveal className="mb-10 text-center">
            <span className="eyebrow">Nilai Kami</span>
            <h2 className="h2 mt-2">Yang Kami Pegang Teguh</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "shield", t: "Kualitas", d: "Material terbaik sesuai standar." },
              { icon: "wallet", t: "Harga Wajar", d: "Transparan dan kompetitif." },
              { icon: "truck", t: "Ketepatan", d: "Pengiriman tepat waktu." },
              { icon: "headset", t: "Pelayanan", d: "Responsif dan ramah." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 70}>
                <div className="rounded-xl border border-steel-100 p-6 text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-steel-900 text-white">
                    <Icon name={v.icon as any} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold text-steel-900">{v.t}</h3>
                  <p className="mt-1 text-sm text-steel-500">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-900">
        <div className="container-px flex flex-col items-center gap-5 py-14 text-center text-white">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Siap Membantu Proyek Anda
          </h2>
          <p className="max-w-xl text-steel-300">
            Hubungi tim kami untuk konsultasi dan penawaran kebutuhan material.
          </p>
          <Link href="/kontak" className="btn-primary">
            Hubungi Kami <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
