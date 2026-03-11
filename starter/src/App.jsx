import React from "react";
import Count from "./Count";
import Button from "./Button";

const App = () => {
  console.log("app");

  let greet = "good evening";
  console.log(greet);
  return (
    <div>
      <h1>Babu mushai</h1>
      <Count width="90" rio="89" />
      <Button />
    </div>
  );
};

export default App;
