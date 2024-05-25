import React from "react";
import "./Contact.css";
import phone from "../../img/phone.png";
import whattsapp from "../../img/whatsappp.png";
import email from "../../img/email.png";

const Contact = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="contactus">   
        
      <div className="leftside">
        <div className="namem">Contact Us!</div>
        <span className="phone-ww">
          <a href="#">
            <img src={phone} alt="" />
            <span>Mobile No</span>
          </a>
        </span>
        <span className="phone-ww">
          <a href="#">
            <img src={whattsapp} alt="" /> 
            <span>Send a Message</span>
          </a>
        </span>
        <span className="phone-ww">
          <a href="#">
            <img src={email} alt="" />
            <span>retrocommune@gmail.com</span>
          </a>
        </span>
       
      </div>
      <div className="rightside">
        <input className="inputs " type="email" placeholder="Email" />
        <input className="inputs-company " type="email" placeholder="Company" />
        <textarea className="input-about" rows="6" placeholder="Enter your text here"></textarea>

        <div className="button-sub">
            <button className="submit">Submit</button>
        </div>

      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default Contact;
