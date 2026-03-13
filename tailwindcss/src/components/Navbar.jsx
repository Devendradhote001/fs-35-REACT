import React from "react";

const Navbar = () => {
  return (
    <div className="flex rounded-xl justify-between bg-blue-700 text-white p-4">
      <h1>Logo</h1>
      <div className="flex gap-4">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div>user</div>
    </div>
  );
};

export default Navbar;
