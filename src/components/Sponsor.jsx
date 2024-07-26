import React, { useContext} from "react";
import { Apicontext } from "../context/Apicontext";
import "./Sponsor.css";

function Sponsor() {
  const { data } = useContext(Apicontext);
 
  
  return (
    <div className="container-style" id="sponsors">
      <h1>{data.sponsor_section_title}</h1>
      <h3 dangerouslySetInnerHTML={{ __html:  data.sponsor_section_description }}></h3>
      <img
        src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1200&q=75"
        className="spon-img"
      ></img>
      <div>
        <br />
        <h1 className="sponsor-title">
          SPONSOR<br></br> CATEGORY
        </h1>
        <hr className="hr" />
        <img
          src="https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg"
          className="category-img"
        ></img><br/><br/><br/><br/>
      </div>
    </div>
  );
}

export default Sponsor;
