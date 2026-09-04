import axios from "axios";
import {
  heroBannerData,
  categoryPills,
  hotCategories,
  festiveData,
  hiddenGemsData,
  shoppableFeed,
  spotlightBrands,
  trendPicks
} from "../data/homeData";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 8000
});

// Fallback initial dataset from static bundle
export const defaultHomeData = {
  heroBanner: heroBannerData,
  categoryPills: categoryPills,
  hotCategories: hotCategories,
  festive: festiveData,
  hiddenGems: hiddenGemsData,
  shoppableFeed: shoppableFeed,
  spotlightBrands: spotlightBrands,
  trendPicks: trendPicks
};

/**
 * Fetch homepage section data directly from MongoDB database.
 * Returns live database products, images, categories, and prices.
 */
export const getHomePageData = async () => {
  try {
    const response = await apiClient.get("/api/products/homepage");
    if (response.data && typeof response.data === "object") {
      return {
        heroBanner: response.data.heroBanner || defaultHomeData.heroBanner,
        categoryPills: response.data.categoryPills?.length ? response.data.categoryPills : defaultHomeData.categoryPills,
        hotCategories: response.data.hotCategories?.length ? response.data.hotCategories : defaultHomeData.hotCategories,
        festive: response.data.festive?.items?.length ? response.data.festive : defaultHomeData.festive,
        hiddenGems: response.data.hiddenGems?.brands?.length ? response.data.hiddenGems : defaultHomeData.hiddenGems,
        shoppableFeed: response.data.shoppableFeed?.length ? response.data.shoppableFeed : defaultHomeData.shoppableFeed,
        spotlightBrands: response.data.spotlightBrands?.length ? response.data.spotlightBrands : defaultHomeData.spotlightBrands,
        trendPicks: response.data.trendPicks?.length ? response.data.trendPicks : defaultHomeData.trendPicks
      };
    }
    return defaultHomeData;
  } catch (error) {
    console.warn("Could not fetch live homepage data from database, using cached data:", error.message);
    return defaultHomeData;
  }
};
