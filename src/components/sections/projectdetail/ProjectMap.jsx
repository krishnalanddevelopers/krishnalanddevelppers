"use client";

import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ProjectMap({
  title = "Project Location Map",
  subtitle = "Our project is strategically positioned in a prime investment corridor.",
  mapEmbedUrl,
  locationName,
}) {
  if (!mapEmbedUrl) return null;

  return (
    <section
      className="w-full py-16 md:py-24 bg-[#FAF9F6]/30 border-t border-[#eaeaea]"
      aria-labelledby="map-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Header Row */}
        <div className="flex flex-col gap-3">
          <Badge
            icon={<MapPin size={12} className="text-[#2c578b]" />}
            label="Project Map"
            className="text-[#2c578b] bg-[#2c578b]/10"
          />
          <h2
            id="map-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#2c578b] tracking-[-1px] leading-tight"
          >
            {title}
          </h2>
          {locationName && (
            <p className="font-sans text-[15px] sm:text-[16px] text-[#404040] max-w-xl font-normal">
              Location: <span className="font-medium text-[#0b2545]">{locationName}</span>.{" "}
              {subtitle}
            </p>
          )}
        </div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[450px] sm:h-[500px] rounded-[32px] overflow-hidden border border-[#e5e5e5] shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-[#f5f5f5]"
        >
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${title} Map`}
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
