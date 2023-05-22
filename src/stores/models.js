import { createSlice } from '@reduxjs/toolkit';

const initialModelsState = {
  init: [],
  all: [],
  selected: [],
};

const models = createSlice({
  name: 'models',
  initialState: initialModelsState,
  reducers: {
    updateModels: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { updateModels } = models.actions;
export default models.reducer;
