import React from "react";
import { Link } from "react-router-dom";
import {
  Flame,
  AlertTriangle,
  Bell,
  Shield,
  ArrowRight,
  HelpCircle,
  CheckCircle2
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { servicesData } from "../data/servicesData";

export const FireSystemsPage: React.FC = () => {
  const service = servicesData["sistemas-contra-incendios"];

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
                <span>Solicitar Asesoría Técnica</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/servicios/sistemas-de-intrusion"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-700 bg-white border border-[#E0E5EC] hover:bg-slate-50 rounded-full transition-all shadow-sm"
              >
                <span>Ver Sistemas de Intrusión</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-xl h-80 sm:h-96">
            <ImageWithFallback
              src={service.primaryImage}
              alt="Detector de humo y panel de alarma contra incendios"
              className="w-full h-full object-cover"
              fallbackTitle="Central de Alarma Contra Incendios"
              fallbackCategory="Seguridad de Vidas"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block mb-1">
              Topología de Detección
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Dispositivos de Entrada, Procesamiento y Señalización
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4">
                <Flame className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Detectores Fotoeléctricos & Térmicos
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sensores ópticos de cámara oscura que reaccionan ante partículas de combustión lenta,
                y sensores térmicos para zonas con vapores o cocinas industriales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4">
                <Bell className="w-5 h-5 text-[#245CFF]" />
              </div>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Sirenas con Luz Estroboscópica
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Notificación audiovisual simultánea con destellos de xenón/LED sincronizados que
                orientan las rutas de escape en caso de humo denso.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4">
                <Shield className="w-5 h-5 text-[#245CFF]" />
              </div>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Centrales de Control con Batería
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Paneles microprocesados convencionales o direccionables provistos de baterías de
                respaldo para operar con normalidad ante cortes de energía eléctrica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EEF1F5] border-b border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase text-[#245CFF] font-semibold block">
                Mantenimiento Preventivo
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
                La importancia del mantenimiento y la normativa aplicable
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Un sistema de detección de incendios no puede permanecer desatendido. Con el paso de
                los meses, el polvo ambiental y las partículas suspendidas ingresan a la cámara
                óptica de los detectores, lo que puede provocar falsas alarmas que fatigan al
                personal o, peor aún, retrasar la activación real durante un siniestro.
              </p>
              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#245CFF] shrink-0 mt-0.5" />
                  <span>Pruebas periódicas con aerosol de humo calibrado y no residual.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#245CFF] shrink-0 mt-0.5" />
                  <span>Comprobación de voltaje y capacidad de carga en baterías de gel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#245CFF] shrink-0 mt-0.5" />
                  <span>Inspección de continuidad en lazos de cableado resistente al fuego.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-md h-80">
              <ImageWithFallback
                src={service.secondaryImage}
                alt="Panel y sensores de alarma"
                className="w-full h-full object-cover"
                fallbackTitle="Supervisión de Lazos Contra Incendios"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <HelpCircle className="w-6 h-6 text-[#245CFF] mx-auto mb-2" />
          <h2 className="text-2xl font-extrabold text-[#141A23]">
            Preguntas Frecuentes sobre Detección de Incendios
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
        title="¿Desea revisar o instalar un sistema contra incendios en su local?"
        description="Realizamos el cálculo de cobertura de detectores y estaciones manuales según las dimensiones de su predio."
      />
    </div>
  );
};
