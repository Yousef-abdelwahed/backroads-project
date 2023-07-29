import React from "react";
import NavBarComponent from "./Components/Nav/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Tours from "./Components/Tours/Tours";

const App = () => {
  return (
    <>
      <NavBarComponent />
      <Home />
      <About />
      <Service />
      <Tours />
    </>
  );
};

export default App;
