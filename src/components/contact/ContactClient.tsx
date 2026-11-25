"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ShieldCheck, 
  Clock 
} from "lucide-react";
import { ContactForm } from "@/components/common/ContactForm";
import { globalOffices } from "@/data/offices";

export const ContactClient: React.FC = () => {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") || "Enterprise Transformation Advisory";
  const [selectedRegion, setSelectedRegion] = useState<"All" | "Americas" | "EMEA" | "APAC">("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredOffices = selectedRegion === "All"
    ? globalOffices
    : globalOffices.filter((o) => o.region === selectedRegion);

  const faqs = [
    {
      q: "How does OveraTech protect proprietary client intellectual property and data?",
      a: "Every engagement begins with an executed Mutual NDA. Our cloud and AI architectures operate within confidential compute enclaves with zero model-training retention, fully aligned with SOC 2 Type II, ISO 27001, HIPAA, and GDPR standards.",
    },
    {
      q: "What is the typical ramp-up timeline for an enterprise transformation program?",
      a: "Our standardized 'Phase 01: Discover & Model' takes 2-3 weeks, followed by a functioning production proof-of-value within 4 weeks. Full industrial scale deployment proceeds in governed wave sprints.",
    },
    {
      q: "Can OveraTech respond to formal RFPs (Requests for Proposal)?",
      a: "Yes. Our Global Enterprise Bid & Solutioning Desk responds to enterprise RFPs, RFIs, and security questionnaires with an average turnaround time of 5-10 business days.",
    },
    {
      q: "Do you offer follow-the-sun 24/7 support for mission-critical systems?",
      a: "Yes. Our 65+ delivery centers operate with 24/7/365 follow-the-sun SecOps, FinOps, and SRE monitoring guaranteeing 99.999% SLA availability.",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Top Grid: Contact Form + Direct Enterprise Channels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Form (7 cols) */}
        <div className="lg:col-span-7">
          <ContactForm initialSubject={initialSubject} />
        </div>

        {/* Right Info Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Executive Partner Desk */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Global Enterprise Concierge</span>
            </div>
            <h3 className="text-xl font-bold text-white">Direct Advisory Inquiries</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              For urgent enterprise RFPs, C-suite executive briefings, or strategic alliance discussions, reach our direct regional desks.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Americas: +1 (415) 880-9200</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>EMEA: +44 (0) 20 7946 0199</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>APAC: +65 6832 9000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>executive.partner@overatech.com</span>
              </div>
            </div>
          </div>

          {/* Operational SLAs card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Engagement SLA Commitments</span>
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span>Inquiry Acknowledgment:</span>
                <span className="font-bold text-slate-800">&lt; 4 Hours</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span>Partner Discovery Call:</span>
                <span className="font-bold text-slate-800">Within 24 Hours</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span>Mutual NDA Turnaround:</span>
                <span className="font-bold text-slate-800">Same Business Day</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Security Assurance Brief:</span>
                <span className="font-bold text-slate-800">Immediate Download</span>
              </div>
            </div>
          </div>

          {/* Security & Compliance badges */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Encrypted Transmission</div>
                <div className="text-[11px] text-slate-400">TLS 1.3 / ISO 27001 Certified</div>
              </div>
            </div>
            <span className="text-[10px] px-2 py-1 bg-emerald-50 text-emerald-800 font-bold rounded-full">
              Enterprise Grade
            </span>
          </div>
        </div>
      </div>

      {/* Global Offices Directory Section */}
      <div id="offices" className="scroll-mt-32 space-y-8 pt-8 border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Worldwide Footprint
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Global Headquarters & Delivery Campuses
            </h2>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
            {(["All", "Americas", "EMEA", "APAC"] as const).map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedRegion === reg
                    ? "bg-white text-emerald-700 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffices.map((office) => (
            <div
              key={office.id}
              className={`p-6 rounded-2xl border transition-all hover:shadow-md ${
                office.isHeadquarter
                  ? "bg-emerald-50/70 border-emerald-300 ring-1 ring-emerald-300/50"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{office.city}</h3>
                  <div className="text-xs text-slate-500 font-medium">{office.country} • {office.region}</div>
                </div>
                {office.isHeadquarter && (
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                    Global HQ
                  </span>
                )}
              </div>

              <div className="text-xs font-semibold text-emerald-700 mt-1 mb-3">
                {office.title}
              </div>

              <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                  <span className="leading-snug">{office.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{office.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise FAQs Accordion */}
      <div className="space-y-6 pt-8 border-t border-slate-200">
        <div className="text-center max-w-xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
            Enterprise Inquiries
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-500 mt-1">
            Common questions regarding corporate engagement, security, and procurement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-emerald-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p className="mt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
