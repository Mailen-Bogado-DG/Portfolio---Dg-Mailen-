import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return <footer className="footer"><div className="shell footer-inner"><Link href="/#inicio" className="wordmark" aria-label="Mai, volver al inicio"><Image src="/images/mai-logo.svg" alt="Mai — Graphic Designer" width={375} height={292} className="brand-logo" /></Link></div></footer>;
}
