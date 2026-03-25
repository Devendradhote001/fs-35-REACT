import React from "react";

const ProductCard = ({ user, handleUpdate }) => {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <img
        width={200}
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <button onClick={() => handleDelete(product.id)}>Delete</button>
      <button onClick={() => handleUpdate(user)}>Update</button>
    </div>
  );
};

export default ProductCard;
