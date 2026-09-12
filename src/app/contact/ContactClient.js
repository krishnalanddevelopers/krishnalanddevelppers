"use client";

import ContactFormSection from "@/components/sections/contactform/ContactFormSection";
import ContactHero from "@/components/sections/contactform/ContactHero";

export default function ContactClientPage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Contact Sub-page Hero */}
      <ContactHero />
      {/* 2. Form, Maps, Details & Info Drawer grid */}
      <ContactFormSection />
    </div>
  );
}
