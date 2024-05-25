import React ,{ useEffect } from 'react'
import "./CourseDetail.css"
import WebBanner from "../../img/webbanner.png"
import WebBanner1 from "../../img/banner-s.png"
import Loader from "../Loader/Loader"
import Webbanner from "../../img/Webc.png"
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
import Coding from  "../../img/codingExercise.jpg"
import { useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom'


const CourseIncludes = [
  
  {
    icon: MdOutlineOndemandVideo,
    txt: "12 Hours Course"
  },
  {
    icon: FaLaptopCode,
    txt: "2+ Projects + Coding exercises"
  },
  {
    icon: FaMobileAlt,
    txt: "Access on mobile and laptop"
  },
  {
    icon: BiSupport,
    txt: "24 Hours Mentor support"
  },
  { 
    icon: GrCertificate,
    txt: "Certificate of Completeion"
  }

]

const CourseDetail = () => {
  const { pathName } = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]); 
  
  return (
    <div className="courseDetail">
      <Loader />
      <img src={WebBanner} className='banner-img' alt="" />
      <img src={WebBanner1} className='banner-img1' alt="" />
      

      <div className="details">
        <div className=" grid-item details-left"> 
          <div className="learn-details">
            <span className=' learn-title'>What you'll learn</span>
            <div className='list'>
            <li>
               <TiTick className='list-icon' />
               <span>You will learn complete basics of  front-end web development from scratch.</span>
             </li>
             <li>
              <TiTick className='list-icon' />
              <span>You will learn HTML5 & CSS3 from scratch, & build a full working website.</span>
             </li>  
             <li>
              <TiTick className='list-icon' />
              <span>You will learn Complete JavaScript + ECMA Script 6 (ES6) from scratch.</span>
             </li>
            </div>
           
            
          </div>
          <div className="coding-exercise">
          <span className=' learn-title'>Coding Exercise</span>
             <div className='coding-content'>
            <span>After every class, our dedicated mentors provide tailored exercises to reinforce your learning. 
              These exercises are designed to deepen your understanding and strengthen your skills. With personalized guidance, you'll not only grasp concepts better but also excel in applying them effectively.
               Elevate your learning experience with us!</span>
            <img src={Coding} className='coding' alt="" />
            </div>
          </div>
        </div>
        <div className=" grid-item details-right">
          <img src={Webbanner} className='card-course-img' alt="" />
          <span className='price'>Rs  1K </span>
          <div className="course-include">
            <p>This course includes: </p>
            {
              CourseIncludes.map((item, index) => (
                <div className="course-include-list" key={index}>
                  <span className='txt-icon' >  {item.icon && <item.icon />}</span>
                  <span className='txt'>{item.txt}</span>

                </div>
              ))
            }


          </div>
          <button className='course-button'
           onClick={() => navigate("/enrollment")}
          type='submit' >
                 Enroll Now
          </button>


        </div>
      </div>
    </div>
  )
}

export default CourseDetail