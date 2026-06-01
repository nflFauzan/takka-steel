import Link from "next/link";
import { company } from "@/data/company";

/** Text-based logo mark. Swap for an <Image> with the real logo when available. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded bg-accent font-black text-white shadow-sm">
        T
      </span>
      <span
        className={`text-lg font-extrabold tracking-tight ${
          light ? "text-white" : "text-steel-900"
        }`}
      >
        TAKKA<span className="text-accent">STEEL</span>
      </span>
      <span className="sr-only">{company.name}</span>
    </Link>
  );
}
