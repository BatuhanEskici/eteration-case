import { createSlice } from '@reduxjs/toolkit';

const initialProductsState = {
  items: [],
  activePage: 1,
  pagedItems: [],
  pageCount: 0,
  hasPrevPage: false,
  hasNextPage: false,
  isReady: false,
};

// const initialFiltersState = []

// const initialBoxState = {
//     items: [],
// }

const products = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    updateItems: (state, action) => {
      state.items = action.payload;
    },
    updateActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    updatePagedItems: (state, action) => {
      state.pagedItems = action.payload;
    },
    updatePageCount: (state, action) => {
      state.pageCount = action.payload;
    },
    updateHasPrevPage: (state, action) => {
      state.hasPrevPage = action.payload;
    },
    updateHasNextPage: (state, action) => {
      state.hasNextPage = action.payload;
    },
    updateIsReady: (state, action) => {
      state.isReady = action.payload;
    },
  },
});

export const {
  updateItems,
  updateActivePage,
  updatePagedItems,
  updatePageCount,
  updateHasPrevPage,
  updateHasNextPage,
  updateIsReady,
} = products.actions;
export default products.reducer;
