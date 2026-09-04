import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
};

const slice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(
                (x) => (x.productId || x._id) === (item.productId || item._id)
            );
            if (existingItem) {
                existingItem.quantity = (existingItem.quantity || 1) + (item.quantity || 1);
            } else {
                state.items.push(item);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        removeFromCart: (state, action) => {
            const payload = action.payload;
            const targetId = typeof payload === "object" && payload !== null 
                ? (payload.productId || payload._id) 
                : payload;
            state.items = state.items.filter(
                (x) => (x.productId || x._id) !== targetId
            );
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        updateQuantity: (state, action) => {
            const { id, productId, _id, quantity } = action.payload;
            const targetId = productId || _id || id;
            const item = state.items.find(
                (x) => (x.productId || x._id) === targetId
            );
            if (item) {
                if (quantity > 0) {
                    item.quantity = quantity;
                } else {
                    state.items = state.items.filter(
                        (x) => (x.productId || x._id) !== targetId
                    );
                }
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            }
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem("cartItems");
        }
    },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = slice.actions;
export default slice.reducer;