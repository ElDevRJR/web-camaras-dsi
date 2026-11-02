import React, { useState } from "react";
import { ShieldCheck, HardHat, Server, Activity } from "lucide-react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackCategory?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = "Imagen técnica de infraestructura y seguridad",
  className = "",
  fallbackTitle = "Instalación Técnica Certificada",
  fallbackCategory = "Infraestructura & Seguridad",
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#10254A] via-[#141A23] to-[#0D1829] flex flex-col items-center justify-center p-6 text-center text-white border border-[#245CFF]/30 select-none ${className}`}
      >
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#49D8F5 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
        <div className="relative z-10 flex flex-col items-center max-w-xs">
          <div className="w-12 h-12 rounded-xl bg-[#245CFF]/20 border border-[#245CFF]/40 flex items-center justify-center text-[#49D8F5] mb-3">
            <Server className="w-6 h-6 stroke-[1.5]" />
          </div>
          <span className="text-[11px] font-mono tracking-wider uppercase text-[#49D8F5] mb-1">
            {fallbackCategory}
          </span>
          <p className="text-sm font-medium text-white/90 leading-snug">
            {fallbackTitle}
          </p>
          <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-[#245CFF]" />
            <span>DSI INTEGRA · Registro Técnico</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#EEF1F5] ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#EEF1F5] animate-pulse flex items-center justify-center">
          <Activity className="w-5 h-5 text-slate-300 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </div>
  );
};
