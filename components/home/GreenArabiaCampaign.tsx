import React from "react";

export default function GreenArabiaCampaign() {
  return (
    <section className="bg-[#122A1C] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side: 3 Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-3/5">
          {/* Card 1 */}
          <div className="h-80 rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"
              alt="Sustainable City Architecture"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Card 2 - Poster Card */}
          <div
            className="h-80 rounded-2xl border border-white/10 p-6 flex flex-col justify-between text-center relative overflow-hidden shadow-lg bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-black/20 to-black/70 pointer-events-none" />

            <div className="relative z-10 my-auto">
              <h4 className="font-serif text-2xl font-bold tracking-wider leading-tight text-white uppercase">
                Green
                <br />
                Arabia
                <br />
                <span className="text-xs font-sans tracking-widest font-normal opacity-80">
                  Campaign
                </span>
              </h4>
            </div>

            <p className="text-[10px] text-white/70 relative z-10 leading-tight">
              Leading sustainable transformation across urban ecosystems.
            </p>
          </div>

          {/* Card 3 */}
          <div className="h-80 rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop"
              alt="Green Urban Landscape"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-2/5">
          <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-wider uppercase mb-6 text-white">
            Green Arabia Campaign
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Creating a bold national impact by embedding sustainability directly
            into urban development and ecological conservation projects.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Through strategic partnerships and community-driven initiatives, our
            goal is to build greener cities, restore natural habitats, and
            ensure a sustainable future for upcoming generations.
          </p>
        </div>
      </div>
    </section>
  );
}
