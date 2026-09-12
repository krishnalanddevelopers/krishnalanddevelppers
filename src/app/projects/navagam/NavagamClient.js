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

const NAVAGAM_BULLETS = [
  "Strategically Located Near the International Airport",
  "Fully NA-Certified & Ready-to-Construct Plots",
  "Excellent Connectivity to Dholera & Key Growth Hubs",
  "Secure Boundary Wall & Gated Entrance",
];

const NAVAGAM_STATS = [
  { value: "850 km²", label: "Dholera SIR Area" },
  { value: "185 Acre", label: "Aurum Valley Area" },
  { value: "Ready", label: "Possession Status" },
];

const NAVAGAM_GALLERY_IMAGES = {
  curvedBlue: "/gallery/navgam/2BHK_1.png",
  skyscraper: "/gallery/navgam/2BHK_2.png",
  bedroom: "/gallery/navgam/Club House (2).png",
  tallVilla: "/gallery/navgam/2BHK_1.png",
  studyRoom: "/gallery/navgam/cluehouse2.png",
  poolHouse: "/gallery/navgam/kidsplayaera.png",
  darkSkyscrapers: "/gallery/navgam/opengym1.png",
};

const NAVAGAM_AMENITIES = [
  { label: "Clubhouse", image: "/gallery/navgam/clubhouse1.png" },
  { label: "Theme Garden", image: "/gallery/navgam/theme-garden-spiral.jpg" },
  { label: "Smart Utilities", image: "/gallery/navgam/smart-utilities-road.jpg" },
  { label: "Indoor Games", image: "/gallery/navgam/cluehouse2.png" },
  { label: "Children Play Area", image: "/gallery/navgam/kids.png" },
  { label: "Sports Court", image: "/gallery/navgam/indoor-games-court.jpg" },
  { label: "Gymnasium", image: "/gallery/navgam/Open Gym (3).png" },
  { label: "Senior Citizen Area", image: "/gallery/navgam/mediarea.png" },
];

export default function NavagamClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <ProjectHero
        tag="Navagam Collection"
        title="Aurum Valley at Navagam"
        subtitle="Connected Living, Timeless Value."
        description="A premium, fully-completed plotting and farmhouse development by Krishna Land Developers, strategically located in the fast-growing Navagam region near the international airport. Designed for weekend living and long-term value, with ready-to-construct plots, premium infrastructure, and seamless connectivity."
        backgroundImage="/sample-12.jpeg"
        onBrochureClick={handleOpenModal}
        onLayoutClick={handleOpenModal}
      />

      {/* 2. Overview Section */}
      <ProjectOverview
        badge="About the Project"
        title="Where Connectivity Meets Tomorrow’s Lifestyle."
        description="Aurum Valley Navagam is a premium, fully-completed plotting and farmhouse development, strategically located near the international airport. Designed for weekend living and long-term value, it combines lush green surroundings, modern infrastructure, secure planning, and excellent connectivity."
        bullets={NAVAGAM_BULLETS}
        stats={NAVAGAM_STATS}
        layoutMapImage="/about-bg.png"
      />

      {/* 3. Amenities Section */}
      <ProjectAmenities
        title="World-Class Amenities"
        subtitle="Every aspect is carefully curated for a premium weekend living and wellness experience."
        amenities={NAVAGAM_AMENITIES}
      />

      {/* 4. Floor Plans Section */}
      <ProjectFloorPlans
        title="Floor Plans & Site Maps"
        subtitle="Browse all six floor plans. Click View Site Plan to open the full PDF."
      />

      {/* 5. Legacy Gallery */}
      <ProjectGallery
        title="Aurum Valley Navagam Gallery"
        subtitle="Explore completed gated communities, weekend farmhouse plots, and expressway transit alignments."
        images={NAVAGAM_GALLERY_IMAGES}
        galleryHref="/projects/navagam/gallery"
      />

      {/* 6. Location Advantages */}
      <ProjectAdvantages title="You're at the Centre of It All." />

      {/* 7. Interactive Location Map */}
      <ProjectMap
        title="Aurum Valley Navagam Map"
        locationName="Navagam Junction, Gujarat, India"
        subtitle="Conveniently connected to Dholera Expressway and main transport junctions."
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4376.692381549502!2d72.30443!3d22.365655999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDIxJzU2LjQiTiA3MsKwMTgnMTYuMCJF!5e1!3m2!1sen!2sin!4v1787653743956!5m2!1sen!2sin"
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
