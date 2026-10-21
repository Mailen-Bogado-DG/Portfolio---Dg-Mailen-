export type EducationItem = {
  id: string;
  title: string;
  institution: string;
  year: string;
  type: "Título" | "Certificado" | "Curso" | "Organización";
  image?: string;
  additionalImages?: string[];
  isPlaceholder?: boolean;
};

export const education: EducationItem[] = [
  { id: "diseno", title: "Diseño Gráfico", institution: "Universidad Nacional del Nordeste · Facultad de Arquitectura y Urbanismo", year: "2025", type: "Título", image: "/images/certificates/titulo-diseno.png" },
  { id: "strategic-design", title: "Masterclass in Strategic Design", institution: "FAU · UNNE / Politécnico de Milán", year: "2026", type: "Certificado", image: "/images/certificates/formacion-6.png" },
  { id: "licencias", title: "Licencias Tipográficas", institution: "Tipografía I y II · FAU · UNNE", year: "2023", type: "Organización", image: "/images/certificates/formacion-5.png" },
  { id: "encuentro", title: "1.º Encuentro Internacional “Diseño con Todos”", institution: "FAU · UNNE", year: "2023", type: "Certificado", image: "/images/certificates/formacion-4.png" },
  { id: "branding", title: "Hablemos de Branding", institution: "FAU en Línea · UNNE", year: "2020", type: "Certificado", image: "/images/certificates/formacion-3.png" },
  { id: "narrativas", title: "Narrativas Migrantes", institution: "Carrera de Diseño Gráfico · FAU · UNNE", year: "2020", type: "Certificado", image: "/images/certificates/formacion-1.png", additionalImages: ["/images/certificates/formacion-2.png"] },
];
