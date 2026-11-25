"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/common/Logo";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-900">
      {/* Main Footer Directory */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Logo variant="light" size="md" showTagline={false} />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mt-3">
              OveraTech is an engineering-first technology studio. We build high-performance software, cloud architectures, and practical AI systems for modern businesses.
            </p>

            <div className="space-y-1.5 pt-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>San Francisco, CA • Remote-First</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>contact@overatech.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-emerald-500/50 hover:bg-zinc-800 transition-colors" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.54-1.54 1.54 1.54 0 0 0-3.08 0c0 .85.69 1.54 1.54 1.54m1.4 9.74v-8.37H5.06v8.37h2.8z" /></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-emerald-500/50 hover:bg-zinc-800 transition-colors" aria-label="X">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-emerald-500/50 hover:bg-zinc-800 transition-colors" aria-label="GitHub">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" /></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Web & Mobile Engineering</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Cloud Architecture</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Applied AI & Automation</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Data Engineering</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition-colors">UI/UX Design Systems</Link></li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Expertise</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><Link href="/industries" className="hover:text-emerald-400 transition-colors">FinTech & Payments</Link></li>
              <li><Link href="/industries" className="hover:text-emerald-400 transition-colors">HealthTech</Link></li>
              <li><Link href="/industries" className="hover:text-emerald-400 transition-colors">E-Commerce & Logistics</Link></li>
              <li><Link href="/industries" className="hover:text-emerald-400 transition-colors">SaaS & Enterprise</Link></li>
              <li><Link href="/digital-transformation" className="hover:text-emerald-400 transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/insights" className="hover:text-emerald-400 transition-colors">Engineering Insights</Link></li>
              <li><Link href="/careers" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Book Consultation</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; 2026 OveraTech Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-zinc-400 transition-colors">Privacy Notice</Link>
            <Link href="/about" className="hover:text-zinc-400 transition-colors">Terms of Use</Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-zinc-400 font-medium"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};