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

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function TeamSection() {
  const team = [
    {
      name: "Tejas Shah",
      role: "Founder & Chairman",
      image: "/Tejas.jpg",
    },
    {
      name: "Dhaarmin Shah",
      role: "Founder & Managing Director",
      image: "/dharmin.webp",
    },
  ];

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-neutral-100"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 self-start bg-neutral-100 border border-neutral-200 rounded-full px-4.5 py-1.5 text-[#525252]">
            <span className="font-sans text-[11px] font-semibold tracking-[2px] uppercase">
              Meet Our Team
            </span>
          </div>

          <h2
            id="team-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold leading-[1.15] tracking-[-1px] text-[#0B2545] break-words"
          >
            The people behind every plot.
          </h2>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col bg-white rounded-[28px] border border-neutral-200/60 p-4.5 hover:shadow-[0_15px_30px_rgba(11,37,69,0.04)] hover:-translate-y-1 transition-all duration-300 h-full"
            >
              {/* Image Container with Next.js Image */}
              <div className="relative aspect-3/4 w-full rounded-[20px] bg-neutral-100 overflow-hidden group">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 2}
                />
              </div>

              {/* Text details */}
              <div className="flex flex-col gap-1 mt-4.5 px-1.5 pb-1">
                <h3 className="font-serif text-[19px] sm:text-[21px] font-semibold text-[#0B2545]">
                  {member.name}
                </h3>
                <p className="font-sans text-[13px] sm:text-[14px] text-[#737373] font-light leading-[18px] sm:leading-[20px]">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
