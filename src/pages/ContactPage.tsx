import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  ShieldCheck,
  Building
} from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { siteConfig } from "../data/siteConfig";

interface FormData {
  service: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  description: string;
}

const serviceOptions = [
  "Cámaras de Seguridad y Videovigilancia IP",
  "Instalación y Canalización de Cámaras",
  "Sistemas Analógicos vs IP (Migración)",
  "Redes y Cableado Estructurado (Cat6/Cat6A)",
  "Sistemas Contra Incendios y Detección",
  "Sensores de Movimiento y Volumétricos",
  "Sistemas de Intrusión y Alarmas",
  "Cercos Eléctricos y Seguridad Perimetral",
  "Instalación de Pantallas LED Gran Formato",
  "Electricidad e Iluminación LED / RGB+",
  "Múltiples Servicios / Proyecto Integral"
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    service: serviceOptions[0],
    fullName: "",
    company: "",
    email: "",
    phone: "",
    description: ""
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Por favor ingrese su nombre o persona de contacto.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido para la cotización.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Ingrese un formato de correo electrónico válido.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Por favor detalle brevemente su requerimiento técnico.";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "El detalle debe contener al menos 10 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      setSubmissionStatus("success");
      setStatusMessage(
        "Su requerimiento técnico ha sido formulado y registrado localmente. El equipo de ingeniería de DSI INTEGRA se pondrá en contacto a través de " +
          formData.email +
          " para coordinar el levantamiento o enviar la cotización."
      );

      setFormData({
        service: serviceOptions[0],
        fullName: "",
        company: "",
        email: "",
        phone: "",
        description: ""
      });
      setErrors({});
    } catch (err) {
      setSubmissionStatus("error");
      setStatusMessage("Ocurrió un error al procesar el formulario. Por favor intente nuevamente o llame directamente a nuestra central.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="pt-24 lg:pt-28 pb-16">
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-12">
        <Breadcrumbs items={[{ label: "Contacto & Cotización" }]} className="mb-4" />
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold block mb-2">
            Mesa de Cotizaciones & Ingeniería
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141A23] tracking-tight mb-4">
            Solicite su Levantamiento Técnico o Cotización
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Complete el formulario con los detalles de su inmueble o comuníquese a través de
            nuestros canales directos para coordinar una inspección técnica.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E0E5EC] shadow-[0_10px_30px_rgb(0,0,0,0.03)]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#141A23] mb-6">
                Formulario de Requerimiento Técnico
              </h2>

              {submissionStatus === "success" && (
                <div className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <span className="font-bold block mb-1">¡Requerimiento formulado con éxito!</span>
                    {statusMessage}
                  </div>
                </div>
              )}

              {submissionStatus === "error" && (
                <div className="mb-6 p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <span className="font-bold block mb-1">Error al procesar</span>
                    {statusMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-[#141A23] mb-1.5 uppercase tracking-wide">
                    Servicio o Solución Principal *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E0E5EC] bg-[#F8F9FB] text-xs sm:text-sm text-[#141A23] focus:outline-none focus:border-[#245CFF] focus:bg-white transition-colors"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-[#141A23] mb-1.5 uppercase tracking-wide">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Ej. Ing. Carlos Mendoza"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-[#F8F9FB] text-xs sm:text-sm text-[#141A23] focus:outline-none focus:border-[#245CFF] focus:bg-white transition-colors ${
                        errors.fullName ? "border-rose-400" : "border-[#E0E5EC]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-[#141A23] mb-1.5 uppercase tracking-wide">
                      Empresa <span className="text-slate-400 font-normal">(Opcional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Ej. Inversiones & Retail S.A.C."
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E0E5EC] bg-[#F8F9FB] text-xs sm:text-sm text-[#141A23] focus:outline-none focus:border-[#245CFF] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#141A23] mb-1.5 uppercase tracking-wide">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-[#F8F9FB] text-xs sm:text-sm text-[#141A23] focus:outline-none focus:border-[#245CFF] focus:bg-white transition-colors ${
                        errors.email ? "border-rose-400" : "border-[#E0E5EC]"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#141A23] mb-1.5 uppercase tracking-wide">
                      Teléfono / WhatsApp <span className="text-slate-400 font-normal">(Opcional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+51 999 888 777"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E0E5EC] bg-[#F8F9FB] text-xs sm:text-sm text-[#141A23] focus:outline-none focus:border-[#245CFF] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-xs font-bold text-[#141A23] mb-1.5 uppercase tracking-wide">
                    Descripción de la Necesidad Técnica *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Describa el tipo de predio (local comercial, oficina, vivienda, almacén), metraje aproximado, número estimado de cámaras o puntos de red requeridos..."
                    value={formData.description}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-[#F8F9FB] text-xs sm:text-sm text-[#141A23] focus:outline-none focus:border-[#245CFF] focus:bg-white transition-colors ${
                      errors.description ? "border-rose-400" : "border-[#E0E5EC]"
                    }`}
                  />
                  {errors.description && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">{errors.description}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-[#245CFF] hover:bg-[#10254A] text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-md flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Procesando requerimiento...</span>
                    ) : (
                      <>
                        <span>Enviar Requerimiento para Cotización</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-3">
                    Información protegida. Sus datos serán utilizados exclusivamente para la
                    elaboración de la propuesta técnica.
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#10254A] text-white border border-white/10 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#49D8F5] block mb-1">
                  Atención Directa
                </span>
                <h3 className="text-xl font-bold text-white">Canales de Contacto</h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <Phone className="w-5 h-5 text-[#49D8F5] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block">
                      Central Telefónica
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                      className="font-bold text-white hover:text-[#49D8F5] transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <Mail className="w-5 h-5 text-[#49D8F5] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block">
                      Correo de Ingeniería
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-bold text-white hover:text-[#49D8F5] transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-[#49D8F5] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block">
                      Dirección Corporativa
                    </span>
                    <span className="text-slate-200">{siteConfig.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <Clock className="w-5 h-5 text-[#49D8F5] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block">
                      Horario de Atención
                    </span>
                    <span className="text-slate-200">{siteConfig.contact.schedule}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hola%20Nexura,%20deseo%20solicitar%20una%20cotizaci%C3%B3n%20t%C3%A9cnica.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Conversar por WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E0E5EC] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#141A23]">
                <ShieldCheck className="w-4 h-4 text-[#245CFF]" />
                <span>Política de Visitas Técnicas</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Para proyectos comerciales o corporativos que requieran canalización en obra civil,
                un ingeniero técnico se desplaza al local para verificar distancias de enlace y
                dimensionamiento de racks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
