"use client";

import Badge from "@/components/ui/Badge";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn, Grid } from "lucide-react";

export default function GalleryViewer() {
  const images = [
    {
      id: 0,
      src: "/gallery.png",
      alt: "Futuristic smart city planning layout",
      title: "Dholera Master Plan Layout",
    },
    {
      id: 1,
      src: "/gallery2.png",
      alt: "Real estate land construction site",
      title: "Zoning Site Construction Node",
    },
    {
      id: 2,
      src: "/gallery3.png",
      alt: "Luxury farmhouse villa exterior in Dholera",
      title: "Farmland Development Layout",
    },
    {
      id: 3,
      src: "/gallery4.png",
      alt: "Cozy modern bedroom styling rendering",
      title: "Smart Residency Room Setup",
    },
    {
      id: 4,
      src: "/about-bg.jpg",
      alt: "Beautiful sunrise view of Dholera farming lands",
      title: "Premium Plots Sunset View",
    },
    {
      id: 5,
      src: "/image4.avif",
      alt: "Industrial manufacturing corridor connection",
      title: "DMIC Industrial Node Proximity",
    },
    {
      id: 6,
      src: "/image5.avif",
      alt: "Ahmedabad-Dholera Expressway development progress",
      title: "Expressway Transit Connection",
    },
    {
      id: 7,
      src: "/image6.avif",
      alt: "Dholera International Cargo Airport layout plans",
      title: "Cargo Airport Aviation Node",
    },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const handleLightboxPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowRight") handleLightboxNext();
      if (e.key === "ArrowLeft") handleLightboxPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section className="w-full py-16 md:py-24 bg-white" aria-labelledby="viewer-heading">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Gallery Intro */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <Badge icon={<Grid size={12} />} label="Interactive Showcase" className="text-[#2c578b] bg-[#2c578b]/10 w-fit" />
          <h2
            id="viewer-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#0B2545] tracking-[-1px] leading-tight"
          >
            Site images & visual schemes.
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#737373] font-light leading-[26px]">
            Browse Dholera SIR project maps, road developments, and premium site plans. Click any image to expand it into a full-screen interactive slideshow.
          </p>
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {images.map((img, index) => (
            <div
              key={img.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative w-full aspect-[4/3] rounded-[24px] border border-[#e5e5e5] bg-[#f5f5f5] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(11,37,69,0.05)] hover:-translate-y-1 transition-all duration-350 cursor-zoom-in"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-103"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white z-10">
                <div className="self-end bg-white/20 backdrop-blur-md rounded-full h-8 w-8 flex items-center justify-center border border-white/10 shadow-sm">
                  <ZoomIn size={14} />
                </div>
                
                <div className="flex flex-col gap-0.5">
                  <span className="font-sans text-[9px] font-semibold uppercase tracking-wider text-white/60">
                    View Image
                  </span>
                  <h3 className="font-serif text-[14px] sm:text-[15px] font-bold truncate">
                    {img.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 sm:p-10 select-none"
          >
            {/* Top Info Bar */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white/80 z-20">
              <div className="flex flex-col">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-white/50">
                  Site Showcase
                </span>
                <span className="font-serif text-[15px] sm:text-[17px] font-bold mt-0.5 text-white">
                  {images[lightboxIndex].title}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-sans text-[13px] font-medium bg-white/10 px-3 py-1 rounded-full border border-white/5">
                  {lightboxIndex + 1} / {images.length}
                </span>
                <button
                  type="button"
                  onClick={handleCloseLightbox}
                  className="h-10 w-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 transition-all duration-200 cursor-pointer"
                  aria-label="Close lightbox"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Navigation Chevron Left */}
            <button
              type="button"
              onClick={handleLightboxPrev}
              className="absolute left-4 sm:left-8 h-12 w-12 rounded-full bg-white/10 border border-white/5 hover:bg-[#2C578B] text-white flex items-center justify-center transition-all z-20 cursor-pointer active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Lightbox Display (With Transitions) */}
            <div className="relative max-w-[1080px] w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-[16px] sm:rounded-[24px] border border-white/10 bg-neutral-900 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={images[lightboxIndex].src}
                    alt={images[lightboxIndex].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Chevron Right */}
            <button
              type="button"
              onClick={handleLightboxNext}
              className="absolute right-4 sm:right-8 h-12 w-12 rounded-full bg-white/10 border border-white/5 hover:bg-[#2C578B] text-white flex items-center justify-center transition-all z-20 cursor-pointer active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Bottom Keyboard instructions */}
            <div className="absolute bottom-4 font-sans text-[11px] text-white/35 text-center hidden md:block">
              Use Left / Right arrow keys or Chevrons to navigate. ESC to exit.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
