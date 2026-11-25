"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  Search, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Upload, 
  Sparkles,
  GraduationCap,
  Globe2,
  Heart
} from "lucide-react";
import { jobListings, JobListing } from "@/data/jobs";

export const CareersClient: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");

  const departments = [
    "All",
    "AI & Data Science",
    "Cloud Architecture",
    "Engineering",
    "Cybersecurity",
    "Consulting & Strategy",
  ];

  const filteredJobs = jobListings.filter((job) => {
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesLocation =
      searchLocation === "" ||
      job.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
      job.title.toLowerCase().includes(searchLocation.toLowerCase());
    return matchesDept && matchesLocation;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;

    setIsApplying(true);
    setTimeout(() => {
      setIsApplying(false);
      setApplySuccess(true);
    }, 1000);
  };

  return (
    <div className="space-y-16">
      {/* Culture & Perks Pillars Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "OveraTech Global Academy",
            description: "Guaranteed 80 hours of paid annual upskilling in agentic AI architectures, quantum algorithms, and FinOps.",
            icon: GraduationCap,
          },
          {
            title: "Global Delivery Mobility",
            description: "Opportunities to engineer impact from 54 delivery campuses across San Francisco, London, Frankfurt, Tokyo, and Singapore.",
            icon: Globe2,
          },
          {
            title: "Comprehensive Well-Being",
            description: "100% premium health coverage, flexible hybrid working policies, sabbatical programs, and equity participation.",
            icon: Heart,
          },
        ].map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{pillar.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
            </div>
          );
        })}
      </div>

      {/* Interactive Job Openings Section */}
      <div id="openings" className="scroll-mt-32 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Global Opportunities
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Current Open Roles ({jobListings.length})
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            Showing roles across our global innovation campuses
          </span>
        </div>

        {/* Filter Controls */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedDept === dept
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              placeholder="Search by city or title..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                    {job.department}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-medium">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                    <span>Experience: {job.experience}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 max-w-2xl mt-1 leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5"
                >
                  <span>View Details & Apply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
              <Briefcase className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <div className="text-sm font-bold text-slate-800">No matching open roles</div>
              <p className="text-xs text-slate-500 mt-1">Try broadening your search filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* Role Details & Apply Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  {selectedJob.department} • {selectedJob.type}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {selectedJob.title}
                </h3>
                <div className="text-xs text-slate-500 flex items-center gap-3 mt-1">
                  <span>{selectedJob.location}</span>
                  <span>•</span>
                  <span>Experience: {selectedJob.experience}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedJob(null);
                  setApplySuccess(false);
                }}
                className="p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-200/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {!applySuccess ? (
                <>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Role Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {selectedJob.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {selectedJob.responsibilities.map((r, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Candidate Qualifications
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {selectedJob.qualifications.map((q, qIdx) => (
                        <li key={qIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Application Form */}
                  <form onSubmit={handleApplySubmit} className="pt-4 border-t border-slate-100 space-y-4">
                    <h4 className="text-sm font-bold text-slate-900">Submit Direct Application</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder="Jane Doe"
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          placeholder="jane@domain.com"
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center">
                      <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                      <div className="text-xs font-semibold text-slate-700">Attach Resume / CV</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">PDF, DOCX up to 10MB</div>
                    </div>

                    <button
                      type="submit"
                      disabled={isApplying}
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      {isApplying ? (
                        <span>Submitting Application to Global Talent Desk...</span>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Submit Application</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Application Submitted!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you, <strong className="text-slate-800">{applicantName}</strong>. Our Global Talent Acquisition team for <strong>{selectedJob.title}</strong> has received your profile and will be in touch within 3-5 business days.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedJob(null);
                      setApplySuccess(false);
                      setApplicantName("");
                      setApplicantEmail("");
                    }}
                    className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
