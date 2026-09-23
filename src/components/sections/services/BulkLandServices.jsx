"use client";

import Badge from "@/components/ui/Badge";
import { ExternalLink, Landmark, MapPin, ShieldCheck } from "lucide-react";

export default function BulkLandServices({ onInquiryClick }) {
  const investmentZones = [
    {
      id: "sir1",
      type: "SIR",
      name: "Dholera SIR – Residential TP Zone",
      size: "Plots from 750–3000 sq.yd",
      zoning: "Residential TP 2 Zoning Scheme",
      distance: "Within Dholera SIR notified boundary",
      status: "Govt. Notified / Final Plot Allotment",
    },
    {
      id: "sir2",
      type: "SIR",
      name: "Dholera SIR – Industrial & Logistics Belt",
      size: "Plots from 1000 sq.yd",
      zoning: "Industrial / Logistics (SIR Notified)",
      distance: "3 km to Dholera International Airport",
      status: "DDA Approved / Infrastructure Linked",
    },
    {
      id: "nonsir1",
      type: "Non-SIR",
      name: "Kasindra – Aurum Valley Villa Plots",
      size: "Plots from 1000–2000 sq.yd",
      zoning: "Residential / Villa Plotting",
      distance: "Outside SIR boundary, Kasindra corridor",
      status: "Clear Title / Immediate Registry",
    },
    {
      id: "nonsir2",
      type: "Non-SIR",
      name: "Navagam – Farmhouse & Weekend Homes",
      size: "Plots from 2000 sq.yd",
      zoning: "Farmhouse / NA Residential",
      distance: "Airport Canal Road, Navagam",
      status: "Ready Title / Sale Deed Registry",
    },
  ];

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118227.13523588998!2d72.13523588998!3d22.22713523588998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e54d6fa7c20c9%3A0xe54d6fa7c20c9!2sDholera%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";
  const mapsUrl = "https://www.google.com/maps/place/Dholera,+Gujarat,+India";

  return (
    <section
      className="w-full py-16 md:py-24 bg-[#FAF9F6]/45 border-t border-[#eaeaea] relative overflow-hidden"
      aria-labelledby="bulk-heading"
    >
      {/* Decorative Blur elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2C578B]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2C578B]/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start min-w-0">
        {/* Left Column: Title, Description & Direct Listings (7/12) */}
        <div className="col-span-full lg:col-span-7 flex flex-col gap-6 w-full min-w-0">
          <div className="flex flex-col gap-4">
            <Badge
              icon={<Landmark size={12} className="text-[#2c578b]" />}
              label="Investment Opportunities"
              className="text-[#2c578b] bg-[#2c578b]/10 w-fit"
            />
            <h2
              id="bulk-heading"
              className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#0B2545] tracking-[-1px] leading-tight max-w-full"
            >
              SIR &amp; Non-SIR land investments
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#404040] font-normal leading-[26px]">
              We guide investors across both government-notified SIR zones and high-growth Non-SIR
              corridors around Ahmedabad&apos;s Dholera Special Investment Region — matched to your
              horizon, budget, and appetite for risk.
            </p>
          </div>

          {/* Simple and friendly card listing */}
          <div className="flex flex-col gap-4 w-full mt-2">
            {investmentZones.map(zone => (
              <div
                key={zone.id}
                className="bg-white border border-[#e5e5e5] rounded-[20px] p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-[0_8px_20px_rgba(0,0,0,0.02)] transition-all duration-300 min-w-0"
              >
                <div className="min-w-0 flex-1 flex flex-col gap-2">
                  <h3 className="font-serif text-[17px] sm:text-[19px] font-bold text-[#0B2545] flex flex-wrap items-center gap-2 break-words">
                    <span
                      className={`flex h-5.5 items-center justify-center rounded-full px-2.5 text-[10px] font-bold uppercase tracking-[0.5px] shrink-0 ${
                        zone.type === "SIR"
                          ? "bg-[#2C578B]/10 text-[#2C578B]"
                          : "bg-amber-500/10 text-amber-700"
                      }`}
                    >
                      {zone.type}
                    </span>
                    {zone.name}
                  </h3>

                  <div className="min-w-0 flex flex-col md:flex-row md:items-center flex-wrap gap-x-4 gap-y-1 font-sans text-[13px] sm:text-[14px] text-[#404040]">
                    <div className="min-w-0 break-words">
                      <strong className="text-[#0B2545]">Size:</strong> {zone.size}
                    </div>
                    <div className="hidden md:block text-neutral-300">|</div>
                    <div className="min-w-0 break-words">
                      <strong className="text-[#0B2545]">Zoning:</strong> {zone.zoning}
                    </div>
                    <div className="hidden md:block text-neutral-300">|</div>
                    <div className="min-w-0 break-words">
                      <strong className="text-[#0B2545]">Proximity:</strong> {zone.distance}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[12px] text-emerald-600 font-semibold mt-0.5">
                    <ShieldCheck size={14} className="stroke-[2.5]" />
                    <span>{zone.status}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onInquiryClick}
                  className="w-full md:w-auto h-10 px-6 rounded-full !bg-[#0B2545] hover:bg-[#2C578B] !text-white font-sans text-[13px] font-semibold shrink-0 self-start md:self-center transition-all duration-200 cursor-pointer shadow-sm"
                >
                  Enquire Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Google Maps satellite view (5/12) */}
        <div className="col-span-full lg:col-span-5 flex flex-col gap-6 w-full min-w-0 lg:sticky lg:top-24">
          <div className="flex flex-col gap-2">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[1.5px] text-neutral-500 flex items-center gap-1.5">
              <MapPin size={12} className="text-[#2C578B]" /> Real Plot Map Display
            </span>
            <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#0B2545]">
              Dholera SIR Satellite Map
            </h3>
            <p className="font-sans text-[13.5px] sm:text-[14px] text-[#404040] font-normal leading-[20px] sm:leading-[22px]">
              Visually cross-reference SIR-notified and Non-SIR land corridors relative to key
              expressway interchanges and the Dholera International Airport.
            </p>
          </div>

          <div className="relative w-full h-[320px] rounded-[24px] overflow-hidden border border-[#e5e5e5] shadow-[0_8px_30px_rgba(0,0,0,0.03)] bg-[#f5f5f5]">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dholera Google Satellite Map"
              className="w-full h-full"
            />
          </div>

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
    </section>
  );
}
