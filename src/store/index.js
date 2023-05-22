import { configureStore } from '@reduxjs/toolkit';
import products from './products';
import sort from './sort';
import brands from './brands';
import models from './models';

const store = configureStore({
  reducer: {
    products,
    sort,
    brands,
    models,
  },
});

export default store;
