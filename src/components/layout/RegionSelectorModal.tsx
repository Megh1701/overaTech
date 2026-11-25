"use client";

import React, { useState, useEffect } from "react";
import { X, Globe, Check } from "lucide-react";

interface RegionSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
}

const regions = [
  {
    name: "Americas",
    countries: [
      { code: "US", name: "United States (English)", currency: "USD" },
      { code: "CA", name: "Canada (English / Français)", currency: "CAD" },
      { code: "BR", name: "Brazil (Português)", currency: "BRL" },
      { code: "MX", name: "Mexico (Español)", currency: "MXN" },
    ],
  },
  {
    name: "Europe, Middle East & Africa",
    countries: [
      { code: "GB", name: "United Kingdom (English)", currency: "GBP" },
      { code: "DE", name: "Germany (Deutsch / English)", currency: "EUR" },
      { code: "CH", name: "Switzerland (English / Deutsch)", currency: "CHF" },
      { code: "FR", name: "France (Français)", currency: "EUR" },
      { code: "AE", name: "United Arab Emirates (English / Arabic)", currency: "AED" },
      { code: "ZA", name: "South Africa (English)", currency: "ZAR" },
    ],
  },
  {
    name: "Asia Pacific",
    countries: [
      { code: "SG", name: "Singapore (English)", currency: "SGD" },
      { code: "IN", name: "India (English)", currency: "INR" },
      { code: "JP", name: "Japan (日本語 / English)", currency: "JPY" },
      { code: "AU", name: "Australia & NZ (English)", currency: "AUD" },
    ],
  },
];

export const RegionSelectorModal: React.FC<RegionSelectorModalProps> = ({
  isOpen,
  onClose,
  selectedRegion,
  onSelectRegion,
}) => {
  const [activeTab, setActiveTab] = useState("Americas");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <Globe className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-base">Select Your Global Region & Language</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/50"
            aria-label="Close region selector"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Region tabs */}
        <div className="flex border-b border-slate-200 px-6 gap-6 bg-white overflow-x-auto">
          {regions.map((reg) => (
            <button
              key={reg.name}
              onClick={() => setActiveTab(reg.name)}
              className={`py-3 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
                activeTab === reg.name
                  ? "border-emerald-600 text-emerald-600"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {reg.name}
            </button>
          ))}
        </div>

        {/* Countries list */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto">
          {regions
            .find((r) => r.name === activeTab)
            ?.countries.map((country) => {
              const isSelected = selectedRegion === country.name;
              return (
                <button
                  key={country.code}
                  onClick={() => {
                    onSelectRegion(country.name);
                    onClose();
                  }}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "border-emerald-600 bg-emerald-50/70 text-emerald-900 font-semibold shadow-xs"
                      : "border-slate-100 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <div>
                    <div className="text-sm font-medium">{country.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">Region: {country.code} • {country.currency}</div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />}
                </button>
              );
            })}
        </div>

        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Current selection: <strong className="text-slate-800">{selectedRegion}</strong></span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
          >
            Confirm & Save
          </button>
        </div>
      </div>
    </div>
  );
};

