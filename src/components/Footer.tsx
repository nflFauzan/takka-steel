import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { company, waLink } from "@/data/company";
import { departments } from "@/data/products";

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-bold text-white">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto bg-steel-900 text-steel-300">
      <div className="container-px grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-steel-400">
            {company.tagline}. {company.shortDescription}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-md bg-steel-800 text-steel-200 transition hover:bg-gold hover:text-steel-900"
            >
              <Icon name="instagram" className="h-5 w-5" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-md bg-steel-800 text-steel-200 transition hover:bg-[#25D366] hover:text-white"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <ColHeading>Navigasi</ColHeading>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Beranda</Link></li>
            <li><Link href="/tentang" className="hover:text-white">Tentang Kami</Link></li>
            <li><Link href="/produk" className="hover:text-white">Produk</Link></li>
            <li><Link href="/artikel" className="hover:text-white">Artikel</Link></li>
            <li><Link href="/kontak" className="hover:text-white">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <ColHeading>Kategori Produk</ColHeading>
          <ul className="mt-4 space-y-2 text-sm">
            {departments.map((d) => (
              <li key={d.slug}>
                <Link href={`/produk?dept=${d.slug}`} className="hover:text-white">
                  {d.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={company.tokopedia}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {company.tokopediaName} (Tokopedia)
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ColHeading>Kontak</ColHeading>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={waLink()} className="hover:text-white">
                {company.whatsappDisplay} (WhatsApp)
              </a>
            </li>
            <li className="flex gap-2.5">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{company.hoursDisplay}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-steel-800">
        <div className="container-px flex flex-col items-center justify-center py-6 text-xs text-steel-500">
          <p className="text-center">
            © {new Date().getFullYear()} {company.name}. Distributor Bahan Bangunan & Besi Baja SNI. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
