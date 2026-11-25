"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Activity, Truck, Cpu } from "lucide-react";

const domains = [
  {
    title: "FinTech & Real-Time Payments",
    tag: "HIGH-CONCURRENCY",
    deliverables: "Low-latency ledgers, automated reconciliation, and instant settlement engines.",
    focus: "Sub-50ms execution, idempotent payment webhooks, SOC2 & PCI compliance.",
    icon: Layers,
    href: "/industries",
  },
  {
    title: "HealthTech & Clinical Telemetry",
    tag: "HIPAA COMPLIANT",
    deliverables: "Real-time vitals monitoring dashboards, clinician workflows, and patient data pipelines.",
    focus: "End-to-end encryption, FHIR standard integration, automated audit logging.",
    icon: Activity,
    href: "/industries",
  },
  {
    title: "Logistics & Fleet Dispatch",
    tag: "REAL-TIME IOT",
    deliverables: "Dynamic order batching, automated driver assignment, and live GPS map tracking.",
    focus: "WebSockets telemetry, geospatial indexing with PostGIS, automated route re-calculation.",
    icon: Truck,
    href: "/industries",
  },
  {
    title: "B2B SaaS & Developer Platforms",
    tag: "MULTI-TENANT",
    deliverables: "Modular workspaces, granular role-based permissions, and metered billing pipelines.",
    focus: "Tenant isolation, Stripe billing sync, lightning-fast edge cache invalidation.",
    icon: Cpu,
    href: "/industries",
  },
];

export const IndustriesSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-pattern-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              DOMAIN SPECIALIZATION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Engineered for high-stakes <br />
              <span className="text-zinc-500 font-light">industry domains.</span>
            </h2>
          </div>
          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>Explore All Domains</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <Link
                key={idx}
                href={domain.href}
                className="group p-8 sm:p-10 rounded-[28px] bg-zinc-900/50 border border-zinc-800/80 hover:border-emerald-500/40 hover:bg-zinc-900/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                      {domain.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                    {domain.deliverables}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 truncate max-w-[260px] sm:max-w-none">
                    {domain.focus}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all shrink-0 ml-3">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};