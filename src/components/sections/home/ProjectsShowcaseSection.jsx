"use client";

import { ongoingProjects } from "@/data/projects";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
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

export default function ProjectsShowcaseSection() {
  // Map our ongoing projects to the existing project detail pages
  const projectLinks = {
    dholeranavgam: "/projects/navagam",
    dholerakasindra: "/projects/kasindra",
    "oak-valley": "/services",
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full flex flex-col gap-10"
    >
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 self-start bg-[#2C578B]/10 rounded-full px-4 py-2 text-[#2C578B]">
            <span className="font-sans text-[11px] font-semibold tracking-[4px] uppercase">
              Showcase
            </span>
          </div>
          <h2
            id="projects-heading"
            className="font-display text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-1px] text-[#0B2545]"
          >
            Featured Developments
          </h2>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-[#e5e5e5] bg-white text-[#0B2545] font-sans text-[13px] font-medium hover:border-[#2C578B] hover:text-[#2C578B] hover:shadow-sm transition-all duration-200 whitespace-nowrap md:self-end self-start"
        >
          View All Projects
        </Link>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
      >
        {ongoingProjects.map(project => (
          <Link
            key={project.id}
            href={projectLinks[project.id] || "/projects/kasindra"}
            className="group flex flex-col h-full"
          >
            <motion.div
              variants={cardVariants}
              className="flex flex-col h-full bg-white rounded-[24px] border border-[#e5e5e5] overflow-hidden transition-all duration-500 hover:shadow-[0_15px_40px_rgba(11,37,69,0.08)] hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5] shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={85}
                />

                {/* Visual Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-[13px] font-medium font-sans flex items-center gap-1.5">
                    View Project Details
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="translate-y-px"
                    >
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 p-6 border-t border-[#f0f0f0] flex-1">
                <h3 className="font-display text-[20px] sm:text-[22px] font-semibold leading-[1.2] text-[#0B2545] tracking-[-0.3px] group-hover:text-[#2C578B] transition-colors duration-200">
                  {project.title}
                </h3>

                <div className="flex items-center gap-1.5 text-[#737373] text-[14px] font-light">
                  <MapPin size={14} className="text-[#2C578B]" />
                  <span>{project.location} / Dholera SIR</span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
