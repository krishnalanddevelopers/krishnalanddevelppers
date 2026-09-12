"use client";

import { useState } from "react";
import ContactQueryModal from "@/components/layout/ContactQueryModal";
import GalleryHero from "@/components/sections/gallery/GalleryHero";
import GalleryViewer from "@/components/sections/gallery/GalleryViewer";
import GalleryCta from "@/components/sections/gallery/GalleryCta";

export default function GalleryClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="w-full flex flex-col animate-fadeIn">
      {/* 1. Gallery Sub-page Hero Banner */}
      <GalleryHero />

      {/* 2. Interactive display viewer and Lightbox slideshow */}
      <GalleryViewer />

      {/* 3. Final Get In Touch CTA card */}
      <GalleryCta onInquiryClick={handleOpenModal} />

      {/* Leads Onboarding Modal */}
      <ContactQueryModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
