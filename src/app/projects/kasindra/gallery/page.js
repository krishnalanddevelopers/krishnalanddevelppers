import ProjectGallery from "@/components/sections/projectdetail/ProjectGallery";

export const metadata = {
  title: "Kasindra Gallery — Aurum Valley | Krishna Land Developers",
  description:
    "Explore the Kasindra Aurum Valley gallery with project-specific visuals and development progress images.",
};

const KASINDRA_GALLERY_IMAGES = {
  curvedBlue: "/gallery/kasindra/1 (1).png",
  skyscraper: "/gallery/kasindra/1ai.png",
  bedroom: "/gallery/kasindra/iso kids-gazebo-main garden.png",
  tallVilla: "/gallery/kasindra/kids playground final view.png",
  studyRoom: "/gallery/kasindra/lily pond view 01.png",
  poolHouse: "/gallery/kasindra/zen garden view1.png",
  darkSkyscrapers: "/gallery/kasindra/ISO 02.png",
};

export default function KasindraGalleryPage() {
  return (
    <ProjectGallery
      title="Kasindra Project Gallery"
      subtitle="A dedicated visual showcase of Antarim at  Kasindra ."
      images={KASINDRA_GALLERY_IMAGES}
      showGalleryButton={false}
    />
  );
}
