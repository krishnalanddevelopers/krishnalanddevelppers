"use client";

import ContactQueryModal from "@/components/layout/ContactQueryModal";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import IconSparkle from "./IconSparkle";
import StatTile from "./StatTile";

const HERO_IMG = "/main-bg.mp4";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
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

const rightCardVariants = {
  hidden: { opacity: 0, x: 30, y: 10 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
      delay: 0.2,
    },
  },
};

export default function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalFormType, setModalFormType] = useState("Enquiry");
  useEffect(() => {
    // Timed popup: auto-open after 15 seconds
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("heroQueryModalDismissed");
      if (!dismissed) {
        setModalFormType("Enquiry");
        setIsContactModalOpen(true);
      }
    }, 15000);
    // Exit intent: detect mouse leaving the top of the window
    const handleMouseLeave = e => {
      if (e.clientY < 20) {
        const dismissed = sessionStorage.getItem("heroQueryModalDismissed");
        if (!dismissed) {
          setModalFormType("Enquiry");
          setIsContactModalOpen(true);
          document.removeEventListener("mouseleave", handleMouseLeave);
        }
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
    sessionStorage.setItem("heroQueryModalDismissed", "true");
  };

  return (
    <>
      <section
        aria-label="Hero"
        className="relative w-full min-h-[580px] lg:min-h-[640px] rounded-[24px] border border-[#e5e5e5] overflow-hidden bg-[#171717] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_1px_2px_-1px_rgba(0,0,0,0.10)]"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
        >
          <source src={HERO_IMG} type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,37,69,0.90) 0%, rgba(23,23,23,0.80) 35%, rgba(23,23,23,0.55) 65%, rgba(23,23,23,0.30) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 min-h-[580px] lg:min-h-[640px] items-center justify-center">
          {/* Left Column: 7/12 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="col-span-full lg:col-span-7 w-full flex flex-col gap-5"
          >
            {/* Badge pill */}
            <motion.div
              variants={itemVariants}
              className="hidden xs:inline-flex items-center gap-2.5 self-start rounded-full border border-white/15 bg-white/5 backdrop-blur-[8px] px-[17px] py-[9px] hover:bg-white/10 transition-all duration-300 cursor-default"
            >
              <IconSparkle />
              <span className="font-sans text-[12px] sm:text-[13px] font-medium leading-[20px] text-[#fafafa] tracking-[0.3px]">
                Invest in Dholera's Future
                <span className="opacity-30 mx-1.5">|</span>
                Own Tomorrow's Smart Address.
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-semibold text-[#fafafa] text-[clamp(32px,6vw,60px)] leading-[1.08] tracking-[-1.5px] max-w-[720px]"
            >
              Explore Dholera –
              <span className="block text-white/90">Find Your Next Investment</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-[13px] sm:text-[16px] font-light sm:font-medium leading-[24px] sm:leading-[28px] text-white/70 max-w-[560px] tracking-[0.1px]"
            >
              Explore premium plots and investment opportunities in Dholera Special Investment
              Region (SIR), India's first Greenfield Smart City. With better connectivity, growing
              infrastructure, strong development, and long-term growth potential, it's a great place
              to invest with confidence.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 flex-wrap mt-1"
            >
              <button
                type="button"
                onClick={() => {
                  setModalFormType("Book Site Visit");
                  setIsContactModalOpen(true);
                }}
                className="group inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-5 sm:px-7 rounded-full !bg-white text-[#0B2545] !hover:text-[#0B2545] font-sans text-[13px] sm:text-[14px] font-medium leading-none shadow-[0px_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0px_8px_24px_rgba(44,87,139,0.25)] hover:bg-[#2C578B] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
              >
                Book Site Visit
              </button>

              <Link
                href="/dholera"
                className="group inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-5 sm:px-7 rounded-full !bg-white !text-[#0B2545] !hover:text-[#0B2545] font-sans text-[13px] sm:text-[14px] font-medium leading-none shadow-[0px_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0px_8px_24px_rgba(44,87,139,0.25)] hover:bg-[#2C578B] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
              >
                Dholera SIR
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: 5/12 — Glass Stat Card */}
          <motion.div
            variants={rightCardVariants}
            initial="hidden"
            animate="show"
            className="hidden lg:block col-span-full lg:col-span-5 w-full lg:flex justify-start lg:justify-end"
          >
            <div className="w-full max-w-[384px] rounded-[24px] bg-white/[0.06] border border-white/[0.08] backdrop-blur-2xl shadow-[0px_30px_60px_-16px_rgba(0,0,0,0.5)] p-8 flex flex-col gap-5 hover:bg-white/[0.08] transition-all duration-500">
              <div className="flex flex-col gap-1.5">
                <span className="font-sans text-[12px] font-medium leading-[16px] tracking-[4px] uppercase text-white/40">
                  Investment Spotlight
                </span>
                <h2 className="font-serif text-[24px] font-bold leading-[30px] text-[#fafafa] tracking-[-0.3px]">
                  India's Premier Smart City Project
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex gap-2.5">
                  <StatTile value="18+" label="Years" />
                  <StatTile value="42" label="Projects" />
                  <StatTile value="1.2K" label="Acres" />
                </div>
                <div className="rounded-[16px] border border-white/5 bg-white/5 p-4 hover:bg-white/10 transition-all duration-300">
                  <p className="font-sans text-[13px] sm:text-[14px] font-light leading-[24px] text-white/60">
                    With government-backed zoning, international airport planning and DMIC access,
                    Dholera SIR is a great location for future investment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ContactQueryModal
        isOpen={isContactModalOpen}
        onClose={handleCloseModal}
        formType={modalFormType}
      />
    </>
  );
}
