"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Share2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { submitLead } from "@/lib/submitLead";
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
import { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Form input validation
  const validateForm = () => {
    const message = formData.message.trim();
    const newErrors = compactErrors({
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      mobile: validateMobile(formData.mobile),
      message: !message
        ? "Message cannot be empty"
        : message.length < 10
          ? "Message must be at least 10 characters"
          : "",
    });

    setErrors(newErrors);
    return newErrors;
  };

  const handleInputChange = e => {
    const { name } = e.target;
    const value = name === "mobile" ? toMobileDigits(e.target.value) : e.target.value;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (isSubmitting) return;
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      toast.error(INVALID_FORM_MESSAGE);
      focusFirstError(e.currentTarget, newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    try {
      await submitLead({
        formType: "Contact Us",
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
        message: formData.message,
      });
      setIsSubmitted(true);
      toast.success("Your enquiry has been submitted successfully!");
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", mobile: "", message: "" });
      }, 5000);
    } catch (error) {
      setSubmitError(error.message);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyLink = () => {
    const currentUrl = typeof window !== "undefined" ? window.location.origin : "";
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mapsUrl = "https://www.google.com/maps/place/Dholera,+Gujarat,+India";
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118227.13523588998!2d72.13523588998!3d22.22713523588998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e54d6fa7c20c9%3A0xe54d6fa7c20c9!2sDholera%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

  return (
    <section className="w-full py-16 md:py-24 bg-[#fafafa]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ── Left Column: Need More Info Box & Contact Form ────────────────── */}
          <div className="col-span-full lg:col-span-7 flex flex-col gap-8 w-full">
            {/* 8.2 Need More Information Module */}
            <div className="rounded-[24px] border border-[#e5e5e5] bg-white overflow-hidden shadow-[0_4px_20px_rgba(11,37,69,0.02)] transition-all duration-300">
              <button
                type="button"
                onClick={() => setDrawerOpen(prev => !prev)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50/50 transition-colors duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2C578B]/10 text-[#2C578B]">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif text-[17px] font-bold text-[#0B2545]">
                      Need More Information?
                    </h3>
                    <p className="font-sans text-[13px] text-neutral-400 font-light mt-0.5">
                      Explore options to call, share website, or copy coordinates.
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: drawerOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-neutral-400"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {drawerOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden border-t border-neutral-100"
                  >
                    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-50/30">
                      {/* Call Option */}
                      <Link
                        href="tel:+919909099090"
                        className="flex items-center gap-3.5 p-4 rounded-xl border border-neutral-200 bg-white hover:border-[#2C578B] hover:shadow-sm transition-all duration-200"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                          <Phone size={15} />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-sans text-[13px] font-bold text-[#0B2545]">
                            Call Sales Office
                          </span>
                          <span className="font-sans text-[12px] text-neutral-400 font-light mt-0.5">
                            +91 99090 99090
                          </span>
                        </div>
                      </Link>

                      {/* WhatsApp Share option */}
                      <Link
                        href="https://api.whatsapp.com/send?text=Check%20out%20Krishna%20Land%20Developers%20projects%20in%20Dholera:%20https://krishnaland.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3.5 p-4 rounded-xl border border-neutral-200 bg-white hover:border-[#2C578B] hover:shadow-sm transition-all duration-200"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                          <Share2 size={15} />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-sans text-[13px] font-bold text-[#0B2545]">
                            Share on WhatsApp
                          </span>
                          <span className="font-sans text-[12px] text-neutral-400 font-light mt-0.5">
                            Quickly share link
                          </span>
                        </div>
                      </Link>

                      {/* Copy coordinates / Site URL link */}
                      <button
                        type="button"
                        onClick={handleCopyLink}
                        className="flex items-center gap-3.5 p-4 rounded-xl border border-neutral-200 bg-white hover:border-[#2C578B] hover:shadow-sm transition-all duration-200 text-left w-full cursor-pointer"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                          {copied ? <Check size={15} /> : <Copy size={15} />}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-sans text-[13px] font-bold text-[#0B2545]">
                            {copied ? "Link Copied!" : "Copy Website Link"}
                          </span>
                          <span className="font-sans text-[12px] text-neutral-400 font-light mt-0.5">
                            {copied ? "Successfully copied" : "Copy to clipboard"}
                          </span>
                        </div>
                      </button>

                      {/* Pre-fill query mail */}
                      <Link
                        href="mailto:info@krishnaland.com?subject=Inquiry%20regarding%20Dholera%20Plots&body=Hello,%20I%20am%20interested%20in%20investing%20in%20Dholera%20SIR%20plots..."
                        className="flex items-center gap-3.5 p-4 rounded-xl border border-neutral-200 bg-white hover:border-[#2C578B] hover:shadow-sm transition-all duration-200"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                          <Mail size={15} />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-sans text-[13px] font-bold text-[#0B2545]">
                            Email Prefilled Request
                          </span>
                          <span className="font-sans text-[12px] text-neutral-400 font-light mt-0.5">
                            Send a quick mail
                          </span>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 8.3 Contact Form Card */}
            <div className="relative rounded-[24px] border border-[#e5e5e5] bg-white p-6 sm:p-10 shadow-[0_15px_30px_rgba(11,37,69,0.03)] overflow-hidden">
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.6, rotate: -15 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="w-16 h-16 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mb-6 shadow-sm"
                    >
                      <Check size={32} />
                    </motion.div>
                    <h3 className="font-serif text-[24px] font-bold text-[#0B2545]">Thank You!</h3>
                    <p className="font-sans text-[14px] text-[#525252] font-light max-w-sm mt-2 leading-[22px]">
                      Your request has been successfully submitted. One of our property managers
                      will connect with you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="flex flex-col gap-1.5 mb-2">
                  <h3 className="font-serif text-[22px] font-bold text-[#0B2545]">Enquiry Now</h3>
                  <p className="font-sans text-[13px] text-neutral-400 font-light">
                    Submit your query, and we will get back to you within 24 hours.
                  </p>
                </div>

                {/* Name field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-sans text-[13px] font-semibold text-[#0B2545]"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full h-11 px-4 rounded-xl border ${errors.name ? "border-red-500 bg-red-50/[0.02]" : "border-[#e5e5e5] bg-[#fafafa]"} focus:border-[#2C578B] focus:bg-white transition-all font-sans text-[14px] outline-none`}
                  />
                  {errors.name && (
                    <span className="font-sans text-[11px] text-red-500 mt-0.5">{errors.name}</span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-sans text-[13px] font-semibold text-[#0B2545]"
                    >
                      Email ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email ID"
                      className={`w-full h-11 px-4 rounded-xl border ${errors.email ? "border-red-500 bg-red-50/[0.02]" : "border-[#e5e5e5] bg-[#fafafa]"} focus:border-[#2C578B] focus:bg-white transition-all font-sans text-[14px] outline-none`}
                    />
                    {errors.email && (
                      <span className="font-sans text-[11px] text-red-500 mt-0.5">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Mobile field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="mobile"
                      className="font-sans text-[13px] font-semibold text-[#0B2545]"
                    >
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="10-digit mobile number"
                      className={`w-full h-11 px-4 rounded-xl border ${errors.mobile ? "border-red-500 bg-red-50/[0.02]" : "border-[#e5e5e5] bg-[#fafafa]"} focus:border-[#2C578B] focus:bg-white transition-all font-sans text-[14px] outline-none`}
                    />
                    {errors.mobile && (
                      <span className="font-sans text-[11px] text-red-500 mt-0.5">
                        {errors.mobile}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-sans text-[13px] font-semibold text-[#0B2545]"
                  >
                    Message / Query <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your inquiry details..."
                    className={`w-full p-4 rounded-xl border ${errors.message ? "border-red-500 bg-red-50/[0.02]" : "border-[#e5e5e5] bg-[#fafafa]"} focus:border-[#2C578B] focus:bg-white transition-all font-sans text-[14px] outline-none resize-none`}
                  />
                  {errors.message && (
                    <span className="font-sans text-[11px] text-red-500 mt-0.5">
                      {errors.message}
                    </span>
                  )}
                </div>

                {submitError && (
                  <p className="font-sans text-[13px] text-red-500" role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl !bg-[#0B2545] hover:bg-[#2C578B] !text-white font-sans text-[14px] font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 mt-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* ── Right Column: Contact Details & Google Earth maps ────────────────── */}
          <div className="col-span-full lg:col-span-5 flex flex-col gap-8 w-full">
            {/* 8.5 Contact Details Display */}
            <div className="rounded-[24px] border border-[#e5e5e5] bg-white p-6 sm:p-8 flex flex-col gap-6 shadow-[0_4px_20px_rgba(11,37,69,0.02)]">
              <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#0B2545]">
                Corporate Office
              </h3>

              <div className="flex flex-col gap-5">
                {/* Phone details */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2C578B]/10 text-[#2C578B]">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-sans text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      Contact Number
                    </span>
                    <a
                      href="tel:+919909099090"
                      className="font-sans text-[15px] font-bold text-[#0B2545] hover:text-[#2C578B] transition-colors"
                    >
                      +91 99090 99090
                    </a>
                  </div>
                </div>

                {/* Email details */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2C578B]/10 text-[#2C578B]">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-sans text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      Email Address
                    </span>
                    <a
                      href="mailto:info@krishnaland.com"
                      className="font-sans text-[15px] font-bold text-[#0B2545] hover:text-[#2C578B] transition-colors"
                    >
                      info@krishnaland.com
                    </a>
                  </div>
                </div>

                {/* Office address details */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2C578B]/10 text-[#2C578B]">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-sans text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      Office Location
                    </span>
                    <span className="font-sans text-[14.5px] font-medium leading-[22px] text-[#525252]">
                      Krishna Land Developers, Dholera SIR, Gujarat, India.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 8.4 Map Integration */}
            <div className="rounded-[24px] border border-[#e5e5e5] bg-white p-4.5 flex flex-col gap-4.5 shadow-[0_4px_20px_rgba(11,37,69,0.02)] group">
              {/* Map embed */}
              <div className="relative w-full h-[280px] sm:h-[320px] rounded-[16px] overflow-hidden border border-neutral-100 bg-[#f5f5f5]">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dholera Google Maps location"
                  className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* External click redirect */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 border border-neutral-200 hover:border-[#2C578B] text-[#0B2545] hover:bg-[#2C578B]/5 font-sans text-[13px] font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
              >
                <ExternalLink size={13} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
