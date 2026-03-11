import React from "react";
import Child1 from "./Child1";

const Comp1 = ({ val1 }) => {
  return (
    <div style={{ display: "flex" }}>
      <h1>Component 1, value - {val1}</h1>
      <Child1 />
    </div>
  );
};

export default Comp1;
