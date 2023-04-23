import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  totalPaginas: 0,
  productsDetail: null,
  tempProducts: null,
  productCreate: {
    id: null,
  },
  pages: 0,
  isLoading: false,
  filters: {
    prices: {
      min: 0,
      max: 0,
    },
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setIsLoadingProducts: (state, action) => {
      state.isLoading = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
      state.tempProducts = action.payload;
    },
    setPopularProducts: (state, action) => {
      state.productCreate = action.payload;
    },
    setPages: (state, action) => {
      state.pages = action.payload;
    },
    setProductId: (state, action) => {
      state.productsDetail = action.payload;
    },
    setCreateProduct: (state, action) => {
      state.productCreate.id = action.payload;
    },
    setDeletedProduct: (state, action) => {
      state.products = action.payload;
    },
    filterPrice: (state, action) => {
      state.filters.prices[action.payload.name] = action.payload.value;
    },
	     
    filterProduct: (state) => {
      if (parseInt(state.filters.prices.min) > 0)
        state.tempProducts = state.products.filter(
          (p) => parseFloat(p.price) >= parseFloat(state.filters.prices.min)
        );

      if (parseInt(state.filters.prices.max) > 0)
        state.tempProducts = state.products.filter(
          (p) => parseFloat(p.price) <= parseFloat(state.filters.prices.max)
        );

      if (
        parseInt(state.filters.prices.min) > 0 &&
        parseInt(state.filters.prices.max) > 0
      )
        state.tempProducts = state.products.filter(
          (p) =>
            parseFloat(p.price) <= parseFloat(state.filters.prices.max) &&
            parseFloat(p.price) >= parseFloat(state.filters.prices.min)
        );
      if (
        (parseInt(state.filters.prices.min) === 0 ||
          parseInt(state.filters.prices.min) === "") &&
        (parseInt(state.filters.prices.max) === 0 ||
          parseInt(state.filters.prices.max) === "")
      )
        state.tempProducts = state.products;
    },
 	getTotalPages: (state, action) => {
  	 state.totalPaginas = action.payload;
  	  },	 
  },



  
});

export const {
  setIsLoadingProducts,
  setProducts,
  setPopularProducts,
  setPages,
  setProductId,
  setCreateProduct,
  setDeletedProduct,
  filterPrice,
  filterProduct,
  getTotalPages,
} = productsSlice.actions;
