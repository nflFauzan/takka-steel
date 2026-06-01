import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { company, waLink } from "@/data/company";
import { productCategories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="mt-auto bg-steel-900 text-steel-300">
      <div className="container-px grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-steel-400">
            {company.shortDescription}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-md bg-steel-800 text-steel-200 transition hover:bg-accent hover:text-white"
            >
              <Icon name="instagram" className="h-5 w-5" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-md bg-steel-800 text-steel-200 transition hover:bg-accent hover:text-white"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navigasi
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Beranda</Link></li>
            <li><Link href="/tentang" className="hover:text-white">Tentang Kami</Link></li>
            <li><Link href="/produk" className="hover:text-white">Produk</Link></li>
            <li><Link href="/artikel" className="hover:text-white">Artikel</Link></li>
            <li><Link href="/kontak" className="hover:text-white">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Produk Unggulan
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {productCategories.slice(0, 6).map((c) => (
              <li key={c}>
                <Link href="/produk" className="hover:text-white">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Kontak
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={waLink()} className="hover:text-white">
                +{company.whatsapp} (WhatsApp)
              </a>
            </li>
            <li className="flex gap-2.5">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-steel-800">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-xs text-steel-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. Seluruh hak cipta dilindungi.
          </p>
          <p>Dibuat dengan Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
