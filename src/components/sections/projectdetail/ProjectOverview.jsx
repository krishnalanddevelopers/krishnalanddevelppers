"use client";

import Badge from "@/components/ui/Badge";
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

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function CheckmarkIcon() {
  return (
    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#2C578B] text-white shrink-0">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 4L3.5 6.5L9 1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function ProjectOverview({
  badge = "About the Project",
  title = "Where Ancient Rome Meets Tomorrow's City.",
  description,
  bullets = [],
  stats = [],
  layoutMapImage = "/about-bg.png",
}) {
  return (
    <section className="w-full py-16 md:py-24 bg-white" aria-labelledby="project-overview-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
        >
          {/* Left Column: Plot Layout Map Image */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-6 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-[#f0f0f0] shadow-sm bg-[#fafafa]"
          >
            <Image
              src={layoutMapImage}
              alt="Project layout plan map"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            {/* Overlay pill */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-[4px] border border-[#e5e5e5] rounded-full px-4 py-1.5 shadow-sm">
              <span className="font-sans text-[11px] font-semibold text-[#0B2545] tracking-[1px] uppercase">
                Project Layout Plan
              </span>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-6 flex flex-col gap-6 lg:gap-8"
          >
            <div className="flex flex-col gap-3">
              <Badge label={badge} />
              <h2
                id="project-overview-heading"
                className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#2c578b] leading-[1.12] tracking-[-1px]"
              >
                {title}
              </h2>
              <div className="font-sans text-[15px] sm:text-[16px] font-normal leading-[24px] sm:leading-[26px] text-[#404040] space-y-4 mt-2">
                {description}
              </div>
            </div>

            {/* Checklist Bullets */}
            {bullets.length > 0 && (
              <div className="flex flex-col gap-3.5">
                {bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckmarkIcon />
                    <span className="font-sans text-[14px] sm:text-[15px] font-medium text-[#171717]">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Stats Row */}
            {stats.length > 0 && (
              <div className="grid grid-cols-3 gap-4 border-t border-[#f0f0f0] pt-6 mt-2">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col gap-1 border-r border-[#f0f0f0] last:border-0 pr-2">
                    <span className="font-sans text-[20px] sm:text-[24px] font-bold text-[#0b2545] leading-none tracking-tight">
                      {stat.value}
                    </span>
                    <span className="font-sans text-[11px] sm:text-[12px] font-light text-[#737373] mt-1 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
