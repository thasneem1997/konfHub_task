// src/components/About.js
import React, { useContext, useEffect, useState } from "react";
import { Apicontext } from "../context/Apicontext";
import "./About.css";

function About() {
  const { data} = useContext(Apicontext);
  const [para, setPara] = useState("");
  const [image, setImage] = useState("");
  const [youtube, setYoutube] = useState("");
  const [table,setTable]=useState("");
    useEffect(() => {
    if (data.description) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.description, "text/html");
      const p = doc.querySelector("p");
      const img = doc.querySelector("img");
      const iframe = doc.querySelector("iframe");
      const table = doc.querySelector("table");
      if (p) setPara(p.innerHTML);
      if (img) setImage(img.src);
      if (iframe) setYoutube(iframe.src);
      if (table) setTable(table.innerHTML);
    }
  }, [data.description]);

  return (
    <div className="about-container">
      <h1>ABOUT EVENT</h1>
      <br />
      <blockquote>
          <p dangerouslySetInnerHTML={{ __html: para}} />
        </blockquote>
      <div className="image-container">
        <img src={image} alt="Event Image" className="about-image" />
        <iframe
          width="560"
          height="315"
          src={youtube}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <table>
          <tbody dangerouslySetInnerHTML={{ __html: table}} />
        </table>
      </div>
    </div>
  );
}

export default About;
