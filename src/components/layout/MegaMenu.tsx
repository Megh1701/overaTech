"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { NavItem } from "@/data/navigation";

interface MegaMenuProps {
  item: NavItem;
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item.categories) return null;

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 right-0 w-full bg-white/98 backdrop-blur-xl border-b border-slate-200/90 shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-top-2 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Category Columns (occupies 8 or 9 cols) */}
          <div className="col-span-8 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {item.categories.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5 pb-2 border-b border-slate-100">
                  <span>{category.title}</span>
                </div>
                <ul className="space-y-3">
                  {category.items.map((subItem, sIdx) => (
                    <li key={sIdx}>
                      <Link
                        href={subItem.href}
                        onClick={onClose}
                        className="group flex flex-col p-2 -mx-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                            {subItem.name}
                            {subItem.badge && (
                              <span className="inline-flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                                {subItem.badge}
                              </span>
                            )}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                        </div>
                        {subItem.description && (
                          <span className="text-xs text-slate-500 mt-0.5 line-clamp-1 group-hover:text-slate-600">
                            {subItem.description}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Spotlight Card Column (occupies 4 or 3 cols) */}
          {item.spotlight && (
            <div className="col-span-4 lg:col-span-3 border-l border-slate-100 pl-8">
              <div className="relative rounded-xl overflow-hidden border border-slate-200/80 bg-slate-900 group shadow-md flex flex-col h-full">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={item.spotlight.image}
                    alt={item.spotlight.title}
                    fill
                    sizes="(max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500 text-white shadow-xs">
                    <Sparkles className="w-2.5 h-2.5" />
                    {item.spotlight.tag}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between bg-slate-900 text-white">
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.spotlight.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      {item.spotlight.description}
                    </p>
                  </div>

                  <Link
                    href={item.spotlight.href}
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 mt-3"
                  >
                    Explore Spotlight <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mega Menu Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-6">
            <span className="font-medium text-slate-600">Enterprise Quicklinks:</span>
            <Link href="/services?tab=ai" onClick={onClose} className="hover:text-emerald-600">
              Agentic AI Systems
            </Link>
            <Link href="/digital-transformation#maturity" onClick={onClose} className="hover:text-emerald-600">
              Digital Maturity Tool
            </Link>
            <Link href="/insights?type=reports" onClick={onClose} className="hover:text-emerald-600">
              2026 Tech Forecast
            </Link>
          </div>
          <Link
            href={item.href}
            onClick={onClose}
            className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:text-emerald-800"
          >
            View all {item.name} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

