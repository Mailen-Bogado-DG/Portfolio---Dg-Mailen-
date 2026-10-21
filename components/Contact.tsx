import { site } from "@/data/site";
import { Arrow } from "./Icons";

export function Contact() {
  return <section id="contacto" className="contact"><div className="shell"><div className="contact-eyebrow"><span>¿TENÉS UNA IDEA EN MENTE?</span><svg className="contact-sparkles" viewBox="0 0 145 200" aria-hidden="true">
      <defs><filter id="contact-pencil" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" seed="7" result="grain"/><feDisplacementMap in="SourceGraphic" in2="grain" scale="1.8"/><feComposite in2="SourceAlpha" operator="in"/></filter></defs><g fill="currentColor" filter="url(#contact-pencil)">
        <path d="M99 5C97 47 88 62 62 68C91 74 98 93 99 126C102 89 109 76 133 70C106 64 103 45 99 5Z"/>
        <path d="M34 77C33 109 26 118 6 122C27 128 33 140 34 168C38 139 43 128 61 123C41 118 37 105 34 77Z"/>
        <path d="M83 140C82 160 77 169 64 173C79 177 83 186 84 198C86 183 90 176 103 173C88 168 85 157 83 140Z"/>
      </g>
    </svg></div><h2 data-reveal>¿TRABAJAMOS<br/><span>JUNTOS?</span><svg className="contact-drawn-arrow" viewBox="0 0 160 230" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#contact-pencil)">
        <path d="M27 13C70 35 112 111 75 108C38 103 63 67 94 102C128 143 124 186 78 214M85 178 77 216 119 196"/>
        <path opacity=".35" strokeWidth="1.5" d="M24 15C66 37 108 109 74 105M96 105C125 144 120 184 81 208"/>
      </g>
    </svg></h2><div className="contact-bottom"><div className="contact-intro"><p>Hagamos que tu próxima idea<br/>tenga su propia identidad.</p><a className="whatsapp-button" href={site.whatsapp} target="_blank" rel="noopener noreferrer">HABLEMOS POR WHATSAPP <Arrow diagonal /></a></div><div className="contact-links"><div><span>EMAIL</span><a href={`mailto:${site.email}`}>{site.email}<Arrow diagonal /></a></div><div><span>INSTAGRAM</span><a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}<Arrow diagonal /></a></div><div><span>WHATSAPP</span><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">{site.phone}<Arrow diagonal /></a></div></div></div></div></section>;
}
