import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-100/80 border-b border-slate-200 text-sm">
      <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-slate-600">
        <li>
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center hover:text-emerald-600 transition-colors"
            title="Home"
          >
            <Home className="w-4 h-4 mr-1 text-slate-500" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            {item.href ? (
              <button
                onClick={() => onNavigate(item.href!)}
                className="hover:text-emerald-600 transition-colors truncate max-w-[200px] sm:max-w-xs"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
