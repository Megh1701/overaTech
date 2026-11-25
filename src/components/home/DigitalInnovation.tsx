"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Cpu, ShieldCheck } from "lucide-react";

export const DigitalInnovation: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              ACCELERATED DELIVERY
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-950 tracking-tight leading-[1.1]">
              Zero boilerplate. <br />
              <span className="text-zinc-400 font-light">Day-one velocity.</span>
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              Instead of reinventing authentication, infrastructure scaffolding, or LLM pipelines on every build, we leverage battle-tested internal accelerators to ship production systems in record time.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Pre-Architected Cloud Foundations</h4>
                  <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                    Terraform modules and Dockerized microservices ready for AWS, GCP, or bare metal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Hardened Security & Compliance</h4>
                  <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                    SOC2-ready audit logging, automated dependency scanning, and zero-trust API gateways.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white font-semibold text-xs tracking-wider uppercase hover:bg-emerald-600 transition-colors shadow-md"
              >
                <span>Explore Our Engineering Stack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Simulated Terminal / Architecture Visual (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] bg-zinc-950 text-zinc-300 p-6 sm:p-8 border border-zinc-800 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-zinc-800" />
                  <span className="w-3 h-3 rounded-full bg-zinc-800" />
                  <span className="w-3 h-3 rounded-full bg-zinc-800" />
                  <span className="text-zinc-500 text-[11px] ml-2">architecture.config.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>OVERA-CORE v2.4</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3 leading-relaxed">
                <div>
                  <span className="text-emerald-400">export const</span>{" "}
                  <span className="text-white font-bold">productionCore</span> = defineSystem&#123;
                </div>
                <div className="pl-4 text-zinc-400">
                  runtime: <span className="text-emerald-300">&quot;edge-distributed&quot;</span>,
                </div>
                <div className="pl-4 text-zinc-400">
                  concurrency: <span className="text-white font-bold">&quot;unbounded-event-loop&quot;</span>,
                </div>
                <div className="pl-4 text-zinc-400">
                  aiPipeline: &#123;
                </div>
                <div className="pl-8 text-zinc-500">
                  modelRouter: <span className="text-emerald-300">&quot;adaptive-latency-optimized&quot;</span>,
                </div>
                <div className="pl-8 text-zinc-500">
                  vectorCache: <span className="text-emerald-300">&quot;redis-semantic-v4&quot;</span>,
                </div>
                <div className="pl-8 text-zinc-500">
                  auditMode: <span className="text-emerald-300">&quot;cryptographic-hash-logged&quot;</span>
                </div>
                <div className="pl-4 text-zinc-400">&#125;,</div>
                <div className="pl-4 text-zinc-400">
                  telemetry: &#123; p99_latency_sla: <span className="text-emerald-400 font-bold">&quot;&lt; 40ms&quot;</span>, uptime: <span className="text-emerald-400 font-bold">&quot;99.99%&quot;</span> &#125;
                </div>
                <div>&#125;;</div>
              </div>

              {/* Live Metric Badges */}
              <div className="mt-6 pt-5 border-t border-zinc-800/80 grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-emerald-400 text-lg font-bold">12ms</div>
                  <div className="text-[10px] text-zinc-500 uppercase mt-0.5">Cold Start</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-emerald-400 text-lg font-bold">0 CVEs</div>
                  <div className="text-[10px] text-zinc-500 uppercase mt-0.5">Security Score</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-emerald-400 text-lg font-bold">100%</div>
                  <div className="text-[10px] text-zinc-500 uppercase mt-0.5">Automated CI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};