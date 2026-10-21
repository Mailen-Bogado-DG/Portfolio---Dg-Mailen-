export type ProjectImage = { src: string; alt: string; layout: "full" | "half" };
export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  coverAlt: string;
  description: string;
  context: string;
  process: string;
  services: string[];
  images: ProjectImage[];
  mockups: ProjectImage[];
  isPlaceholder: boolean;
};

export const projects: Project[] = [
  {
    "id": 1,
    "slug": "artise-fundacion",
    "title": "Artise Fundación",
    "category": "Identidad visual",
    "year": "",
    "cover": "/images/projects/artise-merchandising.png",
    "coverAlt": "Identidad de Artise Fundación aplicada a remeras, tazas, barbijos y llaveros sobre fondo lila",
    "description": "",
    "context": "",
    "process": "",
    "services": [],
    "images": [],
    "mockups": [],
    "isPlaceholder": false
  },
  {
    "id": 2,
    "slug": "date-un-break",
    "title": "Date un Break",
    "category": "Campaña gráfica",
    "year": "",
    "cover": "/images/projects/date-un-break-campana.png",
    "coverAlt": "Date un Break: campaña contra la ansiedad con fondo amarillo, formas fucsias y dibujos negros",
    "description": "",
    "context": "",
    "process": "",
    "services": [],
    "images": [],
    "mockups": [],
    "isPlaceholder": false
  },
  {
    "id": 3,
    "slug": "ahorro-de-energia",
    "title": "Ahorro de energía",
    "category": "Ilustración",
    "year": "",
    "cover": "/images/projects/ahorro-de-energia-aparatos.png",
    "coverAlt": "Enchufes preocupados rodeados de ilustraciones coloridas de lámparas y aparatos eléctricos",
    "description": "",
    "context": "",
    "process": "",
    "services": [],
    "images": [],
    "mockups": [],
    "isPlaceholder": false
  },
  {
    "id": 4,
    "slug": "disco-de-vinilo",
    "title": "Disco de Vinilo",
    "category": "Diseño discográfico",
    "year": "",
    "cover": "/images/projects/black-gospel-vinilo.png",
    "coverAlt": "Portada crema y amarilla de Black Gospel junto a un disco de vinilo sobre un fondo claro",
    "description": "",
    "context": "",
    "process": "",
    "services": [],
    "images": [{ "src": "/images/projects/disco-vinilo-pagina-1.png", "alt": "Página 1 del proyecto Black Gospel: diseño desplegado del disco de vinilo", "layout": "full" }],
    "mockups": [],
    "isPlaceholder": false
  },
  {
    "id": 5,
    "slug": "torneo-abierto-del-nordeste",
    "title": "Torneo Abierto del Nordeste",
    "category": "Diseño para eventos",
    "year": "",
    "cover": "/images/projects/05-abierto-del-nordeste.svg",
    "coverAlt": "Pieza gráfica del Torneo Abierto del Nordeste sobre un campo de golf",
    "description": "",
    "context": "",
    "process": "",
    "services": [],
    "images": [{ "src": "/images/projects/torneo-panel-identidad-hd.png", "alt": "Identidad visual y concepto del Torneo Abierto del Nordeste", "layout": "full" }, { "src": "/images/projects/torneo-panel-aplicaciones-hd.png", "alt": "Aplicaciones digitales, institucionales y merchandising del Torneo Abierto del Nordeste", "layout": "full" }],
    "mockups": [],
    "isPlaceholder": false
  },
  {
    "id": 6,
    "slug": "siac-salud",
    "title": "Siac Salud",
    "category": "Identidad visual",
    "year": "",
    "cover": "/images/projects/siac-salud-alta-calidad-4k.png",
    "coverAlt": "Logotipo de Siac Salud con una mascota y letras blancas sobre fondo azul",
    "description": "",
    "context": "",
    "process": "",
    "services": [],
    "images": [{"src": "/images/projects/siac-panel-intervencion.png", "alt": "Siac Salud: proyecto de intervención, contexto, objetivos y respaldo institucional", "layout": "full"}, {"src": "/images/projects/siac-panel-piezas.png", "alt": "Siac Salud: planimetría, señalización modular y gestor de turnos", "layout": "full"}, {"src": "/images/projects/siac-panel-piezas-2.png", "alt": "Siac Salud: señalización de edificios, plantas, servicios y áreas", "layout": "full"}, {"src": "/images/projects/siac-panel-diseno.png", "alt": "Siac Salud: fundamentos de diseño, paleta cromática, pictogramas y acompañante visual Milo", "layout": "full"}],
    "mockups": [],
    "isPlaceholder": false
  },
  {
    "id": 7,
    "slug": "meb-personalizados",
    "title": "Meb Personalizados",
    "category": "Identidad visual",
    "year": "",
    "cover": "/images/projects/meb-personalizados-cover.svg",
    "coverAlt": "Identidad de Meb Personalizados en blanco sobre fondo violeta",
    "description": "",
    "context": "",
    "process": "",
    "services": [],
    "images": [],
    "mockups": [],
    "isPlaceholder": false
  },
{
  "id": 8,
  "slug": "100-anos-diseno-comunicacion-argentina",
  "title": "100 AÑOS DE DISEÑO Y COMUNICACIÓN EN ARGENTINA",
  "category": "Diseño editorial",
  "year": "",
  "cover": "/images/projects/100-anos-diseno-argentino.png",
  "coverAlt": "Cubierta de 100 años de diseño y comunicación en Argentina, con ilustraciones en rojo y azul",
  "description": "",
  "context": "",
  "process": "",
  "services": [],
  "images": [
  {
    "src": "/images/projects/100-anos-tapa.png",
    "alt": "Tapa del libro de 100 años de diseño y comunicación en Argentina",
    "layout": "half"
  },
  {
    "src": "/images/projects/100-anos-tapa-contra.png",
    "alt": "Tapa y contratapa del libro de 100 años de diseño y comunicación en Argentina",
    "layout": "half"
  },
  {
    "src": "/images/projects/100-anos-segundas-paginas.png",
    "alt": "Créditos e índice de 100 años de diseño y comunicación en Argentina",
    "layout": "half"
  },
  {
    "src": "/images/projects/100-anos-primeras-paginas.png",
    "alt": "Primeras páginas del libro de 100 años de diseño y comunicación en Argentina",
    "layout": "half"
  },
  {
    "src": "/images/projects/100-anos-doble-44-45.png",
    "alt": "Doble página interior 44 y 45 de 100 años de diseño y comunicación en Argentina",
    "layout": "half"
  },
  {
    "src": "/images/projects/100-anos-doble-46-47.png",
    "alt": "Doble página interior 46 y 47 de 100 años de diseño y comunicación en Argentina",
    "layout": "half"
  }
],
  "mockups": [],
  "isPlaceholder": false
}
];
