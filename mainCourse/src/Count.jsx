import React from "react";
import Button from "./Button";

const Count = ({ og }) => {
  let count = 0;

  console.log(og);

  return (
    <div>
      <h1>Count - {count}</h1>
      <br />
      <Button gilili={count} og={og} />
    </div>
  );
};

export default Count;
