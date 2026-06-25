import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── TAKKA STEEL brand palette ─────────────────────────────────────
        // Blue #104FA6 · Yellow #F5CE02 · White #EEEEEE · Black #131313
        white: "#EEEEEE",
        steel: {
          50:  "#f4f7fb",
          100: "#e2eaf5",
          200: "#c3d2ea",
          300: "#96b0d8",
          400: "#6488c0",
          500: "#3d65a8",
          600: "#2a518f",
          700: "#1d4079",
          800: "#163260",
          900: "#104FA6",
          950: "#0d3d85",
        },
        accent: {
          DEFAULT: "#104FA6",
          dark:    "#0d3d85",
          light:   "#1a63c4",
        },
        gold: {
          DEFAULT: "#F5CE02",
          dark:    "#F5CE02",
        },
        brand: {
          white: "#EEEEEE",
          black: "#131313",
        },
      },
      fontFamily: {
        // Poppins for headings (brand primary), Open Sans for body (brand brief).
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #104FA6 0%, #0d3d85 100%)",
        "gold-gradient": "linear-gradient(135deg, #F5CE02 0%, #d4af00 100%)",
      },
      borderRadius: {
        card: "8px", // corporate, not overly rounded
      },
      boxShadow: {
        card: "0 2px 16px rgba(16, 79, 166, 0.08)",
        "card-hover": "0 8px 32px rgba(16, 79, 166, 0.16)",
        cta: "0 4px 24px rgba(212, 175, 55, 0.35)",
      },
      container: {
        center: true,
        padding: "1.25rem",
        screens: { "2xl": "1200px" },
      },
    },
  },
  plugins: [],
};

export default config;
