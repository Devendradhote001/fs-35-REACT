import React from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <div className="h-[10%] bg-blue-600 text-white flex items-center justify-between px-10 shadow-md">
      <h1>E-comm</h1>
      <div className="flex gap-7">
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to={"/users"}
        >
          Users
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to={"/cart"}
        >
          Cart
        </NavLink>
      </div>
      <div>
        <button
          onClick={() => navigate('/auth')}
          className="px-5 py-2 rounded cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
