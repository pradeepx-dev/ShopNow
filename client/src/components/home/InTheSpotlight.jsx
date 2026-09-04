import { Link } from "react-router-dom";
import { spotlightBrands } from "../../data/homeData";

const InTheSpotlight = ({ items = spotlightBrands }) => {
  const brandList = items?.length ? items : spotlightBrands;

  return (
    <section className="w-full py-10 sm:py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-6 flex flex-col items-start">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e91e8c]">
            Top Labels
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            In the Spotlight
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Iconic global brands & celebrated Indian designers with exclusive deals
          </p>
        </div>

        {/* 2 Rows x 5 Columns Responsive Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {brandList.map((item) => (
            <Link
              key={item.id || item._id}
              to={item.link}
              className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200/80 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container with Brand Overlay */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                <img
                  src={item.image || item.imageURL}
                  alt={item.brand || item.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Gradient for typography contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Prominent Brand Logo / Typography over image */}
                <div className="absolute bottom-3 inset-x-3 text-center">
                  <span className="inline-block font-black text-sm sm:text-base tracking-wider text-white uppercase drop-shadow-md">
                    {item.logoText || item.brand}
                  </span>
                </div>
              </div>

              {/* Brand Meta & Offer Info */}
              <div className="p-3 bg-white text-center flex flex-col items-center">
                <span className="text-[11px] font-medium text-gray-500 truncate w-full">
                  {item.subtitle || item.description}
                </span>
                <span className="mt-0.5 text-xs sm:text-[13px] font-bold text-[#e91e8c]">
                  {item.offer}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InTheSpotlight;
