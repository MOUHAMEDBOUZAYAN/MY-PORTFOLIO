import React from "react";
// components
import Home from "./components/Home";
import Nav from "./components/Nav";
import BackgroundImage from "./assets/background.png";

const App = () => {
  return (
    <div
      className="bg-no-repeat bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Home />
      <Nav />
     
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default App;
