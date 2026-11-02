import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Shield,
  Camera,
  Network,
  Tv,
  Zap,
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers,
  Flame,
  Radio,
  SlidersHorizontal,
  FileCheck
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { CTASection } from "../components/CTASection";
import { navigationCategories } from "../data/navigation";
import { projectsData } from "../data/projectsData";

export const HomePage: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-28">
      <section className="relative px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-between py-2"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-wider uppercase text-[#245CFF]">
                <span className="w-2 h-2 rounded-full bg-[#245CFF]" />
                <span>SEGURIDAD ELECTRÓNICA E INTEGRACIÓN TECNOLÓGICA</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#141A23] leading-[1.08] mb-6 text-balance">
                Tecnología que protege. Soluciones que conectan.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                Soluciones de seguridad electrónica, infraestructura e iluminación para
                espacios que necesitan funcionar mejor. Desarrolladas con precisión técnica para
                entornos residenciales, comerciales y corporativos.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  to="/servicios"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#245CFF] hover:bg-[#10254A] rounded-full transition-all duration-200 shadow-[0_4px_14px_rgba(36,92,255,0.25)] whitespace-nowrap active:scale-95"
                >
                  <span>Explorar soluciones</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 rounded-full border border-[#E0E5EC] transition-all duration-200 shadow-sm whitespace-nowrap active:scale-95"
                >
                  <span>Solicitar cotización</span>
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E0E5EC] grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="text-xs font-mono uppercase text-[#245CFF] block font-semibold">
                  Norma
                </span>
                <span className="text-xs text-slate-600 font-medium">TIA-568 / NFPA</span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[#245CFF] block font-semibold">
                  Soporte
                </span>
                <span className="text-xs text-slate-600 font-medium">Comisionamiento In Situ</span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[#245CFF] block font-semibold">
                  Garantía
                </span>
                <span className="text-xs text-slate-600 font-medium">Equipos Homologados</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center"
          >
            <div className="relative w-full h-[400px] sm:h-[460px] lg:h-full min-h-[420px] rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-[0_20px_50px_rgba(16,37,74,0.08)] group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"
                alt="Cámara de seguridad profesional instalada en techo arquitectónico"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                fallbackTitle="Captura Óptica de Alta Fidelidad"
                fallbackCategory="Videovigilancia Profesional"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#245CFF] uppercase tracking-wider block font-semibold">
                    Supervisión Continua
                  </span>
                  <p className="text-xs font-bold text-[#141A23]">
                    Óptica 4K · Cobertura 360° · DORI Verificado
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#10254A] flex items-center justify-center text-white shrink-0">
                  <Shield className="w-4 h-4 text-[#49D8F5]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block mb-2">
                Arquitectura de Soluciones
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23] tracking-tight">
                Cuatro pilares de integración para cada espacio
              </h2>
            </div>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#245CFF] hover:text-[#10254A] transition-colors"
            >
              <span>Explorar catálogo completo de servicios</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {navigationCategories.map((cat, idx) => (
              <div
                key={cat.name}
                className="group relative p-6 rounded-2xl bg-[#F8F9FB] border border-[#E0E5EC] hover:border-[#245CFF]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400">
                      0{idx + 1}.
                    </span>
                    <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#E0E5EC] text-slate-600">
                      {cat.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#141A23] mb-2 group-hover:text-[#245CFF] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    {cat.items.length} {cat.items.length === 1 ? "solución" : "soluciones"}
                  </span>
                  <Link
                    to={cat.items[0]?.path || "/servicios"}
                    className="w-7 h-7 rounded-full bg-white group-hover:bg-[#245CFF] group-hover:text-white flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                    aria-label={`Ver servicios de ${cat.name}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
            <div className="col-span-8 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-md h-72 sm:h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?auto=format&fit=crop&w=1200&q=80"
                alt="Centro de monitoreo y videovigilancia corporativa"
                className="w-full h-full object-cover"
                fallbackTitle="Centro de Gestión y Monitoreo"
              />
            </div>
            <div className="col-span-4 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-md h-72 sm:h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Técnico realizando instalación de infraestructura"
                className="w-full h-full object-cover"
                fallbackTitle="Montaje y Calibración Técnica"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#245CFF]">
              <Camera className="w-4 h-4" />
              <span>Protección Perimetral & Monitoreo</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141A23] tracking-tight leading-tight">
              Visión forense y disuasión en tiempo real
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              La seguridad electrónica moderna no se limita a grabar cuando un evento ha ocurrido.
              Diseñamos ecosistemas con detección de movimiento calibrada, cámaras varifocales
              antivandálicas y sistemas de intrusión con sirenas de alerta instantánea.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#245CFF] shrink-0 mt-0.5" />
                <span>Cámaras IP con alimentación PoE y compresión avanzada H.265+.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#245CFF] shrink-0 mt-0.5" />
                <span>Paneles de intrusión con modo armado noche y particionamiento por áreas.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#245CFF] shrink-0 mt-0.5" />
                <span>Cercos eléctricos homologados con supervisión de flexión y corte.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/servicios/camaras-de-seguridad"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#245CFF] hover:text-[#10254A] transition-colors"
              >
                <span>Conocer especificaciones de cámaras de seguridad</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#10254A] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#49D8F5 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#49D8F5]">
                <Network className="w-4 h-4" />
                <span>Cableado Estructurado & Telecomunicaciones</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Orden milimétrico en racks y conexiones que nunca fallan
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                El tráfico digital de un negocio —desde puntos de venta hasta llamadas VoIP y
                transmisiones de video— depende de la calidad física del cableado. Implementamos
                gabinetes de datos con peinado impecable, canalizaciones rígidas EMT y cobre 100%
                puro bajo norma ANSI/TIA-568.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-lg font-bold text-white block">Cat6 & Cat6A</span>
                  <span className="text-xs text-slate-400">Certificación y mapa de cables</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-lg font-bold text-white block">Fibra Óptica</span>
                  <span className="text-xs text-slate-400">Troncales de alta velocidad</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/servicios/redes-y-cableado-estructurado"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-[#10254A] bg-[#49D8F5] hover:bg-white rounded-full transition-colors whitespace-nowrap"
                >
                  <span>Explorar soluciones de redes y racks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[380px] lg:h-[440px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80"
                  alt="Rack de servidores con cableado estructurado azul ordenado"
                  className="w-full h-full object-cover"
                  fallbackTitle="Centro de Datos y Cableado Estructurado"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block mb-2">
              Clientes & Experiencia de Campo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141A23] tracking-tight">
              Proyectos con requerimientos específicos
            </h2>
          </div>
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#245CFF] hover:text-[#10254A] transition-colors"
          >
            <span>Ver sección de proyectos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Link
              key={project.slug}
              to={`/proyectos/${project.slug}`}
              className="group rounded-3xl overflow-hidden bg-white border border-[#E0E5EC] hover:border-[#245CFF]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                <ImageWithFallback
                  src={project.primaryImage}
                  alt={`Proyecto ${project.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  fallbackTitle={project.name}
                  fallbackCategory={project.sector}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono font-semibold text-slate-800 border border-white/60">
                  {project.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#245CFF] uppercase tracking-wider block mb-1">
                    {project.sector}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#141A23] group-hover:text-[#245CFF] transition-colors mb-3">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Ver Ficha Técnica</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#245CFF] group-hover:text-white flex items-center justify-center text-slate-700 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#EEF1F5] border-y border-[#E0E5EC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#E0E5EC] shadow-md h-80 sm:h-96">
              <ImageWithFallback
                src="/images/pantalla_led.jpg"
                alt="Pantalla LED de gran formato e iluminación arquitectónica"
                className="w-full h-full object-cover"
                fallbackTitle="Pantallas LED e Iluminación"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#245CFF]">
                <Zap className="w-4 h-4" />
                <span>Comunicación Visual & Arquitectura de Luz</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141A23] tracking-tight leading-tight">
                Pantallas LED de gran formato e iluminación RGB+
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Transformamos vitrinas y recintos comerciales con cartelería digital de alto impacto y
                luminosidad visible a la luz solar. Complementamos la experiencia visual con
                iluminación lineal LED de alto índice cromático (CRI &gt; 90) y control de escenas
                RGB+ integradas con tableros eléctricos protegidos.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/servicios/pantallas-led"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#E0E5EC] text-xs font-bold text-slate-800 hover:text-[#245CFF] hover:border-[#245CFF] transition-all shadow-sm"
                >
                  <Tv className="w-4 h-4 text-[#245CFF]" />
                  <span>Pantallas LED Indoor/Outdoor</span>
                </Link>

                <Link
                  to="/servicios/electricidad-e-iluminacion"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#E0E5EC] text-xs font-bold text-slate-800 hover:text-[#245CFF] hover:border-[#245CFF] transition-all shadow-sm"
                >
                  <Zap className="w-4 h-4 text-[#245CFF]" />
                  <span>Iluminación LED y RGB+</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Desea evaluar la seguridad o infraestructura de su local?"
        description="Coordinamos visitas técnicas en campo para inspeccionar recorridos de cableado, alturas de montaje y capacidades eléctricas antes de emitir una cotización."
        primaryButtonText="Contactar a Ingeniería"
        primaryButtonLink="/contacto"
        theme="light"
      />
    </div>
  );
};
