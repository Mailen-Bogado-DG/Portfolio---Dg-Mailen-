import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { EnergyCaseStudy } from "@/components/EnergyCaseStudy";
import { BreakCaseStudy } from "@/components/BreakCaseStudy";
import { ArtiseCaseStudy } from "@/components/ArtiseCaseStudy";
import { MebCarousel } from "@/components/MebCarousel";
import { Arrow } from "@/components/Icons";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  return project ? { title: project.title, description: project.description, openGraph: { title: `${project.title} | Mai`, description: project.description } } : { title: "Proyecto no encontrado" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex(p => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return <main id="contenido" className="case-study"><div className={["artise-fundacion", "date-un-break", "ahorro-de-energia", "disco-de-vinilo", "torneo-abierto-del-nordeste", "siac-salud", "meb-personalizados", "100-anos-diseno-comunicacion-argentina"].includes(project.slug) ? "case-header-band case-header-band--compact" : "case-header-band"}><div className="shell case-header"><Link href="/#trabajos" className="text-link back-link"><Arrow /> Volver a Trabajos</Link><div className="case-label"><span>PROYECTO {String(project.id).padStart(2, "0")}</span><span>{project.category}{project.year && ` / ${project.year}`}</span></div><h1>{project.title}<span className="pink-dot">.</span></h1>{project.description && <p className="case-lead">{project.description}</p>}{project.isPlaceholder && <p className="sample-note">Proyecto conceptual de muestra</p>}</div></div><div className="case-cover"><Image src={project.cover} alt={project.coverAlt} width={1920} height={1080} priority sizes="100vw" /></div>{project.slug === "meb-personalizados" && <>
      <section className="break-overview shell" id="meb-emprendimiento">
        <div>
          <span className="break-eyebrow">MEB PERSONALIZADOS / EL EMPRENDIMIENTO</span>
          <h2>Ideas que se vuelven personales.</h2>
        </div>
        <div>
          <h3><span className="word-outline">Sobre el emprendimiento</span></h3>
          <p><strong>MEB Personalizados</strong> nace como un emprendimiento dedicado a transformar ideas en productos únicos, combinando diseño, producción y personalización. Cada pedido parte de una necesidad, una ocasión o una idea distinta, y se trabaja buscando que el resultado tenga identidad y un valor especial para quien lo recibe.</p>
          <h3><span className="word-outline">Objetivo y propuesta</span></h3>
          <p>La propuesta es ofrecer <strong>productos personalizados para regalos, eventos, emprendimientos y uso cotidiano</strong>, adaptando cada diseño a la persona o situación. El objetivo es brindar opciones accesibles y variadas, cuidando tanto la estética como los detalles de producción para que cada pieza se sienta pensada especialmente para su destinatario.</p>
          <h3><span className="word-outline">Diseño y personalización</span></h3>
          <p>Cada producto atraviesa un proceso que comienza con la idea del cliente y continúa con el diseño, la elección de materiales y la producción. En MEB Personalizados se combinan recursos gráficos con técnicas de impresión, sublimación y producción 3D para crear piezas que pueden adaptarse en colores, nombres, temáticas y composiciones según cada pedido.</p>
        </div>
      </section>
      <MebCarousel />
    </>}{project.slug === "artise-fundacion" && <ArtiseCaseStudy />}{project.slug === "date-un-break" && <BreakCaseStudy />}{project.slug === "ahorro-de-energia" && <EnergyCaseStudy />}{(project.context || project.process) && <div className="shell case-story"><aside><span className="eyebrow">EL PROYECTO</span><h2>Una idea.<br/>Todo un universo.</h2><ul>{project.services.map(service => <li key={service}>{service}</li>)}</ul></aside><div><section data-reveal><span className="eyebrow">01 / CONTEXTO</span><h2>El punto de partida</h2><p>{project.context}</p></section><section data-reveal><span className="eyebrow">02 / PROCESO</span><h2>Del concepto a la forma</h2><p>{project.process}</p></section></div></div>}{project.slug === "disco-de-vinilo" && <>
      <nav className="artise-index" aria-label="Secciones de Disco de Vinilo"><a href="#vinilo-proyecto">Sobre el proyecto</a><a href="#vinilo-aplicacion">Aplicación</a></nav>
      <section className="break-overview shell" id="vinilo-proyecto">
        <div><span className="break-eyebrow">DISCO DE VINILO / EL PROYECTO</span><h2>La música también se diseña.</h2></div>
        <div>
          <h3><span className="word-outline">Sobre el proyecto</span></h3>
          <p>Proyecto de <strong>diseño discográfico</strong> inspirado en <strong>la época dorada del Black Gospel, entre 1940 y 1950</strong>. La propuesta reúne una selección de canciones y contenido editorial sobre el género, desarrollando una pieza que recupera el carácter histórico y musical de ese período a través del formato vinilo.</p>
          <h3><span className="word-outline">Objetivo y concepto</span></h3>
          <p>El objetivo fue <strong>traducir la identidad del Black Gospel a un sistema visual</strong>, construyendo una propuesta que acompañe la fuerza, expresividad y carácter del género. El disco funciona no solo como soporte musical, sino también como una pieza editorial capaz de contextualizar y acercar al público a su universo.</p>
          <h3><span className="word-outline">La propuesta visual</span></h3>
          <p>La identidad se construye a partir de una <strong>paleta de tonos crema, marrón y amarillo</strong>, combinada con fuertes contrastes tipográficos y una composición inspirada en el lenguaje gráfico de época. Las jerarquías, texturas y recursos editoriales permiten organizar la información y darle unidad al conjunto.</p>
        </div>
      </section>
      <div className="shell" id="vinilo-aplicacion"><h2>Aplicación</h2></div>
    </>}{project.images.length > 0 && <section className={project.slug === "siac-salud" ? "case-gallery case-gallery--siac" : project.slug === "100-anos-diseno-comunicacion-argentina" ? "case-gallery case-gallery--editorial" : "shell case-gallery"} aria-label={`Galería de ${project.title}`}>{project.images.map((item, i) => <figure key={`${item.src}-${i}`} className={item.layout === "full" ? "gallery-full" : "gallery-half"} data-reveal><Image src={item.src} alt={item.alt} width={item.layout === "full" ? 1600 : 800} height={1000} sizes={project.slug === "siac-salud" ? "100vw" : project.slug === "100-anos-diseno-comunicacion-argentina" ? "100vw" : item.layout === "full" ? "92vw" : "(max-width: 600px) 92vw, 46vw"} /></figure>)}</section>}{project.mockups.length > 0 && <section className="shell case-mockups"><div className="section-topline"><h2>DEL DISEÑO A LA EXPERIENCIA</h2><span>03 / APLICACIONES</span></div>{project.mockups.map((item, i) => <Image key={i} src={item.src} alt={item.alt} width={1600} height={1000} sizes="92vw" />)}</section>}<nav className="project-pagination shell" aria-label="Más proyectos"><Link href={`/proyectos/${previous.slug}/`}><span>← PROYECTO ANTERIOR</span><strong>{previous.title}</strong></Link><Link href={`/proyectos/${next.slug}/`}><span>SIGUIENTE PROYECTO →</span><strong>{next.title}</strong></Link></nav><div className="case-contact"><Link className="text-link" href="/#contacto">¿Creamos algo juntos? <Arrow diagonal /></Link></div></main>;
}
