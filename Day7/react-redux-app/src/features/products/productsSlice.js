import { createSlice } from "@reduxjs/toolkit";
import productsAPIClient from '../../services/products-api-client';

const productsState = { items: [] };

export const productsSlice = createSlice({
    name: 'products',
    initialState: productsState,
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
        }
    }
});

const { setProducts } = productsSlice.actions;

export const fetchProducts = function() {
    return async function (dispatch) {
        const products = await productsAPIClient.getAllProducts();
        dispatch(setProducts(products));
    }
}

export default productsSlice.reducer;