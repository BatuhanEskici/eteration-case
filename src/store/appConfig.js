import { createSlice } from '@reduxjs/toolkit';

const initialAppConfigState = {
  showSearchInput: true,
};

const appConfig = createSlice({
  name: 'appConfig',
  initialState: initialAppConfigState,
  reducers: {
    updateAppConfig: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { updateAppConfig } = appConfig.actions;
export default appConfig.reducer;
