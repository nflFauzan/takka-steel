/**
 * Articles / blog content (Artikel).
 * ⚠️ PLACEHOLDER DATA — short educational posts typical of a steel supplier.
 * Body is plain paragraphs (string[]). Replace with real content/Markdown later.
 */

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  author: string;
  image: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "tips-memilih-besi-beton-berkualitas",
    title: "Tips Memilih Besi Beton Berkualitas untuk Rumah Anda",
    excerpt:
      "Besi beton adalah tulang punggung struktur bangunan. Kenali ciri besi beton SNI yang baik sebelum membeli.",
    date: "2025-11-12",
    author: "Tim TAKKA STEEL",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=70",
    body: [
      "Besi beton berperan penting dalam menahan gaya tarik pada struktur beton bertulang. Memilih besi beton yang tepat akan menentukan kekuatan dan keawetan bangunan Anda dalam jangka panjang.",
      "Pastikan besi beton memiliki tanda SNI dan ukuran diameter yang sesuai. Besi beton SNI memiliki toleransi diameter yang ketat, sehingga kekuatannya lebih terjamin dibandingkan besi 'banci' yang ukurannya di bawah standar.",
      "Perhatikan juga permukaan besi. Karat ringan (lapisan tipis) masih wajar, namun hindari besi dengan karat tebal yang sudah mengelupas karena dapat mengurangi diameter efektif dan daya rekat terhadap beton.",
      "Untuk struktur utama seperti kolom dan balok, gunakan besi ulir (BjTS) yang memiliki daya rekat lebih baik. Sedangkan besi polos (BjTP) umumnya dipakai untuk sengkang atau tulangan praktis.",
      "Konsultasikan kebutuhan besi beton proyek Anda dengan tim TAKKA STEEL agar mendapatkan jenis dan jumlah yang tepat sesuai perhitungan struktur.",
    ],
  },
  {
    slug: "baja-ringan-vs-kayu-untuk-atap",
    title: "Baja Ringan vs Kayu: Mana yang Lebih Baik untuk Rangka Atap?",
    excerpt:
      "Membandingkan baja ringan dan kayu dari sisi kekuatan, biaya, dan perawatan rangka atap.",
    date: "2025-10-28",
    author: "Tim TAKKA STEEL",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=70",
    body: [
      "Saat membangun atap, banyak orang bingung memilih antara rangka baja ringan atau kayu. Keduanya memiliki kelebihan masing-masing tergantung kebutuhan dan anggaran.",
      "Baja ringan unggul dalam hal ketahanan terhadap rayap, bobot yang lebih ringan, serta presisi pemasangan. Material ini juga tidak mudah lapuk dan relatif tahan lama dengan perawatan minimal.",
      "Kayu masih menjadi pilihan untuk tampilan estetika tertentu, namun rentan terhadap rayap, perubahan cuaca, dan harga yang semakin tinggi seiring langkanya kayu berkualitas.",
      "Dari sisi biaya jangka panjang, baja ringan cenderung lebih ekonomis karena minim perawatan dan tahan lama. Pastikan menggunakan baja ringan dengan ketebalan yang sesuai beban atap.",
      "TAKKA STEEL menyediakan baja ringan truss dan reng berkualitas dengan lapisan anti karat. Hubungi kami untuk konsultasi kebutuhan rangka atap Anda.",
    ],
  },
  {
    slug: "menghitung-kebutuhan-wiremesh-dak",
    title: "Cara Praktis Menghitung Kebutuhan Wiremesh untuk Dak Beton",
    excerpt:
      "Wiremesh mempercepat pengecoran dak. Pelajari cara menghitung kebutuhan lembarannya dengan mudah.",
    date: "2025-10-05",
    author: "Tim TAKKA STEEL",
    image:
      "https://images.unsplash.com/photo-1597844808175-bd6c95f1f6e2?auto=format&fit=crop&w=1200&q=70",
    body: [
      "Wiremesh menjadi alternatif populer pengganti tulangan besi konvensional pada dak beton karena pemasangannya lebih cepat dan hasilnya lebih merata.",
      "Langkah pertama, hitung luas area dak yang akan dicor (panjang × lebar). Misalnya dak berukuran 6 m × 8 m memiliki luas 48 m².",
      "Satu lembar wiremesh standar berukuran 2,1 m × 5,4 m (sekitar 11,34 m²). Untuk menutup 48 m², Anda membutuhkan sekitar 5 lembar, ditambah cadangan untuk overlap antar lembar (biasanya 1 kotak).",
      "Pilih diameter wiremesh sesuai beban rencana. Untuk dak rumah tinggal umumnya digunakan M6–M8, sedangkan untuk beban lebih berat dapat menggunakan diameter lebih besar.",
      "Butuh bantuan menghitung kebutuhan wiremesh proyek Anda? Tim TAKKA STEEL siap membantu memberikan estimasi material yang akurat.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso: string) {
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
