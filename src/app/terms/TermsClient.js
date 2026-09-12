"use client";

import TermsHero from "@/components/sections/terms/TermsHero";
import TermsContent from "@/components/sections/terms/TermsContent";

export default function TermsClientPage() {
  return (
    <div className="w-full flex flex-col animate-fadeIn">
      {/* 1. Hero banner */}
      <TermsHero />

      {/* 2. Content with navigation */}
      <TermsContent />
    </div>
  );
}
