// ============================================================
// tailwind.config.ts — TAKKA STEEL
// Warna resmi dari brand brief: Navy Blue + Gold
// ============================================================

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── TAKKA STEEL BRAND COLORS ──────────────────────
        brand: {
          navy:    "#384E89", // Primary — dominan, navbar, heading
          royal:   "#3B5598", // Secondary — button hover, gradient
          gold:    "#D4AF37", // Accent — CTA, highlight, border
          steel:   "#AAB9D6", // Neutral — subtext, divider, bg ringan
          white:   "#FFFFFF",
          offwhite:"#F8F9FC", // Background section alternatif
          dark:    "#1A2340", // Text gelap / navbar dark variant
          gray:    "#64748B", // Body text abu
          lightgray:"#E8EDF5",// Border, divider
        },
      },

      fontFamily: {
        // Sesuai brand brief: Montserrat untuk heading, Open Sans untuk body
        heading: ["Montserrat", "sans-serif"],
        body:    ["Open Sans", "sans-serif"],
        sans:    ["Open Sans", "sans-serif"],
      },

      fontSize: {
        // Custom scale untuk industrial corporate feel
        "display-xl": ["4rem",    { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-lg": ["3rem",    { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" }],
        "display-md": ["2.25rem", { lineHeight: "1.2",  fontWeight: "700" }],
        "display-sm": ["1.75rem", { lineHeight: "1.25", fontWeight: "600" }],
      },

      backgroundImage: {
        // Gradient navy untuk hero/CTA section
        "navy-gradient":  "linear-gradient(135deg, #384E89 0%, #1A2340 100%)",
        "gold-gradient":  "linear-gradient(135deg, #D4AF37 0%, #B8960A 100%)",
        "steel-gradient": "linear-gradient(180deg, #F8F9FC 0%, #E8EDF5 100%)",
      },

      boxShadow: {
        "card":    "0 2px 16px rgba(56, 78, 137, 0.08)",
        "card-hover": "0 8px 32px rgba(56, 78, 137, 0.16)",
        "cta":     "0 4px 24px rgba(212, 175, 55, 0.35)",
        "navbar":  "0 2px 20px rgba(26, 35, 64, 0.12)",
      },

      borderRadius: {
        "card": "8px",  // Tidak terlalu rounded — kesan corporate tegas
      },

      spacing: {
        "section": "5rem",    // Padding vertikal antar section (desktop)
        "section-sm": "3rem", // Padding vertikal antar section (mobile)
      },
    },
  },
  plugins: [],
};

export default config;
