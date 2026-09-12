"use client";

import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Custom SVG Icons for each amenity
function ClubhouseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 21h18M3 10h18M5 10V5a2 2 0 012-2h10a2 2 0 012 2v5M10 21V14h4v7" />
    </svg>
  );
}

function GardenIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H7" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function SportsIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M6 12A6 6 0 0118 12M12 6A6 6 0 0012 18" />
    </svg>
  );
}

function KidsIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v8H2zM6 12h4" />
    </svg>
  );
}

function PoolIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M2 6c4-2 8-2 12 0s8 2 12 0M2 12c4-2 8-2 12 0s8 2 12 0M2 18c4-2 8-2 12 0s8 2 12 0" />
    </svg>
  );
}

function GymIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6.5 6.5h11M6.5 17.5h11M3 12h18M3 9v6M21 9v6" />
    </svg>
  );
}

function SeniorIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

const defaultAmenities = [
  { label: "Clubhouse", image: "/image1.avif" },
  { label: "Theme Garden", image: "/image2.avif" },
  { label: "Smart Utilities", image: "/image3.avif" },
  { label: "Indoor Games", image: "/image4.avif" },
  { label: "Children Play Area", image: "/image5.avif" },
  { label: "Swimming Pool", image: "/image6.avif" },
  { label: "Gymnasium", image: "/image1.avif" },
  { label: "Senior Citizen Area", image: "/image2.avif" },
];

export default function ProjectAmenities({
  title = "World-Class Amenities",
  subtitle = "Providing a curated set of premium amenities for a refined living experience.",
  amenities = defaultAmenities,
}) {
  return (
    <section
      className="w-full py-16 md:py-24 bg-[#0B2545] text-white overflow-hidden"
      aria-labelledby="amenities-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12 sm:gap-16">
        {/* Centered Heading */}
        <div className="flex flex-col items-center text-center gap-3">
          <Badge label="Amenities" className="!bg-white/10 !border-white/15 !text-white" />
          <h2
            id="amenities-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-white tracking-[-1px]"
          >
            {title}
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] font-light text-white/70 max-w-[580px]">
            {subtitle}
          </p>
        </div>

        {/* 8 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full"
        >
          {amenities.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative h-[150px] sm:h-[180px] md:h-[200px] rounded-[20px] overflow-hidden border border-white/10 bg-[#171717] shadow-lg cursor-default"
            >
              {/* Dummy Image Background */}
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Tint overlay */}
              <div className="absolute inset-0 bg-[#0B2545]/45 group-hover:bg-[#0B2545]/35 transition-colors duration-300 z-0" />

              {/* Top-Left Translucent Icon */}
              {/* <div className="absolute top-4 left-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 backdrop-blur-[6px] border border-white/20 flex items-center justify-center text-white">
                {item.icon}
              </div> */}

              {/* Bottom Label */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="font-sans text-[14px] sm:text-[16px] font-semibold text-white tracking-tight drop-shadow-md">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
