import { Link } from "react-router-dom";
import { festiveData } from "../../data/homeData";

const FestiveSection = ({ data = festiveData }) => {
  const festive = data || festiveData;
  const items = festive.items?.length ? festive.items : festiveData.items;

  return (
    <section className="w-full py-10 sm:py-12 bg-gradient-to-br from-[#c02d4b] via-[#a31a38] to-[#800f28] text-white shadow-inner">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-200">
            Festive Edit 2026
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight mt-1 drop-shadow-sm">
            {festive.title || festiveData.title}
          </h2>
          <p className="text-white/80 text-xs sm:text-sm font-light mt-1.5 max-w-lg mx-auto">
            {festive.subtitle || festiveData.subtitle}
          </p>
        </div>

        {/* Festive Oval / Arch Shaped Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {items.map((item) => (
            <Link
              key={item.id || item._id}
              to={item.link}
              className="group flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Oval / Capsule Image Frame */}
              <div className="relative w-full aspect-[1/1.6] max-w-[170px] rounded-[100px] overflow-hidden p-1.5 bg-gradient-to-b from-amber-300 via-amber-100 to-amber-400 shadow-xl group-hover:shadow-2xl group-hover:from-amber-200 group-hover:to-amber-500 transition-all">
                <div className="w-full h-full rounded-[95px] overflow-hidden relative">
                  <img
                    src={item.image || item.imageURL}
                    alt={item.title || item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle Shimmer Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Title Under Arch */}
              <div className="mt-3 px-1">
                <p className="text-xs sm:text-[13px] font-semibold text-white/95 leading-tight group-hover:text-amber-200 transition-colors whitespace-pre-line">
                  {item.title || item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestiveSection;
