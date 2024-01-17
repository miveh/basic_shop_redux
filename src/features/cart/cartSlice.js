import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    incrementProduct: (state, action) => {
      const index = state.findIndex(
        (item) => item.product.id === action.payload.id
      );
      state[index].count += 1;
    },
    decrementProduct: (state, action) => {
      const index = state.findIndex(
        (item) => item.product.id === action.payload.id
      );
      const count = state[index].count;
      if (count === 1) {
        state = state.filter((item) => item.product.id === action.payload.id);
      } else {
        state[index].count -= 1;
      }
    },
    addProductToCart: (state, action) => {
      const index = state.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (index === -1) {
        state.push({ product: action.payload, count: 1 });
      } else {
        state[index].count += 1;
      }
    },
    removeProductFromCart: (state, action) => {
      const index = state.filter(
        (item) => item.product.id === action.payload.id
      );
    },
    clearCart: (state) => {
      state = [];
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
