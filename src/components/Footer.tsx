import React from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { navigationCategories } from "../data/navigation";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#10254A] text-white pt-16 pb-12 border-t border-[#10254A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#245CFF] flex items-center justify-center text-white font-bold text-sm">
                DSI
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {siteConfig.brandName}
              </span>
            </Link>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {siteConfig.slogan} Especialistas en integración de seguridad electrónica perimetral,
              cableado estructurado, centros de monitoreo, pantallas LED e iluminación técnica.
            </p>
            <div className="pt-2 text-xs font-mono text-[#49D8F5]">
              {siteConfig.tagline}
            </div>

            <div className="pt-4 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#49D8F5] shrink-0" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#49D8F5] shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#49D8F5] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#49D8F5] font-semibold">
              Seguridad Electrónica
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/servicios/camaras-de-seguridad" className="hover:text-white transition-colors">
                  Cámaras de Seguridad
                </Link>
              </li>
              <li>
                <Link to="/servicios/instalacion-de-camaras" className="hover:text-white transition-colors">
                  Instalación de Cámaras
                </Link>
              </li>
              <li>
                <Link to="/servicios/sistemas-de-videovigilancia" className="hover:text-white transition-colors">
                  Sistemas de Videovigilancia
                </Link>
              </li>
              <li>
                <Link to="/servicios/sistemas-analogicos-e-ip" className="hover:text-white transition-colors">
                  Sistemas Analógicos e IP
                </Link>
              </li>
              <li>
                <Link to="/servicios/sistemas-contra-incendios" className="hover:text-white transition-colors">
                  Sistemas Contra Incendios
                </Link>
              </li>
              <li>
                <Link to="/servicios/cercos-perimetricos" className="hover:text-white transition-colors">
                  Cercos Perimétricos
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#49D8F5] font-semibold">
              Infraestructura & Luz
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/servicios/redes-y-cableado-estructurado" className="hover:text-white transition-colors">
                  Redes & Cableado Estructurado
                </Link>
              </li>
              <li>
                <Link to="/servicios/pantallas-led" className="hover:text-white transition-colors">
                  Instalación de Pantallas LED
                </Link>
              </li>
              <li>
                <Link to="/servicios/electricidad-e-iluminacion" className="hover:text-white transition-colors">
                  Electricidad e Iluminación LED/RGB+
                </Link>
              </li>
              <li>
                <Link to="/servicios/sensores-de-movimiento" className="hover:text-white transition-colors">
                  Sensores de Movimiento
                </Link>
              </li>
              <li>
                <Link to="/servicios/sistemas-de-intrusion" className="hover:text-white transition-colors">
                  Sistemas de Intrusión
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#49D8F5] font-semibold">
              Compañía & Proyectos
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/nosotros" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="hover:text-white transition-colors">
                  Proyectos & Clientes
                </Link>
              </li>
              <li>
                <Link to="/proyectos/sazon-de-la-lena" className="hover:text-white transition-colors">
                  Ficha Sazón de la Leña
                </Link>
              </li>
              <li>
                <Link to="/proyectos/ato-xpress" className="hover:text-white transition-colors">
                  Ficha Ato Xpress
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="inline-flex items-center gap-1 text-[#49D8F5] hover:underline font-semibold">
                  <span>Mesa de Cotizaciones</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#245CFF]" />
            <span>© {new Date().getFullYear()} DSI INTEGRA Technologies. Todos los derechos reservados.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Seguridad Electrónica</span>
            <span aria-hidden="true">·</span>
            <span>Redes & Conectividad</span>
            <span aria-hidden="true">·</span>
            <span>Iluminación Técnica</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
