"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  TrendingUp, 
  Cloud, 
  ShieldCheck, 
  BrainCircuit, 
  Database 
} from "lucide-react";

interface Question {
  id: number;
  category: string;
  icon: React.ElementType;
  question: string;
  description: string;
  options: {
    label: string;
    description: string;
    score: number;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    category: "Cloud & Infrastructure Modernization",
    icon: Cloud,
    question: "What is your current enterprise cloud architecture footprint?",
    description: "Evaluates multi-cloud orchestration and container agility.",
    options: [
      {
        label: "On-Premises Legacy Monolith",
        description: "Primarily physical data centers with minimal virtualization.",
        score: 15,
      },
      {
        label: "Lift-and-Shift Virtual Machines",
        description: "Migrated to IaaS cloud instances without container refactoring.",
        score: 45,
      },
      {
        label: "Hybrid Containerized Microservices",
        description: "Kubernetes and API-first services deployed across hybrid environments.",
        score: 75,
      },
      {
        label: "Autonomous Multi-Cloud FinOps Native",
        description: "Fully automated, governed serverless & multi-cloud with real-time FinOps.",
        score: 100,
      },
    ],
  },
  {
    id: 2,
    category: "Artificial Intelligence & Agentic Swarms",
    icon: BrainCircuit,
    question: "How deeply are AI and autonomous agents integrated into your core operations?",
    description: "Measures transition from experimental copilots to autonomous execution.",
    options: [
      {
        label: "Ad-hoc Individual Copilot Usage",
        description: "Informal, unmonitored employee experiments with public chatbots.",
        score: 20,
      },
      {
        label: "Isolated POC Pilots & Summarization",
        description: "Sandbox retrieval-augmented generation (RAG) and document search pilots.",
        score: 45,
      },
      {
        label: "Domain-Tuned Production Models",
        description: "Fine-tuned models deployed for specific customer support or engineering tasks.",
        score: 75,
      },
      {
        label: "Governed Multi-Agent Autonomous Swarms",
        description: "End-to-end autonomous agentic swarms orchestrating ERP, CRM, and supply chain.",
        score: 100,
      },
    ],
  },
  {
    id: 3,
    category: "Enterprise Data Fabric & Integrity",
    icon: Database,
    question: "How accessible and unified is your cross-departmental data?",
    description: "Evaluates data lakehouse consolidation, latency, and cataloging.",
    options: [
      {
        label: "Siloed Relational Databases",
        description: "Departmental database islands requiring manual weekly export reconciliations.",
        score: 20,
      },
      {
        label: "Centralized Data Warehouse",
        description: "Nightly batch ETL jobs loading reports with 24-hour latency.",
        score: 50,
      },
      {
        label: "Real-Time Lakehouse & Vector Fabric",
        description: "Unified streaming data lakehouse with automated indexing and vector embeddings.",
        score: 80,
      },
      {
        label: "Continuous Cognitive Knowledge Fabric",
        description: "Real-time semantic graph accessible by both human analysts and AI agents.",
        score: 100,
      },
    ],
  },
  {
    id: 4,
    category: "Cybersecurity & Zero-Trust Resilience",
    icon: ShieldCheck,
    question: "What is your identity and threat mitigation architecture?",
    description: "Assesses micro-segmentation, posture automation, and continuous compliance.",
    options: [
      {
        label: "Perimeter Firewall & Legacy VPN",
        description: "Traditional corporate network perimeter with password-only credentials.",
        score: 15,
      },
      {
        label: "Multi-Factor Authentication (MFA) + Endpoint AV",
        description: "MFA across email and SaaS with centralized antivirus scanners.",
        score: 50,
      },
      {
        label: "Micro-Segmented Zero-Trust Architecture",
        description: "Least-privilege access, cloud posture management (CSPM), and automated SIEM.",
        score: 80,
      },
      {
        label: "Autonomous Machine-Speed Defense",
        description: "Self-healing security fabric isolating and remediating threats in sub-seconds.",
        score: 100,
      },
    ],
  },
];

