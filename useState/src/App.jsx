import React, { useState } from "react";

const App = () => {
  console.log("app rendered..");
  let [count, setCount] = useState(0);

  let handleChange = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>App</h1>
      <h1>Count is - {count}</h1>
      <button onClick={handleChange}>Inc</button>
    </div>
  );
};

export default App;
