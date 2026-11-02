import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldAlert,
  Grid3X3,
  Lock,
  DoorClosed,
  Volume2,
  ArrowRight,
  HelpCircle,
  CheckCircle2
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { servicesData } from "../data/servicesData";

export const IntrusionSystemsPage: React.FC = () => {
  const service = servicesData["sistemas-de-intrusion"];

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
                <span>Cotizar Panel de Alarma</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/servicios/cercos-perimetricos"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-700 bg-white border border-[#E0E5EC] hover:bg-slate-50 rounded-full transition-all shadow-sm"
              >
                <span>Ver Cercos Perimétricos</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-xl h-80 sm:h-96">
            <ImageWithFallback
              src={service.primaryImage}
              alt="Panel de intrusión y teclado numérico"
              className="w-full h-full object-cover"
              fallbackTitle="Central de Alarma Microprocesada"
              fallbackCategory="Sistemas de Intrusión"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block mb-1">
              Componentes del Ecosistema
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Disuasión Física, Contactos Magnéticos y Teclados Zonificados
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4">
                <DoorClosed className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#141A23] mb-2">
                Contactos Magnéticos Blindados
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Para puertas peatonales y versiones de piso para cortinas metálicas comerciales de
                alta resistencia.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#141A23] mb-2">
                Teclados Alfanuméricos & RFID
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Armado y desarmado mediante códigos de seguridad individuales o tarjetas de
                proximidad para personal de guardia.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#141A23] mb-2">
                Sirenas de 120 dB con Tamper
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Alerta sónica de gran impacto psicológico con protección contra sabotaje físico o
                corte de cable.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#141A23] mb-2">
                Central Híbrida Supervisada
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gabinete metálico con cerradura, transformador regulado y batería recargable de
                respaldo de 12V 7Ah.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EEF1F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase text-[#245CFF] font-semibold block">
                Zonificación Avanzada
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
                Particionamiento y Modo Armado Noche
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                El particionamiento permite que un solo panel administre dos o más recintos
                independientes (por ejemplo, el almacén y las oficinas comerciales) con horarios de
                cierre y claves de acceso totalmente separadas. El modo armado noche brinda la
                tranquilidad de proteger puertas y ventanas mientras las personas se desplazan libremente
                por el interior.
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
                alt="Teclado y sirena de sistema de alarma"
                className="w-full h-full object-cover"
                fallbackTitle="Teclado y Disuasión Perimetral"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <HelpCircle className="w-6 h-6 text-[#245CFF] mx-auto mb-2" />
          <h2 className="text-2xl font-extrabold text-[#141A23]">
            Preguntas Frecuentes sobre Sistemas de Intrusión
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
        title="¿Desea instalar un panel de alarma contra robos e intrusión?"
        description="Analizamos puertas, ventanas y cortinas comerciales para determinar la cantidad de zonas necesarias."
      />
    </div>
  );
};
