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
      <div style={{ display: "flex" }}>
        <Slider />
        <Timer />
       
       
      </div>
      <About />
      <List />
      <Speaker />
      <Workshop />
      <Sponsor />
      <Footer />
       
     
    </div>
  );
}

export default App;
