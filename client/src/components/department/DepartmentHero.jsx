import { Link } from "react-router-dom";

const DepartmentHero = ({
  department = "Women",
  title = "WOMEN'S RUNWAY & PRET",
  subtitle = "The Summer & Festive Wardrobe Edit",
  offerBadge = "UPTO 70% OFF",
  description = "From regal traditional drapes to modern chic silhouettes, explore curations handpicked for every celebration.",
  bannerImage = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=80",
  secondaryImage = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
  gradient = "from-rose-950/80 via-purple-950/70 to-slate-950/90",
  accentColor = "#e91e8c",
  itemCount = 0,
}) => {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-slate-950 text-white shadow-2xl mb-8">
      {/* Background Media with Parallax/Zoom effect */}
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt={title}
          className="h-full w-full object-cover object-center opacity-45 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} backdrop-blur-[2px]`} />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-12 sm:px-10 sm:py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl space-y-4">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold tracking-widest uppercase text-white backdrop-blur-md border border-white/15">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ background: accentColor }}
            />
            <span>{department} Fashion Store</span>
            <span className="text-white/40">•</span>
            <span style={{ color: "#ffd166" }}>{offerBadge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white drop-shadow-md">
            {title}
          </h1>

          <p className="text-sm sm:text-lg font-medium text-slate-200/90 leading-relaxed max-w-xl">
            {description}
          </p>

          {/* Quick Metrics & CTA */}
          <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#department-catalog"
              className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer no-underline"
              style={{
                background: `linear-gradient(135deg, ${accentColor} 0%, #ff6b35 100%)`,
                boxShadow: `0 8px 24px rgba(233,30,140,0.35)`,
              }}
            >
              <span>Explore Collection</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            {itemCount > 0 && (
              <div className="rounded-2xl bg-white/10 px-4 py-2.5 backdrop-blur-md border border-white/10">
                <span className="text-xs text-slate-300 block font-medium">In Catalog</span>
                <span className="text-base sm:text-lg font-extrabold text-white">
                  {itemCount.toLocaleString()}+ Styles
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Secondary Featured Vignette for desktop */}
        {secondaryImage && (
          <div className="hidden lg:flex items-center justify-center shrink-0">
            <div className="relative group">
              <div className="relative h-64 w-52 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500">
                <img
                  src={secondaryImage}
                  alt=""
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-pink-300">
                    Trending
                  </span>
                  <span className="text-xs font-bold text-white truncate">
                    100% Authentic Brands
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DepartmentHero;
