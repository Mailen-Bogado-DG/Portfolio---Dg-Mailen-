import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return <footer className="footer"><div className="shell footer-inner"><Link href="/#inicio" className="wordmark" aria-label="Mai, volver al inicio"><Image src="/images/mai-logo.png" alt="Mai — Graphic Designer" width={268} height={152} className="brand-logo" /></Link><p>Mailen Elda Bogado<br/><span>Diseñadora Gráfica</span></p><nav aria-label="Redes y contacto"><a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href={`mailto:${site.email}`}>Email ↗</a><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></nav><span className="footer-credit">Diseñado por Mai.</span></div></footer>;
}
