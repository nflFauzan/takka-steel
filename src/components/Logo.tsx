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
      <Link href="/" className="group inline-flex items-center">
        <Image
          src="/images/logo-white.webp"
          alt={company.name}
          width={1080}
          height={1080}
          className="h-20 w-auto object-contain"
          priority
        />
        <span className="sr-only">{company.name}</span>
      </Link>
    );
  }

  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src="/images/logo-trimmed.webp"
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
