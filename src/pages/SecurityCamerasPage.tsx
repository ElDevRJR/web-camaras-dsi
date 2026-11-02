import React from "react";
import { Link } from "react-router-dom";
import {
  Camera,
  ShieldCheck,
  Eye,
  Sliders,
  Maximize2,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { CameraAngleDiagram } from "../components/TechnicalDiagram";
import { servicesData } from "../data/servicesData";

export const SecurityCamerasPage: React.FC = () => {
  const service = servicesData["camaras-de-seguridad"];

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
                <span>Cotizar Cámaras de Seguridad</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/servicios/instalacion-de-camaras"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-700 bg-white border border-[#E0E5EC] hover:bg-slate-50 rounded-full transition-all shadow-sm"
              >
                <span>Ver Servicio de Instalación</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-xl h-80 sm:h-96">
            <ImageWithFallback
              src={service.primaryImage}
              alt="Cámaras de seguridad profesionales"
              className="w-full h-full object-cover"
              fallbackTitle={service.title}
              fallbackCategory="Seguridad Electrónica"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.technicalSpecs.map((spec, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#F8F9FB] border border-[#E0E5EC]">
                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                  {spec.label}
                </span>
                <span className="text-xs font-bold text-[#141A23] leading-snug block">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-mono uppercase text-[#245CFF] font-semibold block mb-1">
            Ingeniería de Selección Óptica
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
            Criterio Internacional D.O.R.I. para Distancias Focales
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
            No todas las cámaras deben tener el mismo lente. Calculamos la densidad de píxeles por
            metro (PPM) según el objetivo visual de cada punto del local o predio.
          </p>
        </div>
        <CameraAngleDiagram />
      </section>

      <section className="py-16 bg-[#EEF1F5] border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase text-[#245CFF] font-semibold block mb-1">
              Despliegue Especializado
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Aplicaciones según el Entorno Operativo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.applications.map((app, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E0E5EC] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-slate-400">0{idx + 1}.</span>
                    <h3 className="text-base font-bold text-[#141A23]">{app.segment}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {app.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block mb-2">
                    Casos de Uso
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {app.useCases.map((uc, uIdx) => (
                      <li key={uIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#245CFF]" />
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-10 text-center">
          <HelpCircle className="w-6 h-6 text-[#245CFF] mx-auto mb-2" />
          <h2 className="text-2xl font-extrabold text-[#141A23]">
            Preguntas Frecuentes sobre Cámaras de Seguridad
          </h2>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E0E5EC]">
              <h3 className="text-sm sm:text-base font-bold text-[#141A23] mb-2">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-white border-t border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 font-mono">
              Soluciones Complementarias
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                to={rel.path}
                className="p-4 rounded-xl border border-[#E0E5EC] hover:border-[#245CFF] hover:bg-[#F8F9FB] transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-bold text-[#141A23] group-hover:text-[#245CFF]">
                  {rel.title}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#245CFF] group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Necesita definir la cantidad y tipo de cámaras para su local?"
        description="Agendamos una evaluación técnica presencial para verificar alturas, contraluces y puntos críticos de grabación."
      />
    </div>
  );
};
