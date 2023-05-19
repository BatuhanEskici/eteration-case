import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
    items: [],
    activePage: 1,
}

// const initialSortState = 'old_to_new';

// const initialFiltersState = [];

// const initialBoxState = {
//     items: [],
// };

const products = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {
        updateItems: (state, action) => {
            state.items = action.payload;
        },
        updateActivePage: (state, action) => {
            state.activePage = action.payload;
        }
    }
})

export const { updateItems, updateActivePage } = products.actions
export default products.reducer