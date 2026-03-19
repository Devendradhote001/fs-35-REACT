import React from "react";

const Register = ({ setToggle }) => {
  return (
    <div>
      <h1>Register</h1>
      <button onClick={() => setToggle((prev) => prev + 1)}>Login</button>
    </div>
  );
};

export default Register;
