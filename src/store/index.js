import { configureStore } from '@reduxjs/toolkit';
import products from './products';
import sort from './sort';
import brands from './brands';
import models from './models';
import box from './box';
import appConfig from './appConfig';

const store = configureStore({
  reducer: {
    products,
    sort,
    brands,
    models,
    box,
    appConfig,
  },
});

export default store;
