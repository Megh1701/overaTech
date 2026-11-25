"use client";

import React, { useState, useEffect, useId } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, FileText, Layers, Building2, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";
import { industriesData } from "@/data/industries";
import { insightsData } from "@/data/insights";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "services" | "industries" | "insights">("all");
  const searchInputId = useId();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Filtered Services
  const matchingServices = servicesData.filter(
    (s) =>
      s.title.toLowerCase().includes(normalizedQuery) ||
      s.shortDescription.toLowerCase().includes(normalizedQuery) ||
      s.capabilities.some((c) => c.title.toLowerCase().includes(normalizedQuery))
  );

  // Filtered Industries
  const matchingIndustries = industriesData.filter(
    (i) =>
      i.title.toLowerCase().includes(normalizedQuery) ||
      i.description.toLowerCase().includes(normalizedQuery)
  );

  // Filtered Insights
  const matchingInsights = insightsData.filter(
    (ins) =>
      ins.title.toLowerCase().includes(normalizedQuery) ||
      ins.description.toLowerCase().includes(normalizedQuery) ||
      ins.theme.toLowerCase().includes(normalizedQuery)
  );

  const totalResults =
    (activeTab === "all" || activeTab === "services" ? matchingServices.length : 0) +
    (activeTab === "all" || activeTab === "industries" ? matchingIndustries.length : 0) +
    (activeTab === "all" || activeTab === "insights" ? matchingInsights.length : 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <label htmlFor={searchInputId} className="sr-only">Search OveraTech</label>
          <Search className="w-5 h-5 text-emerald-600 mr-3 shrink-0" />
          <input
            id={searchInputId}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search OveraTech services, industries, insights, platforms..."
            autoFocus
            className="w-full bg-transparent text-slate-900 text-lg placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md mr-2"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/50 transition-colors"
            aria-label="Close search"
          >
            <span className="text-xs uppercase font-medium mr-1.5 hidden sm:inline-block">ESC</span>
            <X className="w-5 h-5 inline-block" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-slate-100 bg-white text-xs font-medium text-slate-600 overflow-x-auto">
          <span className="text-slate-400 mr-1">Filter:</span>
          {(["all", "services", "industries", "insights"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full transition-all capitalize ${
                activeTab === tab
                  ? "bg-emerald-600 text-white font-semibold shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab === "all" ? "All Results" : tab}
            </button>
          ))}
          <span className="ml-auto text-slate-400 text-xs hidden sm:inline-block">
            {totalResults} results found
          </span>
        </div>

        {/* Results Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Quick Suggestions when empty */}
          {!query && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Trending Enterprise Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Generative AI & LLMOps",
                  "OveraTech Nexus Platform",
                  "Cloud FinOps Strategy",
                  "Zero Trust Cyber Resilience",
                  "Banking Core Modernization",
                  "Industry 4.0 Smart Factory",
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-emerald-500" />
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Services Results */}
          {(activeTab === "all" || activeTab === "services") && matchingServices.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
                <Layers className="w-4 h-4" />
                Services & Practices ({matchingServices.length})
              </div>
              <div className="grid gap-2">
                {matchingServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services?tab=${service.id}`}
                    onClick={onClose}
                    className="group block p-3.5 rounded-xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-slate-900 group-hover:text-emerald-700 text-sm">
                        {service.title}
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                      {service.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Industries Results */}
          {(activeTab === "all" || activeTab === "industries") && matchingIndustries.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3">
                <Building2 className="w-4 h-4" />
                Industry Solutions ({matchingIndustries.length})
              </div>
              <div className="grid gap-2">
                {matchingIndustries.map((ind) => (
                  <Link
                    key={ind.id}
                    href={`/industries?sector=${ind.id}`}
                    onClick={onClose}
                    className="group block p-3.5 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-slate-900 group-hover:text-indigo-700 text-sm">
                        {ind.title}
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                      {ind.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Insights Results */}
          {(activeTab === "all" || activeTab === "insights") && matchingInsights.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
                <FileText className="w-4 h-4" />
                Insights & Whitepapers ({matchingInsights.length})
              </div>
              <div className="grid gap-2">
                {matchingInsights.map((insight) => (
                  <Link
                    key={insight.id}
                    href={`/insights?id=${insight.slug}`}
                    onClick={onClose}
                    className="group block p-3.5 rounded-xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-slate-900 group-hover:text-emerald-700 text-sm">
                        {insight.title}
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
                      <span className="font-medium text-emerald-600">{insight.category}</span>
                      <span>•</span>
                      <span>{insight.readTime}</span>
                      <span>•</span>
                      <span>{insight.publishedDate}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* No results message */}
          {query && totalResults === 0 && (
            <div className="text-center py-12">
              <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <div className="text-base font-semibold text-slate-800">
                No matching results found for &ldquo;{query}&rdquo;
              </div>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Try searching for broader keywords such as Cloud, AI, Banking, or visit our services directory.
              </p>
              <Link
                href="/services"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold mt-4 hover:underline"
              >
                Browse all OveraTech Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>
            Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-slate-600 font-mono shadow-2xs">ESC</kbd> to close
          </span>
          <Link
            href="/contact"
            onClick={onClose}
            className="text-emerald-600 hover:underline font-medium"
          >
            Need enterprise assistance? Contact an Advisor →
          </Link>
        </div>
      </div>
    </div>
  );
};

