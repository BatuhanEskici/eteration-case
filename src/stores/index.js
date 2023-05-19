import { configureStore } from "@reduxjs/toolkit";
import products from './store';

const store = configureStore({
    reducer: {
        products
    }
})

export default store;