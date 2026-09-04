import { createSlice } from "@reduxjs/toolkit";

const getSavedWishlist = () => {
  try {
    const raw = localStorage.getItem("wishlistItems");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error loading wishlist from localStorage", e);
    return [];
  }
};

const saveWishlist = (items) => {
  try {
    localStorage.setItem("wishlistItems", JSON.stringify(items));
  } catch (e) {
    console.error("Error saving wishlist to localStorage", e);
  }
};

const initialState = {
  items: getSavedWishlist(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      const id = product._id || product.id || product.productId;
      const exists = state.items.some((item) => (item._id || item.id || item.productId) === id);
      if (!exists) {
        state.items.unshift(product);
        saveWishlist(state.items);
      }
    },
    removeFromWishlist: (state, action) => {
      const payload = action.payload;
      const targetId = typeof payload === "object" && payload !== null
        ? (payload._id || payload.id || payload.productId)
        : payload;
      state.items = state.items.filter(
        (item) => (item._id || item.id || item.productId) !== targetId
      );
      saveWishlist(state.items);
    },
    toggleWishlist: (state, action) => {
      const product = action.payload;
      const id = product._id || product.id || product.productId;
      const index = state.items.findIndex(
        (item) => (item._id || item.id || item.productId) === id
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.unshift(product);
      }
      saveWishlist(state.items);
    },
    clearWishlist: (state) => {
      state.items = [];
      saveWishlist([]);
    },
    setWishlist: (state, action) => {
      state.items = action.payload || [];
      saveWishlist(state.items);
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  clearWishlist,
  setWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