export const MaturityAssessmentTool: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (score: number) => {
    const updated = [...answers];
    updated[currentStep] = score;
    setAnswers(updated);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculateTotalScore = () => {
    if (answers.length === 0) return 0;
    const sum = answers.reduce((a, b) => a + b, 0);
    return Math.round(sum / questions.length);
  };

  const getTierDetails = (score: number) => {
    if (score < 40) {
      return {
        tier: "Foundation Explorer (Level 1)",
        color: "text-amber-600 bg-amber-50 border-amber-200",
        badge: "Significant Modernization Opportunity",
        benchmark: "Bottom 25% of Global 2000 Peers",
        recommendation:
          "Prioritize core modernization and cloud migration to retire costly technical debt before scaling AI workloads.",
      };
    }
    if (score < 70) {
      return {
        tier: "Digital Adopter (Level 2)",
        color: "text-emerald-600 bg-emerald-50 border-emerald-200",
        badge: "Strong Hybrid Foundation",
        benchmark: "Mid-Tier (Competitive with Global Median)",
        recommendation:
          "Unify your data fabric with OveraTech Nexus RAG architecture and adopt FinOps to curtail multi-cloud spend by 30%.",
      };
    }
    return {
      tier: "Autonomous Vanguard (Level 3)",
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
      badge: "Industry Pioneer",
      benchmark: "Top 8% of Global Enterprises",
      recommendation:
        "Accelerate autonomous multi-agent swarms with OveraTech Nexus AI and implement continuous self-healing security mesh.",
    };
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  const score = calculateTotalScore();
  const tier = getTierDetails(score);

  return (
    <div id="maturity" className="scroll-mt-32 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
      <div className="border-b border-slate-100 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Engine</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            OveraTech Enterprise Digital Maturity Benchmark
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Answer 4 diagnostic dimensions to calculate your readiness against Global 2000 benchmarks.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 self-start md:self-center">
          {questions.map((q, idx) => (
            <div
              key={q.id}
              className={`w-8 h-2 rounded-full transition-all ${
                idx < currentStep || isCompleted
                  ? "bg-emerald-600"
                  : idx === currentStep
                  ? "bg-emerald-400 animate-pulse"
                  : "bg-slate-200"
              }`}
            />
          ))}
          <span className="text-xs font-bold text-slate-600 ml-2">
            {isCompleted ? "Complete" : `Step ${currentStep + 1} of ${questions.length}`}
          </span>
        </div>
      </div>

      {!isCompleted ? (
        // Question View
        <div className="space-y-6">
          {(() => {
            const currentQ = questions[currentStep];
            const QuestionIcon = currentQ.icon;

            return (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center">
                    <QuestionIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      {currentQ.category}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                      {currentQ.question}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">{currentQ.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {currentQ.options.map((opt, oIdx) => {
                    const isSelected = answers[currentStep] === opt.score;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(opt.score)}
                        className={`p-5 rounded-2xl border text-left transition-all hover:scale-[1.01] ${
                          isSelected
                            ? "border-emerald-600 bg-emerald-50/80 shadow-md ring-2 ring-emerald-500/20"
                            : "border-slate-200 hover:border-emerald-300 hover:bg-slate-50/50 bg-white"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="font-bold text-sm text-slate-900 mb-1">
                            {opt.label}
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            +{opt.score} pts
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {opt.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Previous Dimension
            </button>
            <span className="text-xs text-slate-400">
              Click an option to automatically advance
            </span>
          </div>
        </div>
      ) : (
        // Results & Benchmark View
        <div className="space-y-8 animate-in zoom-in-95 duration-300">
          <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Diagnostic Assessment Output</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                Maturity Index: {tier.tier}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {tier.benchmark} • {tier.badge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-center shrink-0">
              <div className="text-5xl font-black text-emerald-400">{score}</div>
              <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-1">
                Out of 100 Index
              </div>
            </div>
          </div>

          {/* Strategic Recommendation */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <TrendingUp className="w-4 h-4" />
              <span>Tailored Strategic Recommendation</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {tier.recommendation}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800 p-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Diagnostic Tool</span>
            </button>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href={`/contact?subject=Digital%20Maturity%20Assessment%20(${encodeURIComponent(
                  tier.tier
                )})`}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Request Custom Transformation Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
