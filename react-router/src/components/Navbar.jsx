import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <h1>Logo</h1>
      <div className="flex gap-8 ">
        <NavLink tNavLinko="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div>sign in</div>
    </div>
  );
};

export default Navbar;
