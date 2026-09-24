import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function OurProducts() {
  return (
    <section
      id="products"
      className="w-full bg-[#f4efe8]"
      aria-label="Our Products"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Section Heading */}
        <h2 className="heading-section text-center text-dark-green mb-10 md:mb-14 text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide">
          OUR PRODUCTS
        </h2>

        {/* Products Grid: 2 Columns with equal height matching */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Column: 2 Stacked Cards sharing total height */}
          <div className="flex flex-col gap-6 h-full">
            {products.slice(0, 2).map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl flex-1 flex flex-col sm:flex-row overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-[#feebc8]"
              >
                {/* Responsive Image Container with reduced height */}
                <div className="relative w-full sm:w-1/2 h-36 sm:h-auto">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Content Container */}
                <div className="flex flex-col justify-between w-full sm:w-1/2 p-4 sm:p-5">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#744210] mb-1.5">
                      {product.title}
                    </h3>
                    <p className="text-[#7b341e] text-xs sm:text-sm leading-relaxed mb-3">
                      {product.description}
                    </p>
                  </div>
                  <div className="pt-0 mt-auto">
                    <Link
                      href={product.link}
                      className="inline-flex items-center gap-1.5 text-[#975a16] font-medium text-sm hover:gap-2.5 transition-all duration-200"
                    >
                      View Product
                      <span className="text-base font-bold leading-none">
                        &gt;
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: 1 Large Card (Height reduced & matching left column) */}
          <div className="flex flex-col h-full">
            {products.slice(2, 3).map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl h-full flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-[#feebc8]"
              >
                {/* Responsive Image Container with reduced height */}
                <div className="relative w-full h-48 sm:h-60 lg:h-[235px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Content Container */}
                <div className="flex flex-col justify-between w-full p-4 sm:p-6 flex-grow">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#744210] mb-2">
                      {product.title}
                    </h3>
                    <p className="text-[#7b341e] text-xs sm:text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>
                  <div className="pt-0 mt-auto">
                    <Link
                      href={product.link}
                      className="inline-flex items-center gap-1.5 text-[#975a16] font-medium text-sm hover:gap-2.5 transition-all duration-200"
                    >
                      View Product
                      <span className="text-base font-bold leading-none">
                        &gt;
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
