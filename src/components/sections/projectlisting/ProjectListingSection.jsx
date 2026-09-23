"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ── Animation Variants ─────────────────────────────────────────────────── */
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
      staggerChildren: 0.1,
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

const projectsData = [
  {
    id: "kasindra",
    title: "Antarim at  Kasindra ",
    location: "Kasindra, Dholera SIR",
    description:
      "A thoughtfully planned plotting and villa estate development by Krishna Land Developers, strategically located in the fast-growing Kasindra corridor, offering excellent connectivity, growing infrastructure, and strong long-term investment potential.",
    tags: ["Ongoing", "Residential Plots", "Villas"],
    images: [
      "/gallery/kasindra/aumpg.png",
      "/gallery/kasindra/ZEN2AI.png",
      "/gallery/kasindra/sample14.png",
      "/gallery/kasindra/same-bg.png",
      "/kasindra.avif",
    ],
    href: "/kasindra",
  },
  {
    id: "navagam",
    title: "Aurum Valley at Navagam",
    location: "Navgam, Dholera SIR",
    description:
      "A premium, fully-completed plotting and ready-to-construct farmhouse community near the international airport, offering excellent connectivity, weekend living, and strong long-term appreciation potentia",
    tags: ["Completed", "International Airport", "Ready Title"],
    images: [
      "/gallery/navgam/clubhouse1.png",
      "/gallery/navgam/Temple.png",
      "/gallery/navgam/opengym1.png",
      "/gallery/navgam/kidsplayaera.png",
      "/arielview.avif",
    ],
    href: "/navagam",
  },
];

/* ── Card Image Slider ──────────────────────────────────────────────────── */
function ProjectImageSlider({ images, alt }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return undefined;
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  const goTo = (index, e) => {
    e?.stopPropagation();
    e?.preventDefault();
    setActiveIndex((index + images.length) % images.length);
  };

  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = e => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(activeIndex + (delta < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="group/slider relative aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-[#f5f5f5]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[activeIndex]}
            alt={`${alt} - photo ${activeIndex + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          {/* Bottom scrim for dot/badge legibility over bright photos */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent" />

          {/* Prev / Next arrows */}
          <button
            type="button"
            onClick={e => goTo(activeIndex - 1, e)}
            aria-label="Previous photo"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-md text-[#0b2545] opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 hover:bg-white active:scale-95"
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={e => goTo(activeIndex + 1, e)}
            aria-label="Next photo"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-md text-[#0b2545] opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 hover:bg-white active:scale-95"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1">
            {images.map((img, idx) => (
              <button
                key={img}
                type="button"
                onClick={e => goTo(idx, e)}
                aria-label={`Go to photo ${idx + 1}`}
                className="p-1.5 -m-0.5 flex items-center justify-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-5 bg-white" : "w-1.5 bg-white/60 hover:bg-white/85"
                  } shadow-[0_0_2px_rgba(0,0,0,0.5)]`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectListingSection() {
  return (
    <section
      aria-labelledby="project-listing-heading"
      className="flex flex-col gap-10 w-full overflow-hidden"
    >
      {/* ── Header Row ────────────────────────────────────────────────────── */}
      <motion.div
        variants={sectionHeaderVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center gap-3 w-full"
      >
        <div className="flex flex-col gap-3 w-full md:w-auto min-w-0 text-center">
          <h2
            id="project-listing-heading"
            className="font-serif text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-[1.1] tracking-[-0.9px] text-[#2c578b] break-words"
          >
            Explore our premium developments
          </h2>
        </div>
      </motion.div>

      {/* ── Cards Grid ────────────────────────────────────────────────────── */}
      <motion.div
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-[1200px] mx-auto"
      >
        {projectsData.map(project => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="group flex flex-col bg-white rounded-[24px] border border-[#e5e5e5] p-4 overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
          >
            {/* Image Container with slider */}
            <ProjectImageSlider images={project.images} alt={project.title} />

            {/* Info details */}
            <div className="flex flex-col gap-2 mt-5 flex-1">
              <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#0b2545] tracking-[-0.3px] group-hover:text-[#2c578b] transition-colors duration-200">
                {project.title}
              </h3>

              <div className="flex items-center gap-1.5 text-[#737373] text-[13px] sm:text-[14px] font-light">
                <MapPin size={14} className="text-[#2c578b]" />
                <span className="truncate">{project.location}</span>
              </div>

              <p className="font-sans text-[14px] sm:text-[15px] text-[#404040] leading-[20px] sm:leading-[22px] font-normal mt-1 line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Tags badges */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-[#f5f5f5] text-[#0b2545] font-sans text-[11px] sm:text-[12px] font-medium px-3 py-1 rounded-full whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Details / Read More Button */}
            <div className="mt-6 w-full">
              <Link
                href={project.href}
                className="w-full h-11 bg-[#0b2545] hover:bg-[#2c578b] !text-white font-sans text-[13px] sm:text-[14px] font-medium rounded-full flex items-center justify-center transition-all duration-200 active:scale-[0.97]"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
