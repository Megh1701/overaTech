import React from "react";
import Image from "next/image";
import { 
  Shield, 
  GraduationCap, 
  HeartHandshake, 
  Target, 
  CheckCircle2, 
  Leaf, 
  Globe2, 
  TrendingUp,
  Cpu
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { leadershipData, companyMilestones, valuePillars } from "@/data/leadership";
import { ContactBanner } from "@/components/home/ContactBanner";

export const metadata = {
  title: "About OveraTech | Corporate Overview, Leadership & Values",
  description: "Learn how OveraTech pioneers next-generation digital services, enterprise cloud architectures, and responsible AI for the Global 2000.",
};

const pillarIcons: Record<string, React.ElementType> = {
  Target,
  Shield,
  GraduationCap,
  HeartHandshake,
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative bg-slate-950 text-white pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh opacity-50" />
        <div className="absolute inset-0 bg-pattern-grid opacity-25" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Globe2 className="w-3.5 h-3.5" />
              <span>About OveraTech</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Pioneering Enterprise Transformation with{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-200 to-cyan-300 bg-clip-text text-transparent">
                Purpose & Precision
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
              We are a next-generation global technology consulting titan empowering the world&apos;s most vital institutions to build autonomous, resilient, and human-aligned digital futures.
            </p>

            <div className="flex flex-wrap gap-6 pt-4 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>120,000+ Global Innovators</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>54 Operating Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Net-Carbon Footprint</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Mission & Dual Engine Philosophy */}
      <section className="py-20 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Our Mission & Philosophy"
                title="The Dual-Engine Model:"
                highlight="Modernize & Accelerate"
                description="OveraTech operates on a proven dual-engine methodology that enables legacy institutions to continuously reinvent themselves without risking operational stability."
              />

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Most enterprises face a false dilemma: either protect the core and stagnate, or recklessly innovate and invite systemic failure. OveraTech dissolves this paradox.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Engine 1: Core Modernization</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Refactoring monolithic ERP/CRM stacks, migrating databases to cloud fabrics, and instituting zero-trust defense.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-3">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-emerald-950 text-sm">Engine 2: Digital Acceleration</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Deploying generative AI agents, headless microservices, and autonomous data pipelines that capture new market share.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="OveraTech Global Headquarters Campus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    Global Innovation Hubs
                  </div>
                  <div className="text-lg font-bold">
                    San Francisco • London • Frankfurt • Singapore • Bengaluru • Tokyo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Pillars */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionHeading
              align="center"
              eyebrow="Our North Star"
              title="The OveraTech"
              highlight="Core Values"
              description="Four enduring principles govern every line of code we ship, every client partnership we forge, and every career we build."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePillars.map((pillar, idx) => {
              const Icon = pillarIcons[pillar.iconName] || Target;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section id="leadership" className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow="Corporate Governance"
              title="Guided by Visionary"
              highlight="Enterprise Leadership"
              description="Our executive committee brings decades of combined experience leading major technology firms, global defense programs, and foundational research institutes."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipData.map((leader, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {leader.name}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-700 mt-0.5">
                      {leader.role}
                    </div>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] italic text-slate-600">
                    &ldquo;{leader.quote}&rdquo;
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Milestones Timeline */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionHeading
              align="center"
              eyebrow="Our Journey"
              title="Milestones in"
              highlight="Enterprise Innovation"
              description="A track record of continuous reinvention and expanding global impact."
            />
          </div>

          <div className="relative border-l-2 border-emerald-300 ml-4 md:ml-32 space-y-12">
            {companyMilestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-emerald-600 border-4 border-white shadow-md group-hover:scale-125 transition-transform" />
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-1">
                  {m.year}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mt-1">{m.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & ESG Commitments */}
      <section id="esg" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-emerald-950 text-white relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>ESG & Responsible Stewardship</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Committed to Net-Zero Emissions and Equitable Digital Growth
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed max-w-2xl">
                  OveraTech operates with 100% renewable electricity across all major campuses, runs community digital literacy programs reaching 250,000+ students, and enforces ethical AI guidelines compliant with the EU AI Act.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                <div className="p-4 rounded-xl bg-emerald-900/80 border border-emerald-700/60 text-center">
                  <div className="text-3xl font-black text-emerald-400">100%</div>
                  <div className="text-xs text-emerald-200 font-medium">Renewable Energy Powered</div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-900/80 border border-emerald-700/60 text-center">
                  <div className="text-3xl font-black text-emerald-400">AA</div>
                  <div className="text-xs text-emerald-200 font-medium">MSCI ESG Leader Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partner CTA */}
      <ContactBanner />
    </div>
  );
}
