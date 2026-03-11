import React from "react";

const Button = ({ gilili, og }) => {
  console.log(og);
  return (
    <div>
      <button
        onClick={() => {
          gilili++;
          console.log(gilili);
        }}
      >
        Increment
      </button>
      {gilili}
    </div>
  );
};

export default Button;
