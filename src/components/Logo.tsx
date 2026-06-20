import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";

/**
 * Brand logo. On light backgrounds (navbar) the full horizontal lockup is
 * shown. On dark backgrounds (footer) the colored building mark is paired
 * with a white wordmark so it stays legible on navy.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  if (light) {
    return (
      <Link href="/" className="group inline-flex items-center gap-3">
        <Image
          src="/images/logo-mark.png"
          alt={company.name}
          width={816}
          height={769}
          className="h-8 w-auto object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
          priority
        />
        {/* Subtle vertical divider */}
        <span className="hidden h-5 w-px bg-white/20 sm:block" aria-hidden="true" />
        <span className="font-heading text-[15px] font-extrabold uppercase tracking-[0.08em] text-white sm:text-base">
          Takka<span className="text-gold ml-[0.15em]">Steel</span>
        </span>
        <span className="sr-only">{company.name}</span>
      </Link>
    );
  }

  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src="/images/logo-trimmed.png"
        alt={company.name}
        width={1920}
        height={905}
        className="h-10 w-auto md:h-11"
        priority
      />
      <span className="sr-only">{company.name}</span>
    </Link>
  );
}
