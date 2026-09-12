"use client";

import Badge from "@/components/ui/Badge";
import { testimonialsData } from "@/data/testimonialsData";
import { motion } from "framer-motion";
import IconQuote from "./IconQuote";
import IconStarOutline from "./IconStarOutline";
import RatingStar from "./RatingStar";

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
      staggerChildren: 0.12,
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

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="flex flex-col gap-6 sm:gap-8 w-full overflow-hidden"
    >
      {/* ── Header Row ────────────────────────────────────────────────────── */}
      <motion.div
        variants={sectionHeaderVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-2.5 sm:gap-3 w-full"
      >
        <div className="flex flex-col gap-2.5 sm:gap-3 w-full">
          <Badge icon={<IconStarOutline />} label="CUSTOMER TESTIMONIALS" />
          <h2
            id="testimonials-heading"
            className="font-serif text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-[1.1] sm:leading-[40px] tracking-[-0.9px] text-[#2c578b] break-words"
          >
            Rated highly by our channel partners.
          </h2>
        </div>
      </motion.div>

      {/* ── Testimonials Grid ──────────────────────────────────────────────── */}
      <motion.div
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full"
      >
        {testimonialsData.map(item => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="group flex flex-col justify-between bg-white border border-[#e5e5e5] rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 md:p-7 lg:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 min-h-[260px] sm:min-h-[280px] lg:min-h-[300px]"
          >
            {/* Top Area: Quote & Text */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                <IconQuote />
              </div>
              <p className="font-sans text-[14px] sm:text-[15px] lg:text-[16px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#525252] font-light tracking-[0.1px]">
                &ldquo;{item.text}&rdquo;
              </p>
            </div>

            {/* Bottom Area: Rating & Author */}
            <div className="flex flex-col gap-3 sm:gap-4 mt-5 sm:mt-6">
              {/* 5-star Rating */}
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map(i => (
                  <RatingStar key={i} filled={true} />
                ))}
              </div>

              {/* Profile info */}
              <div>
                <h3 className="font-sans text-[14px] sm:text-[15px] lg:text-[16px] font-semibold text-[#0b2545`] tracking-[-0.2px]">
                  {item.author}
                </h3>
                <span className="font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-normal text-[#737373] mt-0.5 block">
                  {item.role}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
