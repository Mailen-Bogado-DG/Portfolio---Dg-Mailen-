"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

const links = [["inicio", "Inicio"], ["sobre-mi", "Sobre mí"], ["trabajos", "Trabajos"], ["estudios", "Estudios"], ["contacto", "Contacto"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    function escape(event: KeyboardEvent) { if (event.key === "Escape") { setOpen(false); buttonRef.current?.focus(); } }
    function outside(event: PointerEvent) { if (!headerRef.current?.contains(event.target as Node)) setOpen(false); }
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", escape); document.removeEventListener("pointerdown", outside); };
  }, []);
  return <header className="site-header" ref={headerRef}>
    <div className="shell header-inner">
      <Link href="/#inicio" className="wordmark" aria-label="Mai, ir al inicio" onClick={() => setOpen(false)}><Image src="/images/mai-logo.png" alt="Mai — Graphic Designer" width={268} height={152} className="brand-logo" /></Link>
      <button ref={buttonRef} type="button" className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}><span className={open ? "menu-lines is-open" : "menu-lines"} /></button>
      <nav id="main-navigation" aria-label="Navegación principal" className={open ? "main-nav is-open" : "main-nav"}>
        {links.map(([id, label]) => <Link key={id} href={`${pathname === "/" ? "" : "/"}#${id}`} onClick={() => setOpen(false)}>{label}</Link>)}
        <a href={site.cv} className="cv-button" download onClick={() => setOpen(false)}>Descargar CV <span aria-hidden="true">↓</span></a>
      </nav>
    </div>
  </header>;
}
