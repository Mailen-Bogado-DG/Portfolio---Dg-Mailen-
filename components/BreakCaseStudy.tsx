import Image from "next/image";
import { breakIdentity } from "@/data/break-identity";

import { breakPieces } from "@/data/break-pieces";

export function BreakCaseStudy() {
  return <div className="break-case">
    <nav className="artise-index" aria-label="Secciones de Date un Break">
      <a href="#break-proyecto">El proyecto</a><a href="#break-identidad">Identidad visual</a><a href="#break-sistema">Sistema gráfico</a><a href="#break-aplicaciones">Aplicaciones</a>
    </nav>
    <section className="break-overview shell" id="break-proyecto">
      <div><span className="break-eyebrow">DATE UN BREAK / EL PROYECTO</span><h2>Una pausa también comunica.</h2></div>
      <div>
        <h3><span className="word-outline">Sobre la campaña</span></h3>
        <p><strong>Date un Break</strong> es una campaña de comunicación orientada a estudiantes de la UNNE que atraviesan situaciones de ansiedad vinculadas al estudio. Surge a partir de una problemática muchas veces naturalizada: la presión académica, el agotamiento y la dificultad para reconocer cuándo el malestar empieza a afectar el bienestar y el rendimiento.</p>
        <p>La propuesta se desarrolla en el marco del <strong>Espacio Interdisciplinario de Apoyo Integral de la UNNE</strong>, buscando acercar información, herramientas y recursos de acompañamiento a la comunidad universitaria.</p>
        <h3><span className="word-outline">Objetivo y concepto</span></h3>
        <p>La campaña busca <strong>visibilizar la ansiedad estudiantil, promover estrategias para manejarla y recordar que descansar también forma parte del proceso de estudiar</strong>. El objetivo es acercar mensajes claros, consejos y recursos que ayuden a los estudiantes a identificar lo que están sintiendo y a incorporar pequeñas pausas en su rutina académica.</p>
        <p>El concepto se sintetiza en <strong>“Date un Break”</strong>: una invitación directa a frenar por un momento, respirar y volver con mayor claridad. A partir de esta idea se construyó un sistema de frases que relaciona situaciones propias de la vida universitaria con la necesidad de hacer una pausa, como <em>“Hasta el lápiz más fuerte necesita un break”</em>.</p>
      </div>
    </section>
    <section id="break-identidad" aria-label="Versiones de la marca" className="break-identity-gallery">
      {breakIdentity.slice(0, 3).map(item => <figure key={item.src}><Image {...item} sizes="(max-width: 767px) 100vw, 33vw" /></figure>)}
    </section>
    <section id="break-sistema" aria-label="Variantes de color y tramas" className="break-color-gallery">
      {breakIdentity.slice(3).map(item => <figure key={item.src}><Image {...item} sizes="(max-width: 767px) 100vw, 50vw" /></figure>)}
    </section>
    <section id="break-aplicaciones" aria-label="Galería de la campaña" className="break-mosaic">
      {breakPieces.map(piece => <figure key={piece.src} className={`break-artwork${piece.wide ? " break-artwork--wide" : ""}`}>
        <Image src={piece.src} alt={piece.alt} width={piece.width} height={piece.height} sizes={piece.wide ? "100vw" : "(max-width: 767px) 100vw, 50vw"} />
      </figure>)}
    </section>
  </div>;
}
