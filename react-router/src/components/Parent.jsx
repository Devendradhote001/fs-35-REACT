import React from "react";

const Parent = ({ children }) => {
  return (
    <div>
      <h1>Parent</h1>
      {children}
    </div>
  );
};

export default Parent;
