import { configureStore } from '@reduxjs/toolkit';
import products from './products';
import sort from './sort';

const store = configureStore({
  reducer: {
    products,
    sort,
  },
});

export default store;
