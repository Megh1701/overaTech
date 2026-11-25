"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Code2, 
  Sparkles, 
  Cloud, 
  Layout, 
  Cpu, 
  CheckCircle2 
} from "lucide-react";

export const ServicesShowcase: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-mono font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              CAPABILITIES & ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-950 tracking-tight leading-[1.1]">
              Engineered for scale, <br />
              <span className="text-zinc-400 font-light">crafted with precision.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-900 hover:text-emerald-600 transition-colors"
          >
            <span>Explore All Capabilities</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Large (Span 2) - Full-Stack Product Engineering */}
          <div className="lg:col-span-2 rounded-[28px] bg-zinc-950 text-white p-8 sm:p-10 border border-zinc-800/80 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Background ambient mesh */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none group-hover:bg-emerald-500/15 transition-all duration-700" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-emerald-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  PROD_READY // P99 &lt; 45ms
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-white">
                Full-Stack Product & Platform Engineering
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed mb-6 font-normal">
                We engineer scalable web applications, real-time dashboards, and microservice APIs with modern React 19, Next.js, TypeScript, and Go. Built from day one for extreme concurrency and maintainability.
              </p>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js App Router", "TypeScript", "Tailwind CSS", "Go / Rust Core", "PostgreSQL", "Redis Caching"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulated UI/Code Preview Bar */}
            <div className="relative z-10 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  100% Type-Safe
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Edge-Optimized
                </span>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Deep Dive <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Card 2: 1-Col - Applied AI & Agentic Automation */}
          <div className="rounded-[28px] bg-zinc-50 border border-zinc-200/80 p-8 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-2.5 group-hover:text-emerald-700 transition-colors">
                Applied AI & Autonomous Agents
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                Beyond chat wrappers: we build domain-specific agentic loops, function-calling pipelines, semantic search, and private LLM fine-tuning tailored to your data schema.
              </p>
              <div className="space-y-2 text-xs font-mono text-zinc-700">
                <div className="p-2.5 rounded-xl bg-white border border-zinc-200/70 flex items-center justify-between">
                  <span>Semantic Vector Indexing</span>
                  <span className="text-emerald-600 font-bold">99.4% ACC</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-zinc-200/70 flex items-center justify-between">
                  <span>Multi-Agent Task Routing</span>
                  <span className="text-emerald-600 font-bold">120ms</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200/80">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors"
              >
                Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 3: 1-Col - Resilient Cloud Architecture & DevOps */}
          <div className="rounded-[28px] bg-zinc-50 border border-zinc-200/80 p-8 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-105 transition-transform">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-2.5 group-hover:text-emerald-700 transition-colors">
                Cloud Systems & Infrastructure
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                Automated Terraform configurations, zero-downtime Kubernetes deployments, multi-region failover, and strict FinOps cost optimization across AWS and GCP.
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-zinc-200/70 space-y-1 font-mono text-xs text-zinc-600">
                <div className="flex items-center gap-2 text-emerald-600 font-bold">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>IaC Terraform + Helm</span>
                </div>
                <div className="text-[11px] text-zinc-400">Zero-downtime blue/green rollouts</div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200/80">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors"
              >
                Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 4: Large (Span 2) - Design Systems & Digital Experiences */}
          <div className="lg:col-span-2 rounded-[28px] bg-emerald-950 text-white p-8 sm:p-10 border border-emerald-900/60 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-900/60 border border-emerald-700/40 flex items-center justify-center text-emerald-300">
                  <Layout className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-emerald-300 uppercase tracking-wider bg-emerald-900/40 px-3 py-1 rounded-full border border-emerald-700/30">
                  Design Systems // WCAG AAA
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-white">
                Bespoke Design Systems & High-Craft UX
              </h3>
              <p className="text-emerald-200/80 text-sm sm:text-base max-w-xl leading-relaxed mb-6 font-normal">
                Enterprise interfaces shouldn&apos;t feel painful or outdated. We craft fluid design tokens, accessible components, and editorial typography that elevate your brand and delight power users.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Component Libraries", "Micro-Interactions", "Figma-to-Code Sync", "Responsive Motion", "Dark / Light Themes"].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-lg bg-emerald-900/40 border border-emerald-800/60 text-xs font-mono text-emerald-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-emerald-900/60 flex items-center justify-between">
              <span className="text-xs text-emerald-300 font-medium">
                Tailored for modern web standards
              </span>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 hover:text-white transition-colors"
              >
                Explore Design Services <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};