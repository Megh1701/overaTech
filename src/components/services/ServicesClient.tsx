"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  BrainCircuit, 
  Cloud, 
  Code2, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Search, 
  PhoneCall 
} from "lucide-react";
import { servicesData } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  BrainCircuit,
  Cloud,
  Code2,
  ShieldCheck,
  Layers,
  Sparkles,
};

export const ServicesClient: React.FC = () => {
  const searchParams = useSearchParams();
  const paramTab = searchParams.get("tab");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const selectedFilter = activeFilter ?? paramTab ?? "all";
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (paramTab) {
      const element = document.getElementById(paramTab);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [paramTab]);

  const filteredServices = servicesData.filter((service) => {
    const matchesFilter = selectedFilter === "all" || service.id === selectedFilter;
    const matchesSearch =
      searchQuery === "" ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.capabilities.some((c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-16">
      {/* Interactive Controls & Filters */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Practice Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedFilter === "all"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              All Practices ({servicesData.length})
            </button>
            {servicesData.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveFilter(s.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedFilter === s.id
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {s.title.split("&")[0]}
              </button>
            ))}
          </div>

          {/* Practice Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter capabilities or tech..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Services List Display */}
      <div className="space-y-16">
        {filteredServices.map((service) => {
          const IconComponent = iconMap[service.iconName] || BrainCircuit;

          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-32 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left practice details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {service.title}
                      </h2>
                      <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mt-0.5">
                        {service.tagline}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Core Practice Capabilities
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                          <div className="font-bold text-slate-900 text-sm mb-1">
                            {cap.title}
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {cap.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Outcomes */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Measurable Business Impact
                    </div>
                    {service.businessOutcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/contact?subject=${encodeURIComponent(service.title)}`}
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm flex items-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Engage OveraTech Practice Lead</span>
                    </Link>

                    <Link
                      href="/digital-transformation#maturity"
                      className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-all"
                    >
                      Benchmark Readiness →
                    </Link>
                  </div>
                </div>

                {/* Right Column: Key Stats & Client Case Highlight */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    {service.keyStats.map((st, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="text-2xl sm:text-3xl font-black text-emerald-700">
                          {st.value}
                        </div>
                        <div className="text-[11px] font-semibold text-slate-600 leading-tight">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Client Story Card */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950 text-white shadow-xl relative overflow-hidden">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">
                      Verified Client Outcome
                    </div>
                    <div className="text-xs font-semibold text-slate-400 mb-3">
                      {service.clientStory.client} • {service.clientStory.industry}
                    </div>
                    <div className="text-base font-bold text-white leading-snug mb-3">
                      &ldquo;{service.clientStory.headline}&rdquo;
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                      {service.clientStory.result}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-6 pt-4 border-t border-slate-800">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Supported Platforms & Frameworks
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
            <Cpu className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No services match your criteria</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting your search or filter.</p>
            <button
              onClick={() => {
                setActiveFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Delivery Methodology Framework (Infosys-Grade) */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
            The OveraTech Delivery Blueprint
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            How We Execute Enterprise Programs at Scale
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            A battle-tested 4-phase transformation framework ensuring continuous business continuity, regulatory compliance, and rapid time-to-value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "Phase 01",
              title: "Discover & Model",
              description: "Automated telemetry discovery, dependency mapping, and business outcome modeling with mutual NDAs.",
            },
            {
              step: "Phase 02",
              title: "Rapid Proof-of-Value",
              description: "4-week production slice deployment validating throughput, security posture, and financial return.",
            },
            {
              step: "Phase 03",
              title: "Industrialized Scale",
              description: "Wave-based migration and deployment leveraging automated CI/CD and zero-downtime cutover scripts.",
            },
            {
              step: "Phase 04",
              title: "Continuous Evolution",
              description: "Ongoing FinOps governance, autonomous model re-training, and proactive security resilience.",
            },
          ].map((phase, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-800/70 border border-slate-700/80">
              <div className="text-xs font-bold text-emerald-400 mb-1">{phase.step}</div>
              <h4 className="text-base font-bold text-white mb-2">{phase.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
