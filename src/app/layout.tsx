import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { company } from "@/data/company";

// Brand primary — Poppins (geometric sans) drives all headings & display type.
const poppinsHeading = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

// Pairing — Open Sans (humanist sans) for body copy: superior small-size legibility.
const openSansBody = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://takkasteel.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Takka Steel — Harga Minimum, Kualitas Premium",
    template: "%s | Takka Steel — Distributor Baja Jabodetabek",
  },
  description:
    "Takka Steel, pusat material baja & bahan bangunan. Harga minimum, kualitas premium. Melayani Jabodetabek & seluruh Indonesia. Hubungi 0895-1861-1616.",
  keywords: [
    "takka steel",
    "distributor baja bogor",
    "baja ringan ciomas bogor",
    "atap spandek bogor",
    "material bangunan jabodetabek",
    "toko besi bogor",
    "supplier baja ringan indonesia",
    "harga minimum kualitas premium",
  ],
  openGraph: {
    title: "Takka Steel — Harga Minimum, Kualitas Premium",
    description:
      "Pusat material baja & bahan bangunan. Harga minimum, kualitas premium. Melayani Jabodetabek & seluruh Indonesia. Hubungi 0895-1861-1616.",
    type: "website",
    locale: "id_ID",
    siteName: company.name,
    url: SITE_URL,
    images: [
      {
        url: "/images/og-takka-steel.webp",
        width: 1200,
        height: 630,
        alt: "Takka Steel — Pusat Baja & Bahan Bangunan",
      },
    ],
  },
};

// Local Business structured data for SEO (HardwareStore).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  name: "Takka Steel",
  description:
    "Harga Minimum, Kualitas Premium — pusat material baja dan bahan bangunan, melayani Jabodetabek & seluruh Indonesia",
  url: SITE_URL,
  telephone: "+6289518611616",
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Lkr. Laladon No.51, RT.01/RW.07",
    addressLocality: "Laladon, Kec. Ciomas",
    addressRegion: "Kabupaten Bogor, Jawa Barat",
    postalCode: "16610",
    addressCountry: "ID",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [company.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${poppinsHeading.variable} ${openSansBody.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
