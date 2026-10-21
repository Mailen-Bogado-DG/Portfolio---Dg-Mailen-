import { SoftwareBar } from "./SoftwareBar";
import { projects } from "@/data/projects";
import { ProjectItem } from "./ProjectItem";
import { Arrow } from "./Icons";

export function Projects() {
  return <section id="trabajos" className="projects section-space">
    <SoftwareBar />
    <div className="projects-banner">
      <div className="shell">
        <div className="section-topline"><span>UNA SELECCIÓN DE IDEAS HECHAS DISEÑO</span><span>01 — {String(projects.length).padStart(2, "0")}</span></div>
        <div className="section-heading" data-reveal><h2>TRABAJOS<span className="title-count">({String(projects.length).padStart(2, "0")})</span></h2><Arrow className="section-arrow" /></div>
      </div>
    </div>
    <div className="shell project-list">{projects.map(project => <ProjectItem key={project.id} project={project} />)}</div>
  </section>;
}
