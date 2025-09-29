import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";

import LoaderAnimation from '../common/LoaderAnimation';
import AddProductButton from "./AddProductButton";
import ProductListComponent from "./ProductListComponent";

const ProductsComponent = () => {
    const products = useSelector(state => state.products.items);
    const status = useSelector(state => state.products.status);
    const error = useSelector(state => state.products.error);

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle')
            dispatch(fetchProducts());
    }, [dispatch, status]);

    const handleRefresh = () => {
        dispatch(fetchProducts());
    }

    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                Error: {error}
            </div>
        );
    } else if (status === 'loading') {
        <LoaderAnimation />
    } else {
        return (
            <>
                <div className="mt-5 mb-3">
                    <AddProductButton />
                    <button className='btn btn-warning btn-lg mx-2' onClick={handleRefresh}>
                        <span className='bi bi-arrow-clockwise'></span>
                        &nbsp;Refresh Products
                    </button>
                </div>
                <ProductListComponent products={products} />
            </>
        );
    }
};

export default ProductsComponent;