import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Cloud, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Cpu, 
  Zap 
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { MaturityAssessmentTool } from "@/components/digital-transformation/MaturityAssessmentTool";
import { ContactBanner } from "@/components/home/ContactBanner";

export const metadata = {
  title: "Digital Transformation Platforms | OveraTech Nexus & Stratus",
  description: "Accelerate enterprise reinvention with OveraTech Nexus Generative AI Suite, Stratus Multi-Cloud Platform, and CyberShield Zero Trust Architecture.",
};

export default function DigitalTransformationPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative bg-slate-950 text-white pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh opacity-55" />
        <div className="absolute inset-0 bg-pattern-grid opacity-25" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Enterprise Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              The Architecture of the{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-200 to-cyan-300 bg-clip-text text-transparent">
                Autonomous Enterprise
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
              We engineer the foundational cognitive platforms and multi-cloud backbones that allow Global 2000 leaders to evolve at the speed of digital disruption.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#nexus"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                OveraTech Nexus AI Suite
              </a>
              <a
                href="#stratus"
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                OveraTech Stratus Cloud
              </a>
              <a
                href="#maturity"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Launch Maturity Tool
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Platform 1: OveraTech Nexus AI Deep Dive */}
      <section id="nexus" className="py-20 lg:py-28 scroll-mt-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>Enterprise Generative AI Suite</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                OveraTech Nexus AI™: Moving Beyond Static Copilots to{" "}
                <span className="text-emerald-600">Autonomous Swarms</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Most enterprise generative AI efforts stall at the pilot stage due to hallucinations, compliance fears, and fragile prompts. OveraTech Nexus provides the end-to-end cognitive fabric required to deploy governed, multi-agent autonomous swarms directly into your core business applications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: "Multi-Agent Orchestrator",
                    desc: "Autonomous agent swarms executing complex multi-step workflows across finance, customer support, and supply chain.",
                  },
                  {
                    title: "Confidential RAG Fabric",
                    desc: "Real-time vector embeddings and semantic graph indexing with zero data retention by foundation model providers.",
                  },
                  {
                    title: "Active Guardrails & LLMOps",
                    desc: "Continuous latency, toxicity, bias, and hallucination monitoring with sub-10ms automated enforcement.",
                  },
                  {
                    title: "14-Day Solution Blueprints",
                    desc: "Pre-trained domain models and workflow connectors for banking, pharma, manufacturing, and commerce.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/contact?subject=Nexus%20AI%20Deployment"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <span>Request Nexus AI Architecture Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
                  Nexus Architecture Stack
                </div>
                
                {/* Visual Architecture Layers */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-800/80">
                    <div className="text-xs font-bold text-emerald-300">Layer 4: Agent Swarm & App Interfaces</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Autonomous Workers • Natural Language APIs • Human-in-the-Loop Portals</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-700">
                    <div className="text-xs font-bold text-white">Layer 3: Guardrails & Governance Engine</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Confidential Enclaves • Hallucination Filter • Role-Based Masking</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-700">
                    <div className="text-xs font-bold text-white">Layer 2: Hybrid Model & RAG Orchestration</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Fine-Tuned Domain LLMs • Vector Stores • Semantic Cache</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-700">
                    <div className="text-xs font-bold text-white">Layer 1: Enterprise Data Fabric</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">SAP • Salesforce • Oracle • Kafka Streams • Object Stores</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-center">
                  <div className="p-2 rounded-lg bg-slate-900">
                    <div className="text-xl font-black text-emerald-400">3.4x</div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Average ROI</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900">
                    <div className="text-xl font-black text-cyan-400">&lt; 14 Days</div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Production Slice</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform 2: OveraTech Stratus Cloud Deep Dive */}
      <section id="stratus" className="py-20 lg:py-28 scroll-mt-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
                  Multi-Cloud FinOps Telemetry
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Multi-Cloud Cost Waste Avoided</span>
                    <span className="font-bold text-emerald-400">-38%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[62%]" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Wave Migration Automation</span>
                    <span className="font-bold text-emerald-400">+45% Speed</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[85%]" />
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-400 leading-relaxed">
                  Stratus automates discovery across AWS, Azure, Google Cloud, and private data centers, generating infrastructure-as-code (IaC) templates in minutes.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <Cloud className="w-3.5 h-3.5" />
                <span>Multi-Cloud Modernization Suite</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                OveraTech Stratus Cloud™: Zero-Friction Hybrid{" "}
                <span className="text-indigo-600">Multi-Cloud Acceleration</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Cloud migration is rarely simple when dealing with legacy mainframe dependencies, unpredictable egress bills, and multi-region regulatory boundaries. OveraTech Stratus delivers the automated migration factories and real-time FinOps governance required to conquer multi-cloud sprawl.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  {
                    title: "Automated Workload Classification & Wave Planning",
                    desc: "Dependency graph telemetry scanning 10,000+ servers to orchestrate low-risk migration waves.",
                  },
                  {
                    title: "Unified Kubernetes & Service Mesh Blueprint",
                    desc: "Consistent security posture and zero-downtime blue/green deployment across AWS, Azure, and GCP.",
                  },
                  {
                    title: "Real-Time FinOps Economics Guardrails",
                    desc: "Automated rightsizing and idle resource termination saving enterprises an average of 38% in monthly bills.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/contact?subject=Stratus%20Cloud%20Consulting"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <span>Explore Stratus Migration Suite</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform 3: CyberShield Zero-Trust Resilience */}
      <section id="cybershield" className="py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Post-Perimeter Cyber Resilience</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  CyberShield™: Machine-Speed Zero Trust Defense
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  In a distributed cloud and AI era, traditional firewalls are obsolete. CyberShield enforces continuous cryptographic identity verification, micro-segmented workload boundaries, and automated threat containment in under 5 minutes.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-emerald-400" /> Continuous Identity Mesh</span>
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> DORA & NIS2 Compliance</span>
                  <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-emerald-400" /> Sub-Second Quarantine</span>
                </div>
              </div>

              <div className="lg:col-span-4 text-center p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="text-4xl font-black text-emerald-400">&lt; 5 Min</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Mean Threat Mitigation Time</div>
                <p className="text-[11px] text-slate-400 mt-2">Zero breach incidents across managed production workloads.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Maturity Assessment Tool Section */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionHeading
              align="center"
              eyebrow="Diagnostic Self-Assessment"
              title="Measure Your Enterprise"
              highlight="Digital Readiness"
              description="Identify architectural bottlenecks and receive immediate, customized transformation guidance."
            />
          </div>

          <MaturityAssessmentTool />
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner />
    </div>
  );
}
