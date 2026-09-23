"use client";

import { CheckCircle2, ChevronRight, Clock, FileText, MapPin, Upload } from "lucide-react";
import Image from "next/image";
import { submitApplication } from "@/lib/submitApplication";
import { toast } from "@/lib/toast";
import {
  INVALID_FORM_MESSAGE,
  compactErrors,
  focusFirstError,
  toMobileDigits,
  validateEmail,
  validateMobile,
  validateName,
} from "@/lib/validation";
import { useRef, useState } from "react";

const RESUME_MAX_BYTES = 4 * 1024 * 1024;
const MAX_EXPERIENCE_YEARS = 50;

export default function CareerPage() {
  const formRef = useRef(null);

  // No current openings — show fallback message
  const jobs = [];

  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
  });
  const [resume, setResume] = useState(null);
  const [resumeName, setResumeName] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Handle Input Changes
  const handleInputChange = e => {
    const { name } = e.target;
    const value = name === "phone" ? toMobileDigits(e.target.value) : e.target.value;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Handle File Change
  const handleFileChange = e => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileExt = file.name.split(".").pop().toLowerCase();
      // Clear the input so picking the same file again still fires onChange
      e.target.value = "";

      let fileError = "";
      if (!["pdf", "doc", "docx"].includes(fileExt)) {
        fileError = "Only PDF or DOC/DOCX files are supported.";
      } else if (file.size > RESUME_MAX_BYTES) {
        fileError = "Resume must be 4MB or smaller.";
      }
      if (fileError) {
        setFormErrors(prev => ({ ...prev, resume: fileError }));
        toast.error(fileError);
        return;
      }
      setResume(file);
      setResumeName(file.name);
      setFormErrors(prev => ({ ...prev, resume: "" }));
    }
  };

  // Click Apply Now on a Job card
  const handleApplyClick = jobTitle => {
    setFormData(prev => ({ ...prev, position: jobTitle }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Submit Handler
  const handleSubmit = async e => {
    e.preventDefault();
    if (isSubmitting) return;
    const experience = formData.experience.trim();
    const errors = compactErrors({
      fullName: validateName(formData.fullName),
      email: validateEmail(formData.email),
      phone: validateMobile(formData.phone),
      position: formData.position ? "" : "Please select a position",
      experience: !experience
        ? "Experience in years is required"
        : !/^\d{1,2}(\.\d)?$/.test(experience) || Number(experience) > MAX_EXPERIENCE_YEARS
          ? `Enter experience between 0 and ${MAX_EXPERIENCE_YEARS} years`
          : "",
      resume: resume ? "" : "Please upload your resume",
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast.error(INVALID_FORM_MESSAGE);
      focusFirstError(e.currentTarget, errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    try {
      await submitApplication({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience,
        coverLetter: formData.coverLetter,
        resume,
      });
      setIsSubmitted(true);
      toast.success("Application submitted successfully!");
      // Reset form after submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        coverLetter: "",
      });
      setResume(null);
      setResumeName("");
      setFormErrors({});
    } catch (error) {
      setSubmitError(error.message);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-[#fafafa] min-h-screen pb-16 sm:pb-24">
      {/* ─── 10.3 TOP HERO BANNER ───────────────────────────────────────── */}
      <section className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/sample-12.jpeg"
          alt="Krishna Land Developers Careers Banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark brand theme overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/90 via-[#0B2545]/80 to-[#2C578B]/70"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4.5 py-1.5">
            <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[3px] uppercase">
              Join Our Team
            </span>
          </div>
          <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.1] tracking-tight">
            Build Your Legacy With Us
          </h1>
          <p className="font-sans text-[15px] sm:text-[18px] font-light max-w-2xl text-white/80 leading-relaxed">
            We are building the future of Dholera real estate. Join a high-performing team dedicated
            to growth, structural transparency, and client success.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 mt-16 sm:mt-24 flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: Open Positions */}
        <div className="lg:col-span-7 flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-[26px] sm:text-[32px] font-semibold text-[#0B2545] tracking-tight">
              Current Openings
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-neutral-500 font-light">
              Explore our active job postings. Click "Apply Now" to start your application process.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {jobs.length === 0 ? (
              <div className="flex flex-col items-start gap-4 bg-white p-8 rounded-[28px] border border-neutral-200/60">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-[#0B2545]/10 flex items-center justify-center text-[#0B2545]">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-[20px] sm:text-[22px] font-semibold text-[#0B2545]">
                      No Current Openings
                    </h3>
                    <p className="font-sans text-[14px] text-neutral-500 font-light mt-1 max-w-[560px]">
                      We do not have any active job openings at the moment. You can still share your
                      CV by filling the application form on the right. Directly submit your resume
                      and we will keep it on file for future opportunities.
                    </p>
                  </div>
                </div>

                <div className="mt-2">
                  <button
                    type="button"
                    onClick={() =>
                      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#0B2545] text-white font-sans text-[14px] font-medium hover:bg-[#2C578B] transition"
                  >
                    Share Your CV
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ) : (
              jobs.map((job, index) => (
                <div
                  key={index}
                  className="group flex flex-col justify-between gap-5 bg-white p-6 sm:p-7 rounded-[28px] border border-neutral-200/60 hover:border-[#2C578B]/25 hover:shadow-[0_12px_24px_rgba(11,37,69,0.04)] transition-all duration-300"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="font-sans text-[11px] font-semibold text-[#2C578B] bg-[#2C578B]/5 border border-[#2C578B]/10 px-3 py-1 rounded-md">
                        {job.department}
                      </span>
                      <span className="font-sans text-[12px] text-neutral-400 flex items-center gap-1">
                        <MapPin size={13} />
                        {job.location}
                      </span>
                      <span className="font-sans text-[12px] text-neutral-400 flex items-center gap-1">
                        <Clock size={13} />
                        {job.experience} Exp
                      </span>
                    </div>

                    <h3 className="font-display text-[20px] sm:text-[22px] font-semibold text-[#0B2545]">
                      {job.title}
                    </h3>

                    <p className="font-sans text-[14px] sm:text-[15px] text-[#525252] font-light leading-[22px] sm:leading-[24px]">
                      {job.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleApplyClick(job.title)}
                    className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full !bg-[#0B2545] hover:bg-[#2C578B] text-white font-sans text-[13px] font-medium transition-all duration-200 cursor-pointer self-start shadow-sm"
                  >
                    Apply Now
                    <ChevronRight size={14} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: 10.1 APPLICATION FORM */}
        <div
          ref={formRef}
          className="lg:col-span-5 w-full bg-white rounded-[32px] border border-neutral-200/80 p-6 sm:p-8 shadow-sm flex flex-col gap-6 scroll-mt-24"
        >
          <div className="flex flex-col gap-1.5 border-b border-neutral-100 pb-4">
            <h3 className="font-display text-[22px] font-semibold text-[#0B2545]">
              Application Form
            </h3>
            <p className="font-sans text-[13px] text-neutral-400 font-light">
              Submit your details and resume below. Fields marked with * are required.
            </p>
          </div>

          {/* Note to allow CV sharing even when no openings */}
          <div className="mt-3">
            <p className="font-sans text-[13px] text-neutral-600">
              If there are no current openings, you can still share your CV — please fill the
              application form and submit your resume.
            </p>
            <p className="font-sans text-[12px] text-neutral-500 mt-1">
              Agar koi openings nahi hain, to aap form bhar kar apna CV bhej sakte hain.
            </p>
          </div>

          {isSubmitted ? (
            <div className="flex flex-col items-center text-center gap-4 py-8 px-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl animate-fade-in">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 size={30} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="font-display text-[18px] font-bold text-emerald-800">
                  Application Submitted
                </h4>
                <p className="font-sans text-[14px] text-emerald-700/85 font-medium leading-[20px]">
                  Your application has been submitted successfully.
                </p>
                <p className="font-sans text-[12.5px] text-neutral-500 font-light mt-1">
                  Our recruiting team will review your credentials and get back to you shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-4 font-sans text-[13px] font-semibold text-[#2C578B] hover:text-[#0B2545] transition-colors"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full" noValidate>
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="fullName"
                  className="font-sans text-[13.5px] font-medium text-[#0B2545]"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className={`w-full h-11 px-4 rounded-xl border ${
                    formErrors.fullName ? "border-red-400 bg-red-50/40" : "border-transparent bg-[#fafafa]"
                  } text-[14px] font-sans focus:outline-none transition-colors`}
                />
                {formErrors.fullName && (
                  <span className="text-[12px] text-red-500 font-sans">{formErrors.fullName}</span>
                )}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="font-sans text-[13.5px] font-medium text-[#0B2545]"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="johndoe@example.com"
                  className={`w-full h-11 px-4 rounded-xl border ${
                    formErrors.email ? "border-red-400 bg-red-50/40" : "border-transparent bg-[#fafafa]"
                  } text-[14px] font-sans focus:outline-none transition-colors`}
                />
                {formErrors.email && (
                  <span className="text-[12px] text-red-500 font-sans">{formErrors.email}</span>
                )}
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="font-sans text-[13.5px] font-medium text-[#0B2545]"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className={`w-full h-11 px-4 rounded-xl border ${
                    formErrors.phone ? "border-red-400 bg-red-50/40" : "border-transparent bg-[#fafafa]"
                  } text-[14px] font-sans focus:outline-none transition-colors`}
                />
                {formErrors.phone && (
                  <span className="text-[12px] text-red-500 font-sans">{formErrors.phone}</span>
                )}
              </div>

              {/* Position Applied For */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="position"
                  className="font-sans text-[13.5px] font-medium text-[#0B2545]"
                >
                  Position Applied For *
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className={`w-full h-11 px-3.5 rounded-xl border ${
                    formErrors.position ? "border-red-400 bg-red-50/40" : "border-transparent bg-[#fafafa]"
                  } text-[14px] font-sans text-[#525252] focus:outline-none transition-colors`}
                >
                  <option value="">Select a Position</option>
                  <option value="Real Estate Sales Advisor">Real Estate Sales Advisor</option>
                  <option value="Investment Analyst">Investment Analyst</option>
                  <option value="Channel Partner Manager">Channel Partner Manager</option>
                  <option value="Other Operations">Other / Operations</option>
                </select>
                {formErrors.position && (
                  <span className="text-[12px] text-red-500 font-sans">{formErrors.position}</span>
                )}
              </div>

              {/* Experience in Years */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="experience"
                  className="font-sans text-[13.5px] font-medium text-[#0B2545]"
                >
                  Experience (Years) *
                </label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  min="0"
                  max={MAX_EXPERIENCE_YEARS}
                  step="0.5"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="3"
                  className={`w-full h-11 px-4 rounded-xl border ${
                    formErrors.experience ? "border-red-400 bg-red-50/40" : "border-transparent bg-[#fafafa]"
                  } text-[14px] font-sans focus:outline-none transition-colors`}
                />
                {formErrors.experience && (
                  <span className="text-[12px] text-red-500 font-sans">
                    {formErrors.experience}
                  </span>
                )}
              </div>

              {/* Resume Upload */}
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-[13.5px] font-medium text-[#0B2545]">
                  Resume Upload (PDF/DOC) *
                </label>

                <div
                  className={`relative flex flex-col items-center justify-center p-5 border-2 border-dashed rounded-xl transition-colors ${
                    formErrors.resume
                      ? "border-red-400 bg-red-50/5 hover:bg-red-50/10"
                      : "border-neutral-300 bg-[#fafafa] hover:bg-[#2C578B]/5 hover:border-[#2C578B]/40"
                  }`}
                >
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />

                  <div className="flex flex-col items-center gap-2 text-center">
                    {resumeName ? (
                      <>
                        <FileText className="text-[#2C578B]" size={28} />
                        <span className="font-sans text-[13px] font-semibold text-[#0B2545] line-clamp-1 max-w-[200px]">
                          {resumeName}
                        </span>
                        <span className="font-sans text-[11px] text-neutral-400">
                          Click or drag to replace
                        </span>
                      </>
                    ) : (
                      <>
                        <Upload className="text-neutral-400" size={24} />
                        <span className="font-sans text-[13px] font-semibold text-[#525252]">
                          Upload File
                        </span>
                        <span className="font-sans text-[11px] text-neutral-400">
                          PDF, DOC, or DOCX up to 4MB
                        </span>
                      </>
                    )}
                  </div>
                </div>
                {formErrors.resume && (
                  <span className="text-[12px] text-red-500 font-sans">{formErrors.resume}</span>
                )}
              </div>

              {/* Cover Letter */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="coverLetter"
                  className="font-sans text-[13.5px] font-medium text-[#0B2545]"
                >
                  Cover Letter (Optional)
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Briefly introduce yourself and why you'd like to join our team..."
                  className="w-full p-4 rounded-xl bg-[#fafafa] text-[14px] font-sans focus:outline-none transition-colors resize-none"
                />
              </div>

              {submitError && (
                <p className="font-sans text-[13px] text-red-500" role="alert">
                  {submitError}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 !bg-[#0B2545] hover:bg-[#2C578B] text-white font-sans text-[14px] font-medium rounded-xl transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[0_4px_12px_rgba(44,87,139,0.2)] mt-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
