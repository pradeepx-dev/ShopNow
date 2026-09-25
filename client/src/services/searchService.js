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

export const searchProducts = async ({ query = "", filters = {}, sort = "popularity", page = 1, limit = 24 }) => {
  const { data } = await searchClient.get("/api/products/search", {
    params: cleanParams({
      q: query,
      page,
      limit,
      sort: filters.sort || sort,
      gender: Array.isArray(filters.gender) ? filters.gender.join(",") : filters.gender,
      category: Array.isArray(filters.category) ? filters.category.join(",") : filters.category,
      size: Array.isArray(filters.size) ? filters.size.join(",") : filters.size,
      brand: Array.isArray(filters.brand) ? filters.brand.join(",") : filters.brand,
      price: filters.minPrice || filters.maxPrice ? `${filters.minPrice || ""}-${filters.maxPrice || ""}` : undefined,
      discount: Array.isArray(filters.discount) ? filters.discount.join(",") : filters.discount,
    }),
  });

  return {
    products: data.products || data.results || [],
    total: data.total || data.totalCount || 0,
    page: data.page || page,
    pages: data.pages || Math.ceil((data.total || 0) / limit) || 1,
    facets: data.facets || {
      gender: data.filters?.genders || [],
      category: data.filters?.categories || [],
      size: data.filters?.sizes || [],
      brand: data.filters?.brands || [],
    },
  };
};

export const getBrandsSummary = async () => {
  const { data } = await searchClient.get("/api/products/brands");
  return {
    brands: data.brands || [],
    total: data.total || (data.brands?.length || 0),
  };
};
