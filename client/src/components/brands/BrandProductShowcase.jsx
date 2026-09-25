import { useState, useEffect } from "react";
import { searchProducts } from "../../services/searchService";
import DepartmentProductCard from "../department/DepartmentProductCard";

const sortOptions = [
  { value: "popularity", label: "Popularity" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "discount", label: "Highest Discount" },
  { value: "rating", label: "Customer Rating" },
  { value: "newest", label: "Newest Arrivals" },
];

const BrandProductShowcase = ({ brand, onClearBrand, onNotify }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("popularity");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [facets, setFacets] = useState({ categories: [], genders: [] });
  const [page, setPage] = useState(1);

  useEffect(() => {
    let active = true;
    setLoading(true);

    const filters = {
      brand: brand ? [brand] : undefined,
      gender: selectedGender ? [selectedGender] : undefined,
      category: selectedCategory ? [selectedCategory] : undefined,
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
            genders: res.facets.gender || [],
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching brand products:", err);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [brand, selectedGender, selectedCategory, sortBy, page]);

  return (
    <section id="brand-showcase-section" className="space-y-6 pt-6">
      {/* Brand Store Banner */}
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 text-white shadow-xl">
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-[#e91e8c]/20 blur-2xl" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-400">
                Official Brand Store
              </span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              {brand} Collection
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-lg">
              Explore authentic {brand} merchandise with certified quality, latest season drops, and special offers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClearBrand}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md hover:bg-white/20 transition cursor-pointer"
            >
              <span>← All Brands</span>
            </button>
            <div className="rounded-xl bg-[#e91e8c] px-4 py-2.5 text-xs font-extrabold text-white shadow-md">
              {total} Styles Available
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Filters Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
        {/* Category & Gender Sub-Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Gender filter */}
          {facets.genders && facets.genders.length > 0 && (
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-slate-400 mr-1">For:</span>
              <button
                type="button"
                onClick={() => {
                  setSelectedGender("");
                  setPage(1);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  !selectedGender
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All
              </button>
              {facets.genders.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => {
                    setSelectedGender(selectedGender === g ? "" : g);
                    setPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    selectedGender === g
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          )}

          {/* Category filter */}
          {facets.categories && facets.categories.length > 0 && (
            <div className="flex items-center gap-1 border-l border-slate-200 pl-3 ml-1">
              <span className="text-xs font-bold text-slate-400 mr-1">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setPage(1);
                }}
                className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 outline-none cursor-pointer"
              >
                <option value="">All Categories</option>
                {facets.categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center justify-end gap-2">
          <span className="text-xs font-semibold text-slate-400">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setPage(1);
            }}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 outline-none cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-3 border border-slate-200 animate-pulse space-y-3"
            >
              <div className="aspect-[3/4] bg-slate-200 rounded-xl" />
              <div className="h-4 bg-slate-200 rounded w-1/2" />
              <div className="h-4 bg-slate-200 rounded w-3/4" />
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <p className="text-base font-bold text-slate-900">
            No products match the selected sub-filters for {brand}.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedGender("");
              setSelectedCategory("");
              setPage(1);
            }}
            className="mt-3 text-xs font-bold text-[#e91e8c] hover:underline cursor-pointer"
          >
            Reset Brand Sub-Filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {products.map((product) => (
              <DepartmentProductCard
                key={product._id || product.id}
                product={product}
                onNotify={onNotify}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold disabled:opacity-40"
              >
                ← Prev
              </button>
              <span className="text-xs font-bold text-slate-600 px-2">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold disabled:opacity-40"
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default BrandProductShowcase;
