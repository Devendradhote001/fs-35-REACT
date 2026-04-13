import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("/about")}>Go to Shop</button>
    </div>
  );
};

export default Home;
