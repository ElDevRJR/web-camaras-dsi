
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { projectsData } from "../data/projectsData";

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = [
    "Todos",
    "Seguridad e infraestructura",
    "Iluminación",
  ];

  const visibleProjects = useMemo(() => {
    return projectsData.filter((project) => {
      if (activeFilter === "Todos") return true;

      if (activeFilter === "Iluminación") {
        return ["takis", "movistar"].includes(project.slug);
      }

      return ["sazon-de-la-lena", "ato-xpress"].includes(project.slug);
    });
  }, [activeFilter]);

  return (
    <div className="pt-24 lg:pt-28">

      {/* ENCABEZADO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-14">
        <Breadcrumbs
          items={[{ label: "Proyectos" }]}
          className="mb-6"
        />

        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#245CFF]">
            Nuestro trabajo
          </span>

          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141A23]">
            Proyectos que llevan la tecnología a otro nivel.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conoce algunos de los trabajos realizados por DSI INTEGRA
            en seguridad, infraestructura e iluminación para espacios
            comerciales y empresariales.
          </p>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="bg-white border-y border-[#E0E5EC] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* FILTROS */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-[#245CFF] text-white"
                    : "bg-[#F3F5F8] text-slate-600 hover:bg-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* TARJETAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {visibleProjects.map((project) => (
              <article
                key={project.slug}
                className="group"
              >
                <Link
                  to={`/proyectos/${project.slug}`}
                  className="block"
                >
                  <div className="relative h-64 sm:h-72 overflow-hidden rounded-2xl bg-slate-100">
                    <ImageWithFallback
                      src={project.primaryImage}
                      alt={`Proyecto ${project.name}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      fallbackTitle={project.name}
                      fallbackCategory={project.sector}
                    />

                    <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700">
                      {project.category}
                    </span>
                  </div>

                  <div className="pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#245CFF]">
                      {project.sector}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-[#141A23] group-hover:text-[#245CFF] transition-colors">
                      {project.name}
                    </h2>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {project.tagline}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#245CFF]">
                      Conocer proyecto
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {visibleProjects.length === 0 && (
            <p className="py-12 text-center text-slate-500">
              No hay proyectos disponibles en esta categoría.
            </p>
          )}
        </div>
      </section>

      {/* CIERRE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-[#10254A] p-8 sm:p-12 text-white">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#49D8F5]">
            DSI INTEGRA
          </span>

          <h3 className="mt-3 max-w-2xl text-3xl sm:text-4xl font-bold">
            ¿Tienes un proyecto en mente?
          </h3>

          <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300">
            Cuéntanos qué necesita tu empresa. Te ayudamos a encontrar
            una solución tecnológica adecuada para tu espacio y operación.
          </p>

          <Link
            to="/contacto"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#10254A] hover:bg-slate-100 transition-colors"
          >
            Solicitar cotización
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTASection
        title="Tecnología pensada para cada espacio."
        description="Conversemos sobre las necesidades de seguridad, iluminación e infraestructura de tu empresa."
      />
    </div>
  );
};
