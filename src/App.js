
import "./App.css"
import React , {useEffect} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contact from "../src/Contact/Contact"
import HireUs from "./Components/Hire us/HireUs"
import { BrowserRouter, Route, Routes , useNavigate } from 'react-router-dom'
import Moreprojects from './Components/moreprojects/Moreprojects'
import Courses from "./Components/Courses/Courses"
import CourseDetail from "./Components/CourseDetail/CourseDetail"  
import EnrollForm from "./Components/EnrollForm/EnrollForm"





 






const App = () => {



  

  return (

    <>

      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Moreprojects />} />
          <Route path='/hireus' element={<HireUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/coursedetail" element={<CourseDetail/>} />
          <Route path="/enrollment" element={<EnrollForm/>} />


        

        </Routes>
        <Footer />

      </BrowserRouter>


    </>

  )
}
export default App