import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
    items: [],
    activePage: 1,
    pagedItems: [],
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
        },
        updatePagedItems: (state, action) => {
            state.pagedItems = action.payload;
        }
    }
})

export const { updateItems, updateActivePage, updatePagedItems } = products.actions
export default products.reducer