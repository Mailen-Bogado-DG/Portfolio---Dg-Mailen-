import Image from "next/image";
import { site } from "@/data/site";
import { Arrow, Flower } from "./Icons";

export function About() {
  return <section id="sobre-mi" className="about shell section-space">
    <div className="portrait-wrap"><div className="portrait-art"><Image src={site.portrait} alt={site.portraitAlt} width={900} height={1050} priority className="portrait" /><span className="portrait-label">UN POCO DE MÍ</span></div><div className="portrait-sticker" aria-hidden="true">ideas<br/><strong>con alma.</strong><Flower /></div><span className="image-note">RETRATO ILUSTRADO DE MUESTRA</span></div>
    <div className="about-copy"><div className="eyebrow"><span className="little-line" /> DISEÑADORA GRÁFICA</div><h2>Hola,<br/>soy <span className="mai-name">Mai<svg viewBox="0 0 210 30" aria-hidden="true"><path d="M5 20Q105-5 203 12M15 27Q110 8 188 23" /></svg></span><span className="pink-dot">.</span></h2><p>{site.about}</p><div className="about-bottom"><a className="text-link" href="#trabajos">Explorá mis trabajos <Arrow diagonal /></a><Flower className="about-flower" /></div></div>
  </section>;
}
