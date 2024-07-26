import { useState } from "react";
import "./Tickets.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Tickets({ listdata1, listdata2, listdata3 }) {
  const [list2, setList2] = useState(false);
  const [list3, setList3] = useState(true);
  const handlearrow = () => {
    setList2(!list2);
  };
  const handlearrow2 = () => {
    setList3(!list3);
  };

  return (
    <div className="container">
      <h1>TICKETS</h1>
      <br />
      {listdata1.map((item, index) => {
        return (
          <>
            <div key={index} className="ticket-container">
              <h3>{item.type}</h3>
              <p>{item.description}</p>
              <a>
                {" "}
                <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;  {item.location}
              </a>
              <h6>{item.subcontent}</h6>

              <h4>{item.available}</h4>
              <div className="t-footer">
                <h2>{item.price}</h2>
                <button class="button-40 ">{item.btncontent}</button>
              </div>
            </div>
          </>
        );
      })}

      <div className="ticket-container2">
        <div className="ticket-container2-content">
          <h3>This is a category</h3>
          <button onClick={handlearrow} className="transparent-btn">
            <i className={`fas fa-chevron-${list2 ? "up" : "down"}`}></i>
          </button>
        </div>
      </div>
      {list2 && (
        <h3 className="list2-sub">
          This is category description. This category is collapsed by default.
        </h3>
      )}
      {list2 &&
        listdata2.map((item, index) => {
          return (
            <>
              <div key={index} className="ticket-container">
                <h3>{item.type}</h3>
                <p>{item.description}</p>

                <h4>{item.available}</h4>
                <div className="t-footer">
                  <h2>{item.price}</h2>
                  <button class="button-40 ">{item.btncontent}</button>
                </div>
              </div>
            </>
          );
        })}
      <div className="ticket-container2">
        <div className="ticket-container2-content">
          <h3>
            This is also a category. But with a little longer name. Also note,
            this category expanded by default.
          </h3>
          <button onClick={handlearrow2} className="transparent-btn">
            <i className={`fas fa-chevron-${list3 ? "up" : "down"}`}></i>
          </button>
        </div>
      </div>
      {list3 && (
        <h3 className="list3-sub">
          This is category description. This category is expanded by default.
          This is a little longer description. Adding more content to make the
          description look longer. Adding more content to make the description
          look longer. Adding more content to make the description look longer.
          Adding more content to make the description look longer. Adding more
          content to make the description look longer. Adding more content to
          make the description look longer.
        </h3>
      )}
      {list3 &&
        listdata3.map((item, index) => {
          return (
            <>
              <div key={index} className="ticket-container">
                <h3>{item.type}</h3>
                <p>{item.description}</p>

                <h4>{item.available}</h4>
                <div className="t-footer">
                  <h2>{item.price}</h2>
                  <button class="button-40 ">{item.btncontent}</button>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default Tickets;
