import { useState } from "react";

const WishlistToolbar = ({
  itemCount,
  activeFilter,
  onFilterChange,
  sortBy,
  onSortChange,
  onMoveAllToBag,
  onClearWishlist,
  onShareWishlist,
}) => {
  const [confirmClear, setConfirmClear] = useState(false);

  const filters = [
    { id: "all", label: "All Items" },
    { id: "inStock", label: "In Stock" },
    { id: "onSale", label: "On Sale" },
  ];

  const sortOptions = [
    { id: "newest", label: "Recently Added" },
    { id: "priceLowHigh", label: "Price: Low to High" },
    { id: "priceHighLow", label: "Price: High to Low" },
    { id: "discount", label: "Highest Discount" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs mb-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => onFilterChange(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Right: Sort and Batch Actions */}
        <div className="flex items-center justify-between sm:justify-end gap-2.5 flex-wrap">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
              Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 outline-none hover:border-slate-300 focus:border-slate-900 focus:bg-white transition-colors cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            {/* Share Wishlist */}
            <button
              type="button"
              onClick={onShareWishlist}
              title="Share Wishlist"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              <span className="hidden md:inline">Share</span>
            </button>

            {/* Move All to Bag */}
            {itemCount > 0 && (
              <button
                type="button"
                onClick={onMoveAllToBag}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0d1f33] text-xs sm:text-sm font-semibold text-white hover:bg-[#163454] transition-all shadow-xs cursor-pointer"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span>Move All to Bag</span>
              </button>
            )}

            {/* Clear All */}
            {itemCount > 0 && (
              confirmClear ? (
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      onClearWishlist();
                      setConfirmClear(false);
                    }}
                    className="px-2.5 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-700 transition cursor-pointer"
                  >
                    Confirm Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmClear(false)}
                    className="px-2 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200 transition cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmClear(true)}
                  className="px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-all cursor-pointer"
                >
                  Clear All
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistToolbar;
