"use client";

import { useState } from "react";
import ContactQueryModal from "@/components/layout/ContactQueryModal";
import ProjectAdvantages from "@/components/sections/projectdetail/ProjectAdvantages";
import ProjectAmenities from "@/components/sections/projectdetail/ProjectAmenities";
import ProjectFloorPlans from "@/components/sections/projectdetail/ProjectFloorPlans";
import ProjectGallery from "@/components/sections/projectdetail/ProjectGallery";
import ProjectHero from "@/components/sections/projectdetail/ProjectHero";
import ProjectMap from "@/components/sections/projectdetail/ProjectMap";
import ProjectOverview from "@/components/sections/projectdetail/ProjectOverview";

const KASINDRA_BULLETS = [
  "Positioned in the Prime Kasindra Growth Corridor",
  "Health-Oriented Amenities — A Unique Offering in Dholera",
  "NA-Certified & Clear-Title Investment Plots",
  "Landscaped Theme Gardens & Wellness Spaces",
  "Modern Infrastructure with Wide Paved Roads",
];

const KASINDRA_STATS = [
  { value: "920 km²", label: "Dholera SIR Area" },
  { value: "15 Acre", label: "Aurum Valley Area" },
  { value: "2026-27", label: "Possession Timeline" },
];

const KASINDRA_GALLERY_IMAGES = {
  curvedBlue: "/gallery/kasindra/1 (1).png",
  skyscraper: "/gallery/kasindra/1ai.png",
  bedroom: "/gallery/kasindra/iso kids-gazebo-main garden.png",
  tallVilla: "/gallery/kasindra/kids playground final view.png",
  studyRoom: "/gallery/kasindra/lily pond view 01.png",
  poolHouse: "/gallery/kasindra/zen garden view1.png",
  darkSkyscrapers: "/gallery/kasindra/ISO 02.png",
};

const KASINDRA_AMENITIES = [
  { label: "Clubhouse", image: "/gallery/kasindra/same-bg.png" },
  { label: "Theme Garden", image: "/gallery/kasindra/lily pond view 01.png" },
  { label: "Smart Utilities", image: "/gallery/kasindra/ISO 02.png" },
  { label: "Indoor Games", image: "/gallery/kasindra/02ai.png" },
  { label: "Children Play Area", image: "/gallery/kasindra/kids playground final view.png" },
  { label: "Swimming Pool", image: "/gallery/kasindra/1 (1).png" },
  { label: "Gymnasium", image: "/gallery/kasindra/02 (5).png" },
  { label: "Senior Citizen Area", image: "/gallery/kasindra/ZEN2AI.png" },
];

export default function KasindraClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <ProjectHero
        tag="Kasindra Collection"
        title="Antarim at  Kasindra "
        subtitle="Where Health Meets Future-Ready Living"
        description="An ongoing master planned plotting and villa estate development by Krishna Land Developers, located in the rapidly growing Kasindra corridor. Integrating top-tier utilities and classical aesthetic planning to form a premium investment-grade community."
        backgroundImage="/aum.png"
        brochureUrl="/brochures/aum-antarim-kasindra-brochure.pdf"
        onLayoutClick={handleOpenModal}
      />

      {/* 2. Overview Section */}
      <ProjectOverview
        badge="About the Project"
        title="Where Health Meets Future-Ready Living"
        description="Antrim Kasindra is an ongoing landmark plotting development in the prime Kasindra Growth Corridor, thoughtfully designed around health-oriented amenities for a healthier, more active lifestyle. With premium infrastructure, landscaped spaces, and modern community facilities, it offers a future-ready environment for both living and investment."
        bullets={KASINDRA_BULLETS}
        stats={KASINDRA_STATS}
        layoutMapImage="/gallery/kasindra/kasindra-layout.jpg"
      />

      {/* 3. Amenities Section */}
      <ProjectAmenities
        title="World-Class Amenities"
        subtitle="Every aspect is carefully curated for a premium weekend living and wellness experience."
        amenities={KASINDRA_AMENITIES}
      />

      {/* 4. Floor Plans Section */}
      <ProjectFloorPlans
        title="Floor Plans & Site Maps"
        subtitle="Browse all six floor plans. Click View Site Plan to open the full PDF."
      />

      {/* 5. Legacy Gallery */}
      <ProjectGallery
        title="Antarim Kasindra Gallery"
        subtitle="Experience our active development corridor, smart plotting layouts, and premium residency plans."
        images={KASINDRA_GALLERY_IMAGES}
        galleryHref="/projects/kasindra/gallery"
      />

      {/* 6. Location Advantages */}
      <ProjectAdvantages title="You're at the Centre of It All." />

      {/* 7. Interactive Location Map */}
      <ProjectMap
        title="Antarim Kasindra Map"
        locationName="Kasindra Growth Corridor, Gujarat, India"
        subtitle="Close to key expressways and the cargo airport zone."
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4377.925564948501!2d72.1728333!3d22.3263889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE5JzM1LjAiTiA3MsKwMTAnMjIuMiJF!5e1!3m2!1sen!2sin!4v1787653832212!5m2!1sen!2sin"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
      />

      {/* Leads Onboarding Modal */}
      <ContactQueryModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
