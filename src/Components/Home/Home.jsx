import React, { useEffect } from 'react'
import Mainbody from '../Mainbody/Mainbody';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Letstalknum from '../Letstalk/Letstalknum';
// import Testimonial from '../Testimonial/Testimonial';
import { useLocation } from "react-router-dom"
import {Helmet} from "react-helmet"
import Loader from '../Loader/Loader';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import "./Home.css"



const Home = () => {
  const { pathName } = useLocation();

  const navigate = useNavigate();

  const handleEnrollmentClick = () => {
    // Handle the click action when the user clicks on the enrollment notification
    navigate("/courses");
  };
 

  const message = (
    <ul>
    <li className='i-notification' onClick={handleEnrollmentClick}>Web development Course.. <br/> <span>Enroll Now </span></li>
    </ul>
   
  );

  useEffect(() =>{
    toast.info(message, {
      autoClose: false, // Don't automatically close the notification
      closeOnClick: false, // Require the user to click the close button to dismiss
    
    });
  } ,[] );


 

  useEffect(() => {
    window.scrollTo(0, 0);
   
  }, [pathName]); 
 
  
  return (

    <div>
      
      <Loader/>
       <Helmet>
        <title>Beta Communes </title>
        <meta name="description" content=" Elevating businesses since 2022, we've crafted cutting-edge IT solutions for global success.| Transform your digital journey with us today!" />
      </Helmet>
      <Mainbody />
      <Services />
      <Projects />  
      <Letstalknum />
      {/* <Testimonial />     */}
    </div>  
  )
}

export default Home