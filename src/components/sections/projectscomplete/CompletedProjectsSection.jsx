"use client";

import Badge from "@/components/ui/Badge";
import { completedProjects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import IconCompleted from "./IconCompleted";

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
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    },
  },
};

export default function CompletedProjectsSection() {
  return (
    <section aria-labelledby="completed-heading" className="flex flex-col gap-8 w-full">
      {/* ── Header Row ────────────────────────────────────────────────────── */}
      <motion.div
        variants={sectionHeaderVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-3  w-full"
      >
        <Badge icon={<IconCompleted />} label="COMPLETED PROJECTS" />
        <h2
          id="completed-heading"
          className="font-serif text-[32px] sm:text-[36px] font-semibold leading-[40px] tracking-[-0.9px] text-[#2c578b]"
        >
          Delivered communities with proven value.
        </h2>
      </motion.div>

      {/* ── Cards Grid ────────────────────────────────────────────────────── */}
      <motion.div
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
      >
        {completedProjects.map(project => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-[#e5e5e5] bg-neutral-100 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)]"
          >
            {/* Background Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              quality={85}
            />

            {/* Dark bottom vignette/gradient overlay for contrast */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-60"
            />

            {/* Floating Glassmorphism Info Card */}
            <div className="absolute bottom-4 left-4 right-4 p-5 rounded-[16px] bg-black/25 border border-white/15 backdrop-blur-md shadow-lg flex flex-col gap-1 transition-transform duration-300 group-hover:translate-y-[-2px]">
              <h3 className="font-serif text-[20px] font-semibold leading-tight text-white">
                {project.title}
              </h3>
              <p className="font-sans text-[13px] font-normal leading-normal text-white/85">
                {project.year}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// "use client";

// import Badge from "@/components/ui/Badge";
// import { completedProjects } from "@/data/projects";
// import { motion } from "framer-motion";
// import Link from "next/link";

// /* ── Icon for Badge (Checkmark in circle) ────────────────────────────────── */
// function IconCompleted() {
//   return (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 16 16"
//       fill="none"
//       aria-hidden="true"
//       className="shrink-0"
//     >
//       <circle cx="8" cy="8" r="6.5" stroke="#171717" strokeWidth="1.2" />
//       <path
//         d="M5 8L7 10L11 6"
//         stroke="#171717"
//         strokeWidth="1.2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// /* ── Icon Arrow Right ────────────────────────────────────────────────────── */
// function IconArrowRight() {
//   return (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 16 16"
//       fill="none"
//       aria-hidden="true"
//       className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
//     >
//       <path
//         d="M3 8h10M9 4l4 4-4 4"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// /* ── Animation Variants ─────────────────────────────────────────────────── */
// const sectionHeaderVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// const cardsContainerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// export default function CompletedProjectsSection() {
//   return (
//     <section aria-labelledby="completed-heading" className="flex flex-col gap-8 w-full">
//       {/* ── Header Row ────────────────────────────────────────────────────── */}
//       <motion.div
//         variants={sectionHeaderVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, margin: "-100px" }}
//         className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full"
//       >
//         <div className="flex flex-col gap-3 w-full md:w-auto min-w-0">
//           <Badge icon={<IconCompleted />} label="COMPLETED PROJECTS" />
//           <h2
//             id="completed-heading"
//             className="font-serif text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-[1.1] sm:leading-[40px] tracking-[-0.9px] text-[#0a0a0a]"
//           >
//             Delivered communities with
//             <br className="hidden sm:block" />
//             proven value.
//           </h2>
//         </div>
//         <Link
//           href="/projects"
//           className="group inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full border border-[#e5e5e5] bg-white text-[#171717] font-sans text-[13px] font-medium hover:bg-[#f5f5f5] hover:border-[#d0d0d0] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] active:scale-[0.97] transition-all duration-200 whitespace-nowrap shrink-0 md:self-end self-start"
//         >
//           View All Projects
//           <IconArrowRight />
//         </Link>
//       </motion.div>

//       {/* ── Cards Grid ────────────────────────────────────────────────────── */}
//       <motion.div
//         variants={cardsContainerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, margin: "-100px" }}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
//       >
//         {completedProjects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             variants={cardVariants}
//             className="group relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-[#e5e5e5] bg-[#f5f5f5] shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500"
//           >
//             {/* Background Image */}
//             <img
//               src={project.image}
//               alt={project.title}
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               loading="lazy"
//             />

//             {/* Gradient Overlay - improved */}
//             <div
//               aria-hidden="true"
//               className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"
//             />

//             {/* Status Badge - Top Left */}
//             <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 translate-y-[-8px] group-hover:translate-y-0">
//               <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3.5 py-1.5 text-[#0a0a0a] font-sans text-[11px] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-white/20">
//                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
//                 Completed
//               </span>
//             </div>

//             {/* Floating Glassmorphism Info Card - improved */}
//             <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12">
//               <div className="flex flex-col gap-1">
//                 <h3 className="font-serif text-[20px] sm:text-[22px] font-semibold leading-[1.2] text-white tracking-[-0.3px]">
//                   {project.title}
//                 </h3>
//                 <div className="flex items-center gap-3">
//                   <p className="font-sans text-[13px] font-light text-white/70">
//                     {project.year}
//                   </p>
//                   {project.location && (
//                     <>
//                       <span className="w-1 h-1 rounded-full bg-white/30" />
//                       <p className="font-sans text-[13px] font-light text-white/70">
//                         {project.location}
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }
