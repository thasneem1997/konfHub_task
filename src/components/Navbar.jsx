import React, { useContext } from "react";
import { Apicontext } from "../context/Apicontext";
import "./Navbar.css";

function Navbar() {
  const { data } = useContext(Apicontext);

  return (
    <div>
      <div key={data.event_id} className="navbar-container">
        <img src={data.navbar_icon} className="logo" alt="Logo"></img>

        <div className="menu-item">
          <a href="/">
            <h4>Home</h4>
          </a>
          <a href="#about">
            <h4>About</h4>
          </a>
          <a href="#tickets">
            <h4>Tickets</h4>
          </a>
          <a href="#workshop">
            <h4>Workshop</h4>
          </a>
          <a href="#sponsors">
            <h4>Event Sponsors</h4>
          </a>
          <a href="https://dev-accounts.konfhub.com/login"><button className="button-36" >Sign in</button></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
