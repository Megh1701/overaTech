import React, { Suspense } from "react";
import { ServicesClient } from "@/components/services/ServicesClient";
import { ContactBanner } from "@/components/home/ContactBanner";
import { Layers } from "lucide-react";

export const metadata = {
  title: "Enterprise Digital Services & Practices | OveraTech",
  description: "Comprehensive portfolio of next-generation IT services: AI & Agentic Automation, Cloud Modernization, Digital Product Engineering, Cybersecurity, and ERP/CRM.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative bg-slate-950 text-white pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh opacity-50" />
        <div className="absolute inset-0 bg-pattern-grid opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Layers className="w-3.5 h-3.5" />
              <span>Enterprise Services Portfolio</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Full-Stack Capabilities for the{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-200 to-cyan-300 bg-clip-text text-transparent">
                Autonomous Digital Era
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
              We architect, engineer, and operate the mission-critical digital systems powering global commerce, healthcare, industry, and finance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Services Catalog */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="py-24 text-center text-slate-500 text-sm">
                Loading OveraTech Services Catalog...
              </div>
            }
          >
            <ServicesClient />
          </Suspense>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactBanner />
    </div>
  );
}
