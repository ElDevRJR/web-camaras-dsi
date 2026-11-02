import React from "react";
import { Link } from "react-router-dom";
import {
  Radio,
  Eye,
  Sliders,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  CheckCircle2
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { servicesData } from "../data/servicesData";

export const MotionSensorsPage: React.FC = () => {
  const service = servicesData["sensores-de-movimiento"];

  return (
    <div className="pt-24 lg:pt-28">
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-12">
        <Breadcrumbs
          items={[
            { label: "Servicios", path: "/servicios" },
            { label: service.title }
          ]}
          className="mb-4"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block">
              {service.kicker}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141A23] tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {service.heroTagline} {service.heroDescription}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#245CFF] hover:bg-[#10254A] rounded-full transition-all shadow-sm"
              >
                <span>Cotizar Sensores de Movimiento</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/servicios/sistemas-de-intrusion"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-700 bg-white border border-[#E0E5EC] hover:bg-slate-50 rounded-full transition-all shadow-sm"
              >
                <span>Ver Paneles de Intrusión</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-xl h-80 sm:h-96">
            <ImageWithFallback
              src={service.primaryImage}
              alt="Sensor de movimiento PIR instalado en esquina de oficina"
              className="w-full h-full object-cover"
              fallbackTitle="Detector Volumétrico PIR"
              fallbackCategory="Detección Infrarroja"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block mb-1">
              Patrones Ópticos de Detección
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Cobertura Volumétrica, Cortina y Haz de Pasillo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <span className="text-xs font-mono text-[#245CFF] font-bold block mb-2">
                01. Gran Angular 90° (12m x 12m)
              </span>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Cobertura de Salones y Oficinas
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Montaje en esquina con lentes facetadas que proyectan hasta 64 zonas de detección
                térmica, cubriendo completamente la habitación.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-white p-2 rounded border border-slate-200">
                Uso recomendado: Recepciones, salas de juntas, almacenes abiertos.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <span className="text-xs font-mono text-[#245CFF] font-bold block mb-2">
                02. Cortina Vertical Estrecha
              </span>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Protección de Vidrieras y Puertas
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Haz ultra estrecho (apenas 1 metro de ancho con alcance de 15 metros) que permite
                caminar dentro de la estancia sin disparar la alarma.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-white p-2 rounded border border-slate-200">
                Uso recomendado: Ventanales a la calle, accesos a terrazas.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <span className="text-xs font-mono text-[#245CFF] font-bold block mb-2">
                03. Doble Tecnología Exterior
              </span>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Patios, Jardines e Intemperie
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Combinación de PIR y radar Doppler de microondas con inmunidad al sol y viento para
                cero falsos disparos en exteriores.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-white p-2 rounded border border-slate-200">
                Uso recomendado: Patios traseros, cocheras exteriores.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EEF1F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase text-[#245CFF] font-semibold block">
                Integración Sistémica
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
                Conexión con cámaras y sistemas de iluminación
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Los sensores de movimiento no solo alertan al panel de alarma; también pueden
                activar grabaciones en alta definición en el NVR o encender reflectores disuasivos
                ante la presencia de una persona en áreas restringidas.
              </p>
              <div className="space-y-3 pt-2">
                {service.keyBenefits.map((b, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-[#E0E5EC]">
                    <h3 className="text-xs sm:text-sm font-bold text-[#141A23] mb-1">{b.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-md h-80 sm:h-96">
              <ImageWithFallback
                src={service.secondaryImage}
                alt="Sensor y tecnología de seguridad"
                className="w-full h-full object-cover"
                fallbackTitle="Doble Tecnología Infrarroja y Microondas"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <HelpCircle className="w-6 h-6 text-[#245CFF] mx-auto mb-2" />
          <h2 className="text-2xl font-extrabold text-[#141A23]">
            Preguntas Frecuentes sobre Sensores de Movimiento
          </h2>
        </div>
        <div className="space-y-4">
          {service.faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E0E5EC]">
              <h3 className="text-sm sm:text-base font-bold text-[#141A23] mb-2">{faq.question}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="¿Desea proteger accesos o zonas de paso con sensores calibrados?"
        description="Coordinamos una inspección de campo para evaluar la mejor ubicación sin falsos disparos."
      />
    </div>
  );
};
