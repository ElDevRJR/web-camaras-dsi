import React from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  CheckCircle2,
  GitCompare,
  ArrowRight,
  Shield,
  Layers,
  HelpCircle
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { servicesData } from "../data/servicesData";

export const AnalogIPPage: React.FC = () => {
  const service = servicesData["sistemas-analogicos-e-ip"];

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
                <span>Solicitar Auditoría de Migración</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/servicios/redes-y-cableado-estructurado"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-700 bg-white border border-[#E0E5EC] hover:bg-slate-50 rounded-full transition-all shadow-sm"
              >
                <span>Ver Redes y Cableado</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-xl h-80 sm:h-96">
            <ImageWithFallback
              src={service.primaryImage}
              alt="Comparativa de switches y conexiones analógicas vs IP"
              className="w-full h-full object-cover"
              fallbackTitle="Transmisión Digital vs Coaxial"
              fallbackCategory="Arquitectura de Red"
            />
          </div>
        </div>
      </section>

      {service.comparison && (
        <section className="py-16 bg-white border-y border-[#E0E5EC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-mono uppercase text-[#245CFF] font-semibold block mb-1">
                Análisis Comparativo Objetivo
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
                {service.comparison.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                {service.comparison.subtitle}. Ninguna tecnología es universalmente superior; cada
                una responde a parámetros de distancia, infraestructura previa y presupuesto.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E0E5EC] overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 bg-[#10254A] text-white p-4 text-xs font-mono uppercase tracking-wider font-semibold">
                <div className="md:col-span-4">Criterio Técnico</div>
                <div className="md:col-span-4 text-[#49D8F5]">Sistemas HD Analógicos (TVI/AHD)</div>
                <div className="md:col-span-4 text-white">Sistemas Digitales IP (PoE)</div>
              </div>

              <div className="divide-y divide-slate-200">
                {service.comparison.items.map((row, rIdx) => (
                  <div
                    key={rIdx}
                    className={`grid grid-cols-1 md:grid-cols-12 p-4 text-xs ${
                      rIdx % 2 === 0 ? "bg-[#F8F9FB]" : "bg-white"
                    }`}
                  >
                    <div className="md:col-span-4 font-bold text-[#141A23] mb-1 md:mb-0">
                      {row.feature}
                    </div>
                    <div className="md:col-span-4 text-slate-700 pr-4 mb-1 md:mb-0">
                      <span className="md:hidden font-semibold text-slate-500 block">Analógico:</span>
                      {row.optionA}
                    </div>
                    <div className="md:col-span-4 text-slate-700">
                      <span className="md:hidden font-semibold text-slate-500 block">IP:</span>
                      {row.optionB}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase text-[#245CFF] font-semibold block">
              Estrategia de Renovación
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Migración Híbrida sin desechar su inversión inicial
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Si su empresa cuenta con canalizaciones coaxiales en buen estado, no es obligatorio
              reemplazar todo el cableado de inmediato. Implementamos grabadores XVR híbridos que
              permiten mantener las cámaras analógicas existentes en pasillos secundarios y
              adicionar cámaras IP de alta resolución en cajas y accesos principales.
            </p>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#245CFF] shrink-0 mt-0.5" />
                <span>Modernización progresiva por etapas sin interrumpir la operación.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#245CFF] shrink-0 mt-0.5" />
                <span>Aprovechamiento de ductos existentes reduciendo costos de obra civil.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#245CFF] shrink-0 mt-0.5" />
                <span>Gestión centralizada desde una sola pantalla y aplicación móvil.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-md h-80">
            <ImageWithFallback
              src={service.secondaryImage}
              alt="Grabadores híbridos y cámaras"
              className="w-full h-full object-cover"
              fallbackTitle="Grabadores Híbridos XVR"
            />
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-8 bg-white border-t border-[#E0E5EC]">
        <div className="mb-8 text-center">
          <HelpCircle className="w-6 h-6 text-[#245CFF] mx-auto mb-2" />
          <h2 className="text-2xl font-extrabold text-[#141A23]">
            Preguntas Frecuentes sobre Analógico vs. IP
          </h2>
        </div>
        <div className="space-y-4">
          {service.faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <h3 className="text-sm sm:text-base font-bold text-[#141A23] mb-2">{faq.question}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="¿Duda entre tecnología analógica HD o red IP para su sede?"
        description="Auditamos el estado de su cableado actual para proponerle la opción más sensata técnica y financieramente."
      />
    </div>
  );
};
