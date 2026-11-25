import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  linkHref?: string;
  linkText?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  theme = "light",
  linkHref,
  linkText,
  className = "",
}) => {
  const isDark = theme === "dark";
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider mb-3 px-3 py-1 rounded-full ${
            isDark
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              : "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-zinc-950"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="text-emerald-600">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`text-sm sm:text-base md:text-lg mt-4 leading-relaxed font-normal ${
            isDark ? "text-zinc-400" : "text-zinc-600"
          }`}
        >
          {description}
        </p>
      )}

      {linkHref && linkText && (
        <Link
          href={linkHref}
          className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-emerald-600 hover:text-emerald-700 group transition-colors"
        >
          <span>{linkText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
};
