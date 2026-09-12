"use client";

import Badge from "@/components/ui/Badge";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  Compass,
  Map,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState } from "react";

// Sub-component to manage card expansion locally and isolate state
function ServiceCard({ svc, onInquiryClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(11,37,69,0.01)] hover:shadow-[0_15px_30px_rgba(11,37,69,0.04)] hover:-translate-y-1 transition-all duration-300 group">
      {/* Header Card Details */}
      <div className="p-6 sm:p-8 flex flex-col gap-5 justify-between flex-1">
        <div className="flex flex-col gap-5">
          {/* Icon & Number Row */}
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C578B]/10 text-[#2C578B] group-hover:bg-[#2C578B] group-hover:text-white transition-colors duration-300">
              {svc.icon}
            </div>
            <span className="font-serif text-[28px] font-bold text-neutral-200 select-none group-hover:text-[#2C578B]/10 transition-colors duration-300">
              {svc.number}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-[19px] sm:text-[21px] font-bold text-[#0B2545] group-hover:text-[#2C578B] transition-colors duration-200">
              {svc.name}
            </h3>
            <p className="font-sans text-[13.5px] sm:text-[14px] font-normal leading-[22px] text-[#404040]">
              {svc.description}
            </p>
          </div>

          {/* Key Benefits Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-2">
            {svc.benefits.map((benefit, bIdx) => (
              <div key={bIdx} className="flex items-center gap-2">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check size={10} className="stroke-[3]" />
                </div>
                <span className="font-sans text-[12.5px] font-medium text-[#0B2545]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex items-center justify-between border-t border-neutral-100 pt-5 mt-4">
          <button
            type="button"
            onClick={() => setIsExpanded(prev => !prev)}
            className="group/btn inline-flex items-center gap-1.5 text-[#2C578B] font-sans text-[13px] sm:text-[14px] font-bold hover:text-[#0b2545] transition-colors duration-200 cursor-pointer"
          >
            <span>{isExpanded ? "Show Less" : "Read More"}</span>
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={14} className="stroke-[2.5]" />
            </motion.div>
          </button>

          <button
            type="button"
            onClick={onInquiryClick}
            className="inline-flex items-center gap-1 text-[#0B2545] hover:text-[#2C578B] font-sans text-[13px] font-semibold transition-colors duration-200 cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowRight size={12} className="translate-y-[0.5px]" />
          </button>
        </div>
      </div>

      {/* Expandable Accordion (Read More) */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-[#FAF9F6]/45 border-t border-neutral-100"
          >
            <div className="p-6 sm:p-8 flex flex-col gap-4 border-l-4 border-[#2C578B]">
              <div className="flex gap-2.5 items-start">
                <ShieldCheck size={16} className="text-[#2C578B] shrink-0 mt-0.5" />
                <p className="font-sans text-[13px] sm:text-[14px] leading-[22px] text-[#404040] font-normal">
                  {svc.details}
                </p>
              </div>
              <button
                type="button"
                onClick={onInquiryClick}
                className="w-fit h-9 px-5 rounded-full border border-neutral-200 hover:border-[#2C578B] bg-white text-[#0B2545] hover:bg-[#2C578B]/5 font-sans text-[12px] font-bold flex items-center justify-center gap-1.5 transition-all duration-200 mt-2 cursor-pointer"
              >
                <Calendar size={12} />
                Schedule Consulting Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesListing({ onInquiryClick }) {
  const services = [
    {
      id: "s1",
      number: "01",
      icon: <Compass size={24} />,
      name: "Land Identification & Investment Support",
      description:
        "We identify high-potential land parcels suitable for investment, development, and long-term growth.",
      benefits: [
        "Location potential study",
        "Future development analysis",
        "Investment suitability check",
        "Deal structuring support",
      ],
      details:
        "Our team evaluates developmental parameters such as TP schemes, arterial accessibility, and upcoming corridors in Dholera SIR to ensure your capital is positioned for maximum appreciation.",
    },
    {
      id: "s2",
      number: "02",
      icon: <Map size={24} />,
      name: "Site Visit to Deal Closure — Complete Assistance",
      description: "Complete assistance from site visit to final deal closure and plot possession.",
      benefits: [
        "Genuine ownership verification",
        "Site visit coordination",
        "Deal negotiation and execution",
        "Support till possession",
      ],
      details:
        "We organize guided tours of physical layouts, verify ownership histories, represent client interests during purchase negotiations, and handhold legal registry processes until possession certificates are issued.",
    },
    {
      id: "s3",
      number: "03",
      icon: <Users size={24} />,
      name: "Property Consulting",
      description: "Professional advice to help clients make the right property decisions.",
      benefits: [
        "Correct market price understanding",
        "Right time to buy or sell",
        "Area growth insights",
        "Personalized consultation",
      ],
      details:
        "Access deep market intelligence detailing real transaction valuations, commercial cycle indicators, zoning potentials, and portfolio diversification setups matched to your budget.",
    },
    {
      id: "s4",
      number: "04",
      icon: <Scale size={24} />,
      name: "Legal Transaction Support",
      description:
        "Ensuring smooth and legally safe transactions — from documentation review to final registration, we handle all legal formalities.",
      benefits: [
        "Clear-title verification",
        "Sale deed drafting & validation",
        "Stamp duty & registry support",
        "Documentation mutation filing",
      ],
      details:
        "Our legal advisors run extensive registry search reports, draft clear covenants, coordinate stamp documentation, and submit mutation records to local authorities to protect your real estate asset.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#fafafa]" aria-labelledby="services-heading">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Services Introduction */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <Badge label="Our Services" className="text-[#2c578b] bg-[#2c578b]/10 w-fit" />
          <h2
            id="services-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#0B2545] tracking-[-1px] leading-tight"
          >
            Comprehensive real estate solutions.
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#404040] font-normal leading-[26px]">
            From identifying premium land nodes to legal validations and bulk acquisitions, we offer
            verified processes at every step of your investment.
          </p>
        </div>

        {/* Services Grid (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {services.map(svc => (
            <ServiceCard key={svc.id} svc={svc} onInquiryClick={onInquiryClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
