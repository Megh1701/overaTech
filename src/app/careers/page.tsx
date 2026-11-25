import React from "react";
import Link from "next/link";
import { CareersClient } from "@/components/careers/CareersClient";
import { ContactBanner } from "@/components/home/ContactBanner";
import { Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Careers & Culture | OveraTech Global Talent Network",
  description: "Navigate your career next at OveraTech. Explore global opportunities across AI research, cloud architecture, cybersecurity, and enterprise consulting.",
};

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative bg-slate-950 text-white pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh opacity-50" />
        <div className="absolute inset-0 bg-pattern-grid opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Users className="w-3.5 h-3.5" />
              <span>Careers at OveraTech</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Navigate Your Career Next.{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-200 to-cyan-300 bg-clip-text text-transparent">
                Be a Digital Pioneer.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
              Join 120,000+ passionate technologists, AI engineers, and transformation strategists shaping the digital fabric of modern civilization.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#openings"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <span>View Global Open Roles</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/about"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Our Culture & Values
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Careers Content & Job Board */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CareersClient />
        </div>
      </section>

      {/* Global Campuses Spotlight Banner */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
              Global Delivery Infrastructure
            </div>
            <h3 className="text-2xl font-bold text-white">State-of-the-Art Innovation Campuses</h3>
            <p className="text-xs text-slate-400 mt-1">
              Featuring sustainable solar architecture, collaborative design pods, and high-performance AI compute clusters.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { city: "San Francisco", hub: "Global HQ Campus" },
              { city: "London", hub: "EMEA Headquarters" },
              { city: "Frankfurt", hub: "Industry 4.0 Lab" },
              { city: "Singapore", hub: "APAC Headquarters" },
              { city: "Bengaluru", hub: "AI & Innovation Campus" },
              { city: "Tokyo", hub: "Digital Product Studio" },
            ].map((campus, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
                <div className="text-sm font-bold text-white">{campus.city}</div>
                <div className="text-[11px] text-emerald-400 font-medium mt-0.5">{campus.hub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner />
    </div>
  );
}
