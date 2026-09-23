import OurProducts from "@/components/home/OurProducts";
import CircularEconomy from "@/components/home/CircularEconomy";
import ImpactSection from "@/components/home/ImpactSection";
import WhyUPM from "@/components/home/WhyUPM";
import Newsroom from "@/components/home/Newsroom";
import CTASection from "@/components/home/CTA";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";
import HeroSection from "@/components/home/HeroSection";
import SustainabilityPillars from "@/components/home/SustainabilityPillars";
import GreenArabiaCampaign from "@/components/home/GreenArabiaCampaign";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <WhoWeAreSection />
      <OurProducts />
      <GreenArabiaCampaign />
      <ImpactSection />
      {/* <CircularEconomy /> */}
      <Newsroom />
      <SustainabilityPillars />
      <WhyUPM />
      <CTASection />
    </main>
  );
}
