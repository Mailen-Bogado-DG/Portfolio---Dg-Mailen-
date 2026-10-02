"use client";

import { useState } from "react";
import { education, type EducationItem } from "@/data/education";
import { CertificateModal } from "./CertificateModal";
import { Arrow } from "./Icons";

export function Education() {
  const [selected, setSelected] = useState<EducationItem | null>(null);
  return <section id="estudios" className="education shell section-space"><div className="education-heading" data-reveal><div><span className="eyebrow">SIEMPRE APRENDIENDO</span><h2>ESTUDIOS<span className="pink-dot">.</span></h2></div><p>Herramientas para explorar.<br/>Conocimientos para crear.</p></div><p className="sample-note">Formación de muestra · Información por completar</p><div>{education.map(item => <article key={item.id} className="education-row"><span className="education-year">{item.year}</span><div className="education-title"><h3>{item.title}</h3><p>{item.institution}</p></div><span className="education-type">{item.type}</span>{item.image ? <button className="certificate-button" onClick={() => setSelected(item)} aria-label={`Ver certificado de ${item.title}`}><img src={item.image} alt="" width="64" height="46" loading="lazy" /><Arrow diagonal /></button> : <span className="education-empty" aria-hidden="true">—</span>}</article>)}</div><CertificateModal item={selected} onClose={() => setSelected(null)} /></section>;
}
