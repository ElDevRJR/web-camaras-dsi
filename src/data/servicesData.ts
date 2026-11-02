export interface ServiceDetail {
  slug: string;
  title: string;
  kicker: string;
  category: string;
  heroTagline: string;
  heroDescription: string;
  primaryImage: string;
  secondaryImage: string;
  overview: string;
  applications: {
    segment: string;
    description: string;
    useCases: string[];
  }[];
  technicalSpecs: {
    label: string;
    value: string;
  }[];
  keyBenefits: {
    title: string;
    description: string;
  }[];
  workflowSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  comparison?: {
    title: string;
    subtitle: string;
    items: {
      feature: string;
      optionA: string;
      optionB: string;
    }[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    title: string;
    slug: string;
    path: string;
  }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "camaras-de-seguridad": {
    slug: "camaras-de-seguridad",
    title: "Cámaras de Seguridad Profesionales",
    kicker: "01. Captura Óptica & Vigilancia Activa",
    category: "Seguridad Electrónica",
    heroTagline: "Claridad visual milimétrica en cualquier condición de luz y entorno.",
    heroDescription: "Soluciones de captura de video con óptica de precisión para recintos comerciales, centros corporativos y perímetros residenciales de alto requerimiento.",
    primaryImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?auto=format&fit=crop&w=1200&q=80",
    overview: "Las cámaras de seguridad constituyen la primera línea de supervisión y registro perimetral. Integramos dispositivos de grado comercial con sensores ópticos de alta sensibilidad lumínica, protección contra la intemperie (clasificación IP66/IP67/IK10) y lentes varifocales motorizados para obtener el ángulo de cobertura exacto que cada punto arquitectónico exige.",
    applications: [
      {
        segment: "Comercial & Retail",
        description: "Monitoreo de puntos de venta, accesos de clientes, góndolas de alto valor y áreas de almacenamiento.",
        useCases: ["Prevención de pérdidas en caja", "Auditoría de flujo de clientes", "Control de trastienda"]
      },
      {
        segment: "Corporativo & Oficinas",
        description: "Supervisión discreta de áreas comunes, salas de servidores, estacionamientos y halls de recepción.",
        useCases: ["Registro de ingresos de visitantes", "Protección de centros de datos", "Control perimetral"]
      },
      {
        segment: "Industrial & Logística",
        description: "Cámaras tipo bullet y PTZ con visión nocturna infrarroja extendida y carcasas antivandálicas.",
        useCases: ["Andenes de carga y descarga", "Patios de maniobras", "Líneas de ensamblaje"]
      }
    ],
    technicalSpecs: [
      { label: "Formatos Disponibles", value: "Domo antivandálico, Bullet exterior, PTZ 360°, Ojo de Pez (Fisheye)" },
      { label: "Rangos de Resolución", value: "2MP (Full HD), 4MP (2K Quad HD) hasta 8MP (Ultra HD 4K)" },
      { label: "Tecnología Lumínica", value: "Sensores Ultra Low-Light, IR inteligente hasta 80m, Luz blanca cálida" },
      { label: "Protección Estructural", value: "Clasificación intemperie IP67 y resistencia mecánica IK10" }
    ],
    keyBenefits: [
      {
        title: "Disuasión y Registro Forense",
        description: "La visibilidad controlada del hardware reduce incidencias, mientras la grabación de alta tasa de bits asegura evidencia nítida."
      },
      {
        title: "Adaptabilidad Óptica",
        description: "Selección rigurosa de lentes fijas o varifocales según la distancia focal requerida por la geometría del recinto."
      },
      {
        title: "Compresión de Video Eficiente",
        description: "Codificación avanzada H.265+ que optimiza el consumo de ancho de banda y maximiza los días de almacenamiento."
      }
    ],
    workflowSteps: [
      { step: "01", title: "Levantamiento de Planos y Ángulos", description: "Inspección técnica de puntos ciegos, fuentes de contraluz y distancias críticas de identificación." },
      { step: "02", title: "Selección de Ópticas y Carcasas", description: "Definición del tipo de lente y nivel de protección ambiental adecuado para cada zona." },
      { step: "03", title: "Tendido de Conexiones y Canalizado", description: "Implementación de cableado certificado y tuberías de protección según normativa técnica." },
      { step: "04", title: "Enfoque y Calibración de Campo", description: "Ajuste milimétrico del sensor y configuración de balances de blancos y contraluz." }
    ],
    faqs: [
      {
        question: "¿Qué diferencia existe entre una cámara domo y una tipo bullet?",
        answer: "Las cámaras domo están diseñadas principalmente para techos o aleros interiores y exteriores con carcasa semiesférica antivandálica que dificulta saber hacia dónde apuntan. Las cámaras bullet sobresalen en muros exteriores y ofrecen mayor alcance infrarrojo focalizado."
      },
      {
        question: "¿Puedo ver las cámaras de forma remota en dispositivos móviles?",
        answer: "Sí, cuando se integran a una grabadora NVR o DVR con salida de red configurada, la visualización en vivo y reproducción de grabaciones está disponible mediante aplicaciones móviles seguras y software cliente en PC."
      }
    ],
    relatedServices: [
      { title: "Instalación de Cámaras", slug: "instalacion-de-camaras", path: "/servicios/instalacion-de-camaras" },
      { title: "Sistemas de Videovigilancia", slug: "sistemas-de-videovigilancia", path: "/servicios/sistemas-de-videovigilancia" },
      { title: "Sistemas Analógicos e IP", slug: "sistemas-analogicos-e-ip", path: "/servicios/sistemas-analogicos-e-ip" }
    ]
  },

  "instalacion-de-camaras": {
    slug: "instalacion-de-camaras",
    title: "Servicio Técnico de Instalación de Cámaras",
    kicker: "02. Montaje Estructural & Canalización",
    category: "Seguridad Electrónica",
    heroTagline: "Ingeniería de montaje que asegura cobertura sin puntos ciegos ni cables expuestos.",
    heroDescription: "Ejecución técnica con estándares de canalizado rígido, certificación de conexiones y calibración visual profesional adaptada a la arquitectura del inmueble.",
    primaryImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=80",
    overview: "El rendimiento de un sistema de cámaras depende fundamentalmente de la calidad de su montaje físico y eléctrico. Un equipo de alta gama pierde efectividad si se instala con ángulos erróneos, fuentes con ruido eléctrico o canalizaciones vulnerables al corte. Nuestro servicio aborda el proyecto desde la fijación mecánica y la estética del cableado hasta el conexionado estanco de intemperie.",
    applications: [
      {
        segment: "Espacios Comerciales",
        description: "Instalación oculta en falso cielo o canaleta decorativa de grado arquitectónico para preservar la estética de la tienda.",
        useCases: ["Locales gastronómicos", "Boutiques", "Salas de exhibición"]
      },
      {
        segment: "Plantas Industriales & Almacenes",
        description: "Montaje sobre vigas, postes o muros de concreto mediante tubería conduit metálica EMT y cajas de paso herméticas.",
        useCases: ["Hangares", "Centros de distribución", "Playas de estacionamiento"]
      },
      {
        segment: "Edificios & Condominios",
        description: "Distribución troncal vertical por montantes técnicas y enlaces perimetrales soterrados.",
        useCases: ["Lobbies", "Ascensores", "Perímetros residenciales"]
      }
    ],
    technicalSpecs: [
      { label: "Canalizaciones Soportadas", value: "Tubería EMT galvanizada, PVC pesado sap, bandejas portacables, canaletas con tabique" },
      { label: "Fijación y Soportes", value: "Bases de montaje estancas (Junction Box), brazos en L, abrazaderas para poste" },
      { label: "Protección Eléctrica", value: "Conexión a tierra de racks, supresores de transitorios y fuentes reguladas" },
      { label: "Herramientas de Ajuste", value: "Monitores portátiles de prueba de video y comprobadores de continuidad de red" }
    ],
    keyBenefits: [
      {
        title: "Canalización Oculta y Protegida",
        description: "Protección física de los cables frente a manipulaciones no autorizadas, roedores y degradación UV."
      },
      {
        title: "Calibración Óptica en Sitio",
        description: "Verificación en tiempo real del área de cobertura para validar que los accesos y áreas críticas no tengan sombras."
      },
      {
        title: "Estética y Respeto Arquitectónico",
        description: "Trazados limpios y nivelados que se integran con armonía en las líneas del edificio o local comercial."
      }
    ],
    workflowSteps: [
      { step: "01", title: "Evaluación Estructural en Campo", description: "Verificación de muros, alturas de techo, puntos de energía y trazado de rutas de cableado." },
      { step: "02", title: "Montaje de Canalizaciones y Cajas", description: "Instalación de tuberías o ductos y cajas de paso con sellado para intemperie." },
      { step: "03", title: "Tendido de Conductor y Conectorizado", description: "Pase de cable UTP o coaxial de cobre puro, rematado y etiquetado en ambos extremos." },
      { step: "04", title: "Fijación de Dispositivos y Apuntamiento", description: "Montaje físico de la cámara, ajuste de tornillos de torsión y fijación del ángulo final." },
      { step: "05", title: "Prueba de Carga y Entrega", description: "Verificación de señal continua, ausencia de parpadeo y comprobación con el cliente." }
    ],
    faqs: [
      {
        question: "¿Qué tipo de canalización es recomendable para exteriores?",
        answer: "Para exteriores y perímetros expuestos se recomienda tubería metálica conduit EMT o IMC con accesorios a prueba de lluvia, o tubería de polietileno de alta densidad (HDPE) si el tendido es enterrado."
      },
      {
        question: "¿Cuánto tiempo toma instalar un sistema estándar?",
        answer: "El tiempo depende del metraje de tubería, la altura de trabajo y el número de puntos. Un sistema de 4 a 8 cámaras en un local comercial suele requerir entre 1 y 2 jornadas de trabajo estructurado."
      }
    ],
    relatedServices: [
      { title: "Cámaras de Seguridad", slug: "camaras-de-seguridad", path: "/servicios/camaras-de-seguridad" },
      { title: "Redes y Cableado Estructurado", slug: "redes-y-cableado-estructurado", path: "/servicios/redes-y-cableado-estructurado" },
      { title: "Sistemas de Videovigilancia", slug: "sistemas-de-videovigilancia", path: "/servicios/sistemas-de-videovigilancia" }
    ]
  },

  "sistemas-de-videovigilancia": {
    slug: "sistemas-de-videovigilancia",
    title: "Sistemas Centralizados de Videovigilancia",
    kicker: "03. Grabación, Almacenamiento & Gestión VMS",
    category: "Seguridad Electrónica",
    heroTagline: "Arquitectura integral de monitoreo en tiempo real, respaldo masivo y análisis de eventos.",
    heroDescription: "Plataformas robustas de videovigilancia diseñadas para gestionar múltiples flujos de video con alta disponibilidad y fácil recuperación de grabaciones históricas.",
    primaryImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=80",
    overview: "Un sistema de videovigilancia corporativo va mucho más allá de un conjunto de cámaras aisladas. Involucra grabadores de red (NVR), sistemas de almacenamiento en disco rígido para videovigilancia (24/7), switches de distribución PoE y estaciones de control visual con monitores profesionales.",
    applications: [
      {
        segment: "Centros de Monitoreo & Vigilancia",
        description: "Salas de control con matriz de video para supervisión de seguridad privada las 24 horas.",
        useCases: ["Muro de pantallas", "Atención de eventos en vivo", "Protocolos de respuesta rápida"]
      },
      {
        segment: "Cadenas Comerciales & Franquicias",
        description: "Centralización de múltiples locales bajo una única plataforma de gestión unificada.",
        useCases: ["Monitoreo remoto de sucursales", "Respaldo fuera de sitio", "Auditoría de operaciones"]
      },
      {
        segment: "Condominios & Urbanizaciones",
        description: "Control de pórticos vehiculares, accesos peatonales y áreas de recreación comunes.",
        useCases: ["Registro de placas vehiculares", "Grabación de portería", "Supervisión perimetral"]
      }
    ],
    technicalSpecs: [
      { label: "Arquitectura de Grabación", value: "NVR Standalone (4 a 128 canales) o Servidores VMS con arreglos RAID" },
      { label: "Discos Duros Especializados", value: "Unidades SATA grado vigilancia diseñadas para escritura continua 24/7" },
      { label: "Ancho de Banda de Entrada", value: "Desde 80 Mbps hasta 512 Mbps según la densidad de cámaras instaladas" },
      { label: "Visualización Multicanal", value: "Salidas de video HDMI 4K independiente, soporte para videowalls y cliente web" }
    ],
    keyBenefits: [
      {
        title: "Búsqueda Rápida de Eventos",
        description: "Filtros de línea temporal por detección de movimiento, cruce de línea o franjas horarias específicas."
      },
      {
        title: "Autonomía Energética",
        description: "Integración con sistemas UPS para mantener la grabación activa incluso ante cortes del suministro eléctrico."
      },
      {
        title: "Escalabilidad Modular",
        description: "Capacidad de agregar canales y módulos de almacenamiento a medida que el negocio amplía sus instalaciones."
      }
    ],
    workflowSteps: [
      { step: "01", title: "Cálculo de Ancho de Banda y Storage", description: "Determinación de gigabytes diarios requeridos según tasa de cuadros (fps), resolución y días de respaldo." },
      { step: "02", title: "Instalación del Núcleo de Grabación", description: "Ubicación del NVR/VMS en rack ventilado y con llave para proteger la integridad física de los discos." },
      { step: "03", title: "Configuración de Red y V-LANs", description: "Segmentación del tráfico de video para no saturar la red de datos corporativa." },
      { step: "04", title: "Capacitación Operativa", description: "Instrucción al personal de seguridad y administración en extracción de clips y visualización." }
    ],
    faqs: [
      {
        question: "¿Cuántos días de grabación puede almacenar el sistema?",
        answer: "Los días de respaldo se dimensionan según la necesidad del cliente y la normativa local (habitualmente 15, 30 o 60 días). Esto se logra calculando la capacidad total de discos duros y aplicando compresión H.265+."
      },
      {
        question: "¿Qué ocurre si se corta la energía eléctrica?",
        answer: "Recomendamos e instalamos un sistema ininterrumpido de energía (UPS) que mantiene en funcionamiento el grabador y las cámaras PoE durante un periodo crítico de respaldo."
      }
    ],
    relatedServices: [
      { title: "Sistemas Analógicos e IP", slug: "sistemas-analogicos-e-ip", path: "/servicios/sistemas-analogicos-e-ip" },
      { title: "Cámaras de Seguridad", slug: "camaras-de-seguridad", path: "/servicios/camaras-de-seguridad" },
      { title: "Redes y Cableado Estructurado", slug: "redes-y-cableado-estructurado", path: "/servicios/redes-y-cableado-estructurado" }
    ]
  },

  "sistemas-analogicos-e-ip": {
    slug: "sistemas-analogicos-e-ip",
    title: "Sistemas Analógicos vs. Tecnología IP",
    kicker: "04. Comparativa Tecnológica & Migración",
    category: "Seguridad Electrónica",
    heroTagline: "Asesoramiento técnico objetivo para seleccionar la infraestructura adecuada.",
    heroDescription: "Análisis comparativo de rendimiento, costes de cableado, escalabilidad y calidad de transmisión entre protocolos coaxiales (HD-TVI/AHD) y redes IP (PoE).",
    primaryImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=80",
    overview: "En el mercado de seguridad electrónica conviven dos arquitecturas principales. La tecnología analógica de alta definición (HD analógico) utiliza cable coaxial o pares trenzados con baluns pasivos, siendo una opción costo-efectiva para distancias moderadas. Por otro lado, la tecnología IP transmite video digitalizado mediante paquetes de red TCP/IP alimentados por el mismo cable Ethernet (Power over Ethernet - PoE). No existe una solución universalmente superior: la elección correcta depende de la infraestructura existente, las distancias físicas y el presupuesto del proyecto.",
    applications: [
      {
        segment: "Proyectos de Renovación (Analógico HD)",
        description: "Actualización de sistemas antiguos aprovechando el cable coaxial previamente tendido en el inmueble.",
        useCases: ["Migración de cámaras antiguas a 1080p sin recablear", "Ahorro presupuestario en mano de obra", "Pequeños comercios"]
      },
      {
        segment: "Nuevas Edificaciones & Sedes (IP PoE)",
        description: "Infraestructuras que buscan convergencia con la red informática general y analíticas avanzadas.",
        useCases: ["Edificios corporativos", "Campus universitarios", "Plantas logísticas interconectadas"]
      }
    ],
    technicalSpecs: [
      { label: "Medio de Transmisión", value: "Coaxial RG59 / UTP con balun (Analógico) vs. Cable Ethernet Cat6 UTP (IP)" },
      { label: "Método de Alimentación", value: "Fuente externa 12V DC independiente (Analógico) vs. PoE estándar IEEE 802.3af/at (IP)" },
      { label: "Distancia Máxima de Enlace", value: "Hasta 500m en coaxial (Analógico) vs. 100m por segmento sin repetidores (IP)" },
      { label: "Topología de Red", value: "Punto a punto directo al DVR (Analógico) vs. Distribuida mediante switches de borde (IP)" }
    ],
    keyBenefits: [
      {
        title: "Análisis Imparcial de Coste-Beneficio",
        description: "Evaluamos el estado de su infraestructura para recomendar la opción que maximice su inversión."
      },
      {
        title: "Facilidad de Migración Gradual",
        description: "Posibilidad de utilizar grabadores híbridos (XVR) que admiten tanto cámaras analógicas como canales IP simultáneos."
      },
      {
        title: "Menor Complejidad en Cableado IP",
        description: "En sistemas IP, un solo cable de red transmite video, audio, comandos de control PTZ y energía eléctrica."
      }
    ],
    workflowSteps: [
      { step: "01", title: "Auditoría de Cableado Existente", description: "Verificación de la continuidad e impedancia de cables existentes en caso de proyectos de modernización." },
      { step: "02", title: "Definición de Arquitectura", description: "Selección de matriz analógica directa a DVR o topología de red distribuida con switches PoE." },
      { step: "03", title: "Integración de Dispositivos", description: "Conexión física y asignación de direcciones estáticas en sistemas IP." },
      { step: "04", title: "Calibración de Flujos de Red", description: "Ajuste de tasa de bits (bitrate constante vs. variable) para garantizar estabilidad de transmisión." }
    ],
    comparison: {
      title: "Matriz Comparativa de Tecnologías",
      subtitle: "Aspectos técnicos clave entre sistemas HD Analógicos y Sistemas de Red IP",
      items: [
        {
          feature: "Cableado requerido",
          optionA: "Coaxial RG59 o UTP con transceptores balun",
          optionB: "Cable UTP Cat6 con conectores RJ-45 estandarizados"
        },
        {
          feature: "Alimentación eléctrica",
          optionA: "Línea de alimentación de 12V separada por cada punto",
          optionB: "Alimentación centralizada por el mismo cable de red (PoE)"
        },
        {
          feature: "Flexibilidad de expansión",
          optionA: "Cada nueva cámara requiere un cable directo hasta el DVR",
          optionB: "Se pueden conectar cámaras a switches de piso intermedios"
        },
        {
          feature: "Latencia de visualización",
          optionA: "Latencia prácticamente cero (señal directa en tiempo real)",
          optionB: "Latencia mínima de procesamiento digital (100–300 ms)"
        },
        {
          feature: "Inversión inicial",
          optionA: "Económica en equipos y cámaras",
          optionB: "Mayor en hardware de red, pero menor en mantenimiento futuro"
        }
      ]
    },
    faqs: [
      {
        question: "¿Es verdad que las cámaras IP siempre tienen mejor imagen que las analógicas?",
        answer: "No necesariamente. Hoy en día existen cámaras analógicas HD de 2MP, 4MP y hasta 8MP que ofrecen excelente nitidez. La gran ventaja del sistema IP no radica únicamente en los megapíxeles, sino en la arquitectura de red, la alimentación PoE y la capacidad de integrar analíticas avanzadas en el borde."
      },
      {
        question: "¿Puedo combinar cámaras analógicas antiguas con cámaras IP nuevas?",
        answer: "Sí, mediante grabadores híbridos conocidos como XVR o Pentahíbridos, que permiten conservar las cámaras coaxiales existentes y sumar canales IP sobre la red local."
      }
    ],
    relatedServices: [
      { title: "Cámaras de Seguridad", slug: "camaras-de-seguridad", path: "/servicios/camaras-de-seguridad" },
      { title: "Redes y Cableado Estructurado", slug: "redes-y-cableado-estructurado", path: "/servicios/redes-y-cableado-estructurado" },
      { title: "Instalación de Cámaras", slug: "instalacion-de-camaras", path: "/servicios/instalacion-de-camaras" }
    ]
  },

  "redes-y-cableado-estructurado": {
    slug: "redes-y-cableado-estructurado",
    title: "Redes & Cableado Estructurado",
    kicker: "05. Infraestructura de Datos & Telecomunicaciones",
    category: "Redes e Infraestructura",
    heroTagline: "La columna vertebral silenciosa que sostiene la operación digital de su empresa.",
    heroDescription: "Diseño, peinado de racks, canalización y certificación de puntos de red Cat6 y Cat6A para entornos de alto rendimiento corporativo y comercial.",
    primaryImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    overview: "Una red empresarial eficiente no tolera cables sueltos, patch cords improvisados ni cuellos de botella no diagnosticados. Implementamos cableado estructurado bajo normas internacionales de telecomunicaciones (ANSI/TIA-568), organizando el centro de datos con racks de piso o pared, patch panels con peinado técnico milimétrico y rotulación estandarizada.",
    applications: [
      {
        segment: "Edificios Corporativos & Sedes",
        description: "Red horizontal y vertical (backbone) para puestos de trabajo, telefonía IP, impresoras y puntos de acceso WiFi 6.",
        useCases: ["Cableado a puestos de trabajo", "Troncales de fibra óptica entre pisos", "Gabinetes de comunicaciones"]
      },
      {
        segment: "Retail, Tiendas & Restaurantes",
        description: "Conectividad estable y redundante para sistemas de punto de venta (POS), comandas y cámaras de videovigilancia.",
        useCases: ["Puntos POS y cajas", "Controladores fiscales", "Puntos de acceso para clientes"]
      },
      {
        segment: "Centros Logísticos & Almacenes",
        description: "Tendido de largas distancias mediante fibra óptica multimodo/monomodo y switches industriales para lectores de inventario.",
        useCases: ["Antenas de radiofrecuencia (RFID)", "Balanza industrial de pesaje", "Terminales de embarque"]
      }
    ],
    technicalSpecs: [
      { label: "Categorías de Cobre", value: "Categoría 6 (hasta 1 Gbps a 250 MHz) y Categoría 6A (hasta 10 Gbps a 500 MHz)" },
      { label: "Tipología de Gabinetes", value: "Racks de 19 pulgadas autoportantes (24U, 42U) y gabinetes murales de pared (6U a 18U)" },
      { label: "Gestión de Cables", value: "Ordenadores horizontales con tapa desmontable y anillas de distribución vertical" },
      { label: "Fibra Óptica", value: "Tiradas de fibra monomodo (OS2) y multimodo (OM3/OM4) con distribuidores ODF" }
    ],
    keyBenefits: [
      {
        title: "Orden Riguroso y Mantenibilidad",
        description: "Identificación unívoca de cada puerto con etiquetas plastificadas legibles que agilizan el mantenimiento y diagnóstico."
      },
      {
        title: "Disminución de Caídas de Red",
        description: "Uso exclusivo de conductores de cobre 100% puro (sin aleaciones de aluminio cobreado CCA) para garantizar conductividad y soporte PoE sin sobrecalentamiento."
      },
      {
        title: "Conectividad Preparada para el Futuro",
        description: "Infraestructura dimensionada con holgura para soportar mayores tasas de transferencia y nuevos dispositivos en los próximos 10 años."
      }
    ],
    workflowSteps: [
      { step: "01", title: "Planificación de Rutas y Densidad", description: "Cálculo de la cantidad de puestos de voz/datos y trazado de bandejas o ductos principales." },
      { step: "02", title: "Montaje del Rack y Enlaces", description: "Fijación y nivelación de gabinetes de comunicaciones con conexión al sistema de puesta a tierra." },
      { step: "03", title: "Tendido y Peinado de Patch Panels", description: "Pase metódico de cables organizados por haces con velcros técnicos y terminación en jacks RJ-45." },
      { step: "04", title: "Mapeo, Rotulación y Verificación", description: "Pruebas de continuidad eléctrica, mapa de cables y entrega del diagrama de conexiones." }
    ],
    faqs: [
      {
        question: "¿Por qué es crucial utilizar cable 100% cobre y evitar cables CCA?",
        answer: "Los cables con aleación de aluminio cobreado (CCA) se quiebran con facilidad, pierden señal en distancias medias y representan un riesgo de incendio al transportar corriente en sistemas Power over Ethernet (PoE). En DSI INTEGRA trabajamos estrictamente con conductores de cobre puro electrolítico certificado."
      },
      {
        question: "¿Cuál es la diferencia entre Cat6 y Cat6A?",
        answer: "Cat6 soporta velocidades de hasta 1 Gbps a 100 metros y 10 Gbps únicamente en distancias cortas (hasta 35-55m). Cat6A cuenta con mayor blindaje contra interferencias y garantiza 10 Gbps en el trayecto completo de 100 metros."
      }
    ],
    relatedServices: [
      { title: "Sistemas de Videovigilancia", slug: "sistemas-de-videovigilancia", path: "/servicios/sistemas-de-videovigilancia" },
      { title: "Sistemas Analógicos e IP", slug: "sistemas-analogicos-e-ip", path: "/servicios/sistemas-analogicos-e-ip" },
      { title: "Pantallas LED", slug: "pantallas-led", path: "/servicios/pantallas-led" }
    ]
  },

  "sistemas-contra-incendios": {
    slug: "sistemas-contra-incendios",
    title: "Sistemas de Detección Contra Incendios",
    kicker: "06. Detección Temprana & Salvaguarda Humana",
    category: "Seguridad Electrónica",
    heroTagline: "Detección temprana y señalización acústica para proteger vidas humanas y patrimonio.",
    heroDescription: "Instalación de paneles de alarma, detectores fotoeléctricos de humo, sensores térmicos y estaciones manuales bajo criterios técnicos de seguridad y prevención.",
    primaryImage: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    overview: "Un sistema de detección de incendios tiene por objetivo alertar a los ocupantes del inmueble en la fase más temprana de una combustión, antes de que el humo o el fuego alcancen proporciones incontrolables. Implementamos sistemas convencionales y direccionables con dispositivos de alta sensibilidad a partículas de humo y cambios bruscos de temperatura.",
    applications: [
      {
        segment: "Locales Comerciales & Restaurantes",
        description: "Protección en áreas de cocina, salones de comensales, almacenes secos y cuartos técnicos.",
        useCases: ["Detección de humos en ductos", "Estaciones manuales de emergencia", "Sirenas con luz estroboscópica"]
      },
      {
        segment: "Edificios de Oficinas & Coworking",
        description: "Sistemas direccionables donde el panel indica el número de oficina y piso exacto donde se inició el evento.",
        useCases: ["Identificación por zonas", "Integración con apertura de puertas de escape", "Supervisión de ductos de aire"]
      },
      {
        segment: "Almacenes & Plantas Industriales",
        description: "Sensores térmicos, detectores lineales por haz de luz (Beam detectors) para techos de gran altura.",
        useCases: ["Galpones industriales", "Talleres con presencia de polvo o gases", "Áreas de archivo"]
      }
    ],
    technicalSpecs: [
      { label: "Tipos de Central", value: "Paneles Convencionales (zonas físicas) y Paneles Direccionables (lazo SLC con ID único)" },
      { label: "Sensores Disponibles", value: "Fotoeléctricos ópticos de humo, térmicos termovelocimétricos, de monóxido de carbono" },
      { label: "Dispositivos de Notificación", value: "Sirenas con luz estroboscópica de xenón/LED sincronizadas y campanas de alarma" },
      { label: "Cableado de Seguridad", value: "Conductor resistente al fuego tipo FPL / FPLR con aislamiento especial" }
    ],
    keyBenefits: [
      {
        title: "Alerta Instantánea ante Conatos",
        description: "Respuesta en segundos que permite activar planes de contingencia antes de la propagación del fuego."
      },
      {
        title: "Señalización Audaz y Clara",
        description: "Sirenas y luces estroboscópicas que garantizan la orientación de evacuación incluso en condiciones de visibilidad reducida."
      },
      {
        title: "Monitoreo Constante de Baterías",
        description: "Centrales provistas de baterías de respaldo recargables que aseguran continuidad operativa ante cortes eléctricos."
      }
    ],
    workflowSteps: [
      { step: "01", title: "Zonificación y Criterios de Ubicación", description: "Determinación de radios de cobertura de sensores según la altura de techos y corrientes de aire." },
      { step: "02", title: "Tendido con Cable Normado FPL", description: "Instalación del cableado contra incendios libre de empalmes expuestos y en tubería dedicada." },
      { step: "03", title: "Montaje de Bases y Dispositivos", description: "Conexión de bases giratorias, módulos aisladores y estaciones manuales a la altura reglamentaria." },
      { step: "04", title: "Pruebas con Humo Sintético y Validación", description: "Prueba funcional de cada detector con aerosol calibrado y comprobación de disparo de sirenas." }
    ],
    faqs: [
      {
        question: "¿Qué diferencia existe entre un sistema convencional y uno direccionable?",
        answer: "En un sistema convencional, el panel sabe que hubo una alarma en una 'zona' que agrupa varios detectores, pero no identifica cuál de ellos se activó. En un sistema direccionable, cada sensor tiene una dirección digital individual y el panel muestra el nombre exacto de la habitación donde se originó el humo."
      },
      {
        question: "¿Los sistemas contra incendios requieren mantenimiento periódico?",
        answer: "Sí. El polvo ambiental y las partículas suspendidas pueden ensuciar la cámara fotoeléctrica con el tiempo, provocando falsas alarmas o disminuyendo la sensibilidad. Se recomienda realizar una revisión periódica de limpieza y prueba de baterías."
      }
    ],
    relatedServices: [
      { title: "Sistemas de Intrusión", slug: "sistemas-de-intrusion", path: "/servicios/sistemas-de-intrusion" },
      { title: "Sensores de Movimiento", slug: "sensores-de-movimiento", path: "/servicios/sensores-de-movimiento" },
      { title: "Cámaras de Seguridad", slug: "camaras-de-seguridad", path: "/servicios/camaras-de-seguridad" }
    ]
  },

  "sensores-de-movimiento": {
    slug: "sensores-de-movimiento",
    title: "Sensores de Movimiento & Cobertura Perimétrica",
    kicker: "07. Detección Volumétrica & Microondas",
    category: "Seguridad Electrónica",
    heroTagline: "Detección volumétrica exacta sin disparos accidentales por mascotas o corrientes térmicas.",
    heroDescription: "Tecnología de doble haz infrarrojo pasivo (PIR) y microondas con algoritmos de procesamiento digital para interiores y exteriores.",
    primaryImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=80",
    overview: "Los sensores de movimiento detectan la variación de energía térmica que emite un cuerpo al desplazarse por una habitación o zona exterior. Para evitar falsas alarmas provocadas por corrientes de aire acondicionado, mascotas o cambios súbitos de luz solar, instalamos detectores de doble tecnología (PIR + Microondas) que requieren la confirmación simultánea de ambas tecnologías antes de disparar la señal de alerta.",
    applications: [
      {
        segment: "Interiores Residenciales & Oficinas",
        description: "Sensores PIR discretos montados en esquinas estratégicas con inmunidad para mascotas domésticas.",
        useCases: ["Salas y pasillos de paso obligado", "Oficinas con archivo confidencial", "Bodegas cerradas"]
      },
      {
        segment: "Áreas Exteriores & Patios",
        description: "Detectores de intemperie con doble sensor PIR superior e inferior y carcasa con protección solar.",
        useCases: ["Jardines perimetrales", "Estacionamientos exteriores", "Terrazas accesibles"]
      },
      {
        segment: "Locales Comerciales & Cajas",
        description: "Sensores de cortina vertical para proteger vidrieras o puertas corredizas sin restringir la circulación interna.",
        useCases: ["Protección de escaparates", "Líneas de acceso peatonal", "Mostradores nocturnos"]
      }
    ],
    technicalSpecs: [
      { label: "Tecnologías de Sensado", value: "PIR digital de cuatro elementos, Microondas banda X/K y sensor antimasking" },
      { label: "Patrón de Cobertura", value: "Gran angular 90° (12m x 12m), cortina vertical (15m x 1m) o haz largo de pasillo" },
      { label: "Inmunidad a Mascotas", value: "Filtrado analítico seleccionable para animales de hasta 20kg o 40kg" },
      { label: "Conectividad", value: "Cableado supervisado por fin de línea (EOL) o inalámbrico de dos vías" }
    ],
    keyBenefits: [
      {
        title: "Filtrado Inteligente de Falsas Alarmas",
        description: "Tecnología combinada que ignora cortinas mecidas por ventiladores o animales que caminan cerca del piso."
      },
      {
        title: "Detección Volumétrica Completa",
        description: "Lentes de Fresnel optimizadas que cubren la zona muerta directamente debajo del sensor (creeping zone)."
      },
      {
        title: "Protección Antienmascaramiento",
        description: "Alerta inmediata si alguien intenta tapar o rociar con aerosol la lente del sensor durante el día."
      }
    ],
    workflowSteps: [
      { step: "01", title: "Mapeo de Rutas de Intrusión", description: "Identificación de los pasillos y vías de cruce obligatorio que un intruso debería recorrer." },
      { step: "02", title: "Ubicación Evitando Fuentes Térmicas", description: "Posicionamiento lejos de ventanas con sol directo o salidas directas de aire acondicionado." },
      { step: "03", title: "Ajuste de Sensibilidad y Walk-Test", description: "Recorrido físico por el recinto verificando el umbral de disparo mediante LED de prueba." },
      { step: "04", title: "Asignación de Zona en Central", description: "Programación en el panel de intrusión con atributos de retardo de entrada o alarma instantánea." }
    ],
    faqs: [
      {
        question: "¿Cómo funciona la tecnología antimascotas en un sensor?",
        answer: "Los sensores con discriminación de mascotas utilizan un diseño de lentes ópticas duales que requieren que un cuerpo interrumpa múltiples zonas de detección simultáneas (típico de la estatura humana), ignorando cuerpos bajos que se desplazan cerca del piso."
      },
      {
        question: "¿Se pueden instalar sensores PIR en exteriores?",
        answer: "Sí, pero deben ser sensores diseñados específicamente para exteriores con sellado hermético contra lluvia e insectos, protección contra luz solar directa y doble sensor PIR que verifique el movimiento conjunto."
      }
    ],
    relatedServices: [
      { title: "Sistemas de Intrusión", slug: "sistemas-de-intrusion", path: "/servicios/sistemas-de-intrusion" },
      { title: "Cercos Perimétricos", slug: "cercos-perimetricos", path: "/servicios/cercos-perimetricos" },
      { title: "Cámaras de Seguridad", slug: "camaras-de-seguridad", path: "/servicios/camaras-de-seguridad" }
    ]
  },

  "sistemas-de-intrusion": {
    slug: "sistemas-de-intrusion",
    title: "Sistemas de Intrusión & Alarma Perimetral",
    kicker: "08. Protección Contra Acceso No Autorizado",
    category: "Seguridad Electrónica",
    heroTagline: "Bloqueo preventivo y alerta inmediata ante cualquier intento de vulneración física.",
    heroDescription: "Integración de paneles de alarma microprocesados, contactos magnéticos para puertas, barreras infrarrojas y teclados de acceso con código seguro.",
    primaryImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?auto=format&fit=crop&w=1200&q=80",
    overview: "Los sistemas de intrusión protegen el perímetro y el interior de una propiedad cuando no hay personal autorizado presente o durante la noche en modo armado perimétrico. Conectan sensores de apertura magnética en puertas y ventanas, detectores de impacto o rotura de cristales y sirenas de alto decibelio que disuaden de forma contundente al transgresor.",
    applications: [
      {
        segment: "Locales Comerciales & Sucursales",
        description: "Protección de cortinas metálicas enrollables con magnéticos blindados de piso y armado programado automático.",
        useCases: ["Sensor magnético de piso para cortinas", "Pulsador silencioso de atraco en caja", "Sirena exterior protegida"]
      },
      {
        segment: "Depósitos & Almacenes",
        description: "Control de portones vehiculares de carga y puertas de emergencia traseras con reporte de apertura fuera de hora.",
        useCases: ["Supervisión de puertas de emergencia", "Armado sectorizado por zonas", "Reporte de apertura tardía"]
      },
      {
        segment: "Residencial & Chalets",
        description: "Modo 'armado noche' que mantiene activos los sensores de puertas y ventanas exteriores mientras los ocupantes duermen.",
        useCases: ["Armado perimétrico nocturno", "Teclados touch en dormitorio principal", "Notificación push inmediata"]
      }
    ],
    technicalSpecs: [
      { label: "Capacidad de Zonas", value: "Desde 8 zonas cableadas expandibles a 64 o 128 zonas híbridas (cableadas e inalámbricas)" },
      { label: "Canales de Comunicación", value: "Comunicador IP Ethernet, módulo celular 4G/LTE y línea telefónica PSTN de respaldo" },
      { label: "Teclados de Operación", value: "Teclados alfanuméricos LCD con lector de tarjetas RFID de proximidad" },
      { label: "Potencia de Alarma", value: "Sirena interior piezoeléctrica (105 dB) y sirena exterior con tamper y luz estroboscópica (120 dB)" }
    ],
    keyBenefits: [
      {
        title: "Particionamiento Multizona",
        description: "Permite independizar el sistema para que dos áreas (ejemplo: almacén y oficinas) armen o desarmen de forma autónoma con claves distintas."
      },
      {
        title: "Disuasión Sonora Inmediata",
        description: "Activación de sirenas de alta potencia en la fracción de segundo que se detecta la apertura forzada de un acceso."
      },
      {
        title: "Notificación Directa a su Teléfono",
        description: "Recepción de alertas de disparo, cortes de energía eléctrica y desarmes no autorizados directamente en su smartphone."
      }
    ],
    workflowSteps: [
      { step: "01", title: "Análisis de Puntos Vulnerables", description: "Revisión de todas las puertas, ventanas, claraboyas y muros ciegos del inmueble." },
      { step: "02", title: "Canalizado Seguro y Anti-Sabotaje", description: "Instalación de cables con resistencia de fin de línea para detectar intentos de corte o cortocircuito." },
      { step: "03", title: "Montaje de Central en Gabinete Metálico", description: "Ubicación del panel con batería y switch tamper que alerta si intentan abrir la caja." },
      { step: "04", title: "Configuración de Claves y Tiempos", description: "Programación de tiempos de entrada y salida, usuarios individuales y pruebas de sirena." }
    ],
    faqs: [
      {
        question: "¿Qué es el armado perimétrico o armado noche?",
        answer: "Es una función que activa únicamente los sensores perimetrales (contactos de puertas, ventanas y cercos), dejando desactivados los sensores de movimiento interiores. Esto permite a los habitantes desplazarse con libertad por el interior de la casa mientras el perímetro exterior está completamente protegido."
      },
      {
        question: "¿El sistema funciona si cortan la energía eléctrica del lugar?",
        answer: "Sí. Las centrales de intrusión profesionales incorporan una batería de respaldo recargable de 12V 7Ah que alimenta la central, los sensores y las sirenas durante varias horas en caso de corte del fluido eléctrico."
      }
    ],
    relatedServices: [
      { title: "Sensores de Movimiento", slug: "sensores-de-movimiento", path: "/servicios/sensores-de-movimiento" },
      { title: "Cercos Perimétricos", slug: "cercos-perimetricos", path: "/servicios/cercos-perimetricos" },
      { title: "Cámaras de Seguridad", slug: "camaras-de-seguridad", path: "/servicios/camaras-de-seguridad" }
    ]
  },

  "cercos-perimetricos": {
    slug: "cercos-perimetricos",
    title: "Cercos Eléctricos & Seguridad Perimetral",
    kicker: "09. Primera Barrera Física & Disuasiva",
    category: "Seguridad Electrónica",
    heroTagline: "Disuasión visual y descarga pulsada no letal que detiene la intrusión antes del ingreso.",
    heroDescription: "Instalación de postes de soporte, alambre acerado de alta tensión, aisladores dieléctricos y energizadores con detección de corte y flexión de líneas.",
    primaryImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    overview: "El cerco eléctrico perimétrico es la primera barrera física y psicológica de protección de un inmueble. A diferencia de las concertinas tradicionales que solo ofrecen una barrera pasiva cortante, el cerco eléctrico genera pulsos de alto voltaje (de 8.000V a 14.000V de bajísimo amperaje, diseñado para ser disuasivo y seguro) y cuenta con supervisión electrónica constante: si un intruso corta, aterriza o intenta separar las líneas, el sistema dispara inmediatamente la sirena de alarma.",
    applications: [
      {
        segment: "Plantas Industriales & Terrenos",
        description: "Protección de grandes perímetros de muros o rejas perimetrales con postes de alta resistencia mecánica.",
        useCases: ["Linderos extensos de fábrica", "Patios de acopio de maquinaria", "Patios de contenedores"]
      },
      {
        segment: "Condominios Residenciales & Casas",
        description: "Instalación sobre la corona del muro exterior con postes pintados electrostáticamente para armonizar con la fachada.",
        useCases: ["Muros perimétricos de casas", "Condominios cerrados", "Residenciales privadas"]
      },
      {
        segment: "Sedes Comerciales & Almacenes",
        description: "Integración de la señal de alarma del energizador al panel central de intrusión y al sistema de videovigilancia.",
        useCases: ["Foco de cámara automático al punto de alarma", "Supervisión 24/7", "Disuasión perimetral"]
      }
    ],
    technicalSpecs: [
      { label: "Voltaje de Salida", value: "Pulso intermitente ajustable entre 8.000V y 14.000V con energía disuasiva certificada" },
      { label: "Conductor Utilizado", value: "Alambre de acero galvanizado o triple galvanizado resistente a la corrosión salina" },
      { label: "Postería Estructural", value: "Postes templadores e intermedios de tubo de fierro galvanizado o aluminio" },
      { label: "Aislamiento Dieléctrico", value: "Aisladores templadores y de paso de polipropileno virgen con protección UV" }
    ],
    keyBenefits: [
      {
        title: "Alta Capacidad de Disuasión",
        description: "La visibilidad de los avisos de advertencia y las líneas de alto voltaje desalienta al intruso antes de iniciar el escalamiento."
      },
      {
        title: "Alerta en el Límite de la Propiedad",
        description: "Detecta la intrusión en el perímetro externo, ganando valiosos minutos antes de que el sujeto alcance las puertas del edificio."
      },
      {
        title: "Protección Contra Sabotaje de Cables",
        description: "El energizador monitorea el retorno del pulso; cualquier corte o contacto a tierra detona la sirena instantáneamente."
      }
    ],
    workflowSteps: [
      { step: "01", title: "Inspección de Muros y Alturas", description: "Comprobación de solidez estructural del muro base y altura mínima de instalación reglamentaria." },
      { step: "02", title: "Anclaje de Postes Templadores e Intermedios", description: "Perforación y fijación con tirafondos o soldadura de postes con la inclinación requerida." },
      { step: "03", title: "Colocación de Aisladores y Tendido de Alambre", description: "Tensado calibrado de las líneas con resortes de compensación térmica para evitar pandeos." },
      { step: "04", title: "Conexión de Tierra Dedicada y Energizador", description: "Instalación de varilla de cobre de puesta a tierra indispensable para el cierre del circuito y prueba de descarga." }
    ],
    faqs: [
      {
        question: "¿El cerco eléctrico es peligroso para la vida de las personas?",
        answer: "No. Los energizadores homologados emiten pulsos de alto voltaje pero de duración extremadamente corta (milisegundos) y muy baja corriente (miliamperios). La descarga provoca una contracción muscular sumamente dolorosa y disuasiva, pero no es letal ni causa quemaduras permanentes."
      },
      {
        question: "¿Qué mantenimiento requiere un cerco eléctrico?",
        answer: "Requiere podar ramas o vegetación que crezca cerca de los alambres para evitar falsos contactos, verificar el tensado de las líneas una vez al año y comprobar la operatividad de la batería de respaldo del energizador."
      }
    ],
    relatedServices: [
      { title: "Sistemas de Intrusión", slug: "sistemas-de-intrusion", path: "/servicios/sistemas-de-intrusion" },
      { title: "Cámaras de Seguridad", slug: "camaras-de-seguridad", path: "/servicios/camaras-de-seguridad" },
      { title: "Sensores de Movimiento", slug: "sensores-de-movimiento", path: "/servicios/sensores-de-movimiento" }
    ]
  },

  "pantallas-led": {
    slug: "pantallas-led",
    title: "Instalación de Pantallas LED de Gran Formato",
    kicker: "10. Cartelería Digital & Alto Impacto Visual",
    category: "Soluciones Visuales",
    heroTagline: "Impacto visual ineludible con luminosidad superior para retail, fachadas y salas de control.",
    heroDescription: "Montaje estructural, sincronización de tarjetas receptoras y calibración cromática de paneles modulares LED para interior (Indoor) y exterior (Outdoor).",
    primaryImage: "/images/pantalla_led.jpg",
    secondaryImage: "/images/pantalla_led_secundaria.jpg",
    overview: "Las pantallas LED modulares han transformado la comunicación visual en centros comerciales, fachadas de tiendas, salas de conferencias y centros de control. A diferencia de los proyectores o pantallas LCD tradicionales, ofrecen un brillo extraordinario visible a plena luz del día, ausencia total de bordes visibles entre módulos (bezel-less) y una vida útil superior a 80.000 horas.",
    applications: [
      {
        segment: "Retail, Tiendas & Escaparates",
        description: "Pantallas de alto brillo para vitrinas orientadas hacia la calle o tótems publicitarios en centros comerciales.",
        useCases: ["Campañas promocionales dinámicas", "Menús digitales en restaurantes", "Lanzamientos de producto"]
      },
      {
        segment: "Fachadas Exteriores & Edificios",
        description: "Grandes pantallas con protección climática IP65 preparadas para resistir lluvia, calor y radiación UV.",
        useCases: ["Publicidad exterior de gran escala", "Pantallas monumentales", "Edificios corporativos"]
      },
      {
        segment: "Salas de Directorio & Auditorios",
        description: "Pantallas de micro-pitch (P1.5 a P2.5) con visualización nítida a corta distancia y tasa de refresco ultra alta.",
        useCases: ["Presentaciones corporativas ejecutivas", "Videoconferencias inmersivas", "Centros de mando"]
      }
    ],
    technicalSpecs: [
      { label: "Pitch Disponibles (Paso de Píxel)", value: "P1.5, P2.0, P2.5 para interior / P3.9, P4.8, P6.0 para exterior" },
      { label: "Brillo Lumínico (Nits)", value: "Desde 800 nits (indoor de confort visual) hasta 6.000 nits (outdoor pleno sol)" },
      { label: "Frecuencia de Refresco", value: "3.840 Hz (elimina parpadeos en cámaras de televisión y smartphones)" },
      { label: "Acceso a Mantenimiento", value: "Servicio frontal magnético o posterior según la estructura arquitectónica" }
    ],
    keyBenefits: [
      {
        title: "Cero Biseles Visibles",
        description: "Composición modular continua que genera una imagen limpia y gigantesca sin las líneas divisorias de las pantallas convencionales."
      },
      {
        title: "Visibilidad a Plena Luz del Día",
        description: "Contraste dinámico y brillo regulable automáticamente mediante sensor lumínico que se adapta a las condiciones del día."
      },
      {
        title: "Gestión de Contenidos Remota",
        description: "Controladores de video multimedia que permiten actualizar piezas gráficas y videos mediante conexión de red o WiFi."
      }
    ],
    workflowSteps: [
      { step: "01", title: "Cálculo de Distancia de Visualización", description: "Selección del Pixel Pitch óptimo según la distancia mínima a la que se ubicarán los espectadores." },
      { step: "02", title: "Cálculo Estructural y Línea Eléctrica", description: "Diseño de la estructura de soporte de acero y dimensionamiento de la potencia eléctrica requerida." },
      { step: "03", title: "Ensamblaje Mecánico y Modulación", description: "Fijación nivelada de cabinets de aluminio inyectado y acople milimétrico de módulos magnéticos." },
      { step: "04", title: "Calibración de Color y Procesador", description: "Ajuste de balance de blancos, brillo uniforme en toda la superficie y enlace con la consola de reproducción." }
    ],
    faqs: [
      {
        question: "¿Qué significa el 'Pitch' en una pantalla LED?",
        answer: "El Pitch (o P) es la distancia en milímetros entre el centro de dos píxeles LED adyacentes. A menor número (ej. P2 frente a P5), mayor densidad de píxeles, mayor resolución y menor es la distancia mínima a la que el ojo humano percibe una imagen continua y nítida."
      },
      {
        question: "¿Cómo se repara si se daña un pequeño LED?",
        answer: "Las pantallas son 100% modulares. Si un píxel falla, no se cambia la pantalla completa; se retira fácilmente con una herramienta de succión magnética el módulo individual de 32x16cm y se reemplaza en minutos sin interrumpir la estructura."
      }
    ],
    relatedServices: [
      { title: "Electricidad e Iluminación", slug: "electricidad-e-iluminacion", path: "/servicios/electricidad-e-iluminacion" },
      { title: "Redes y Cableado Estructurado", slug: "redes-y-cableado-estructurado", path: "/servicios/redes-y-cableado-estructurado" },
      { title: "Cámaras de Seguridad", slug: "camaras-de-seguridad", path: "/servicios/camaras-de-seguridad" }
    ]
  },

  "electricidad-e-iluminacion": {
    slug: "electricidad-e-iluminacion",
    title: "Instalaciones Eléctricas e Iluminación LED / RGB+",
    kicker: "11. Energía Confiable & Atmósfera Arquitectónica",
    category: "Electricidad e Iluminación",
    heroTagline: "Diseño lumínico sofisticado y respaldo eléctrico robusto para espacios comerciales y residenciales.",
    heroDescription: "Instalación de cuadros eléctricos, circuitos protegidos, perfiles de iluminación arquitectónica LED y control dinámico de escenas cromáticas RGB+.",
    primaryImage: "/images/takis3.jpg",
    secondaryImage: "/images/movistar3.jpg",
    overview: "Toda la tecnología de seguridad, redes y pantallas requiere como base indispensable una red eléctrica confiable, estabilizada y libre de sobrecargas. Paralelamente, la iluminación técnica y arquitectónica define la personalidad y confort de cualquier local o ambiente. Desarrollamos instalaciones eléctricas bajo código normativo y diseñamos esquemas de iluminación LED directa, indirecta y bañadores de pared RGB+ con controladores de dimerización.",
    applications: [
      {
        segment: "Restaurantes, Bares & Cafeterías",
        description: "Creación de ambientes cálidos y acogedores durante el día y escenas lumínicas envolventes al anochecer.",
        useCases: ["Iluminación indirecta en foseados de techo", "Realce de barras con tiras LED cálidas", "Controladores de intensidad"]
      },
      {
        segment: "Showrooms & Locales Comerciales",
        description: "Iluminación de alto índice de reproducción cromática (CRI > 90) para que los colores de los productos luzcan reales.",
        useCases: ["Rieles magnéticos con proyectores dirigibles", "Destacado de vitrinas", "Bañadores de textura de pared"]
      },
      {
        segment: "Infraestructura Técnica & Oficinas",
        description: "Líneas de energía estabilizada para servidores y tableros con interruptores termomagnéticos y diferenciales de clase A.",
        useCases: ["Tableros eléctricos independizados", "Circuitos para UPS y telecomunicaciones", "Luminarias de emergencia"]
      }
    ],
    technicalSpecs: [
      { label: "Sistemas de Protección", value: "Interruptores termomagnéticos en curva C, diferenciales inmunizados y barra de tierra equipotencial" },
      { label: "Calidad Lumínica LED", value: "CRI > 90 (reproducción fiel de color) con temperaturas de 2700K (cálido), 4000K (neutro) a 6000K (frío)" },
      { label: "Protocolos RGB+", value: "Controladores DMX512, DALI y Wi-Fi/RF con modulación por ancho de pulso sin parpadeo (Flicker-Free)" },
      { label: "Perfiles Arquitectónicos", value: "Canales de aluminio anodizado con difusores opalinos para una línea continua sin puntos de luz marcados" }
    ],
    keyBenefits: [
      {
        title: "Eficiencia Energética y Ahorro",
        description: "Reducción significativa del consumo eléctrico mediante luminarias LED de alta eficacia en lúmenes por vatio (lm/W)."
      },
      {
        title: "Escenas Lumínicas Personalizadas",
        description: "Posibilidad de programar transiciones automáticas o manuales que transforman el ambiente del local según la hora o la ocasión."
      },
      {
        title: "Seguridad y Prevención de Riesgos",
        description: "Tableros eléctricos calculados con balance de cargas equilibrado y conductores con aislamiento libre de halógenos."
      }
    ],
    workflowSteps: [
      { step: "01", title: "Cálculo de Cargas y Distribución Lumínica", description: "Evaluación de requerimientos de potencia, niveles de lux recomendados por metro cuadrado y dimensionamiento térmico." },
      { step: "02", title: "Tendido de Líneas Eléctricas Independientes", description: "Canalización de circuitos de fuerza e iluminación separados para evitar ruidos parásitos en equipos delicados." },
      { step: "03", title: "Montaje de Perfiles e Integración LED", description: "Corte milimétrico de perfiles de aluminio, fijación y soldadura limpia de terminales de tira LED." },
      { step: "04", title: "Programación de Controladores y Entrega", description: "Calibración de fuentes de poder a 12V/24V, configuración de mandos táctiles o app y pruebas de carga continua." }
    ],
    faqs: [
      {
        question: "¿Qué ventajas tiene la iluminación RGB+ frente al LED convencional?",
        answer: "Los sistemas RGB+ (RGBW o RGB-CCT) combinan diodos de color rojo, verde y azul con diodos dedicados de luz blanca pura cálida y fría. Esto permite disponer de iluminación blanca funcional de alta calidad para trabajar y, a la vez, poder cambiar a cualquier color ambiental para eventos, festividades o marketing temático."
      },
      {
        question: "¿Por qué es necesario balancear las cargas en un tablero eléctrico?",
        answer: "Un tablero desbalanceado sobrecarga una de las fases eléctricas, provocando saltos intempestivos de llaves, calentamiento de cables y desperdicio energético. Realizamos el balanceo metódico de amperajes para asegurar una operación estable."
      }
    ],
    relatedServices: [
      { title: "Pantallas LED", slug: "pantallas-led", path: "/servicios/pantallas-led" },
      { title: "Redes y Cableado Estructurado", slug: "redes-y-cableado-estructurado", path: "/servicios/redes-y-cableado-estructurado" },
      { title: "Cámaras de Seguridad", slug: "camaras-de-seguridad", path: "/servicios/camaras-de-seguridad" }
    ]
  }
};
