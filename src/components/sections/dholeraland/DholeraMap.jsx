"use client";

import Badge from "@/components/ui/Badge";
import { CheckCircle, Globe, Map } from "lucide-react";
import Link from "next/link";

export default function DholeraMap({ onInquiryClick }) {
  // Google Maps 3D satellite view (tilted) centred on the official DSIR Boundary from the Dholera
  // development-plan KMZ (polygon centroid 22.1820 N, 72.1898 E). Google Earth web is avoided:
  // it opens its "Map projects" dashboard first.
  const googleEarthUrl =
    "https://www.google.com/maps/@22.182,72.1898,45000a,35y,45t/data=!3m1!1e3";
  const mapsEmbedUrl =
    "https://maps.google.com/maps?q=22.182,72.1898&t=k&z=11&ie=UTF8&iwloc=&output=embed";
  const benefits = [
    "Government approved TP zoning maps",
    "Copies of NA-certified clear title deeds",
    "Assisted site visits with transit pickup",
  ];

  return (
    <section
      className="w-full py-16 md:py-24 bg-[#FAF9F6]/40 border-t border-[#eaeaea]"
      aria-labelledby="contact-map-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Get In Touch content & CTA */}
        <div className="col-span-full lg:col-span-6 flex flex-col gap-6">
          <Badge label="Get In Touch" className="text-[#2c578b] bg-[#2c578b]/10 w-fit" />

          <h2
            id="contact-map-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#0B2545] tracking-[-1px] leading-tight"
          >
            Secure your land asset in Dholera SIR.
          </h2>

          <p className="font-sans text-[15px] sm:text-[16px] text-[#525252] font-light leading-[26px]">
            Request a callback from our Dholera investment relations advisors. Connect with us today
            to receive digital copies of zoning layouts, NA certification approvals, and pricing
            guides.
          </p>

          <div className="flex flex-col gap-3.5 mt-2">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10 text-blue-600 shrink-0">
                  <CheckCircle size={13} className="fill-current text-white" />
                </div>
                <span className="font-sans text-[14px] font-medium text-[#0B2545]">{item}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onInquiryClick}
            className="group w-fit h-12 px-8 rounded-full !bg-[#0B2545] hover:bg-[#2C578B] !text-white font-sans text-[14px] font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 mt-4 cursor-pointer"
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
        </div>

        {/* Right Column: Google Earth / Maps Embed */}
        <div className="col-span-full lg:col-span-6 relative w-full h-[400px] sm:h-[450px] rounded-[32px] overflow-hidden border border-[#e5e5e5] shadow-[0_12px_40px_rgba(0,0,0,0.04)] bg-[#f5f5f5] group">
          <iframe
            src={mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dholera SIR Satellite Map"
            className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />

          {/* Floated Action Card */}
          <div className="absolute bottom-5 right-5 left-5 sm:left-auto bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-5 max-w-sm flex flex-col gap-3 shadow-xl text-white">
            <div className="flex flex-col gap-0.5">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.5px] text-white/50 flex items-center gap-1.5">
                <Globe size={10} /> Google Earth View
              </span>
              <h3 className="font-serif text-[16px] font-bold text-white leading-tight mt-1">
                Explore in 3D Earth
              </h3>
              <p className="font-sans text-[11.5px] leading-[18px] text-white/60 font-light mt-0.5">
                Visualize roads, runways, and zoning blocks in interactive 3D layout schemes.
              </p>
            </div>

            <Link
              href={googleEarthUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-9 bg-[#0B2545] text-[#fff] font-sans text-[12px] font-semibold rounded-full flex items-center justify-center gap-1.5 transition-all duration-200 hover:bg-[#2c578b] hover:text-white"
            >
              <Map size={13} />
              Open Google Earth
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
