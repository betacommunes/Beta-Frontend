import React, { useState } from "react";
import "./Letstalknum.css";
import { experience } from "../Data/Data";
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';
const Letstalknum = () => {

  const [countOn, setCountOn] = useState(false);

  return (
    <div className="experience">
      <div className="title">
        Innovation <span>Index</span>
      </div>
      <div className="exper-content">
        {experience.map(({ year, title, desc }, index) => {
          return (
            <div className="exper-item" key={index}>
              <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)} >
                {countOn && <h1 className="exper-year"><CountUp start={0} end={year} duration={2} /> + </h1>}
              </ScrollTrigger>
              <h3 className="exper-title">{title}</h3>
              <span className="exper-des">{desc}</span>
            </div>
          )

        })}
      </div>
    </div>
  );
};

export default Letstalknum;
