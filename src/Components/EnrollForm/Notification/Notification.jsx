import React  from 'react'
import "./Notification.css"
import {ThreeCircles } from 'react-loader-spinner'
const Notification = () => {

 
  return (
    <div className="email-sended">
      <div>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#004AAD"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /> 
      <div>
      </div>
      
      <p style={{textAlign:"center"}}>Our team will contact you within 24 hours.</p>
      </div>
     
    </div>
  )
}

export default Notification