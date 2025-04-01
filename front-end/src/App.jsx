import React from "react";
// components
// import Banner from "./components/Banner";
// import Header from "./components/Header";
import Nav from "./components/Nav";
// import About from "./components/About";
// import Services from "./components/Services";
// import Work from "./components/Work";
// import Contact from "./components/Contact";
// import background image
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
      <Nav />
      {/* <Header />
      <Banner />
      <About />
      <Services />
      <Work />
      <Contact /> */}
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default App;
