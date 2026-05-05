import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../pages/LoginPage";
import AuthLayout from "../layout/AuthLayout";
import RegisterPage from "../pages/RegisterPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
