import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsInCart: [],
  totalPrice: null,
  status: null,
  error: null,
  isLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    startLoadingCart: (store) => {
      store.isLoading = true;
    },
    setProductsInCart: (store, action) => {
      (store.isLoading = false),
        (store.productsInCart = action.payload.products),
        (store.status = action.payload.status);
    },
    setTotalPrice: (store, action) => {
      store.totalPrice = action.payload;
    },
    setStatus: (store, action) => {
      (store.status = action.payload.status),
        (store.error = action.payload.msg),
        (store.isLoading = false);
    },
  },
});

export const { startLoadingCart, setProductsInCart, setTotalPrice, setStatus } =
  cartSlice.actions;
