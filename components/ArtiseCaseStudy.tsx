import Image from "next/image";
import { artiseApplications } from "@/data/artise-applications";

const story = [
  { number: "01", title: "Sobre el proyecto", text: <><strong>Ártise Fundación</strong> es una propuesta de identidad visual desarrollada a partir del ODS N.º 13, vinculado a la acción por el clima. El proyecto nace con la intención de abordar la problemática del deshielo en el Ártico y sus consecuencias sobre la biodiversidad, construyendo una identidad capaz de comunicar, concientizar y generar reconocimiento.</> },
  { number: "02", title: "La finalidad", text: <>El objetivo fue crear un sistema visual que ayudara a <strong>visibilizar los efectos del calentamiento global</strong> y acercar estos temas a distintos públicos mediante una comunicación clara y adaptable. La propuesta fue pensada para desarrollarse principalmente en medios digitales y redes sociales, incorporando piezas informativas, gráficas y aplicaciones que permitieran ampliar el mensaje de la fundación.</> },
  { number: "03", title: "La idea detrás", text: <>El concepto parte de la unión entre <strong>“Ártico” + “Seguro”</strong>, de donde surge el nombre <strong>Ártise</strong>. A partir de esta idea se construyó una identidad asociada al territorio ártico, tomando al oso polar como símbolo principal y trabajando una paleta de azules vinculada al hielo, el frío y el ambiente natural. El sistema se completa con la tipografía Poppins y distintas variaciones de marca que permiten adaptarla a diferentes soportes.</> },
];

export function ArtiseCaseStudy() {
  return <div className="artise-story">
    <nav className="artise-index" aria-label="Secciones de Artise">
      <a href="#artise-proyecto">El proyecto</a><a href="#artise-identidad">Identidad visual</a><a href="#artise-sistema">Sistema gráfico</a><a href="#artise-aplicaciones">Aplicaciones</a>
    </nav>
    <section className="shell artise-intro" id="artise-proyecto">
      <div><span className="artise-kicker">EL PUNTO DE PARTIDA</span><h2>Diseñar para comunicar.<br />Comunicar para concientizar.</h2><span className="artise-tag">ARTISE FUNDACIÓN / IDENTIDAD VISUAL</span></div>
      <div className="artise-copy">{story.map(item => <div key={item.number}><h3><span className="word-outline">{item.title}</span></h3><p>{item.text}</p></div>)}</div>
    </section>
    <section className="artise-identity" id="artise-identidad">
      <div className="shell"><div className="artise-section-title"><span className="artise-kicker">04 / IDENTIDAD VISUAL</span><h2>Del concepto a la marca.</h2><p>La marca de <strong>Ártise</strong> nace de la unión entre <strong>Ártico</strong> y <strong>Seguro</strong>, combinando un naming breve con un símbolo inspirado en el <strong>oso polar</strong>. Su construcción busca sintetizar la problemática ambiental en una identidad clara, reconocible y adaptable, acompañada por el uso tipográfico de <strong>Poppins</strong> y distintas variaciones de color y escala.</p></div>
        <div className="artise-brand-gallery">
          <figure className="artise-naming"><Image src="/images/projects/artise-naming.png" alt="Origen del nombre Ártise: Ártico y Seguro" width={2172} height={724} sizes="(max-width: 767px) 100vw, 80vw" /></figure>
          <div className="artise-brand-versions">
            <div className="artise-crop artise-crop--sizes"><Image src="/images/projects/artise-variaciones.png" alt="Logotipo de Ártise en distintas escalas" width={1448} height={1086} sizes="(max-width: 767px) 100vw, 80vw" /></div>
            <div className="artise-crop artise-crop--colors"><Image src="/images/projects/artise-variaciones.png" alt="Variantes de la marca en azul, celeste, negro y blanco" width={1448} height={1086} sizes="(max-width: 767px) 100vw, 80vw" /></div>
          </div>
        </div>
      </div>
    </section>
    <section className="shell artise-system" id="artise-sistema"><div className="artise-section-title"><span className="artise-kicker">05 / SISTEMA GRÁFICO</span><h2>Un lenguaje propio.</h2><p>La identidad de Ártise se construye a partir de una paleta de azules, la tipografía Poppins y una serie de recursos gráficos que refuerzan su vínculo con el entorno ártico. Estos elementos permiten mantener una comunicación reconocible, coherente y adaptable en diferentes soportes.</p></div>
      <div className="artise-pair artise-system-images">
        <figure><figcaption>Paleta cromática</figcaption><Image src="/images/projects/artise-paleta-horizontal.png" alt="Paleta cromática de Ártise: cinco tonos de azul a celeste" width={909} height={332} sizes="(max-width: 767px) 100vw, 45vw" /></figure>
        <figure className="artise-type-sample"><figcaption>Tipografías</figcaption><Image src="/images/projects/artise-tipografias.png" alt="Muestras de Poppins SemiBold y Poppins Medium con letras y números" width={1122} height={1402} sizes="(max-width: 767px) 100vw, 45vw" /></figure>
      </div>
      <div className="artise-construction"><h3>Recursos gráficos</h3><div className="artise-pair artise-system-images">
        <figure><Image src="/images/projects/artise-simbolo.png" alt="Construcción geométrica del símbolo del oso polar y su versión final" width={1672} height={941} sizes="(max-width: 767px) 100vw, 45vw" /></figure>
        <figure><Image src="/images/projects/artise-armado.png" alt="Armado del logotipo Ártise Fundación con el símbolo del oso polar y sus áreas de protección" width={1122} height={1402} sizes="(max-width: 767px) 100vw, 45vw" /></figure>
      </div></div>
    </section>
    <section className="artise-applications" id="artise-aplicaciones"><div className="artise-applications-heading"><div className="shell"><div className="artise-section-title"><span className="artise-kicker">06 / APLICACIONES</span><h2>La identidad cobra vida.</h2><p>Las piezas del proyecto reunidas en un mismo lugar.</p></div></div></div>
      <div className="shell artise-application-gallery">{artiseApplications.map(group => <section key={group.title} aria-label={group.title}>
        <h3>{group.title}</h3>
        <div className="artise-application-grid">{group.images.map(item => <figure key={item.src}>
          <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 767px) 100vw, 45vw" />
        </figure>)}</div>
      </section>)}</div>
    </section>
  </div>;
}
