"use client";

import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import IconArrowRight from "./IconArrowRight";
import IconGallery from "./IconGallery";
import PlayButton from "./PlayButton";

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

const leftColumnVariants = {
  hidden: { opacity: 0, x: -20, y: 20 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const rightColumnVariants = {
  hidden: { opacity: 0, x: 20, y: 20 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const rightTopVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const rightBottomVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ProjectGallerySection() {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="flex flex-col gap-8 w-full overflow-hidden"
    >
      {/* ── Header Row ────────────────────────────────────────────────────── */}
      <motion.div
        variants={sectionHeaderVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full"
      >
        <div className="flex flex-col gap-3 w-full md:w-auto min-w-0">
          <Badge icon={<IconGallery />} label="PROJECT GALLERY" />
          <h2
            id="gallery-heading"
            className="font-serif text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-[1.1] sm:leading-[40px] tracking-[-0.9px] text-[#2c578b] break-words"
          >
            Images and videos that capture the vision.
          </h2>
        </div>
        <Link
          href="/gallery"
          className="group inline-flex items-center justify-center gap-2 h-10 px-5 sm:px-6 rounded-full border border-[#e5e5e5] bg-white text-[#171717] font-sans text-[13px] font-semibold hover:bg-[#f5f5f5] hover:border-[#d0d0d0] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] active:scale-[0.97] transition-all duration-200 whitespace-nowrap shrink-0 md:self-end self-start"
        >
          View Full Gallery
          <IconArrowRight />
        </Link>
      </motion.div>

      {/* ── Layout Grid ───────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 w-full">
        {/* Left Column: Large Video Card (7/12) */}
        <motion.div
          variants={leftColumnVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="group relative col-span-12 lg:col-span-7
                     h-[300px] sm:h-[380px] md:h-[440px] lg:h-[520px]
                     rounded-[24px] border border-[#e5e5e5] bg-[#f5f5f5]
                     overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500"
        >
          {/* ── Main Video (Left Column) ── */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/gallery.png"
              alt="Premium master bedroom design video preview"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
              quality={85}
            />
          </div>
          {/* Gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 pointer-events-none" />

          {/* Video duration badge */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
            <span className="font-sans text-[11px] font-medium text-white/90">2:45</span>
          </div>

          <PlayButton />
        </motion.div>

        {/* Right Column: Stacked items (5/12) */}
        <motion.div
          variants={rightColumnVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="col-span-12 lg:col-span-5 flex flex-col gap-4 sm:gap-6 w-full"
        >
          {/* Top Wide Video Card */}
          <motion.div
            variants={rightTopVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="group relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[248px]
                       rounded-[24px] border border-[#e5e5e5] bg-[#f5f5f5]
                       overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500"
          >
            {/* ── Top Video (Right Column) ── */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/gallery2.png"
                alt="Ongoing project construction video preview"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 40vw"
                loading="lazy"
                quality={85}
              />
            </div>
            {/* Gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 pointer-events-none" />

            {/* Video duration badge */}
            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/10">
              <span className="font-sans text-[10px] sm:text-[11px] font-medium text-white/90">
                1:30
              </span>
            </div>

            <PlayButton />
          </motion.div>

          {/* Bottom Grid of two smaller images */}
          <motion.div
            variants={rightBottomVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-3 sm:gap-4 w-full h-[140px] sm:h-[170px] md:h-[190px] lg:h-[248px]"
          >
            {/* Bottom Left: Villa Image */}
            <div
              className="group relative w-full h-full
                         rounded-[24px] border border-[#e5e5e5] bg-[#f5f5f5]
                         overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500"
            >
              {/* ── Bottom Left: Villa Image ── */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/gallery3.png"
                  alt="Luxury villa exterior"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  loading="lazy"
                  quality={85}
                />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none" />

              {/* Image count badge */}
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/10">
                <span className="font-sans text-[10px] font-medium text-white/90">+12</span>
              </div>
            </div>

            {/* Bottom Right: Living Room Image */}
            <div
              className="group relative w-full h-full
                         rounded-[24px] border border-[#e5e5e5] bg-[#f5f5f5]
                         overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500"
            >
              {/* ── Bottom Right: Interior Image ── */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/gallery4.png"
                  alt="Cozy interior room setup"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  loading="lazy"
                  quality={85}
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none" />

              {/* Play icon for interior video */}
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full w-7 h-7 flex items-center justify-center border border-white/10">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <path
                    d="M9 6L1 11V1L9 6Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
