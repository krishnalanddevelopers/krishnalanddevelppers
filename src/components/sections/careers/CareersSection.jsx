"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function CareersSection() {
  const jobs = [
    {
      title: "Real Estate Sales Advisor",
      department: "Sales & Advisory",
      location: "Dholera SIR / Ahmedabad",
      description:
        "Engage with HNI investors, understand asset requirements, provide custom ROI analyses, and lead local site visit logistics.",
    },
    {
      title: "Investment Analyst",
      department: "Portfolio Management",
      location: "Ahmedabad Office",
      description:
        "Conduct comprehensive land zoning research, financial modeling for industrial layouts, and draft customer reports.",
    },
    {
      title: "Channel Partner Manager",
      department: "Partner Network",
      location: "Dholera SIR",
      description:
        "Establish relationships with channel partners, train them on Dholera infrastructure expansion, and coordinate client submissions.",
    },
  ];
  return (
    <>
      <section id="careers" aria-labelledby="careers-heading" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
          {/* Left Column: Heading and Culture */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 self-start bg-[#2C578B]/10 rounded-full px-4 py-2 text-[#2C578B]">
              <span className="font-sans text-[11px] font-semibold tracking-[4px] uppercase">
                Careers
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h2
                id="careers-heading"
                className="font-display text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-1px] text-[#0B2545]"
              >
                Join the Expansion
              </h2>
              <p className="font-sans text-[15px] font-light leading-[24px] text-[#525252]">
                We are building the future of Dholera real estate. Join a high-performing team
                dedicated to growth, structural transparency, and client success. Find your place
                and shape your legacy.
              </p>
            </div>
          </div>

          {/* Right Column: Jobs Stack */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 flex flex-col gap-4"
          >
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-[24px] border border-[#e5e5e5] hover:border-[#2C578B]/30 hover:shadow-[0_12px_24px_rgba(11,37,69,0.04)] transition-all duration-300"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-sans text-[12px] font-semibold text-[#2C578B] bg-[#2C578B]/5 px-2.5 py-1 rounded-md">
                      {job.department}
                    </span>
                    <span className="font-sans text-[12px] text-[#737373] flex items-center gap-1">
                      <MapPin size={12} className="text-[#737373]" />
                      {job.location}
                    </span>
                  </div>
                  <h3 className="font-display text-[20px] font-semibold text-[#0B2545] mt-1">
                    {job.title}
                  </h3>
                  <p className="font-sans text-[14px] text-[#525252] font-light max-w-xl leading-[22px]">
                    {job.description}
                  </p>
                </div>

                <Link href="/career">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center h-10 px-5 rounded-full !bg-[#0B2545] !hover:bg-[#2C578B] !text-white font-sans text-[13px] font-medium transition-all duration-200 cursor-pointer self-start sm:self-center shrink-0"
                  >
                    Apply Now
                  </button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
