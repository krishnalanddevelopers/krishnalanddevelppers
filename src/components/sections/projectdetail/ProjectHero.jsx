"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
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

export default function ProjectHero({
  tag,
  title,
  subtitle,
  description,
  backgroundImage = "/sample-12.jpg",
  onBrochureClick,
  onLayoutClick,
}) {
  return (
    <section
      className="relative w-full min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#171717]"
      aria-label="Project Hero"
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={`${title} banner background`}
        fill
        priority
        className="object-cover select-none pointer-events-none opacity-85"
        sizes="100vw"
      />

      {/* Dark Overlay for readability */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 37, 69, 0.75) 0%, rgba(23, 23, 23, 0.4) 50%, rgba(11, 37, 69, 0.8) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-[840px] flex flex-col items-center gap-5 sm:gap-6"
        >
          {/* Badge Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-[8px] px-4 py-1.5 cursor-default"
          >
            <span className="font-sans text-[11px] sm:text-[12px] font-semibold text-[#fafafa] tracking-[3px] uppercase">
              {tag}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif font-bold text-white text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px] leading-[1.06] tracking-[-1.5px]"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-serif text-[18px] sm:text-[22px] md:text-[26px] font-medium text-white/90 leading-tight"
          >
            {subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-[14px] sm:text-[16px] font-light leading-[24px] sm:leading-[28px] text-white/75 max-w-[620px]"
          >
            {description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mt-2"
          >
            <button
              onClick={onBrochureClick}
              className="w-full sm:w-auto h-11 px-6 rounded-full !bg-white hover:bg-[#f5f5f5] text-[#0B2545] font-sans text-[14px] font-medium transition-all duration-200 shadow-md active:scale-[0.98]"
            >
              Download Brochure
            </button>
            <button
              onClick={onLayoutClick}
              className="w-full sm:w-auto h-11 px-6 rounded-full border border-white/35 !bg-white/5 hover:bg-white/15 text-white font-sans text-[14px] font-medium backdrop-blur-[4px] transition-all duration-200 active:scale-[0.98]"
            >
              Explore Layout
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
