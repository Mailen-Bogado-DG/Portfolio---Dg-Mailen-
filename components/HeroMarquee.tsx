export function HeroMarquee() {
  return <section id="inicio" className="hero" aria-label="Mailen Elda Bogado, diseñadora gráfica">
    <h1 className="sr-only">Mailen Elda Bogado — Portfolio de diseño gráfico</h1>
    <div className="shell hero-eyebrow"><span className="hero-portfolio">PORTFOLIO / 2026</span><span>DISEÑO CON IDENTIDAD. IDEAS CON CARÁCTER.</span></div>
    <div className="marquee" aria-hidden="true"><div className="marquee-track">{[0, 1].map(i => <div className="marquee-group" key={i}>MAILEN ELDA BOGADO — MAILEN ELDA BOGADO —&nbsp;</div>)}</div></div>
    <div className="shell hero-bottom"><span><strong>Branding · Editorial · Comunicación visual · Gestión de redes sociales · Papelería</strong></span></div>
  </section>;
}

