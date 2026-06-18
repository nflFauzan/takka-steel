# INSTRUKSI UNTUK CLAUDE CODE
# Copy-paste prompt di bawah ini langsung ke Claude Code

---

## PROMPT 1 — Update siteConfig (Data Perusahaan)

Paste prompt ini ke Claude Code:

---
Update file `src/data/siteConfig.ts` (atau lokasi config yang ada) dengan data resmi berikut:

**NAMA & IDENTITAS:**
- Nama: Takka Steel
- Tagline: "Pusat Baja dan Bahan Bangunan"
- Tagline panjang: "Lagi cari material baja yang lengkap, cepat, dan terpercaya? Takka Steel solusinya!"
- Tahun berdiri: 13 Januari 2025

**KONTAK:**
- WhatsApp: 6289518611616 (untuk link wa.me)
- Display WA: 0895-1861-1616
- Email: takkasteelofficial@gmail.com
- Pre-filled WA message: "Halo Takka Steel, saya ingin menanyakan informasi produk dan harga."

**ALAMAT LENGKAP:**
- Jl. Lkr. Laladon No.51, RT.01/RW.07, Laladon, Kec. Ciomas, Kabupaten Bogor, Jawa Barat 16610
- Google Maps: https://maps.app.goo.gl/PCLXHbXJ9EeEdikP8

**JAM OPERASIONAL:**
- Senin – Sabtu, 08.00 – 17.00 WIB

**SOSIAL MEDIA:**
- Instagram: https://www.instagram.com/takkasteelofficial/
- Tokopedia: Toko Takka Steel
- Email: takkasteelofficial@gmail.com

**VISI:**
"Menjadi toko bangunan terpercaya yang mengutamakan kualitas produk dan kepuasan pelanggan dalam setiap layanan yang diberikan."

**MISI (3 poin):**
1. Menyediakan produk bangunan berkualitas tinggi dengan harga yang kompetitif.
2. Memberikan pelayanan terbaik dan solusi tepat untuk memenuhi kebutuhan pelanggan.
3. Terus berinovasi dalam penyediaan produk dan layanan untuk mendukung perkembangan dunia konstruksi.

**PRODUK (kategori):**

Analyze and replicate the Product Categories section from:
https://www.suryabangunsemesta.com/

I want the layout, structure, spacing, card style, image overlay, hover effect, grid arrangement, and user experience to be as close as possible to the reference.

Instead, create a product catalog category grid similar to the reference website.

For Takka Steel, create individual product-category cards such as:

TAKKA TRUSS (CNP 0.75)
Reng Baja Ringan
Hollow Partisi / Plafond
Atap Spandek Pasir
Atap Spandek Polos
Atap Metal Pasir
Alderon Single Layer
Alderon Double Layer
Seng Rol Galvalum
Bondeck / Floordeck
Kawat Bendrat
Kawat Loket
Kawat Las
Dinabolt
Skrup Gypsum
Gunting Baja
Mata Bor
Gerinda
Cat Besi / Kayu
Thinner

Each card must have:

Product image
Dark overlay
Product/category title centered
Hover effect
Responsive grid

The section should visually resemble the reference website as closely as possible.

## PROMPT 2 — Update Warna & Font (Tailwind + CSS)

Paste prompt ini ke Claude Code:

---
Update warna dan font website sesuai brand identity resmi Takka Steel:

**WARNA (update di tailwind.config.ts dan/atau globals.css):**
- Primary (Navy Blue):  #384E89  — untuk navbar, heading, tombol utama
- Secondary (Royal Blue): #3B5598 — untuk hover state, gradient
- Accent (Gold):        #D4AF37  — untuk CTA button, underline, highlight
- Neutral (Steel Grey): #AAB9D6  — untuk subtext, border, divider
- Background:           #FFFFFF  — background utama
- Background alt:       #F8F9FC  — background section selang-seling
- Dark text:            #1A2340  — warna teks utama

**FONT (update import dan config):**
- Heading (H1-H4): Montserrat, weight 700-800, All Caps untuk section labels
- Body text: Open Sans, weight 400-600
- Import dari Google Fonts:
  https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700&display=swap

Pastikan:
1. Navbar menggunakan background white dengan text Navy #384E89
2. Tombol CTA utama: background Navy #384E89, text putih
3. Tombol WhatsApp: background #25D366, text putih
4. Section heading memiliki gold underline/bar #D4AF37 sebagai accent
5. Footer menggunakan background Dark #1A2340 dengan text putih
---

## PROMPT 3 — Update Alamat & Google Maps

Paste prompt ini ke Claude Code:

---
Update komponen halaman Kontak (dan footer jika ada alamat di sana) dengan data berikut:

**ALAMAT:**
Jl. Lkr. Laladon No.51, RT.01/RW.07, Laladon, Kec. Ciomas,
Kabupaten Bogor, Jawa Barat 16610

**LINK MAPS:**
https://maps.app.goo.gl/PCLXHbXJ9EeEdikP8

**GOOGLE MAPS EMBED:**
Untuk embed iframe Google Maps, gunakan cara berikut:
1. Buka: https://maps.app.goo.gl/PCLXHbXJ9EeEdikP8
2. Di Google Maps, klik Share → Embed a map → Copy iframe
3. Gunakan src dari iframe tersebut di komponen Maps

