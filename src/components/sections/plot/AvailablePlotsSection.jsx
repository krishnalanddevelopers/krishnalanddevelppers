"use client";

import Badge from "@/components/ui/Badge";
import { plotsData } from "@/data/plotsData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import IconCardMapPin from "./IconCardMapPin";
import IconMapPinOutline from "./IconMapPinOutline";

/* ── Animation Variants ─────────────────────────────────────────────────── */
const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardsContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AvailablePlotsSection() {
  return (
    <section aria-labelledby="plots-heading" className="flex flex-col gap-8 w-full overflow-hidden">
      {/* ── Header Row ────────────────────────────────────────────────────── */}
      <motion.div
        variants={sectionHeaderVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full"
      >
        <div className="flex flex-col gap-3 w-full md:w-auto min-w-0">
          {/* Badge with responsive label */}
          <Badge
            icon={<IconMapPinOutline />}
            label={
              <>
                <span className="hidden xs:inline">PROPERTY LISTINGS / </span>
                <span>AVAILABLE PLOTS</span>
              </>
            }
          />

          {/* Heading with proper text wrapping */}
          <h2
            id="plots-heading"
            className="font-serif text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-[1.1] sm:leading-[40px] tracking-[-0.9px] text-[#2c578b] break-words"
          >
            Available plots with
            <br className="hidden xs:inline" />
            premium positioning.
          </h2>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center justify-center h-10 px-5 sm:px-6 rounded-full border border-[#e5e5e5] bg-white !text-[#0b2545] font-sans text-[13px] sm:text-[14px] font-medium hover:bg-[#f5f5f5] hover:border-[#d0d0d0] transition-all duration-200 whitespace-nowrap md:self-end self-start shrink-0"
        >
          Browse All Plots
        </Link>
      </motion.div>

      {/* ── Cards Grid ────────────────────────────────────────────────────── */}
      <motion.div
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full"
      >
        {plotsData.map(plot => (
          <motion.div
            key={plot.id}
            variants={cardVariants}
            className="group flex flex-col bg-white rounded-[24px] border border-[#e5e5e5] p-4 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1"
          >
            {/* Image Container with inner rounding */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-[#f5f5f5]">
              <Image
                src={plot.image}
                alt={plot.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
              />
            </div>

            {/* Info details */}
            <div className="flex flex-col gap-1.5 mt-4">
              <div className="flex justify-between items-center gap-2">
                <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#0b2545] tracking-[-0.3px] truncate">
                  {plot.title}
                </h3>
                <span className="font-sans text-[15px] sm:text-[16px] font-semibold text-[#0b2545] shrink-0">
                  {plot.price}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[#737373] text-[13px] sm:text-[14px] font-light">
                <IconCardMapPin />
                <span className="truncate">{plot.location}</span>
              </div>
            </div>

            {/* Tags badges */}
            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {plot.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-[#f5f5f5] text-[#0b2545] font-sans text-[11px] sm:text-[12px] font-medium px-3 py-1 rounded-full whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Details Button */}
            <div className="mt-5 w-full">
              <Link
                href="#"
                className="w-full h-10 bg-[#0b2545] hover:bg-[#2a2a2a] !text-white font-sans text-[13px] sm:text-[14px] font-medium rounded-full flex items-center justify-center transition-all duration-200 active:scale-[0.97]"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
