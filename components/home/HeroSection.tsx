export default function HeroSection() {
  return (
    <section className="text-[#1a1a1a] selection:bg-[#122A1C] selection:text-white antialiased relative overflow-hidden">
      {/* 1. Full-screen Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(26,26,26,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(26,26,26,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 2. Soft Background Color Glow (Separated from grid to prevent blurring lines) */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#DDE8DF] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* LEFT */}
          <div className="flex-1 w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-black/5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#122A1C]">
              <span>♻️</span> Circular Economy Solutions
            </div>

            {/* Heading */}
            <h1 className="mt-6 font-serif font-bold text-[#1a1a1a] text-4xl md:text-6xl lg:text-[4.7rem] leading-[0.88] tracking-tight">
              TURNING WASTE
              <br />
              <span className="font-light italic text-[#2D5A3D] lowercase tracking-normal">
                into sustainable
              </span>
              <br />
              VALUE
            </h1>

            <p className="mt-6 max-w-lg text-gray-600 leading-relaxed text-sm md:text-base">
              We transform industrial and municipal waste into high-value,
              eco-friendly materials. Closing the loop between waste and
              resources for a greener tomorrow.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-1.5 bg-[#122A1C] text-white px-5 py-2.5 rounded-full font-medium text-xs hover:bg-black transition-colors"
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
                className="inline-flex items-center gap-2 bg-white border border-black/10 px-4 py-2 rounded-full font-medium text-xs hover:border-black/20 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-black text-white grid place-items-center text-[9px]">
                  ▶
                </span>
                Watch Our Process
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-black/10 pt-8 max-w-lg">
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                  500+
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-gray-500 font-medium">
                  Tons Recycled
                </div>
              </div>
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                  40%
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-gray-500 font-medium">
                  Carbon Saved
                </div>
              </div>
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                  Zero
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-gray-500 font-medium">
                  Landfill Waste
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 w-full relative">
            <div className="relative rounded-[2.5rem] overflow-hidden h-[380px] lg:h-[480px] w-full shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop"
                alt="Sustainable material texture"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card - Top */}
            <div className="absolute -top-4 md:-top-2 -right-2 md:right-0 bg-white rounded-[1.2rem] p-4 shadow-xl shadow-black/5 border border-black/5 w-60">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold">
                  Waste Diverted
                </span>
                <span className="text-xs bg-[#E8F5E9] text-[#2E7D32] px-2 py-0.5 rounded-full font-bold">
                  +12.4%
                </span>
              </div>
              <div className="mt-3 flex items-end gap-1 h-8">
                <div className="w-full bg-[#E8F5E9] rounded-full h-2">
                  <div className="bg-[#2D5A3D] h-2 rounded-full w-[78%]" />
                </div>
              </div>
            </div>

            {/* Floating Card - Bottom */}
            <div className="absolute -bottom-6 -left-4 md:-left-6 bg-[#122A1C] rounded-[1.5rem] p-6 text-white w-64 md:w-72 shadow-xl">
              <div className="w-8 h-8 rounded-full bg-white/10 grid place-items-center mb-4">
                ♻️
              </div>
              <div className="text-xs uppercase tracking-widest text-white/60">
                Sustainable Value Created
              </div>
              <div className="mt-1 font-serif text-3xl font-bold">$2.4M+</div>
              <div className="mt-2 text-xs text-white/60 leading-snug">
                From 100% recycled resources this year
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
