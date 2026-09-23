import React from "react";

const WhoWeAreSection = () => {
  return (
    <section className="w-full bg-[#f7f5f0] py-16 md:py-24 px-6 md:px-12 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col items-start w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-dark-green mb-6 tracking-wide uppercase">
            Who We Are
          </h2>

          <div className="text-gray-700 text-sm md:text-base space-y-5 mb-8 leading-relaxed font-sans w-full max-w-lg">
            <p>
              We are a dedicated team of professionals committed to delivering
              exceptional results. Our approach combines industry expertise with
              innovative thinking to solve complex challenges and drive
              sustainable growth for our partners and clients worldwide.
            </p>
            <p>
              With a focus on collaboration and continuous improvement, we
              strive to create lasting value. Our diverse backgrounds and shared
              vision enable us to adapt to changing environments and
              consistently exceed expectations in everything we do.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 text-dark-green font-bold text-sm md:text-base hover:opacity-75 transition-opacity group">
            Explore Our Impact
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 w-full">
          <img
            // Placeholder image matching the corporate meeting vibe
            src="https://plus.unsplash.com/premium_photo-1682141451054-0d39d62cd17e?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Our Team collaborating in the office"
            className="w-full h-auto object-cover rounded-[2rem] shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
