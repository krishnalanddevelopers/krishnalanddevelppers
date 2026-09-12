"use client";

import Badge from "@/components/ui/Badge";
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

// SVG icons representing advantages
function PlaneIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
  );
}

function RoadIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M15 3v18" />
    </svg>
  );
}

function MetroIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 11h16M12 4v16M4 4h16M4 20h16" />
    </svg>
  );
}

function ZoneIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

const defaultAdvantages = [
  {
    title: "International Airport",
    description:
      "A short drive from the proposed Cargo Airport, facilitating rapid transit and high commercial value appreciation.",
    timeTag: "15 Mins Away",
    icon: <PlaneIcon />,
  },
  {
    title: "Expressway Access",
    description:
      "Direct connectivity via the Ahmedabad-Dholera Expressway, making travel into Ahmedabad fast and seamless.",
    timeTag: "10 Mins Away",
    icon: <RoadIcon />,
  },
  {
    title: "Metro Connectivity",
    description:
      "Upcoming Dholera MRTS Metro station positioned within a very short walking distance from the project gate.",
    timeTag: "5 Mins Away",
    icon: <MetroIcon />,
  },
  {
    title: "Dholera SIR Zone",
    description:
      "Strategically located within the main development boundary, placing you directly inside Gujarat's futuristic smart hub.",
    timeTag: "Main SIR Zone",
    icon: <ZoneIcon />,
  },
];

export default function ProjectAdvantages({
  title = "You're at the Centre of It All.",
  advantages = defaultAdvantages,
}) {
  return (
    <section
      className="w-full py-16 md:py-24 bg-white border-t border-[#eaeaea]"
      aria-labelledby="advantages-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Left-Aligned Heading */}
        <div className="flex flex-col gap-3">
          <Badge label="Location Advantages" />
          <h2
            id="advantages-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#2c578b] tracking-[-1px] leading-tight"
          >
            {title}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {advantages.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex flex-col justify-between bg-[#F9FAFB]/50 hover:bg-white border border-[#e5e5e5] rounded-[24px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] transition-all duration-300 min-h-[220px]"
            >
              <div>
                {/* Header: Icon + Time Tag */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#2C578B]/10 text-[#2C578B] shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-sans text-[11px] font-semibold text-[#0B2545] bg-[#0b2545]/5 border border-[#0b2545]/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {item.timeTag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-sans text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#0B2545] mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-[13px] sm:text-[15px] font-light leading-[20px] sm:leading-[22px] text-[#1b1b1b]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
