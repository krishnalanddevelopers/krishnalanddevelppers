"use client";

import { motion } from "framer-motion";
import { Landmark, LayoutGrid, Plane, Route } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DHOLERA_IMG = "/about-bg.jpg";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const rightColumnVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function IconArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutDholeraSection() {
  const highlights = [
    {
      icon: Route,
      title: "DMIC Corridor Connection",
      description:
        "Strategically located along the DMIC corridor, giving investors easy access to major industrial and business hubs.",
    },
    {
      icon: LayoutGrid,
      title: "World-Class Master Planning",
      description:
        "Designed as a smart city with modern infrastructure, planned zones, and better connectivity for future growth.",
    },
    {
      icon: Plane,
      title: "Upcoming International Airport",
      description:
        "The upcoming airport will make travel easier and improve passenger access to support future growth.",
    },
    {
      icon: Landmark,
      title: "Strong Government Backing",
      description:
        "Supported by major government projects, better infrastructure and strong development plans for the region",
    },
  ];

  return (
    <section id="dholera" aria-labelledby="dholera-heading" className="w-full">
      <div className="bg-[#0B2545] rounded-[32px] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(11,37,69,0.3)] overflow-hidden relative">
        {/* Glow decorative effects */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2C578B]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2C578B]/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Content & Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="col-span-1 lg:col-span-7 flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 self-start bg-white/5 border border-white/10 rounded-full px-4.5 py-1.5 text-white/60"
            >
              <span className="font-sans text-[11px] font-semibold tracking-[2px] uppercase">
                INVESTMENT HUB
              </span>
            </motion.div>

            {/* Heading & Intro */}
            <div className="flex flex-col gap-4">
              <motion.h2
                variants={itemVariants}
                id="dholera-heading"
                className="font-display text-[32px] sm:text-[38px] md:text-[44px] font-semibold leading-[1.15] text-white tracking-[-1px] max-w-xl"
              >
                Explore Dholera SIR –{" "}
                <span className="text-[#2C578B] brightness-125">The Future Investment Hub</span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="font-sans text-[15px] sm:text-[16px] font-light leading-[26px] text-white/60 max-w-xl"
              >
                Dholera Special Investment Region (SIR) is India's first planned greenfield smart
                city project. Designed to grow with the size of Mumbai, Dholera offers modern
                infrastructure, strong connectivity, and exciting long-term investment
                opportunities.
              </motion.p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 mt-2">
              {highlights.map((hl, index) => {
                const Icon = hl.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#2C578B] brightness-125">
                      <Icon size={18} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-display text-[17px] sm:text-[18px] font-semibold text-white">
                        {hl.title}
                      </h4>
                      <p className="font-sans text-[14px] sm:text-[15px] font-light leading-[20px] sm:leading-[22px] text-white/60">
                        {hl.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mt-4">
              <Link
                href="/dholera"
                className="group inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-white text-[#0B2545] font-sans text-[14px] font-semibold hover:bg-[#2C578B] hover:!text-white transition-all duration-300 shadow-sm"
              >
                Explore Now
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="translate-y-[0.5px]"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Image Showcase */}
          <motion.div
            variants={rightColumnVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="col-span-1 lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] rounded-[24px] border border-white/10 overflow-hidden shadow-2xl"
          >
            <Image
              src={DHOLERA_IMG}
              alt="Dholera Smart City Infrastructure planning"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Visual Glassmorphic Tag */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[1.5px] text-white/40">
                  Smart City Infrastructure
                </p>
                <p className="font-display text-[16px] font-semibold text-white">
                  Phase 1 Activation Ready
                </p>
              </div>
              <div className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse shrink-0 ml-2" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
