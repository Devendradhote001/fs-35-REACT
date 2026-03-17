import React from "react";

const ProductCard = ({ data, getDataFromChild }) => {
  console.log("products cards...");

  return (
    <div className="border p-4 flex flex-col items-center gap-4">
      <div className="h-35 w-35">
        <img
          className="h-full w-full object-cover rounded-2xl"
          src={data.image}
          alt=""
        />
      </div>
      <h1>{data.price}</h1>
      <button
        onClick={() => getDataFromChild(data)}
        className="p-2 rounded-xl cursor-pointer bg-red-600 text-white"
      >
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
