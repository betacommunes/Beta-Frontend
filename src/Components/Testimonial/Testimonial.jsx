import React from "react";
import "./Testimonial.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import profile1 from "../../img/profile1.png";
import profile2 from '../../img/profile2.png'
const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="testimonial">
      <Carousel 
      responsive={responsive}>
        <div className="xard">
          <img className="imaga1" src={profile1} alt="" />
          <h3>Sana Riaz</h3>
          <p>
            “Their ability to take my ideas and put them into this type of
            technology was phenomenal. I have a visual of what my app{" "}
          </p>
        </div>
          
        <div>
          {" "}
          <div className="xard" id="card2">
            <img className="imaga1" src={profile2} alt="" />
            <h3>Ahmad Ali</h3>
            <p>
              “Their ability to take my ideas and put them into this type of
              technology was phenomenal. I have a visual of what my app{" "}
            </p>
          </div>  
        </div>
        <div>
          {" "}
          <div className="xard">
            <img className="imaga1" src={profile1} alt="" />
            <h3>Maliha Ali</h3>
            <p>
              “Their ability to take my ideas and put them into this type of
              technology was phenomenal. I have a visual of what my app{" "}
            </p>
          </div>
        </div>
        <div>
          {" "}
          <div className="xard" id="card4">
            <img className="imaga1" src={profile2} alt="" />
            <h3>Abdullah</h3>
            <p>
              “Their ability to take my ideas and put them into this type of
              technology was phenomenal. I have a visual of what my app{" "}
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;
