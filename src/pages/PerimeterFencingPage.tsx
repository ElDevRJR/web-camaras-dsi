import React from "react";
import { Link } from "react-router-dom";
import {
  Fence,
  Zap,
  ShieldAlert,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { servicesData } from "../data/servicesData";

export const PerimeterFencingPage: React.FC = () => {
  const service = servicesData["cercos-perimetricos"];

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
                <span>Cotizar Cerco Eléctrico</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/servicios/camaras-de-seguridad"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-700 bg-white border border-[#E0E5EC] hover:bg-slate-50 rounded-full transition-all shadow-sm"
              >
                <span>Ver Cámaras para Perímetros</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-xl h-80 sm:h-96">
            <ImageWithFallback
              src={service.primaryImage}
              alt="Perímetro de seguridad con cerco eléctrico homologado"
              className="w-full h-full object-cover"
              fallbackTitle="Protección Perimetral Industrial"
              fallbackCategory="Cercos Eléctricos"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase text-[#245CFF] font-semibold block mb-1">
              Diferenciación Técnica
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Barreras Físicas Pasivas vs. Cercos Eléctricos Activos
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Es fundamental distinguir el alcance funcional de una barrera mecánica frente a un
              sistema electrificado activo con monitoreo electrónico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Barrera Mecánica Pasiva (Mallas, Concertinas, Rejas)
              </div>
              <h3 className="text-lg font-bold text-[#141A23] mb-3">
                Obstáculo Físico sin Alerta
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Dificulta el paso por su filo o altura, pero no notifica a nadie si es cortada o
                superada. Si el intruso dispone de tiempo y herramientas, el ingreso se concreta sin
                que la seguridad sea advertida.
              </p>
              <div className="text-xs font-medium text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                <span>Excelente como contención estructural base.</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border-2 border-[#245CFF] shadow-lg">
              <div className="text-xs font-mono text-[#245CFF] uppercase tracking-wider mb-2 font-bold">
                Cerco Eléctrico Homologado Activo (DSI INTEGRA)
              </div>
              <h3 className="text-lg font-bold text-[#141A23] mb-3">
                Disuasión + Descarga Pulsada + Alarma Instantánea
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Emite pulsos de alto voltaje disuasivos no letales y supervisa el lazo en tiempo real.
                Cualquier intento de corte, flexión o aterrizamiento detona de inmediato la sirena y
                envía la alerta al panel central.
              </p>
              <div className="text-xs font-semibold text-[#245CFF] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Detección anticipada en el límite físico del predio.</span>
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
                Criterios de Instalación
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
                Postería templadora, resortes y puesta a tierra dedicada
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Un cerco eléctrico duradero requiere postes templadores reforzados en cada esquina,
                aisladores con tratamiento UV para resistir el sol sin quebrarse y resortes tensores
                que absorben las dilataciones térmicas del alambre de acero.
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
                alt="Detalle de aisladores y postes de cerco eléctrico"
                className="w-full h-full object-cover"
                fallbackTitle="Aisladores y Postería Galvanizada"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <HelpCircle className="w-6 h-6 text-[#245CFF] mx-auto mb-2" />
          <h2 className="text-2xl font-extrabold text-[#141A23]">
            Preguntas Frecuentes sobre Cercos Eléctricos
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
        title="¿Desea cotizar un cerco eléctrico para su predio o vivienda?"
        description="Medimos los metros lineales de muro perimétrico e inspeccionamos la firmeza de la corona base."
      />
    </div>
  );
};
