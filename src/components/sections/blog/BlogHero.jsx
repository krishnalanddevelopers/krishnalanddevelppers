"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HERO_IMG = "/sample-12.jpeg";

const bannerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2,
    },
  },
};

export default function BlogHero() {
  return (
    <motion.section
      variants={bannerVariants}
      initial="hidden"
      animate="show"
      className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] overflow-hidden bg-[#171717]"
    >
      {/* Background Image */}
      <Image
        src={HERO_IMG}
        alt="Farmland sunset banner background"
        fill
        priority
        className="object-cover object-center select-none pointer-events-none opacity-90"
        sizes="100vw"
      />

      {/* Dark Gradient Overlay for legible text */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11, 37, 69, 0.7) 0%, rgba(23, 23, 23, 0.4) 50%, rgba(11, 37, 69, 0.75) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <motion.div variants={textVariants} className="flex flex-col items-center gap-4 md:gap-5">
          {/* Title */}
          <h1 className="font-serif text-[42px] sm:text-[52px] md:text-[64px] font-semibold text-white tracking-[-1.5px] leading-none">
            Blog & Insights
          </h1>

          {/* Breadcrumb pill */}
          <div className="inline-flex items-center bg-black/45 backdrop-blur-[8px] border border-white/15 px-5 py-2 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
            <Link
              href="/"
              className="font-sans text-[13px] md:text-[14px] font-medium !text-white hover:text-white transition-colors duration-150"
            >
              Home
            </Link>
            <span className="text-white/30 mx-2.5 text-[13px] font-light">|</span>
            <span className="font-sans text-[13px] md:text-[14px] font-medium text-white/95 cursor-default select-none">
              Blog
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
