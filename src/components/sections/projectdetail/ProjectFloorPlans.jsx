"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const defaultPlans = [
  {
    id: "plan-1",
    index: "01",
    tag: "2 BHK Villa",
    floor: "Ground Floor",
    title: "2 BHK GF Plan ",
    description:
      "Spacious 2 bedroom ground floor layout with open living area and dedicated parking space.",
    image: "/2BHKGF_PLAN.jpg",
  },
  {
    id: "plan-2",
    index: "02",
    tag: "2 BHK Villa",
    floor: "First Floor ",
    title: "2 BHK FF Plan",
    description:
      "Optimised 2 bedroom ground floor unit with Roman-arched entrance and east-facing balcony.",
    image: "/2BHKGF_PLAN2.jpg",
  },
  {
    id: "plan-3",
    index: "03",
    tag: "3 BHK Villa",
    floor: "Ground Floor",
    title: "3 BHK GF Plan",
    description:
      "Premium 3 bedroom first floor plan with panoramic terrace access and dual bathroom layout.",
    image: "/CLUBHOUSEGF.jpg",
  },
  {
    id: "plan-4",
    index: "04",
    tag: "3 BHK Villa",
    floor: "First Floor",
    title: "3 BHK FF Plan",
    description:
      "Spacious 3 bedroom first floor configurations featuring modern layout with large balcony.",
    image: "/CLUBHOUSEFF.jpg",
  },
  {
    id: "plan-5",
    index: "05",
    tag: "Club House",
    floor: "Club House ",
    title: "Club House GF Plan",
    description: "Luxurious Club House GF configurations built to deliver comfort, privacy.",
    image: "/CLUBHOUSEFF.jpg",
  },
  {
    id: "plan-6",
    index: "06",
    tag: "Club House",
    floor: "Club House",
    title: "Club House FF Plan",
    description:
      "Meticulously designed Club House layout configuration with private terrace gardens.",
    image: "/CLUBHOUSEGF.jpg",
  },
];

