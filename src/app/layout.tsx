import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { company } from "@/data/company";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://takkasteel.example.com"),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.shortDescription,
  keywords: [
    "besi", "baja", "besi beton", "baja ringan", "wiremesh", "toko besi Bogor",
    "supplier besi", "TAKKA STEEL", "bahan bangunan Bogor",
  ],
  openGraph: {
    title: `${company.name} — ${company.tagline}`,
    description: company.shortDescription,
    type: "website",
    locale: "id_ID",
    siteName: company.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
