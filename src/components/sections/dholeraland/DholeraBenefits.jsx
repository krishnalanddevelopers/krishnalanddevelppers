"use client";

import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { Building2, Compass, Factory, Layers, MapPin, Milestone, Plane, Zap } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const benefitsList = [
  {
    title: "Strategic Location",
    description:
      "Positioned directly inside the high-growth Ahmedabad-Dholera investment node, connecting major trade routes.",
    icon: <MapPin size={20} />,
    image: "/location-dholera.jpg",
  },
  {
    title: "Strategic Town Planning",
    description:
      "Developed with state-of-the-art town planning schemes (TP), ensuring wide roads, sewage, and utility lines.",
    icon: <Compass size={20} />,
    image: "/dholeratwplan.jpg",
  },
  {
    title: "4-Way Connectivity",
    description:
      "Seamless link routes integrating expressway, regional MRTS metro, high-speed rail, and cargo aviation.",
    icon: <Milestone size={20} />,
    image: "/Rail_Connectivity_Dholera_SIR.jpg",
  },
  {
    title: "Dholera SIR Development",
    description:
      "Designed as India's flagship Special Investment Region, attracting global manufacturing giants and defense setups.",
    icon: <Layers size={20} />,
    image: "/dholera-sir.jpg",
  },
  {
    title: "Activation Zone Ready",
    description:
      "A dedicated 22.5 km² launch zone with ready plug-and-play utilities, electricity grids, and roads.",
    icon: <Zap size={20} />,
    image: "/solar-plan.avif",
  },
  {
    title: "Airport Area Expansion",
    description:
      "Premium investment plots situated close to the upcoming Dholera International Cargo & Passenger Airport.",
    icon: <Plane size={20} />,
    image: "/Air_Connectivity_dholera_SIR.jpg",
  },
  {
    title: "Industrial & Tech Zones",
    description:
      "Surrounded by dedicated electronics, semiconductor, defense, and green energy manufacturing corridors.",
    icon: <Factory size={20} />,
    image: "/tech.avif",
  },
  {
    title: "Blue-Chip Companies",
    description:
      "Growing presence of leading blue-chip corporations setting up operations within Dholera's Activation Area.",
    icon: <Building2 size={20} />,
    image: "/companies.avif",
  },
];

export default function DholeraBenefits() {
  return (
    <section
      id="benefits-section"
      className="w-full py-16 md:py-24 bg-[#FAF9F6]/45 border-t border-[#eaeaea]"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <Badge label="Key Advantages" className="text-[#2c578b] bg-[#2c578b]/10" />
          <h2
            id="benefits-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#0B2545] tracking-[-1px] leading-tight"
          >
            Benefits of Dholera investment.
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#737373] max-w-xl font-light">
            Dholera Special Investment Region (SIR) offers structural, logistical, and developmental
            parameters driving high appreciation.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {benefitsList.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col bg-white border border-[#e5e5e5] rounded-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(11,37,69,0.05)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group"
            >
              {/* Card Image */}
              <div className="relative h-44 w-full overflow-hidden bg-[#FAF9F6] shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow justify-between gap-3">
                <div>
                  {/* Icon + Title Row */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#2C578B]/10 text-[#2C578B] shrink-0 group-hover:bg-[#2C578B] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-[16px] sm:text-[17px] font-bold text-[#0B2545] leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-[13px] sm:text-[13.5px] font-light leading-[20px] text-[#525252]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
