"use client";

import Badge from "@/components/ui/Badge";
import { ongoingProjects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import IconBuilding from "./IconBuilding";
import IconMapPin from "./IconMapPin";

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

export default function OngoingProjectsSection() {
  return (
    <section aria-labelledby="ongoing-heading" className="flex flex-col gap-8 w-full">
      {/* ── Header Row ────────────────────────────────────────────────────── */}
      <motion.div
        variants={sectionHeaderVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full"
      >
        <div className="flex flex-col gap-3">
          <Badge icon={<IconBuilding />} label="ONGOING PROJECTS" />
          <h2
            id="ongoing-heading"
            className="font-serif text-[32px] sm:text-[36px] font-semibold leading-[40px] tracking-[-0.9px] text-[#2c578b]"
          >
            Current developments with strong momentum.
          </h2>
        </div>
        <Link
          href="/projects/navagam"
          className="inline-flex items-center justify-center h-10 px-6 rounded-full border border-[#e5e5e5] bg-white text-[#171717] font-sans text-[14px] font-medium hover:bg-[#f5f5f5] hover:border-[#d0d0d0] transition-all duration-200 whitespace-nowrap md:self-end self-start"
        >
          View All Projects
        </Link>
      </motion.div>

      {/* ── Cards Grid ────────────────────────────────────────────────────── */}
      <motion.div
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
      >
        {ongoingProjects.map(project => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="group flex flex-col bg-white rounded-[24px] border border-[#e5e5e5] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                quality={85}
              />
              {/* "In Progress" Badge on Image */}
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3.5 py-1.5 text-[#171717] font-sans text-[12px] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.06)] tracking-wide border border-white/20">
                  In Progress
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col gap-4 p-6">
              <div className="flex justify-between items-baseline gap-2">
                <h3 className="font-serif text-[22px] font-semibold leading-[1.2] text-[#0b2545] tracking-[-0.3px]">
                  {project.title}
                </h3>
                <span className="font-sans text-[14px] font-medium text-[#737373] shrink-0">
                  {project.progress}%
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[#737373] text-[14px] font-light">
                <IconMapPin />
                <span>{project.location}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#f0f0f0] h-[6px] rounded-full overflow-hidden mt-1">
                <motion.div
                  className="bg-[#0b2545] h-full rounded-full"
                  style={{ width: `${project.progress}%` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.progress}%` }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
