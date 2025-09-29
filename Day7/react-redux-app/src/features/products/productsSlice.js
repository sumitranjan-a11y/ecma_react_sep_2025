// import { createSlice } from "@reduxjs/toolkit";
// import productsAPIClient from '../../services/products-api-client';

// const productsState = { items: [] };

// export const productsSlice = createSlice({
//     name: 'products',
//     initialState: productsState,
//     reducers: {
//         setProducts: (state, action) => {
//             state.items = action.payload;
//         }
//     }
// });

// const { setProducts } = productsSlice.actions;

// export const fetchProducts = function() {
//     return async function (dispatch) {
//         const products = await productsAPIClient.getAllProducts();
//         dispatch(setProducts(products));
//     }
// }

// export default productsSlice.reducer;

// ----------------------------------------------------

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsAPIClient from '../../services/products-api-client';

const productsState = {
    items: [],
    status: 'idle',
    error: null
};

export const productsSlice = createSlice({
    name: 'products',
    initialState: productsState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Get all products
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    }
});

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts', async (_, { rejectWithValue }) => {
        try {
            return await productsAPIClient.getAllProducts();
        } catch (error) {
            return rejectWithValue(error.response?.data || 'An error occured');
        }
    }
);

export default productsSlice.reducer;