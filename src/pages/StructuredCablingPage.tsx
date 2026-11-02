import React from "react";
import { Link } from "react-router-dom";
import {
  Network,
  Server,
  Layers,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  HelpCircle
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { NetworkTopologyDiagram } from "../components/TechnicalDiagram";
import { servicesData } from "../data/servicesData";

export const StructuredCablingPage: React.FC = () => {
  const service = servicesData["redes-y-cableado-estructurado"];

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
                <span>Cotizar Proyecto de Cableado</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/servicios/sistemas-de-videovigilancia"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-700 bg-white border border-[#E0E5EC] hover:bg-slate-50 rounded-full transition-all shadow-sm"
              >
                <span>Ver Videovigilancia IP</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-xl h-80 sm:h-96">
            <ImageWithFallback
              src={service.primaryImage}
              alt="Rack de telecomunicaciones con cableado estructurado profesional"
              className="w-full h-full object-cover"
              fallbackTitle="Rack de Comunicaciones 19 Pulgadas"
              fallbackCategory="Infraestructura de Datos"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase text-[#245CFF] font-semibold block mb-1">
              Arquitectura de Distribución
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Diagrama Lógico de Red y Segmentación
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
              Topología estandarizada con separación de tráfico entre puestos de oficina, cámaras de
              seguridad, puntos de venta (POS) y redes inalámbricas WiFi.
            </p>
          </div>
          <NetworkTopologyDiagram />
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block">
              Garantía de Desempeño
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Conductores de cobre puro 100% y peinado técnico con velcro
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              En DSI INTEGRA rechazamos categóricamente el uso de cable CCA (aluminio cobreado), el cual
              sufre de alta atenuación, recalentamiento en puertos PoE y fragilidad mecánica.
              Instalamos únicamente conductores de cobre electrolítico puro debidamente certificados
              en laboratorios internacionales.
            </p>

            <div className="space-y-3">
              {service.keyBenefits.map((benefit, bIdx) => (
                <div key={bIdx} className="p-4 rounded-xl bg-[#F8F9FB] border border-[#E0E5EC]">
                  <h3 className="text-xs sm:text-sm font-bold text-[#141A23] mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-md h-72 sm:h-80">
              <ImageWithFallback
                src={service.secondaryImage}
                alt="Ingeniero certificando cableado y peinado de rack"
                className="w-full h-full object-cover"
                fallbackTitle="Técnico Peinando Patch Panels"
              />
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E0E5EC]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Parámetros de Ingeniería de Red
              </h4>
              <div className="space-y-2 text-xs">
                {service.technicalSpecs.map((s, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-slate-100 last:border-0 gap-1">
                    <span className="text-slate-500 font-medium">{s.label}:</span>
                    <span className="text-[#141A23] font-bold text-left sm:text-right">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EEF1F5] border-t border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-[#141A23]">
              Infraestructura para Oficinas, Centros Logísticos y Retail
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.applications.map((app, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E0E5EC]">
                <h3 className="text-base font-bold text-[#141A23] mb-2">{app.segment}</h3>
                <p className="text-xs text-slate-600 mb-4">{app.description}</p>
                <div className="pt-3 border-t border-slate-100 space-y-1 text-xs text-slate-700">
                  {app.useCases.map((u, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#245CFF]" />
                      <span>{u}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <HelpCircle className="w-6 h-6 text-[#245CFF] mx-auto mb-2" />
          <h2 className="text-2xl font-extrabold text-[#141A23]">
            Preguntas sobre Redes y Cableado
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
        title="¿Desea organizar su gabinete de datos o ampliar puntos de red?"
        description="Realizamos el peinado de racks, rotulación de jacks y tendido de nuevos enlaces con certificación técnica."
      />
    </div>
  );
};
