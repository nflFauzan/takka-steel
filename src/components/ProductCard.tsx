import Link from "next/link";

/**
 * Product category card — image with a dark overlay and centered title,
 * styled after the reference catalog grid (dark overlay + hover zoom).
 */
export default function ProductCard({
  slug,
  name,
  category,
  image,
}: {
  slug: string;
  name: string;
  category?: string;
  image: string;
}) {
  return (
    <Link
      href={`/produk/${slug}`}
      className="group relative block h-56 overflow-hidden rounded-card shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
      />
      {/* Dark overlay — deepens on hover for readable centered title. */}
      <div className="absolute inset-0 bg-gradient-to-t from-steel-950/85 via-steel-900/40 to-steel-900/10 transition duration-300 group-hover:from-steel-950/90" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
        {category && (
          <span className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
            {category}
          </span>
        )}
        <h3 className="font-heading text-lg font-extrabold uppercase tracking-tight text-white drop-shadow">
          {name}
        </h3>
        <span className="mt-3 h-0.5 w-8 rounded-full bg-gold transition-all duration-300 group-hover:w-12" />
      </div>
    </Link>
  );
}
