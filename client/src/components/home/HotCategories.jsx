import { useRef } from "react";
import { Link } from "react-router-dom";
import { hotCategories } from "../../data/homeData";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

const HotCategories = ({ items = hotCategories }) => {
  const scrollRef = useRef(null);
  const categoryList = items?.length ? items : hotCategories;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-8 sm:py-10 bg-white relative group/section">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading & Desktop Header Navigation Controls */}
        <div className="mb-6 flex items-end justify-between">
          <div className="flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e91e8c]">
              Explore Trends
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Hot & Happening Categories
            </h2>
          </div>

          {/* Desktop Only Header Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-700 hover:text-[#e91e8c] hover:border-[#e91e8c]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Scroll left desktop"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-700 hover:text-[#e91e8c] hover:border-[#e91e8c]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Scroll right desktop"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories Container with Mobile-Only Floating Side Arrows */}
        <div className="relative">
          {/* Mobile Only Left Floating Arrow */}
          <button
            onClick={() => scroll("left")}
            className="flex sm:hidden absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 border border-gray-200 shadow-lg items-center justify-center text-gray-800 active:scale-95 transition-all cursor-pointer"
            aria-label="Scroll left mobile"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          {/* Horizontally Scrollable Cards Row */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
          >
            {categoryList.map((item) => (
              <Link
                key={item.id || item._id}
                to={item.link}
                className="group flex-shrink-0 w-[200px] sm:w-[240px] md:w-[260px] flex flex-col items-center overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Product Visual Container */}
                <div className={`relative w-full aspect-[4/5] overflow-hidden ${item.bgColor || "bg-amber-50/80"} p-3 flex flex-col justify-between`}>
                  {/* Image */}
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
                    <img
                      src={item.image || item.imageURL}
                      alt={item.title || item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Overlaid Title Badge */}
                  <div className="absolute bottom-5 inset-x-4 text-center">
                    <span className="inline-block bg-white/95 backdrop-blur-sm text-gray-900 font-extrabold text-[11px] sm:text-xs tracking-wider uppercase px-3 py-1.5 rounded-md shadow-md border border-gray-100">
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* Offer Text */}
                <div className="w-full py-3 px-2 text-center bg-white border-t border-gray-50">
                  <span className="text-xs sm:text-sm font-bold text-gray-800 tracking-wide">
                    {item.offer}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Only Right Floating Arrow */}
          <button
            onClick={() => scroll("right")}
            className="flex sm:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 border border-gray-200 shadow-lg items-center justify-center text-gray-800 active:scale-95 transition-all cursor-pointer"
            aria-label="Scroll right mobile"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default HotCategories;
