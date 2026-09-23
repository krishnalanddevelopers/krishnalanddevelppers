"use client";

import Badge from "@/components/ui/Badge";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, UserCheck } from "lucide-react";
import { useState } from "react";

export default function PartnerFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    experience: "",
    preferredLocation: "",
    companyName: "",
    clientsCount: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required";
    if (!formData.mobile.trim()) {
      tempErrors.mobile = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      tempErrors.mobile = "Must be a valid 10-digit mobile number";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email ID is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Must be a valid email address";
    }
    if (!formData.city.trim()) tempErrors.city = "City is required";
    if (!formData.consent) tempErrors.consent = "You must agree to receive communications";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      // API call placeholder
      setSubmitted(true);
    }
  };

  return (
    <section
      className="w-full py-16 md:py-24 bg-[#FAF9F6]/50 border-t border-[#eaeaea]"
      aria-labelledby="form-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 items-center">
        {/* Header */}
        <div className="flex flex-col gap-3 text-center items-center">
          <Badge
            icon={<UserCheck size={12} className="text-[#2c578b]" />}
            label="Onboarding Form"
            className="text-[#2c578b] bg-[#2c578b]/10"
          />
          <h2
            id="form-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#0B2545] tracking-[-1px] leading-tight"
          >
            Become a Channel Partner
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#737373] max-w-xl font-light leading-relaxed">
            Fill out the form below to register. Our onboarding team will get back to you with
            marketing kits and commission details.
          </p>
        </div>

        {/* Form Card Container */}
        <div className="w-full max-w-3xl bg-white border border-[#e5e5e5] rounded-[20px] sm:rounded-[32px] p-4 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.03)] overflow-hidden relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="partner-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5 sm:gap-6"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="fullName"
                      className="font-sans text-[11px] font-bold text-[#0B2545] uppercase tracking-[1.5px] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`h-11 px-4 rounded-xl border ${errors.fullName ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#e5e5e5] focus:border-[#2c578b] focus:ring-[#2c578b]"} bg-white font-sans text-[14px] text-[#171717] focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.fullName && (
                      <span className="text-red-500 text-[12px] mt-1 font-sans">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Email ID */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="font-sans text-[11px] font-bold text-[#0B2545] uppercase tracking-[1.5px] mb-2"
                    >
                      Email ID *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                      className={`h-11 px-4 rounded-xl border ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#e5e5e5] focus:border-[#2c578b] focus:ring-[#2c578b]"} bg-white font-sans text-[14px] text-[#171717] focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-[12px] mt-1 font-sans">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Mobile Number */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="mobile"
                      className="font-sans text-[11px] font-bold text-[#0B2545] uppercase tracking-[1.5px] mb-2"
                    >
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      maxLength={10}
                      className={`h-11 px-4 rounded-xl border ${errors.mobile ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#e5e5e5] focus:border-[#2c578b] focus:ring-[#2c578b]"} bg-white font-sans text-[14px] text-[#171717] focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.mobile && (
                      <span className="text-red-500 text-[12px] mt-1 font-sans">
                        {errors.mobile}
                      </span>
                    )}
                  </div>

                  {/* City */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="city"
                      className="font-sans text-[11px] font-bold text-[#0B2545] uppercase tracking-[1.5px] mb-2"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Ahmedabad"
                      className={`h-11 px-4 rounded-xl border ${errors.city ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#e5e5e5] focus:border-[#2c578b] focus:ring-[#2c578b]"} bg-white font-sans text-[14px] text-[#171717] focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.city && (
                      <span className="text-red-500 text-[12px] mt-1 font-sans">{errors.city}</span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Experience */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="experience"
                      className="font-sans text-[11px] font-bold text-[#0B2545] uppercase tracking-[1.5px] mb-2"
                    >
                      Experience in Real Estate
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="h-11 px-4 rounded-xl border border-[#e5e5e5] bg-white font-sans text-[14px] text-[#171717] focus:outline-none focus:border-[#2c578b] focus:ring-1 focus:ring-[#2c578b] transition-all"
                    >
                      <option value="">Select Experience</option>
                      <option value="under-2">Under 2 Years</option>
                      <option value="2-5">2 to 5 Years</option>
                      <option value="5-10">5 to 10 Years</option>
                      <option value="10-plus">10+ Years</option>
                    </select>
                  </div>

                  {/* Preferred Location */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="preferredLocation"
                      className="font-sans text-[11px] font-bold text-[#0B2545] uppercase tracking-[1.5px] mb-2"
                    >
                      Preferred Location
                    </label>
                    <input
                      type="text"
                      id="preferredLocation"
                      name="preferredLocation"
                      value={formData.preferredLocation}
                      onChange={handleChange}
                      placeholder="e.g. Dholera SIR, Kasindra"
                      className="h-11 px-4 rounded-xl border border-[#e5e5e5] bg-white font-sans text-[14px] text-[#171717] focus:outline-none focus:border-[#2c578b] focus:ring-1 focus:ring-[#2c578b] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Company / Firm Name */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="companyName"
                      className="font-sans text-[11px] font-bold text-[#0B2545] uppercase tracking-[1.5px] mb-2"
                    >
                      Company / Firm Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Apex Realty Partners"
                      className="h-11 px-4 rounded-xl border border-[#e5e5e5] bg-white font-sans text-[14px] text-[#171717] focus:outline-none focus:border-[#2c578b] focus:ring-1 focus:ring-[#2c578b] transition-all"
                    />
                  </div>

                  {/* Number of Clients */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="clientsCount"
                      className="font-sans text-[11px] font-bold text-[#0B2545] uppercase tracking-[1.5px] mb-2"
                    >
                      Number of Clients (Approx.)
                    </label>
                    <input
                      type="text"
                      id="clientsCount"
                      name="clientsCount"
                      value={formData.clientsCount}
                      onChange={handleChange}
                      placeholder="e.g. 50+"
                      className="h-11 px-4 rounded-xl border border-[#e5e5e5] bg-white font-sans text-[14px] text-[#171717] focus:outline-none focus:border-[#2c578b] focus:ring-1 focus:ring-[#2c578b] transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="font-sans text-[11px] font-bold text-[#0B2545] uppercase tracking-[1.5px] mb-2"
                  >
                    Message / Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your firm or client focus..."
                    className="p-4 rounded-xl border border-[#e5e5e5] bg-white font-sans text-[14px] text-[#171717] focus:outline-none focus:border-[#2c578b] focus:ring-1 focus:ring-[#2c578b] transition-all resize-none"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex flex-col mt-2">
                  <label className="relative flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="peer sr-only"
                    />
                    <div className="w-5 h-5 rounded border border-[#e5e5e5] bg-white mt-0.5 flex items-center justify-center shrink-0 peer-checked:bg-[#0B2545] peer-checked:border-[#0B2545] transition-all duration-150">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        className="text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-150"
                      >
                        <path
                          d="M1 4L4 7L9 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="font-sans text-[13px] text-[#525252] font-light leading-tight">
                      I agree to receive communications, project updates, and onboarding materials
                      from Krishna Land Developers.
                    </span>
                  </label>
                  {errors.consent && (
                    <span className="text-red-500 text-[12px] mt-1 font-sans">
                      {errors.consent}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full h-12 !bg-[#0B2545] hover:bg-[#2C578B] !text-white font-sans text-[14px] font-semibold rounded-full flex items-center justify-center transition-all duration-200 active:scale-[0.98] shadow-md hover:shadow-lg mt-4 cursor-pointer"
                >
                  Become a Channel Partner
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center p-4 max-w-md gap-4"
              >
                <CheckCircle2 size={64} className="text-emerald-500 mb-2" />
                <h3 className="font-serif text-[24px] font-bold text-[#0B2545] tracking-[-0.5px]">
                  Application Submitted!
                </h3>
                <p className="font-sans text-[14.5px] leading-relaxed text-[#525252] font-light">
                  Thank you,{" "}
                  <span className="font-semibold text-[#0b2545]">{formData.fullName}</span>, for
                  registering. Our Channel Partner Relations team will review your application and
                  get in touch with marketing materials and commission structures within 24–48
                  hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      mobile: "",
                      email: "",
                      city: "",
                      experience: "",
                      preferredLocation: "",
                      companyName: "",
                      clientsCount: "",
                      message: "",
                      consent: false,
                    });
                  }}
                  className="mt-4 px-6 h-10 border border-[#e5e5e5] hover:bg-[#f5f5f5] text-[#0B2545] font-sans text-[13px] font-medium rounded-full transition-all duration-200 active:scale-[0.97] cursor-pointer"
                >
                  Submit Another Form
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
