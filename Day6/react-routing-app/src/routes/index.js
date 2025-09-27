import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AboutComponent from "../components/about/AboutComponent";
import NoMatchComponent from "../components/no-match/NoMatchComponent";
// import AdminComponent from "../components/admin/AdminComponentMine";
// import LoginComponent from "../components/login/LoginComponentMine";
// import AssignmentComponent from "../components/assignment/AssignmentComponentMine";
import ProductsComponent from "../components/products/ProductsComponent";
import AdminComponent from "../components/admin/AdminComponent";
import HomeComponent from "../components/home/HomeComponent";
import LoginComponent from "../components/login/LoginComponent";
import ProductDetailsComponent from "../components/products/ProductDetailsComponent";
import ProductNotSelectedComponent from "../components/products/ProductsNotSelectedComponent";
import ProductsAPIProvider from "../contexts/ProductsAPIProvider";
import ProductsProvider from "../contexts/ProductsContext";
import authenticatorClient from "../services/authenticator-api-client";

const SecuredRoute = ({ children }) => {
    let location = useLocation();

    if (authenticatorClient.isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} />;
    }
}

export default (
    <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/products" element={
            <ProductsProvider>
                <ProductsComponent />
            </ProductsProvider>
        }>
            <Route path="" element={<ProductNotSelectedComponent />} />
            <Route path=":productId" element={<ProductDetailsComponent />} />
        </Route>
        <Route path="/admin" element={
            <SecuredRoute>
                <ProductsAPIProvider>
                    <AdminComponent />
                </ProductsAPIProvider>
            </SecuredRoute>
        } />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="*" element={<NoMatchComponent />} />
    </Routes>
);