import React, { useContext} from "react";
import { Apicontext } from "../context/Apicontext";
import "./Workshop.css";

function Workshop() {
  const { data } = useContext(Apicontext);
  
     
  return (
    <div className="container-style">
      <h1>{data.workshop_section_title}</h1>
      <h3 dangerouslySetInnerHTML={{ __html: data.workshop_section_description }}></h3>
      <div className="content-container2">
        <div className="col2">
          <img
            src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977949758-0e87f502-f5b9-4799-b857-623780fc1415.png&w=1200&q=75"
            className="content-container2-img"
            style={{ marginLeft: "-19px" }}
          ></img>
          <h2>How to make more money</h2>
          <h3>Jun 11th, 2024 at 10:00 AM (IST)</h3>
          <div className="workshop-footer">
            <img
              src="https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg"
              className="img-style"
            ></img>
            <button className="btn-style ">View details</button>
          </div>
        </div>

        <div className="col2">
          <img
            src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=1200&q=75"
            className="content-container2-img"
          ></img>
          <h2>How to fight crime</h2>
          <h3>Jun 1st, 2034 at 10:00 AM (IST)</h3>

          <div className="workshop-footer">
            <img
              src="https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg"
              className="img-style"
            ></img>
            <button className="btn-style ">View details</button>
          </div>
          <br />
        </div>
        <div className="col2">
          <img
            src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=1200&q=75"
            className="content-container2-img"
          ></img>
          <h2>How to fight crime</h2>
          <h3>Jun 1st, 2034 at 10:00 AM (IST)</h3>

          <div className="workshop-footer">
            <img
              src="https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg"
              className="img-style"
            ></img>
            <img
              src="https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg"
              className="img-style"
              style={{ marginLeft: "-62px" }}
            ></img>

            <button className="btn-style">View details</button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Workshop;
