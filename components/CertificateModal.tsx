"use client";

import { useEffect, useRef } from "react";
import type { EducationItem } from "@/data/education";

export function CertificateModal({ item, onClose }: { item: EducationItem | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!item || !dialog) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = oldOverflow; previousFocus?.focus(); };
  }, [item]);
  return <dialog ref={ref} className="certificate-dialog" aria-labelledby="certificate-title" onCancel={onClose} onClose={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    {item && <div className="certificate-content"><div className="certificate-toolbar"><h2 id="certificate-title">{item.title}</h2><button autoFocus className="close-modal" type="button" onClick={onClose} aria-label="Cerrar certificado">×</button></div>{item.image && <img src={item.image} alt={`Certificado de ${item.title}${item.isPlaceholder ? ": documento de muestra sin validez académica" : ""}`} width="1200" height="850" />}<p>{item.isPlaceholder ? "Documento de muestra · Reemplazar por el certificado real" : `${item.institution} · ${item.year}`}</p></div>}
  </dialog>;
}
