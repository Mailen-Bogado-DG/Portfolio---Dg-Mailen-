import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Mai — Diseñadora Gráfica | Portfolio", template: "%s | Mai — Diseñadora Gráfica" },
  description: site.description,
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Mai — Diseñadora Gráfica | Portfolio", description: site.description, locale: "es_AR", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><a className="skip-link" href="#contenido">Saltar al contenido</a><Header />{children}<Footer /><Reveal /></body></html>;
}
