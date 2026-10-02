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
    "cover": "/images/projects/artise-fundacion.png",
    "coverAlt": "Logotipo azul de Artise Fundación con un oso hormiguero",
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
    "cover": "/images/projects/date-un-break.svg",
    "coverAlt": "Date un Break, campaña contra la ansiedad en amarillo y violeta",
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
    "cover": "/images/projects/ahorro-de-energia.svg",
    "coverAlt": "Ilustración en blanco y negro de enchufes para Ahorro de energía",
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
    "cover": "/images/projects/disco-de-vinilo.svg",
    "coverAlt": "Diseño de portada y disco de vinilo Black Gospel",
    "description": "",
    "context": "",
    "process": "",
    "services": [],
    "images": [],
    "mockups": [],
    "isPlaceholder": false
  },
  {
    "id": 5,
    "slug": "torneo-abierto-del-nordeste",
    "title": "Torneo Abierto del Nordeste",
    "category": "Diseño para eventos",
    "year": "",
    "cover": "/images/projects/torneo-abierto-del-nordeste.svg",
    "coverAlt": "Pieza gráfica del Torneo Abierto del Nordeste sobre un campo de golf",
    "description": "",
    "context": "",
    "process": "",
    "services": [],
    "images": [],
    "mockups": [],
    "isPlaceholder": false
  },
  {
    "id": 6,
    "slug": "siac-salud",
    "title": "Siac Salud",
    "category": "Identidad visual",
    "year": "",
    "cover": "/images/projects/siac-salud.svg",
    "coverAlt": "Logotipo de Siac Salud con una mascota blanca y letras azules",
    "description": "",
    "context": "",
    "process": "",
    "services": [],
    "images": [],
    "mockups": [],
    "isPlaceholder": false
  },
  {
    "id": 7,
    "slug": "meb-personalizados",
    "title": "Meb Personalizados",
    "category": "Identidad visual",
    "year": "",
    "cover": "/images/projects/meb-personalizados.png",
    "coverAlt": "Identidad de Meb Personalizados en blanco sobre fondo violeta",
    "description": "",
    "context": "",
    "process": "",
    "services": [],
    "images": [],
    "mockups": [],
    "isPlaceholder": false
  }
];
