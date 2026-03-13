import React from "react";
import "./ProductCard.css";

const ProductCard = ({ detail }) => {
  console.log(detail.name);
  return (
    <div className="container">
      <img width={100} src={detail.imageUrl} alt="" />
      <h1>{detail.name}</h1>
      <p>{detail.price}</p>
      <p>{detail.category}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
