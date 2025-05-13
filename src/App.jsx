import React from "react";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";

import Layout from "./layout/index";
import HomePage from "./pages/Home";
import ProductDetails from "./pages/ProductDetail";
import CategoryDetails from "./pages/Category/CategoryDetails";
import CartPage from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryDetails />} />
          <Route path="productDetail/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        closeButton={false}
      />
    </>
  );
}

export default App;
