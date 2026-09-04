import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchFilters from "../components/SearchFilters";
import { searchProducts } from "../services/searchService";

const emptyFilters = () => ({ gender: [], category: [], size: [], brand: [], discount: [], minPrice: "", maxPrice: "" });
const formatPrice = (price) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price || 0);

const Search = () => {
  const [params] = useSearchParams();
  const query = params.get("q") || "";
  const [filters, setFilters] = useState(emptyFilters);
  const [data, setData] = useState({ products: [], total: 0, facets: {} });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;
    let active = true;
    const timer = setTimeout(async () => { try { setLoading(true); setError(""); const result = await searchProducts({ query, filters }); if (active) setData(result); } catch { if (active) setError("We couldn't load search results. Please try again."); } finally { if (active) setLoading(false); } }, 150);
    return () => { active = false; clearTimeout(timer); };
  }, [query, filters]);

  return <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-7">
    <div className="mb-8"><h1 className="text-2xl font-bold text-gray-900">{query ? `Search results for “${query}”` : "Search"}</h1><p className="mt-1 text-sm text-gray-500">{loading ? "Searching…" : `${data.total.toLocaleString()} items found`}</p></div>
    <div className="flex flex-col gap-6 md:flex-row"><SearchFilters filters={filters} facets={data.facets} onChange={setFilters} onReset={() => setFilters(emptyFilters())} />
      <section className="min-w-0 flex-1">{error ? <p className="rounded-lg bg-red-50 p-4 text-red-700">{error}</p> : loading ? <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{Array.from({ length: 8 }).map((_, index) => <div key={index} className="animate-pulse"><div className="aspect-[3/4] bg-gray-200" /><div className="mt-3 h-4 w-3/4 bg-gray-200" /></div>)}</div> : data.products.length === 0 ? <div className="border border-dashed border-gray-300 py-20 text-center text-gray-500">No products found for “{query}”. Try another search or clear the filters.</div> : <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 xl:grid-cols-4">{data.products.map((product) => <Link key={product._id || product.id} to={`/products/${product._id || product.id}`} className="group text-inherit no-underline"><div className="relative aspect-[3/4] overflow-hidden bg-gray-100"><img src={product.imageURL || product.image} alt={product.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />{product.discount > 0 && <span className="absolute left-2 top-2 rounded bg-white px-2 py-1 text-xs font-bold text-[#e91e8c]">{product.discount}% OFF</span>}</div><div className="pt-3"><p className="truncate text-sm font-bold text-gray-900">{product.brand || "ShowNow"}</p><p className="mt-1 truncate text-sm text-gray-600">{product.name}</p><p className="mt-2 text-sm font-semibold text-gray-900">{formatPrice(product.price)}</p></div></Link>)}</div>}</section>
    </div>
  </div>;
};

export default Search;
