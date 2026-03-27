import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="h-[10%] shadow-xl border border-gray-300 px-10 flex items-center justify-between">
      <h1 className="font-bold text-2xl">Logo</h1>
      <div className="flex gap-10 items-center text-xl font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="px-6 py-3 text-white bg-blue-600 rounded-xl cursor-pointer"
      >
        Add Employee
      </button>
    </div>
  );
};

export default Navbar;
