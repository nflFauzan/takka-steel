"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { waLink, defaultWaMessage } from "@/data/company";

/**
 * Three-act hero. One warehouse, three clips that crossfade on a slow loop:
 * stock available -> operations running -> ready to deliver. The footage is a
 * supporting element behind a four-layer scrim; the headline always wins.
 * Freezes to a single poster still under prefers-reduced-motion.
 */

type Clip = { src: string; poster: string; tag: string };

const CLIPS: Clip[] = [
  { src: "/videos/stock.mp4", poster: "/videos/stock-poster.webp", tag: "Stok" },
  { src: "/videos/operations.mp4", poster: "/videos/operations-poster.webp", tag: "Operasi" },
  { src: "/videos/delivery.mp4", poster: "/videos/delivery-poster.webp", tag: "Pengiriman" },
];

const ADVANCE_MS = 5000;

export default function HeroVideo() {
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Respect reduced-motion: no autoplay, no crossfade — a single still frame.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Advance the active act on a slow cycle.
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % CLIPS.length),
      ADVANCE_MS
    );
    return () => clearInterval(id);
  }, [reduced]);

  // Keep the incoming clip playing as it fades up.
  useEffect(() => {
    if (reduced) return;
    videoRefs.current[active]?.play().catch(() => {});
  }, [active, reduced]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-steel-950 pt-20 text-white">
      {/* Footage / poster layers */}
      <div className="absolute inset-0">
        {reduced ? (
          <img
            src={CLIPS[0].poster}
            alt="Gudang Takka Steel — stok material baja siap kirim"
            className="h-full w-full object-cover"
          />
        ) : (
          CLIPS.map((clip, i) => (
            <video
              key={clip.src}
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out"
              style={{ opacity: i === active ? 1 : 0 }}
              src={clip.src}
              poster={clip.poster}
              autoPlay
              muted
              loop
              playsInline
              preload={i === 0 ? "auto" : "metadata"}
              aria-hidden="true"
            />
          ))
        )}
      </div>

      {/* Scrim stack — global darken, left-weighted, bottom, vignette, grain */}
      <div className="pointer-events-none absolute inset-0 bg-steel-950/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-steel-950/90 via-steel-950/55 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-steel-950/80 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 62% 45%, transparent 52%, rgba(5,13,26,0.55) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="container-px relative z-10 w-full">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-steel-300">
            Pusat Baja &amp; Bahan Bangunan — Jabodetabek &amp; Seluruh Indonesia
          </span>
          <h1 className="display mt-5">
            Harga Minimum,
            <br />
            Kualitas Premium.
          </h1>
          <p className="lead mt-6 max-w-xl text-steel-200">
            Distributor material baja &amp; bahan bangunan terpercaya. Stok
            lengkap, siap kirim ke Jabodetabek &amp; seluruh wilayah Indonesia.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/produk" className="btn-gold text-base">
              Lihat Produk
            </Link>
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-white/30 text-base text-white transition hover:bg-white hover:text-steel-900"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Story indicator — tracks the active act */}
      <div className="absolute inset-x-0 bottom-7 z-10">
        <div className="container-px flex items-center justify-between">
          <ul className="flex items-center gap-5 text-xs">
            {CLIPS.map((clip, i) => (
              <li key={clip.tag} className="flex items-center gap-2.5">
                <span
                  className={`h-px transition-all duration-500 ${
                    i === active ? "w-8 bg-white" : "w-4 bg-white/30"
                  }`}
                />
                <span
                  className={`tabular-nums transition-colors duration-500 ${
                    i === active ? "text-white" : "text-white/45"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")} {clip.tag}
                </span>
              </li>
            ))}
          </ul>
          <span className="hidden items-center gap-2 text-xs text-white/40 sm:flex">
            Gulir
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
