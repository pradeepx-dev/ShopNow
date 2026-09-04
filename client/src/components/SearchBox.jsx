import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSearchSuggestions } from "../services/searchService";

const productLabel = (item) => item.name || item.title || item.query || "Search suggestion";

const SearchBox = ({ className = "", onNavigate }) => {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const close = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  useEffect(() => {
    const term = query.trim();
    if (term.length < 2) return undefined;

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const results = await getSearchSuggestions(term);
        setSuggestions(results);
        setOpen(true);
      } catch {
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 250);
    return () => clearTimeout(timer);
  }, [query]);

  const submit = (value = query) => {
    const term = value.trim();
    if (!term) return;
    setOpen(false);
    onNavigate?.();
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <span className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-gray-400 pointer-events-none">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
      </span>
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onFocus={() => query.trim().length >= 2 && setOpen(true)}
        onKeyDown={(event) => event.key === "Enter" && submit()}
        placeholder="Search for products, styles, brands..."
        aria-label="Search products"
        autoComplete="off"
        className="w-full h-[38px] pl-10 pr-9 text-[13px] text-gray-700 bg-gray-100 border border-gray-300 rounded-full outline-none placeholder:text-gray-400 focus:border-[#e91e8c] focus:bg-white focus:ring-3 focus:ring-pink-100"
      />
      {query && <button onClick={() => { setQuery(""); setOpen(false); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700" aria-label="Clear search">×</button>}
      {open && query.trim().length >= 2 && (
        <div className="absolute top-[calc(100%+8px)] left-0 right-0 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl z-50">
          {loading && <p className="px-4 py-3 text-sm text-gray-500">Finding recommendations…</p>}
          {!loading && suggestions.length === 0 && <p className="px-4 py-3 text-sm text-gray-500">Press Enter to search for “{query}”.</p>}
          {!loading && suggestions.map((item, index) => (
            <button key={item._id || item.id || `${productLabel(item)}-${index}`} onMouseDown={(event) => event.preventDefault()} onClick={() => submit(productLabel(item))} className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-pink-50">
              {item.image || item.imageURL ? <img className="h-9 w-9 rounded-md object-cover" src={item.image || item.imageURL} alt="" /> : <span className="text-gray-400">⌕</span>}
              <span><span className="block text-sm font-medium text-gray-800">{productLabel(item)}</span>{item.brand && <span className="block text-xs text-gray-500">{item.brand}</span>}</span>
            </button>
          ))}
          {!loading && suggestions.length > 0 && <button onClick={() => submit()} className="w-full border-t border-gray-100 px-4 py-3 text-left text-sm font-semibold text-[#e91e8c] hover:bg-pink-50">Search all results for “{query}”</button>}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
