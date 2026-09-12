"use client";

import IconStarOutline from "@/components/sections/testimonals/IconStarOutline";
import RatingStar from "@/components/sections/testimonals/RatingStar";
import Badge from "@/components/ui/Badge";
import { testimonialsData } from "@/data/testimonialsData";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AboutTestimonials() {
  return (
    <section
      className="w-full py-16 md:py-24 bg-[#F9FAFB] border-t border-[#eaeaea]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Left-Aligned Heading */}
        <div className="flex flex-col gap-3">
          <Badge icon={<IconStarOutline />} label="CHANNEL PARTNER RATING" />
          <h2
            id="testimonials-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#2c578b] tracking-[-1px] leading-tight"
          >
            Rated highly by our channel partners.
          </h2>
        </div>

        {/* Testimonials 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {testimonialsData.map(item => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group flex flex-col justify-between bg-white border border-[#e5e5e5] rounded-[24px] p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 min-h-[280px]"
            >
              {/* Testimonial Content */}
              <div className="flex flex-col gap-4">
                {/* Double Slash Quote Indicator */}
                <span className="font-sans text-[22px] font-light text-neutral-300 select-none block">
                  //
                </span>

                {/* Quote Text */}
                <p className="font-sans text-[14px] sm:text-[15px] lg:text-[16px] leading-[24px] sm:leading-[26px] text-[#525252] font-light">
                  {item.text}
                </p>
              </div>

              {/* Author & Rating Info */}
              <div className="flex flex-col gap-3.5 mt-6 pt-4 border-t border-[#f5f5f5]">
                {/* 5-Star Rating */}
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map(i => (
                    <RatingStar key={i} filled={true} />
                  ))}
                </div>

                {/* Profile info */}
                <div>
                  <h3 className="font-sans text-[14px] sm:text-[15px] font-semibold text-[#0b2545] tracking-tight">
                    {item.author}
                  </h3>
                  <span className="font-sans text-[12px] sm:text-[13px] font-normal text-[#737373] mt-0.5 block">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
