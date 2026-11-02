import React from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  CheckCircle,
  Hammer,
  ShieldCheck,
  ArrowRight,
  ClipboardList,
  HardHat,
  HelpCircle
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { servicesData } from "../data/servicesData";

export const CameraInstallationPage: React.FC = () => {
  const service = servicesData["instalacion-de-camaras"];

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
                <span>Solicitar Visita Técnica</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/servicios/camaras-de-seguridad"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-700 bg-white border border-[#E0E5EC] hover:bg-slate-50 rounded-full transition-all shadow-sm"
              >
                <span>Ver Catálogo de Cámaras</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-xl h-80 sm:h-96">
            <ImageWithFallback
              src={service.primaryImage}
              alt="Técnico realizando instalación de cámaras de seguridad"
              className="w-full h-full object-cover"
              fallbackTitle="Montaje Técnico Especializado"
              fallbackCategory="Instalación en Campo"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block mb-1">
              Metodología de Trabajo en Campo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Proceso de Montaje y Calibración
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
              Garantizamos una ejecución ordenada, canalizaciones niveladas y pruebas de continuidad
              en cada enlace antes de la entrega final.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.workflowSteps.map((ws, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC] flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-[#245CFF] font-mono block mb-3">
                    {ws.step}
                  </span>
                  <h3 className="text-sm font-bold text-[#141A23] mb-2 leading-snug">
                    {ws.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ws.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EEF1F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block">
                Criterios de Montaje Estructural
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
                Canalización oculta y cajas de paso estancas
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                El peor enemigo de un sistema de seguridad es el cableado suelto o expuesto al corte
                deliberado. En DSI INTEGRA utilizamos cajas de registro con empaquetaduras de jebe,
                prensaestopas herméticos y tubería conduit fijada con abrazaderas unistrut o de uña
                para máxima rigidez mecánica.
              </p>

              <div className="space-y-3">
                {service.keyBenefits.map((kb, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-[#E0E5EC]">
                    <h3 className="text-xs sm:text-sm font-bold text-[#141A23] mb-1">
                      {kb.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {kb.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-lg h-72 sm:h-80">
                <ImageWithFallback
                  src={service.secondaryImage}
                  alt="Instalación de cámaras y cableado"
                  className="w-full h-full object-cover"
                  fallbackTitle="Canalización Rígida y Fijación"
                />
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E0E5EC]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Especificaciones de Montaje
                </h4>
                <div className="space-y-2.5 text-xs">
                  {service.technicalSpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-100 last:border-0 gap-1">
                      <span className="text-slate-500 font-medium">{spec.label}:</span>
                      <span className="text-[#141A23] font-bold text-left sm:text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <HelpCircle className="w-6 h-6 text-[#245CFF] mx-auto mb-2" />
          <h2 className="text-2xl font-extrabold text-[#141A23]">
            Preguntas sobre la Instalación de Cámaras
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
        title="¿Desea cotizar la mano de obra y materiales de instalación?"
        description="Agendamos una visita técnica para medir metros lineales de canalizado y requerimientos de andamios o escaleras."
      />
    </div>
  );
};
