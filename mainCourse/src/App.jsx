import React from "react";
import Count from "./Count";

const App = () => {
  let og = "hell";
  console.log(og)

  return (
    <div>
      <h1>Hello</h1>
      <Count og={og} />
    </div>
  );
};

export default App;
