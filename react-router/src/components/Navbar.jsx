import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="h-[10%] mb-8 shadow-md flex justify-between px-10 items-center">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex items-center gap-10 font-semibold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/about"
        >
          About
        </NavLink>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
