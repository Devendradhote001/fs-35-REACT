import React from "react";
import Child2 from "./Child2";

const Comp2 = ({ val2 }) => {
  return (
    <div style={{ display: "flex" }}>
      <h1>Component 2, value-{val2}</h1>
      <Child2 />
    </div>
  );
};

export default Comp2;
