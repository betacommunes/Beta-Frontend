import React, { useEffect, useState } from 'react'
import { useLocation , useNavigate } from "react-router-dom"
import { Helmet } from 'react-helmet'
import courseVideo from "../../videos/courses.mp4"
import MoonLoader from "react-spinners/MoonLoader";
import "./Courses.css"
import Loader from "../Loader/Loader";
import parse from "html-react-parser";
import { course } from "../Data/Data";
import Fade from 'react-reveal/Fade';
import BeatLoader from "react-spinners/BeatLoader";




const Courses = () => {
    const { pathName } = useLocation();
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState([]);
    const navigate = useNavigate();



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
            <Loader />
            <Helmet>
                <title>Beta Communes - Courses</title>
                <meta name="description" content=" Elevating businesses since 2022, we've crafted cutting-edge IT solutions for global success.| Transform your digital journey with us today!" />
            </Helmet>
            <div className="courses">
                {!videoLoaded && (
                    <div className="spinner-container">
                        <MoonLoader color="#663399" size={100} speedMultiplier={0.5} />
                    </div>
                )}
                <video autoPlay loop muted className={`backgroundVideo ${videoLoaded ? 'loaded' : ''}`} onLoadedData={handleVideoLoad}>
                    <source src={courseVideo} type="video/mp4" />
                </video>
                {/* <div className="videoText">
                    <span>Hire Us</span>
                    <p>Empower your brand with our expertise. Elevate your success story. Choose us as your strategic partner.</p>

                </div> */}
            </div>
            <div className="courses-card">
                {course.map(({ img, title , desc , link }, index) => (
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
                            <button className="project-btn" onClick={() => navigate(`${link}`)}  >Learn More</button>
                        </div>
                    </Fade>
                ))}
            </div>
        </>
    )
}

export default Courses