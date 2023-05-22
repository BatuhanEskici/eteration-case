import { configureStore } from '@reduxjs/toolkit';
import products from './products';
import sort from './sort';
import brands from './brands';

const store = configureStore({
  reducer: {
    products,
    sort,
    brands,
  },
});

export default store;
