import React, { useContext, useEffect, useState } from "react";
import { Apicontext } from "../context/Apicontext";

import "./Speaker.css";

function Speaker() {
  const { data } = useContext(Apicontext);
  const [para, setPara] = useState("");
  useEffect(() => {
    if (data.speaker_section_description) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(
        data.speaker_section_description,
        "text/html"
      );
      const p = doc.querySelector("p");
      if (p) setPara(p.innerHTML);
    }
  }, [data.speaker_section_description]);

  return (
    <div className="speaker-container">
      <h1>{data.speaker_section_title}</h1>
      <br />
      <h3 dangerouslySetInnerHTML={{ __html: para }}></h3>
      <div className="content-container">
        <div className="col1">
          <img
            src="https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg"
            className="content-container-img"
          ></img>
          <h2>Bruce Wayne</h2>
          <h3>Chairman</h3>
          <h5>Wayne Enterprises</h5>
          <div className="icons2">
            <img src="https://dev.konfhub.com/img/facebook01.svg"></img>
            <img src="https://dev.konfhub.com/img/twitter-mini.svg"></img>

            <img src="https://dev.konfhub.com/img/linkedin01.svg"></img>

            <img src="https://dev.konfhub.com/img/Website01.svg"></img>
          </div>
        </div>
        <div>
          <div className="col1">
            <img
              src="https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg"
              className="content-container-img"
            ></img>
            <h2>Dark Knight</h2>
            <h3>Batman</h3>
            <h5>Gotham</h5>
            <div className="icons">
              <img src="https://dev.konfhub.com/img/facebook01.svg"></img>
              <img src="https://dev.konfhub.com/img/twitter-mini.svg"></img>

              <img src="https://dev.konfhub.com/img/linkedin01.svg"></img>

              <img src="https://dev.konfhub.com/img/Website01.svg"></img>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speaker;