Sementara belum ada iframe src yang confirmed, gunakan link redirect:
<a href="https://maps.app.goo.gl/PCLXHbXJ9EeEdikP8" target="_blank">
  Lihat di Google Maps
</a>

Atau jika perlu embed langsung, gunakan:
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991!2d106.7515!3d-6.5695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c543483e7811%3A0x129d845199dc9ea8!2sTakka%20Steel!5e0!3m2!1sid!2sid!4v1234"
  width="100%"
  height="400"
  style="border:0; border-radius:8px;"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

**JAM OPERASIONAL yang harus muncul di halaman Kontak:**
Senin – Sabtu: 08.00 – 17.00 WIB

**NOMOR WA (tombol CTA di halaman Kontak):**
Link: https://wa.me/6289518611616?text=Halo%20Takka%20Steel%2C%20saya%20ingin%20menanyakan%20informasi%20produk%20dan%20harga.
Display: 0895-1861-1616
---

## PROMPT 4 — Update SEO Meta Tags

Paste prompt ini ke Claude Code:

---
Update meta tags SEO di layout.tsx (atau _app.tsx / head.tsx) dengan data berikut:

**Default title:**
"Takka Steel — Pusat Baja & Bahan Bangunan Kabupaten Bogor"

**Title template (per halaman):**
"%s | Takka Steel — Distributor Baja Bogor"

**Default meta description:**
"Takka Steel, pusat material baja ringan, atap spandek, bondeck, dan bahan bangunan di Kabupaten Bogor. Produk lengkap, harga kompetitif, pengiriman cepat. Hubungi 0895-1861-1616."

**Keywords:**
takka steel, distributor baja bogor, baja ringan ciomas bogor, atap spandek bogor, bondeck bogor, material bangunan kabupaten bogor, toko besi bogor

**Open Graph:**
- og:title: "Takka Steel — Pusat Baja & Bahan Bangunan Bogor"
- og:description: [sama dengan meta description]
- og:type: website
- og:locale: id_ID

**Local Business Schema JSON-LD (tambahkan di layout.tsx):**
{
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  "name": "Takka Steel",
  "description": "Pusat material baja dan bahan bangunan di Kabupaten Bogor",
  "url": "https://takkasteel.com",
  "telephone": "+6289518611616",
  "email": "takkasteelofficial@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Lkr. Laladon No.51, RT.01/RW.07",
    "addressLocality": "Laladon, Kec. Ciomas",
    "addressRegion": "Kabupaten Bogor, Jawa Barat",
    "postalCode": "16610",
    "addressCountry": "ID"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/takkasteelofficial/"
  ]
}
---

## PROMPT 5 — Update Footer

Paste prompt ini ke Claude Code:

---
Update komponen Footer dengan data resmi Takka Steel:

**Nama:** Takka Steel
**Tagline:** Pusat Baja dan Bahan Bangunan
**Alamat:** Jl. Lkr. Laladon No.51, RT.01/RW.07, Laladon, Kec. Ciomas, Kabupaten Bogor, Jawa Barat 16610
**WA:** 0895-1861-1616 (link: https://wa.me/6289518611616)
**Email:** takkasteelofficial@gmail.com
**Instagram:** @takkasteelofficial (link: https://www.instagram.com/takkasteelofficial/)
**Tokopedia:** Toko Takka Steel
**Jam:** Senin – Sabtu, 08.00 – 17.00 WIB
**Copyright:** © 2025 Takka Steel. All rights reserved.

Struktur footer yang direkomendasikan (4 kolom di desktop, stack di mobile):
- Kolom 1: Logo + deskripsi singkat + sosial media icons
- Kolom 2: Navigasi (Home, Tentang, Produk, Kontak)
- Kolom 3: Produk Unggulan (baja ringan, atap, lantai, aksesoris)
- Kolom 4: Kontak (alamat, WA, email, jam operasional)

Warna footer: background #1A2340 (dark navy), text white/light
---

## CHECKLIST SETELAH SEMUA PROMPT DIJALANKAN

[ ] Nama "Takka Steel" muncul di navbar, hero, footer, title
[ ] Warna navy #384E89 sudah replace warna lama di seluruh site
[ ] Font Montserrat untuk heading, Open Sans untuk body
[ ] Alamat lengkap tampil di footer dan halaman Kontak
[ ] Nomor WA 0895-1861-1616 bisa diklik dan buka WA
[ ] Google Maps tampil di halaman Kontak
[ ] Jam operasional tampil: Senin-Sabtu 08.00-17.00
[ ] Visi & Misi tampil di halaman Tentang Kami
[ ] 4 kategori produk tampil di halaman Produk
[ ] Meta title & description sudah benar di semua halaman
[ ] Schema JSON-LD terpasang di layout

---

## DATA YANG MASIH KURANG (konfirmasi ke client)

⚠️  PLACEHOLDER yang harus diisi nanti:
- Foto gudang/produk resolusi tinggi
- Testimoni minimal 2 dari klien
- Coverage area pengiriman (selain Kab. Bogor)
- File logo HD (AI/SVG)
- Koordinat GPS exak (lat/lng untuk schema)

Gunakan placeholder text "[Testimoni akan segera hadir]" dan
gunakan stock photo industrial dari Unsplash sementara.

