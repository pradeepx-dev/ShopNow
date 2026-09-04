import { Link } from "react-router-dom";
import { heroBannerData } from "../../data/homeData";

const HeroBanner = ({ data = heroBannerData }) => {
  const banner = data || heroBannerData;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-amber-100 via-orange-100 to-sky-100">
      <div className="relative mx-auto max-w-[1400px]">
        {/* Main Banner Container */}
        <Link
          to={banner.link || "/search?category=all"}
          className="group block relative w-full overflow-hidden"
        >
          {/* Desktop & Tablet Banner */}
          <div className="relative aspect-[21/9] sm:aspect-[24/9] md:aspect-[28/9] min-h-[260px] sm:min-h-[340px] md:min-h-[420px] w-full flex items-center">
            {/* Background Beach / High Fashion Imagery */}
            <img
              src={banner.backgroundImage || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"}
              alt="Summer Beach"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-950/40 via-transparent to-sky-950/30" />
            <div className="absolute inset-0 bg-amber-500/10 mix-blend-multiply" />

            {/* Split Composition Fashion Models */}
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-16 py-6">
              
              {/* Left Model / Accent Column */}
              <div className="hidden md:flex items-center gap-4 h-full">
                <div className="h-4/5 w-36 lg:w-44 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/80 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <img
                    src={banner.bannerImage || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"}
                    alt="Fashion Model 1"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="h-4/5 w-36 lg:w-44 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/80 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <img
                    src={banner.secondaryImage || "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80"}
                    alt="Fashion Model 2"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Center / Right Banner Typography matching layout */}
              <div className="flex flex-col items-center md:items-end text-center md:text-right text-white drop-shadow-md my-auto">
                <div className="flex items-center gap-2 mb-1">
                  <span className="tracking-[0.35em] text-xs sm:text-sm md:text-base font-bold text-white/95 uppercase font-sans">
                    {banner.subtitle || "SHOPNOW FASHION"}
                  </span>
                </div>

                <div className="flex items-baseline gap-1 sm:gap-2">
                  <span className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-white/90">UPTO</span>
                  <span className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-white drop-shadow-xl">
                    75<span className="text-3xl sm:text-4xl md:text-6xl font-extrabold">%</span>
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-white">OFF</span>
                </div>

                <p className="mt-2 text-xs sm:text-sm md:text-base font-medium text-white/90 max-w-md hidden sm:block">
                  {banner.description || "Curated styles for every celebration & summer escape"}
                </p>

                <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 sm:px-7 py-2 sm:py-2.5 text-xs sm:text-sm font-bold shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300">
                  <span>Explore Collection</span>
                  <span className="text-[#e91e8c]">→</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
