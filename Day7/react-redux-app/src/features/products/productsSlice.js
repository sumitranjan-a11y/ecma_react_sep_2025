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
            // Insert Product
            .addCase(insertProduct.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(insertProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items.push(action.payload);
                state.error = null;
            })
            .addCase(insertProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Update Product
            .addCase(updateProduct.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { id, ...updatedProduct } = action.payload;
                const existingProduct = state.items.find(product => product.id === id);
                if (existingProduct) {
                    Object.assign(existingProduct, updatedProduct);
                }
                state.error = null;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts', async (_, { rejectWithValue }) => {
        try {
            return await productsAPIClient.getAllProducts();
        } catch (error) {
            return rejectWithValue(error.message || 'An error occured');
        }
    }
);

export const insertProduct = createAsyncThunk(
    'products/insertProduct', async (product, { rejectWithValue }) => {
        try {
            return await productsAPIClient.insertProduct(product);
        } catch (error) {
            return rejectWithValue(error.message || 'Error occurred while adding product');
        }
    }
);

export const updateProduct = createAsyncThunk(
    'products/updateProduct', async (product, { rejectWithValue }) => {
        try {
            return await productsAPIClient.updateProduct(product);
        } catch (error) {
            return rejectWithValue(error.message || 'Error occurred while updating product');
        }
    }
);

export default productsSlice.reducer;