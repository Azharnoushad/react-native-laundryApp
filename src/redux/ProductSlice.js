import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.product.push({ ...action.payload });
    },
    incrementCountProduct: (state, action) => {
      const itemPresent = state.product.find(
        (item) => item.id === action.payload.id
      );

      itemPresent.quantity++;
    },
    decrementCountProduct: (state, action) => {
      const itemPresent = state.product.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent.quantity === 1) {
        itemPresent.quantity = 0;
        const removeItems = state.product.filter(
          (item) => item.id !== action.payload.id
        );
        state.product = removeItems;
      } else {
        itemPresent.quantity--;
      }
    },
  },
});

export const { getProducts, incrementCountProduct, decrementCountProduct } =
  productSlice.actions;

export default productSlice.reducer;
