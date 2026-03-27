import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="h-screen p-4">
      <Navbar setToggle={setToggle} />
      <div className="h-[90%] px-10 py-4 bg-gray-200">
        {toggle ? (
          <div className="h-full">
            <Form />
          </div>
        ) : (
          <div className="h-fullz">Product cards</div>
        )}
      </div>
    </div>
  );
};

export default App;
