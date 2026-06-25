"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Icon from "@/components/Icon";
import { waLink, defaultWaMessage } from "@/data/company";

/* ------------------------------------------------------------------ */
/*  Inline line-icons (Lucide-style strokes) — premium, no dependency  */
/* ------------------------------------------------------------------ */

const ICON_PATHS: Record<string, ReactNode> = {
  // Produk lengkap — layers
  layers: (
    <>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </>
  ),
  // Eceran s/d proyek — package
  package: (
    <>
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </>
  ),
  // Pengiriman cepat — truck
  truck: (
    <>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  // Integritas — shield-check
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  // Kualitas — award / medal
  award: (
    <>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 12.5 17 22l-5-3-5 3 1.5-9.5" />
    </>
  ),
  // Inovasi — lightbulb
  bulb: (
    <>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5a6 6 0 0 0-12 0c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </>
  ),
  // Keselamatan — hard hat
  hardhat: (
    <>
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z" />
      <path d="M10 10V5.5A1.5 1.5 0 0 1 11.5 4h1A1.5 1.5 0 0 1 14 5.5V10" />
      <path d="M4 16v-3a8 8 0 0 1 4-6.9" />
      <path d="M16 6.1a8 8 0 0 1 4 6.9v3" />
    </>
  ),
  // Kolaborasi — handshake
  handshake: (
    <>
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.8 5.8 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="M21 3v9" />
      <path d="M3 4h8" />
      <path d="M3 8h5" />
    </>
  ),
};

function LineIcon({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal-on-view hook (respects prefers-reduced-motion)              */
/* ------------------------------------------------------------------ */

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(el);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const EASE = "cubic-bezier(.16,1,.3,1)";

/** Opacity + translateY reveal. */
const reveal = (show: boolean, delay = 0, y = 22): CSSProperties => ({
  opacity: show ? 1 : 0,
  transform: show ? "none" : `translateY(${y}px)`,
  transition: `opacity .7s ${EASE} ${delay}ms, transform .7s ${EASE} ${delay}ms`,
});

/** Masked line reveal for the headline. */
const line = (show: boolean, delay: number): CSSProperties => ({
  display: "block",
  transform: show ? "translateY(0)" : "translateY(110%)",
  opacity: show ? 1 : 0,
  transition: `transform .9s ${EASE} ${delay}ms, opacity .9s ease ${delay}ms`,
});

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

// Compact differentiators (service qualities, not "we build structures").
const HIGHLIGHTS = [
  { icon: "layers", label: "Produk Lengkap" },
  { icon: "package", label: "Eceran s/d Proyek" },
  { icon: "truck", label: "Pengiriman Cepat" },
];

// Quantitative trust signals (grounded in the real catalog & brand claims).
const STATS = [
  { value: "1.000+", label: "Pelanggan Dilayani" },
  { value: "100+", label: "Kategori Produk" },
  { value: "50+", label: "Tim Profesional" },
];

const VALUES = [
  { icon: "shield", title: "Integritas", desc: "Menjunjung kejujuran dan tanggung jawab di setiap pekerjaan." },
  { icon: "award", title: "Kualitas", desc: "Mengutamakan kualitas material, proses, dan hasil terbaik." },
  { icon: "bulb", title: "Inovasi", desc: "Terus berinovasi menghadirkan solusi yang efektif dan efisien." },
  { icon: "hardhat", title: "Keselamatan", desc: "Mengutamakan keselamatan kerja di setiap tahap proyek." },
  { icon: "handshake", title: "Kolaborasi", desc: "Bekerja sama dengan klien dan mitra untuk hasil terbaik." },
];

const IMG_SRC = "/photos/tim.jpg";

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const content = useInView<HTMLDivElement>(0.25);
  const values = useInView<HTMLDivElement>(0.3);

  // Subtle image parallax — very minimal vertical drift, edges hidden by scale.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const sec = sectionRef.current;
      const img = imageRef.current;
      if (!sec || !img) return;
      const rect = sec.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const offset = (Math.min(Math.max(progress, 0), 1) - 0.5) * 36; // ~ -18px..18px
      img.style.transform = `translateY(${offset.toFixed(2)}px) scale(1.1)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="relative w-full overflow-hidden bg-steel-50 lg:flex lg:min-h-screen lg:flex-col"
    >
      {/* ── Top zone: editorial content (left) + bleeding image (right) ── */}
      <div ref={content.ref} className="relative flex-1">
        {/* Full-bleed steel image, right edge, with industrial diagonal cut */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] lg:block">
          <div
            className="relative h-full w-full overflow-hidden"
            style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <img
              ref={imageRef}
              src={IMG_SRC}
              alt="Gudang stok material baja Takka Steel"
              className="h-full w-full object-cover will-change-transform"
              style={{ transform: "scale(1.1)" }}
            />
            {/* Navy tint anchoring the image into the brand palette */}
            <div className="absolute inset-0 bg-gradient-to-tr from-steel-950/80 via-steel-950/20 to-transparent" />
            {/* Gold edge accent echoing the diagonal */}
            <div
              className="absolute inset-y-0 left-0 w-[3px] bg-gold/80"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="container-px relative z-10 flex h-full flex-col justify-center py-14 lg:py-24">
          <div className="lg:max-w-[50%]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3" style={reveal(content.inView, 0, 14)}>
              <span className="h-px w-8 bg-gold" />
              <span className="eyebrow">Tentang Kami</span>
            </div>

            {/* Headline — masked line-by-line reveal */}
            <h2
              id="about-heading"
              className="mt-5 font-heading text-[2.15rem] font-extrabold leading-[1.06] tracking-tight text-steel-900 sm:text-5xl lg:text-[3.15rem]"
            >
              <span className="block overflow-hidden">
                <span className="block" style={line(content.inView, 120)}>
                  Lebih dari Baja,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block" style={line(content.inView, 220)}>
                  Kami Bangun
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block text-gold" style={line(content.inView, 320)}>
                  Kepercayaan.
                </span>
              </span>
            </h2>

            {/* Description — supplier positioning (what we sell, where, for whom) */}
            <p
              className="mt-5 max-w-xl text-[15px] leading-relaxed text-steel-600 lg:text-base"
              style={reveal(content.inView, 430)}
            >
              Takka Steel adalah pusat material baja &amp; bahan bangunan terlengkap.
              Harga minimum, kualitas premium. Melayani Jabodetabek &amp; seluruh
              wilayah Indonesia — dari renovasi rumah hingga proyek skala besar.
            </p>

            {/* Compact differentiators (inline, not cards) */}
            <div
              className="mt-6 flex flex-wrap gap-x-6 gap-y-3"
              style={reveal(content.inView, 500)}
            >
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="group flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-steel-900 text-gold ring-1 ring-steel-900/10 transition-colors duration-300 group-hover:bg-gold group-hover:text-steel-900">
                    <LineIcon name={h.icon} className="h-[17px] w-[17px]" />
                  </span>
                  <span className="text-sm font-semibold text-steel-800">{h.label}</span>
                </div>
              ))}
            </div>

            {/* Proof stats */}
            <div
              className="mt-7 flex divide-x divide-steel-200"
              style={reveal(content.inView, 580)}
            >
              {STATS.map((s, i) => (
                <div key={s.label} className={i === 0 ? "pr-6" : "px-6"}>
                  <div className="font-heading text-2xl font-extrabold leading-none text-steel-900 lg:text-[2rem]">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-wide text-steel-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs — give the reader a next step */}
            <div
              className="mt-7 flex flex-wrap gap-3"
              style={reveal(content.inView, 660)}
            >
              <Link href="/produk" className="btn-dark text-sm">
                Lihat Produk
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a
                href={waLink(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Minta Penawaran
              </a>
            </div>
          </div>

          {/* Mobile / tablet image (desktop uses the bleeding image above) */}
          <div className="mt-9 overflow-hidden rounded-xl lg:hidden">
            <img
              src={IMG_SRC}
              alt="Gudang stok material baja Takka Steel"
              className="h-52 w-full object-cover"
            />
          </div>
        </div>

        {/* Floating statement card — sits over the image, clear of the text */}
        <div
          className="absolute bottom-[12%] left-[51%] z-20 hidden w-[330px] lg:block"
          style={reveal(content.inView, 720, 36)}
        >
          <div className="relative border border-white/10 border-t-2 border-t-gold bg-steel-950 p-7 shadow-2xl shadow-steel-950/50">
            <span className="font-heading text-5xl leading-none text-gold">&ldquo;</span>
            <p className="-mt-2 text-[15px] font-medium leading-relaxed text-white">
              Kami percaya proyek yang kuat berawal dari material yang tepat dan
              pasokan yang bisa diandalkan.
            </p>
            <div className="mt-5 h-px w-10 bg-gold" />
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-steel-300">
              Takka Steel Team
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom zone: company values strip (same section) ── */}
      <div
        ref={values.ref}
        className="relative z-10 border-t border-white/5 bg-steel-950 text-white"
      >
        <div className="container-px py-7">
          <div
            className="mb-6 flex items-center justify-center gap-3"
            style={reveal(values.inView, 0, 14)}
          >
            <span className="h-px w-6 bg-gold" />
            <h3 className="text-center text-[13px] font-bold uppercase tracking-[0.22em] text-white/90">
              Nilai yang Kami Pegang
            </h3>
            <span className="h-px w-6 bg-gold" />
          </div>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0 lg:divide-x lg:divide-white/10">
            {VALUES.map((v, i) => (
              <li
                key={v.title}
                className="group flex flex-col items-center px-2 text-center lg:items-start lg:px-7 lg:text-left"
                style={reveal(values.inView, 120 + i * 100, 18)}
              >
                <span className="text-gold transition-transform duration-300 group-hover:-translate-y-0.5">
                  <LineIcon name={v.icon} className="h-7 w-7" />
                </span>
                <h4 className="mt-3 text-sm font-bold text-white">{v.title}</h4>
                <p className="mt-1 text-xs leading-snug text-steel-300">{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
