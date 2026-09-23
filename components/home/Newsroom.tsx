import React from "react";

const Newsroom = () => {
  const newsItems = [
    {
      title: "54th Eid Al Etihad Celebration",
      description:
        "M.A.H.Y. Khoory proudly celebrated the 54th Eid Al Etihad with a vibrant event that brought employees...",
      date: "December 2, 2025",
      imageUrl:
        "https://www.upmuae.com/en/admin/common/file_manager/images/28.jpg",
    },
    {
      title: "Participation at The Big 5",
      description:
        "M.A.H.Y. Khoory made a strong impact at The Big 5, engaging with visitors, clients, and industry...",
      date: "November 20, 2025",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_H89N78G0YO1vQ7y3F25oq2JXNh8MVSvRqV1v6NIJA&s=10",
    },
    {
      title: "ProPaper Dubai 2025 Presence",
      description:
        "M.A.H.Y. Khoory achieved a successful presence at ProPaper Dubai 2025, connecting with global...",
      date: "October 15, 2025",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1_P7D8Ff1bRY9Uh2J0Xg1A9nZAujH73Olmqtdv6FpQ&s=10",
    },
  ];

  return (
    // Note: Replaced the original dark blue with your requested dark green background.
    // If you have a custom 'bg-dark-green' in your tailwind.config.js, you can swap out the hex code below.
    <section className="bg-white text-black p-4 md:p-12 lg:p-16 font-sans">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal uppercase text-dark-green">
            News Room
          </h1>
          <a
            href="#"
            className="flex items-center group hover:opacity-80 transition-opacity"
          >
            <span className="text-sm font-medium mr-3 text-black/70">
              Visit the news Room
            </span>
            <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </a>
        </div>

        {/* Full width separator */}
        <div className="w-full h-px bg-white/20 mb-8"></div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Featured News */}
          <div className="flex flex-col pr-0 lg:pr-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7tscFQudasvGYF_A-EBHvzU9ZHYekpsafizl74dsgP1CqbSvnESOhV_rw&s=10"
              alt="Warehouse Event Banner"
              className="w-full h-auto object-cover rounded-sm mb-6 shadow-lg"
            />
            <h2 className="text-xl md:text-2xl font-bold mb-3 leading-snug">
              Warehouse Sale on Engineering Products
            </h2>
            <p className="text-sm text-black/70 leading-relaxed mb-3">
              M.A.H.Y. Khoory has launched a limited time warehouse sale,
              offering selected engineering products at highly competitive
              prices across the UAE. With immediate availability on pumps,
              motors, lighting, and more, customers are...
            </p>
            <a href="#" className="text-sm font-semibold mb-4 hover:underline">
              Read More...
            </a>
            <span className="text-xs text-gray-400 font-medium">
              January 10, 2026
            </span>
          </div>

          {/* Right Column - News List (with left border on desktop) */}
          <div className="flex flex-col lg:pl-12 lg:border-l lg:border-white/20">
            <div className="flex flex-col divide-y divide-white/20">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-row gap-2 md:gap-6 ${index === 0 ? "pb-6" : "py-6"} ${index === newsItems.length - 1 ? "border-b border-white/20" : ""}`}
                >
                  {/* Article Text */}
                  <div className="flex-1 flex flex-col justify-center pr-4">
                    <h3 className="text-sm md:text-base font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-black/70 leading-relaxed mb-2">
                      {item.description}
                    </p>
                    <a
                      href="#"
                      className="text-xs font-semibold mb-3 hover:underline"
                    >
                      Read More...
                    </a>
                    <span className="text-[11px] text-gray-400 font-medium mt-auto">
                      {item.date}
                    </span>
                  </div>

                  {/* Article Thumbnail */}
                  <div className="w-[200px] shrink-0">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-[120px] object-cover rounded-sm shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsroom;
