import Link from "next/link";

/** Reusable inner-page hero banner with breadcrumb. */
export default function PageHeader({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-steel-900 pt-28 pb-14 text-white">
      {/* subtle industrial pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(45deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="container-px relative">
        {breadcrumb && (
          <nav className="mb-3 text-sm text-steel-400">
            {breadcrumb.map((b, i) => (
              <span key={i}>
                {b.href ? (
                  <Link href={b.href} className="hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-steel-200">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-steel-300">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
