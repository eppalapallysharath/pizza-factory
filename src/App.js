import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import ProductList from "./Components/Body/ProductList";
import ProductDetails from "./Components/Body/ProductDetails";
import Cart from "./Components/Body/Cart";
import PageNotFound from "./Components/Error/PageNotFound";
import "./App.css";
import SignIn from "./Components/Body/User/SignIn";
import SignUp from "./Components/Body/User/SignUp";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="products" element={<ProductList />} />
          <Route path="productsDetails/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
