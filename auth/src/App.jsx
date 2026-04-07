import React, { useContext, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Auth } from "./context/AuthContext";

const App = () => {
  let { toggle } = useContext(Auth);

  return (
    <div className="h-screen p-5">{toggle ? <Register /> : <Login />}</div>
  );
};

export default App;
