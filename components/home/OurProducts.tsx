import Image from "next/image";
import Link from "next/link";
import { products as initialProducts } from "@/data/products";

// Structured product data mapping to your layout needs
const productLayoutData = [
  {
    data: initialProducts[0],
    isWide: false,
    imageSize: "w-7xl",
  },
  {
    data: initialProducts[1],
    isWide: false,
    imageSize: "w-6xl",
  },
  {
    data: initialProducts[2],
    isWide: false,
    imageSize: "w-6xl",
  },
];

export default function OurProducts() {
  return (
    <section
      id="products"
      className="w-full bg-[#f4efe8]"
      aria-label="Our Products"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Section Heading */}
        <h2 className="heading-section text-center text-dark-green mb-12 md:mb-16 text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide">
          OUR PRODUCTS
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productLayoutData.map((item, index) => {
            const product = item.data;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl h-full overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 h-full`}
              >
                <div>
                  <div
                    className={`relative w-full flex justify-center items-center h-72 overflow-hidden`}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={1000}
                      height={1000}
                      className={`object-contain ${item.imageSize} h-auto`}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-dark-green mb-1">
                      {product.title}
                    </h3>
                    <p className="text-[#5a5a5a] text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-4 sm:px-6 pt-0 mt-auto">
                  <Link
                    href={product.link}
                    className="inline-flex items-center gap-1.5 text-[#2e6b38] font-medium text-sm hover:gap-2.5 transition-all duration-200"
                  >
                    View Product
                    <span className="text-base font-bold leading-none">
                      &gt;
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
