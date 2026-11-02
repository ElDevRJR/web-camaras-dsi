import React from "react";

export const NetworkTopologyDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#10254A] rounded-2xl p-6 text-white border border-white/10 shadow-lg">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div>
          <span className="text-[10px] font-mono text-[#49D8F5] uppercase tracking-wider block">
            Esquema de Infraestructura TIA/EIA-568
          </span>
          <h4 className="text-sm font-bold text-white">Topología Distribuida Cat6/PoE</h4>
        </div>
        <span className="text-[10px] font-mono bg-[#245CFF]/20 text-[#49D8F5] px-2 py-0.5 rounded border border-[#245CFF]/40">
          Gigabit Backbone
        </span>
      </div>

      <svg
        viewBox="0 0 680 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto text-slate-300 select-none"
      >
        <path d="M120 70 H340 V150 H120 Z" stroke="#245CFF" strokeWidth="1.5" strokeDasharray="4 4" fill="rgba(36, 92, 255, 0.05)" />
        <line x1="340" y1="110" x2="420" y2="110" stroke="#49D8F5" strokeWidth="2" />
        <line x1="420" y1="50" x2="420" y2="210" stroke="#49D8F5" strokeWidth="2" />

        <line x1="420" y1="50" x2="520" y2="50" stroke="#49D8F5" strokeWidth="1.5" />
        <line x1="420" y1="105" x2="520" y2="105" stroke="#49D8F5" strokeWidth="1.5" />
        <line x1="420" y1="160" x2="520" y2="160" stroke="#49D8F5" strokeWidth="1.5" />
        <line x1="420" y1="210" x2="520" y2="210" stroke="#49D8F5" strokeWidth="1.5" />

        <rect x="20" y="85" width="80" height="50" rx="8" fill="#141A23" stroke="#E0E5EC" strokeWidth="1.5" />
        <text x="60" y="108" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">Gateway</text>
        <text x="60" y="122" fill="#94A3B8" fontSize="8" textAnchor="middle">Router / WAN</text>

        <rect x="140" y="85" width="160" height="50" rx="8" fill="#141A23" stroke="#245CFF" strokeWidth="2" />
        <circle cx="160" cy="110" r="4" fill="#49D8F5" />
        <circle cx="175" cy="110" r="4" fill="#49D8F5" />
        <circle cx="190" cy="110" r="4" fill="#49D8F5" />
        <text x="240" y="106" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Core Switch PoE+</text>
        <text x="240" y="120" fill="#49D8F5" fontSize="8" fontFamily="monospace" textAnchor="middle">24 Puertos Gigabit</text>

        <rect x="520" y="30" width="140" height="40" rx="6" fill="#141A23" stroke="#E0E5EC" strokeWidth="1" />
        <text x="590" y="48" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">NVR Grabador 4K</text>
        <text x="590" y="60" fill="#94A3B8" fontSize="8" textAnchor="middle">Cámaras IP / VMS</text>

        <rect x="520" y="85" width="140" height="40" rx="6" fill="#141A23" stroke="#E0E5EC" strokeWidth="1" />
        <text x="590" y="103" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">Puntos AP WiFi 6</text>
        <text x="590" y="115" fill="#94A3B8" fontSize="8" textAnchor="middle">Cobertura de Alta Densidad</text>

        <rect x="520" y="140" width="140" height="40" rx="6" fill="#141A23" stroke="#E0E5EC" strokeWidth="1" />
        <text x="590" y="158" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">VLAN Cajas & POS</text>
        <text x="590" y="170" fill="#94A3B8" fontSize="8" textAnchor="middle">Tráfico Priorizado y Seguro</text>

        <rect x="520" y="195" width="140" height="40" rx="6" fill="#141A23" stroke="#E0E5EC" strokeWidth="1" />
        <text x="590" y="213" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">Puestos de Trabajo</text>
        <text x="590" y="225" fill="#94A3B8" fontSize="8" textAnchor="middle">Tomas RJ45 Cat6 Certificadas</text>

        <line x1="100" y1="110" x2="140" y2="110" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
      <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>Segmentación por VLANs independientes</span>
        <span>Norma ANSI/TIA/EIA-568-C</span>
      </div>
    </div>
  );
};

export const CameraAngleDiagram: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-6 border border-[#E0E5EC] shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div>
          <span className="text-[10px] font-mono text-[#245CFF] uppercase tracking-wider block">
            Criterio Óptico D.O.R.I.
          </span>
          <h4 className="text-sm font-bold text-[#141A23]">Cono de Cobertura y Distancia Focal</h4>
        </div>
        <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
          Estándar EN 62676-4
        </span>
      </div>

      <svg
        viewBox="0 0 680 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto select-none"
      >
        <circle cx="40" cy="100" r="16" fill="#10254A" />
        <circle cx="40" cy="100" r="8" fill="#245CFF" />
        <line x1="40" y1="100" x2="640" y2="20" stroke="#245CFF" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="40" y1="100" x2="640" y2="180" stroke="#245CFF" strokeWidth="1.5" strokeDasharray="3 3" />

        <polygon points="40,100 200,75 200,125" fill="rgba(36, 92, 255, 0.25)" />
        <line x1="200" y1="40" x2="200" y2="160" stroke="#245CFF" strokeWidth="1.5" />
        <text x="120" y="96" fill="#10254A" fontSize="10" fontWeight="bold" textAnchor="middle">IDENTIFICAR</text>
        <text x="120" y="110" fill="#245CFF" fontSize="8" fontFamily="monospace" textAnchor="middle">&gt; 250 px/m</text>

        <polygon points="200,75 360,55 360,145 200,125" fill="rgba(36, 92, 255, 0.15)" />
        <line x1="360" y1="30" x2="360" y2="170" stroke="#245CFF" strokeWidth="1.5" />
        <text x="280" y="96" fill="#10254A" fontSize="10" fontWeight="bold" textAnchor="middle">RECONOCER</text>
        <text x="280" y="110" fill="#667085" fontSize="8" fontFamily="monospace" textAnchor="middle">125 px/m</text>

        <polygon points="360,55 520,35 520,165 360,145" fill="rgba(36, 92, 255, 0.08)" />
        <line x1="520" y1="25" x2="520" y2="175" stroke="#245CFF" strokeWidth="1.5" />
        <text x="440" y="96" fill="#10254A" fontSize="10" fontWeight="bold" textAnchor="middle">OBSERVAR</text>
        <text x="440" y="110" fill="#667085" fontSize="8" fontFamily="monospace" textAnchor="middle">62 px/m</text>

        <polygon points="520,35 640,20 640,180 520,165" fill="rgba(36, 92, 255, 0.03)" />
        <text x="580" y="96" fill="#10254A" fontSize="10" fontWeight="bold" textAnchor="middle">DETECTAR</text>
        <text x="580" y="110" fill="#667085" fontSize="8" fontFamily="monospace" textAnchor="middle">25 px/m</text>
      </svg>

      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
          <span className="font-bold text-[#141A23] block">Identificación</span>
          <span className="text-[11px] text-slate-500">Rostro y matrícula nítida</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
          <span className="font-bold text-[#141A23] block">Reconocimiento</span>
          <span className="text-[11px] text-slate-500">Vestimenta y características</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
          <span className="font-bold text-[#141A23] block">Observación</span>
          <span className="text-[11px] text-slate-500">Flujo y actividad general</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
          <span className="font-bold text-[#141A23] block">Detección</span>
          <span className="text-[11px] text-slate-500">Presencia en el perímetro</span>
        </div>
      </div>
    </div>
  );
};
