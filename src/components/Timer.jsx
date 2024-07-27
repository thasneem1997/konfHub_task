import { useContext, useEffect, useState } from "react";
import "./Timer.css";
import { Apicontext } from "../context/Apicontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave, faGlobe } from "@fortawesome/free-solid-svg-icons";


function Timer() {
  const { data, error } = useContext(Apicontext);
  const [days, setDays] = useState(3656);
  const [hours, setHours] = useState(17);
  const [minutes, setMinutes] = useState(17);
  const [seconds, setSeconds] = useState(28);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else if (minutes > 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours((prevHours) => prevHours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays((prevDays) => prevDays - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes, hours, days]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="timer-container">
      
        <h1>{data.name}</h1>
        <div className="sub-head">
          <p>
            <FontAwesomeIcon icon={faGlobe} title="Online" />
            &nbsp; Online
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faMoneyBillWave} title="Paid" />
            &nbsp; Paid
          </p>
        </div>
        <h4>
          Event Live Link :
          <a href="https://dev.konfhub.com/konfhub-frontend-evaluation-task">
            Open streaming website
          </a>{" "}
        </h4>
        <h4>
          Date:{" "}
          <span style={{ fontWeight: "500" }}>
            {data.start_date} to {data.end_date}
          </span>
        </h4>
        <h3>EVENT STARTS IN :</h3>
        <div className="timer">
          <p>{days}D</p>:<p>{hours}H</p>:<p>{minutes}M</p>:<p>{seconds}S</p>
        </div>
        <div className="btn-container">
         <a href="https://dev.konfhub.com/checkout/konfhub-frontend-evaluation-task"><button className="button-40 ">Buy Now</button></a> 
         <a href="https://dev.konfhub.com/konfhub-frontend-evaluation-task"><button className="button-39">Officail website</button></a> 
        </div>
       
      </div>
      
     
    </>
  );
}

export default Timer;
