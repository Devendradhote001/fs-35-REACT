import React from "react";
import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <div>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/home/about">About</NavLink>
        <NavLink to="/home/products">Products</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
