"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { 
  PhoneCall,
  ChevronDown,
  ArrowRight,
  Code2,
  Layers,
  FileText,
  Users,
  Compass,
  Sparkles
} from "lucide-react";
import { navigationItems } from "@/data/navigation";

const pillNavLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  // Scroll detection for header style transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
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

  // Close mobile menu on route change during render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  const isHomePage = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto ${
          isHomePage
            ? isScrolled
              ? "opacity-100 pointer-events-auto translate-y-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200/80 py-3"
              : "opacity-0 pointer-events-none -translate-y-4"
            : "bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-100 py-3"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Left: Button (Open & Close in SAME place) + Logo */}
            <div className="flex items-center gap-4">
              <div className="relative">
                {/* When closed: the button background has layoutId */}
                {!isMobileMenuOpen && (
                  <motion.div
                    layoutId="header-drawer-surface"
                    className="absolute inset-0 rounded-full bg-zinc-100 shadow-sm"
                    style={{ borderRadius: 20 }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                {/* THE BUTTON: Stays at the exact same spot */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95 shadow-sm ${
                    isMobileMenuOpen 
                      ? "bg-zinc-200/80 text-zinc-950 border border-zinc-300 hover:bg-zinc-300" 
                      : "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 hover:scale-105"
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
                    src="/logo-dark.png"
                    alt="OveraTech"
                    width={936}
                    height={129}
                    priority
                    className="h-full w-auto object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Center: Pill-shaped Navigation Bar with Motion Layout (Blurred & faded when menu open) */}
            <nav 
              onMouseLeave={() => setHoveredNav(null)}
              className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border border-zinc-200/80 bg-zinc-100/80 text-zinc-700 shadow-2xs relative z-10 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0 pointer-events-none filter blur-sm scale-95" : "opacity-100"
              }`}
            >
              {pillNavLinks.map((link) => {
                const isHovered = hoveredNav === link.label;
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onMouseEnter={() => setHoveredNav(link.label)}
                    className="relative px-4 py-1 text-[13px] font-semibold rounded-full text-zinc-700 hover:text-zinc-950 transition-colors whitespace-nowrap"
                  >
                    {isHovered && (
                      <motion.div
                        layoutId="header-navbar-pill"
                        className="absolute inset-0 rounded-full bg-white shadow-xs border border-zinc-200/70"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className={`relative z-10 ${isActive ? "text-emerald-700 font-bold" : ""}`}>
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Right: Contact Us Button (Blurred & faded when menu open) */}
            <div className={`flex items-center gap-3 relative z-10 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0 pointer-events-none filter blur-sm scale-95" : "opacity-100"
            }`}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-[13px] font-semibold tracking-tight transition-all duration-200 shadow-sm bg-zinc-950 text-white hover:bg-emerald-600 active:scale-95"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* LEFT DRAWER: Floating Card with elegant margins on all sides (NOT full flush) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop at z-35 (BEHIND the header button at z-50) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-0 bg-black/75 backdrop-blur-md z-35 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Expanding Button Surface on the LEFT Side with margin on left/top/bottom */}
            <motion.div
              layoutId="header-drawer-surface"
              className="fixed top-2 left-2 bottom-2 sm:top-3 sm:left-3 sm:bottom-3 md:top-4 md:left-4 md:bottom-4 w-[calc(100vw-16px)] sm:w-[460px] md:w-[480px] bg-white text-zinc-900 shadow-2xl z-40 flex flex-col overflow-hidden rounded-[24px] sm:rounded-[28px] border border-zinc-200/80"
              style={{ borderRadius: 28 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
              }}
            >
              {/* Content with smooth cross-fade */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.08 }}
                className="flex flex-col h-full overflow-hidden"
              >
                {/* Spacing reserved for the header button */}
                <div className="pt-20 px-6 pb-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/70">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
                    Directory &amp; Navigation
                  </span>
                  <span className="font-mono text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full uppercase">
                    OVERATECH
                  </span>
                </div>

                {/* Body navigation items */}
                <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
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
    </>
  );
};