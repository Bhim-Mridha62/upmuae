import React from "react";

export default function SustainabilityPillars() {
  const pillars = [
    {
      title: "Sustainable Sourcing",
      description:
        "Sourcing materials responsibly with certified eco-friendly and organic practices.",
      icon: "https://img.magnific.com/premium-vector/hand-holding-leaf-symbol-human-responsibility-care-nature_1256803-9152.jpg",
    },
    {
      title: "Circular Innovation",
      description:
        "Driving circular economy initiatives to minimize waste and maximize resource efficiency.",
      icon: "https://media.istockphoto.com/id/2153005961/vector/sustainable-recycling-icon.jpg?s=612x612&w=0&k=20&c=2jUTLYozxpPfaq1oDbizL7jzYAGJB2CvoGGe5bcmkgk=",
    },
    {
      title: "Community Engagement",
      description:
        "Empowering local communities through education, awareness, and sustainable development.",
      icon: "https://static.vecteezy.com/system/resources/thumbnails/008/064/191/small/design-people-connection-shape-illustration-vector.jpg",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-serif text-3xl md:text-4xl font-bold tracking-wider text-[#1a1a1a] mb-16 uppercase">
          Our Sustainability Pillars
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-6">
                <img
                  src={pillar.icon}
                  alt={pillar.title}
                  className="w-32 h-auto object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
