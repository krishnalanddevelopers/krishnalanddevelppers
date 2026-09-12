"use client";

import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import Image from "next/image";

const BEDROOM_IMG = "/abt10.jpeg";

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

function TargetIcon() {
  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f5f5f5] text-[#0B2545] shrink-0 border border-[#e5e5e5]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}

function PlusIcon() {
  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f5f5f5] text-[#0B2545] shrink-0 border border-[#e5e5e5]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19M5 12H19"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function VisionMission() {
  return (
    <section className="w-full py-16 md:py-24 bg-white" aria-labelledby="vision-mission-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* Left Column: Image with glass floating badge */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3] min-h-[340px] sm:min-h-[420px] rounded-[24px] overflow-hidden border border-[#f0f0f0] shadow-sm"
          >
            <Image
              src={BEDROOM_IMG}
              alt="Luxury contemporary bedroom"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            {/* Philosophy glass floating card */}
            <div className="absolute bottom-5 left-5 right-5 p-5 rounded-[16px] bg-black/30 border border-white/10 backdrop-blur-xl shadow-lg">
              <span className="font-sans text-[10px] font-semibold tracking-[4px] uppercase text-white/60 block mb-1">
                Our Philosophy
              </span>
              <p className="font-serif text-[18px] sm:text-[22px] font-light leading-snug text-white">
                Vision built on land,
                <br />
                mission built on trust.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Title + Vision & Mission Items */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-6 flex flex-col gap-8 lg:gap-10"
          >
            <div className="flex flex-col gap-3">
              <Badge label="Our purpose" />
              <h2
                id="vision-mission-heading"
                className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#2c578b] tracking-[-1px]"
              >
                Our vision & mission
              </h2>
            </div>

            {/* Items rows */}
            <div className="flex flex-col gap-8">
              {/* Vision row */}
              <div className="flex gap-4 items-start border-b border-[#f0f0f0] pb-6">
                <TargetIcon />
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-sans text-[18px] sm:text-[20px] md:text-[22px] font-bold text-[#0b2545]">
                    Our Vision
                  </h3>
                  <p className="font-sans text-[16px] sm:text-[18px] font-normal leading-[22px] sm:leading-[24px] text-[#404040]">
                    To be Gujarat’s most trusted land development partner, creating future-ready
                    communities while delivering transparency, trust, and lasting value to every
                    investor.
                  </p>
                </div>
              </div>

              {/* Mission row */}
              <div className="flex gap-4 items-start">
                <PlusIcon />
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-sans text-[18px] sm:text-[20px] md:text-[22px] font-bold text-[#0b2545]">
                    Our Mission
                  </h3>
                  <p className="font-sans text-[16px] sm:text-[18px] font-normal leading-[22px] sm:leading-[24px] text-[#404040]">
                    To provide secure, well-documented, strategically located land investments
                    through ethical practices, expert guidance, and a commitment to client trust.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