export default function ProjectFloorPlans({
  title = "Floor Plans & Site Maps",
  subtitle = "Choose from our meticulously planned space configurations.",
  plans = defaultPlans,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeOverlayId, setActiveOverlayId] = useState(null);

  // Responsive visible items detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, plans.length - visibleCount);

  // Guard index out of bounds on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex, currentIndex]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPlan) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPlan]);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      className="w-full py-16 md:py-24 bg-[#FAFADA]/20 border-t border-[#eaeaea]"
      aria-labelledby="floorplans-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-12 relative">
        {/* Centered Header Section */}
        <div className="w-full flex flex-col items-center text-center gap-4 max-w-2xl mx-auto mb-4">
          {/* Custom Centered Badge */}
          <div className="inline-flex items-center bg-white border border-[#eaeaea] rounded-full px-4 py-2 font-sans font-semibold text-[11px] leading-none tracking-[4px] uppercase text-[#0B2545] whitespace-nowrap self-center shadow-sm select-none">
            SITE PLANS
          </div>
          <h2
            id="floorplans-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#2c578b] tracking-[-1px] leading-tight"
          >
            {title}
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] font-normal text-[#404040] leading-relaxed">
            {subtitle}
          </p>

          {/* Centered Slide Dots */}
          {maxIndex > 0 && (
            <div className="flex items-center justify-center gap-2 mt-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx
                      ? "w-8 h-2 bg-[#0B2545]"
                      : "w-2 h-2 bg-[#e5e5e5] hover:bg-[#c0c0c0]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Slider Carousel Window with absolute arrows */}
        <div className="relative w-full px-12 sm:px-14 md:px-16">
          {/* Navigation Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md active:scale-95 transition-all duration-200 ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed text-gray-300"
                : "opacity-100 hover:border-gray-400 text-gray-700 hover:shadow-lg"
            }`}
            aria-label="Previous slide"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="sm:w-5 sm:h-5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Sliding Content Container */}
          <div className="w-full overflow-hidden py-4">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / plans.length)}%)`,
                width: `${(plans.length / visibleCount) * 100}%`,
              }}
            >
              {plans.map(item => (
                <div
                  key={item.id}
                  className="bg-white border border-[#e5e5e5] rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
                  style={{
                    width: `calc(${100 / plans.length}% - ${(6 * (plans.length - 1)) / plans.length}px)`,
                  }}
                >
                  {/* Card Image Area */}
                  <div
                    className="relative w-full aspect-[4/3] bg-[#fcfcfc] border-b border-[#f0f0f0] overflow-hidden group cursor-pointer"
                    onClick={() => setActiveOverlayId(activeOverlayId === item.id ? null : item.id)}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    />

                    {/* Floating Badges */}
                    {/* Index Badge */}
                    <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-[2px] text-white text-[12px] font-sans font-bold w-9 h-9 flex items-center justify-center rounded-[8px] tracking-wide shadow-sm select-none z-20">
                      {item.index}
                    </div>

                    {/* Floor Badge */}
                    <div className="absolute top-4 right-4 bg-white text-[#525252] text-[11px] font-sans font-semibold px-4 py-1.5 rounded-full border border-gray-100 shadow-sm uppercase tracking-[0.5px] select-none z-20">
                      {item.floor}
                    </div>

                    {/* Interactive overlay (CTA on hover/click) */}
                    <div
                      className={`absolute inset-0 bg-[#0B2545]/65 backdrop-blur-[3px] flex items-center justify-center transition-all duration-300 z-10 ${
                        activeOverlayId === item.id
                          ? "opacity-100 pointer-events-auto"
                          : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                      }`}
                      onClick={e => {
                        e.stopPropagation();
                        setSelectedPlan(item);
                      }}
                    >
                      {/* Explicitly styled View Plan button div to bypass global transparent button overrides */}
                      <div
                        style={{ backgroundColor: "#ffffff", color: "#0B2545" }}
                        className="font-sans font-semibold text-[13px] px-6 py-2.5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-1.5 cursor-pointer z-30"
                      >
                        <span>View Plan</span>
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
                      </div>
                    </div>
                  </div>

                  {/* Card Info Area */}
                  <div className="p-6 sm:p-8 flex flex-col gap-3 flex-grow">
                    <h3 className="font-serif text-[20px] sm:text-[22px] font-semibold text-[#2c578b]">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[13.5px] sm:text-[14px] font-normal leading-[20px] sm:leading-[22px] text-[#404040] mb-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md active:scale-95 transition-all duration-200 ${
              currentIndex === maxIndex
                ? "opacity-30 cursor-not-allowed text-gray-300"
                : "opacity-100 hover:border-gray-400 text-gray-700 hover:shadow-lg"
            }`}
            aria-label="Next slide"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="sm:w-5 sm:h-5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox Modal for viewing image in large size */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlan(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2 cursor-default flex flex-col"
            >
              {/* Close button inside modal */}
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full !bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95"
                aria-label="Close modal"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Large Image Container */}
              <div className="relative w-full aspect-[4/3] max-h-[70vh] bg-[#fcfcfc] rounded-lg overflow-hidden">
                <Image
                  src={selectedPlan.image}
                  alt={selectedPlan.title}
                  fill
                  className="object-contain p-2"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Bottom Info bar */}
              <div className="p-6 sm:p-8 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[#2c578b] font-sans text-[11px] font-semibold tracking-[2px] uppercase">
                    {selectedPlan.floor} &bull; {selectedPlan.tag}
                  </span>
                  <h4 className="font-serif text-[22px] font-semibold text-[#0B2545]">
                    {selectedPlan.title}
                  </h4>
                  <p className="font-sans text-[13.5px] sm:text-[14px] font-normal text-[#404040] mt-0.5">
                    {selectedPlan.description}
                  </p>
                </div>
                {/* <button
                  onClick={() => setSelectedPlan(null)}
                  className="px-6 py-3 rounded-full !bg-[#0B2545] !hover:bg-[#15345a] !text-white text-[13px] font-sans font-medium transition-all shadow-sm active:scale-[0.98] whitespace-nowrap"
                >
                  Close View
                </button> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
