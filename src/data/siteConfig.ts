export interface SiteConfig {
  brandName: string;
  tagline: string;
  slogan: string;
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    address: string;
    whatsapp: string;
    schedule: string;
  };
  social: {
    linkedin: string;
    instagram: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "DSI INTEGRA",
  tagline: "SMART SECURITY. CONNECTED SPACES.",
  slogan: "Tecnología que protege. Soluciones que conectan.",
  contact: {
    phone: "+51 1 748 3920",
    phoneDisplay: "(01) 748-3920",
    email: "ventas@dsi-sac.com",
    address: "Av. Las Camelias 820, San Isidro, Lima - Perú",
    whatsapp: "+51999888777",
    schedule: "Lunes a Viernes: 8:30 AM – 6:30 PM | Sábados: 9:00 AM – 1:00 PM"
  },
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  }
};
