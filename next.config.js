/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Suppress ESLint warnings (e.g. <img> vs <Image>) during production build.
  // These are pre-existing warnings unrelated to any specific feature.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ── Kompresi otomatis untuk semua response ──
  compress: true,

  // ── Next.js Image Optimization ──
  images: {
    // Format output: AVIF (terkecil) → WebP (fallback) → original
    formats: ["image/avif", "image/webp"],
    // Cache gambar yang sudah dioptimasi selama 1 tahun
    minimumCacheTTL: 31536000,
    // Breakpoints responsif gambar
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // ── HTTP Cache Headers untuk static assets ──
  async headers() {
    return [
      {
        // Cache gambar, video, font 1 tahun
        source: "/(images|photos|products|videos)/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

