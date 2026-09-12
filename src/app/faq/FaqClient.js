"use client";

import { useState } from "react";
import ContactQueryModal from "@/components/layout/ContactQueryModal";
import FaqHero from "@/components/sections/faq/FaqHero";
import FaqAccordion from "@/components/sections/faq/FaqAccordion";
import FaqCta from "@/components/sections/faq/FaqCta";

export default function FaqClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="w-full flex flex-col animate-fadeIn">
      {/* 1. FAQ Hero Banner */}
      <FaqHero />

      {/* 2. Interactive Accordion Q&A list */}
      <FaqAccordion />

      {/* 3. Final Inquiry Support CTA */}
      <FaqCta onInquiryClick={handleOpenModal} />

      {/* Leads Onboarding Modal */}
      <ContactQueryModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
