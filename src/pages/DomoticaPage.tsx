
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Lightbulb,
  Thermometer,
  Blinds,
  Smartphone,
  ShieldCheck,
  Building2,
  House,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";

const solutions = [
  {
    icon: Lightbulb,
    title: "Iluminación inteligente",
    description:
      "Controla la iluminación de tus espacios, adapta la intensidad y crea ambientes según cada momento.",
  },
  {
    icon: Blinds,
    title: "Control de persianas y cortinas",
    description:
      "Automatiza la apertura y el cierre de cortinas para gestionar la luz natural y la privacidad.",
  },
  {
    icon: Thermometer,
    title: "Climatización inteligente",
    description:
      "Integra el control de temperatura para gestionar el confort de tus ambientes.",
  },
  {
    icon: Smartphone,
    title: "Control desde dispositivos",
    description:
      "Centraliza funciones de tu espacio y gestiona dispositivos compatibles desde una interfaz de control.",
  },
  {
    icon: ShieldCheck,
    title: "Integración con seguridad",
    description:
      "Conecta funciones de automatización con soluciones de seguridad electrónica, según las necesidades del proyecto.",
  },
  {
    icon: CheckCircle2,
    title: "Escenas automatizadas",
    description:
      "Configura acciones coordinadas para diferentes momentos, actividades y condiciones de uso.",
  },
];

const applications = [
  {
    icon: House,
    title: "Hogares",
    description:
      "Más comodidad y control en la iluminación y las funciones del hogar.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    icon: BriefcaseBusiness,
    title: "Oficinas",
    description:
      "Automatización de ambientes de trabajo y espacios corporativos.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    icon: Building2,
    title: "Espacios comerciales",
    description:
      "Control de iluminación y ambientes para establecimientos y negocios.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
  },
];

export const DomoticaPage: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-28">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 pb-16">
        <Breadcrumbs
          items={[{ label: "Domótica" }]}
          className="mb-8"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#245CFF]">
              Automatización inteligente
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141A23] leading-[1.08]">
              Tu espacio.
              <span className="block text-[#245CFF]">
                Más inteligente.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Integramos soluciones de automatización para que puedas
              controlar y gestionar diferentes funciones de tus espacios
              con mayor comodidad, eficiencia y facilidad.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-[#245CFF] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#10254A] transition-colors"
              >
                Solicitar cotización
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#soluciones"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-[#141A23] hover:border-[#245CFF] hover:text-[#245CFF] transition-colors"
              >
                Explorar soluciones
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl h-[360px] sm:h-[460px]">
              <img
                src="https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1400&q=90"
                alt="Interior moderno con tecnología de automatización"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-5 sm:left-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 sm:p-5 max-w-[260px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#245CFF]">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#141A23]">
                    Todo conectado
                  </p>
                  <p className="text-xs text-slate-500">
                    Control inteligente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="bg-white border-y border-[#E0E5EC] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#245CFF]">
              Tecnología aplicada a tus espacios
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#141A23]">
              La tecnología trabaja contigo.
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed">
              La domótica permite integrar y automatizar diferentes
              dispositivos y sistemas de un espacio. Así, funciones
              como la iluminación, las cortinas y la climatización
              pueden gestionarse de manera más práctica.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              En DSI INTEGRA desarrollamos propuestas de automatización
              de acuerdo con las características de cada ambiente y
              las necesidades de cada cliente.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden h-[320px] sm:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
              alt="Diseño de interiores moderno"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SOLUCIONES */}
      <section
        id="soluciones"
        className="max-w-7xl mx-auto px-6 lg:px-8 py-20 scroll-mt-28"
      >
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#245CFF]">
            ¿Qué podemos automatizar?
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#141A23]">
            Soluciones pensadas para tu espacio.
          </h2>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Diferentes funciones que pueden integrarse en una solución
            de automatización, dependiendo de la infraestructura y los
            objetivos de cada proyecto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="p-7 rounded-2xl bg-white border border-[#E0E5EC] hover:border-[#245CFF]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#245CFF]/10 flex items-center justify-center text-[#245CFF]">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#141A23]">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* APLICACIONES */}
      <section className="bg-[#10254A] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#49D8F5]">
              Dónde se aplica
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
              Inteligencia para distintos entornos.
            </h2>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Cada espacio tiene necesidades diferentes. Diseñamos
              propuestas considerando su uso, distribución y
              características.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {applications.map((application) => {
              const Icon = application.icon;

              return (
                <article
                  key={application.title}
                  className="group overflow-hidden rounded-2xl bg-white"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={application.image}
                      alt={application.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[#245CFF]">
                      <Icon className="w-5 h-5" />
                      <h3 className="text-lg font-bold text-[#141A23]">
                        {application.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {application.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden h-[320px] sm:h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
              alt="Ambiente residencial moderno"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#245CFF]">
              Una mejor experiencia
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#141A23]">
              Más comodidad. Más control. Más posibilidades.
            </h2>

            <div className="mt-8 space-y-5">
              {[
                ["Comodidad", "Gestiona diferentes funciones desde un mismo entorno de control."],
                ["Control", "Administra dispositivos y sistemas compatibles de forma práctica."],
                ["Eficiencia", "Adapta el funcionamiento de tus espacios a tus horarios y necesidades."],
                ["Integración", "Conecta distintas soluciones tecnológicas en una propuesta coordinada."],
              ].map(([title, description]) => (
                <div key={title} className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#245CFF]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#245CFF]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#141A23]">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F0F4FA] border-t border-[#E0E5EC] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#245CFF]">
            Hagamos tu espacio más inteligente
          </span>

          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-[#141A23]">
            ¿Qué te gustaría automatizar?
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 leading-relaxed">
            Cuéntanos cómo es tu espacio y qué necesitas controlar.
            En DSI INTEGRA podemos ayudarte a evaluar una solución
            de automatización adecuada para tu proyecto.
          </p>

          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#245CFF] px-7 py-4 text-sm font-bold text-white hover:bg-[#10254A] transition-colors"
          >
            Solicitar una propuesta
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
