import React, { useContext } from "react";
import "./Footer.css";
import { Apicontext } from "../context/Apicontext";

function Footer() {
  const { data } = useContext(Apicontext);

  return (
    <div className="footer-container">
      <h1>HOSTED BY</h1>
      <br />
      <div className="footer-content">
        <div className="footer-flex">
          <img
            src={data.organiser_image_url}
            style={{ width: "30%", marginTop: "-13px" }}
            className="img-style"
            alt="Organizer"
          />
          <h3 className="name">{data.organiser_name}</h3>
        </div>
        <h5
          dangerouslySetInnerHTML={{ __html: data.organiser_info }}
          className="font-style"
        ></h5>
        <div className="icons2">
        <a href={data.organizer_facebook_url}>  <img src="https://dev.konfhub.com/img/facebook-share.svg"></img></a> 
        <a href={data.organizer_twitter_url}>    <img
            src="https://dev.konfhub.com/img/twitter-pro-black.svg"
            style={{ width: "30px" }}
          ></img></a> 

        <a href={data.organizer_linkedin_url}><img src="https://dev.konfhub.com/img/linkedin-share.svg"></img></a>  

        <a href={data.organizer_linkedin_url}><img src="https://dev.konfhub.com/img/call-share.svg"></img></a>
          <img src="https://dev.konfhub.com/img/mail-share.svg"></img>
          <img src="https://dev.konfhub.com/img/website-black.svg"></img>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Footer;
