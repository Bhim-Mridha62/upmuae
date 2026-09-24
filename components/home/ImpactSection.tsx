export default function ImpactSection() {
  return (
    <section className="w-full bg-white pb-10 px-4 flex flex-col items-center justify-center text-[#F4F3ED]">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-dark-green font-normal mb-14 uppercase text-center">
        Our Impact
      </h2>

      {/* Stats Container */}
      <div className="flex flex-col text-black/70 md:flex-row items-center justify-center gap-10 md:gap-12 max-w-6xl w-full">
        {/* Stat 1 */}
        <div className="flex flex-col items-center text-center w-40 ">
          <span className="text-5xl md:text-[56px] mb-3 font-medium tracking-tight">
            2.5M
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.15em] font-sans uppercase font-medium opacity-90">
            Tons Recycled Annually
          </span>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[1px] h-16 bg-[#F4F3ED] opacity-20"></div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center text-center w-40">
          <span className="text-5xl md:text-[56px] mb-3 font-medium tracking-tight">
            40+
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.15em] font-sans uppercase font-medium opacity-90">
            Countries Served
          </span>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[1px] h-16 bg-[#F4F3ED] opacity-20"></div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center text-center w-40">
          <span className="text-5xl md:text-[56px] mb-3 font-medium tracking-tight">
            500+
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.15em] font-sans uppercase font-medium opacity-90">
            Employees
          </span>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[1px] h-16 bg-[#F4F3ED] opacity-20"></div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center text-center w-40">
          <span className="text-5xl md:text-[56px] mb-3 font-medium tracking-tight">
            90%
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.15em] font-sans uppercase font-medium opacity-90">
            Water Saved
          </span>
        </div>
      </div>
    </section>
  );
}
