const BrandCard = ({ brandData, isSelected = false, onSelectBrand }) => {
  const {
    brand = "Brand",
    count = 0,
    categories = [],
    sampleImages = [],
    maxDiscount = 0,
    avgRating = 4.5,
  } = brandData;

  const images = sampleImages && sampleImages.length > 0 ? sampleImages.slice(0, 3) : [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80"
  ];

  return (
    <article
      onClick={() => onSelectBrand && onSelectBrand(brand)}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${
        isSelected
          ? "border-[#e91e8c] ring-2 ring-pink-300 shadow-md scale-102 bg-pink-50/10"
          : "border-slate-200/90 hover:border-slate-300 shadow-xs"
      }`}
    >
      {/* Brand Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e91e8c]">
              Official Store
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight group-hover:text-[#e91e8c] transition-colors truncate max-w-[180px]">
              {brand}
            </h3>
          </div>

          <span className="rounded-full bg-slate-900 text-white px-2.5 py-1 text-[11px] font-extrabold shrink-0 shadow-2xs">
            {count} {count === 1 ? "style" : "styles"}
          </span>
        </div>

        {/* Categories Chips */}
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {categories.slice(0, 3).map((cat) => (
              <span
                key={cat}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 truncate max-w-[110px]"
              >
                {cat}
              </span>
            ))}
            {maxDiscount > 0 && (
              <span className="rounded-md bg-rose-50 px-2 py-0.5 text-[10px] font-black text-rose-600 border border-rose-100">
                Upto {maxDiscount}% Off
              </span>
            )}
          </div>
        )}
      </div>

      {/* 3-Image Product Preview Collage */}
      <div className="grid grid-cols-3 gap-2 my-2 rounded-2xl overflow-hidden bg-slate-50 p-1.5 border border-slate-100">
        {images.map((img, i) => (
          <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl bg-slate-200">
            <img
              src={img}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
        {images.length < 3 &&
          Array.from({ length: 3 - images.length }).map((_, idx) => (
            <div
              key={`empty-${idx}`}
              className="aspect-[3/4] rounded-xl bg-slate-100 flex items-center justify-center text-xs text-slate-300 font-bold"
            >
              ✦
            </div>
          ))}
      </div>

      {/* Brand Footer Action */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1 font-bold text-slate-700">
          <span>{Number(avgRating || 4.5).toFixed(1)}</span>
          <span className="text-amber-500 text-xs">★</span>
        </div>

        <span
          className={`font-bold transition-colors flex items-center gap-1 ${
            isSelected ? "text-[#e91e8c]" : "text-slate-900 group-hover:text-[#e91e8c]"
          }`}
        >
          <span>{isSelected ? "Active Store" : "View Products"}</span>
          <span>→</span>
        </span>
      </div>
    </article>
  );
};

export default BrandCard;
