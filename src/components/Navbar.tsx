"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { company, waLink, defaultWaMessage } from "@/data/company";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/produk", label: "Produk" },
  { href: "/artikel", label: "Artikel" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "bg-steel-900/95 shadow-lg shadow-black/10 backdrop-blur-md border-b border-white/[0.06]"
          : pathname === "/"
          ? "bg-transparent backdrop-blur-sm"
          : "bg-steel-900/80 backdrop-blur-md"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <Logo light={true} />

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative px-3.5 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                  isActive(l.href)
                    ? "text-gold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
                {/* Active indicator dot */}
                {isActive(l.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-5 rounded-full bg-gold" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={waLink(defaultWaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-gold transition-all duration-200 hover:bg-gold hover:text-steel-900 hover:border-gold"
        >
          Minta Penawaran
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
          aria-expanded={open}
          className="grid h-9 w-9 place-items-center rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-[1.5px] w-5 bg-current transition-all duration-300 origin-center ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                open ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-current transition-all duration-300 origin-center ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/[0.06] bg-steel-900/98">
          <ul className="container-px flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    isActive(l.href)
                      ? "text-gold bg-gold/[0.06]"
                      : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive(l.href) && (
                    <span className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                  )}
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 pb-2">
              <a
                href={waLink(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold hover:text-steel-900"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Hubungi via WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
