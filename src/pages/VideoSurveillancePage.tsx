import React from "react";
import { Link } from "react-router-dom";
import {
  Video,
  HardDrive,
  MonitorCheck,
  ShieldAlert,
  ArrowRight,
  Database,
  HelpCircle
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { servicesData } from "../data/servicesData";

export const VideoSurveillancePage: React.FC = () => {
  const service = servicesData["sistemas-de-videovigilancia"];

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
                <span>Cotizar Sistema NVR / VMS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/servicios/sistemas-analogicos-e-ip"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-700 bg-white border border-[#E0E5EC] hover:bg-slate-50 rounded-full transition-all shadow-sm"
              >
                <span>Ver Comparativa Analógico vs IP</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-xl h-80 sm:h-96">
            <ImageWithFallback
              src={service.primaryImage}
              alt="Sala de control de videovigilancia corporativa"
              className="w-full h-full object-cover"
              fallbackTitle="Gestión de Video VMS"
              fallbackCategory="Videovigilancia Corporativa"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block mb-1">
              Componentes del Núcleo de Grabación
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Grabación Ininterrumpida, Respaldo y Visualización Remota
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Grabadores NVR de Alta Tasa de Entrada
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gestión simultánea de 4 a 128 canales de video con switch PoE integrado y puertos
                gigabit para no generar cuellos de botella en la red corporativa.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Discos Duros Especializados 24/7
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unidades de almacenamiento diseñadas con firmware antipérdida de cuadros y tolerancia
                a altas temperaturas para soportar escritura perpetua.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4">
                <MonitorCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Visualización Multiplataforma
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monitores locales vía salida HDMI 4K, clientes en PC y aplicaciones móviles con
                cifrado TLS para monitoreo en vivo y reproducción rápida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#10254A] text-white border border-white/10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase text-[#49D8F5] block mb-1">
              Ingeniería de Almacenamiento
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Cálculo de Días de Respaldo y Compresión H.265+
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Dimensionamos el espacio de disco requerido para cumplir con normativas de retención
              de 15, 30 o 60 días sin reducir la calidad ni la fluidez de fotogramas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-[#49D8F5] block mb-1">Resolución 1080p (2MP)</span>
              <span className="text-xl font-bold text-white block mb-1">~15–20 GB / día</span>
              <span className="text-xs text-slate-400">Por cámara a 15 fps con H.265+</span>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-[#49D8F5] block mb-1">Resolución 2K (4MP)</span>
              <span className="text-xl font-bold text-white block mb-1">~25–35 GB / día</span>
              <span className="text-xs text-slate-400">Por cámara con detección por evento</span>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-[#49D8F5] block mb-1">Resolución 4K Ultra HD</span>
              <span className="text-xl font-bold text-white block mb-1">~45–60 GB / día</span>
              <span className="text-xs text-slate-400">Para zonas bancarias y cajas críticas</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EEF1F5] border-t border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-[#141A23]">
              Aplicaciones Comerciales y Corporativas
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
            Preguntas sobre Grabadores y Videovigilancia
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
        title="¿Desea diseñar un centro de monitoreo o reemplazar su grabador?"
        description="Calculamos la tasa de bits y el almacenamiento exacto que sus operaciones comerciales demandan."
      />
    </div>
  );
};
