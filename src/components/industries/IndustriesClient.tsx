"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Landmark, 
  Stethoscope, 
  ShoppingBag, 
  Factory, 
  Zap, 
  Antenna,
  ArrowRight,
  TrendingUp,
  Cpu,
  ShieldAlert,
  Boxes,
  Store,
  Sparkles,
  Leaf,
  Wifi,
  Quote,
  CheckCircle2,
  FileSpreadsheet
} from "lucide-react";
import { industriesData } from "@/data/industries";

const iconMap: Record<string, React.ElementType> = {
  Landmark,
  Stethoscope,
  ShoppingBag,
  Factory,
  Zap,
  Antenna,
  Cpu,
  ShieldAlert,
  TrendingUp,
  Boxes,
  Store,
  Sparkles,
  Leaf,
  Wifi,
};

export const IndustriesClient: React.FC = () => {
  const searchParams = useSearchParams();
  const paramSector = searchParams.get("sector");
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const selectedSector = activeSector ?? paramSector ?? industriesData[0].id;

  useEffect(() => {
    if (paramSector) {
      const element = document.getElementById(paramSector);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [paramSector]);

  const currentIndustry =
    industriesData.find((i) => i.id === selectedSector) || industriesData[0];
  const IconComponent = iconMap[currentIndustry.iconName] || Landmark;

  return (
    <div className="space-y-16">
      {/* Sector Navigation Selector Bar */}
      <div className="flex border-b border-slate-200 overflow-x-auto scrollbar-none gap-2 pb-px bg-slate-50 p-2 rounded-2xl">
        {industriesData.map((ind) => {
          const SectorIcon = iconMap[ind.iconName] || Landmark;
          const isSelected = selectedSector === ind.id;
          return (
            <button
              key={ind.id}
              onClick={() => setActiveSector(ind.id)}
              className={`flex items-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                isSelected
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <SectorIcon className={`w-4 h-4 ${isSelected ? "text-white" : "text-emerald-600"}`} />
              <span>{ind.title.split("&")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Industry Spotlight Display */}
      <div id={currentIndustry.id} className="scroll-mt-32 space-y-12">
        {/* Sector Hero Header with Image */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white shadow-2xl">
          <div className="relative h-72 sm:h-96 w-full">
            <Image
              src={currentIndustry.image}
              alt={currentIndustry.title}
              fill
              sizes="100vw"
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
            
            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 w-fit">
                <IconComponent className="w-3.5 h-3.5" />
                <span>{currentIndustry.title}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white max-w-3xl leading-tight">
                {currentIndustry.heroHeadline}
              </h2>
              <p className="text-xs sm:text-base text-slate-300 max-w-2xl mt-3 leading-relaxed">
                {currentIndustry.description}
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 bg-slate-900/90 border-t border-slate-800 p-6">
            {currentIndustry.stats.map((st, idx) => (
              <div key={idx} className="p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                  {st.value}
                </div>
                <div className="text-xs text-slate-300 font-semibold mt-1">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Strategic Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Industry Challenges (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Sector Pressure Points
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Key Challenges We Solve in {currentIndustry.title.split("&")[0]}
            </h3>
            <div className="space-y-3">
              {currentIndustry.challenges.map((ch, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{ch}</span>
                </div>
              ))}
            </div>

            {/* Accelerators callout */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <FileSpreadsheet className="w-4 h-4" />
                <span>Pre-Built Domain Accelerators</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {currentIndustry.accelerators.map((acc, aIdx) => (
                  <li key={aIdx} className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{acc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* OveraTech Solutions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Strategic Interventions
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              OveraTech Engineered Solutions
            </h3>

            <div className="space-y-4">
              {currentIndustry.solutions.map((sol, sIdx) => {
                const SolIcon = iconMap[sol.icon] || Cpu;
                return (
                  <div key={sIdx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <SolIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900 mb-1">
                          {sol.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {sol.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Case Study Feature */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950 text-white shadow-xl relative overflow-hidden">
              <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">
                Industry Case Study Spotlight
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {currentIndustry.caseStudy.title}
              </h4>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-4">
                {currentIndustry.caseStudy.metrics}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentIndustry.caseStudy.summary}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800 text-xs italic text-slate-400">
                <Quote className="w-4 h-4 text-emerald-400 mb-1 inline mr-1" />
                &ldquo;{currentIndustry.caseStudy.quote}&rdquo;
                <div className="text-[11px] font-semibold text-slate-300 mt-1 not-italic">
                  — {currentIndustry.caseStudy.author}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex items-center gap-4">
              <Link
                href={`/contact?subject=${encodeURIComponent(currentIndustry.title)}`}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <span>Request {currentIndustry.title.split("&")[0]} Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="text-xs font-semibold text-slate-600 hover:text-emerald-600"
              >
                Browse Cross-Industry Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
