"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Building, 
  Mail, 
  User, 
  Briefcase, 
  MessageSquare,
  AlertCircle
} from "lucide-react";

interface ContactFormProps {
  initialSubject?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialSubject = "Digital Transformation Advisory",
  className = "",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    jobTitle: "",
    category: initialSubject,
    scope: "Enterprise Scale ($250k - $1M+)",
    message: "",
    ndaRequested: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please provide your full name";
    if (!formData.email.trim()) {
      errs.email = "Please provide your corporate email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.company.trim()) errs.company = "Company / organization name is required";
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = "Please provide at least a brief description (15+ chars)";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate realistic enterprise network dispatch
    setTimeout(() => {
      const randomTicket = `OT-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(randomTicket);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className={`p-8 sm:p-12 bg-white rounded-2xl border border-emerald-200 shadow-xl text-center animate-in zoom-in-95 duration-300 ${className}`}>
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full mb-3">
          Reference #{ticketId}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
          Enterprise Advisory Request Received
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto mt-3 leading-relaxed">
          Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. An OveraTech Senior Enterprise Partner specializing in <strong>{formData.category}</strong> will review your requirements and reach out within 1 business day.
        </p>

        <div className="mt-8 p-4 bg-slate-50 border border-slate-100 rounded-xl text-left max-w-md mx-auto space-y-2 text-xs text-slate-600">
          <div className="flex justify-between">
            <span className="text-slate-400">Organization:</span>
            <span className="font-semibold text-slate-800">{formData.company}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Representative:</span>
            <span className="font-semibold text-slate-800">{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Mutual NDA Requested:</span>
            <span className="font-semibold text-emerald-600">{formData.ndaRequested ? "Yes (Included in packet)" : "No"}</span>
          </div>
        </div>

        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              fullName: "",
              email: "",
              company: "",
              jobTitle: "",
              category: "Digital Transformation Advisory",
              scope: "Enterprise Scale ($250k - $1M+)",
              message: "",
              ndaRequested: true,
            });
          }}
          className="mt-8 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`p-6 sm:p-10 bg-white rounded-2xl border border-slate-200/90 shadow-xl space-y-6 ${className}`}
    >
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span>Connect with an OveraTech Partner</span>
          <Sparkles className="w-4 h-4 text-emerald-500" />
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Discuss your strategic objectives, explore custom architecture blueprints, or request an RFP response.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Jane Sterling"
              className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                errors.fullName ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Corporate Email */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Corporate Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@enterprise.com"
              className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                errors.email ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Company / Organization *
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Apex Global Financial"
              className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                errors.company ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
              }`}
            />
          </div>
          {errors.company && (
            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.company}
            </p>
          )}
        </div>

        {/* Job Title */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Job Title / Executive Role
          </label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={formData.jobTitle}
              onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
              placeholder="e.g. Chief Information Officer"
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Engagement Category & Scope */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Primary Area of Interest
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option>Enterprise AI & Agentic Systems</option>
            <option>Cloud Migration & Stratus Architecture</option>
            <option>Digital Product Engineering</option>
            <option>Zero-Trust Cybersecurity Defense</option>
            <option>ERP/CRM Core Modernization (SAP/Salesforce)</option>
            <option>Digital Maturity Assessment</option>
            <option>RFP / Global Procurement</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Estimated Program Scope
          </label>
          <select
            value={formData.scope}
            onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option>Enterprise Scale ($250k - $1M+)</option>
            <option>Strategic Transformation ($1M - $10M+)</option>
            <option>Pilot / Proof-of-Value ($100k - $250k)</option>
            <option>Ongoing Managed Services</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Project Details / Business Objectives *
        </label>
        <div className="relative">
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Briefly describe your objectives, current technology stack, or target timeline..."
            className={`w-full p-3 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
              errors.message ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
            }`}
          />
        </div>
        {errors.message && (
          <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message}
          </p>
        )}
      </div>

      {/* NDA Checkbox */}
      <div className="flex items-center gap-3">
        <input
          id="nda"
          type="checkbox"
          checked={formData.ndaRequested}
          onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
          className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
        />
        <label htmlFor="nda" className="text-xs text-slate-600 cursor-pointer select-none">
          Require Mutual Non-Disclosure Agreement (NDA) before detailed discovery
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Transmitting to OveraTech Partner Desk...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Advisory Request</span>
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
        <MessageSquare className="w-3.5 h-3.5" />
        <span>Inquiries are bound by enterprise confidentiality standards. SLA: response within 24 hours.</span>
      </div>
    </form>
  );
};

