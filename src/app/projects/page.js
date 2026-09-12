import ProjectsHero from "@/components/sections/projectlisting/ProjectsHero";
import ProjectListingSection from "@/components/sections/projectlisting/ProjectListingSection";
import DholeraVisionSection from "@/components/sections/dholeravision/DholeraVisionSection";

export const metadata = {
  title: "Projects | Krishna Land Developers",
  description: "Explore premium master-planned plotting and villa projects by Krishna Land Developers in Dholera SIR, Gujarat.",
};

export default function ProjectsListingPage() {
  return (
    <div className="w-full flex flex-col">
      <ProjectsHero />
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <ProjectListingSection />
      </div>
      <DholeraVisionSection />
    </div>
  );
}
