"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SitewideCta() {
  const pathname = usePathname();

  // Hide on pages that already have specialized CTAs or contact forms
  const hideCta = ["/contact", "/faq", "/gallery", "/services"].includes(pathname);

  if (hideCta) return null;

  return (
    <section
      className="w-full py-14 md:py-20 bg-[#FAF9F6]/45 border-t border-[#eaeaea] relative overflow-hidden"
      aria-labelledby="global-cta-heading"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#2C578B]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-xl">
          <h2
            id="global-cta-heading"
            className="font-serif text-[24px] sm:text-[28px] md:text-[34px] font-semibold text-[#0B2545] tracking-[-0.5px] leading-tight"
          >
            Still have questions?
          </h2>
          <p className="font-sans text-[14px] sm:text-[15px] text-[#525252] font-light leading-[22px]">
            If you need layout specifics, custom zoning clearances, or brochure packets, get in touch with our advisors today.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#0B2545] hover:bg-[#2C578B] !text-white font-sans text-[13px] font-bold shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-300 shrink-0 self-start sm:self-center"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
