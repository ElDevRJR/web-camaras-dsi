import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  theme?: "light" | "deep";
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "¿Tiene un requerimiento de seguridad o infraestructura?",
  description = "Evaluamos su espacio residencial, comercial o industrial para formular una propuesta técnica estructurada y a la medida de sus operaciones.",
  primaryButtonText = "Solicitar Levantamiento Técnico",
  primaryButtonLink = "/contacto",
  secondaryButtonText = "Llamar a Ingeniería",
  secondaryButtonLink = `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`,
  theme = "light"
}) => {
  const isDeep = theme === "deep";

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`relative rounded-3xl p-8 sm:p-12 lg:p-16 border overflow-hidden transition-all ${
            isDeep
              ? "bg-[#10254A] border-white/10 text-white"
              : "bg-white border-[#E0E5EC] shadow-[0_12px_40px_rgb(0,0,0,0.04)] text-[#141A23]"
          }`}
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#245CFF 1px, transparent 1px)",
              backgroundSize: "32px 32px"
            }}
          />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#245CFF] mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Ingeniería & Comisionamiento</span>
            </div>

            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-4 ${
                isDeep ? "text-white" : "text-[#141A23]"
              }`}
            >
              {title}
            </h2>

            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl ${
                isDeep ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={primaryButtonLink}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#245CFF] hover:bg-[#10254A] rounded-full transition-all duration-200 shadow-md whitespace-nowrap active:scale-95"
              >
                <span>{primaryButtonText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={secondaryButtonLink}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full border transition-all duration-200 whitespace-nowrap ${
                  isDeep
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <PhoneCall className="w-4 h-4 text-[#245CFF]" />
                <span>{secondaryButtonText}</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-500">
              <span>Visitas técnicas previa coordinación</span>
              <span aria-hidden="true">·</span>
              <span>Propuestas presupuestarias detalladas</span>
              <span aria-hidden="true">·</span>
              <span>Equipamiento con respaldo de fabricante</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
