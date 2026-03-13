import React from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  let data = [
    {
      imageUrl:
        "https://www.campusshoes.com/cdn/shop/files/LEVEL_LEVEL_WHT-L.GRY_07_831c7a2c-ff1b-4011-9268-b11f984219c6.webp?v=1757580207",
      name: "Shoes",
      price: "600",
      category: "Sports",
    },
  ];

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProductCard detail={data[0]} />
      <ProductCard detail={data[0]} />
      <ProductCard detail={data[0]} />

    </div>
  );
};

export default App;
