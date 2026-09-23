"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-[600px] text-white selection:bg-dark-green selection:text-white antialiased relative overflow-hidden flex items-center pt-28 pb-16">
      {/* 1. Full-screen Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-section-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay Gradient (Video ke upar text ko readable rakhne ke liye) */}
        <div className="absolute inset-0 bg-black/55 backdrop-brightness-100" />
      </div>

      {/* 3. Hero Content Container (Aapka Purana Content) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full">
        <div className="max-w-3xl">
          {/* Heading (Same Old Animation & Content) */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="flex w-full flex-col gap-2 text-5xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight"
          >
            <motion.span
              style={{ transformOrigin: "left center" }}
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0,
                  x: -10,
                  filter: "blur(10px)",
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              Paper Reimagined
            </motion.span>

            <motion.span
              style={{ transformOrigin: "left center" }}
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0,
                  x: -10,
                  filter: "blur(10px)",
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              Packaging Reinvented.
            </motion.span>
          </motion.h1>

          {/* Subtitle Paragraph (Same Old Content) */}
          <p className="mt-6 text-gray-200 leading-relaxed text-base md:text-lg font-light">
            Reimagining recovered paper into smarter, sustainable packaging
            solutions.
          </p>

          {/* CTAs (Same Old Content) */}
          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 bg-white text-black px-6 py-3 rounded-full font-medium text-xs hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Solutions
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-3 rounded-full font-medium text-xs hover:bg-white/20 transition-colors"
            >
              <span className="w-6 h-6 rounded-full bg-white text-black grid place-items-center text-[9px] pl-0.5">
                ▶
              </span>
              Watch Our Process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
