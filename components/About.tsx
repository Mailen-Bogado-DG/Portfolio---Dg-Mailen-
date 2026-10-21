import Image from "next/image";
import { site } from "@/data/site";
import { Arrow } from "./Icons";

export function About() {
  return <section id="sobre-mi" className="about shell section-space">
    <svg className="about-crayon about-crayon-top" viewBox="0 0 180 110" fill="none" aria-hidden="true">
      <defs><filter id="about-pencil" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" seed="7" result="grain"/><feDisplacementMap in="SourceGraphic" in2="grain" scale="1.8"/><feComposite in2="grain" operator="arithmetic" k1="0" k2=".85" k3="-.15" k4=".1"/></filter></defs>
      <g stroke="currentColor" strokeWidth="4" strokeLinejoin="round" filter="url(#about-pencil)">
        <path d="M17 21 53 10 68 98Z M86 7 123 10 88 100Z M151 24 177 48 108 102Z"/>
        <path opacity=".5" strokeWidth="1.5" d="M21 24 50 15 64 91Z M90 12 119 14 91 92Z M151 30 170 49 115 95Z"/>
      </g>
    </svg>
    <svg className="about-crayon about-crayon-bottom" viewBox="0 0 160 230" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#about-pencil)">
        <path d="M27 13C70 35 112 111 75 108C38 103 63 67 94 102C128 143 124 186 78 214M85 178 77 216 119 196"/>
        <path opacity=".35" strokeWidth="1.5" d="M24 15C66 37 108 109 74 105M96 105C125 144 120 184 81 208"/>
      </g>
    </svg>
    <svg className="about-crayon about-crayon-side" viewBox="0 0 145 200" aria-hidden="true">
      <g fill="currentColor" filter="url(#about-pencil)">
        <path d="M99 5C97 47 88 62 62 68C91 74 98 93 99 126C102 89 109 76 133 70C106 64 103 45 99 5Z"/>
        <path d="M34 77C33 109 26 118 6 122C27 128 33 140 34 168C38 139 43 128 61 123C41 118 37 105 34 77Z"/>
        <path d="M83 140C82 160 77 169 64 173C79 177 83 186 84 198C86 183 90 176 103 173C88 168 85 157 83 140Z"/>
      </g>
    </svg>
    <div className="portrait-wrap"><div className="portrait-art"><Image src={site.portrait} alt={site.portraitAlt} width={941} height={1672} className="portrait" /></div></div>
    <div className="about-copy">
      <div className="about-pill">DISEÑADORA GRÁFICA</div>
      <h2>Hola,<br/>soy Mai!</h2>
      <p>{site.about}</p>
      <div className="about-bottom"><a className="about-pill about-work-link" href="#trabajos">EXPLORÁ MIS TRABAJOS <Arrow diagonal /></a></div>
    </div>
  </section>;
}
