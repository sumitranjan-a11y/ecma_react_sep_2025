import React, { createContext, useContext, useEffect, useState } from 'react';
import productsAPIClient from '../services/products-api-client';

const ProductsContext = createContext();

export function useProducts() {
    const context = useContext(ProductsContext);

    if (!context) {
        throw new Error('useProducts must be used withon the ProductsProvider')
    }

    return context;
}

const ProductsAPIProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError('');
            const data = await productsAPIClient.getAllProducts();
            setProducts(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchProducts();
    }, []);

    const value = {
        products,
        loading,
        error,
        setProducts,
        fetchProducts
    };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsAPIProvider;