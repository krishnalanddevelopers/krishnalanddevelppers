"use client";

import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function DholeraIntro() {
  const points = [
    {
      title: "Planned Smart Greenfield City",
      description:
        "Twice the size of Mumbai, built with automated utilities, smart grids, and green zoning.",
    },
    {
      title: "Government Backing",
      description:
        "Fast-track single-window approvals and massive public sector infrastructure funding.",
    },
    {
      title: "NA-Certified Clear Titles",
      description:
        "Assurance of verified titles and modular layouts ready for construction and possession.",
    },
    {
      title: "Blue-Chip Corporate Presence",
      description:
        "Growing development of blue-chip companies within Dholera's designated Activation Area.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white" aria-labelledby="intro-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text Content & Highlights */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
          <Badge label="Dholera Introduction" className="text-[#2c578b] bg-[#2c578b]/10 w-fit" />

          <h2
            id="intro-heading"
            className="font-serif text-[28px] sm:text-[36px] md:text-[44px] font-semibold text-[#0B2545] tracking-[-1px] leading-tight"
          >
            The blueprint of modern investment.
          </h2>

          <p className="font-sans text-[15px] sm:text-[16px] text-[#525252] font-light leading-[26px] max-w-xl">
            Dholera Special Investment Region (SIR) is India&apos;s premier greenfield industrial smart
            city. Backed by strong central infrastructure plans and single-window investor support,
            it stands as the ultimate destination for early land banking and farmhouse development.
          </p>

          <div className="flex flex-col gap-5 mt-2">
            {points.map((point, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2C578B]/10 text-[#2C578B] shrink-0 mt-0.5">
                  <Star size={12} className="fill-current" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-sans text-[15px] font-bold text-[#0B2545]">{point.title}</h4>
                  <p className="font-sans text-[13.5px] font-light text-[#525252] leading-[20px]">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Presentation Card (Responsive Widescreen Video Player) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-5 relative w-full aspect-square rounded-[24px] sm:rounded-[32px] border border-[#e5e5e5] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] group bg-black"
        >
          {/* HTML5 video elements */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none opacity-80"
          >
            <source src="/main-bg-1.mp4" type="video/mp4" />
          </video>

          {/* Glowing Play Overlay */}
          {/* <div className="absolute inset-0 bg-[#0B2545]/20 group-hover:bg-[#0B2545]/30 transition-colors duration-300 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 backdrop-blur-[4px] shadow-lg flex items-center justify-center text-[#0B2545] cursor-pointer"
            >
              <Play size={16} className="fill-current translate-x-0.5 sm:hidden" />
              <Play size={20} className="fill-current translate-x-0.5 hidden sm:block" />
            </motion.div>
          </div> */}

          {/* Visual Glassmorphic Tag */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <p className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-[1.5px] text-white/60">
                Graphical Showcase
              </p>
              <p className="font-display text-[13px] sm:text-[15px] font-semibold text-white">
                Dholera SIR Virtual Tour
              </p>
            </div>
            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
