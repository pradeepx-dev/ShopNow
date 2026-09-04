import { useRef } from "react";
import { Link } from "react-router-dom";
import { categoryPills } from "../../data/homeData";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

const CategoryPills = ({ items = categoryPills }) => {
  const scrollRef = useRef(null);
  const pillList = items?.length ? items : categoryPills;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-white py-4 border-b border-gray-100 group/section">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 relative">
        
        {/* Mobile Left Arrow Button (visible only on mobile) */}
        <button
          onClick={() => scroll("left")}
          className="flex sm:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/95 border border-gray-200 shadow-md items-center justify-center text-gray-700 active:scale-95 transition-all cursor-pointer"
          aria-label="Scroll left mobile"
        >
          <ChevronLeftIcon className="w-3.5 h-3.5" />
        </button>

        {/* Desktop Left Arrow Button (visible only on desktop/tablet) */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-gray-700 hover:text-[#e91e8c] hover:border-[#e91e8c]/30 hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label="Scroll left desktop"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex items-center gap-4 sm:gap-14 overflow-x-auto no-scrollbar scroll-smooth py-2 px-7 sm:px-10"
        >
          {pillList.map((cat) => (
            <Link
              key={cat.id || cat._id}
              to={cat.link}
              className="group flex flex-col items-center shrink-0 text-center cursor-pointer transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Image Circle / Capsule */}
              <div className="relative w-16 h-16 sm:w-25 sm:h-25 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 via-pink-500 to-rose-500 shadow-sm group-hover:shadow-md transition-all">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5">
                  <img
                    src={cat.image || cat.imageURL}
                    alt={cat.name}
                    className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Label */}
              <span className="mt-2 text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-[#e91e8c] tracking-tight whitespace-nowrap transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Right Arrow Button (visible only on mobile) */}
        <button
          onClick={() => scroll("right")}
          className="flex sm:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/95 border border-gray-200 shadow-md items-center justify-center text-gray-700 active:scale-95 transition-all cursor-pointer"
          aria-label="Scroll right mobile"
        >
          <ChevronRightIcon className="w-3.5 h-3.5" />
        </button>

        {/* Desktop Right Arrow Button (visible only on desktop/tablet) */}
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-gray-700 hover:text-[#e91e8c] hover:border-[#e91e8c]/30 hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label="Scroll right desktop"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
};

export default CategoryPills;
