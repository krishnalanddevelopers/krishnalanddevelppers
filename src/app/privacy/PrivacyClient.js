"use client";

import PrivacyHero from "@/components/sections/privacy/PrivacyHero";
import PrivacyContent from "@/components/sections/privacy/PrivacyContent";

export default function PrivacyClientPage() {
  return (
    <div className="w-full flex flex-col animate-fadeIn">
      {/* 1. Hero banner */}
      <PrivacyHero />

      {/* 2. Content with navigation */}
      <PrivacyContent />
    </div>
  );
}
