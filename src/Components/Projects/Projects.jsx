import React, { useState, useEffect } from "react";
import "./Projects.css";
import { project } from "../Data/Data";
import parse from "html-react-parser";
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";


const Projects = () => {
  const navigate = useNavigate();
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const handleImageLoad = () => {
      setImagesLoaded((prev) => prev + 1);
    };  

    const images = document.querySelectorAll(".project-img");

    images.forEach((img) => {
      img.addEventListener("load", handleImageLoad);
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  const allImagesLoaded = imagesLoaded === project.length;

  return (
    <div className="project">
      <div className="title">
        Digital
        <span> Endeavors</span>
      </div>

      <div className="project-content">
        {project.map(({ img, title, desc, link }, index) => (
          <Fade duration={1500} key={index}>
            <div className="project-item">
              {!allImagesLoaded && (
                <div className="spinner-container">
                  <BeatLoader color="#663399"  />
                </div>
              )}
              <img 
                src={img}
                alt=""
                className={`project-img ${allImagesLoaded ? 'loaded' : ''}`}
              />
              <span className="project-title">{parse(title)}</span>
              <p className="project-desc">{desc}</p>
              <button
                className="project-btn"
                onClick={() => window.open(link, '_blank')}
              >
                Open
              </button>
            </div>
          </Fade>
        ))}
      </div>
      <div className="main-button">
        <button
          className="project-button"
          onClick={() => {
            navigate("/portfolio");
          }}
        >
          Explore More Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
