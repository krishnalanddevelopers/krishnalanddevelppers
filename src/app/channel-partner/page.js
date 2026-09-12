import PartnerFormSection from "@/components/sections/channelpartner/PartnerFormSection";
import PartnerHero from "@/components/sections/channelpartner/PartnerHero";
import WhyPartnerSection from "@/components/sections/channelpartner/WhyPartnerSection";

export const metadata = {
  title: "Become a Channel Partner | Krishna Land Developers",
  description:
    "Join Krishna Land Developers as a Channel Partner. Onboard to access premium land holdings in Dholera SIR, earn timely commissions, and receive full sales support.",
};

export default function ChannelPartnerPage() {
  return (
    <div className="w-full flex flex-col">
      <PartnerHero />
      <WhyPartnerSection />
      <PartnerFormSection />
      {/* <PartnerShowcaseSection /> */}
    </div>
  );
}
