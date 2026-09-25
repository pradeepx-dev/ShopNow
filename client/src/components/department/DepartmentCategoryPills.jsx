import { useRef } from "react";

const DepartmentCategoryPills = ({
  categories = [],
  selectedCategory = "",
  onSelectCategory,
}) => {
  const scrollRef = useRef(null);

  const handleScroll = (dir) => {
    if (scrollRef.current) {
      const offset = dir === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  if (!categories || categories.length === 0) return null;

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e91e8c]">
            Browse by Wardrobe
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Popular Categories
          </h2>
        </div>

        {/* Carousel arrows */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition shadow-2xs cursor-pointer"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition shadow-2xs cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      {/* Categories Scroll Track */}
      <div
        ref={scrollRef}
        className="flex items-center gap-3.5 overflow-x-auto no-scrollbar py-2 px-1"
      >
        {/* "All" Pill */}
        <button
          type="button"
          onClick={() => onSelectCategory("")}
          className={`flex flex-col items-center justify-center min-w-[105px] sm:min-w-[125px] p-3 rounded-2xl border transition-all duration-200 cursor-pointer shrink-0 ${
            !selectedCategory
              ? "border-slate-900 bg-slate-900 text-white shadow-md scale-102"
              : "border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
          }`}
        >
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#e91e8c]/20 to-[#ff6b35]/20 text-2xl mb-2">
            ✨
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-tight text-center">
            All Items
          </span>
          <span className="text-[10px] opacity-70 mt-0.5">Explore All</span>
        </button>

        {/* Category Pills */}
        {categories.map((cat) => {
          const isSelected =
            String(selectedCategory).toLowerCase() === String(cat.name || cat.title || cat).toLowerCase();

          const name = cat.name || cat.title || cat;
          const img =
            cat.image ||
            cat.imageURL ||
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=300&q=80";

          return (
            <button
              key={name}
              type="button"
              onClick={() => onSelectCategory(isSelected ? "" : name)}
              className={`group flex flex-col items-center justify-between min-w-[105px] sm:min-w-[130px] p-2.5 sm:p-3 rounded-2xl border transition-all duration-200 cursor-pointer shrink-0 ${
                isSelected
                  ? "border-[#e91e8c] bg-pink-50/50 text-[#e91e8c] shadow-md scale-102 ring-2 ring-pink-200"
                  : "border-slate-200/90 bg-white text-slate-800 hover:border-slate-300 hover:shadow-sm"
              }`}
            >
              <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl overflow-hidden bg-slate-100 mb-2 border border-slate-100">
                <img
                  src={img}
                  alt={name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-center truncate max-w-[110px]">
                {name}
              </span>
              {cat.offer && (
                <span className="text-[10px] font-extrabold text-[#e91e8c] mt-0.5">
                  {cat.offer}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default DepartmentCategoryPills;
