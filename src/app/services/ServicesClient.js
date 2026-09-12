"use client";

import { useState } from "react";
import ContactQueryModal from "@/components/layout/ContactQueryModal";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesListing from "@/components/sections/services/ServicesListing";
import BulkLandServices from "@/components/sections/services/BulkLandServices";

export default function ServicesClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="w-full flex flex-col">
      {/* Subpage Hero Banner */}
      <ServicesHero />

      {/* Core Services Cards Listing */}
      <ServicesListing onInquiryClick={handleOpenModal} />

      {/* Bulk Land Institutional Offering */}
      <BulkLandServices onInquiryClick={handleOpenModal} />

      {/* Callback Inquiry capture Modal */}
      <ContactQueryModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
