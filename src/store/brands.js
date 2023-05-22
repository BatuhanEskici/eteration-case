import { createSlice } from '@reduxjs/toolkit';

const initialBrandsState = {
  init: [],
  all: [],
  selected: [],
};

const brands = createSlice({
  name: 'brands',
  initialState: initialBrandsState,
  reducers: {
    updateBrands: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { updateBrands } = brands.actions;
export default brands.reducer;
