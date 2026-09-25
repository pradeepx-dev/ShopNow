const DepartmentTrendingHighlights = ({ highlights = [], onSelectHighlight }) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e91e8c]">
          Spotlight Themes
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Trending Department Highlights
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onSelectHighlight && onSelectHighlight(item)}
            className="group relative overflow-hidden rounded-3xl bg-slate-900 p-5 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer min-h-[200px] flex flex-col justify-between"
          >
            {/* Image background */}
            <div className="absolute inset-0 z-0">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-60"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient || "from-black/80 via-black/40 to-transparent"}`} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-pink-200">
                {item.tag || "TRENDING"}
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-black leading-snug text-white group-hover:text-pink-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-200 mt-1 line-clamp-1">
                {item.subtitle || "Explore curated styles"}
              </p>
              <div className="mt-2.5 flex items-center gap-1.5 text-xs font-bold text-pink-300 group-hover:text-white transition-colors">
                <span>Shop Edit</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentTrendingHighlights;
