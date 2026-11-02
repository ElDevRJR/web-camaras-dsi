
export interface ClientProject {
  slug: string;
  name: string;
  category: string;
  sector: string;
  tagline: string;
  summary: string;
  isConfirmedClient: boolean;
  servicesRenderedPlaceholder: string[];
  executionScopePlaceholder: string;
  primaryImage: string;
  galleryPlaceholders: {
    caption: string;
    description: string;
    aspectRatio: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const projectsData: ClientProject[] = [
  {
    slug: "sazon-de-la-lena",
    name: "Sazón de la Leña",
    category: "Seguridad e infraestructura",
    sector: "Sector gastronómico",
    tagline: "Tecnología integrada para espacios gastronómicos.",
    summary:
      "Implementación de soluciones tecnológicas orientadas a la seguridad, conectividad y ambientación de espacios comerciales.",
    isConfirmedClient: true,
    servicesRenderedPlaceholder: [
      "Videovigilancia",
      "Infraestructura de red",
      "Iluminación",
      "Seguridad electrónica"
    ],
    executionScopePlaceholder: "",
    primaryImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    galleryPlaceholders: [
      {
        caption: "Espacios comerciales",
        description: "Ambientes del establecimiento.",
        aspectRatio: "16:9"
      }
    ],
    specifications: [
      { label: "Cliente", value: "Sazón de la Leña" },
      { label: "Sector", value: "Gastronomía" }
    ]
  },
  {
    slug: "ato-xpress",
    name: "Ato Xpress",
    category: "Seguridad e infraestructura",
    sector: "Sector logístico",
    tagline: "Soluciones tecnológicas para operaciones logísticas.",
    summary:
      "Proyecto orientado a la integración de soluciones de seguridad e infraestructura para espacios de trabajo y operaciones logísticas.",
    isConfirmedClient: true,
    servicesRenderedPlaceholder: [
      "Seguridad electrónica",
      "Infraestructura de red",
      "Cableado estructurado"
    ],
    executionScopePlaceholder: "",
    primaryImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    galleryPlaceholders: [
      {
        caption: "Infraestructura logística",
        description: "Espacios de operación y almacenamiento.",
        aspectRatio: "16:9"
      }
    ],
    specifications: [
      { label: "Cliente", value: "Ato Xpress" },
      { label: "Sector", value: "Logística y distribución" }
    ]
  },
  {
    slug: "takis",
    name: "Takis",
    category: "Iluminación",
    sector: "Sector comercial",
    tagline: "Iluminación y presencia visual para espacios de marca.",
    summary:
      "Trabajos de iluminación y ambientación visual mediante luces neón, aportando identidad y presencia a los espacios comerciales.",
    isConfirmedClient: true,
    servicesRenderedPlaceholder: [
      "Instalación de luces neón",
      "Iluminación de espacios comerciales",
      "Ambientación visual"
    ],
    executionScopePlaceholder: "",
    primaryImage: "/images/takis.jpg",
    galleryPlaceholders: [
      {
        caption: "Iluminación de marca",
        description: "Instalaciones de luces neón.",
        aspectRatio: "16:9"
      },
      {
        caption: "Ambientación visual",
        description: "Detalles de iluminación en espacios comerciales.",
        aspectRatio: "4:3"
      },
      {
        caption: "Detalles del proyecto",
        description: "Registro fotográfico de los trabajos realizados.",
        aspectRatio: "4:3"
      }
    ],
    specifications: [
      { label: "Cliente", value: "Takis" },
      { label: "Sector", value: "Comercial" },
      { label: "Especialidad", value: "Iluminación y ambientación" }
    ]
  },
  {
    slug: "movistar",
    name: "Movistar",
    category: "Iluminación",
    sector: "Eventos y ferias",
    tagline: "Iluminación para ferias y espacios de exhibición.",
    summary:
      "Trabajos de iluminación para espacios de feria y exhibición comercial, contribuyendo a crear ambientes visuales atractivos para la presentación de marca.",
    isConfirmedClient: true,
    servicesRenderedPlaceholder: [
      "Iluminación de ferias",
      "Ambientación de espacios",
      "Iluminación comercial"
    ],
    executionScopePlaceholder: "",
    primaryImage: "/images/movistar.jpg",
    galleryPlaceholders: [
      {
        caption: "Iluminación de feria",
        description: "Registro de los espacios iluminados.",
        aspectRatio: "16:9"
      },
      {
        caption: "Ambientación comercial",
        description: "Detalles de iluminación del evento.",
        aspectRatio: "4:3"
      }
    ],
    specifications: [
      { label: "Cliente", value: "Movistar" },
      { label: "Sector", value: "Eventos y ferias" },
      { label: "Especialidad", value: "Iluminación comercial" }
    ]
  }
];
