import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../Slices/productsSlice";
import { categoriesSlice } from "../Slices/categoriesSlice";
import { usersSlice } from "../Slices/usersSlices";
import { cartSlice } from "../Slices/cartSlice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer,
    users: usersSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
