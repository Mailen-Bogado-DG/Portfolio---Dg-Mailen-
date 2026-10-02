"use client";

import { useState } from "react";

export function HeroMarquee() {
  const [paused, setPaused] = useState(false);
  return <section id="inicio" className="hero" aria-label="Mailen Elda Bogado, diseñadora gráfica">
    <h1 className="sr-only">Mailen Elda Bogado — Portfolio de diseño gráfico</h1>
    <div className="shell hero-eyebrow"><span>DISEÑO CON IDENTIDAD. IDEAS CON CARÁCTER.</span><span>PORTFOLIO / 2026</span></div>
    <div className={`marquee ${paused ? "is-paused" : ""}`} aria-hidden="true"><div className="marquee-track">{[0, 1].map(i => <div className="marquee-group" key={i}>MAILEN ELDA BOGADO — MAILEN ELDA BOGADO —&nbsp;</div>)}</div></div>
    <div className="shell hero-bottom"><span>Branding · Editorial · Comunicación visual</span><button className="marquee-toggle" onClick={() => setPaused(!paused)} aria-label={paused ? "Reanudar texto en movimiento" : "Pausar texto en movimiento"} aria-pressed={paused}>{paused ? "Reanudar" : "Pausar"}<span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span></button></div>
  </section>;
}
