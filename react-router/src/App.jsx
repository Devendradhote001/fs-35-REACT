import React from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
