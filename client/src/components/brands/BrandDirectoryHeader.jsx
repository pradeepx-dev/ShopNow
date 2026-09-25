const alphabet = [
  "All", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const categoryFilters = [
  "All", "Clothing", "Shoes", "Watches", "Bags", "Jewellery", "Tech Accessories"
];

const BrandDirectoryHeader = ({
  searchQuery = "",
  onSearchChange,
  activeLetter = "All",
  onSelectLetter,
  activeCategory = "All",
  onSelectCategory,
  totalBrands = 0,
}) => {
  return (
    <div className="space-y-6 mb-8">
      {/* Search and Stats Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Brand Search Input */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search 140+ brands (e.g. Adidas, Nike, FabIndia)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-xs sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none shadow-xs transition-all"
          />
          <svg
            className="absolute left-3.5 top-3.5 text-slate-400"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-900 text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>

        {/* Counter Badge */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
          <span className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-extrabold">
            {totalBrands} Brands
          </span>
          <span>100% Genuine Certified</span>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
        {categoryFilters.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                isSelected
                  ? "bg-slate-900 text-white shadow-xs"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* A-Z Alphabetical Quick Jump Bar */}
      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1.5 px-1 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
        {alphabet.map((letter) => {
          const isSelected = activeLetter === letter;
          return (
            <button
              key={letter}
              type="button"
              onClick={() => onSelectLetter(letter)}
              className={`h-8 min-w-[28px] px-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#e91e8c] text-white shadow-xs scale-105"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BrandDirectoryHeader;
