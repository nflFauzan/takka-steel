import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── TAKKA STEEL brand palette — Dark Navy + Vibrant Gold ──────────
        steel: {
          50: "#f8f9fc",
          100: "#e8edf5",
          200: "#cdd6e6",
          300: "#aab9d6",
          400: "#8493b5",
          500: "#64748b",
          600: "#475173",
          700: "#1e3a5f",
          800: "#132743",
          900: "#0b1a2f", // brand dark navy — footer, headings
          950: "#050d1a",
        },
        accent: {
          DEFAULT: "#0b1a2f", // primary navy
          dark: "#050d1a",
          light: "#1e3a5f",
        },
        gold: {
          DEFAULT: "#ffc107", // vibrant gold / yellow
          dark: "#e0a800",
        },
      },
      fontFamily: {
        // Montserrat for headings, Open Sans for body (brand brief).
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #1e3a5f 0%, #0b1a2f 100%)",
        "gold-gradient": "linear-gradient(135deg, #ffc107 0%, #e0a800 100%)",
      },
      borderRadius: {
        card: "8px", // corporate, not overly rounded
      },
      boxShadow: {
        card: "0 2px 16px rgba(56, 78, 137, 0.08)",
        "card-hover": "0 8px 32px rgba(56, 78, 137, 0.16)",
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
