import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../Slices/productsSlice";
import { categoriesSlice } from "../Slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});
