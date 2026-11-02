import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  CheckCircle2,
  Compass,
  ArrowRight,
  Eye,
  Layers,
  Wrench,
  Check
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { siteConfig } from "../data/siteConfig";

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-28">
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-12">
        <Breadcrumbs items={[{ label: "Nosotros" }]} className="mb-4" />

        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block mb-2">
            Identidad & Filosofía Operativa
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141A23] tracking-tight leading-tight mb-6">
            Ingeniería de integración para espacios que necesitan operar con certeza
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            DSI INTEGRA soluciones de seguridad electrónica, redes de alto tráfico, cartelería
            digital e iluminación técnica. Abordamos cada proyecto con criterio arquitectónico y
            disciplina de telecomunicaciones.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-md h-80 sm:h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Arquitectura moderna y tecnología de integración"
                className="w-full h-full object-cover"
                fallbackTitle="Integración Tecnológica Arquitectónica"
                fallbackCategory="DSI INTEGRA Filosofía"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block">
                Concepto Central
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
                {siteConfig.tagline}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Creemos que la tecnología más eficaz es aquella que opera con máxima fiabilidad sin
                generar ruido visual ni vulnerabilidades en la infraestructura. Cada tendido de cable,
                cada anclaje de cámara y cada conexión eléctrica se ejecuta respetando la estética del
                inmueble y las normativas de seguridad técnica.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8F9FB] border border-[#E0E5EC]">
                  <span className="text-xs font-bold text-[#141A23] block mb-1">
                    Criterio Técnico
                  </span>
                  <span className="text-xs text-slate-500">
                    Dimensionamiento fundamentado en cálculos reales, no en supuestos.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#F8F9FB] border border-[#E0E5EC]">
                  <span className="text-xs font-bold text-[#141A23] block mb-1">
                    Respeto al Espacio
                  </span>
                  <span className="text-xs text-slate-500">
                    Canalizaciones ocultas y armonía con las líneas arquitectónicas.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block mb-1">
            Metodología de Servicio
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
            Proceso General de Atención a Clientes
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
            Desde el primer contacto hasta el comisionamiento final, aseguramos un flujo de trabajo
            transparente y documentado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E0E5EC] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-2xl font-black text-[#245CFF] font-mono block mb-3">01</span>
              <h3 className="text-sm font-bold text-[#141A23] mb-2">
                Recepción & Diagnóstico
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Revisión de planos, especificaciones o diálogo técnico sobre la problemática del
                inmueble.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E0E5EC] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-2xl font-black text-[#245CFF] font-mono block mb-3">02</span>
              <h3 className="text-sm font-bold text-[#141A23] mb-2">
                Inspección en Sitio
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Levantamiento de medidas, comprobación de canalizaciones, tableros eléctricos y puntos
                ciegos.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E0E5EC] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-2xl font-black text-[#245CFF] font-mono block mb-3">03</span>
              <h3 className="text-sm font-bold text-[#141A23] mb-2">
                Propuesta Estructurada
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Emisión de presupuesto desglosado con marcas, modelos, metrados y cronograma de obra.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E0E5EC] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-2xl font-black text-[#245CFF] font-mono block mb-3">04</span>
              <h3 className="text-sm font-bold text-[#141A23] mb-2">
                Montaje & Capacitación
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ejecución técnica limpia, pruebas de continuidad y entrenamiento operativo al
                usuario.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EEF1F5] border-t border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase text-[#245CFF] font-semibold block mb-1">
              Capacidades Técnicas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Áreas de Especialización
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-white border border-[#E0E5EC]">
              <span className="text-xs font-mono text-[#245CFF] block mb-1 font-semibold">01. Vigilancia</span>
              <h3 className="text-sm font-bold text-[#141A23] mb-1">Seguridad Electrónica</h3>
              <p className="text-xs text-slate-600">CCTV IP, intrusión, cercos perimetricos y detección de incendios.</p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E0E5EC]">
              <span className="text-xs font-mono text-[#245CFF] block mb-1 font-semibold">02. Datos</span>
              <h3 className="text-sm font-bold text-[#141A23] mb-1">Cableado Estructurado</h3>
              <p className="text-xs text-slate-600">Peinado de racks de comunicaciones y enlaces Cat6/6A certificados.</p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E0E5EC]">
              <span className="text-xs font-mono text-[#245CFF] block mb-1 font-semibold">03. Display</span>
              <h3 className="text-sm font-bold text-[#141A23] mb-1">Pantallas LED</h3>
              <p className="text-xs text-slate-600">Paneles modulares para escaparates, fachadas y centros de mando.</p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E0E5EC]">
              <span className="text-xs font-mono text-[#245CFF] block mb-1 font-semibold">04. Energía</span>
              <h3 className="text-sm font-bold text-[#141A23] mb-1">Iluminación LED & RGB+</h3>
              <p className="text-xs text-slate-600">Tableros balanceados y diseño lumínico arquitectónico de alta fidelidad.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Desea coordinar una conversación técnica para su empresa?"
        description="Nuestros ingenieros están disponibles para evaluar sus requerimientos y responder sus consultas técnicas."
      />
    </div>
  );
};
