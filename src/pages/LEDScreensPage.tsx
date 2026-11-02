import React from "react";
import { Link } from "react-router-dom";
import {
  Tv,
  Sun,
  Layers,
  Sparkles,
  ArrowRight,
  HelpCircle,
  CheckCircle2
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { servicesData } from "../data/servicesData";

export const LEDScreensPage: React.FC = () => {
  const service = servicesData["pantallas-led"];

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
                <span>Cotizar Pantalla LED</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/servicios/electricidad-e-iluminacion"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-700 bg-white border border-[#E0E5EC] hover:bg-slate-50 rounded-full transition-all shadow-sm"
              >
                <span>Ver Iluminación LED & RGB</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-xl h-80 sm:h-96">
            <ImageWithFallback
              src={service.primaryImage}
              alt="Instalación de pantalla LED de gran formato para retail"
              className="w-full h-full object-cover"
              fallbackTitle="Pantalla LED Gran Formato"
              fallbackCategory="Display Digital"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block mb-1">
              Criterio de Selección de Pixel Pitch
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Distancia de Visualización y Paso de Píxel
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
              La resolución perceptible no depende únicamente del tamaño de la pantalla, sino de la
              distancia media entre el público y el panel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <span className="text-xs font-mono text-[#245CFF] font-bold block mb-2">
                Indoor Fino · P1.5 a P2.5
              </span>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Salas de Directorio & Auditorios
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Distancia mínima de visión de 1.5 a 2.5 metros. Ideal para presentaciones ejecutivas
                y contenido con tipografía pequeña sin fatiga visual.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-white p-2 rounded border border-slate-200">
                Brillo regulable: 600 a 1.000 nits.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <span className="text-xs font-mono text-[#245CFF] font-bold block mb-2">
                Comercial Escaparate · P2.5 a P3.9
              </span>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Retail, Vitrinas & Malls
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Distancia mínima de visión de 3 metros. Alto impacto promocional visible desde el
                pasillo del centro comercial o la calle.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-white p-2 rounded border border-slate-200">
                Brillo alto: 1.500 a 3.000 nits.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC]">
              <span className="text-xs font-mono text-[#245CFF] font-bold block mb-2">
                Outdoor Intemperie · P4.8 a P8.0
              </span>
              <h3 className="text-base font-bold text-[#141A23] mb-2">
                Fachadas de Edificios
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Distancia mínima de 5 a 8 metros. Sellado IP65 contra lluvia torrencial, viento y
                radiación ultravioleta directa.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-white p-2 rounded border border-slate-200">
                Brillo extremo: 5.000 a 6.500 nits.
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
                Ingeniería Mecánica
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
                Estructuras autoportantes y servicio frontal magnético
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Diseñamos e instalamos la cerrajería de soporte de acero estructural, ventilación y
                alimentación eléctrica estabilizada. El mantenimiento frontal con ventosas magnéticas
                permite cambiar cualquier módulo en minutos sin desmontar toda la pared.
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
                alt="Pantalla LED de publicidad e iluminación"
                className="w-full h-full object-cover"
                fallbackTitle="Módulos LED de Acople Continuo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center">
          <HelpCircle className="w-6 h-6 text-[#245CFF] mx-auto mb-2" />
          <h2 className="text-2xl font-extrabold text-[#141A23]">
            Preguntas Frecuentes sobre Pantallas LED
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
        title="¿Planea instalar una pantalla LED en su tienda o fachada?"
        description="Calculamos el Pixel Pitch y la potencia eléctrica necesaria en función de las dimensiones y la iluminación ambiental de su espacio."
      />
    </div>
  );
};
