import React, { useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useLocation } from "react-router-dom"
import Contactvideo from "../../src/videos/contact.mp4"
import { Helmet } from 'react-helmet';
import MoonLoader from "react-spinners/MoonLoader";
import Loader from "../Components/Loader/Loader"





import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

import "./Contact.css";

const Contact = () => {


  const { pathName } = useLocation();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };









  const form = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);



  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_3poozu9', 'template_122jbau', form.current, 'UBEOeq2SLpuLBcSOZ')
      .then((result) => {
        console.log(result.text);
        setDone(true);

        setFormData({
          from_name: '',
          from_email: '',
          from_subject: '',
          message: '',
        });

        setLoading(false);
      }, (error) => {
        console.log(error.text);
        setLoading(false);
      });
  };
  return (
    <>
    <Loader/>
    <section className="contact section">
      <Helmet>
        <title>Beta Communes - Contact Us</title>
        <meta name="description" content=" Elevating businesses since 2022, we've crafted cutting-edge IT solutions for global success.| Transform your digital journey with us today!" />
      </Helmet>
      <div className="contact-video">
        {!videoLoaded && (
          <div className="spinner-container">
            <MoonLoader color="#663399" size={100} speedMultiplier={0.5} />
          </div>
        )}
        <video autoPlay loop muted className={`backgroundVideo ${videoLoaded ? 'loaded' : ''}`} onLoadedData={handleVideoLoad}>
          <source src={Contactvideo} type="video/mp4" />
        </video>
        <div className="contact-video-info">
          <h2 className="section--title">Get In <span style={{ color: "var( --blue-color" }} >Touch</span></h2>
          <p className="contact--desc">
            Feel free to get in touch with us .We are always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions..
          </p>
        </div>
      </div>
      <div className="contact--container container">
        <div className="contact--data">
          <h3 className="contact--title">Don't be Shy !</h3>
          <p className="contact--desc">
            Feel free to get in touch with us .We are always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions..
          </p>
          <div className="contact--info">
            <div className="info--item">
              <FaEnvelopeOpen className='info--icon' />
              <div>
                <span className="info--title">Mail us</span>
                <h4 className="info--desc">betacommunes@gmail.com</h4>
              </div>
            </div>
            <div className="info--item">
              <FaPhoneSquareAlt className='info--icon' />
              <div>
                <span className="info--title">Contact Us</span>
                <h4 className="info--desc">+923254543708</h4>
              </div>
            </div>
          </div>


          <div className="contact--socials">
            <a href="https://www.facebook.com/profile.php?id=61554057222085&mibextid=zLoPMf" target="_blank" className="contact--social--links">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/+923254543708" target="_blank" className="contact--social--links">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/betacommunes/" target="_blank" className="contact--social--links">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" className="contact--social--links">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <form className="contact--form" ref={form} onSubmit={sendEmail} >
          <div className="form--input-group">
            <div className="form--input-div">
              <input type="text"
                placeholder='Your Name'
                name='from_name'
                value={formData.from_name}
                onChange={handleInputChange}
                className="form--control"
              />
            </div>
            <div className="form--input-div">
              <input type="email"
                placeholder='Your Email'
                name='from_email'
                value={formData.from_email}
                onChange={handleInputChange}
                className="form--control"
              />
            </div>
            <div className="form--input-div">
              <input type="text"
                placeholder='Your Subject'
                name='from_subject'
                value={formData.from_subject}
                onChange={handleInputChange}
                className="form--control"
              />
            </div>
          </div>

          <div className="form--input-div">
            <textarea
              className="form--control textarea"
              placeholder='Your Message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button className='contact-button' type='submit' >
            {loading ? 'Sending...' : 'Send Message'}
          </button><br />
          <span >{done && <span style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", marginTop: "10px", color: "green"
            , fontWeight: "bold"
          }}>Thanks for contacting me !</span>}</span>
        </form>
      </div>
    </section>
    </>
  )
}

export default Contact   