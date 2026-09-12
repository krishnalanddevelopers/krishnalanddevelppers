"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const defaultImages = {
  curvedBlue: "/gallery.png",
  skyscraper: "/images/about/skyscraper.png",
  bedroom: "/images/about/bedroom.png",
  tallVilla: "/image3.avif",
  studyRoom: "/image1.avif",
  poolHouse: "/image2.avif",
  darkSkyscrapers: "/image4.avif",
};

export default function ProjectGallery({
  title = "Aurum Valley Legacy Gallery",
  subtitle = "A visual journey through Roman grandeur meets smart city living.",
  images = defaultImages,
  galleryHref = "/gallery",
  showGalleryButton = true,
}) {
  const mergedImages = { ...defaultImages, ...images };
  const galleryItems = useMemo(
    () => [
      { key: "curvedBlue", src: mergedImages.curvedBlue, alt: "Curved blue abstract architecture" },
      { key: "skyscraper", src: mergedImages.skyscraper, alt: "Skyscraper view" },
      { key: "bedroom", src: mergedImages.bedroom, alt: "Bedroom interior" },
      { key: "tallVilla", src: mergedImages.tallVilla, alt: "Tall villa sunset view" },
      { key: "studyRoom", src: mergedImages.studyRoom, alt: "Study room interior" },
      { key: "poolHouse", src: mergedImages.poolHouse, alt: "Modern villa with pool" },
      {
        key: "darkSkyscrapers",
        src: mergedImages.darkSkyscrapers,
        alt: "Dark skyscrapers perspective",
      },
    ],
    [mergedImages]
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = index => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextSlide = () => setActiveIndex(prev => (prev + 1) % galleryItems.length);
  const prevSlide = () =>
    setActiveIndex(prev => (prev - 1 + galleryItems.length) % galleryItems.length);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = e => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, galleryItems.length]);

  return (
    <section className="w-full py-16 md:py-24 bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-12">
        {/* Header Row with Button (Figma style, no small GALLERY tag) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <h2
              id="gallery-heading"
              className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#2c578b] tracking-[-1px] leading-tight"
            >
              {title}
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] font-normal text-[#404040]">
              {subtitle}
            </p>
          </div>

          {showGalleryButton && (
            <Link href={galleryHref}>
              <button className="h-11 px-6 rounded-full !bg-[#0B2545] hover:bg-[#15345a] text-white font-sans text-[13.5px] font-medium transition-all duration-200 flex items-center justify-center gap-2 tracking-wide shadow-sm hover:shadow-md active:scale-[0.98] self-start sm:self-end shrink-0">
                <span>View All Photos</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          )}
        </div>

        {/* Uniform square grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full">
          {galleryItems.map((item, index) => (
            <button
              key={item.key}
              type="button"
              onClick={() => openLightbox(index)}
              className="relative aspect-square rounded-[24px] overflow-hidden border border-[#f0f0f0] shadow-sm group bg-[#f0f0f0] transition hover:shadow-[0_12px_40px_rgba(11,37,69,0.08)] hover:-translate-y-1"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 sm:p-10"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 rounded-full bg-white/10 border border-white/20 text-white p-3 hover:bg-white/20 transition"
              aria-label="Close gallery"
            >
              ×
            </button>

            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-4 sm:left-8 h-12 w-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className="relative w-full max-w-[1100px] aspect-[16/9] sm:aspect-[16/10] rounded-[24px] overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={galleryItems[activeIndex].src}
                    alt={galleryItems[activeIndex].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 sm:right-8 h-12 w-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Next image"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
