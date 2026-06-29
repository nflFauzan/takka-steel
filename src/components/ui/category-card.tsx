"use client";

import * as React from "react";
import Link from "next/link";

/**
 * Category card — adapted from the 21st.dev `product-card-2` reference to
 * Takka Steel's design system (navy/gold, no shadcn tokens). Categories have
 * no price, so the price/offer block is replaced by a tagline + hover accent.
 *
 * NOTE: The old motion.div whileHover wrapper was removed so this card is safe
 * to nest inside a parent draggable slider — framer-motion gesture listeners on
 * child elements intercept pointer events before the parent drag can fire.
 * The lift effect is now a plain CSS transition on the Link itself.
 */
export interface CategoryCardProps {
  name: string;
  tagline: string;
  image: string;
  href?: string;
  /** Pass true when inside a draggable slider to suppress link navigation on drag */
  dragDeltaRef?: React.RefObject<number>;
}

export function CategoryCard({
  name,
  tagline,
  image,
  href = "/produk",
  dragDeltaRef,
}: CategoryCardProps) {
  // Stock-photo hosts can rate-limit a burst of requests; retry with backoff
  // (cache-busted) a couple of times before settling on the navy fallback.
  const [src, setSrc] = React.useState(image);
  const [failed, setFailed] = React.useState(false);
  const attempts = React.useRef(0);
  const sep = image.includes("?") ? "&" : "?";
  const showImage = !!image && !failed;

  const handleError = () => {
    if (attempts.current < 3) {
      attempts.current += 1;
      const next = attempts.current;
      window.setTimeout(() => setSrc(`${image}${sep}r=${next}`), 500 * next);
    } else {
      setFailed(true);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (dragDeltaRef && (dragDeltaRef.current ?? 0) > 5) e.preventDefault();
  };

  return (
    <div className="h-full">
      <Link
        href={href}
        onClick={handleClick}
        draggable={false}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
      >
        {/* Real photo when provided, else a premium navy placeholder tile */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-steel-800 to-steel-950">
          {showImage ? (
            <>
              <img
                src={src}
                alt={name}
                loading="lazy"
                draggable={false}
                referrerPolicy="no-referrer"
                onError={handleError}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-950/35 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <svg
                viewBox="0 0 24 24"
                className="h-9 w-9 text-gold/40 transition-transform duration-500 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
              </svg>
              <span
                className="absolute right-0 top-0 h-9 w-9 bg-gold/15"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              />
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-heading text-sm font-bold leading-tight text-steel-900 transition-colors duration-300 group-hover:text-accent">
            {name}
          </h3>
          <p className="mt-1 text-xs leading-snug text-steel-500">{tagline}</p>
          {/* Gold accent that grows on hover */}
          <span className="mt-3 block h-[3px] w-5 origin-left rounded-full bg-gold transition-transform duration-300 ease-out group-hover:scale-x-[2.4]" />
        </div>
      </Link>
    </div>
  );
}
