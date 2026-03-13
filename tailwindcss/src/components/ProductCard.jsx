import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="border p-4">
      <div className="h-35 w-35">
        <img
          className="h-full w-full object-cover rounded-2xl"
          src={data.image}
          alt=""
        />
      </div>
      <h1>{data.name}</h1>
    </div>
  );
};

export default ProductCard;
