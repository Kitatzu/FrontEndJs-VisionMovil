import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import { createSlice } from '@reduxjs/toolkit'

import { productsSlice } from "../Slices/productsSlice";
import { categoriesSlice } from "../Slices/categoriesSlice";


const store= configureStore({
   reducer: {
      products: productsSlice.reducer,
          categories: categoriesSlice.reducer,
   }
})

export default store
