import React from "react";

const CTASection = () => {
  return (
    <section className="relative w-full flex items-center justify-center px-4 py-12 overflow-hidden font-sans">
      {/* Background Image from Unsplash (Industrial/Factory theme) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2600&auto=format&fit=crop")',
        }}
      />

      {/* Dark Overlay to match the original design's contrast */}
      <div className="absolute inset-0 bg-[#0b1215]/80"></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Top Badge */}
        <div className="bg-[#8ba691] text-[#0a1a15] text-[11px] font-bold px-3 py-1 rounded-sm tracking-widest uppercase mb-6 shadow-sm">
          Green Arabia
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide leading-[1.15] mb-5">
          A More Circular
          <br />
          Future Starts Here.
        </h2>

        {/* Subheading text */}
        <p className="text-[15px] md:text-base text-gray-200 mb-6 leading-relaxed font-medium">
          Partner with UPM to turn your paper waste into value. Join us
          <br className="hidden md:block" /> in building a sustainable supply
          chain for the UAE.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-[#f9f9f9] text-gray-900 font-bold text-xs md:text-sm px-8 py-3.5 rounded-md flex items-center justify-center gap-2 hover:bg-white transition-colors duration-200 uppercase tracking-wide">
            Contact UPM
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>

          <button className="bg-transparent border border-gray-300 text-white font-bold text-xs md:text-sm px-8 py-3.5 rounded-md flex items-center justify-center gap-2 hover:bg-white/10 transition-colors duration-200 uppercase tracking-wide">
            Explore Our Products
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
