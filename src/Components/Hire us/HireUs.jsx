import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import { Helmet } from 'react-helmet'
import Hirevideo from "../../videos/hire.mp4"
import MoonLoader from "react-spinners/MoonLoader";
import Loader from "../Loader/Loader"

import "./HireUs.css"

const HireUs = () => {
    const { pathName } = useLocation();
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
            <Helmet>
                <title>Beta Communes - Hire Us</title>
                <meta name="description" content=" Elevating businesses since 2022, we've crafted cutting-edge IT solutions for global success.| Transform your digital journey with us today!" />
            </Helmet>
            <div className="hireus">
                {!videoLoaded && (
                    <div className="spinner-container">
                        <MoonLoader color="#663399" size={100} speedMultiplier={0.5} />
                    </div>
                )}
                <video autoPlay loop muted className={`backgroundVideo ${videoLoaded ? 'loaded' : ''}`} onLoadedData={handleVideoLoad}>
                    <source src={Hirevideo} type="video/mp4" />
                </video>
                <div className="videoText">
                    <span>Hire Us</span>
                    <p>Empower your brand with our expertise. Elevate your success story. Choose us as your strategic partner.</p>

                </div>
            </div>
        </>
    )
}

export default HireUs