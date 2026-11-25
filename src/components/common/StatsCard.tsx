import React from "react";

interface StatsCardProps {
  value: string;
  label: string;
  description?: string;
  theme?: "light" | "dark" | "gradient";
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  value,
  label,
  description,
  theme = "light",
  className = "",
}) => {
  return (
    <div
      className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg ${
        theme === "dark"
          ? "bg-zinc-900/90 border border-zinc-800 text-white"
          : theme === "gradient"
          ? "bg-gradient-to-br from-zinc-900 to-emerald-950 border border-emerald-900/50 text-white"
          : "bg-white border border-zinc-200/80 text-zinc-900 shadow-xs"
      } ${className}`}
    >
      <div className="flex items-baseline gap-1">
        <span
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            theme === "light"
              ? "text-emerald-700"
              : "bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"
          }`}
        >
          {value}
        </span>
      </div>
      <div
        className={`text-sm sm:text-base font-bold mt-2 ${
          theme === "light" ? "text-zinc-800" : "text-zinc-200"
        }`}
      >
        {label}
      </div>
      {description && (
        <p
          className={`text-xs mt-1.5 leading-relaxed ${
            theme === "light" ? "text-zinc-500" : "text-zinc-400"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

