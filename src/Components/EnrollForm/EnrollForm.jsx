

import React, { useState, useEffect } from 'react';
import './EnrollForm.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Notification from './Notification/Notification';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',   
    phone: ''
  });
  const [enrollmentSuccess, setEnrollmentSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const spans = Array.from({ length: 50 }, (_, i) => (
    <span key={i} style={{ '--i': i }}></span>
  ));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Show toast notification indicating submission
    const toastId = toast.info("Sending data...");

    try {
      // Submit data
   
      await axios.post('http://localhost:8000/enroll', formData);
      // Update toast notification upon successful submission
      // toast.update(toastId, {
      //   render: "Enrollment Successful",
      //   type: toast.TYPE.SUCCESS,
      // });
      Swal.fire({
        icon: 'success',
        title: 'Enrollment Successful',
        text: 'You have successfully enrolled!',
      }).then(() => {
        setShowNotification(true);
        setFormData({ name: '', email: '', phone: '' });
        setTimeout(() => {
          setShowNotification(false);
        }, 5000); // Close notification after 5 seconds
      });
      
    } catch (error) {
      console.error('Error:', error);
      toast.error('Enrollment failed. Please try again.');
    }
  };



  


  const { pathName } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return (
    <>
      <Loader />
      <div className="main-form">
      
        <div className="container-enroll">
          <div className="enroll-box">
            <h2>Enrollment</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label>Name</label>
              </div>
              <div className="input-box">
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                <label>Whatsapp No</label>
              </div>
              <button type="submit" className="btn">
                Enroll Now
              </button>
            </form>
          </div>
          {spans}
        </div>

        {showNotification && <Notification />}
        <ToastContainer />
      </div>
    </>
  );
};

export default EnrollForm;

