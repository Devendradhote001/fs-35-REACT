import React from "react";
import Child3 from "./Child3";

const Comp3 = ({ val3 }) => {
  return (
    <div style={{ display: "flex" }}>
      <h1>Component 3, value-{val3}</h1>
      <Child3 />
    </div>
  );
};

export default Comp3;
