import { Link } from "react-router-dom";
import { hiddenGemsData } from "../../data/homeData";
import { ArrowRightIcon } from "./Icons";

const HiddenGems = ({ data = hiddenGemsData }) => {
  const hiddenGems = data || hiddenGemsData;
  const hero = hiddenGems.hero || hiddenGemsData.hero;
  const brands = hiddenGems.brands?.length ? hiddenGems.brands : hiddenGemsData.brands;

  return (
    <section className="w-full py-10 sm:py-14 bg-[#1e130e] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Big Editorial Hero Card */}
          <div className="lg:col-span-7 relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[480px] flex flex-col justify-end p-6 sm:p-10 shadow-2xl group">
            {/* Background Model Image */}
            <img
              src={hero.image || hero.imageURL}
              alt={hero.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Dark Luxury Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-amber-950/20 mix-blend-multiply" />

            {/* Typography Content */}
            <div className="relative z-10 max-w-lg">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
                Curated Spotlight
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-white mt-1 uppercase">
                {hero.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-200 mt-2 font-light">
                {hero.subtitle}
              </p>

              <div className="mt-5">
                <Link
                  to={hero.link}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-gray-900 text-xs sm:text-sm font-bold tracking-wide hover:bg-amber-100 hover:text-black shadow-lg transition-all"
                >
                  <span>{hero.buttonText || "Explore Hidden Gems"}</span>
                  <ArrowRightIcon className="w-4 h-4 text-[#e91e8c]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Artisan Brands */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-5">
            {brands.map((brand) => (
              <Link
                key={brand.id || brand._id}
                to={brand.link}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] flex flex-col justify-end p-4 shadow-lg border border-white/10 hover:border-amber-400/50 transition-all duration-300"
              >
                {/* Brand Image */}
                <img
                  src={brand.image || brand.imageURL}
                  alt={brand.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Brand Label */}
                <div className="relative z-10 text-center">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase group-hover:text-amber-300 transition-colors drop-shadow">
                    {brand.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HiddenGems;
