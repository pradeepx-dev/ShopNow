import { useState } from "react";

const defaultOptions = {
  gender: ["Women", "Men", "Kids"],
  category: [],
  size: ["XS", "S", "M", "L", "XL", "XXL"],
  brand: [],
  discount: [
    { value: "10", label: "10% and above" },
    { value: "20", label: "20% and above" },
    { value: "30", label: "30% and above" },
    { value: "50", label: "50% and above" },
  ],
};

const labels = { gender: "Gender", category: "Category", size: "Size", brand: "Brand", discount: "Discount" };

const valuesFor = (key, facets) =>
  (facets?.[key]?.length ? facets[key] : defaultOptions[key] || []).map((item) =>
    typeof item === "string" ? { value: item, label: item } : { value: item.value || item._id, label: item.label || item._id, count: item.count }
  );

const SearchFilters = ({ filters, facets, onChange, onReset }) => {
  const [open, setOpen] = useState("gender");

  const isChecked = (key, value) => {
    const list = filters[key] || [];
    return list.some((item) => String(item).toLowerCase() === String(value).toLowerCase());
  };

  const toggle = (key, value) => {
    const list = filters[key] || [];
    const exists = list.some((item) => String(item).toLowerCase() === String(value).toLowerCase());
    const updated = exists
      ? list.filter((item) => String(item).toLowerCase() !== String(value).toLowerCase())
      : [...list, value];
    onChange({ ...filters, [key]: updated });
  };

  return (
    <aside className="w-full shrink-0 border border-gray-200 bg-white md:w-64">
      <div className="flex items-center justify-between border-b border-gray-200 p-4">
        <h2 className="text-xl font-bold">Filters</h2>
        <button onClick={onReset} className="text-sm text-[#e91e8c] hover:underline">
          Reset
        </button>
      </div>
      {Object.keys(labels).map((key) => (
        <section key={key} className="border-b border-gray-100 px-4 py-3">
          <button
            onClick={() => setOpen(open === key ? "" : key)}
            className="flex w-full items-center justify-between text-left font-medium text-gray-700"
          >
            {labels[key]}
            <span>{open === key ? "−" : "+"}</span>
          </button>
          {open === key && (
            <div className="mt-3 max-h-44 space-y-2 overflow-y-auto">
              {valuesFor(key, facets).length ? (
                valuesFor(key, facets).map(({ value, label, count }) => (
                  <label key={value} className="flex cursor-pointer items-center justify-between gap-2 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isChecked(key, value)}
                        onChange={() => toggle(key, value)}
                        className="accent-[#e91e8c]"
                      />
                      {label}
                    </span>
                    {count !== undefined && <span className="text-xs text-gray-400">{count}</span>}
                  </label>
                ))
              ) : (
                <p className="text-sm text-gray-400">No options available</p>
              )}
            </div>
          )}
        </section>
      ))}
      <section className="px-4 py-3">
        <button
          onClick={() => setOpen(open === "price" ? "" : "price")}
          className="flex w-full items-center justify-between text-left font-medium text-gray-700"
        >
          Price<span>{open === "price" ? "−" : "+"}</span>
        </button>
        {open === "price" && (
          <div className="mt-3 flex gap-2">
            <input
              type="number"
              min="0"
              value={filters.minPrice || ""}
              onChange={(event) => onChange({ ...filters, minPrice: event.target.value })}
              placeholder="Min"
              className="w-1/2 rounded border border-gray-300 p-2 text-sm"
            />
            <input
              type="number"
              min="0"
              value={filters.maxPrice || ""}
              onChange={(event) => onChange({ ...filters, maxPrice: event.target.value })}
              placeholder="Max"
              className="w-1/2 rounded border border-gray-300 p-2 text-sm"
            />
          </div>
        )}
      </section>
    </aside>
  );
};

export default SearchFilters;
