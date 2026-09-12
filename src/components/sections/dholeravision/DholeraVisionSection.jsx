"use client";

import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Landmark, MapPin } from "lucide-react";
import Image from "next/image";

/* ── Animation Variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

/* ── Content ─────────────────────────────────────────────────────────────── */
const growthCards = [
  {
    number: "01",
    image: "/Dholera-12.jpg",
    title: "Future-Ready Infrastructure",
    description:
      "Planned roads, utilities and urban infrastructure built around a smart-city framework.",
  },
  {
    number: "02",
    image: "/abt10.jpeg",
    title: "A Connected Growth Corridor",
    description:
      "Strategic connectivity linking Dholera with Ahmedabad and emerging regional growth hubs.",
  },
  {
    number: "03",
    image: "/airport.jpg",
    title: "Gateway to Global Connectivity",
    description:
      "Emerging airport and transport infrastructure strengthening Dholera's long-term connectivity potential.",
  },
];

const trustPoints = [
  { icon: Landmark, label: "Central Government" },
  { icon: Building2, label: "Government of Gujarat" },
  { icon: MapPin, label: "Dholera SIR" },
];

const timelineSteps = [
  "Today",
  "Planned Infrastructure",
  "Industrial Growth",
  "Expanding Connectivity",
  "Smart Urban Ecosystem",
  "2040 Vision",
];

