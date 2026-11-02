import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, ArrowLeft, Home } from "lucide-react";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 pt-28 pb-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 text-[#245CFF] flex items-center justify-center mx-auto">
          <ShieldAlert className="w-8 h-8 stroke-[1.5]" />
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#245CFF] font-semibold block mb-2">
            Error 404 · Enlace no encontrado
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#141A23] tracking-tight">
            Página o recurso no disponible
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            La ruta solicitada no existe o ha sido reubicada dentro del catálogo de soluciones de
            DSI INTEGRA.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#245CFF] hover:bg-[#10254A] text-white text-xs font-bold transition-all shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>
          <Link
            to="/servicios"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E0E5EC] hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all shadow-sm"
          >
            <span>Ver Catálogo de Servicios</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
