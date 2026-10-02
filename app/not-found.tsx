import Link from "next/link";

export default function NotFound() {
  return <main id="contenido" className="not-found shell"><span className="eyebrow">ERROR 404</span><h1>Esta idea todavía<br/>no tiene página.</h1><p>El enlace no existe o el proyecto cambió de dirección.</p><Link className="whatsapp-button" href="/#trabajos">VOLVER A TRABAJOS ↗</Link></main>;
}
