import React, { useContext } from "react";
import "./Slider.css";
import { Apicontext } from "../context/Apicontext";

function Slider() {
  const { data } = useContext(Apicontext);

  return (
    <div
      className="slider"
      style={{
        backgroundImage: `url(${data.poster_thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "432px",
        width: "1025px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-15px",
        marginLeft: "29px",
        borderRadius: "11px",
      }}
    >
      <h1 className="slider-caption">
        Welcome to<br></br>
        <span className="text">Konfhub task</span>
      </h1>
    </div>
  );
}

export default Slider;
