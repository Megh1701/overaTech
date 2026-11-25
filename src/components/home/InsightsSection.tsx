"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const articles = [
  {
    index: "01",
    category: "SYSTEMS ARCHITECTURE",
    date: "OCT 2026",
    title: "Why We Choose Go & Next.js Over Monolithic Frameworks for Scale",
    summary: "Breaking down the latency benchmarks, memory footprints, and developer ergonomics of modern distributed web services.",
    readTime: "6 MIN READ",
    href: "/insights",
  },
  {
    index: "02",
    category: "APPLIED AI",
    date: "SEP 2026",
    title: "Beyond Basic RAG: Implementing Agentic Multi-Step Reasoning",
    summary: "Architecting self-correcting query pipelines with tool-calling capabilities and deterministic validation.",
    readTime: "9 MIN READ",
    href: "/insights",
  },
  {
    index: "03",
    category: "CLOUD INFRASTRUCTURE",
    date: "AUG 2026",
    title: "Zero-Downtime Blue/Green Deployments with Kubernetes and ArgoCD",
    summary: "A practical guide to progressive canary rollouts, traffic splitting, and automated rollback criteria.",
    readTime: "5 MIN READ",
    href: "/insights",
  },
  {
    index: "04",
    category: "PRODUCT DESIGN",
    date: "JUL 2026",
    title: "The Death of Enterprise Bloat: Designing Software Engineers Actually Love",
    summary: "How keyboard shortcuts, sub-100ms micro-interactions, and tight typography are transforming B2B tools.",
    readTime: "4 MIN READ",
    href: "/insights",
  },
];

export const InsightsSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-mono font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              ENGINEERING JOURNAL
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-950 tracking-tight leading-[1.1]">
              Perspectives &amp; notes <br />
              <span className="text-zinc-400 font-light">from the production frontlines.</span>
            </h2>
          </div>
          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-900 hover:text-emerald-600 transition-colors"
          >
            <span>View All Writing</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Rows */}
        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {articles.map((item) => (
            <Link
              key={item.index}
              href={item.href}
              className="group py-8 sm:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-zinc-50/80 -mx-6 px-6 lg:-mx-12 lg:px-12 transition-colors duration-200"
            >
              <div className="flex items-start gap-6 sm:gap-10">
                <span className="font-mono text-sm text-zinc-400 group-hover:text-emerald-600 transition-colors pt-1">
                  {item.index}
                </span>
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-2 font-mono text-[11px] text-zinc-500">
                    <span className="text-emerald-700 font-semibold">{item.category}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 group-hover:text-emerald-600 transition-colors tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-xs sm:text-sm font-normal leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start lg:self-center font-mono text-xs font-semibold text-zinc-400 group-hover:text-emerald-600 transition-colors shrink-0">
                <span>Read Article</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};