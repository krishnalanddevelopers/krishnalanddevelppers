"use client";

import { useState } from "react";
import ContactQueryModal from "@/components/layout/ContactQueryModal";
import DholeraHero from "@/components/sections/dholeraland/DholeraHero";
import DholeraIntro from "@/components/sections/dholeraland/DholeraIntro";
import DholeraBenefits from "@/components/sections/dholeraland/DholeraBenefits";
import WhyDholera from "@/components/sections/dholeraland/WhyDholera";
import DholeraMap from "@/components/sections/dholeraland/DholeraMap";

export default function DholeraClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="w-full flex flex-col">
      {/* Hero Banner (Boxed) */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 pt-6 sm:pt-8 w-full">
        <DholeraHero onInquiryClick={handleOpenModal} />
      </div>
      
      {/* Intro Overview */}
      <DholeraIntro />
      
      {/* 7 Advantages Grid */}
      <DholeraBenefits />
      
      {/* Transit Connectivity Pillars */}
      <WhyDholera />
      
      {/* Satellite Maps & Get In Touch (Grid split-screen) */}
      <DholeraMap onInquiryClick={handleOpenModal} />

      {/* Leads Onboarding Modal */}
      <ContactQueryModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
