import React, { useEffect, useState } from "react";
import "./Moreprojects.css";
import { moreprojects } from "../Data/Data";
import parse from "html-react-parser";
import Fade from 'react-reveal/Fade';
import { useLocation } from "react-router-dom";
import portfolioVideo from "../../videos/portfolio.mp4";
import { Helmet } from "react-helmet";
import MoonLoader from "react-spinners/MoonLoader";
import BeatLoader from "react-spinners/BeatLoader";
import Loader from "../Loader/Loader"


const Moreprojects = () => {
  const { pathName } = useLocation();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState([]);

  
 

  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => [...prev, index]);
  };

  const isImageLoaded = (index) => {
    return imagesLoaded.includes(index);
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);  

 

  return (
    <>
    <Loader/>
    <div className="moreproject">
       <Helmet>
            <title>Beta Communes - Portfolio</title>
            <meta name="description" content="Elevating businesses since 2022, we've crafted cutting-edge IT solutions for global success.| Transform your digital journey with us today!" />
          </Helmet> 
   
     
        <>
         
          <div className="project-video">
            {!videoLoaded && (
              <div className="spinner-container">
                <MoonLoader color="#663399" size={100} speedMultiplier={0.5} />
              </div>
            )}
            <video autoPlay loop muted className={`backgroundVideo ${videoLoaded ? 'loaded' : ''}`} onLoadedData={handleVideoLoad}>
              <source src={portfolioVideo} type="video/mp4" />
            </video>
            <div className="project-main">
              <div className="project-main-title">
                <span>We Help Your Business</span>
              </div>
              <span className="project-main-desc">Cheering for our partners! Explore the awesome digital solutions we've crafted!</span>
            </div>
          </div>

          <div className="moreproject-content">
            {moreprojects.map(({ img, title, desc, link }, index) => (
              <Fade duration={1500} key={index}>
                <div className="project-item">
                  {!isImageLoaded(index) && (
                    <div className="spinner-container">
                      <BeatLoader color="#663399" />
                    </div>
                  )}
                  <img
                    src={img}
                    alt=""
                    className={`project-img ${isImageLoaded(index) ? 'loaded' : ''}`}
                    onLoad={() => handleImageLoad(index)}
                  />
                  <span className="project-title">{parse(title)}</span>
                  <p className="project-desc">{desc}</p>
                  <button className="project-btn" onClick={() => window.open(link, '_blank')}>Open</button>
                </div>
              </Fade>
            ))}
          </div>
        </>
    
    </div>
    </>
  );
};

export default Moreprojects;
