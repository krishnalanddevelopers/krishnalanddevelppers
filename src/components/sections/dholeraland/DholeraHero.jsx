"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HERO_VIDEO = "/dholera-smart.avif";

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

export default function DholeraHero({ onInquiryClick }) {
  return (
    <section
      aria-label="Dholera Hero"
      className="relative w-full min-h-[500px] lg:min-h-[560px] rounded-[24px] border border-[#e5e5e5] overflow-hidden bg-[#171717] shadow-[0_15px_40px_rgba(11,37,69,0.15)] flex items-center justify-center"
    >
      {/* Background Video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none opacity-80"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video> */}
      <Image
        src={HERO_VIDEO}
        alt="Dholera Smart City Infrastructure planning mockup"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-103"
        sizes="(max-width: 1024px) 100vw, 40vw"
      />

      {/* Premium dark gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,37,69,0.85) 0%, rgba(23,23,23,0.70) 50%, rgba(11,37,69,0.85) 100%)",
        }}
      />

      {/* Centered Content Container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-5">
        {/* Breadcrumb pill */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-[8px] px-4.5 py-2 hover:bg-white/10 transition-all duration-300"
        >
          <Link
            href="/"
            className="font-sans text-[11px] font-medium leading-none !text-white hover:text-white transition-colors"
          >
            Home
          </Link>
          <span className="text-white/30 text-[10px]">/</span>
          <span className="font-sans text-[11px] font-semibold leading-none text-white tracking-[1px] uppercase cursor-default select-none">
            Dholera SIR
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="show"
          className="font-display font-semibold text-[#fafafa] text-[clamp(32px,5.5vw,54px)] leading-[1.1] tracking-[-1.5px]"
        >
          Invest in India's Greenfield Smart City
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate="show"
          className="font-sans text-[14px] sm:text-[16px] font-light leading-[24px] sm:leading-[28px] text-white/70 tracking-[0.1px] max-w-2xl"
        >
          Position yourself in the heart of Gujarat's landmark industrial corridor. Dholera SIR is
          India's first planned smart city, twice the size of Delhi, offering high-yield
          NA-certified investment plots backed by solid infrastructure.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} initial="hidden" animate="show" className="mt-2">
          <button
            type="button"
            onClick={onInquiryClick}
            className="group inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full !bg-white text-[#0B2545] !hover:text-[#0B2545] font-sans text-[14px] font-semibold leading-none shadow-[0px_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0px_8px_24px_rgba(44,87,139,0.25)] hover:bg-[#2C578B] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Enquiry Now
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
