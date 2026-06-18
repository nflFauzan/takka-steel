# TAKKA STEEL — Company Profile Website

Website company profile untuk **TAKKA STEEL**, supplier besi & baja di Bogor.
Dibuat dengan **Next.js 14 (App Router)**, **TypeScript**, dan **Tailwind CSS**.
Struktur situs terinspirasi dari company profile toko besi/baja pada umumnya
(referensi: suryabangunsemesta.com) dan disesuaikan untuk TAKKA STEEL.

> ⚠️ **Konten adalah placeholder.** Data perusahaan, produk, dan artikel masih
> berupa contoh. Ganti dengan informasi asli sebelum dipublikasikan — lihat
> bagian [Menyesuaikan Konten](#menyesuaikan-konten).

## ✨ Fitur

- **Halaman lengkap**: Beranda, Tentang Kami, Produk (+ detail per produk),
  Artikel (+ detail per artikel), dan Kontak.
- **Desain responsif** dengan palet warna industrial (steel + aksen merah).
- **Animasi reveal-on-scroll** dan navbar yang menyusut saat di-scroll.
- **Tombol WhatsApp mengambang** + CTA WhatsApp di seluruh halaman.
- **Form kontak fungsional** yang mem-POST ke API route `/api/contact`
  (opsional diteruskan ke webhook Discord/Slack/Zapier).
- **SEO-ready**: metadata per halaman, Open Graph, dan `sitemap.xml` otomatis.
- **Konten berbasis file** (`src/data/*`) — tanpa database, mudah diedit & di-commit.

## 🛠️ Tech Stack

| Teknologi | Versi | Keterangan |
| --- | --- | --- |
| [Next.js](https://nextjs.org/) | 14.x (App Router) | Framework React dengan SSR & SSG bawaan |
| [React](https://react.dev/) | 18.3 | Library UI utama |
| [TypeScript](https://www.typescriptlang.org/) | 5.5 | Type-safety untuk seluruh codebase |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Utility-first CSS framework |
| [PostCSS](https://postcss.org/) | 8.4 | Transformasi CSS (dipakai Tailwind) |
| [ESLint](https://eslint.org/) | 8.57 | Linting & code quality |
| [Sharp](https://sharp.pixelplumbing.com/) | 0.34 | Optimasi gambar Next.js |
| [Vercel](https://vercel.com/) | — | Platform deploy yang direkomendasikan |

> **Runtime**: Node.js 18.17+ · **Package Manager**: npm

---

## 🚀 Menjalankan Secara Lokal

Prasyarat: **Node.js 18.17+**.

```bash
# 1. Install dependencies
npm install

# 2. (Opsional) salin konfigurasi environment
cp .env.example .env.local

# 3. Jalankan dev server
npm run dev
```

Buka http://localhost:3000.

### Skrip lain

```bash
npm run build   # build produksi
npm run start   # menjalankan hasil build
npm run lint    # cek linting
```

## ⚙️ Konfigurasi Environment

Salin `.env.example` menjadi `.env.local` lalu isi:

| Variabel | Keterangan |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Nomor WhatsApp format internasional tanpa `+` (mis. `6281234567890`). Dipakai tombol & CTA WhatsApp. |
| `CONTACT_WEBHOOK_URL` | (Opsional) URL webhook untuk meneruskan submission form kontak. Jika kosong, submission hanya dicatat di log server. |

## 📝 Menyesuaikan Konten

Semua konten ada di folder `src/data/`:

| File | Isi |
| --- | --- |
| `company.ts` | Nama, alamat, telepon, email, WhatsApp, jam operasional, link maps. |
| `products.ts` | Daftar kategori & produk besi/baja beserta spesifikasi. |
| `articles.ts` | Artikel/blog. |
| `site.ts` | Value proposition, testimoni, mitra, dan FAQ. |

Cari komentar berisi `TODO` / `PLACEHOLDER` untuk menemukan data yang perlu diganti.

**Gambar** saat ini memakai foto dari Unsplash (remote `<img>`). Untuk memakai
gambar sendiri, taruh file di `public/` lalu ganti URL-nya menjadi path lokal
(mis. `/products/besi-beton.jpg`).

**Logo** berupa teks (`src/components/Logo.tsx`). Ganti dengan `next/image` bila
sudah punya file logo.

## 🗂️ Struktur Proyek

```
src/
├── app/
│   ├── layout.tsx          # layout global (navbar, footer, WA button)
│   ├── page.tsx            # Beranda
│   ├── tentang/            # Tentang Kami
│   ├── produk/             # Daftar produk + [slug] detail
│   ├── artikel/            # Daftar artikel + [slug] detail
│   ├── kontak/             # Kontak + form
│   ├── api/contact/        # API route form kontak
│   └── sitemap.ts          # sitemap.xml
├── components/             # Navbar, Footer, kartu, form, dll.
└── data/                   # Konten berbasis file
```

## ☁️ Deploy

Direkomendasikan **[Vercel](https://vercel.com)** (pembuat Next.js):

1. Push repo ini ke GitHub.
2. Import repo di Vercel.
3. Set environment variables (lihat tabel di atas).
4. Deploy. 🎉

Bisa juga di-deploy ke Netlify, Railway, atau VPS sendiri dengan `npm run build && npm run start`.

## 📦 Push ke GitHub

```bash
git init
git add .
git commit -m "Initial commit: TAKKA STEEL company profile"
git branch -M main
git remote add origin https://github.com/<username>/takka-steel.git
git push -u origin main
```

## 📄 Lisensi

Hak cipta © TAKKA STEEL. Kode boleh disesuaikan untuk kebutuhan perusahaan.
