import Image from "next/image";

const software = [
  { id: "illustrator", name: "Adobe Illustrator" },
  { id: "photoshop", name: "Adobe Photoshop" },
  { id: "indesign", name: "Adobe InDesign" },
  { id: "figma", name: "Figma" },
  { id: "canva", name: "Canva" },
  { id: "capcut", name: "CapCut" },
  { id: "excel", name: "Microsoft Excel" },
  { id: "word", name: "Microsoft Word" },
  { id: "acrobat", name: "Adobe Acrobat" },
];

export function SoftwareBar() {
  return <section className="software-bar" aria-labelledby="software-title">
    <div className="shell software-inner">
      <h2 id="software-title"><span aria-hidden="true">✦</span> Herramientas<br />que uso</h2>
      <ul className="software-list">{software.map(tool => <li key={tool.id}>
        <span className={`software-icon software-icon--${tool.id}`} aria-hidden="true">
          {tool.id === "indesign" ? <span className="software-indesign">Id</span> : <Image src={`/images/software/${tool.id}.webp`} alt="" width={64} height={64} />}
        </span>
        <span className="software-name">{tool.name}</span>
      </li>)}</ul>
    </div>
  </section>;
}
