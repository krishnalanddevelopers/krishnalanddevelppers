"use client";

import Badge from "@/components/ui/Badge";
import { MessageSquare, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function GalleryCta({ onInquiryClick }) {
  return (
    <section
      className="w-full py-16 md:py-24 bg-[#FAF9F6]/45 border-t border-[#eaeaea] relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2C578B]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2C578B]/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center gap-6 sm:gap-8">
        {/* Badge */}
        <Badge
          icon={<MessageSquare size={12} className="text-[#2c578b]" />}
          label="Get In Touch"
          className="text-[#2c578b] bg-[#2c578b]/10 w-fit"
        />

        {/* Heading & Subtitle */}
        <div className="flex flex-col gap-3.5 max-w-xl items-center">
          <h2
            id="cta-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[46px] font-semibold text-[#0B2545] tracking-[-1px] leading-tight"
          >
            How can we help you?
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#525252] font-light leading-[26px]">
            Connect with our land investment relations desk to receive site layouts, clear-title
            mutations, or maps.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
          <button
            type="button"
            onClick={onInquiryClick}
            className="group inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full !bg-[#0B2545] hover:bg-[#2C578B] !text-white font-sans text-[13.5px] font-bold hover:shadow-md active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            Enquiry Now
            <svg
              width="10"
              height="10"
              viewBox="0 0 16 16"
              fill="none"
              className="translate-y-[0.5px] transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-neutral-300 bg-white text-[#0B2545] hover:bg-neutral-50 font-sans text-[13.5px] font-bold active:scale-[0.98] transition-all duration-200"
          >
            <PhoneCall size={14} className="text-[#2C578B]" />
            Contact Details
          </Link>
        </div>
      </div>
    </section>
  );
}
