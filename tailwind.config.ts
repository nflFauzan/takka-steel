import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // TAKKA STEEL brand palette — industrial steel + safety accent.
        steel: {
          50: "#f5f7fa",
          100: "#e9edf2",
          200: "#cdd6e0",
          300: "#a3b2c4",
          400: "#7388a2",
          500: "#526a86",
          600: "#3f536c",
          700: "#344458",
          800: "#1f2937",
          900: "#141b26",
          950: "#0b0f16",
        },
        accent: {
          DEFAULT: "#e63a27", // forge red / safety orange-red
          dark: "#b82a1b",
          light: "#ff5b46",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
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
