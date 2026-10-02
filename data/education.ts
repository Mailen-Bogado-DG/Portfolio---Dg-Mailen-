export type EducationItem = {
  id: string;
  title: string;
  institution: string;
  year: string;
  type: "Título" | "Certificado" | "Curso";
  image?: string;
  isPlaceholder?: boolean;
};

// Ejemplos: completar con estudios, instituciones y fechas reales.
export const education: EducationItem[] = [
  { id: "diseno", title: "Diseño gráfico", institution: "Institución por completar", year: "2026", type: "Título", image: "/images/certificates/certificate-01.svg", isPlaceholder: true },
  { id: "branding", title: "Branding e identidad visual", institution: "Institución por completar", year: "2025", type: "Certificado", image: "/images/certificates/certificate-02.svg", isPlaceholder: true },
  { id: "editorial", title: "Diseño editorial", institution: "Institución por completar", year: "2025", type: "Curso", isPlaceholder: true },
];
