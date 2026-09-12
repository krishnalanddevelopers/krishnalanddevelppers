"use client";

import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { Route, Train, Plane } from "lucide-react";

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

const connectivityPillars = [
  {
    number: "01",
    title: "Road Connectivity",
    description: "Features a well-planned and wide road network throughout Dholera SIR, including the Ahmedabad-Dholera Expressway for rapid highway travel.",
    icon: <Route size={22} />,
  },
  {
    number: "02",
    title: "Metro Connectivity",
    description: "Upcoming high-speed Metro rail transit system (MRTS) connecting Dholera directly to Ahmedabad, facilitating mass public commutes.",
    icon: <Train size={22} />,
  },
  {
    number: "03",
    title: "Air Connectivity",
    description: "The Dholera International Airport is currently under development to serve as a massive cargo logistics and passenger aviation hub.",
    icon: <Plane size={22} />,
  },
];

export default function WhyDholera() {
  return (
    <section className="w-full py-16 md:py-24 bg-white border-t border-[#eaeaea]" aria-labelledby="connectivity-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex flex-col gap-3">
          <Badge label="Transit & Infrastructure" className="text-[#2c578b] bg-[#2c578b]/10" />
          <h2
            id="connectivity-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#0B2545] tracking-[-1px] leading-tight"
          >
            Why Dholera attracts investors.
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#737373] max-w-xl font-light">
            Integrated transit systems ensure Dholera SIR is highly accessible, making it a primary node for commercial logistics.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          {connectivityPillars.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col bg-[#FAF9F6]/30 border border-[#e5e5e5] rounded-[24px] p-6 sm:p-8 hover:bg-white hover:shadow-[0_15px_30px_rgba(11,37,69,0.04)] hover:-translate-y-1 transition-all duration-300 min-h-[250px] justify-between relative group overflow-hidden"
            >
              {/* Background Light Numbering */}
              <div className="absolute right-6 top-4 font-serif text-[72px] font-extrabold text-[#2C578B]/5 select-none pointer-events-none group-hover:text-[#2C578B]/10 transition-colors duration-300">
                {item.number}
              </div>

              <div className="flex flex-col gap-5">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#2C578B]/10 text-[#2C578B] shrink-0 group-hover:bg-[#2C578B] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#0B2545] leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[13.5px] sm:text-[14.5px] font-light leading-[22px] text-[#525252]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
