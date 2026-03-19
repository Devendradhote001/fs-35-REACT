import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => setToggle((prev) => !prev)}>Register</button>
    </div>
  );
};

export default Login;
