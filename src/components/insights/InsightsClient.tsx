"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { 
  Search, 
  Clock, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  X, 
  Download, 
  CheckCircle2, 
  FileText
} from "lucide-react";
import { insightsData, InsightItem } from "@/data/insights";

export const InsightsClient: React.FC = () => {
  const searchParams = useSearchParams();
  const initialSlug = searchParams.get("id");

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTheme, setSelectedTheme] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<InsightItem | null>(() => {
    if (initialSlug) {
      return insightsData.find((i) => i.slug === initialSlug) || null;
    }
    return null;
  });
  const [isDownloaded, setIsDownloaded] = useState(false);

  const categories = [
    "All",
    "Research Report",
    "Executive Viewpoint",
    "Case Study",
    "Tech Radar",
    "Whitepaper",
  ];

  const themes = [
    "All",
    "AI & Automation",
    "Cloud",
    "Cybersecurity",
    "Digital Workplace",
    "Sustainability",
  ];

  const filteredInsights = insightsData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesTheme =
      selectedTheme === "All" || item.theme === selectedTheme;
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesTheme && matchesSearch;
  });

  const featured = insightsData.find((i) => i.featured) || insightsData[0];

  const handleDownload = () => {
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  return (
    <div className="space-y-12">
      {/* Featured Flagship Report Hero Card */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white border border-slate-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Research Report 2026</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {featured.title}
            </h2>

            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              {featured.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="relative w-7 h-7 rounded-full overflow-hidden">
                  <Image
                    src={featured.author.avatar}
                    alt={featured.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-white font-medium">{featured.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{featured.readTime}</span>
              </div>
              <span>{featured.publishedDate}</span>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setActiveArticle(featured)}
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Full Executive Paper</span>
              </button>

              <button
                onClick={handleDownload}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{isDownloaded ? "PDF Saved ✓" : "Download PDF Brief (2.4MB)"}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full w-full min-h-[300px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto scrollbar-none pb-2 lg:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reports, topics, authors..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Theme Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-slate-200/80 text-xs">
          <span className="text-slate-400 font-semibold mr-1">Focus Theme:</span>
          {themes.map((th) => (
            <button
              key={th}
              onClick={() => setSelectedTheme(th)}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                selectedTheme === th
                  ? "bg-emerald-100 text-emerald-800 font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              {th}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInsights.map((insight) => (
          <div
            key={insight.id}
            className="group rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  {insight.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                  <span className="font-bold text-emerald-700 uppercase tracking-wider">
                    {insight.theme}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{insight.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                  {insight.title}
                </h3>

                <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                  {insight.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                  <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={insight.author.avatar}
                      alt={insight.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="truncate">{insight.author.name}</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => setActiveArticle(insight)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-slate-200/80"
              >
                <span>Read Full Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredInsights.length === 0 && (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
          <FileText className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h4 className="text-base font-bold text-slate-800">No reports found matching your criteria</h4>
          <p className="text-xs text-slate-500 mt-1">Try resetting your filter or search query.</p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSelectedTheme("All");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  {activeArticle.category} • {activeArticle.theme}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 line-clamp-1">
                  {activeArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-200/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex justify-between">
                  <span>Author: {activeArticle.author.name} ({activeArticle.author.role})</span>
                  <span>{activeArticle.publishedDate}</span>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-100 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Key Executive Takeaways
                </div>
                {activeArticle.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>

              {/* Full Text Content */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeArticle.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{isDownloaded ? "Downloaded!" : "Download Research PDF"}</span>
              </button>

              <button
                onClick={() => setActiveArticle(null)}
                className="text-slate-500 hover:text-slate-800 font-medium"
              >
                Close Paper
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
