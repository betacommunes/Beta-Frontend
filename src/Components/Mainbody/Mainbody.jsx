import React, { useEffect, useRef, useState } from 'react'
import GLOBE from 'vanta/dist/vanta.globe.min';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';










import './Mainbody.css'
const Mainbody = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null);
  const navigate = useNavigate();




  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x082777 ,
        color2: 0x04355c,
        size: 0.90,
        backgroundColor: 0xfcfcfc
       

      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])





  return (
    <div className="maincontainer" ref={vantaRef} >
      <div className="left">
        {/* <p>THINK P<span>A</span>RTNER</p><p>N<span>O</span>T AGENCY</p> */}
        <span>
          <span>
            <Typewriter
              options={{
                strings: ['BRID<span style="color: #082777;" >G</span>ING<br/> I<span style="color:  #082777 ;" >N</span>NOVATION', 'B<span  style="color:#082777;;" >U</span>ILDING<br/> COMM<span style="color: 0x#082777 ;" >U</span>NITIES'],
                autoStart: true,
                loop: true,
                cursor: '|',
                cursorSpeed: 500,
                deleteSpeed: 100,
              }}
            />
          </span>
        </span>
        <div className="content">
          <p>Elevating businesses since 2022, we've crafted cutting-edge IT solutions for global success.<br/> Transform your digital journey with us today!</p>
        </div>
        <div className="button">
          <button className="workwithus" onClick={()=> navigate('/contact')} >
          Connect for Excellence
          </button>
        </div>
      </div>




 
    </div>

  )
}

export default Mainbody