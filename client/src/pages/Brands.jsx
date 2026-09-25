import { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getBrandsSummary } from "../services/searchService";
import BrandDirectoryHeader from "../components/brands/BrandDirectoryHeader";
import BrandCard from "../components/brands/BrandCard";
import BrandProductShowcase from "../components/brands/BrandProductShowcase";

const Brands = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlBrand = searchParams.get("brand") || "";

  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState(urlBrand);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [toast, setToast] = useState(null);

  // Sync selectedBrand with URL query param
  useEffect(() => {
    if (urlBrand) {
      setSelectedBrand(urlBrand);
    }
  }, [urlBrand]);

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

  // Fetch Aggregated Brands from Database
  useEffect(() => {
    let active = true;
    setLoading(true);

    getBrandsSummary()
      .then((res) => {
        if (!active) return;
        setBrands(res.brands || []);
      })
      .catch((err) => {
        console.error("Error fetching brands summary:", err);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  // Filter Brands list by search, letter, category
  const filteredBrands = useMemo(() => {
    return brands.filter((item) => {
      const bName = String(item.brand || "");

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = bName.toLowerCase().includes(q);
        const matchesCategory = (item.categories || []).some((c) =>
          c.toLowerCase().includes(q)
        );
        if (!matchesName && !matchesCategory) return false;
      }

      // Letter filter
      if (activeLetter !== "All") {
        if (!bName.toUpperCase().startsWith(activeLetter.toUpperCase())) return false;
      }

      // Category filter
      if (activeCategory !== "All") {
        const hasCategory = (item.categories || []).some(
          (c) => c.toLowerCase() === activeCategory.toLowerCase()
        );
        if (!hasCategory) return false;
      }

      return true;
    });
  }, [brands, searchQuery, activeLetter, activeCategory]);

  const handleSelectBrand = (brandName) => {
    setSelectedBrand(brandName);
    setSearchParams({ brand: brandName });
    // Smooth scroll to showcase section
    setTimeout(() => {
      const el = document.getElementById("brand-showcase-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleClearBrand = () => {
    setSelectedBrand("");
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
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
          <span className="text-slate-800 font-semibold">All Brands Directory</span>
          {selectedBrand && (
            <>
              <span>/</span>
              <span className="text-[#e91e8c] font-bold">{selectedBrand}</span>
            </>
          )}
        </nav>

        {/* Hero Header Banner */}
        <section className="relative overflow-hidden rounded-[32px] bg-slate-950 text-white shadow-xl mb-8 p-6 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-tr from-[#e91e8c]/30 to-[#ff6b35]/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold tracking-widest uppercase text-white backdrop-blur-md border border-white/15">
              <span>✦</span>
              <span>100% Certified Authentic Stores</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-none">
              THE BRAND DIRECTORY
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Discover over {brands.length || 140} leading international & homegrown labels. Explore official brand stores and shop authentic fashion, footwear, watches and tech accessories.
            </p>
          </div>
        </section>

        {/* Active Selected Brand Product Showcase */}
        {selectedBrand && (
          <div className="mb-14">
            <BrandProductShowcase
              brand={selectedBrand}
              onClearBrand={handleClearBrand}
              onNotify={showNotification}
            />
          </div>
        )}

        {/* Brand Directory Discovery Header (Search, Categories, A-Z) */}
        <div className="mt-8">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e91e8c]">
              Brand Index
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Browse All Brands ({filteredBrands.length})
            </h2>
          </div>

          <BrandDirectoryHeader
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeLetter={activeLetter}
            onSelectLetter={setActiveLetter}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            totalBrands={brands.length}
          />

          {/* Brand Cards Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-white p-5 border border-slate-200 animate-pulse space-y-4"
                >
                  <div className="h-6 bg-slate-200 rounded w-1/2" />
                  <div className="h-24 bg-slate-200 rounded-2xl" />
                </div>
              ))}
            </div>
          ) : filteredBrands.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                🔍
              </div>
              <h3 className="text-base font-bold text-slate-900">No Brands Found</h3>
              <p className="text-xs text-slate-500 mt-1">
                {searchQuery
                  ? `No brand matching "${searchQuery}" under ${activeCategory}`
                  : `No brands under letter "${activeLetter}"`}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveLetter("All");
                  setActiveCategory("All");
                }}
                className="mt-4 inline-flex items-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-bold text-white hover:bg-[#e91e8c] transition cursor-pointer"
              >
                Show All Brands
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredBrands.map((item) => (
                <BrandCard
                  key={item.brand}
                  brandData={item}
                  isSelected={selectedBrand.toLowerCase() === item.brand.toLowerCase()}
                  onSelectBrand={handleSelectBrand}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Brands;
