import AboutHero from "@/components/sections/aboutpage/AboutHero";
import TeamSection from "@/components/sections/aboutpage/TeamSection";
import VisionMission from "@/components/sections/aboutpage/VisionMission";
import WhoWeAre from "@/components/sections/aboutpage/WhoWeAre";
import WhyChooseUs from "@/components/sections/aboutpage/WhyChooseUs";

export const metadata = {
  title: "About Us | Krishna Land Developers",
  description:
    "Learn about Krishna Land Developers - building trust through three decades of excellence in premium land development, master planning, and investments across Gujarat.",
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col">
      <AboutHero />
      <WhoWeAre />
      <WhyChooseUs />
      <VisionMission />
      <TeamSection />
      {/* <AboutTestimonials /> */}
    </div>
  );
}
