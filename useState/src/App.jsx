import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  console.log("app rendered..");

  const [toggle, setToggle] = useState(false);
  let [count, setCount] = useState(["avyan", "piyush", "pintu"]);
  console.log(count);

  let handleChange = () => {
    count[1] = "elevish";
    setCount([...count]);
  };

  return (
    <div>
      <h1>App</h1>
      {toggle ? (
        <Login setToggle={setToggle} />
      ) : (
        <Register setToggle={setToggle} />
      )}
    </div>
  );
};

export default App;
