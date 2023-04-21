import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:null,
    isLoading:null,
    productDetail:null,
    productCreate: {
        id: null,
        series: [],
      },
}

export const productsSlice= createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts:(store,action)=>{
            store.products=action.payload;
      },
        setLoadingProducts: (store, action) => {
            store.isLoading = action.payload;
      },
        setDeletedProducts:(store,action)=>{
            store.products=action.payload
      },
        setProductID: (store, action) => {
            store.productDetail = action.payload;
      },
        setCreateProduct: (store, action) => {
            store.productCreate.id = action.payload;
            store.productCreate.series = [];
      },
}
}
)

export const{
    setProducts,
    setLoadingProducts,
    setDeletedProducts,
    setProductID,
    setCreateProduct,
}=productsSlice.actions;