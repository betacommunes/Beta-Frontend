import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom";
import Mobileview from "../Mobileview/Mobileview";
import { useNavigate } from 'react-router-dom'
import Logo from "../../img/logo.png"




const Navbar = () => {

  const [show, setshow] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 200) {
        setScrolled(true)
    } else {
        setScrolled(false)
    }
}
useEffect(() => {  
    window.addEventListener("scroll", handleScroll);
}, []);
  

  return (
    <>

      <nav className={`main ${scrolled ? "sticky-header" : ""}`}>

        <div className="nav-content">
          <div className="nav-logo" onClick={() => navigate("/")}>
            <img src={Logo} alt="" className="beta-logo" />
            {/* Beta <span className="commune">Communes</span> */}
            {/* <img  src={Logo} alt="" /> */}
          </div>
          <div className="nav-list">
            <ul className="menu">
              <li onClick={() => navigate("/")}>

                Home

              </li>
              <li onClick={() => navigate("/portfolio")}>

                Portfolio

              </li>
              <li onClick={() => navigate("/about")}>

                About

              </li>
              <li onClick={() => navigate("/courses")}>

                Courses

              </li>
              <li onClick={() => navigate("/hireus")}>

                Hire

              </li>


            </ul>
          </div>
          <div className="nav-button">

            <button onClick={() => navigate("/contact")} className="btnn">Collaborate with Experts </button>

          </div>
          <div className="nav-icon">
            <FaBars className="nav-icon" onClick={() => { setshow(true) }} />
          </div>

        </div>



      </nav>
      {show && <Mobileview setshow={setshow} />}
    </>
  );
};

export default Navbar;
