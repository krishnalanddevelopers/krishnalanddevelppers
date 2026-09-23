"use client";

import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { FileCheck, Handshake, Landmark, ShieldCheck, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const benefits = [
  {
    title: "Premium Growth Zone Opportunities",
    description:
      "Access high-value plotting and farmhouse projects in the fastest-growing investment zones, including Dholera SIR.",
    icon: <Sparkles size={22} />,
  },
  {
    title: "Verified Clear-Title Properties",
    description:
      "100% NA-certified properties with clear documentation, ensuring customer confidence and smooth transaction approvals.",
    icon: <FileCheck size={22} />,
  },
  {
    title: "Attractive & Timely Commission",
    description:
      "Earn high-percentage returns with a transparent, timely, and secure commission structure for all closed deals.",
    icon: <Landmark size={22} />,
  },
  {
    title: "Full Backend & Sales Support",
    description:
      "Our dedicated backend sales team assists you at every step, from scheduling site visits to final document execution.",
    icon: <Handshake size={22} />,
  },
  {
    title: "Trusted Real Estate Brand",
    description:
      "Partner with a legacy developer known for trust, quality execution, and highly professional working standards.",
    icon: <ShieldCheck size={22} />,
  },
];

export default function WhyPartnerSection() {
  return (
    <section
      className="w-full py-12 sm:py-16 md:py-24 bg-white"
      aria-labelledby="why-partner-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start lg:items-start">
        {/* Left Side: Text Details */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-3 sm:gap-4 lg:gap-5 lg:sticky lg:top-24">
          <Badge label="Why Partner With Us" className="text-[#2c578b] bg-[#2c578b]/10 w-fit" />
          <h2
            id="why-partner-heading"
            className="font-serif text-[24px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#0B2545] tracking-[-0.5px] leading-tight"
          >
            Empowering our partners for mutual success.
          </h2>
          <p className="font-sans text-[14px] sm:text-[15px] md:text-[16px] text-[#525252] font-light leading-[24px] sm:leading-[26px]">
            At Krishna Land Developers, we believe that our growth is deeply connected to the
            success of our partners. That's why we offer premium inventory, complete transparency,
            and extensive marketing support to ensure you can build a highly profitable portfolio.
          </p>
        </div>

        {/* Right Side: Benefits Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="col-span-12 lg:col-span-7 flex flex-col gap-3 sm:gap-4 lg:gap-5 w-full"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex gap-3 sm:gap-4 bg-[#FAF9F6]/40 hover:bg-white border border-[#e5e5e5] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-3 sm:p-4 md:p-5 lg:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgba(11,37,69,0.05)] transition-all duration-300 items-start group w-full"
            >
              {/* Icon container */}
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#2C578B]/10 text-[#2C578B] shrink-0 group-hover:bg-[#2C578B] group-hover:text-white transition-colors duration-300">
                {benefit.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1 sm:gap-1.5">
                <h3 className="font-serif text-[15px] sm:text-[17px] md:text-[18px] font-bold text-[#0B2545]">
                  {benefit.title}
                </h3>
                <p className="font-sans text-[13px] sm:text-[14px] md:text-[14.5px] font-light leading-[20px] sm:leading-[22px] text-[#525252]">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
