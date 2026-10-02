import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
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
  return <main id="contenido" className="case-study"><div className="shell case-header"><Link href="/#trabajos" className="text-link back-link"><Arrow /> Volver a Trabajos</Link><div className="case-label"><span>PROYECTO {String(project.id).padStart(2, "0")}</span><span>{project.category}{project.year && ` / ${project.year}`}</span></div><h1>{project.title}<span className="pink-dot">.</span></h1>{project.description && <p className="case-lead">{project.description}</p>}{project.isPlaceholder && <p className="sample-note">Proyecto conceptual de muestra</p>}</div><div className="case-cover"><Image src={project.cover} alt={project.coverAlt} width={1600} height={1000} priority sizes="100vw" /></div>{(project.context || project.process) && <div className="shell case-story"><aside><span className="eyebrow">EL PROYECTO</span><h2>Una idea.<br/>Todo un universo.</h2><ul>{project.services.map(service => <li key={service}>{service}</li>)}</ul></aside><div><section data-reveal><span className="eyebrow">01 / CONTEXTO</span><h2>El punto de partida</h2><p>{project.context}</p></section><section data-reveal><span className="eyebrow">02 / PROCESO</span><h2>Del concepto a la forma</h2><p>{project.process}</p></section></div></div>}{project.images.length > 0 && <section className="shell case-gallery" aria-label={`Galería de ${project.title}`}>{project.images.map((item, i) => <figure key={`${item.src}-${i}`} className={item.layout === "full" ? "gallery-full" : "gallery-half"} data-reveal><Image src={item.src} alt={item.alt} width={item.layout === "full" ? 1600 : 800} height={1000} sizes={item.layout === "full" ? "92vw" : "(max-width: 600px) 92vw, 46vw"} /></figure>)}</section>}{project.mockups.length > 0 && <section className="shell case-mockups"><div className="section-topline"><h2>DEL DISEÑO A LA EXPERIENCIA</h2><span>03 / APLICACIONES</span></div>{project.mockups.map((item, i) => <Image key={i} src={item.src} alt={item.alt} width={1600} height={1000} sizes="92vw" />)}</section>}<nav className="project-pagination shell" aria-label="Más proyectos"><Link href={`/proyectos/${previous.slug}/`}><span>← PROYECTO ANTERIOR</span><strong>{previous.title}</strong></Link><Link href={`/proyectos/${next.slug}/`}><span>SIGUIENTE PROYECTO →</span><strong>{next.title}</strong></Link></nav><div className="case-contact"><Link className="text-link" href="/#contacto">¿Creamos algo juntos? <Arrow diagonal /></Link></div></main>;
}
