"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export const CultureSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image (5 cols) */}
          <div className="lg:col-span-5 relative rounded-[28px] overflow-hidden h-[400px] sm:h-[480px] shadow-2xl border border-zinc-800">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="OveraTech team collaborating"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover brightness-75 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-mono text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                OVERATECH CULTURE
              </div>
              <div className="text-base sm:text-lg font-medium text-white leading-snug">
                &ldquo;Small, lethal squads of senior engineers out-ship traditional 50-person consulting teams every time.&rdquo;
              </div>
            </div>
          </div>

          {/* Right: Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              BUILT FOR BUILDERS
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              A different kind of <br />
              <span className="text-zinc-500 font-light">technology partner.</span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
              Most consulting agencies sell you on their senior partners, then hand off your project to junior trainees. We don&apos;t do that. At OveraTech, you work directly with principal engineers who have designed and scaled systems that handle real production load.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "Direct Architect Access", desc: "No account managers in between your team and our code." },
                { title: "High-Standard Codebases", desc: "Strict linting, full test coverage, and modular documentation." },
                { title: "Transparent Sprints", desc: "Daily GitHub commits, open Slack channels, and live staging links." },
                { title: "Zero Lock-In", desc: "Complete code ownership, clean handoffs, and knowledge transfer." },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                    <Check className="w-4 h-4" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs tracking-wider uppercase hover:bg-emerald-400 transition-colors shadow-md inline-flex items-center gap-2"
              >
                <span>About Our Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/careers"
                className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold text-xs tracking-wider uppercase hover:text-white hover:border-zinc-700 transition-colors"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};