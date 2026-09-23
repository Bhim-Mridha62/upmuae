import Hero from "@/components/home/Hero";
import OurProducts from "@/components/home/OurProducts";
import CircularEconomy from "@/components/home/CircularEconomy";
import ImpactSection from "@/components/home/ImpactSection";
import WhyUPM from "@/components/home/WhyUPM";
import Newsroom from "@/components/home/Newsroom";
import CTASection from "@/components/home/CTA";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <WhoWeAreSection />
      <OurProducts />
      <ImpactSection />
      <CircularEconomy />
      <Newsroom />
      <WhyUPM />
      <CTASection />
    </main>
  );
}
