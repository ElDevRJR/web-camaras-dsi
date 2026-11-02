import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
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
  ChevronDown,
  Menu,
  X,
  ArrowRight
} from "lucide-react";
import { navigationCategories, mainNavLinks } from "../data/navigation";
import { siteConfig } from "../data/siteConfig";

const iconMap: Record<string, React.ReactNode> = {
  Camera: <Camera className="w-4 h-4 text-[#245CFF]" />,
  Wrench: <Wrench className="w-4 h-4 text-[#245CFF]" />,
  Video: <Video className="w-4 h-4 text-[#245CFF]" />,
  Cpu: <Cpu className="w-4 h-4 text-[#245CFF]" />,
  Radio: <Radio className="w-4 h-4 text-[#245CFF]" />,
  ShieldAlert: <ShieldAlert className="w-4 h-4 text-[#245CFF]" />,
  Fence: <Fence className="w-4 h-4 text-[#245CFF]" />,
  Flame: <Flame className="w-4 h-4 text-[#245CFF]" />,
  Network: <Network className="w-4 h-4 text-[#245CFF]" />,
  Tv: <Tv className="w-4 h-4 text-[#245CFF]" />,
  Zap: <Zap className="w-4 h-4 text-[#245CFF]" />
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const location = useLocation();
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    setMobileServicesExpanded(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServicesActive = location.pathname.startsWith("/servicios");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none px-4 sm:px-6 md:px-8 ${
          isScrolled ? "pt-3 md:pt-4" : "pt-4 md:pt-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav
            aria-label="Navegación principal"
            className={`pointer-events-auto w-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-300 ${
              isScrolled
                ? "bg-white/90 backdrop-blur-md border-[#E0E5EC] shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                : "bg-white/80 backdrop-blur-sm border-[#E0E5EC]/80 shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
            }`}
          >
            <Link
              to="/"
              className="flex items-center gap-2 text-slate-900 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#245CFF] rounded-lg"
            >
              <div className="w-8 h-8 rounded-full bg-[#10254A] flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-sm group-hover:bg-[#245CFF] transition-colors">
                DSI
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight leading-none text-[#141A23]">
                  {siteConfig.brandName}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#245CFF] font-semibold leading-none mt-0.5">
                  Technologies
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {mainNavLinks.map((link) => {
                const isActive =
                  link.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.path);

                if (link.hasMegaMenu) {
                  return (
                    <div
                      key={link.path}
                      className="relative"
                      onMouseEnter={() => setIsMegaMenuOpen(true)}
                      onMouseLeave={() => setIsMegaMenuOpen(false)}
                      ref={megaMenuRef}
                    >
                      <button
                        type="button"
                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                        aria-expanded={isMegaMenuOpen}
                        className={`flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                          isActive || isMegaMenuOpen
                            ? "text-[#245CFF] bg-[#245CFF]/8"
                            : "text-[#141A23] hover:text-[#245CFF] hover:bg-slate-100/60"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isMegaMenuOpen ? "rotate-180 text-[#245CFF]" : "text-slate-400"
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isMegaMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[840px] max-w-[90vw] bg-white rounded-2xl shadow-[0_20px_50px_rgba(16,37,74,0.14)] border border-[#E0E5EC] p-6 z-50 text-left"
                          >
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                              <div>
                                <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400">
                                  Catálogo de Integración Tecnológica
                                </h3>
                                <p className="text-sm font-bold text-[#141A23]">
                                  Soluciones de seguridad perimetral, conectividad y atmósfera
                                </p>
                              </div>
                              <Link
                                to="/servicios"
                                onClick={() => setIsMegaMenuOpen(false)}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#245CFF] hover:text-[#10254A] transition-colors"
                              >
                                <span>Ver índice completo</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                              {navigationCategories.map((category) => (
                                <div key={category.name} className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[11px] font-bold text-[#10254A] uppercase tracking-wide">
                                      {category.name}
                                    </span>
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-mono">
                                      {category.badge}
                                    </span>
                                  </div>
                                  <div className="space-y-1">
                                    {category.items.map((item) => (
                                      <Link
                                        key={item.slug}
                                        to={item.path}
                                        onClick={() => setIsMegaMenuOpen(false)}
                                        className="group flex items-start gap-3 p-2 rounded-xl hover:bg-[#F8F9FB] border border-transparent hover:border-[#E0E5EC] transition-all"
                                      >
                                        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-[#245CFF]/10 text-[#245CFF] transition-colors shrink-0 mt-0.5">
                                          {iconMap[item.iconName] || <Cpu className="w-4 h-4 text-[#245CFF]" />}
                                        </div>
                                        <div className="min-w-0">
                                          <div className="text-xs font-semibold text-[#141A23] group-hover:text-[#245CFF] transition-colors truncate">
                                            {item.title}
                                          </div>
                                          <div className="text-[11px] text-slate-500 truncate leading-tight">
                                            {item.shortDesc}
                                          </div>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                      isActive
                        ? "text-[#245CFF] bg-[#245CFF]/8"
                        : "text-[#141A23] hover:text-[#245CFF] hover:bg-slate-100/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/contacto"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-[#245CFF] hover:bg-[#10254A] rounded-full transition-all duration-200 shadow-sm whitespace-nowrap active:scale-95"
              >
                Solicitar Cotización
              </Link>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-full hover:bg-slate-100 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 overflow-y-auto px-6 py-6 lg:hidden"
          >
            <div className="space-y-4 max-w-lg mx-auto">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-base font-bold ${
                  location.pathname === "/" ? "text-[#245CFF]" : "text-[#141A23]"
                }`}
              >
                Inicio
              </Link>

              <div className="border-y border-slate-100 py-3">
                <button
                  type="button"
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                  className="flex items-center justify-between w-full text-base font-bold text-[#141A23]"
                >
                  <span className={isServicesActive ? "text-[#245CFF]" : ""}>Servicios Integrales</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesExpanded ? "rotate-180 text-[#245CFF]" : "text-slate-400"
                    }`}
                  />
                </button>

                {mobileServicesExpanded && (
                  <div className="mt-3 pl-2 space-y-4">
                    <Link
                      to="/servicios"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-xs font-bold text-[#245CFF] uppercase tracking-wide"
                    >
                      → Ver Todos los Servicios (Índice)
                    </Link>
                    {navigationCategories.map((category) => (
                      <div key={category.name} className="space-y-1.5">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          {category.name}
                        </span>
                        <div className="grid grid-cols-1 gap-1">
                          {category.items.map((item) => (
                            <Link
                              key={item.slug}
                              to={item.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-[#245CFF]"
                            >
                              <div className="p-1 rounded bg-slate-100 text-[#245CFF]">
                                {iconMap[item.iconName]}
                              </div>
                              <span className="truncate">{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/proyectos"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-base font-bold ${
                  location.pathname.startsWith("/proyectos") ? "text-[#245CFF]" : "text-[#141A23]"
                }`}
              >
                Proyectos & Clientes
              </Link>

              <Link
                to="/nosotros"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-base font-bold ${
                  location.pathname === "/nosotros" ? "text-[#245CFF]" : "text-[#141A23]"
                }`}
              >
                Nosotros
              </Link>

              <Link
                to="/contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-base font-bold ${
                  location.pathname === "/contacto" ? "text-[#245CFF]" : "text-[#141A23]"
                }`}
              >
                Contacto
              </Link>

              <div className="pt-4">
                <Link
                  to="/contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-3 px-6 text-sm font-bold text-white bg-[#245CFF] rounded-full shadow-md"
                >
                  Solicitar Cotización Técnica
                </Link>
              </div>

              <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <p className="font-semibold text-slate-700">{siteConfig.contact.phoneDisplay}</p>
                <p>{siteConfig.contact.email}</p>
                <p>{siteConfig.contact.address}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
