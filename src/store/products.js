import { createSlice } from '@reduxjs/toolkit';

const initialProductsState = {
  items: [],
  activePage: 1,
  pagedItems: [],
  pageCount: 0,
  hasPrevPage: false,
  hasNextPage: false,
};

const products = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    updateProducts: (state, action) => {
      state = action.payload;
      return state;
    },
    updateActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { updateProducts, updateActivePage } = products.actions;
export default products.reducer;
