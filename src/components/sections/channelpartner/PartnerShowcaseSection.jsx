"use client";

import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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

const showcaseItems = [
  {
    id: 1,
    title: "Annual Partner Summit 2025",
    description: "Connecting real estate leaders to explore plotting developments in Dholera SIR.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    tag: "Partner Meets",
  },
  {
    id: 2,
    title: "Outstanding Advisory Award",
    description: "Recognizing regional agencies and brokers for sales volume and advisory support.",
    image: "/award.jpg",
    tag: "Recognitions",
  },
  {
    id: 3,
    title: "Dholera Site Tour Meetup",
    description: "Hosting interactive land tour events for our active channel partner networks.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    tag: "Project Tours",
  },
  {
    id: 4,
    title: "Strategic Collaboration Meet",
    description:
      "Aligning on joint growth goals, digital toolkits, and client relationship systems.",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    tag: "Networking",
  },
];

export default function PartnerShowcaseSection() {
  return (
    <section
      className="w-full py-16 md:py-24 bg-white border-t border-[#eaeaea]"
      aria-labelledby="showcase-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
          <div className="flex flex-col gap-3">
            <Badge
              icon={<Award size={12} className="text-[#2c578b]" />}
              label="Partner Showcase"
              className="text-[#2c578b] bg-[#2c578b]/10"
            />
            <h2
              id="showcase-heading"
              className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#0B2545] tracking-[-1px] leading-tight"
            >
              Our Trusted Channel Partners
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#737373] max-w-xl font-light leading-relaxed">
              We celebrate our partnerships through summit events, awards recognition, and
              collaborative training meets.
            </p>
          </div>
        </div>

        {/* Showcase Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {showcaseItems.map(item => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group flex flex-col bg-white rounded-[24px] border border-[#e5e5e5] p-3.5 overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5"
            >
              {/* Image Container with tag */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-[#f5f5f5]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-750 group-hover:scale-103"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                {/* Tag Overlay */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-[4px] border border-[#e5e5e5] px-3 py-1 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="font-sans text-[10px] font-bold text-[#0B2545] uppercase tracking-[0.5px]">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Text info */}
              <div className="flex flex-col gap-2 mt-4 px-1.5 pb-2">
                <h3 className="font-serif text-[17px] font-bold text-[#0B2545] leading-snug group-hover:text-[#2c578b] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="font-sans text-[13px] text-[#525252] leading-[18px] font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
