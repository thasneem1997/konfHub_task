import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Timer from "./components/Timer";
import About from "./components/About";
import List from "./List";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Speaker from "./components/Speaker";
import Workshop from "./components/Workshop";
import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div id="slider" style={{ display: "flex" }}>
        <Slider />
        <Timer />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="tickets">
        <List />
      </div>
      <div id="speaker">
        <Speaker />
      </div>
      <div id="workshop">
        <Workshop />
      </div>
      <div id="sponsors">
        <Sponsor />
      </div>
      <Footer />
    </div>
  );
}

export default App;