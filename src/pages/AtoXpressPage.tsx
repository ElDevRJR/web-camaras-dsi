import React from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  CheckCircle2,
  FileCheck,
  ImageIcon,
  ArrowRight,
  ShieldCheck,
  Building2
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { projectsData } from "../data/projectsData";

export const AtoXpressPage: React.FC = () => {
  const project = projectsData.find((p) => p.slug === "ato-xpress") || projectsData[1];

  return (
    <div className="pt-24 lg:pt-28">
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-12">
        <Breadcrumbs
          items={[
            { label: "Proyectos", path: "/proyectos" },
            { label: project.name }
          ]}
          className="mb-4"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold">
                Ficha Técnica de Proyecto · Cliente Confirmado
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#10254A] text-white flex items-center justify-center font-mono text-xl font-bold shadow-sm">
                AX
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141A23] tracking-tight">
                  {project.name}
                </h1>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  {project.sector}
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {project.tagline}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#245CFF] hover:bg-[#10254A] rounded-full transition-all shadow-sm"
              >
                <span>Cotizar Proyecto Logístico</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-xl h-80 sm:h-96">
            <ImageWithFallback
              src={project.primaryImage}
              alt="Instalaciones de almacenamiento y logística en Ato Xpress"
              className="w-full h-full object-cover"
              fallbackTitle={project.name}
              fallbackCategory="Sector Logístico"
            />
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.specifications.map((spec, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F8F9FB] border border-[#E0E5EC]">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  {spec.label}
                </span>
                <span className="text-xs font-bold text-[#141A23] block leading-tight">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase text-[#245CFF] font-semibold block">
              Memoria Descriptiva
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Seguridad Perimetral y Redes de Alta Densidad en Hub Logístico
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Los centros de distribución y paquetería enfrentan desafíos de cobertura extensos:
              andenes de carga con alta rotación vehicular, zonas de pesaje y clasificación donde es
              imprescindible auditar el estado del paquete, y grandes distancias de cableado que
              requieren enlaces de fibra óptica y tubería rígida metálica para resistir impactos.
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4 text-[#245CFF]" />
                <span>Registro de Alcance de Ejecución</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {project.executionScopePlaceholder}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E0E5EC] shadow-sm">
              <h3 className="text-base font-bold text-[#141A23] mb-4">
                Servicios del Proyecto
              </h3>
              <div className="space-y-3">
                {project.servicesRenderedPlaceholder.map((srv, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F9FB] border border-[#E0E5EC]">
                    <CheckCircle2 className="w-4 h-4 text-[#245CFF] shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-[#141A23]">{srv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EEF1F5] border-t border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase text-[#245CFF] font-semibold block mb-1">
              Registro Visual de Obra
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Galería de Instalaciones en Hub Logístico
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Espacios estructurados para la integración de fotografías reales de andenes, racks y
              cámaras exteriores de Ato Xpress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.galleryPlaceholders.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E0E5EC] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#245CFF] mb-4 border border-slate-200">
                    <ImageIcon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                    Slot Fotográfico #{idx + 1} ({item.aspectRatio})
                  </span>
                  <h3 className="text-sm font-bold text-[#141A23] mb-2">{item.caption}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#245CFF]">
                  Espacio reservado para recurso verificado
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Opera un almacén, centro logístico o planta industrial?"
        description="Diseñamos sistemas de videovigilancia de andenes, cableado estructurado en naves y cercos perimétricos homologados."
      />
    </div>
  );
};
