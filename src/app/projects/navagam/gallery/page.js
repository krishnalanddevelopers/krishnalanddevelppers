import ProjectGallery from "@/components/sections/projectdetail/ProjectGallery";

export const metadata = {
  title: "Navagam Gallery — Aurum Valley | Krishna Land Developers",
  description:
    "Explore the Navagam Aurum Valley gallery with project-specific visuals and development progress images.",
};

const NAVAGAM_GALLERY_IMAGES = {
  curvedBlue: "/gallery/navagam/2BHK_1.png",
  skyscraper: "/gallery/navagam/2BHK_2.png",
  bedroom: "/gallery/navagam/Club House (2).png",
  tallVilla: "/gallery/navagam/2BHK_1.png",
  studyRoom: "/gallery/navagam/cluehouse2.png",
  poolHouse: "/gallery/navagam/kidsplayaera.png",
  darkSkyscrapers: "/gallery/navagam/opengym1.png",
};

export default function NavagamGalleryPage() {
  return (
    <ProjectGallery
      title="Navagam Project Gallery"
      subtitle="A dedicated visual showcase of Aurum Valley at Navagam."
      images={NAVAGAM_GALLERY_IMAGES}
      showGalleryButton={false}
    />
  );
}
