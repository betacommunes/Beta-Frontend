import React, {useState} from "react";
import "./Photos.css";
import { team } from "../Data/Data";
import parse from "html-react-parser";
import BeatLoader from "react-spinners/BeatLoader";

const Photos = () => {
  const [imagesLoaded, setImagesLoaded] = useState([]);
  
  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => [...prev, index]);
  };

  const isImageLoaded = (index) => {
    return imagesLoaded.includes(index);
  };

  return (
    <div className="team">
      <div className="title">
        Our <span> Team</span>
      </div>
       <div className="team-content">
      {team.map(({ img, name, desc }, index) => {
        return (
          <div className="project-item" key={index}>
            {!isImageLoaded(index) && (
                <div className="spinner-container">
                  <BeatLoader color="#663399" />
                </div>
              )}
            <img src={img} alt="" 
              className={`teamproject-img ${isImageLoaded(index) ? 'loaded' : ''}`}
              onLoad={() => handleImageLoad(index)}
            />
            <span className="project-title">{parse(name)}</span>
            <p className="project-desc">{desc}</p>
          </div>
        )  
      })}
    </div> 
      {/* <div className="team-wrapper">
        <div className="team-content">
          {team.map(({ img, name, desc }, index) => {
            return (
              <div className="project-item" key={index}>
                <img src={img} alt="" className="project-img" />
                <span className="project-title">{name}</span>
                <p className="project-desc">{desc}</p>
              </div>
            )
          })}
        </div>
      </div> */}

    </div>

  );
};

export default Photos;