export default function DholeraVisionSection() {
  return (
    <section
      className="w-full py-16 md:py-24 lg:py-28 bg-[#0B2545] relative overflow-hidden"
      aria-labelledby="dholera-vision-heading"
    >
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2C578B]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#2C578B]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-16 md:gap-20 min-w-0">
        {/* 1. Section Introduction */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto"
        >
          <Badge
            icon={<Landmark size={12} className="text-white/90" />}
            label="The Vision Behind Dholera"
            className="text-white/90 bg-white/10 border border-white/15 backdrop-blur-sm w-fit"
          />
          <h2
            id="dholera-vision-heading"
            className="font-serif text-[28px] sm:text-[36px] md:text-[44px] font-semibold text-white tracking-[-1px] leading-tight"
          >
            Building Gujarat&apos;s Next Growth Destination
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-white/65 font-light leading-[26px] max-w-xl">
            Dholera is being developed as a future-ready Greenfield Smart City, shaped by planned
            infrastructure, expanding connectivity and a long-term vision for sustainable growth.
          </p>
        </motion.div>

        {/* 2. Main Visual Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-w-0">
          {/* Left — Large Visual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 relative rounded-[28px] overflow-hidden h-[300px] sm:h-[400px] md:h-[480px] group min-w-0"
          >
            <Image
              src="/dholer-land-web.webp"
              alt="Aerial view of Dholera's planned roads and airport infrastructure"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/10 to-transparent" />

            <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2C578B]" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-white">
                Vision 2040
              </span>
            </div>

            <p className="absolute bottom-6 left-6 right-6 font-serif text-[19px] sm:text-[23px] font-semibold text-white tracking-[-0.3px]">
              Planned Today. Built for Tomorrow.
            </p>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col gap-5 min-w-0"
          >
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-white/60">
              A City Planned For Tomorrow
            </span>
            <h3 className="font-serif text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.5px] leading-tight">
              A Future-Ready Urban Ecosystem
            </h3>
            <p className="font-sans text-[15px] sm:text-[16px] text-white/65 font-light leading-[24px] sm:leading-[26px]">
              Dholera&apos;s development is shaped around smart infrastructure, sustainable urban
              planning, industrial growth and stronger regional connectivity — creating the
              foundation for a future-ready city.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 flex flex-col gap-1 mt-1">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-white/60">
                Long-Term Development Vision
              </span>
              <span className="font-serif text-[52px] sm:text-[60px] font-bold text-white leading-none tracking-[-1px] mt-1">
                2040
              </span>
              <span className="font-sans text-[13px] text-white/55 font-light mt-2">
                A planned future for a smarter, more connected Dholera.
              </span>
            </div>
          </motion.div>
        </div>

        {/* 3. Government Development Trust Strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-[24px] border border-white/10 bg-white/[0.04] px-6 sm:px-10 py-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 min-w-0"
        >
          <div className="flex flex-col gap-2 lg:max-w-[360px] min-w-0">
            <h4 className="font-serif text-[18px] sm:text-[20px] font-semibold text-white leading-snug">
              A Development Framework Built for Long-Term Growth
            </h4>
            <p className="font-sans text-[13px] text-white/55 font-light leading-[20px]">
              Dholera&apos;s development is supported through coordinated Central and Gujarat
              Government initiatives and planned infrastructure programs.
            </p>
          </div>

          <div className="hidden lg:block w-px h-16 bg-white/10 shrink-0" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 flex-1 flex-wrap">
            {trustPoints.map(point => (
              <div key={point.label} className="flex items-center gap-2.5 min-w-0">
                <span className="flex h-9 w-9 rounded-full bg-white/10 items-center justify-center shrink-0">
                  <point.icon size={16} className="text-white/85" />
                </span>
                <span className="font-sans text-[13.5px] font-semibold text-white/90 whitespace-nowrap">
                  {point.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4. Three Visual Growth Cards */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {growthCards.map(card => (
            <motion.div
              key={card.number}
              variants={fadeUp}
              className="relative rounded-[24px] overflow-hidden h-[340px] sm:h-[380px] group"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/95 via-[#0B2545]/35 to-[#0B2545]/10" />

              <div className="absolute top-5 left-5 flex h-9 w-9 items-center justify-center rounded-[8px] bg-black/70 backdrop-blur-[2px] font-sans text-[12px] font-bold text-white tracking-wide">
                {card.number}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1.5">
                <h4 className="font-serif text-[18px] sm:text-[20px] font-semibold text-white tracking-[-0.3px]">
                  {card.title}
                </h4>
                <p className="font-sans text-[13.5px] sm:text-[14px] text-white/70 font-light leading-[20px] sm:leading-[22px]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 5. Road Towards 2040 Timeline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center gap-10 min-w-0 w-full"
        >
          <div className="flex flex-col items-center text-center gap-2.5 max-w-xl">
            <h3 className="font-serif text-[22px] sm:text-[26px] font-semibold text-white tracking-[-0.5px]">
              The Road Towards 2040
            </h3>
            <p className="font-sans text-[14px] sm:text-[15px] text-white/60 font-light">
              From planned infrastructure to a future-ready urban ecosystem.
            </p>
          </div>

          {/* Desktop / tablet horizontal timeline */}
          <div className="hidden sm:block w-full relative">
            <div className="absolute top-[7px] left-0 right-0 h-px bg-white/15" />
            <div className="grid grid-cols-6 gap-2">
              {timelineSteps.map((step, idx) => {
                const isEdge = idx === 0 || idx === timelineSteps.length - 1;
                return (
                  <div key={step} className="flex flex-col items-center gap-3 text-center px-1">
                    <span
                      className={`relative z-10 w-3.5 h-3.5 rounded-full border-2 ${
                        isEdge ? "bg-[#2C578B] border-white" : "bg-[#0B2545] border-white/40"
                      }`}
                    />
                    <span className="font-sans text-[11px] sm:text-[12px] font-semibold uppercase tracking-[1px] text-white/75 leading-tight">
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="sm:hidden flex flex-col w-full">
            {timelineSteps.map((step, idx) => {
              const isEdge = idx === 0 || idx === timelineSteps.length - 1;
              const isLast = idx === timelineSteps.length - 1;
              return (
                <div key={step} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span
                      className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 ${
                        isEdge ? "bg-[#2C578B] border-white" : "bg-[#0B2545] border-white/40"
                      }`}
                    />
                    {!isLast && (
                      <span
                        className="w-px bg-white/15 my-1"
                        style={{ minHeight: "26px", flex: 1 }}
                      />
                    )}
                  </div>
                  <span className="font-sans text-[13px] font-semibold uppercase tracking-[1px] text-white/75 pb-6">
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 6. Final Visual CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative rounded-[28px] overflow-hidden min-h-[340px] sm:min-h-[400px] flex items-center"
        >
          <Image
            src="/dholera-smart-city.webp"
            alt="Dholera Smart City future vision"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/95 via-[#0B2545]/80 to-[#0B2545]/45" />

          <div className="relative z-10 px-6 sm:px-10 md:px-14 py-14 max-w-xl flex flex-col gap-4">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[3px] text-white/60">
              The Bigger Picture
            </span>
            <h3 className="font-serif text-[24px] sm:text-[30px] md:text-[34px] font-semibold text-white tracking-[-0.5px] leading-tight">
              Investing in a Location Shaped for Tomorrow.
            </h3>
            <p className="font-sans text-[14px] sm:text-[15px] text-white/70 font-light leading-[24px]">
              Our developments are positioned within Dholera&apos;s evolving growth ecosystem,
              giving investors the opportunity to be part of a city being planned for the future.
            </p>
            <a
              href="#project-listing-heading"
              className="group mt-2 inline-flex items-center gap-2 w-fit h-12 px-7 rounded-full !bg-white hover:bg-[#2C578B] !text-[#0B2545] hover:!text-[#0B2545] font-sans text-[13.5px] font-bold transition-all duration-300 active:scale-[0.98] shadow-md"
            >
              Explore Our Projects
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
