import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { company, waLink, defaultWaMessage } from "@/data/company";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${company.name} di ${company.address}. WhatsApp ${company.whatsappDisplay}, email ${company.email}. Jam buka Senin–Sabtu 08.00–17.00 WIB.`,
};

export default function KontakPage() {
  return (
    <>
      <PageHeader
        title="Hubungi Kami"
        subtitle="Kami siap melayani kebutuhan material besi dan baja Anda dengan kualitas SNI dan harga kompetitif. Konsultasikan proyek Anda bersama tim ahli kami."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Kontak" }]}
      />

      {/* Info Cards */}
      <section className="section pb-0">
        <div className="container-px">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-xl border border-steel-100 bg-white p-8 shadow-sm text-center md:text-left">
              <span className="mx-auto md:mx-0 flex h-12 w-12 items-center justify-center rounded-xl bg-steel-50 text-accent mb-5 border border-steel-100">
                <Icon name="pin" className="h-6 w-6" />
              </span>
              <h3 className="font-bold text-steel-900 mb-3">Alamat Kantor</h3>
              <p className="text-sm text-steel-600 leading-relaxed">
                {company.address}
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-xl border border-steel-100 bg-white p-8 shadow-sm text-center md:text-left">
              <span className="mx-auto md:mx-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold mb-5 border border-gold/20">
                <Icon name="phone" className="h-6 w-6" />
              </span>
              <h3 className="font-bold text-steel-900 mb-3">Kontak Admin</h3>
              <div className="text-sm text-steel-600 space-y-2">
                <p>Admin 1: {company.whatsappDisplay}</p>
                <p>Admin 2: 0878-7395-3335</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="rounded-xl border border-steel-100 bg-white p-8 shadow-sm text-center md:text-left">
              <span className="mx-auto md:mx-0 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 mb-5 border border-green-100">
                <Icon name="mail" className="h-6 w-6" />
              </span>
              <h3 className="font-bold text-steel-900 mb-3">Email & Jam Kerja</h3>
              <div className="text-sm text-steel-600 space-y-2">
                <p>{company.email}</p>
                <p className="mt-3 inline-block rounded bg-gold/10 px-3 py-1 font-semibold text-gold-dark">
                  Senin - Sabtu, 08.00 - 17.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Form */}
      <section className="section bg-steel-50/50">
        <div className="container-px grid gap-12 lg:grid-cols-2 items-start">
          {/* Map Area */}
          <div>
            <h2 className="h2 text-steel-900">Lokasi Gudang Kami</h2>
            <p className="mt-3 text-steel-600">
              Kunjungi workshop kami untuk melihat kualitas stok material secara langsung. Kami berlokasi strategis di area Bogor.
            </p>
            <div className="mt-8 relative overflow-hidden rounded-2xl border-4 border-white shadow-md bg-steel-800 h-[450px]">
              {/* Map Placeholder matching the dark style in the image */}
              <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url('/photos/gudang-utama.webp')", backgroundSize: "cover", filter: "grayscale(100%) contrast(120%)" }}></div>
              <div className="absolute inset-0 bg-steel-900/40 mix-blend-multiply"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <a href={company.mapsLink} target="_blank" rel="noopener noreferrer" className="btn bg-white text-steel-900 hover:bg-steel-50 shadow-lg px-6 py-3 rounded-md font-bold">
                  <Icon name="pin" className="h-5 w-5 text-accent" /> Petunjuk Arah
                </a>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div>
            <div className="rounded-2xl border border-steel-100 bg-white p-6 shadow-card md:p-8">
              <h2 className="text-2xl font-extrabold text-steel-900">
                Kirim Pesan
              </h2>
              <p className="mt-2 text-sm text-steel-500">
                Hubungi kami melalui formulir di bawah ini untuk penawaran harga khusus.
              </p>
              
              <form className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-steel-900">Nama Lengkap <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Masukkan nama Anda" className="w-full rounded-md border-0 bg-steel-50 px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-steel-900">Nomor WhatsApp <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="0812..." className="w-full rounded-md border-0 bg-steel-50 px-4 py-3 text-sm focus:ring-2 focus:ring-accent" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-steel-900">Subjek <span className="text-red-500">*</span></label>
                  <select className="w-full rounded-md border-0 bg-steel-50 px-4 py-3 text-sm focus:ring-2 focus:ring-accent">
                    <option>Pilih Subjek</option>
                    <option>Permintaan Harga</option>
                    <option>Tanya Stok</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-steel-900">Pesan Anda <span className="text-red-500">*</span></label>
                  <textarea rows={4} placeholder="Tuliskan detail kebutuhan Anda di sini..." className="w-full rounded-md border-0 bg-steel-50 px-4 py-3 text-sm focus:ring-2 focus:ring-accent"></textarea>
                </div>
                <button type="button" className="btn-gold w-full py-3.5 text-base rounded-full">
                  Kirim Pesan Sekarang
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
