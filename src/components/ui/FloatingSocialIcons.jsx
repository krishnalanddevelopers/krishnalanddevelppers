"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
import { PiWhatsappLogo } from "react-icons/pi";

export default function FloatingSocialIcons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    if (window.scrollY > 300) setIsVisible(true);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  const handleWhatsApp = () => {
    window.open("https://wa.me/919909099090", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919909099090";
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 items-end">
          {/* 1. Floating Call Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="flex items-center gap-3 relative group"
            onMouseEnter={() => setHoveredButton("call")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {/* Slide-out Tooltip */}
            <AnimatePresence>
              {hoveredButton === "call" && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="!bg-[#0B2545] text-white text-[11px] font-sans font-semibold uppercase tracking-[1.5px] px-3.5 py-1.5 rounded-full shadow-md border border-white/10 whitespace-nowrap mr-1 hidden sm:inline-block pointer-events-none"
                >
                  Call Us
                </motion.span>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={handleCall}
              className="relative flex items-center justify-center w-13 h-13 rounded-full !bg-[#0B2545] text-white border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:bg-[#15345a] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Direct Phone Call"
            >
              <PhoneCall size={19} className="stroke-[2.2] animate-pulse" />
              {/* Pulse Ring */}
              <span className="absolute inset-0 rounded-full animate-ping border border-white/10 opacity-30 pointer-events-none" />
            </button>
          </motion.div>

          {/* 2. Floating WhatsApp Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 relative group"
            onMouseEnter={() => setHoveredButton("whatsapp")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {/* Slide-out Tooltip */}
            <AnimatePresence>
              {hoveredButton === "whatsapp" && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="bg-[#25D366] text-white text-[11px] font-sans font-semibold uppercase tracking-[1.5px] px-3.5 py-1.5 rounded-full shadow-md  whitespace-nowrap mr-1 hidden sm:inline-block pointer-events-none"
                >
                  WhatsApp Chat
                </motion.span>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="relative flex items-center justify-center w-13 h-13 rounded-full !bg-[#25D366] text-white border border-[#20ba5a] shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Chat on WhatsApp"
            >
              <PiWhatsappLogo size={21} className="text-white" />
              {/* Pulse Ring */}
              <span className="absolute inset-0 rounded-full animate-ping border border-[#25D366] opacity-35 pointer-events-none" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
