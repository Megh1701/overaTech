"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "High-Throughput Payment Clearing Engine",
    client: "Next-Gen Fintech Scaleup",
    category: "FINTECH & DISTRIBUTED SYSTEMS",
    outcome: "14,000 tx/sec with 0.8ms P99 latency",
    description: "Re-architected a legacy monolith into event-driven Go microservices with Kafka and CockroachDB, eliminating double-spend risks during peak trading spikes.",
    tags: ["Go", "Kafka", "PostgreSQL", "Docker", "AWS"],
    href: "/insights",
  },
  {
    title: "Autonomous Fleet Dispatch & Routing",
    client: "Last-Mile Cold Chain Logistics",
    category: "LOGISTICS & REAL-TIME IOT",
    outcome: "32% fuel reduction & dynamic route re-calculation",
    description: "Engineered real-time WebSockets telemetry processing over 45,000 active delivery vehicles, running automated constraint optimization for delivery windows.",
    tags: ["Next.js", "TypeScript", "Redis", "WebSockets", "GCP"],
    href: "/insights",
  },
  {
    title: "Clinical Document AI & Extraction Pipeline",
    client: "Digital Health Provider",
    category: "HEALTHCARE & APPLIED AI",
    outcome: "85% reduction in manual intake review",
    description: "Built a HIPAA-compliant document parsing engine with local fine-tuned embedding models, extracting structured medical telemetry directly into EHR systems.",
    tags: ["Python", "FastAPI", "Vector DB", "FHIR API", "Docker"],
    href: "/insights",
  },
];

export const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50 border-t border-zinc-200/80">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-300/60 text-emerald-800 text-xs font-mono font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              PROVEN RESULTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-950 tracking-tight leading-[1.1]">
              Selected work &amp; <br />
              <span className="text-zinc-400 font-light">engineering impact.</span>
            </h2>
          </div>
          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-900 hover:text-emerald-600 transition-colors"
          >
            <span>Read All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <Link
              key={idx}
              href={study.href}
              className="group p-8 rounded-[28px] bg-white border border-zinc-200/80 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2.5 py-1 rounded-md">
                    {study.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-medium text-zinc-400 mb-1">{study.client}</div>
                <h3 className="text-xl font-bold text-zinc-950 mb-3 group-hover:text-emerald-700 transition-colors leading-snug">
                  {study.title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {study.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-zinc-100 text-zinc-600 font-mono text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-zinc-100">
                <div className="text-xs font-mono font-bold text-emerald-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {study.outcome}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};