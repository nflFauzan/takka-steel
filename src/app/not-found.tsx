import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 pt-16 text-center">
      <div>
        <p className="text-7xl font-extrabold text-accent">404</p>
        <h1 className="mt-4 text-2xl font-bold text-steel-900">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mt-2 text-steel-500">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link href="/" className="btn-primary mt-6">
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
