import { useEffect, useState, useCallback, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchFilters from "../components/SearchFilters";
import { searchProducts } from "../services/searchService";

const GENDER_KEYWORDS = ["kids", "men", "women", "unisex"];

const parseParamsToFilters = (searchParams) => {
  const getList = (key) => {
    const val = searchParams.get(key);
    return val ? val.split(",").map((s) => s.trim()).filter(Boolean) : [];
  };

  const rawCategories = getList("category");
  const rawGenders = getList("gender");

  const genders = [...rawGenders];
  const categories = [];

  for (const cat of rawCategories) {
    if (cat.toLowerCase() === "all") continue;
    const lower = cat.toLowerCase();
    if (GENDER_KEYWORDS.includes(lower)) {
      const formatted = cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
      if (!genders.includes(formatted)) {
        genders.push(formatted);
      }
    } else {
      categories.push(cat);
    }
  }

  return {
    gender: genders,
    category: categories,
    size: getList("size"),
    brand: getList("brand"),
    discount: getList("discount"),
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
  };
};

const emptyFilters = () => ({
  gender: [],
  category: [],
  size: [],
  brand: [],
  discount: [],
  minPrice: "",
  maxPrice: "",
});

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price || 0);

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || searchParams.get("query") || searchParams.get("tag") || "";
  const [filters, setFilters] = useState(() => parseParamsToFilters(searchParams));
  const [data, setData] = useState({ products: [], total: 0, facets: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Keep filters in sync when URL search params change externally
  useEffect(() => {
    setFilters(parseParamsToFilters(searchParams));
  }, [searchParams]);

  // Execute search when query or filters change
  useEffect(() => {
    let active = true;
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");
        const result = await searchProducts({ query, filters });
        if (active) {
          setData(result);
        }
      } catch {
        if (active) {
          setError("We couldn't load search results. Please try again.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }, 150);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [query, filters]);

  const handleFiltersChange = useCallback((newFilters) => {
    setFilters(newFilters);
    const newParams = new URLSearchParams();
    if (query) newParams.set("q", query);
    if (newFilters.gender?.length) newParams.set("gender", newFilters.gender.join(","));
    if (newFilters.category?.length) newParams.set("category", newFilters.category.join(","));
    if (newFilters.size?.length) newParams.set("size", newFilters.size.join(","));
    if (newFilters.brand?.length) newParams.set("brand", newFilters.brand.join(","));
    if (newFilters.discount?.length) newParams.set("discount", newFilters.discount.join(","));
    if (newFilters.minPrice) newParams.set("minPrice", newFilters.minPrice);
    if (newFilters.maxPrice) newParams.set("maxPrice", newFilters.maxPrice);

    setSearchParams(newParams, { replace: true });
  }, [query, setSearchParams]);

  const handleReset = useCallback(() => {
    const cleared = emptyFilters();
    setFilters(cleared);
    const newParams = new URLSearchParams();
    if (query) newParams.set("q", query);
    setSearchParams(newParams, { replace: true });
  }, [query, setSearchParams]);

  const pageTitle = useMemo(() => {
    if (query) return `Search results for “${query}”`;
    if (filters.gender?.length) return `${filters.gender.join(", ")} Collection`;
    if (filters.category?.length) return `${filters.category.join(", ")} Collection`;
    if (filters.brand?.length) return `${filters.brand.join(", ")} Products`;
    return "All Products";
  }, [query, filters]);

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-7">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{pageTitle}</h1>
        <p className="mt-1 text-sm text-gray-500">
          {loading ? "Searching…" : `${data.total.toLocaleString()} items found`}
        </p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <SearchFilters
          filters={filters}
          facets={data.facets}
          onChange={handleFiltersChange}
          onReset={handleReset}
        />

        <section className="min-w-0 flex-1">
          {error ? (
            <p className="rounded-lg bg-red-50 p-4 text-red-700">{error}</p>
          ) : loading ? (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="aspect-[3/4] bg-gray-200" />
                  <div className="mt-3 h-4 w-3/4 bg-gray-200" />
                </div>
              ))}
            </div>
          ) : data.products.length === 0 ? (
            <div className="border border-dashed border-gray-300 py-20 text-center text-gray-500">
              No products found{query ? ` for “${query}”` : ""}. Try another search or clear the filters.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 xl:grid-cols-4">
              {data.products.map((product) => (
                <Link
                  key={product._id || product.id}
                  to={`/products/${product._id || product.id}`}
                  className="group text-inherit no-underline"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    <img
                      src={product.imageURL || product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    {product.discount > 0 && (
                      <span className="absolute left-2 top-2 rounded bg-white px-2 py-1 text-xs font-bold text-[#e91e8c]">
                        {product.discount}% OFF
                      </span>
                    )}
                  </div>
                  <div className="pt-3">
                    <p className="truncate text-sm font-bold text-gray-900">
                      {product.brand || "ShopNow"}
                    </p>
                    <p className="mt-1 truncate text-sm text-gray-600">{product.name}</p>
                    <p className="mt-2 text-sm font-semibold text-gray-900">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Search;
