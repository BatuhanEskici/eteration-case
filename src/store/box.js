import { createSlice } from '@reduxjs/toolkit';

const initialBoxState = [];

const box = createSlice({
  name: 'box',
  initialState: initialBoxState,
  reducers: {
    updateBox: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { updateBox } = box.actions;
export default box.reducer;
