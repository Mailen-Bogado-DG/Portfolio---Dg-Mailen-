import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Arrow } from "./Icons";

export function ProjectItem({ project }: { project: Project }) {
  return <article className="project-item" data-reveal><Link href={`/proyectos/${project.slug}/`} className="project-link" aria-label={`Ver proyecto ${project.title}`}><div className="project-heading"><span className="project-number">{String(project.id).padStart(2, "0")}</span><h3>{project.title}</h3><span className="project-meta">{project.category}{project.year && <span> / {project.year}</span>}</span><span className="project-arrow"><Arrow diagonal /></span></div><div className="project-image-wrap"><Image src={project.cover} alt={project.coverAlt} width={1600} height={1000} className="project-image" sizes="(max-width: 767px) 100vw, 92vw" /><span className="view-project">VER PROYECTO <Arrow diagonal /></span>{project.isPlaceholder && <span className="project-sample">PROYECTO CONCEPTUAL</span>}</div></Link></article>;
}
