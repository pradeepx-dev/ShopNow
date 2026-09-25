import { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchProducts } from "../../services/searchService";
import DepartmentHero from "./DepartmentHero";
import DepartmentCategoryPills from "./DepartmentCategoryPills";
import DepartmentTrendingHighlights from "./DepartmentTrendingHighlights";
import DepartmentProductCard from "./DepartmentProductCard";

const sortOptions = [
  { value: "popularity", label: "Recommended & Popular" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "discount", label: "Highest Discount" },
  { value: "rating", label: "Customer Rating" },
  { value: "newest", label: "Newest Arrivals" },
];

const discountOptions = [
  { value: 10, label: "10% and above" },
  { value: 20, label: "20% and above" },
  { value: 30, label: "30% and above" },
  { value: 50, label: "50% and above" },
  { value: 70, label: "70% and above" },
];

const priceRangesList = [
  { label: "Under ₹999", min: 0, max: 999 },
  { label: "₹999 - ₹1,999", min: 999, max: 1999 },
  { label: "₹1,999 - ₹3,999", min: 1999, max: 3999 },
  { label: "₹3,999 - ₹7,999", min: 3999, max: 7999 },
  { label: "₹7,999 & Above", min: 7999, max: 100000 },
];

const DepartmentPage = ({
  department = "Women",
  heroConfig = {},
  categoryPills = [],
  trendingHighlights = [],
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get("brand") || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDiscount, setSelectedDiscount] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [page, setPage] = useState(1);

  // Data State
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [facets, setFacets] = useState({ categories: [], brands: [], sizes: [] });
  const [loading, setLoading] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Auto dismiss toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showNotification = (message, type = "success") => {
    setToast({ message, type });
  };

  // Sync category or brand from URL query params
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat !== null) setSelectedCategory(cat);
    const br = searchParams.get("brand");
    if (br !== null) setSelectedBrand(br);
  }, [searchParams]);

  // Fetch Department Products from Database
  useEffect(() => {
    let active = true;
    setLoading(true);

    const priceFilter = selectedPriceRange
      ? priceRangesList.find((p) => p.label === selectedPriceRange)
      : null;

    const filters = {
      gender: [department],
      category: selectedCategory ? [selectedCategory] : undefined,
      brand: selectedBrand ? [selectedBrand] : undefined,
      size: selectedSize ? [selectedSize] : undefined,
      discount: selectedDiscount ? [Number(selectedDiscount)] : undefined,
      minPrice: priceFilter ? priceFilter.min : undefined,
      maxPrice: priceFilter ? priceFilter.max : undefined,
      sort: sortBy,
    };

    searchProducts({
      query: "",
      filters,
      sort: sortBy,
      page,
      limit: 20,
    })
      .then((res) => {
        if (!active) return;
        setProducts(res.products || []);
        setTotal(res.total || 0);
        setTotalPages(res.pages || 1);
        if (res.facets) {
          setFacets({
            categories: res.facets.category || [],
            brands: res.facets.brand || [],
            sizes: res.facets.size || [],
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching department products:", err);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [
    department,
    selectedCategory,
    selectedBrand,
    selectedSize,
    selectedDiscount,
    selectedPriceRange,
    sortBy,
    page,
  ]);

  const handleResetFilters = () => {
    setSelectedCategory("");
    setSelectedBrand("");
    setSelectedSize("");
    setSelectedDiscount("");
    setSelectedPriceRange("");
    setPage(1);
    setSearchParams({});
  };

  const activeFiltersCount = [
    selectedCategory,
    selectedBrand,
    selectedSize,
    selectedDiscount,
    selectedPriceRange,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-slate-50/50 pb-16">
      {/* Toast Notification Container */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl bg-slate-900 px-5 py-3.5 text-white shadow-2xl transition-all duration-300 animate-bounce-short">
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
              toast.type === "success"
                ? "bg-emerald-500 text-white"
                : toast.type === "error"
                ? "bg-rose-500 text-white"
                : "bg-indigo-500 text-white"
            }`}
          >
            {toast.type === "success" ? "✓" : "ℹ"}
          </span>
          <p className="text-sm font-semibold">{toast.message}</p>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="ml-2 text-slate-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
      )}

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-4">
        {/* Breadcrumb Navigation */}
        <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-slate-400">
          <Link to="/" className="hover:text-slate-900 transition-colors no-underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">{department} Department</span>
          {selectedCategory && (
            <>
              <span>/</span>
              <span className="text-[#e91e8c] font-bold">{selectedCategory}</span>
            </>
          )}
        </nav>

        {/* 1. Curated Department Hero Banner */}
        <DepartmentHero
          department={department}
          itemCount={total}
          {...heroConfig}
        />

        {/* 2. Visual Category Pills */}
        <DepartmentCategoryPills
          categories={categoryPills.length > 0 ? categoryPills : facets.categories}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setPage(1);
          }}
        />

        {/* 3. Thematic Highlights / Trend Edits */}
        {trendingHighlights && trendingHighlights.length > 0 && !selectedCategory && (
          <DepartmentTrendingHighlights
            highlights={trendingHighlights}
            onSelectHighlight={(item) => {
              if (item.category) setSelectedCategory(item.category);
              if (item.brand) setSelectedBrand(item.brand);
              setPage(1);
            }}
          />
        )}

        {/* 4. Main Catalog Section Anchor */}
        <div id="department-catalog" className="pt-4">
          {/* Catalog Top Toolbar */}
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer shadow-xs"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="10" x2="20" y1="12" y2="12" />
                  <line x1="14" x2="20" y1="18" y2="18" />
                </svg>
                <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
              </button>

              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                  {selectedCategory || `${department}'s Styles`}
                </h3>
                <p className="text-xs text-slate-500">
                  {loading ? "Searching catalog..." : `${total.toLocaleString()} products available`}
                </p>
              </div>
            </div>

            {/* Right: Sort dropdown */}
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
                Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setPage(1);
                }}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-700 outline-none hover:border-slate-300 focus:border-slate-900 focus:bg-white transition-all cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filter Chips */}
          {activeFiltersCount > 0 && (
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400">Active Filters:</span>
              {selectedCategory && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-50 border border-pink-200 px-3 py-1 text-xs font-bold text-[#e91e8c]">
                  Category: {selectedCategory}
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("")}
                    className="hover:text-black cursor-pointer"
                  >
                    ✕
                  </button>
                </span>
              )}
              {selectedBrand && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700">
                  Brand: {selectedBrand}
                  <button
                    type="button"
                    onClick={() => setSelectedBrand("")}
                    className="hover:text-black cursor-pointer"
                  >
                    ✕
                  </button>
                </span>
              )}
              {selectedSize && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-bold text-slate-700">
                  Size: {selectedSize}
                  <button
                    type="button"
                    onClick={() => setSelectedSize("")}
                    className="hover:text-black cursor-pointer"
                  >
                    ✕
                  </button>
                </span>
              )}
              {selectedDiscount && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-800">
                  Discount: {selectedDiscount}%+
                  <button
                    type="button"
                    onClick={() => setSelectedDiscount("")}
                    className="hover:text-black cursor-pointer"
                  >
                    ✕
                  </button>
                </span>
              )}
              {selectedPriceRange && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-800">
                  Price: {selectedPriceRange}
                  <button
                    type="button"
                    onClick={() => setSelectedPriceRange("")}
                    className="hover:text-black cursor-pointer"
                  >
                    ✕
                  </button>
                </span>
              )}
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-bold text-rose-600 hover:underline cursor-pointer ml-1"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Main Grid: Sidebar Filters + Products Grid */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Desktop Filter Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0 rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xs sticky top-24 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h4 className="text-sm font-black uppercase tracking-wider text-slate-900">
                  Filters
                </h4>
                {activeFiltersCount > 0 && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="text-xs font-bold text-[#e91e8c] hover:underline cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Category
                </span>
                <div className="max-h-40 overflow-y-auto space-y-1.5 no-scrollbar pr-1">
                  {facets.categories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategory === cat}
                        onChange={() => {
                          setSelectedCategory(selectedCategory === cat ? "" : cat);
                          setPage(1);
                        }}
                        className="rounded border-slate-300 text-slate-900 focus:ring-0 accent-slate-900"
                      />
                      <span className="truncate">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Brand
                </span>
                <div className="max-h-40 overflow-y-auto space-y-1.5 no-scrollbar pr-1">
                  {facets.brands.slice(0, 15).map((br) => (
                    <label
                      key={br}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedBrand === br}
                        onChange={() => {
                          setSelectedBrand(selectedBrand === br ? "" : br);
                          setPage(1);
                        }}
                        className="rounded border-slate-300 text-slate-900 focus:ring-0 accent-slate-900"
                      />
                      <span className="truncate">{br}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Price
                </span>
                <div className="space-y-1.5">
                  {priceRangesList.map((pr) => (
                    <label
                      key={pr.label}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="priceRange"
                        checked={selectedPriceRange === pr.label}
                        onChange={() => {
                          setSelectedPriceRange(selectedPriceRange === pr.label ? "" : pr.label);
                          setPage(1);
                        }}
                        className="text-slate-900 focus:ring-0 accent-slate-900"
                      />
                      <span>{pr.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Discount Filter */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Discount
                </span>
                <div className="space-y-1.5">
                  {discountOptions.map((disc) => (
                    <label
                      key={disc.value}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="discount"
                        checked={Number(selectedDiscount) === disc.value}
                        onChange={() => {
                          setSelectedDiscount(Number(selectedDiscount) === disc.value ? "" : disc.value);
                          setPage(1);
                        }}
                        className="text-slate-900 focus:ring-0 accent-slate-900"
                      />
                      <span>{disc.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid Content Area */}
            <main className="min-w-0 flex-1 w-full">
              {loading ? (
                /* Loading Skeleton Grid */
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white p-3 border border-slate-200 animate-pulse space-y-3"
                    >
                      <div className="aspect-[3/4] bg-slate-200 rounded-xl" />
                      <div className="h-4 bg-slate-200 rounded w-1/2" />
                      <div className="h-4 bg-slate-200 rounded w-3/4" />
                      <div className="h-6 bg-slate-200 rounded" />
                    </div>
                  ))}
                </div>
              ) : products.length === 0 ? (
                /* Empty Product State */
                <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 sm:p-16 text-center shadow-inner">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50 text-3xl">
                    🛍️
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    No Products Found
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1">
                    We could not find any {department.toLowerCase()} items matching your specific filters. Try resetting the filters or exploring other categories.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-xs font-bold text-white hover:bg-[#e91e8c] transition-all cursor-pointer"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <>
                  {/* Products Grid: 2 cols on mobile, 3 on tablet, 4 on xl desktop */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                    {products.map((product) => (
                      <DepartmentProductCard
                        key={product._id || product.id}
                        product={product}
                        onNotify={showNotification}
                      />
                    ))}
                  </div>

                  {/* Pagination / Page Controls */}
                  {totalPages > 1 && (
                    <div className="mt-12 flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setPage((p) => Math.max(1, p - 1));
                          window.scrollTo({ top: 500, behavior: "smooth" });
                        }}
                        disabled={page === 1}
                        className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition cursor-pointer"
                      >
                        ← Prev
                      </button>

                      {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                        const pageNum = i + 1;
                        return (
                          <button
                            key={pageNum}
                            type="button"
                            onClick={() => {
                              setPage(pageNum);
                              window.scrollTo({ top: 500, behavior: "smooth" });
                            }}
                            className={`h-9 w-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              page === pageNum
                                ? "bg-slate-900 text-white shadow-xs"
                                : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}

                      <button
                        type="button"
                        onClick={() => {
                          setPage((p) => Math.min(totalPages, p + 1));
                          window.scrollTo({ top: 500, behavior: "smooth" });
                        }}
                        disabled={page === totalPages}
                        className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition cursor-pointer"
                      >
                        Next →
                      </button>
                    </div>
                  )}
                </>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in lg:hidden">
          <div className="relative h-full w-full max-w-xs bg-white p-6 overflow-y-auto flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-base font-black text-slate-900">Filters</h3>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="text-slate-400 hover:text-slate-900 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Category
                </span>
                <div className="max-h-40 overflow-y-auto space-y-2">
                  {facets.categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <input
                        type="checkbox"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(selectedCategory === cat ? "" : cat)}
                        className="accent-slate-900"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Brand
                </span>
                <div className="max-h-40 overflow-y-auto space-y-2">
                  {facets.brands.slice(0, 15).map((br) => (
                    <label key={br} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <input
                        type="checkbox"
                        checked={selectedBrand === br}
                        onChange={() => setSelectedBrand(selectedBrand === br ? "" : br)}
                        className="accent-slate-900"
                      />
                      <span>{br}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex gap-2">
              <button
                type="button"
                onClick={handleResetFilters}
                className="flex-1 rounded-xl border border-slate-200 py-3 text-xs font-bold text-slate-700"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 rounded-xl bg-slate-900 py-3 text-xs font-bold text-white"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentPage;
