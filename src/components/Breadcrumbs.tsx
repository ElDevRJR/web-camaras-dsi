import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = "" }) => {
  return (
    <nav aria-label="Ruta de navegación" className={`flex items-center text-xs text-slate-500 font-medium ${className}`}>
      <Link
        to="/"
        className="hover:text-[#245CFF] transition-colors whitespace-nowrap focus:outline-none focus-visible:underline"
      >
        Inicio
      </Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 mx-2 shrink-0" aria-hidden="true" />
            {isLast || !item.path ? (
              <span className="text-[#141A23] font-semibold whitespace-nowrap truncate max-w-[240px] md:max-w-none" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-[#245CFF] transition-colors whitespace-nowrap focus:outline-none focus-visible:underline"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
