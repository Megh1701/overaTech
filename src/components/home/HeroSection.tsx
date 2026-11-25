"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  PhoneCall,
  ChevronDown,
  ArrowRight,
  Code2,
  Sparkles,
  Layers,
  FileText,
  Users,
  Compass
} from "lucide-react";
import { navigationItems } from "@/data/navigation";

const pillNavLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export const HeroSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll without layout shift when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="p-3 sm:p-4.5 bg-white">
      {/* Full Solid Pure White Frame around entire first page with 16px rounded corners */}
      <section className="relative min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-36px)] rounded-[16px] overflow-hidden shadow-2xl flex flex-col justify-between bg-zinc-950">
        {/* Full-Bleed Background Image inside the 16px rounded border */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=85"
            alt="OveraTech Engineering"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.38] contrast-[1.08] scale-105"
          />
          {/* Subtle Obsidian & Emerald depth gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />
        </div>

        {/* 1. TOP: Navigation Bar INSIDE the 16px rounded border - z-50 to stay ABOVE the backdrop & drawer */}
        <header className="relative z-50 pt-4 sm:pt-6 px-4 sm:px-8 lg:px-12 pointer-events-auto">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            {/* Left: Button (Open and Close at EXACT same place) + Logo */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative">
                {/* When closed: the button surface has layoutId */}
                {!isMobileMenuOpen && (
                  <motion.div
                    layoutId="hero-drawer-surface"
                    className="absolute inset-0 rounded-full bg-white shadow-md"
                    style={{ borderRadius: 20 }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                {/* THE BUTTON: Stays at the exact same spot. Open & Close are the same button! */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95 shadow-md ${
                    isMobileMenuOpen 
                      ? "bg-zinc-200/80 text-zinc-950 border border-zinc-300 hover:bg-zinc-300" 
                      : "bg-white text-zinc-900 hover:scale-105"
                  }`}
                  aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                  <div className="w-4 h-3.5 relative flex flex-col justify-between items-center pointer-events-none">
                    <motion.span
                      animate={isMobileMenuOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                      transition={{ type: "spring", stiffness: 380, damping: 26 }}
                      className="w-full h-[2px] bg-zinc-950 rounded-full block origin-center"
                    />
                    <motion.span
                      animate={isMobileMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                      transition={{ duration: 0.15 }}
                      className="w-full h-[2px] bg-zinc-950 rounded-full block"
                    />
                    <motion.span
                      animate={isMobileMenuOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                      transition={{ type: "spring", stiffness: 380, damping: 26 }}
                      className="w-full h-[2px] bg-zinc-950 rounded-full block origin-center"
                    />
                  </div>
                </button>
              </div>

              {/* OveraTech Official Logo */}
              <Link
                href="/"
                className="group flex items-center transition-opacity hover:opacity-90 relative z-10"
                aria-label="OveraTech"
              >
                <div className="relative h-6 sm:h-7 w-auto aspect-[936/129]">
                  <Image
                    src={isMobileMenuOpen ? "/logo-dark.png" : "/logo-light.png"}
                    alt="OveraTech"
                    width={936}
                    height={129}
                    priority
                    className="h-full w-auto object-contain transition-opacity duration-200"
                  />
                </div>
              </Link>
            </div>

            {/* Center: Glassmorphic Pill Nav with Smooth Motion Layout Hover (Blurred & faded when menu open) */}
            <nav 
              onMouseLeave={() => setHoveredNav(null)}
              className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/20 bg-white/15 backdrop-blur-xl text-white shadow-lg relative z-10 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0 pointer-events-none filter blur-sm scale-95" : "opacity-100"
              }`}
            >
              {pillNavLinks.map((link) => {
                const isHovered = hoveredNav === link.label;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onMouseEnter={() => setHoveredNav(link.label)}
                    className="relative px-4 py-1 text-[13px] font-semibold rounded-full text-white/90 hover:text-white transition-colors duration-150 whitespace-nowrap"
                  >
                    {isHovered && (
                      <motion.div
                        layoutId="hero-navbar-pill"
                        className="absolute inset-0 rounded-full bg-white/25 backdrop-blur-md border border-white/30 shadow-xs"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right: Contact Us Pill Button (Blurred & faded when menu open) */}
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-[13px] font-semibold tracking-tight transition-all duration-300 shadow-md bg-white text-zinc-900 hover:bg-emerald-50 hover:text-emerald-950 active:scale-95 relative z-10 ${
                isMobileMenuOpen ? "opacity-0 pointer-events-none filter blur-sm scale-95" : "opacity-100"
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>Contact Us</span>
            </Link>
          </div>
        </header>

        {/* 2. CENTER: Pure, Clean, Single Plain Tagline */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-5xl mx-auto my-auto py-20 sm:py-28">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-normal text-white tracking-tight leading-[1.05] select-none drop-shadow-sm animate-fade-in-up">
            Navigate your next
          </h1>
        </div>

        {/* 3. BOTTOM: Clean breathable margin */}
        <div className="relative z-20 pb-6 px-4 text-center pointer-events-none">
          <div className="inline-flex items-center gap-2 text-white/50 text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Engineering &amp; Technology Studio
          </div>
        </div>

        {/* LEFT DRAWER: Floating Card with elegant margins on all sides (NOT full flush) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Dark Frosted Backdrop at z-35 (BEHIND the header at z-50) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="fixed inset-0 bg-black/75 backdrop-blur-md z-35 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* The expanded drawer panel with MARGIN on left, top, and bottom, rounded on all 4 corners */}
              <motion.div
                layoutId="hero-drawer-surface"
                className="fixed top-2 left-2 bottom-2 sm:top-3 sm:left-3 sm:bottom-3 md:top-4 md:left-4 md:bottom-4 w-[calc(100vw-16px)] sm:w-[460px] md:w-[480px] bg-white text-zinc-900 shadow-2xl z-40 flex flex-col overflow-hidden rounded-[24px] sm:rounded-[28px] border border-zinc-200/80"
                style={{ borderRadius: 28 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              >
                {/* Content inside expanded panel */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.08 }}
                  className="flex flex-col h-full overflow-hidden"
                >
                  {/* Top spacing reserved for the pinned button and logo in the header */}
                  <div className="pt-20 sm:pt-24 px-6 pb-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/70">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
                      Directory &amp; Navigation
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full uppercase">
                      OVERATECH
                    </span>
                  </div>

                  {/* Body navigation items */}
                  <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
                    {/* Primary Navigation Cards */}
                    <div>
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          { title: "Services & Capabilities", desc: "Product engineering, AI, and cloud systems", href: "/services", icon: Code2 },
                          { title: "Industry Domains", desc: "FinTech, HealthTech, logistics, and SaaS", href: "/industries", icon: Layers },
                          { title: "Engineering Insights", desc: "Technical journal and research notes", href: "/insights", icon: FileText },
                          { title: "About OveraTech", desc: "Senior squad philosophy, founders, and ethos", href: "/about", icon: Users },
                          { title: "Digital Transformation", desc: "Architectural modernization & accelerators", href: "/digital-transformation", icon: Compass },
                          { title: "Careers & Culture", desc: "Join our senior engineering team", href: "/careers", icon: Sparkles },
                        ].map((card, idx) => {
                          const Icon = card.icon;
                          return (
                            <Link
                              key={idx}
                              href={card.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="group p-3 rounded-2xl bg-zinc-50 hover:bg-emerald-50/80 border border-zinc-200/60 hover:border-emerald-300 transition-all duration-200 flex items-center gap-3.5"
                            >
                              <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:text-emerald-600 group-hover:border-emerald-300 transition-colors shrink-0">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors flex items-center justify-between">
                                  <span>{card.title}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-600" />
                                </div>
                                <div className="text-xs text-zinc-500 truncate mt-0.5">
                                  {card.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Accordion Categories */}
                    <div className="border-t border-zinc-100 pt-4">
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                        All Sections
                      </div>
                      <div className="divide-y divide-zinc-100">
                        {navigationItems.map((item) => {
                          const hasCategories = Boolean(item.categories && item.categories.length > 0);
                          const isExpanded = mobileExpandedSection === item.name;

                          return (
                            <div key={item.name} className="py-1">
                              {hasCategories ? (
                                <div>
                                  <button
                                    onClick={() =>
                                      setMobileExpandedSection(isExpanded ? null : item.name)
                                    }
                                    className="w-full flex items-center justify-between py-2 text-sm font-semibold text-zinc-800 hover:text-emerald-600 transition-colors cursor-pointer"
                                  >
                                    <span>{item.name}</span>
                                    <ChevronDown
                                      className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                                        isExpanded ? "rotate-180 text-emerald-600" : ""
                                      }`}
                                    />
                                  </button>
                                  {isExpanded && item.categories && (
                                    <div className="pl-3 pb-3 pt-1 space-y-3">
                                      {item.categories.map((cat, cIdx) => (
                                        <div key={cIdx} className="space-y-1">
                                          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600">
                                            {cat.title}
                                          </div>
                                          <div className="grid grid-cols-2 gap-1">
                                            {cat.items.map((sub, sIdx) => (
                                              <Link
                                                key={sIdx}
                                                href={sub.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block text-xs text-zinc-600 hover:text-emerald-600 py-1"
                                              >
                                                {sub.name}
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  href={item.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-2 text-sm font-semibold text-zinc-800 hover:text-emerald-600"
                                >
                                  {item.name}
                                </Link>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="p-4 sm:p-5 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between gap-3">
                    <div className="text-xs text-zinc-500 font-mono truncate">
                      contact@overatech.com
                    </div>
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-950 hover:bg-emerald-600 text-white font-semibold text-xs rounded-full transition-colors shadow-md"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};