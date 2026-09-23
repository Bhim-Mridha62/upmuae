import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full" aria-label="Hero">
      {/* Full-bleed background image */}
      <div className="relative w-full h-[60vh] min-h-[500px] md:h-[80vh] lg:h-[90vh] max-h-[900px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Aerial view of Union Paper Mills recycling facility with Abu Dhabi skyline at sunset"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-[1920px] mx-auto px-[clamp(1rem,3vw,4rem)]">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Main Heading */}
              <h1 className="heading-display text-white mb-4 md:mb-6 drop-shadow-lg">
                TURNING WASTE INTO VALUE
              </h1>

              {/* Subheading */}
              <p className="text-white/90 text-[clamp(0.875rem,1.8vw,1.375rem)] font-light tracking-[0.12em] uppercase leading-relaxed mb-8 md:mb-10 max-w-2xl drop-shadow-md">
                PIONEERING SUSTAINABLE PAPER SOLUTIONS IN THE UAE SINCE 1977
              </p>

              {/* CTA Button */}
              <Button
                href="#impact"
                variant="primary"
                size="lg"
                className="bg-white text-dark-green font-semibold rounded-full shadow-lg"
              >
                Explore Our Impact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
