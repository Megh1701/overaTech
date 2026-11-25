import React, { Suspense } from "react";
import { ContactClient } from "@/components/contact/ContactClient";
import { PhoneCall } from "lucide-react";

export const metadata = {
  title: "Contact Us & Global Offices | OveraTech",
  description: "Get in touch with OveraTech enterprise partners, request RFPs, or find contact details for our 10+ global innovation hubs and delivery campuses.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative bg-slate-950 text-white pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh opacity-50" />
        <div className="absolute inset-0 bg-pattern-grid opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Global Enterprise Contact</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Connect with an{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-200 to-cyan-300 bg-clip-text text-transparent">
                OveraTech Partner
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
              Whether you are preparing a digital transformation RFP, evaluating multi-agent AI, or exploring strategic partnership, our global teams respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="py-24 text-center text-slate-500 text-sm">
                Loading Contact Desk...
              </div>
            }
          >
            <ContactClient />
          </Suspense>
        </div>
      </section>
    </div>
  );
}

