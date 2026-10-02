import { site } from "@/data/site";
import { Arrow, Flower } from "./Icons";

export function Contact() {
  return <section id="contacto" className="contact"><div className="shell"><div className="contact-eyebrow"><span>¿TENÉS UNA IDEA EN MENTE?</span><Flower /></div><h2 data-reveal>¿TRABAJAMOS<br/><span>JUNTOS?</span><Arrow diagonal /></h2><div className="contact-bottom"><div className="contact-intro"><p>Hagamos que tu próxima idea<br/>tenga su propia identidad.</p><a className="whatsapp-button" href={site.whatsapp} target="_blank" rel="noopener noreferrer">HABLEMOS POR WHATSAPP <Arrow diagonal /></a></div><div className="contact-links"><div><span>EMAIL</span><a href={`mailto:${site.email}`}>{site.email}<Arrow diagonal /></a></div><div><span>INSTAGRAM</span><a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}<Arrow diagonal /></a></div><div><span>WHATSAPP</span><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">{site.phone}<Arrow diagonal /></a></div></div></div></div></section>;
}
