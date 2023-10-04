import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const removeItems = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeItems;
    },
    incrementCount: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );

      itemPresent.quantity++;
    },
    decrementCount: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent.quantity === 1) {
        itemPresent.quantity = 0;
        const removeItems = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeItems;
      } else {
        itemPresent.quantity--;
      }
    },
  },
});

export const { addTocart, removeFromCart, incrementCount, decrementCount } =
  cartSlice.actions;

export default cartSlice.reducer;
