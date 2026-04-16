import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";
import NestedPage from "../pages/NestedPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
          <Route path="nested" element={<NestedPage />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/pd/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
