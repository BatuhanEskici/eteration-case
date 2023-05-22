import { createSlice } from '@reduxjs/toolkit';

const initialSortState = {
  value: 'old_to_new',
  key: 'createdAt',
  type: 'asc',
};

const sort = createSlice({
  name: 'sort',
  initialState: initialSortState,
  reducers: {
    updateSort: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { updateSort } = sort.actions;
export default sort.reducer;
