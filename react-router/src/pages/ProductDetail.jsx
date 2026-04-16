import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  let fetchSingleProductDetail = async () => {
    let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(res.data);
    setProduct(res.data);
  };

  fetchSingleProductDetail();

  return (
    <div>
      <h1 className="text-7xl ">
        <img src={product.image} alt="" />
        <h1>{product.title}</h1>
        <p className="text-xl">{product.description}</p>
        <p className="text-4xl">price - {product.price}</p>
      </h1>
    </div>
  );
};

export default ProductDetail;
