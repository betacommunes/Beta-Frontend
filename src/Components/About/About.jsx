import React, { useEffect, useState } from 'react'
import './About.css'
import Letstalknum from '../Letstalk/Letstalknum'
import Photos from '../Photos/Photos'
import { useLocation, useNavigate } from "react-router-dom"
import Aboutvideo from "../../videos/about.mp4"
import { Helmet } from 'react-helmet'
import MoonLoader from "react-spinners/MoonLoader";
import Loader from "../Loader/Loader"



const About = () => {
  const { pathName } = useLocation();
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
  return (
   <>
     <Loader/>

    <div className="About-sec">
      <Helmet>
        <title>Beta Communes - About Us</title>
        <meta name="description" content=" Elevating businesses since 2022, we've crafted cutting-edge IT solutions for global success.| Transform your digital journey with us today!" />
      </Helmet>

      <div className="aboutbodr">
        {!videoLoaded && (
          <div className="spinner-container">
            <MoonLoader color="#663399" size={100} speedMultiplier={0.5} />
          </div>
        )}
        <video autoPlay loop muted className={`backgroundVideo ${videoLoaded ? 'loaded' : ''}`} onLoadedData={handleVideoLoad}>
          <source src={Aboutvideo} type="video/mp4" />
        </video>
        <div className="leftsidede">
          <span>About Us</span>
          <p>Dedicated to empowering global asset finance leaders with two decades of collective team expertise through cutting-edge software solutions</p>
          <button className="getintouch" onClick={() => navigate('/contact')} >
            Get in Touch
          </button>

        </div>
      </div>
      <Letstalknum />
      <Photos />

    </div>
    </>

  )
}

export default About