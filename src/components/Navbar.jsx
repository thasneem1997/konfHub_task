// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Apicontext } from "../context/Apicontext";
import "./Navbar.css";

function Navbar() {
  const { data } = useContext(Apicontext);

  return (
    <div>
      <div key={data.event_id} className="navbar-container">
        <img src={data.navbar_icon} className="logo"></img>

        <div className="menu-item">
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Tickets</h4>
          <h4>Workshop</h4>
          <h4>Event sponsors</h4>
          <button className="button-36">Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
