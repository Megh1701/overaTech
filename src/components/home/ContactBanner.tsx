"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

export const ContactBanner: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="rounded-[36px] bg-zinc-950 text-white p-10 sm:p-16 lg:p-20 relative overflow-hidden border border-zinc-800 shadow-2xl">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET&apos;S BUILD SOMETHING EXTRAORDINARY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Ready to engineer your <br />
              <span className="text-emerald-400">next digital milestone?</span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
              Direct access to senior software architects. No sales pressure, no generic pitch decks. Just an honest discussion about your architecture, timeline, and goals.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-full transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book Architecture Call</span>
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 text-white font-semibold text-xs uppercase tracking-wider rounded-full transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Review Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};