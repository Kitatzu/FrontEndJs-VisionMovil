import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: null,
  isLoading: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setIsLoadingCategories: (state, action) => {
      state.isLoading = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setIsLoadingCategories, setCategories } =
  categoriesSlice.actions;
