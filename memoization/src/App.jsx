import React from "react";
import About from "./components/About";
import { useState } from "react";
import { useCallback } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("app rendering...");

  let incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>App - {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <About incrementCount={incrementCount} />
    </div>
  );
};

export default App;
