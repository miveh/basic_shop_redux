import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    incrementProduct: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.product.id === action.payload.id
      );
      state.cartItems[index].count += 1;
    },
    decrementProduct: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.product.id === action.payload.id
      );
      const count = state.cartItems[index].count;
      if (count === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.product.id === action.payload.id
        );
      } else {
        state.cartItems[index].count -= 1;
      }
    },
    addProductToCart: (state, action) => {
      state.cartItems.push({ product: action.payload, count: 1 });
    },
    removeProductFromCart: (state, action) => {
      const index = state.cartItems.filter(
        (item) => item.product.id === action.payload.id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  incrementProduct,
  decrementProduct,
  addProductToCart,
  removeProductFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
