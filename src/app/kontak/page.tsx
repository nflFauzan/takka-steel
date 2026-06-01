import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { company, waLink } from "@/data/company";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${company.name} untuk penawaran dan konsultasi kebutuhan material besi & baja Anda.`,
};

export default function KontakPage() {
  return (
    <>
      <PageHeader
        title="Hubungi Kami"
        subtitle="Punya pertanyaan atau ingin meminta penawaran? Tim kami siap membantu Anda."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Kontak" }]}
      />

      <section className="section">
        <div className="container-px grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <span className="eyebrow">Informasi Kontak</span>
            <h2 className="h2 mt-2">Mari Terhubung</h2>
            <p className="mt-3 text-steel-600">
              Hubungi kami melalui salah satu kanal berikut. Untuk respon
              tercepat, gunakan WhatsApp.
            </p>

            <ul className="mt-8 space-y-5">
              <ContactRow icon="pin" label="Alamat">
                {company.address}
              </ContactRow>
              <ContactRow icon="whatsapp" label="WhatsApp">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  +{company.whatsapp}
                </a>
              </ContactRow>
              <ContactRow icon="phone" label="Telepon">
                {company.phone}
              </ContactRow>
              <ContactRow icon="mail" label="Email">
                <a href={`mailto:${company.email}`} className="hover:text-accent">
                  {company.email}
                </a>
              </ContactRow>
              <ContactRow icon="instagram" label="Instagram">
                <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {company.instagramHandle}
                </a>
              </ContactRow>
            </ul>

            <div className="mt-8 rounded-xl border border-steel-100 bg-steel-50 p-5">
              <h3 className="flex items-center gap-2 font-bold text-steel-900">
                <Icon name="clock" className="h-5 w-5 text-accent" />
                Jam Operasional
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-steel-600">
                {company.operatingHours.map((h) => (
                  <li key={h.day} className="flex justify-between">
                    <span>{h.day}</span>
                    <span className="font-medium text-steel-800">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="rounded-2xl border border-steel-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-extrabold text-steel-900">
                Kirim Pesan
              </h2>
              <p className="mt-1 text-sm text-steel-500">
                Isi formulir di bawah ini dan kami akan menghubungi Anda kembali.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-px">
          <div className="overflow-hidden rounded-2xl border border-steel-100 shadow-sm">
            <iframe
              src={company.mapsEmbedUrl}
              title="Lokasi TAKKA STEEL"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: "pin" | "whatsapp" | "phone" | "mail" | "instagram";
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-wide text-steel-400">{label}</div>
        <div className="text-steel-800">{children}</div>
      </div>
    </li>
  );
}
