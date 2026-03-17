import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";

const App = () => {
  let [toggle, setToggle] = useState(false);
  return (
    <div>
      <h1>App</h1>

      {toggle ? <Login /> : <Register />}
    </div>
  );
};

export default App;
