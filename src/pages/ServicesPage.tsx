import React from "react";
import { Link } from "react-router-dom";
import {
  Camera,
  Wrench,
  Video,
  Cpu,
  Radio,
  ShieldAlert,
  Fence,
  Flame,
  Network,
  Tv,
  Zap,
  ArrowRight,
  ShieldCheck,
  Check
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { CTASection } from "../components/CTASection";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-28">
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-12">
        <Breadcrumbs items={[{ label: "Servicios Integrales" }]} className="mb-4" />
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold mb-2">
            <span>Catálogo Técnico de Soluciones</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141A23] tracking-tight mb-4">
            Servicios de Seguridad, Conectividad y Atmósfera
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Estructuramos nuestras capacidades en cuatro especialidades técnicas. Cada proyecto se
            formula a partir de un levantamiento específico de las condiciones del inmueble.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block mb-1">
                Categoría 01 · Protección Integral
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
                Seguridad Electrónica & Perimetral
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mt-2 md:mt-0">
              Dispositivos de detección temprana, supervisión óptica continua y disuasión física perimetral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/servicios/camaras-de-seguridad"
              className="group p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC] hover:border-[#245CFF] hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4 group-hover:bg-[#245CFF] group-hover:text-white transition-colors">
                  <Camera className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#141A23] group-hover:text-[#245CFF] transition-colors mb-2">
                  Cámaras de Seguridad
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Óptica 4K, domos antivandálicos y visión nocturna infrarroja para interiores y exteriores.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#245CFF]">
                <span>Ver especificaciones</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/servicios/instalacion-de-camaras"
              className="group p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC] hover:border-[#245CFF] hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4 group-hover:bg-[#245CFF] group-hover:text-white transition-colors">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#141A23] group-hover:text-[#245CFF] transition-colors mb-2">
                  Instalación de Cámaras
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Canalización rígida en tubería EMT, montaje nivelado y calibración visual sin puntos ciegos.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#245CFF]">
                <span>Ver proceso técnico</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/servicios/sistemas-de-videovigilancia"
              className="group p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC] hover:border-[#245CFF] hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4 group-hover:bg-[#245CFF] group-hover:text-white transition-colors">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#141A23] group-hover:text-[#245CFF] transition-colors mb-2">
                  Sistemas de Videovigilancia
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Grabadores NVR, almacenamiento continuo en discos especiales 24/7 y visualización remota.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#245CFF]">
                <span>Ver arquitectura</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/servicios/sistemas-analogicos-e-ip"
              className="group p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC] hover:border-[#245CFF] hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4 group-hover:bg-[#245CFF] group-hover:text-white transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#141A23] group-hover:text-[#245CFF] transition-colors mb-2">
                  Sistemas Analógicos e IP
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Matriz comparativa de rendimiento, costos de cableado y migración técnica escalonada.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#245CFF]">
                <span>Ver comparativa</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/servicios/sensores-de-movimiento"
              className="group p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC] hover:border-[#245CFF] hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4 group-hover:bg-[#245CFF] group-hover:text-white transition-colors">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#141A23] group-hover:text-[#245CFF] transition-colors mb-2">
                  Sensores de Movimiento
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Doble tecnología PIR + microondas con discriminación de mascotas y cobertura sin ángulos muertos.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#245CFF]">
                <span>Ver tecnología</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/servicios/sistemas-de-intrusion"
              className="group p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC] hover:border-[#245CFF] hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4 group-hover:bg-[#245CFF] group-hover:text-white transition-colors">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#141A23] group-hover:text-[#245CFF] transition-colors mb-2">
                  Sistemas de Intrusión
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Paneles zonificados, contactos magnéticos blindados para puertas y sirenas de alto decibelio.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#245CFF]">
                <span>Ver componentes</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/servicios/cercos-perimetricos"
              className="group p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC] hover:border-[#245CFF] hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4 group-hover:bg-[#245CFF] group-hover:text-white transition-colors">
                  <Fence className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#141A23] group-hover:text-[#245CFF] transition-colors mb-2">
                  Cercos Perimétricos
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Líneas de alto voltaje disuasivo y detección instantánea de corte o flexión de alambres.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#245CFF]">
                <span>Ver instalación</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/servicios/sistemas-contra-incendios"
              className="group p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC] hover:border-[#245CFF] hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E5EC] flex items-center justify-center text-[#245CFF] mb-4 group-hover:bg-[#245CFF] group-hover:text-white transition-colors">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#141A23] group-hover:text-[#245CFF] transition-colors mb-2">
                  Sistemas Contra Incendios
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Detección fotoeléctrica temprana de humo, pulsadores manuales y sirenas estroboscópicas.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#245CFF]">
                <span>Ver normativas</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl bg-[#10254A] text-white p-8 lg:p-12 border border-white/10 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#49D8F5] block">
                Categoría 02 · Conectividad Crítica
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Redes & Cableado Estructurado
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Organización integral de gabinetes de comunicaciones, certificación de tomas de
                datos Cat6/6A y tendido de fibra óptica para oficinas, centros de distribución y
                locales comerciales.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/servicios/redes-y-cableado-estructurado"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-[#10254A] bg-[#49D8F5] hover:bg-white rounded-full transition-colors shadow-md"
                >
                  <span>Explorar detalles de redes y racks</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 h-64 lg:h-72">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="Rack de cableado estructurado"
                className="w-full h-full object-cover"
                fallbackTitle="Cableado Estructurado Cat6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EEF1F5] border-t border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block mb-1">
              Categorías 03 & 04 · Visuales & Electricidad
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23]">
              Display Digital & Arquitectura Lumínica
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white border border-[#E0E5EC] p-8 flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <div className="h-56 rounded-2xl overflow-hidden mb-6 border border-[#E0E5EC]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                    alt="Pantalla LED comercial"
                    className="w-full h-full object-cover"
                    fallbackTitle="Pantallas LED Modulares"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Tv className="w-4 h-4 text-[#245CFF]" />
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                    Gran Formato & Retail
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#141A23] mb-3">
                  Instalación de Pantallas LED
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Módulos LED de alto brillo para escaparates, auditorios corporativos y fachadas
                  exteriores con calibración de color y controladores multimedia de red.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/servicios/pantallas-led"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#245CFF] hover:text-[#10254A]"
                >
                  <span>Ver resoluciones y tipos de pitch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-[#E0E5EC] p-8 flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <div className="h-56 rounded-2xl overflow-hidden mb-6 border border-[#E0E5EC]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=1200&q=80"
                    alt="Iluminación arquitectónica LED y RGB"
                    className="w-full h-full object-cover"
                    fallbackTitle="Iluminación Arquitectónica y Eléctrica"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-[#245CFF]" />
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                    Energía & Escenas Lumínicas
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#141A23] mb-3">
                  Electricidad e Iluminación LED/RGB+
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Tableros eléctricos normados, circuitos estabilizados para telecomunicaciones y
                  perfiles de iluminación indirecta LED y RGB+ para crear ambientes sofisticados.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/servicios/electricidad-e-iluminacion"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#245CFF] hover:text-[#10254A]"
                >
                  <span>Ver aplicaciones y escenas lumínicas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <CTASection
        title="¿Desea asesoría técnica sobre qué solución implementar?"
        description="Nuestros ingenieros analizan planos o realizan visitas presenciales para determinar las tecnologías exactas que su infraestructura requiere."
      />
    </div>
  );
};
