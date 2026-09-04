import { useRef } from "react";
import { Link } from "react-router-dom";
import { trendPicks } from "../../data/homeData";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

const TrendPicks = ({ items = trendPicks }) => {
  const scrollRef = useRef(null);
  const trendList = items?.length ? items : trendPicks;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-10 sm:py-12 bg-white relative group/section">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Section Header & Desktop Header Navigation Controls */}
        <div className="mb-6 flex items-end justify-between">
          <div className="flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e91e8c]">
              Curated Trends
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Style / Trend Picks
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              The season's most wanted aesthetics, textures and silhouettes
            </p>
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

        {/* Horizontal Scroll Cards Row with Mobile Floating Side Arrows */}
        <div className="relative">
          {/* Mobile Only Left Floating Arrow */}
          <button
            onClick={() => scroll("left")}
            className="flex sm:hidden absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 border border-gray-200 shadow-lg items-center justify-center text-gray-800 active:scale-95 transition-all cursor-pointer"
            aria-label="Scroll left mobile"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
          >
            {trendList.map((trend) => (
              <Link
                key={trend.id || trend._id}
                to={trend.link}
                className="group flex-shrink-0 w-[200px] sm:w-[240px] md:w-[260px] relative rounded-2xl overflow-hidden aspect-[3/4.2] flex flex-col justify-end p-4 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Trend Image */}
                <img
                  src={trend.image || trend.imageURL}
                  alt={trend.title || trend.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Rich Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                {/* Centered Bold Typography */}
                <div className="relative z-10 text-center flex flex-col items-center">
                  <h3 className="text-base sm:text-lg font-black tracking-widest text-white uppercase drop-shadow group-hover:text-amber-200 transition-colors">
                    {trend.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/80 font-light mt-0.5 line-clamp-1">
                    {trend.subtitle}
                  </p>
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

export default TrendPicks;
