import Image from "next/image";

export function EnergyCaseStudy() {
  return <div className="energy-case">
    <nav className="artise-index" aria-label="Secciones de Ahorro de energía">
      <a href="#energia-proyecto">El proyecto</a><a href="#energia-identidad">Identidad visual</a><a href="#energia-sistema">Sistema gráfico</a><a href="#energia-aplicaciones">Aplicaciones</a>
    </nav>
    <section className="break-overview shell" id="energia-proyecto">
      <div><span className="break-eyebrow">AHORRO DE ENERGÍA / EL PROYECTO</span><h2>Diseñar para<br />generar conciencia.</h2></div>
      <div><h3><span className="word-outline">Sobre el proyecto</span></h3><p>Este proyecto aborda el <strong>ahorro de energía en edificios de la Administración Pública Provincial del Chaco</strong>, tomando como caso de análisis espacios de la UNNE. La propuesta surge a partir de la necesidad de hacer visible cómo se distribuye el consumo energético y qué hábitos o dispositivos generan un uso poco eficiente de la energía.</p><h3><span className="word-outline">Objetivo y concepto</span></h3><p>El objetivo fue <strong>informar y generar conciencia sobre el consumo energético cotidiano</strong>, mostrando de manera clara dónde se concentra el mayor gasto y qué acciones simples pueden ayudar a reducirlo. La propuesta busca transformar datos técnicos en información accesible, favoreciendo prácticas más responsables dentro de los espacios universitarios.</p><h3><span className="word-outline">La propuesta visual</span></h3><p>El sistema visual se construye a partir de una paleta cromática organizada por categorías de consumo, una familia de íconos vinculados a iluminación, climatización y equipamiento, y el uso de la tipografía Barlow en diferentes pesos. La información se organiza mediante gráficos, porcentajes, ilustraciones y jerarquías tipográficas para facilitar una lectura rápida dentro de una pieza con gran cantidad de datos.</p></div>
    </section>
    <section className="energy-artwork-section shell" id="energia-identidad" aria-labelledby="energia-elementos-titulo">
      <h3 id="energia-elementos-titulo">Elementos e ilustración</h3>
      <Image src="/images/projects/energia-iconos.png" alt="Iconos de iluminación, climatización y dispositivos eléctricos en azules, amarillos y rojos" width={1536} height={1024} sizes="(max-width: 767px) 100vw, 80vw" />
    </section>
    <section className="energy-palette" id="energia-sistema" aria-labelledby="energia-paleta-titulo">
      <h3 id="energia-paleta-titulo">Paleta cromática</h3>
      <div className="energy-swatches" role="img" aria-label="Doce colores del proyecto agrupados en azules, amarillos, naranjas y rojos">
        {["#1f4077", "#3975ba", "#71a1d6", "#a8daf4", "#af591d", "#d08412", "#d1be25", "#f7c11a", "#7b2e30", "#96383b", "#c14343", "#b31d2f"].map(color => <span key={color} style={{ backgroundColor: color }} />)}
      </div>
    </section>
    <section className="energy-artwork-section energy-final shell" id="energia-aplicaciones" aria-labelledby="energia-final-titulo">
      <h3 id="energia-final-titulo">Pieza final</h3>
      <Image src="/images/projects/energia-pieza-final.png" alt="Infografía completa: ¿Dónde se escapó la energía? Consumo en climatización, iluminación y equipos, y medidas de ahorro" width={1055} height={1491} sizes="(max-width: 767px) 100vw, 1055px" />
    </section>
  </div>;
}
