import React from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Sun,
  Palette,
  SlidersHorizontal,
  ArrowRight,
  HelpCircle,
  CheckCircle2
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { servicesData } from "../data/servicesData";

export const LightingPage: React.FC = () => {
  const service = servicesData["electricidad-e-iluminacion"];

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
                <span>Cotizar Proyecto de Iluminación</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/servicios/pantallas-led"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-700 bg-white border border-[#E0E5EC] hover:bg-slate-50 rounded-full transition-all shadow-sm"
              >
                <span>Ver Pantallas LED</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-xl h-80 sm:h-96">
            <ImageWithFallback
              src={service.primaryImage}
              alt="Iluminación arquitectónica LED y perfiles lineales"
              className="w-full h-full object-cover"
              fallbackTitle="Iluminación Arquitectónica Lineal"
              fallbackCategory="Electricidad e Iluminación"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block mb-1">
              Fidelidad de Luz y Escenas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Temperatura de Color, Alto CRI y Modulación RGB+
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
              La iluminación define la percepción de valor de una tienda o restaurante. Cuidamos el
              índice de reproducción cromática para que los colores de alimentos y productos luzcan
              vivos y apetecibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4">
                <Sun className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Blanco Cálido (2700K - 3000K)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ambientes acogedores y relajantes. Ideal para salones de restaurantes rústicos,
                hotelería y áreas de descanso residencial.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-white p-2 rounded border border-slate-200">
                CRI &gt; 90 para realce de maderas y textiles.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4">
                <SlidersHorizontal className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Blanco Neutro (4000K)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Luz limpia para trabajo y concentración sin fatiga. Recomendada para oficinas
                corporativas, pasillos comerciales y cocinas.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-white p-2 rounded border border-slate-200">
                Eficacia de hasta 120 lúmenes / vatio.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4">
                <Palette className="w-5 h-5 text-indigo-500" />
              </div>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Escenas RGB+ Dinámicas
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Integración de canales RGB con blanco puro. Creación de escenas nocturnas,
                bañadores de pared y ambientación temática configurable.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-white p-2 rounded border border-slate-200">
                Control por controladores DMX o mandos táctiles.
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
                Seguridad de Cargas Eléctricas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
                Tableros protegidos y balanceo de fases
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Una iluminación sofisticada solo es segura cuando su respaldo eléctrico lo es.
                Dimensionamos las fuentes conmutadas a 24V DC con 20% de reserva de potencia,
                protegidas por interruptores termomagnéticos y diferenciales para prevenir caídas de
                tensión o recalentamiento.
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
                src="/images/movistar3.jpg"
                alt="Instalación de iluminación en ambiente comercial"
                className="w-full h-full object-cover"
                fallbackTitle="Iluminación comercial"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <HelpCircle className="w-6 h-6 text-[#245CFF] mx-auto mb-2" />
          <h2 className="text-2xl font-extrabold text-[#141A23]">
            Preguntas Frecuentes sobre Electricidad e Iluminación
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
        title="¿Desea transformar la iluminación o revisar el tablero eléctrico de su local?"
        description="Calculamos el plano de cargas y diseñamos la ubicación de perfiles LED y controladores adecuados."
      />
    </div>
  );
};
