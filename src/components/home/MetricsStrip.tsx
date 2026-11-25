import React from "react";
import { Terminal, Shield, Zap, Sparkles } from "lucide-react";

const principles = [
  {
    index: "01",
    title: "Senior Engineering Only",
    description: "Every line of code is written and reviewed by principal builders. Zero junior outsourcing or agency bloat.",
    icon: Terminal,
  },
  {
    index: "02",
    title: "Type-Safe & Scalable",
    description: "End-to-end typed architectures across Next.js, Go, Rust, and modern cloud primitives built for resilience.",
    icon: Shield,
  },
  {
    index: "03",
    title: "Velocity Without Debt",
    description: "Continuous deployment pipelines that ship production-ready features in weeks, not quarters.",
    icon: Zap,
  },
  {
    index: "04",
    title: "Applied AI Primitives",
    description: "Real-world model integration, fine-tuned retrieval pipelines, and autonomous workflow agents.",
    icon: Sparkles,
  },
];

export const MetricsStrip: React.FC = () => {
  return (
    <section className="bg-zinc-950 text-white border-y border-zinc-900 relative overflow-hidden">
      {/* Subtle ambient emerald glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[180px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-emerald-500/30 hover:bg-zinc-900/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">
                    {item.index}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};