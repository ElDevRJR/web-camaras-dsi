
export interface ServiceNavItem {
  title: string;
  slug: string;
  path: string;
  shortDesc: string;
  iconName: string;
}

export interface ServiceCategory {
  name: string;
  badge: string;
  description: string;
  items: ServiceNavItem[];
}

export const navigationCategories: ServiceCategory[] = [
  {
    name: "Seguridad Electrónica",
    badge: "Protección Activa",
    description:
      "Sistemas integrados de control perimetral, videovigilancia y respuesta temprana.",
    items: [
      {
        title: "Cámaras de Seguridad",
        slug: "camaras-de-seguridad",
        path: "/servicios/camaras-de-seguridad",
        shortDesc:
          "Equipamiento profesional de alta resolución para interiores y exteriores.",
        iconName: "Camera",
      },
      {
        title: "Instalación de Cámaras",
        slug: "instalacion-de-camaras",
        path: "/servicios/instalacion-de-camaras",
        shortDesc:
          "Montaje técnico, canalización y alineación milimétrica de campo visual.",
        iconName: "Wrench",
      },
      {
        title: "Sistemas de Videovigilancia",
        slug: "sistemas-de-videovigilancia",
        path: "/servicios/sistemas-de-videovigilancia",
        shortDesc:
          "Arquitectura integral de grabación NVR/VMS y visualización centralizada.",
        iconName: "Video",
      },
      {
        title: "Sistemas Analógicos e IP",
        slug: "sistemas-analogicos-e-ip",
        path: "/servicios/sistemas-analogicos-e-ip",
        shortDesc:
          "Análisis técnico y migración entre tecnología coaxial tradicional y PoE IP.",
        iconName: "Cpu",
      },
      {
        title: "Sensores de Movimiento",
        slug: "sensores-de-movimiento",
        path: "/servicios/sensores-de-movimiento",
        shortDesc:
          "Detección infrarroja pasiva y microondas con filtrado de falsas alarmas.",
        iconName: "Radio",
      },
      {
        title: "Sistemas de Intrusión",
        slug: "sistemas-de-intrusion",
        path: "/servicios/sistemas-de-intrusion",
        shortDesc:
          "Disuasión perimetral, contactos magnéticos y paneles zonificados.",
        iconName: "ShieldAlert",
      },
      {
        title: "Cercos Perimétricos",
        slug: "cercos-perimetricos",
        path: "/servicios/cercos-perimetricos",
        shortDesc:
          "Protección perimetral disuasiva con electrificación homologada y sensorizado.",
        iconName: "Fence",
      },
      {
        title: "Sistemas Contra Incendios",
        slug: "sistemas-contra-incendios",
        path: "/servicios/sistemas-contra-incendios",
        shortDesc:
          "Detectores de humo fotoeléctricos, pulsadores y paneles de señalización.",
        iconName: "Flame",
      },
    ],
  },
  {
    name: "Redes e Infraestructura",
    badge: "Conectividad",
    description:
      "Ingeniería de telecomunicaciones estructurada para alto tráfico y baja latencia.",
    items: [
      {
        title: "Redes y Cableado Estructurado",
        slug: "redes-y-cableado-estructurado",
        path: "/servicios/redes-y-cableado-estructurado",
        shortDesc:
          "Racks de comunicaciones, patch panels certificados Cat6/6A y fibra óptica.",
        iconName: "Network",
      },
    ],
  },
  {
    name: "Domótica",
    badge: "Automatización Inteligente",
    description:
      "Soluciones de automatización y control inteligente para hogares y espacios comerciales.",
    items: [
      {
        title: "Sistemas de Domótica",
        slug: "domotica",
        path: "/domotica",
        shortDesc:
          "Control inteligente de iluminación, ambientes y dispositivos desde una solución integrada.",
        iconName: "Cpu",
      },
    ],
  },
  {
    name: "Soluciones Visuales",
    badge: "Gran Formato",
    description:
      "Display digital de alto impacto para retail, fachadas y espacios corporativos.",
    items: [
      {
        title: "Pantallas LED",
        slug: "pantallas-led",
        path: "/servicios/pantallas-led",
        shortDesc:
          "Módulos modulares indoor y outdoor con alto brillo y calibración de color.",
        iconName: "Tv",
      },
    ],
  },
  {
    name: "Electricidad e Iluminación",
    badge: "Ambientes & Energía",
    description:
      "Instalaciones eléctricas industriales, iluminación arquitectónica LED y control RGB+.",
    items: [
      {
        title: "Electricidad e Iluminación LED/RGB+",
        slug: "electricidad-e-iluminacion",
        path: "/servicios/electricidad-e-iluminacion",
        shortDesc:
          "Cuadros eléctricos, líneas dedicadas, tiras LED de alta fidelidad y escenas RGB+.",
        iconName: "Zap",
      },
    ],
  },
];

export const mainNavLinks = [
  { label: "Inicio", path: "/" },
  { label: "Servicios", path: "/servicios", hasMegaMenu: true },
  { label: "Proyectos", path: "/proyectos" },
  { label: "Nosotros", path: "/nosotros" },
  { label: "Contacto", path: "/contacto" },
];
