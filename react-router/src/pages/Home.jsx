import React from "react";
import Parent from "../components/Parent";
import Child from "../components/Child";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Parent>
        <Child />
      </Parent>
    </div>
  );
};

export default Home;
