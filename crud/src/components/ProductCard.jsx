import React from "react";

const ProductCard = ({ product, handleDelete }) => {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <img width={200} src={product.image} alt="" />
      <h1>{product.price}</h1>
      <h1>{product.category}</h1>
      <button onClick={() => handleDelete(product.id)}>Delete</button>
    </div>
  );
};

export default ProductCard;
