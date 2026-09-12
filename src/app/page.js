import AboutSection from "@/components/sections/about/AboutSection";
import BlogSection from "@/components/sections/blog/BlogSection";
import AboutDholeraSection from "@/components/sections/dholera/AboutDholeraSection";
import HeroSection from "@/components/sections/home/HeroSection";
import ProjectsShowcaseSection from "@/components/sections/home/ProjectsShowcaseSection";
import ServicesSection from "@/components/sections/services/ServicesSection";

export default function HomePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-8 py-12 flex flex-col gap-24 md:gap-36">
      <HeroSection />
      <AboutSection />
      <AboutDholeraSection />
      <ProjectsShowcaseSection />
      <ServicesSection />
      <BlogSection />
    </div>
  );
}
