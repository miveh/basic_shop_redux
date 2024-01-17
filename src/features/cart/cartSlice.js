import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.product.id === action.payload.id
      );
      state.cartItems[index].count += 1;
    },
    decrement: (state, action) => {
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
    addProduct: (state, action) => {
      state.cartItems.push({ product: action.payload, count: 1 });
    },
    removeProduct: (state, action) => {
      const index = state.cartItems.filter(
        (item) => item.product.id === action.payload.id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
