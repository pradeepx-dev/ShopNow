import axios from "axios";
import { API_BASE_URL } from "../config";

const searchClient = axios.create({ baseURL: API_BASE_URL });

const cleanParams = (params) => Object.fromEntries(
  Object.entries(params).filter(([, value]) => value !== undefined && value !== "" && value !== null),
);

export const getSearchSuggestions = async (query) => {
  const { data } = await searchClient.get("/api/products/suggest", {
    params: { q: query, limit: 6 },
  });
  return data.suggestions || data || [];
};

export const searchProducts = async ({ query, filters, page = 1, limit = 24 }) => {
  const { data } = await searchClient.get("/api/products/search", {
    params: cleanParams({
      q: query,
      page,
      limit,
      gender: filters.gender?.join(","),
      category: filters.category?.join(","),
      size: filters.size?.join(","),
      brand: filters.brand?.join(","),
      price: filters.minPrice || filters.maxPrice ? `${filters.minPrice || ""}-${filters.maxPrice || ""}` : undefined,
      discount: filters.discount?.join(","),
    }),
  });

  return {
    products: data.products || data.results || [],
    total: data.total || data.totalCount || 0,
    facets: data.facets || {
      gender: data.filters?.genders || [],
      category: data.filters?.categories || [],
      size: data.filters?.sizes || [],
      brand: data.filters?.brands || [],
    },
  };
};
